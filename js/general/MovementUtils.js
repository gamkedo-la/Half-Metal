function moveInOwnDirection(object) {
  object.x += object.speed * Math.cos((object.direction * Math.PI) / 180);
  object.y += object.speed * Math.sin((object.direction * Math.PI) / 180);
}

function moveInGivenDirection(object, direction) {
  object.x += object.speed * Math.cos((direction * Math.PI) / 180);
  object.y += object.speed * Math.sin((direction * Math.PI) / 180);
}

function reverseDirection(object) {
  object.direction = (object.direction + 180) % 360;
  object.direction = (object.direction + 360) % 360;
}

function strafe(object) {
  object.x += object.speed * Math.sin((object.direction * Math.PI) / 180);
  object.y += object.speed * Math.cos((object.direction * Math.PI) / 180);
}

function applyVector(object, vector) {
  object.x += vector.magnitude * Math.cos((vector.direction * Math.PI) / 180);
  object.y += vector.magnitude * Math.sin((vector.direction * Math.PI) / 180);
}

function getFlatArc(input, delay, amplitude) {
  return (
    Math.sqrt(
      (1 + Math.pow(delay, 2)) /
        (1 + Math.pow(delay, 2) * Math.pow(Math.cos(input), 2))
    ) *
    Math.cos(input) *
    amplitude
  );
}
