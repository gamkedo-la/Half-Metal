/* 

Check for collision between two objects
if their x and y positions overlap within 
height and width boundaries 

*/
function collisionDetected(
  obj_a = { x: 0, y: 0, w: 0, h: 0 },
  obj_b = { x: 0, y: 0, w: 0, h: 0 }
) {
  if (
    obj_a.x < obj_b.x + obj_b.w &&
    obj_a.x + obj_a.w > obj_b.x &&
    obj_a.y < obj_b.y + obj_b.h &&
    obj_a.y + obj_a.h > obj_b.y
  ) {
    console.log("COLLISION DETECTED");
    return true;
  }

  return false;
}
