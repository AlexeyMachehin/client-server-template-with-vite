import * as React from 'react';
import Box from '@mui/material/Box';
import HowToPlayModal from '../howToPlayModal/HowToPlayModal';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import classes from './navigateLinks.module.css';
import { authService } from '../../../../service/AuthService'

const preventDefault = (event: React.SyntheticEvent) => event.preventDefault();

export default function NavigateLinks() {
  const handleLogout = async () => {
    await authService.logout()
  }

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
      <Tooltip title="Logout from system">
        <Button href="#text-buttons" onClick={handleLogout}>Logout</Button>
      </Tooltip>
      <Tooltip title="Go to Forum">
        <Button href="#text-buttons">Forum</Button>
      </Tooltip>
      <Tooltip title="Go to Leaderboard">
        <Button href="#text-buttons">Leaderboard</Button>
      </Tooltip>
      <HowToPlayModal />
    </Box>
  );
}
