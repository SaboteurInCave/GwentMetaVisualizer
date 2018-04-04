<template>
    <button @click="changeLeader">{{ title }}</button>
</template>

<script>
    export default {
        name: "LeaderButton",
        props: {
            title: String,
            mode: Number,

        },
        methods: {
            changeLeader: function (event) {
                this.$emit('leader-changed', {leader: this.title, mode: this.mode})
            }
        }
    }
</script>

<style scoped>

</style>