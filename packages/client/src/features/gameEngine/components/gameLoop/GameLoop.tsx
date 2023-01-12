import {
  Children,
  FC,
  useRef,
  useState,
  useEffect,
  useCallback,
  isValidElement,
  cloneElement,
} from 'react';
import CanvasContext from '../../CanvasContext';
import { MAP_DIMENSIONS, MAP_TILE_SIZE } from '../../constants';
import { GameLoopProps, Nullable } from '../../gameEngineTypes';
import { checkMapCollision } from '../../utils';
import useKeypress from '../../hooks/useKeypress';

const GameLoop: FC<GameLoopProps> = ({ children }) => {
  const width = MAP_DIMENSIONS.COLS * MAP_TILE_SIZE;
  const height = MAP_DIMENSIONS.ROWS * MAP_TILE_SIZE;
  const canvasRef = useRef<Nullable<HTMLCanvasElement>>(null);
  const [ctx, setCtx] = useState<Nullable<CanvasRenderingContext2D>>(null);
  const [player1X, setPlayer1X] = useState(1);
  const [player1Y, setPlayer1Y] = useState(1);
  const [isUpdateRequired, setIsUpdateRequired] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const loopRef = useRef<number>();

  useEffect(() => {
    setCtx(canvasRef.current && canvasRef.current.getContext('2d'));
  }, [setCtx]);

  const childrenWithProps = Children.map(children, child => {
    if (isValidElement(child)) {
      return cloneElement(child, { player1X, player1Y });
    }
    return child;
  });

  const movePlayer1 = (mX: number, mY: number) => {
    if (!checkMapCollision(player1X + mX, player1Y + mY)) {
      setIsUpdateRequired(true);
      setPlayer1X(player1X + mX);
      setPlayer1Y(player1Y + mY);
    }
  };

  useKeypress(movePlayer1);

  const tick = useCallback(() => {
    // console.log('tick');
    if (isUpdateRequired) {
      setIsVisible(false);
      setIsVisible(true);
      setIsUpdateRequired(false);
    }
    loopRef.current = requestAnimationFrame(tick);
  }, [isUpdateRequired, setIsVisible, setIsUpdateRequired]);

  useEffect(() => {
    loopRef.current = requestAnimationFrame(tick);
    return () => {
      loopRef.current && cancelAnimationFrame(loopRef.current);
    };
  }, [loopRef, tick]);

  return (
    <CanvasContext.Provider value={ctx}>
      <canvas ref={canvasRef} width={width} height={height} />
      {isVisible && childrenWithProps}
    </CanvasContext.Provider>
  );
};

export default GameLoop;
