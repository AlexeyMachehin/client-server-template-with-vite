import * as React from 'react';
import { Box } from '@mui/material';
import HowToPlayModal from '../howToPlayModal/HowToPlayModal';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import classes from './navigateLinks.module.css';
import Alert from '@mui/material/Alert';
import { useState } from 'react';
import { authService } from '../../../../service/AuthService';
import FullscreenToggler from '../../../fullscreenToggler/FullscreenToggler';

const preventDefault = (event: React.SyntheticEvent) => event.preventDefault();

export default function NavigateLinks() {
  const [logoutError, setLogoutError] = useState<null | string>(null);

  const handleLogout = async () => {
    try {
      await authService.logout();

      setLogoutError(null);
    } catch (e) {
      if (typeof e === 'string') {
        setLogoutError(e);
      }
    }
  };

  return (
    <Box
      id="fullScreenElement"
      className={classes.navigateLinksWrapper}
      sx={{
        typography: 'body1',
        '& > :not(style) + :not(style)': {
          ml: 4,
        },
      }}
      onClick={preventDefault}>
      <Tooltip title="Logout from system">
        <Button href="#text-buttons" onClick={handleLogout}>
          Logout
        </Button>
      </Tooltip>
      <Tooltip title="Go to Forum">
        <Button href="#text-buttons">Forum</Button>
      </Tooltip>
      <Tooltip title="Go to Leaderboard">
        <Button href="#text-buttons">Leaderboard</Button>
      </Tooltip>
      <HowToPlayModal />
      {logoutError && (
        <Alert className={classes.errorWrapper} severity="error">
          {logoutError}
        </Alert>
      )}
      <FullscreenToggler elementId={'fullScreenElement'} />
    </Box>
  );
}
