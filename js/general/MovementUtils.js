function moveInOwnDirection(object) {
  object.x += object.speed * Math.cos((object.direction * Math.PI) / 180);
  object.y += object.speed * Math.sin((object.direction * Math.PI) / 180);
}

function moveInGivenDirection(object, direction) {
  object.x += object.speed * Math.cos((direction * Math.PI) / 180);
  object.y += object.speed * Math.sin((direction * Math.PI) / 180);
}

function reverseDirection(object) {
  object.direction = (object.direction + 90) % 360;
}

function applyVector(object, vector) {
  object.x += vector.magnitude * Math.cos((vector.direction * Math.PI) / 180);
  object.y += vector.magnitude * Math.sin((vector.direction * Math.PI) / 180);
}
