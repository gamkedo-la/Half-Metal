// SHOT TYPES
const NORMAL = "normal_shot";
const STUN = "stun";
const PUSH = "push";
const TURN = "turn";
const SHOTS = [NORMAL, STUN, PUSH, TURN];

// WALL TYPES
const NORMAL_WALL = "normal_wall";
const STURDY = "sturdy";
const BOUNCE = "bounce";
const ELECTRIC = "electric";
const WALLS = [NORMAL_WALL, STURDY, BOUNCE, ELECTRIC];

// GAME OBJECT STATES
const SHOOTING = "shooting";
const MOVING = "moving";
const IDLE = "idle";
const ALERT = "alert";
const STUNNED = "stunned";
const PUSHED = "pushed";
const CLOSED = "closed";
const OPEN = "open";
const PRESSED = "pressed";
const UNPRESSED = "unpressed";
const ON = "on";
const OFF = "off";
const ASCENDED = "ascend";
const DESCENDED = "descend";
const STATES = [
  SHOOTING,
  MOVING,
  IDLE,
  ALERT,
  STUNNED,
  PUSHED,
  CLOSED,
  OPEN,
  UNPRESSED,
  PRESSED,
  ON,
  OFF,
  ASCENDED,
  DESCENDED,
];

// TILESET CONSTANTS
const CELLS = "cells";
const ARMORY = "armory";
const PROCESSING_CENTER = "processing_center";
const COURTYARD = "courtyard";
const TILESETS = [CELLS, ARMORY, PROCESSING_CENTER, COURTYARD];

// ENEMY TYPES
const LEAPER = "leaper";
const FLYER = "flyer";
const HUNTER = "hunter";
const BLOCKER = "blocker";
const ENEMIES = [LEAPER, FLYER, HUNTER, BLOCKER];

// HAZARD TYPES
const LASER = "laser";
const WINDOW = "window";
const CAMERA = "camera";
const TURRET = "turret";
const HAZARDS = [LASER, WINDOW, CAMERA, TURRET];

// GAME OBJECT TYPES
const ENEMY = "enemy";
const SHOT = "shot";
const WALL = "wall";
const HAZARD = "hazard";
const PLAYER = "player";
const GAME_OBJECTS = [ENEMY, SHOT, WALL, HAZARD, PLAYER];

// EFFECTS
const EXPLOSION = "explosion"; // a *WALL* being destroyed
const DESTROY_STURDY_WALL = "destroy_sturdy_wall"; // a *STURDY WALL* being destroyed
const LEAPER_DIE = "leaperdie"; // a robot being destroyed
const FLYER_DIE = "flyerdie";
const SHATTER = "shatter"; // a *WINDOW* being destroyed

// DIRECTIONS
const UP = "up";
const DOWN = "down";
const RIGHT = "right";
const LEFT = "left";
const DIRECTION_MAP = {
  270: UP,
  90: DOWN,
  0: RIGHT,
  180: LEFT,
};

// ORIENTATIONS
const VERTICAL = "vertical";
const HORIZONTAL = "horizontal";
const ORIENTATIONS = [VERTICAL, HORIZONTAL];

// CONSTANT MAP
const CONSTANTS = {
  states: STATES,
  walls: WALLS,
  enemies: ENEMIES,
  shots: SHOTS,
  hazards: HAZARDS,
  directions: DIRECTION_MAP,
};

// CHARACTER SET
const CHARACTER_SET = "ABCDEFGHIJKLMNOPQRSTUVWXYZ!.? ";
const CHARACTER_MAP = {};
for (var i = 0; i < CHARACTER_SET.length; i++) {
  CHARACTER_MAP[CHARACTER_SET[i]] = i * 8;
}

// MODES
const EDIT_MODE = "EDIT_MODE";
const PLAY_MODE = "PLAY_MODE";
const CUTSCENE_MODE = "CUTSCENE_MODE";

// WORLD DIMENSIONS
const WORLD_W = 16;
const WORLD_H = 16;
const WORLD_GAP = 1;
const WORLD_COLS = 16;
const WORLD_ROWS = 13;

// TILES
const TILE_GROUND = 0;
const TILE_WALL = 1;
const TILE_PLAYERSTART = 2;
const TILE_AMMO = 4;
const TILE_LEAPER = 5;
const TILE_STURDY_WALL = 6;
// PROBLEMS
const TILE_GOAL = 3;
const TILE_WINDOW_V = 7;
const TILE_WINDOW_H = 8;
const TILE_WINDOW_SMASHED_H = 9;
// 
const TILE_STUN_SHOT = 10;
const TILE_HUNTER = 11;
const TILE_BLOCKER = 12;
const TILE_ELEC_WALL = 13;
const TILE_BOUNCE_WALL = 14;
const TILE_TURN_SHOT = 15;
const TILE_PUSH_SHOT = 16;
const TILE_CAMERA = 17;
const TILE_LASER = 18;
const TILE_TURRET = 19;
const TILE_FLYER = 20;

// MISC TYPES
const SWITCH = "switch";
const TRIGGER = "trigger";
const TIMER = "timer";

// TILE TO OBJECT MAP
const OBJECT_MAP = {
  // WALLS
  [NORMAL_WALL]: TILE_WALL,
  [STURDY]: TILE_STURDY_WALL,
  [ELECTRIC]: TILE_ELEC_WALL,
  [BOUNCE]: TILE_BOUNCE_WALL,

  // ENEMIES
  [LEAPER]: TILE_LEAPER,
  [HUNTER]: TILE_HUNTER,
  [BLOCKER]: TILE_BLOCKER,
  [FLYER]: TILE_FLYER,

  // SHOTS
  [NORMAL]: TILE_AMMO,
  [STUN]: TILE_STUN_SHOT,
  [PUSH]: TILE_PUSH_SHOT,
  [TURN]: TILE_TURN_SHOT,

  //HAZARDS
  [WINDOW]: TILE_WINDOW_H,
  [CAMERA]: TILE_CAMERA,
  [LASER]: TILE_LASER,
  [TURRET]: TILE_TURRET,
};

// For collision relationships to tiles
const DESTRUCTIBLE = [TILE_WALL, TILE_WINDOW_H, TILE_WINDOW_V];
const SOLID = [TILE_STURDY_WALL, TILE_BOUNCE_WALL];
const PUSHABLE = [TILE_STURDY_WALL, TILE_WALL];
const INVINCIBLE = [TILE_BOUNCE_WALL];

// TILESET CONSTANTS
const TILE_WIDTH = 16;
const TILE_HEIGHT = 16;
const TILE_ROWS = 3;
const TILE_COLS = 8;
