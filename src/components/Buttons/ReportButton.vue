<template>
    <button @click="changeReport">{{ title }}</button>
</template>

<script>
    export default {
        name: "ReportButton",
        props: {
            title: String,
            id: Number,
            mode: Number
        },
        methods: {
            changeReport: function (event) {
                this.$emit('report-changed', {report: this.id, mode: this.mode})
            }
        }
    }
</script>

<style scoped>

</style>