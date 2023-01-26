import { Camera } from './Camera';
import { ImageLoader } from './ImageLoader';
import { Sprite } from './Sprite';
import { SpriteSheet } from './SpriteSheet';
import { TileMap } from './TileMap';

export class Screen {
  width: number;
  height: number;
  canvas: HTMLCanvasElement;
  context: CanvasRenderingContext2D;
  images: Record<string, HTMLImageElement | HTMLCanvasElement>;
  isImagesloaded: boolean;
  camera: Camera | null;
  isCameraSet: boolean;

  constructor(width: number, height: number, canvas: HTMLCanvasElement) {
    this.width = width;
    this.height = height;
    this.canvas = canvas;
    this.context = this.canvas.getContext('2d') as CanvasRenderingContext2D;
    this.images = {};
    this.isImagesloaded = false;
    this.camera = null;
    this.isCameraSet = false;
  }

  fill(color: string) {
    this.context.fillStyle = color;
    this.context.fillRect(0, 0, this.width, this.height);
  }

  print(x: number, y: number, text: string) {
    this.context.fillStyle = '#fff';
    this.context.font = '22px Georgia';
    this.context.fillText(text, x, y);
  }

  loadImages(imageFiles: Record<string, string>) {
    const loader = new ImageLoader(imageFiles);
    loader.load().then(names => {
      this.images = Object.assign(this.images, loader.images);
      this.isImagesloaded = true;
    });
  }

  drawImage(x: number, y: number, imageName: string) {
    this.context.drawImage(this.images[imageName], x, y);
  }

  drawSprite(sprite: Sprite) {
    let spriteX = sprite.x;
    let spriteY = sprite.y;

    if (this.isCameraSet) {
      spriteX -= this.camera!.x;
      spriteY -= this.camera!.y;
    }

    if (
      spriteX >= this.width ||
      spriteY >= this.height ||
      spriteX + sprite.width <= 0 ||
      spriteY + sprite.height <= 0
    ) {
      return;
    }

    // Подумать про отрисовку только видимой части спрайта
    // карта у нас небольшая, может не составит проблемы
    // const sourceX = sprite.sourceX + Math.abs(Math.min(0, spriteX));
    // const sourceY = sprite.sourceY + Math.abs(Math.min(0, spriteY));
    // const width =
    //   Math.min(this.width, sprite.sourceX + sprite.sourceWidth) -
    //   Math.max(0, sprite.sourceX);
    // const height =
    //   Math.min(this.height, sprite.sourceY + sprite.sourceHeight) -
    //   Math.max(0, sprite.sourceY);

    // console.log(height * (sprite.height / sprite.sourceHeight));

    this.context.drawImage(
      this.images[sprite.imageName],
      sprite.sourceX,
      sprite.sourceY,
      sprite.sourceWidth,
      sprite.sourceHeight,
      spriteX,
      spriteY,
      sprite.width,
      sprite.height
    );
  }

  setCamera(camera: Camera) {
    this.camera = camera;
    this.isCameraSet = true;
  }

  createMap(name: string, mapData: any, tileSet: SpriteSheet) {
    const mapImage = document.createElement('canvas');
    mapImage.width = mapData.tilewidth * mapData.width;
    mapImage.height = mapData.tileheight * mapData.height;
    const mapContext = mapImage.getContext('2d');
    const hitboxes: any = [];
    let row: number;
    let col: number;
    mapData.layers.forEach((layer: any) => {
      if (layer.type === 'tilelayer') {
        row = 0;
        col = 0;
        layer.data.forEach((index: number) => {
          if (index > 0) {
            mapContext?.drawImage(
              this.images[tileSet.imageName],
              tileSet.getSourceX(index),
              tileSet.getSourceY(index),
              16,
              16,
              col * mapData.tilewidth,
              row * mapData.tileheight,
              mapData.tilewidth,
              mapData.tileheight
            );
          }
          col++;
          if (col > mapData.width - 1) {
            col = 0;
            row++;
          }
        });
      }
      if (layer.type === 'objectgroup') {
        hitboxes.push(
          ...layer.objects.map((obj: any) => ({
            x1: obj.x,
            x2: obj.x + obj.width,
            y1: obj.y,
            y2: obj.y + obj.height,
          }))
        );
      }
    });
    this.images[name] = mapImage;

    return new TileMap({
      imageName: name,
      sourceX: 0,
      sourceY: 0,
      sourceWidth: mapImage.width,
      sourceHeight: mapImage.height,
      width: mapImage.width,
      height: mapImage.height,
      hitboxes: hitboxes,
    });
  }
}
