<template>
    <div id="app">
        <div style="text-align: right">
            <template v-for="language in localization.available_list">
                <LanguageSwitcherButton :code=language.code
                                        :flag=language.flag
                                        v-on:language-changed="changeLanguage"
                ></LanguageSwitcherButton>
            </template>
        </div>

        <h1 class="text-center">{{ $t('page.global_title') }}</h1>
        <div class="row-buttons">
            <template v-for="faction in sharedData.factions">
                <FactionButton :title="$t(getFactionLocalization(faction))"
                                :faction=faction
                                :mode=sharedData.modes.global
                                v-on:faction-changed="changeFaction">
                </FactionButton>
            </template>
        </div>
        <div class="row-buttons">
            <template v-for="leader in faction_list[sharedData.modes.global]">
                <LeaderButton :title="$t(getLeaderLocalization(leader))"
                              :mode=sharedData.modes.global
                              :id=leader
                               v-on:leader-changed="changeLeader">
                </LeaderButton>
            </template>
        </div>
        <h2 class="text-center">{{ $t(getLeaderLocalization(leader_id[sharedData.modes.global])) }}</h2>
        <div v-if="json_data.length > 0">
            <GlobalChart :winrate=json_data[sharedData.modes.global][leader_id[sharedData.modes.global]].winrate
                         :popularity=json_data[sharedData.modes.global][leader_id[sharedData.modes.global]].popularity
                         :meta=meta_data
                         :language=localization.language>
            </GlobalChart>
        </div>
    </div>
</template>

<script>
import Utils from './scripts/utils'
import axios from 'axios'

import FactionButton from './components/FactionButton.vue'
import LeaderButton from './components/LeaderButton.vue'
import LanguageSwitcherButton from './components/LanguageSwitcherButton.vue'

export default {
    name: 'app',
    components: {
        FactionButton,
        LeaderButton,
        LanguageSwitcherButton,
        'GlobalChart': () => import('./components/GlobalChart.vue')
    },
    data: function() {
        return {
            faction_mode: {
                [this.sharedData.modes.global]: this.sharedData.factions.NR,
                [this.sharedData.modes.local]: this.sharedData.factions.NR,
                [this.sharedData.modes.efficiency]: this.sharedData.factions.NR,
            },
            leader_id: {
                [this.sharedData.modes.global]: this.sharedData.leaders.FOLTEST,
                [this.sharedData.modes.local]: this.sharedData.leaders.FOLTEST,
                [this.sharedData.modes.efficiency]: this.sharedData.leaders.FOLTEST,
            },
            faction_list: {
                [this.sharedData.modes.global]: this.sharedData.factionLeaders[this.sharedData.factions.NR],
                [this.sharedData.modes.local]: this.sharedData.factionLeaders[this.sharedData.factions.NR],
                [this.sharedData.modes.efficiency]: this.sharedData.factionLeaders[this.sharedData.factions.NR]
            },
            json_data: [],
            meta_data: {},
            localization: {
                language: 'en-US',
                available_list: [{code: 'en-US', flag: 'us'}, {code: 'ru-RU', flag: 'ru'}]
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
        changeLanguage: function (data) {
            this.$i18n.locale = data.code;
            this.localization.language = data.code;
        },
        populateLeaderList: function (mode) {
            this.faction_list[mode] = this.sharedData.factionLeaders[this.faction_mode[mode]];
        }
    },
    mounted() {
        //console.log(this.sharedData.modes.global);
    },
    created() {
        let path = process.env.NODE_ENV === 'development' ? 'http://127.0.0.1:8081/global.json' : 'http://127.0.0.1:8080/global.json';
        axios.get(path, {headers: {
                'Content-Type': 'application/json'
            }
        })
        .then(response => {
            this.json_data = response.data.data;
            this.meta_data = {
                time: response.data.time_ranges,
                ranges: response.data.mmr_ranges
            };
        })
        .catch(e => {
            console.log(e);
        });

    },
}
</script>

<style>
    .text-center {
        text-align: center;
    }

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
    .parallel-divs {
        display: -webkit-box;
        display: -moz-box;
        display: -ms-flexbox;
        display: -webkit-flex;
        display: flex;
        justify-content: center;
        align-items: center;
    }



</style>
