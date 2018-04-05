import {leaders, factions} from '../scripts/data'
import Utils from '../scripts/utils'

const localization = {
    'en-US': {
        leaders: {
            [Utils.localization(leaders.FOLTEST)]: "King Foltest",
            [Utils.localization(leaders.RADOVID)]: "King Radovid V",
            [Utils.localization(leaders.HENSELT)]: "King Henselt",
            [Utils.localization(leaders.ADDA)]: "Princess Adda",

            [Utils.localization(leaders.EMHYR)]: "Emhyr var Emreis",
            [Utils.localization(leaders.MORVRAN)]: "Morvran Voorhis",
            [Utils.localization(leaders.CALVEIT)]: "Jan Calveit",
            [Utils.localization(leaders.USERPER)]: "Userper",

            [Utils.localization(leaders.FRANCESCA)]: "Francesca Findabair",
            [Utils.localization(leaders.EITHNE)]: "Eithn\u00e9",
            [Utils.localization(leaders.BROUVER)]: "Brouver Hoog",
            [Utils.localization(leaders.FILAVANDREL)]: "Filavandrel",

            [Utils.localization(leaders.EREDIN)]: "Eredin Br\u00e9acc Glas",
            [Utils.localization(leaders.ARACHASQUEEN)]: "Arachas Queen",
            [Utils.localization(leaders.DAGON)]: "Dagon",
            [Utils.localization(leaders.UNSEEN)]: "Unseen Elder",
            [Utils.localization(leaders.HILLOCK)]: "Whispering Hillock",

            [Utils.localization(leaders.BRAN)]: "Bran Tuirseach",
            [Utils.localization(leaders.CRACH)]: "Crach an Craite",
            [Utils.localization(leaders.HARALD)]: "Harald the Cripple",
            [Utils.localization(leaders.EIST)]: "Eist Tuirseach"
        },
        factions: {
            [Utils.localization(factions.NR)]: "Northern Realms",
            [Utils.localization(factions.NG)]: "Nilfgaard",
            [Utils.localization(factions.ST)]: "Scoia'tael",
            [Utils.localization(factions.MO)]: "Monsters",
            [Utils.localization(factions.SK)]: "Skellige"
        },
        plot: {
            brackets: {
                first: "1th bracket",
                second: "2nd bracket",
                third: "3rd bracket",
                fourth: "4th bracket"
            },
            winrate: 'Winrate (%)',
            popularity: 'Popularity (%)'
        },
        page: {
            global_title: "Leaders winrate/popularity",
            local_title: "Match-ups between leaders",
            efficiency_title: "Leaders efficiency"
        }
    },
    'ru-RU': {
        leaders: {
            [Utils.localization(leaders.FOLTEST)]: "Король Фольтест",
            [Utils.localization(leaders.RADOVID)]: "Король Радовид V",
            [Utils.localization(leaders.HENSELT)]: "Король Хенсельт",
            [Utils.localization(leaders.ADDA)]: "Принцесса Адда",

            [Utils.localization(leaders.EMHYR)]: "Эмгыр вар Эмрейс",
            [Utils.localization(leaders.MORVRAN)]: "Морвран Воорхис",
            [Utils.localization(leaders.CALVEIT)]: "Ян Кальвейт",
            [Utils.localization(leaders.USERPER)]: "Узурпатор",

            [Utils.localization(leaders.FRANCESCA)]: "Францеска Финдабаир",
            [Utils.localization(leaders.EITHNE)]: "Эитне",
            [Utils.localization(leaders.BROUVER)]: "Брувер Гоог",
            [Utils.localization(leaders.FILAVANDREL)]: "Филавандрель",

            [Utils.localization(leaders.EREDIN)]: "Эредин Бреакк Глас",
            [Utils.localization(leaders.ARACHASQUEEN)]: "Королева Главоглазов",
            [Utils.localization(leaders.DAGON)]: "Дагон",
            [Utils.localization(leaders.UNSEEN)]: "Скрытый",
            [Utils.localization(leaders.HILLOCK)]: "Шепчущий Холм",

            [Utils.localization(leaders.BRAN)]: "Бран Тиршах",
            [Utils.localization(leaders.CRACH)]: "Крах ан Крайт",
            [Utils.localization(leaders.HARALD)]: "Харальд Хромой",
            [Utils.localization(leaders.EIST)]: "Эйст Тиршах"
        },
        factions: {
            [Utils.localization(factions.NR)]: "Королевства Севера",
            [Utils.localization(factions.NG)]: "Нильфгаард",
            [Utils.localization(factions.ST)]: "Скоя'таэли",
            [Utils.localization(factions.MO)]: "Чудовища",
            [Utils.localization(factions.SK)]: "Скеллиге"
        },
        plot: {
            brackets: {
                first: "Группа #1",
                second: "Группа #2",
                third: "Группа #3",
                fourth: "Группа #4"
            },
            winrate: 'Винрейт (%)',
            popularity: 'Популярность (%)'
        },
        page: {
            global_title: "Лидеры: винрейт/популярность",
            local_title: "Матчи между лидерами",
            efficiency_title: "Эффективность лидеров"
        }
    }
};

const dateLocalization = {
    'en-US': {
        short: {
            year: 'numeric', month: 'numeric', day: 'numeric'
        }
    },
    'ru-RU': {
        short: {
            year: 'numeric', month: 'numeric', day: 'numeric'
        }
    }
};

export {localization, dateLocalization}