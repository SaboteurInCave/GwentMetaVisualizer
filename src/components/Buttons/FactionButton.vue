<template>
    <button @click="changeFaction">{{ title }}</button>
</template>

<script>
    export default {
        name: "FactionButton",
        props: {
            title: String,
            faction: Number,
            mode: Number
        },
        methods: {
            changeFaction: function (event) {
                this.$parent.$emit('faction-changed', {faction: this.faction, mode: this.mode});
            }
        }
    }
</script>

<style scoped>

</style>