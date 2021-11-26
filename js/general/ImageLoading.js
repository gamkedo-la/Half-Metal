var playerImage = document.createElement("img");
var bulletPic = document.createElement("img");
var enemyPic = document.createElement("img");
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
    { varName: bulletPic, theFile: "world_ammo.png" },
    { varName: enemyPic, theFile: "enemy.png" },

    { worldType: TILE_GROUND, theFile: "world_ground.png" },
    { worldType: TILE_WALL, theFile: "world_wall.png" },
    { worldType: TILE_IRON_WALL, theFile: "world_iron_wall.png" },
    { worldType: TILE_GOAL, theFile: "world_goal.png" },
    { worldType: TILE_AMMO, theFile: "world_ammo.png" },
    { worldType: TILE_DOOR, theFile: "world_door.png" },
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
