<template>
    <div id="app">
        <div class="row-buttons">
            <template v-for="faction in sharedData.factions">
                <faction-button :title="$t(getFactionLocalization(faction))"
                                :faction=faction
                                :mode=sharedData.modes.global
                                v-on:faction-changed="changeFaction">
                </faction-button>
            </template>
        </div>
        <div class="row-buttons">
            <template v-for="leader in faction_list[sharedData.modes.global]">
                <leader-button :title="$t(getLeaderLocalization(leader))"
                               :mode=sharedData.modes.global
                               v-on:leader-changed="changeLeader">
                </leader-button>
            </template>
        </div>
    </div>
</template>

<script>
import Utils from './scripts/utils'

export default {
    name: 'app',
    components: {
        'FactionButton': () => import('./components/FactionButton.vue'),
        'LeaderButton': () => import('./components/LeaderButton.vue'),
    },
    data: function () {
        return {
            faction_mode: {
                [this.sharedData.modes.global]: this.sharedData.factions.NR,
                [this.sharedData.modes.local]: this.sharedData.factions.NR,
                [this.sharedData.modes.efficiency]: this.sharedData.factions.NR,
            },
            leader_id: {
                [this.sharedData.modes.global]: this.sharedData.factions.NR,
                [this.sharedData.modes.local]: this.sharedData.factions.NR,
                [this.sharedData.modes.efficiency]: this.sharedData.factions.NR,
            },
            faction_list: {
                [this.sharedData.modes.global]: this.sharedData.factionLeaders[this.sharedData.factions.NR],
                [this.sharedData.modes.local]: this.sharedData.factionLeaders[this.sharedData.factions.NR],
                [this.sharedData.modes.efficiency]: this.sharedData.factionLeaders[this.sharedData.factions.NR]
            }
        }
    },
    methods: {
        getFactionLocalization: function (faction) {
            return 'factions.' + Utils.localization(faction);
        },
        getLeaderLocalization: function (leader) {
            return 'leaders.' + Utils.localization(leader);
        },
        changeLeader: function (data) {
            this.leader_id[data.mode] = data['leader'];
        },
        changeFaction: function (data) {
            this.faction_mode[data.mode] = data.faction;
            this.populateLeaderList(data.mode);
        },
        populateLeaderList: function (mode) {
            this.faction_list[mode] = this.sharedData.factionLeaders[this.faction_mode[mode]];
        },
    },
    mounted: function () {
        //console.log(this.sharedData.modes.global);
    }
}
</script>

<style>
.row-buttons {
    width: 30%;
    display: flex;
    flex-direction: row;
    display: -webkit-box;
    display: -moz-box;
    display: -ms-flexbox;
    display: -webkit-flex;

    justify-content: space-between;
    align-items: center;
    margin: 25px auto 50px auto;
}
</style>
