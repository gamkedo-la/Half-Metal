
function BaseLevelClass() {
    this.level_map = [];
    this.starting_ammo = 0;
    this.configuration_prototype = {
        direction: 0,
        orientation: VERTICAL,
        type: "",
        state: NORMAL,
    };
    this.enemy_configurations = [];
    this.hazard_configurations = [];
    this.wall_configurations = [];
    this.name = "";
    this.tileset = CELLS;
}


const baseLevel = [
    0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
    0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
    0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
    0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
    0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
    0,0,0,0,0,0,0,2,0,0,0,0,0,0,0,0,
    0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
    0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
    0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
    0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
    0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
    0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
    0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
];

const levelOne = [
    1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,
    1,0,0,0,0,6,0,0,0,0,0,0,0,0,0,1,
    1,0,0,20,0,0,0,0,0,0,0,0,0,0,0,1,
    1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,
    1,0,0,0,0,0,0,0,0,0,20,0,0,0,0,1,
    1,0,0,0,0,0,0,2,0,0,0,0,0,0,0,1,
    1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,
    1,0,0,0,0,0,0,0,0,4,0,0,0,0,0,1,
    1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,
    1,0,0,0,0,0,0,0,0,4,0,0,0,0,0,1,
    1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,
    1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,
    1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,
];

const levelTwo = [
    1,1,1,1,10,1,1,1,1,1,1,1,1,1,1,1,
    1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,
    1,0,6,0,0,0,0,0,0,0,0,0,0,0,0,1,
    1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,
    1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,
    1,0,0,0,0,0,0,2,0,0,0,0,0,0,0,1,
    1,0,0,0,0,0,0,0,0,12,0,0,0,0,0,1,
    1,0,0,0,6,0,0,0,0,4,0,0,0,0,0,1,
    1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,
    1,0,0,0,0,0,0,0,0,4,0,0,0,0,0,1,
    1,0,0,0,0,0,0,0,0,0,0,0,6,0,0,1,
    1,0,0,0,0,0,0,0,0,0,0,0,0,13,0,1,
    1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,
];

const levelOneConfig = {
    level_map: levelOne,
    starting_ammo:100,
    enemies: [{direction: 180}, {direction: 90}],
};

const levelTwoConfig = {
    level_map: levelTwo,
    starting_ammo:100,
    enemies: [{direction: 90}, {direction: 180}, {direction: 90}],
};

const levels = [levelOneConfig, levelTwoConfig];

currentLevel = 0;