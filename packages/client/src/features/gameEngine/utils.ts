import { MAP_DIMENSIONS } from './constants';

export const isMapEdge = (x: number, y: number) => {
  const { ROWS, COLS } = MAP_DIMENSIONS;
  return x < 1 || x >= COLS - 2 || y < 1 || y >= ROWS - 2;
};

export const checkMapCollision = (x: number, y: number) => {
  return isMapEdge(x, y);
};
