// SHOT TYPES
const NORMAL = "normal";
const STUN = "stun";
const PUSH = "push";
const TURN = "turn";
const SHOTS = [NORMAL, STUN, PUSH, TURN];

// WALL TYPES
const NORMAL_WALL = "normal";
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
const STATES = [SHOOTING, MOVING, IDLE, ALERT, STUNNED, PUSHED, CLOSED, OPEN];

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
const LEAPER_DIE = "leaperdie"; // a robot being destroyed

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
const TILE_GOAL = 3;
const TILE_AMMO = 4;
const TILE_DOOR = 5;
const TILE_LEAPER = 6;
const TILE_STURDY_WALL = 7;
const TILE_WARP = 8;
const TILE_WINDOW_V = 9;
const TILE_WINDOW_H = 10;
const TILE_WINDOW_SMASHED_H = 11;
const TILE_STUN_SHOT = 12;
const TILE_HUNTER = 13;
const TILE_BLOCKER = 14;
const TILE_ELEC_WALL = 15;
const TILE_BOUNCE_WALL = 16;
const TILE_TURN_SHOT = 17;
const TILE_PUSH_SHOT = 18;
const TILE_CAMERA = 19;
const TILE_LASER = 20;
const TILE_TURRET = 21;
const TILE_FLYER = 22;

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
