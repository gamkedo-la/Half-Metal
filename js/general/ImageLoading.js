var playerImage = document.createElement("img");
var playerSheet = document.createElement("img");
var leaperSheet = document.createElement("img");
var bulletPic = document.createElement("img");
var stunShotPic = document.createElement("img");
var enemyPic = document.createElement("img");
var fontPic = document.createElement("img");
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
    { varName: leaperSheet, theFile: "leaper_spritesheet.png" },
    { varName: bulletPic, theFile: "world_ammo.png" },
    { varName: stunShotPic, theFile: "stun_shot.png" },
    { varName: enemyPic, theFile: "enemy.png" },
    { varName: fontPic, theFile: "font.png" },

    { worldType: TILE_GROUND, theFile: "world_ground.png" },
    { worldType: TILE_WALL, theFile: "world_wall.png" },
    { worldType: TILE_STURDY_WALL, theFile: "world_sturdy_wall.png" },
    { worldType: TILE_GOAL, theFile: "world_goal.png" },
    { worldType: TILE_AMMO, theFile: "world_ammo.png" },
    { worldType: TILE_STUN_SHOT, theFile: "stun_shot.png" },
    { worldType: TILE_DOOR, theFile: "world_door.png" },
    { worldType: TILE_WINDOW_V, theFile: "world_window_vertical.png" },
    { worldType: TILE_WINDOW_H, theFile: "world_window_horizontal.png" },
    { worldType: TILE_WINDOW_SMASHED_H, theFile: "world_window_smashed_horizontal.png" },
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
