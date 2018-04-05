<template>
    <button @click="changeLeader">{{ title }}</button>
</template>

<script>
    export default {
        name: "LeaderButton",
        props: {
            title: String,
            id: Number,
            mode: Number,

        },
        methods: {
            changeLeader: function (event) {
                this.$emit('leader-changed', {leader: this.id, mode: this.mode})
            }
        }
    }
</script>

<style scoped>

</style>