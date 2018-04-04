<template>
    <button @click="changeBracket">{{ title }}</button>
</template>

<script>
    export default {
        name: "BracketButton",
        props: {
            title: String,
            id: Number,
            mode: Number
        },
        methods: {
            changeBracket: function (event) {
                this.$emit('bracket-changed', {bracket: this.id, mode: this.mode})
            }
        }
    }
</script>

<style scoped>

</style>