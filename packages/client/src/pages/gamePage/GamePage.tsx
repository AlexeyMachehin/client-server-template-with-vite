import Board from '../../features/gameEngine/components/board/Board';
import GameLoop from '../../features/gameEngine/components/gameLoop/GameLoop';
import classes from './gamePage.module.css';

export default function GapmePage() {
  return (
    <GameLoop>
      <Board />
    </GameLoop>
  );
}
