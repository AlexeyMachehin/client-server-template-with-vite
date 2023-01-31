import { useEffect } from 'react';
import { GameLoop } from '../../features/GameEngine/GameLoop';
import classes from './GamePage.module.css';

export default function GapmePage() {
  const gameLoop = new GameLoop();

  useEffect(() => {
    gameLoop.run();
  }, []);

  return <div id="game-container"></div>;
}
