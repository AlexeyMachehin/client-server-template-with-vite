import { FC } from 'react';
import spriteSheet from '../../assets/general_sprite_sheet.png';
import classes from './ImagesBuffer.module.css';

type ImagesBufferProps = {
  bufferImage: (path: string) => void;
};

const ImagesBuffer: FC<ImagesBufferProps> = ({ bufferImage }) => {
  return (
    <div className={classes.bufferImagesContainer}>
      <img
        key="general-spritesheet"
        id="general-spritesheet"
        src={spriteSheet}
        alt="general-spritesheet"
        onLoad={() => {
          bufferImage(spriteSheet);
        }}
      />
    </div>
  );
};

export default ImagesBuffer;
