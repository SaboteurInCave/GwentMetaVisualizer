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

let Utils = {
    localization: function (id) {
        return 'id_' + id;
    },
    getBracketLabels: function (t) {
        return ['first', 'second', 'third', 'fourth'].map((chunk) => t('plot.brackets.' + chunk));
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
    getColorPallete: function (size) {
        return colors[size - 1];
    }
};

export default Utils;