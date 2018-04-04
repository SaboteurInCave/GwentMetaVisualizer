import Vue from 'vue'
import VueI18n from 'vue-i18n'
import App from './App.vue'

import localization from "./localization/localization";
import {factionData, factions, modes} from "./scripts/data"

Vue.config.productionTip = false;
window.Vue = Vue;

// shared data
const sharedPlugin = {
    install: function (Vue, options) {
        Vue.prototype.sharedData = {
            factions: factions,
            modes: modes,
            factionLeaders: factionData,
        }
    }
};

// localization
const i18n = new VueI18n({
    locale: 'en',
    messages: localization,
});

//Vue.use(VueI18n);
Vue.use(sharedPlugin);

new Vue({
    i18n,
    render: h => h(App),
}).$mount('#app');
