import { GameLoop } from '../GameLoop';
import { Scene } from '../Scene';

export class Loading extends Scene {
  loadedAt: number;

  constructor(gameLoop: GameLoop) {
    super(gameLoop);
    this.loadedAt = 0;
  }

  init() {
    super.init();
    this.loadedAt = 0;
  }

  update(step: number) {
    //TODO возможно поставить проверку прогрузки ресурсов или просто обратный отсчет или выбросить совсем
    if (this.loadedAt < 2) {
      this.loadedAt += step;
    } else {
      this.finish(Scene.LOADED);
    }
  }

  render(deltaTime: number) {
    this.gameLoop.screen.fill('#000');
    this.gameLoop.screen.print(50, 70, 'Loading...');
    super.render(deltaTime);
  }
}
