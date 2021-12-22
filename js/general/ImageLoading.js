var playerImage = document.createElement("img");
var playerSheet = document.createElement("img");
var playerSheet_Stun = document.createElement("img");
var playerSheet_Push = document.createElement("img");
var playerSheet_Turn = document.createElement("img");
var leaperSheet = document.createElement("img");
var blockerSheet = document.createElement("img");
var bulletPic = document.createElement("img");
var stunShotPic = document.createElement("img");
var pushShotPic = document.createElement("img");
var enemyPic = document.createElement("img");
var hunterSheet = document.createElement("img");
var fontPic = document.createElement("img");
var wallDestructionSheet = document.createElement("img");
var sturdyWallDestructionSheet = document.createElement("img");
var windowDestructionSheet = document.createElement("img");
var leaperDestructionSheet = document.createElement("img");
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

var worldPics = [];

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
  var imageList = [
    { varName: playerImage, theFile: "player.png" },
    { varName: playerSheet, theFile: "player_spritesheet.png" },
    { varName: playerSheet_Stun, theFile: "player_spritesheet_stun_ammo.png" },
    { varName: playerSheet_Push, theFile: "player_spritesheet_push_ammo.png" },
    { varName: playerSheet_Turn, theFile: "player_spritesheet_turn_ammo.png" },
    { varName: leaperSheet, theFile: "leaper_spritesheet.png" },
    { varName: blockerSheet, theFile: "blocker_spritesheet.png" },
    { varName: bulletPic, theFile: "world_ammo.png" },
    { varName: stunShotPic, theFile: "stun_shot.png" },
    { varName: push_shot_pic, theFile: "push_shot.png" },
    { varName: turn_shot_pic, theFile: "turn_shot.png" },
    { varName: enemyPic, theFile: "enemy.png" },
    { varName: hunterSheet, theFile: "hunter_spritesheet.png" },
    { varName: fontPic, theFile: "font.png" },
    {
      varName: wallDestructionSheet,
      theFile: "wall_destruction_spritesheet.png",
    },
    {
      varName: sturdyWallDestructionSheet,
      theFile: "sturdy_wall_destruction_spritesheet.png",
    },
    {
      varName: leaperDestructionSheet,
      theFile: "leaper_destruction_spritesheet.png",
    },
    { varName: elec_wall_h, theFile: "elec_wall_h.png" },
    { varName: elec_wall_h_open, theFile: "elec_wall_open_h.png" },
    { varName: elec_wall_v_open, theFile: "elec_wall_open_v.png" },
    { varName: elec_wall_v, theFile: "elec_wall_v.png" },
    { varName: laser_h, theFile: "laser_h.png" },
    { varName: laser_v, theFile: "laser_h.png" },
    { varName: laser_off_h, theFile: "laser_off_h.png" },
    { varName: laser_off_v, theFile: "laser_off_h.png" },
    { varName: camera_spritesheet, theFile: "camera.png" },
    { varName: turret_spritesheet, theFile: "turret.png" },
    {
      varName: windowDestructionSheet,
      theFile: "world_window_horizontal_sharding-spritesheet.png",
    },

    { worldType: TILE_GROUND, theFile: "world_ground.png" },
    { worldType: TILE_WALL, theFile: "world_wall.png" },
    { worldType: TILE_STURDY_WALL, theFile: "world_sturdy_wall.png" },
    { worldType: TILE_GOAL, theFile: "world_goal.png" },
    { worldType: TILE_AMMO, theFile: "world_ammo.png" },
    { worldType: TILE_PUSH_SHOT, theFile: "push_shot.png" },
    { worldType: TILE_STUN_SHOT, theFile: "stun_shot.png" },
    { worldType: TILE_TURN_SHOT, theFile: "turn_shot.png" },
    { worldType: TILE_DOOR, theFile: "world_door.png" },
    { worldType: TILE_WINDOW_V, theFile: "world_window_vertical.png" },
    { worldType: TILE_WINDOW_H, theFile: "world_window_horizontal.png" },
    {
      worldType: TILE_WINDOW_SMASHED_H,
      theFile: "world_window_smashed_horizontal.png",
    },
  ];

  picsToLoad = imageList.length;

  for (var i = 0; i < imageList.length; i++) {
    if (imageList[i].varName != undefined) {
      beginLoadingImage(imageList[i].varName, imageList[i].theFile);
    } else {
      loadImageForWorldCode(imageList[i].worldType, imageList[i].theFile);
    }
  }
}
