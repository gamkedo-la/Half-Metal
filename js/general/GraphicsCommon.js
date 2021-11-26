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
