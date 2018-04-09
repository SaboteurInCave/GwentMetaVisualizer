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
        <FactionLeaderSelector :mode=sharedData.modes.global
                               :factions=sharedData.factions
                               :leaders=faction_list[sharedData.modes.global]
                               v-on:faction-changed="changeFaction"
                               v-on:leader-changed="changeLeader">
        </FactionLeaderSelector>

        <h2 class="text-center">{{ $t(getLeaderLocalization(leader_id[sharedData.modes.global])) }}</h2>
        <div v-if="json_data.length > 0">
            <GlobalChart :winrate=json_data[sharedData.modes.global][leader_id[sharedData.modes.global]].winrate
                         :popularity=json_data[sharedData.modes.global][leader_id[sharedData.modes.global]].popularity
                         :meta=meta_data
                         :language=localization.language>
            </GlobalChart>
        </div>

        <hr>

        <h1 class="text-center">{{ $t('page.local_title') }}</h1>
        <FactionLeaderSelector :mode=sharedData.modes.local
                               :factions=sharedData.factions
                               :leaders=faction_list[sharedData.modes.local]
                               v-on:faction-changed="changeFaction"
                               v-on:leader-changed="changeLeader">
        </FactionLeaderSelector>

        <div>
            <h2 class="text-center">{{ $t(getLeaderLocalization(leader_id[sharedData.modes.local])) + ' - ' +  getBracketLabel(state[sharedData.modes.local].bracket) }}</h2>
            <div v-if="json_data.length > 0">
                <LocalChart :data=json_data[sharedData.modes.local][leader_id[sharedData.modes.local]]
                            :bracket=state[sharedData.modes.local].bracket
                            :meta=meta_data
                            :language=localization.language
                ></LocalChart>
            </div>
        </div>

        <BracketSelector :mode=sharedData.modes.local
                         :brackets=brackets
                         v-on:bracket-changed="changeBracket">

        </BracketSelector>

    </div>
</template>

<script>
import Utils from './scripts/utils'
import axios from 'axios'

import LanguageSwitcherButton from './components/Buttons/LanguageSwitcherButton.vue'
import FactionLeaderSelector from './components/Selectors/FactionLeaderSelector.vue'
import BracketSelector from "./components/Selectors/BracketSelector";

export default {
    name: 'app',
    components: {
        LanguageSwitcherButton,
        FactionLeaderSelector,
        BracketSelector,
        // load chart components only we need it because a they contain a massive amount of data
        'GlobalChart': () => import('./components/Charts/GlobalChart.vue'),
        'LocalChart': () => import('./components/Charts/LocalChart.vue'),
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
            state: {
                [this.sharedData.modes.local]: {
                    bracket: this.sharedData.brackets.FOURTH
                }
            },
            brackets: this.getBrackets(),
            json_data: [],
            meta_data: {},
            localization: {
                language: 'en-US',
                available_list: [{code: 'en-US', flag: 'us'}, {code: 'ru-RU', flag: 'ru'}]
            }

        }
    },
    methods: {
        getLeaderLocalization(leader) {
            return Utils.getLeaderLocalization(leader);
        },
        getBracketLabel(bracket) {
            return Utils.getBracketLabel(this.$t, bracket);
        },
        getBrackets() {
            return [this.sharedData.brackets.FIRST, this.sharedData.brackets.SECOND, this.sharedData.brackets.THIRD, this.sharedData.brackets.FOURTH];
        },
        changeLeader: function (data) {
            this.leader_id[data.mode] = data['leader'];

            if (data.mode === this.sharedData.modes.local)
                this.state[data.mode].bracket = this.sharedData.brackets.FOURTH;
        },
        changeFaction: function (data) {
            this.faction_mode[data.mode] = data.faction;
            this.populateLeaderList(data.mode);
        },
        changeLanguage: function (data) {
            this.$i18n.locale = data.code;
            this.localization.language = data.code;
        },
        changeBracket(data) {
            this.state[data.mode].bracket = data.bracket;
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

            this.meta_data.ranges.forEach((item, index) => {
               while (item.length < 4) {
                   item.unshift({Min: null, Max: null});
               }
            });
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


    .parallel-divs {
        display: -webkit-box;
        display: -moz-box;
        display: -ms-flexbox;
        display: -webkit-flex;
        display: flex;
        justify-content: center;
        align-items: center;
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

</style>
