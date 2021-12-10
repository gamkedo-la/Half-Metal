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

// PLAYER/ENEMY STATES
const SHOOTING = "shooting";
const MOVING = "moving";
const IDLE = "idle";
const ALERT = "alert";
const STUNNED = "stunned";
const PUSHED = "pushed";
const STATES = [SHOOTING, MOVING, IDLE, ALERT, STUNNED, PUSHED];

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
EXPLOSION = "explosion";

// DIRECTIONS
const DIRECTION_MAP = {
  270: "north",
  90: "south",
  0: "east",
  180: "west",
};

// CONSTANT MAP
const CONSTANTS = {
  states: STATES,
  walls: WALLS,
  enemies: ENEMIES,
  shots: SHOTS,
  hazards: HAZARDS,
  directions: DIRECTION_MAP,
};
