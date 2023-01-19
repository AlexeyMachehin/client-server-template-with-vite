import React, { useState } from 'react';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { IconButton } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { IMessage } from '../../../../../../service/types/forumPage/IMessage';
import classes from './messageDashboard.module.css';

interface IMessageDashboardProps {
  message: IMessage;
  createAnswer: (message: IMessage) => void;
}

export default function MessageDashboard(props: IMessageDashboardProps) {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = (): void => {
    setAnchorEl(null);
  };

  return (
    <div>
      <IconButton
        className={classes.button}
        aria-controls={open ? 'basic-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}>
        <MenuIcon className={classes.buttonIcon} />
      </IconButton>

      <Menu
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}>
        <MenuItem
          onClick={() => {
            handleClose();
            props.createAnswer(props.message);
          }}>
          To answer
        </MenuItem>
      </Menu>
    </div>
  );
}
