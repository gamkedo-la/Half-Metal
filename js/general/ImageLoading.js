var playerImage = document.createElement("img");
var playerSheet = document.createElement("img");
var playerSheet_Stun = document.createElement("img");
var playerSheet_Push = document.createElement("img");
var playerSheet_Turn = document.createElement("img");
var leaperSheet = document.createElement("img");
var blockerSheet = document.createElement("img");
var shot_img = document.createElement("img");
var stun_shot_img = document.createElement("img");
var pushShotPic = document.createElement("img");
var enemyPic = document.createElement("img");
var hunterSheet = document.createElement("img");
var fontPic = document.createElement("img");
var wallDestructionSheet = document.createElement("img");
var sturdyWallDestructionSheet = document.createElement("img");
var windowDestructionSheet = document.createElement("img");
var leaperDestructionSheet = document.createElement("img");
var flyer_destruction_sheet = document.createElement("img");
var elec_wall_h = document.createElement("img");
var elec_wall_v = document.createElement("img");
var elec_wall_v_open = document.createElement("img");
var elec_wall_h_open = document.createElement("img");
var laser_h = document.createElement("img");
var laser_v = document.createElement("img");
var laser_off_h = document.createElement("img");
var laser_off_v = document.createElement("img");
var camera_spritesheet = document.createElement("img");
var push_shot_pic = document.createElement("img");
var turn_shot_pic = document.createElement("img");
var turret_spritesheet = document.createElement("img");
var wall_img = document.createElement("img");
var sturdy_wall_img = document.createElement("img");
var ground_img = document.createElement("img");
var bounce_wall = document.createElement("img");
var flyer_sheet = document.createElement("img");
var shadow = document.createElement("img");
var cell_tileset = document.createElement("img");

var worldPics = [];

var image_list = [
  // Player
  {
    var_name: playerSheet,
    file: "player_spritesheet.png",
    tile: TILE_PLAYERSTART,
    transparent_bg: true,
  },
  {
    var_name: playerSheet_Stun,
    file: "player_spritesheet_stun_ammo.png",
    transparent_bg: true,
  },
  {
    var_name: playerSheet_Push,
    file: "player_spritesheet_push_ammo.png",
    transparent_bg: true,
  },
  {
    var_name: playerSheet_Turn,
    file: "player_spritesheet_turn_ammo.png",
    transparent_bg: true,
  },

  // Enemies
  {
    var_name: leaperSheet,
    file: "leaper_spritesheet.png",
    tile: TILE_LEAPER,
    transparent_bg: true,
  },
  {
    var_name: blockerSheet,
    file: "blocker_spritesheet.png",
    tile: TILE_BLOCKER,
    transparent_bg: true,
    height: 34,
    width: 34,
  },
  {
    var_name: hunterSheet,
    file: "hunter_spritesheet.png",
    tile: TILE_HUNTER,
    transparent_bg: true,
    height: 26,
    width: 14,
  },
  {
    var_name: flyer_sheet,
    file: "flyer_spritesheet.png",
    tile: TILE_FLYER,
    transparent_bg: true,
  },
  {
    var_name: shadow,
    file: "shadow.png",
    tile: TILE_FLYER,
    transparent_bg: true,
  },

  // Shots
  {
    var_name: shot_img,
    file: "world_ammo.png",
    tile: TILE_AMMO,
    transparent_bg: true,
  },
  {
    var_name: stun_shot_img,
    file: "stun_shot.png",
    tile: TILE_STUN_SHOT,
    transparent_bg: true,
  },
  {
    var_name: push_shot_pic,
    file: "push_shot.png",
    tile: TILE_PUSH_SHOT,
    transparent_bg: true,
  },
  {
    var_name: turn_shot_pic,
    file: "turn_shot.png",
    tile: TILE_TURN_SHOT,
    transparent_bg: true,
  },

  // Hazards
  {
    var_name: laser_h,
    file: "laser_h.png",
    tile: TILE_LASER,
    transparent_bg: true,
  },
  {
    var_name: laser_v,
    file: "laser_h.png",
    transparent_bg: true,
  },
  {
    var_name: laser_off_h,
    file: "laser_off_h.png",
    transparent_bg: true,
  },
  {
    var_name: laser_off_v,
    file: "laser_off_h.png",
    transparent_bg: true,
  },
  {
    var_name: camera_spritesheet,
    file: "camera.png",
    tile: TILE_CAMERA,
    transparent_bg: true,
  },
  {
    var_name: turret_spritesheet,
    file: "turret.png",
    tile: TILE_TURRET,
    transparent_bg: true,
  },
  {
    file: "world_window_vertical.png",
    tile: TILE_WINDOW_V,
    transparent_bg: true,
  },
  {
    file: "world_window_horizontal.png",
    tile: TILE_WINDOW_H,
    transparent_bg: true,
  },
  {
    file: "world_window_smashed_horizontal.png",
    tile: TILE_WINDOW_SMASHED_H,
  },

  // Walls
  { var_name: wall_img, tile: TILE_WALL, file: "world_wall.png" },
  {
    var_name: sturdy_wall_img,
    tile: TILE_STURDY_WALL,
    file: "world_sturdy_wall.png",
  },
  {
    var_name: elec_wall_h,
    file: "elec_wall_h.png",
    tile: TILE_ELEC_WALL,
    transparent_bg: true,
    width: 32,
  },
  {
    var_name: elec_wall_h_open,
    file: "elec_wall_open_h.png",
    tile: TILE_ELEC_WALL,
    transparent_bg: true,
  },
  {
    var_name: elec_wall_v_open,
    file: "elec_wall_open_v.png",
    transparent_bg: true,
  },
  {
    var_name: elec_wall_v,
    file: "elec_wall_v.png",
    transparent_bg: true,
  },
  {
    var_name: bounce_wall,
    file: "bounce_wall.png",
    tile: TILE_BOUNCE_WALL,
    transparent_bg: false,
  },

  // Effects
  {
    var_name: windowDestructionSheet,
    file: "world_window_horizontal_sharding-spritesheet.png",
  },
  {
    var_name: wallDestructionSheet,
    file: "wall_destruction_spritesheet.png",
  },
  {
    var_name: sturdyWallDestructionSheet,
    file: "sturdy_wall_destruction_spritesheet.png",
  },
  {
    var_name: leaperDestructionSheet,
    file: "leaper_destruction_spritesheet.png",
  },
  {
    var_name: flyer_destruction_sheet,
    file: "flyer_destruction_spritesheet.png",
  },

  // ETC
  { var_name: ground_img, tile: TILE_GROUND, file: "world_ground.png" },
  { tile: TILE_GOAL, file: "world_goal.png", transparent_bg: true },
  { var_name: fontPic, file: "font.png" },
  
  // TILESETS
  { var_name: cell_tileset, file: "cell_tileset.png" },

];

var picsToLoad = 0; // set automatically based on imageList in loadImages()

function countLoadedImagesAndLaunchIfReady() {
  picsToLoad--;
  console.log(picsToLoad);
  if (picsToLoad == 0) {
    imageLoadingDoneSoStartGame();
  }
}

function beginLoadingImage(imgVar, fileName) {
  imgVar.onload = countLoadedImagesAndLaunchIfReady;
  imgVar.src = "images/" + fileName;
}

function loadImageForWorldCode(worldCode, fileName) {
  worldPics[worldCode] = document.createElement("img");
  beginLoadingImage(worldPics[worldCode], fileName);
}

function loadImages() {
  picsToLoad = image_list.length;

  for (var i = 0; i < image_list.length; i++) {
    if (image_list[i].var_name != undefined) {
      beginLoadingImage(image_list[i].var_name, image_list[i].file);
    } else {
      loadImageForWorldCode(image_list[i].tile, image_list[i].file);
    }
  }
}
