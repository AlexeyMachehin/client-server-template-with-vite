import React, { useState, useContext } from 'react';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { IconButton } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { chatPanelContext } from '../ChatPanel';
import { IMessage } from '../../../../../../service/types/forumPage/IMessage';
import classes from './messageDashboard.module.css';

interface IMessageDashboardProps {
  message: IMessage;
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

  const functions = useContext(chatPanelContext);
  console.log(functions);
  return (
    <div>
      <IconButton
        className={classes.button}
        id="basic-button"
        aria-controls={open ? 'basic-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}>
        <MenuIcon className={classes.buttonIcon} />
      </IconButton>

      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}>
        <MenuItem
          onClick={() => {
            handleClose();
            functions?.setAnswerMessage(
              functions.createAnswerTemplate(props.message)
            );
          }}>
          To answer
        </MenuItem>
      </Menu>
    </div>
  );
}
