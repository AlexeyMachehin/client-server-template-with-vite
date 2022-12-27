import * as React from 'react';
import Button from '@mui/material/Button';
import classes from './navigateLinks.module.css';
import { Box } from '@mui/material';

const preventDefault = (event: React.SyntheticEvent) => event.preventDefault();

export default function NavigateLinks(props: any) {
  return (
    <Box
      className={classes.navigateLinksWrapper}
      sx={{
        typography: 'body1',
        '& > :not(style) + :not(style)': {
          ml: 4,
        },
      }}
      onClick={preventDefault}>
      <Button href="#text-buttons">Restart game</Button>
      <Button href="#text-buttons">Restart level</Button>
      <Button href="#text-buttons">Leaderboard</Button>
      {props.isWin && (
        <Button className={classes.nextLevelButton} href="#text-buttons">
          Next level
        </Button>
      )}
    </Box>
  );
}
