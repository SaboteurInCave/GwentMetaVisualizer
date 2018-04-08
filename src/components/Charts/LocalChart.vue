<template>
    <div class='local-plot'>
        <div id='plotContainerLocal' class='plot-row'>
            <canvas id='localWinrate'></canvas>
        </div>
    </div>
</template>

<script>
    import Utils from "../../scripts/utils";
    import Chart from '../../../node_modules/chart.js/src/chart'
    import '../../../node_modules/chartjs-plugin-deferred'


    export default {
        name: "LocalChart",
        props: {
            data: Array,
            meta: Object,
            bracket: Number,
            language: String
        },
        data() {
            return {
                winrateChart: null
            };
        },
        methods: {
            initPlot() {
                this.winrateChart = new Chart(document.getElementById('localWinrate').getContext('2d'), {
                    type: 'bar',
                    data: {
                        labels: Utils.getLeaderListLabels(this.$t, this.data[this.data.length - 1][this.bracket].order),
                        datasets: this.prepareDataset(this.data, this.bracket, this.meta)
                    },
                    options: {
                        responsive: true,
                        maintainAspectRatio: false,
                        scales: {
                            xAxes: [{
                                ticks: {
                                    autoSkip: false
                                }
                            }]
                        },
                        plugins: {
                            deferred: {
                                yOffset: "50%",
                            }
                        }
                    }
                });
            },
            prepareDataset(data, bracketId, metaData) {
                let dataset = [];

                let colors = Utils.getColorPallete(data.length).map(function (index) {
                    return '#' + index;
                });

                data.forEach((item, index) => (
                    dataset.push({
                        data: item[bracketId].data,
                        label: Utils.getTimeMetaRangeLocalization(this.$d, {
                            start: metaData.time[index].start,
                            end: metaData.time[index].end
                        }, metaData.ranges[index][bracketId], this.language),
                        backgroundColor: colors[index]
                    })
                ));

                return dataset;
            },
            updatePlot() {
                this.winrateChart.data.datasets = this.prepareDataset(this.data, this.bracket, this.meta);
                this.winrateChart.data.labels = Utils.getLeaderListLabels(this.$t, this.data[this.data.length - 1][this.bracket].order);
                this.winrateChart.update();
            }
        },
        mounted() {
            this.initPlot();
        },
        watch: {
            data(newValue) {
                this.data = newValue;
                if (this.bracket === 3) // becasue we always have only 4 brackets
                    this.updatePlot();
            },
            bracket(newValue) {
                this.bracket = newValue;
                this.updatePlot();
            },
            language(newValue) {
                let metaData = [];
                this.meta.time.forEach((item, index) => (metaData.push({
                    time: item,
                    ranges: this.meta.ranges[index]
                })));

                let legend = metaData.map((item) => (Utils.getTimeMetaRangeLocalization(this.$d, {start: item.time.start, end: item.time.end}, item.ranges[this.bracket], newValue)));
                let leaders = Utils.getLeaderListLabels(this.$t, this.data[this.data.length - 1][this.bracket].order);

                legend.forEach((range, index) => (this.winrateChart.data.datasets[index].label = range));
                this.winrateChart.data.labels = leaders;

                this.winrateChart.update();
            }
        }
    }
</script>

<style scoped>
    .local-plot {
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
    }

    .plot-row {
        width: 80vw;
        height: 60vh;
    }
</style>