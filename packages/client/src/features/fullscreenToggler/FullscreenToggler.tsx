import FullscreenIcon from '@mui/icons-material/Fullscreen';
import FullscreenExitIcon from '@mui/icons-material/FullscreenExit';
import { Button } from '@mui/material';
import { useEffect, useState } from 'react';
import classes from './fullscreenToggler.module.css';

export default function FullscreenToggler(props: { elementId: string }) {
  const [isFullScreen, setIsFullScreen] = useState(false);

  useEffect(() => {
    document.addEventListener('fullscreenchange', () => {
      if (!document.fullscreenElement) {
        setIsFullScreen(false);
      }
    });
    return () => {
      document.addEventListener('fullscreenchange', () => {
        if (!document.fullscreenElement) {
          setIsFullScreen(false);
        }
      });
    };
  }, []);

  const toggleFullScreen = (elementId: string) => {
    const HTMLelement = document.querySelector(`#${elementId}`);

    if (!document.fullscreenElement) {
      HTMLelement?.requestFullscreen();
      setIsFullScreen(true);
    } else {
      document.exitFullscreen();
      setIsFullScreen(false);
    }
  };

  return (
    <Button
      className={classes.toggleButtonIcon}
      onClick={() => {
        toggleFullScreen(props.elementId);
      }}>
      {isFullScreen ? (
        <FullscreenExitIcon className={classes.toggleButtonIcon} />
      ) : (
        <FullscreenIcon className={classes.toggleButtonIcon} />
      )}
    </Button>
  );
}
