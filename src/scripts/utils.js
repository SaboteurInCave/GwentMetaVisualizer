// colors was taken from google palette
const colors = [
    ['4477aa'],
    ['4477aa', 'cc6677'],
    ['4477aa', 'ddcc77', 'cc6677'],
    ['4477aa', '117733', 'ddcc77', 'cc6677'],
    ['332288', '88ccee', '117733', 'ddcc77', 'cc6677'],
    ['332288', '88ccee', '117733', 'ddcc77', 'cc6677', 'aa4499'],
    ['332288', '88ccee', '44aa99', '117733', 'ddcc77', 'cc6677', 'aa4499'],
    ['332288', '88ccee', '44aa99', '117733', '999933', 'ddcc77', 'cc6677',
        'aa4499'],
    ['332288', '88ccee', '44aa99', '117733', '999933', 'ddcc77', 'cc6677',
        '882255', 'aa4499'],
    ['332288', '88ccee', '44aa99', '117733', '999933', 'ddcc77', '661100',
        'cc6677', '882255', 'aa4499'],
    ['332288', '6699cc', '88ccee', '44aa99', '117733', '999933', 'ddcc77',
        '661100', 'cc6677', '882255', 'aa4499'],
    ['332288', '6699cc', '88ccee', '44aa99', '117733', '999933', 'ddcc77',
        '661100', 'cc6677', 'aa4466', '882255', 'aa4499']
];

const brackets = ['first', 'second', 'third', 'fourth'];

let Utils = {
    // localization
    localization: function (id) {
        return 'id_' + id;
    },

    getBracketLabels: function (t) {
        return brackets.map((chunk) => t('plot.brackets.' + chunk));
    },
    getBracketLabel(t, bracket) {
        return t('plot.brackets.' + brackets[bracket]);
    },
    getWinrateTitleLabel: function (t) {
        return t('plot.winrate');
    },
    getPopularityTitleLabel: function (t) {
        return t('plot.popularity');
    },
    getLeaderTitle: function (t, leader) {
        return t('leaders.' + leader);
    },
    getLeaderListLabels(t, leaders) {
      return leaders.map((leader) => (t(this.getLeaderLocalization(leader))));
    },

    getFactionLocalization: function (faction) {
        return 'factions.' + this.localization(faction);
    },
    getLeaderLocalization: function (leader) {
        return 'leaders.' + this.localization(leader);
    },
    getTimeRangeLocalization(d, start, end, language) {
        return d(new Date(start), 'short', language) + ' - ' + d(new Date(end), 'short', language);
    },
    getTimeMetaRangeLocalization(d, time, metaRange, language) {
        return this.getTimeRangeLocalization(d, time.start, time.end, language) + ' (' + metaRange.Min + ' - ' + metaRange.Max + ')';
    },

    // color pallets
    getColorPallete: function (size) {
        return colors[size - 1];
    },
};

export default Utils;