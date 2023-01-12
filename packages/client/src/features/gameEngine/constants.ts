export const SPRITE_TILE_SIZE = 16;

export const MAP_TILE_SIZE = 48;

export const CHARACTER_TILE_SIZE = 48;

export const MAP_DIMENSIONS = {
  COLS: 11,
  ROWS: 11,
  MAP_TILE_SIZE,
};

export const MAP_SPRITES = {
  1: [0, 5],
  2: [3, 3],
};

export const CHARACTER_SPRITES = {
  standing: {
    right: {
      total: 1,
      frames: [[1, 1]],
    },
    left: {
      total: 1,
      frames: [[1, 0]],
    },
    up: {
      total: 1,
      frames: [[4, 1]],
    },
    down: {
      total: 1,
      frames: [[4, 0]],
    },
  },
  walking: {
    right: {
      total: 3,
      frames: [
        [0, 1],
        [1, 1],
        [2, 1],
      ],
    },
    left: {
      total: 3,
      frames: [
        [0, 0],
        [1, 0],
        [2, 0],
      ],
    },
    up: {
      total: 3,
      frames: [
        [4, 1],
        [5, 1],
        [6, 1],
      ],
    },
    down: {
      total: 3,
      frames: [
        [4, 0],
        [5, 0],
        [6, 0],
      ],
    },
  },
  dead: {
    down: {
      total: 7,
      frames: [
        [0, 2],
        [1, 2],
        [2, 2],
        [3, 2],
        [4, 2],
        [5, 2],
        [6, 2],
      ],
    },
  },
};

export const MAP = [
  [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2],
  [2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2],
  [2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2],
  [2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2],
  [2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2],
  [2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2],
  [2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2],
  [2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2],
  [2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2],
  [2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2],
  [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2],
];

export const MOVE_DIRECTIONS = {
  w: [0, -0.1],
  a: [-0.1, 0],
  s: [0, 0.1],
  d: [0.1, 0],
};

export const SOLID_TILES = [2];
