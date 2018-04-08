import Enumeration from "./enum";

const modes = new Enumeration({
    global: 0,
    local: 1,
    efficiency: 2
});

const factions = new Enumeration({
    NR: 0,
    NG: 1,
    ST: 2,
    MO: 3,
    SK: 4
});

const leaders = new Enumeration({
    FOLTEST:        0,
    RADOVID:        1,
    HENSELT:        2,
    ADDA:           3,

    EMHYR:          10,
    MORVRAN:        11,
    CALVEIT:        12,
    USERPER:        13,

    FRANCESCA:      20,
    EITHNE:         21,
    BROUVER:        22,
    FILAVANDREL:    23,

    EREDIN:         30,
    ARACHASQUEEN:   31,
    DAGON:          32,
    UNSEEN:         33,
    HILLOCK:        34,

    BRAN:           40,
    CRACH:          41,
    HARALD:         42,
    EIST:           43
});

const factionData = {
    // FractionId -> [leaderId_0, leaderId_1, ... leaderId_N]
    [factions.NR]: [leaders.FOLTEST, leaders.RADOVID, leaders.HENSELT, leaders.ADDA],
    [factions.NG]: [leaders.EMHYR, leaders.MORVRAN, leaders.CALVEIT, leaders.USERPER],
    [factions.ST]: [leaders.FRANCESCA, leaders.EITHNE, leaders.BROUVER, leaders.FILAVANDREL],
    [factions.MO]: [leaders.EREDIN, leaders.ARACHASQUEEN, leaders.DAGON, leaders.UNSEEN, leaders.HILLOCK],
    [factions.SK]: [leaders.BRAN, leaders.CRACH, leaders.HARALD, leaders.EIST]
};

const brackets = new Enumeration({
    FIRST: 0,
    SECOND: 1,
    THIRD: 2,
    FOURTH: 3,
});

export {factions, leaders, factionData, modes, brackets}