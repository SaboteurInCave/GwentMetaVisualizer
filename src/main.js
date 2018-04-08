import Vue from 'vue'
import VueI18n from 'vue-i18n'
import App from './App.vue'

import {localization, dateLocalization} from "./localization/localization"
import {factionData, factions, leaders, modes, brackets} from "./scripts/data"

Vue.config.productionTip = false;
window.Vue = Vue;

// shared data
const sharedPlugin = {
    install: function (Vue) {
        Vue.prototype.sharedData = {
            factions: factions,
            modes: modes,
            factionLeaders: factionData,
            leaders: leaders,
            brackets: brackets
        }
    }
};

// localization
const i18n = new VueI18n({
    locale: 'en-US',
    messages: localization,
    dateTimeFormats: dateLocalization
});

//Vue.use(VueI18n);
Vue.use(sharedPlugin);

new Vue({
    i18n,
    render: h => h(App),
}).$mount('#app');
