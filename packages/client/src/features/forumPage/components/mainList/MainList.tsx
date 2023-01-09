import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import SettingsIcon from '@mui/icons-material/Settings';
import ErrorIcon from '@mui/icons-material/Error';
import ExtensionIcon from '@mui/icons-material/Extension';

const style = {
  width: '100%',
  bgcolor: 'background.paper',
};

export default function MainList() {
  return (
    <List sx={style} component="nav" aria-label="mailbox folders">
      <ListItem button>
        <ListItemAvatar>
          <Avatar>
            <ExtensionIcon />
          </Avatar>
        </ListItemAvatar>
        <ListItemText primary="Discussion of game moments" />
      </ListItem>
      <Divider />
      <ListItem button divider>
        <ListItemAvatar>
          <Avatar>
            <SettingsIcon />
          </Avatar>
        </ListItemAvatar>
        <ListItemText primary="Technical issues" />
      </ListItem>
      <ListItem button>
        <ListItemAvatar>
          <Avatar>
            <ErrorIcon />
          </Avatar>
        </ListItemAvatar>
        <ListItemText primary="Error messages" />
      </ListItem>
      <Divider light />
    </List>
  );
}
