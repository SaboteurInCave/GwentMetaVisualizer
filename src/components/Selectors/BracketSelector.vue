<template>
    <div class="row-buttons">
        <template v-for="bracket in brackets">
            <BracketButton  :title=getBracketLocalization(bracket)
                            :id=bracket
                            :mode=mode>
            </BracketButton>
        </template>
    </div>
</template>

<script>
    import BracketButton from "../Buttons/BracketButton";
    import Utils from "../../scripts/utils";

    export default {
        name: "BracketSelector",
        components: {BracketButton},
        props: {
            brackets: Array,
            mode: Number
        },
        methods: {
            getBracketLocalization(bracket) {
                return Utils.getBracketLabel(this.$t, bracket);
            }
        }
    }
</script>

<style scoped>

</style>