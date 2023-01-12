import { useEffect } from 'react';
import { MOVE_DIRECTIONS } from '../constants';

export default function useKeypress(
  callback: (mX: number, mY: number) => void
) {
  useEffect(() => {
    function onKeypress(event: KeyboardEvent) {
      if (event.key in MOVE_DIRECTIONS) {
        const [mX, mY] =
          MOVE_DIRECTIONS[event.key as keyof typeof MOVE_DIRECTIONS];
        callback(mX, mY);
      }
    }

    window.addEventListener('keypress', onKeypress);
    return () => {
      window.removeEventListener('keypress', onKeypress);
    };
  });
}
