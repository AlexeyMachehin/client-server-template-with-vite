import { FC, useContext, useState, useEffect } from 'react';
import CanvasContext from '../../CanvasContext';
import ImagesBuffer from '../imagesBuffer/ImagesBuffer';
import Player from '../player/Player';
import Map from '../map/Map';

const Board: FC<any> = ({ player1X, player1Y }) => {
  const ctx = useContext(CanvasContext);

  const [isMapLoaded, loadMap] = useState(false);
  const [isPlayer1Loaded, loadPlayer1] = useState(false);

  const [bufferImages, setBufferImages] = useState({});
  // @ts-expect-error
  useEffect(() => {
    // console.log('useEffect in TileView.tsx');
    return () => {
      return () =>
        ctx && ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
    };
  }, [ctx]);

  const bufferImage = (path: string) => {
    setBufferImages({ ...bufferImages, [path]: 1 });
  };

  return (
    <>
      <ImagesBuffer bufferImage={bufferImage} />
      {Object.keys(bufferImages).length === 1 && (
        <>
          <Map loadMap={loadMap} player1X={player1X} player1Y={player1Y} />
        </>
      )}
      {isMapLoaded && (
        <Player posX={player1X} posY={player1Y} loadPlayer={loadPlayer1} />
      )}
    </>
  );
};

export default Board;
