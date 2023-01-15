import * as React from 'react';
import { useNavigate } from 'react-router-dom';
import Box from '@mui/material/Box';
import HowToPlayModal from '../howToPlayModal/HowToPlayModal';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import classes from './navigateLinks.module.css';

const preventDefault = (event: React.SyntheticEvent) => event.preventDefault();

export default function NavigateLinks() {
  const navigate = useNavigate();

  return (
    <Box
      className={classes.navigateLinksWrapper}
      sx={{
        typography: 'body1',
        '& > :not(style) + :not(style)': {
          ml: 4,
        },
        '& > :not(style)': {
          fontSize: '20px',
        },
      }}
      onClick={preventDefault}>
      <Tooltip title="Go to Forum">
        <Button onClick={() => navigate('/forum')}>Forum</Button>
      </Tooltip>
      <Tooltip title="Go to Leaderboard">
        <Button>Leaderboard</Button>
      </Tooltip>
      <HowToPlayModal />
    </Box>
  );
}
