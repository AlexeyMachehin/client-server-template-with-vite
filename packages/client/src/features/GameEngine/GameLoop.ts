export class GameLoop {
  last: number;
  fps: number;
  step: number;
  dt: number;
  now: number;

  constructor({ width = 500, height = 500 } = {}) {
    this.last = performance.now();
    this.fps = 60;
    this.step = 1 / this.fps;
    this.dt = 0;
    this.now = 0;
  }

  update(step: number) {
    console.log('update', step);
  }

  render(dt: number) {
    console.log('render', dt);
  }

  tick = () => {
    console.log('tick');

    this.now = performance.now();

    this.dt = this.dt + (this.now - this.last) / 1000;
    while (this.dt > this.step) {
      this.dt = this.dt - this.step;
      this.update(this.step); //
    }
    this.last = this.now;

    this.render(this.dt);
    requestAnimationFrame(this.tick);
  };

  run() {
    requestAnimationFrame(this.tick);
  }
}
