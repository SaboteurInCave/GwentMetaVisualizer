<template>
    <div class="parallel-divs">
        <div class='chart-div' style='padding-right: 30px; height:40vh; width: 40vw'>
            <canvas id='globalWinrate'></canvas>
        </div>
        <div class='chart-div' style='height:40vh; width: 40vw'>
            <canvas id='globalPopularity'></canvas>
        </div>
    </div>
</template>

<script>
    import Utils from "../../scripts/utils";
    import Chart from '../../../node_modules/chart.js/src/chart'
    import '../../../node_modules/chartjs-plugin-deferred'

    export default {
        name: "GlobalChart",
        props: {
            winrate: Array,
            popularity: Array,
            meta: Object,
            language: String
        },
        data: function () {
            return {
                winrateChart: null,
                popularityChart: null
            }
        },
        methods: {
            initPlot() {
                let labels = Utils.getBracketLabels(this.$t);

                let data = [{
                    contex: 'globalWinrate',
                    storage: 'winrateChart',
                    dataset: this.winrate,
                    title: Utils.getWinrateTitleLabel(this.$t)
                }, {
                    contex: 'globalPopularity',
                    storage: 'popularityChart',
                    dataset: this.popularity,
                    title: Utils.getPopularityTitleLabel(this.$t)
                }];

                data.forEach((item) => (this[item.storage] = new Chart(document.getElementById(item.contex).getContext('2d'), {
                    type: 'line',
                    data: {
                        labels: labels,
                        datasets: this.prepareDataset(item.dataset, this.meta)
                    },
                    options: {
                        responsive: true,
                        maintainAspectRatio: false,
                        title: {text: item.title, display: true, fontSize: 16},
                        plugins: {
                            deferred: {
                                yOffset: "50%",
                            }
                        }
                    }
                })));
            },
            prepareDataset(data, metaData) {
                let dataset = [];

                let colors = Utils.getColorPallete(data.length).map(function (index) {
                    return '#' + index;
                });

                data.forEach((item, index) => dataset.push({
                    data: item,
                    label: Utils.getTimeRangeLocalization(this.$d, metaData.time[index].start, metaData.time[index].end, this.language),
                    fill: false,
                    backgroundColor: colors[index],
                    borderColor: colors[index],
                    pointStyle: 'rectRot',
                    pointRadius: 10,
                    pointHoverRadius: 10
                }));

                return dataset;
            },
        },
        mounted: function () {
            this.initPlot();
        },
        watch: {
            winrate: function (newValue, oldValue) {
                this.winrateChart.data.datasets = this.prepareDataset(newValue, this.meta);
                this.winrateChart.update();
            },
            popularity: function (newValue, oldValue) {
                this.popularityChart.data.datasets = this.prepareDataset(newValue, this.meta);
                this.popularityChart.update();
            },
            language(newValue, oldValue) {
                let storage = [{
                    storage: 'winrateChart',
                    title: Utils.getWinrateTitleLabel(this.$t),
                    legendLabels: this.meta.time.map((item) => (this.$d(new Date(item.start), 'short', newValue) + ' - ' + this.$d(new Date(item.end), 'short', newValue)))
                }, {
                    storage: 'popularityChart',
                    title: Utils.getPopularityTitleLabel(this.$t),
                    legendLabels: this.meta.time.map((item) => (this.$d(new Date(item.start), 'short', newValue) + ' - ' + this.$d(new Date(item.end), 'short', newValue)))
                }];

                let labels = Utils.getBracketLabels(this.$t);

                storage.forEach((item) => {
                    let storage = this[item.storage];
                    item.legendLabels.forEach((legend, index) => (
                        storage.data.datasets[index].label = legend
                    ));
                    storage.options.title.text = item.title;
                    storage.data.labels = labels;
                    storage.update();
                });
            }
        }
    }
</script>

<style scoped>

</style>