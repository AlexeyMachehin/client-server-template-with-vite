import * as React from 'react';
import Backdrop from '@mui/material/Backdrop';
import classes from './CountdownBackdrop.module.css';

//Компонент с обратным отсчетом перед стартом игры. Он будет использован на странице с игрой.

export default function CountdownBackdrop() {
  const [open, setOpen] = React.useState(false);
  const [timer, setTimer] = React.useState(3);
  const handleClose = () => {
    setOpen(false);
  };

  const id = React.useRef<null | number>(null);
  const clear = () => {
    window.clearInterval(id.current ?? 0);
  };
  React.useEffect(() => {
    setOpen(!open);
    if (id != null) {
      id.current = window.setInterval(() => {
        setTimer(time => time - 1);
      }, 1000);
    }
    return () => clear();
  }, []);

  React.useEffect(() => {
    if (timer === 0) {
      clear();
      handleClose();
    }
  }, [timer]);

  return (
    <div>
      <Backdrop
        sx={{ color: '#fff', zIndex: theme => theme.zIndex.drawer + 1 }}
        open={open}>
        <div className={classes.backdropTimer}>
          <div className={classes.backdropStage}>Stage 1</div>
          {timer}
        </div>
      </Backdrop>
    </div>
  );
}
