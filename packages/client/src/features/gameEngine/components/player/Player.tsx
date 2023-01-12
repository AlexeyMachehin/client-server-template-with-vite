import { FC, useContext, useEffect } from 'react';
import CanvasContext from '../../CanvasContext';
import {
  CHARACTER_SPRITES,
  MAP_TILE_SIZE,
  SPRITE_TILE_SIZE,
} from '../../constants';

const Player: FC<any> = ({ posX, posY, loadPlayer }) => {
  const ctx = useContext(CanvasContext);

  useEffect(() => {
    // console.log('useEffect in Character.tsx');

    const img = document.querySelector(
      '#general-spritesheet'
    ) as CanvasImageSource;
    ctx?.drawImage(
      img,
      CHARACTER_SPRITES.standing.down.frames[0][0] * SPRITE_TILE_SIZE,
      CHARACTER_SPRITES.standing.down.frames[0][1] * SPRITE_TILE_SIZE,
      SPRITE_TILE_SIZE,
      SPRITE_TILE_SIZE,
      posX * MAP_TILE_SIZE,
      posY * MAP_TILE_SIZE,
      MAP_TILE_SIZE,
      MAP_TILE_SIZE
    );
    loadPlayer(true);
  }, [ctx, posX, posY, loadPlayer]);

  return null;
};

export default Player;
