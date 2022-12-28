import Backdrop from '@mui/material/Backdrop';
import NavigateLinks from './navigateLinks/NavigateLinks';
import classes from './endGameBackdrop.module.css';
import UserCard from './userCard/UserCard';
import Confetti from 'react-confetti';
import React from 'react';

export default function EndGameBackdrop() {
  const [width, setWidth] = React.useState(
    document.documentElement.clientWidth
  );
  const [height, setHeight] = React.useState(
    document.documentElement.clientHeight
  );
  window.onresize = () => {
    setWidth(document.documentElement.clientWidth);
    setHeight(document.documentElement.clientHeight);
  };
  const isWin = true;
  const stage = 1;
  const users = [
    {
      name: 'Danil',
      score: 12345,
      time: 4,
      kills: 5,
      damage: 435,
      avatarURL:
        'https://pixelbox.ru/wp-content/uploads/2021/05/ava-vk-animal-91.jpg',
      id: 1,
    },
    // {
    //   name: 'Anton',
    //   score: 54321,
    //   time: 3,
    //   kills: 7,
    //   damage: 445335,
    //   avatarURL: 'https://avatarko.ru/img/kartinka/1/pozitiv_smailik.jpg',
    //   id: 2,
    // },
  ];

  return (
    <div>
      <Backdrop
        className={classes.backdrop}
        sx={{ zIndex: theme => theme.zIndex.drawer + 1 }}
        open={true}>
        <div className={classes.backdropContainer}>
          {isWin ? (
            <h2 className={classes.winTitle}>Win !</h2>
          ) : (
            <h2 className={classes.gameOverTitle}>Game over</h2>
          )}
          <div className={classes.stageTitle}>Stage {stage}</div>
          <div className={classes.cardsWrapper}>
            {users.map((user: any) => (
              <UserCard key={user.id} user={user} />
            ))}
          </div>
          <NavigateLinks isWin={isWin} />
        </div>
      </Backdrop>
      {isWin && (
        <Confetti
          width={width}
          height={height}
          gravity={0.02}
          style={{
            zIndex: '9999',
          }}
        />
      )}
    </div>
  );
}
