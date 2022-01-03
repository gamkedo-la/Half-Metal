
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
    1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,
    1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,
    1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,
    1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,
    1,0,0,0,0,0,0,2,0,0,0,0,0,0,0,1,
    1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,
    1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,
    1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,
    1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,
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

function generateRandomLevel(w=16,h=13) {
    console.log("Generating a random "+w+"x"+h+" level...");
    let x,y;
    let levelData = [];
    
    for (y=0; y<h; y++) {
        for (x=0; x<w; x++) {
            
            // usually empty floor
            levelData[x*y] = TILE_GROUND;
            
            // scatter random blocks
            if (Math.random()<0.1) {
                levelData[x*y] = TILE_WALL;
            }

            // outside edges are always wals
            if (y==0 || y==h-1 || x==0 || x==w-1) {
                levelData[x*y] = TILE_WALL;
            }
        }
    }

    // one of each important tile
    x = 1+Math.floor(Math.random()*(w-2));
    y = 1+Math.floor(Math.random()*(h-2));
    levelData[x*y] = TILE_PLAYERSTART;

    x = 1+Math.floor(Math.random()*(w-2));
    y = 1+Math.floor(Math.random()*(h-2));
    levelData[x*y] = TILE_GOAL;

    // select a gameplay tile in range
    t = TILE_AMMO+Math.floor(Math.random()*(TILE_FLYER-TILE_AMMO));
    x = 1+Math.floor(Math.random()*(w-2));
    y = 1+Math.floor(Math.random()*(h-2));
    levelData[x*y] = t;
    t = TILE_AMMO+Math.floor(Math.random()*(TILE_FLYER-TILE_AMMO));
    x = 1+Math.floor(Math.random()*(w-2));
    y = 1+Math.floor(Math.random()*(h-2));
    levelData[x*y] = t;
    t = TILE_AMMO+Math.floor(Math.random()*(TILE_FLYER-TILE_AMMO));
    x = 1+Math.floor(Math.random()*(w-2));
    y = 1+Math.floor(Math.random()*(h-2));
    levelData[x*y] = t;
    t = TILE_AMMO+Math.floor(Math.random()*(TILE_FLYER-TILE_AMMO));
    x = 1+Math.floor(Math.random()*(w-2));
    y = 1+Math.floor(Math.random()*(h-2));
    levelData[x*y] = t;

    return levelData;
}