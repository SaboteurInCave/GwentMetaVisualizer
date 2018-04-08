<template>
    <div>
        <div class="row-buttons">
            <template v-for="faction in factions">
                <FactionButton  :title="$t(getFactionLocalization(faction))"
                                :faction=faction
                                :mode=mode>
                </FactionButton>
            </template>
        </div>
        <div class="row-buttons">
            <template v-for="leader in leaders">
                <LeaderButton :title="$t(getLeaderLocalization(leader))"
                              :mode=mode
                              :id=leader>
                </LeaderButton>
            </template>
        </div>
    </div>
</template>

<script>

    import FactionButton from '../Buttons/FactionButton.vue'
    import LeaderButton from '../Buttons/LeaderButton.vue'
    import Utils from "../../scripts/utils";

    export default {
        name: "FactionLeaderSelector",
        components: {
            FactionButton, LeaderButton
        },
        props: {
            mode: Number,
            factions: Object,
            leaders: Array
        },

        methods: {
            getFactionLocalization: function (faction) {
                return Utils.getFactionLocalization(faction);
            },
            getLeaderLocalization: function (leader) {
                return Utils.getLeaderLocalization(leader);
            }
        }

    }
</script>

<style scoped>

</style>