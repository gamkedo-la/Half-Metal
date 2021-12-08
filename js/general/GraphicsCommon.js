const GAME_W = 256;
const GAME_H = 240;

const SCALED_W = 640;
const SCALED_H = 600;

function drawBitmapCenteredWithRotation(
  img,
  atX,
  atY,
  withAng,
  widthScale = 1,
  heightScale = 1
) {
  canvasContext.save();
  canvasContext.translate(atX, atY);
  canvasContext.rotate(withAng);
  canvasContext.drawImage(
    img,
    -img.width / 2,
    -img.height / 2,
    img.width * widthScale,
    img.height * heightScale
  );
  canvasContext.restore();
}

function drawBitmapCenteredWithAnimationFlip(useBitmap, atX,atY, frameW,frameH, frameNumX, frameNumY, flipHoriz, withAng){
  canvasContext.save();
  canvasContext.translate(atX, atY);
  canvasContext.rotate(withAng);
  
  if(flipHoriz){
    canvasContext.scale(-1,1);
  }
  canvasContext.drawImage(
    useBitmap,
    frameNumX*frameW, frameNumY* frameH,
    frameW,frameH,
    -frameW /2, -frameH /2,
    frameW, frameH
  );

  canvasContext.restore();
}

function colorRect(topLeftX, topLeftY, boxWidth, boxHeight, fillColor) {
  canvasContext.fillStyle = fillColor;
  canvasContext.fillRect(topLeftX, topLeftY, boxWidth, boxHeight);
}

function colorCircle(centerX, centerY, radius, fillColor) {
  canvasContext.fillStyle = fillColor;
  canvasContext.beginPath();
  canvasContext.arc(centerX, centerY, 10, 0, Math.PI * 2, true);
  canvasContext.fill();
}

function colorText(showWords, textX, textY, fillColor) {
  canvasContext.fillStyle = fillColor;
  canvasContext.fillText(showWords, textX, textY);
}

function renderFont(text, textX, textY) {
  var currentX = textX;
  var currentChar = "";

  for (var i = 0; i < text.length; i++) {
    currentChar = text[i];
    fontCharPosition = charMap[currentChar.toUpperCase()];
    if (!fontCharPosition) {
      fontCharPosition = 0;
    }
    canvasContext.drawImage(
      fontPic,
      fontCharPosition,
      0,
      8,
      8,
      currentX,
      textY,
      8,
      8
    );
    currentX += 9;
  }
}


