import { Screen } from './Screen';

export type GameLoopPropsType = {
  width: number;
  height: number;
  canvas: HTMLCanvasElement;
};

export class GameLoop {
  last: number;
  fps: number;
  step: number;
  dt: number;
  now: number;
  screen: Screen;

  constructor({ width, height, canvas }: GameLoopPropsType) {
    this.screen = new Screen(width, height, canvas);
    this.last = performance.now();
    this.fps = 60;
    this.step = 1 / this.fps;
    this.dt = 0;
    this.now = 0;
  }

  tick = () => {
    this.now = performance.now();

    this.dt = this.dt + Math.min(1, (this.now - this.last) / 1000);
    while (this.dt > this.step) {
      this.dt = this.dt - this.step;
    }
    this.last = this.now;

    requestAnimationFrame(this.tick);
  };

  run() {
    requestAnimationFrame(this.tick);
  }
}
