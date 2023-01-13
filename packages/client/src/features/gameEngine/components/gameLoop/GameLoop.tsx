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
  const requestIdRef = useRef<Nullable<number>>(null);
  const deltaTimeRef = useRef(0);
  const lastUpdate = useRef(0);
  const maxIntervalRef = useRef(40);

  useEffect(() => {
    setCtx(canvasRef.current && canvasRef.current.getContext('2d'));
  }, [setCtx]);

  const childrenWithProps = Children.map(children, child => {
    if (isValidElement(child)) {
      return cloneElement<any>(child, { player1X, player1Y });
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

  const tick = useCallback(
    (currentTime = 0) => {
      console.log('tick');

      if (!canvasRef.current) return;

      requestIdRef.current = requestAnimationFrame(tick);
      deltaTimeRef.current = currentTime - lastUpdate.current;

      if (deltaTimeRef.current < maxIntervalRef.current) {
        if (isUpdateRequired) {
          setIsVisible(false);
          setIsVisible(true);
          setIsUpdateRequired(false);
        }
      }

      lastUpdate.current = currentTime;
    },
    [isUpdateRequired, setIsVisible, setIsUpdateRequired]
  );

  useEffect(() => {
    requestIdRef.current = requestAnimationFrame(tick);
    return () => {
      requestIdRef.current && cancelAnimationFrame(requestIdRef.current);
    };
  }, []);

  return (
    <CanvasContext.Provider value={ctx}>
      <canvas ref={canvasRef} width={width} height={height} />
      {isVisible && childrenWithProps}
    </CanvasContext.Provider>
  );
};

export default GameLoop;
