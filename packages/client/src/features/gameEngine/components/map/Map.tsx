import { FC, useContext, useEffect } from 'react';
import CanvasContext from '../../CanvasContext';
import {
  MAP,
  MAP_DIMENSIONS,
  MAP_SPRITES,
  MAP_TILE_SIZE,
  SPRITE_TILE_SIZE,
} from '../../constants';

const Map: FC<any> = ({ loadMap, player1X, player1Y }) => {
  const ctx = useContext(CanvasContext);
  const { COLS, ROWS } = MAP_DIMENSIONS;

  useEffect(() => {
    // console.log('useEffect in Map.tsx');
    const drawLayer = (grid: typeof MAP) => {
      for (let i = 0; i < ROWS; i++) {
        for (let j = 0; j < COLS; j++) {
          const item = grid[i][j];
          if (!item) {
            // empty tile
            continue;
          }
          const img = document.querySelector(
            '#general-spritesheet'
          ) as CanvasImageSource;
          const x = j * MAP_TILE_SIZE;
          const y = i * MAP_TILE_SIZE;
          ctx?.drawImage(
            img,
            MAP_SPRITES[item as keyof typeof MAP_SPRITES][0] * SPRITE_TILE_SIZE,
            MAP_SPRITES[item as keyof typeof MAP_SPRITES][1] * SPRITE_TILE_SIZE,
            SPRITE_TILE_SIZE,
            SPRITE_TILE_SIZE,
            x,
            y,
            MAP_TILE_SIZE,
            MAP_TILE_SIZE
          );
        }
      }
    };

    drawLayer(MAP);
    loadMap(true);
  }, [ctx, COLS, ROWS, loadMap, player1X, player1Y]);

  return null;
};

export default Map;
