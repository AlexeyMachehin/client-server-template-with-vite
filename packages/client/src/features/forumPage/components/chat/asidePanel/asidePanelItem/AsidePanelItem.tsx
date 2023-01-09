import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import Divider from '@mui/material/Divider';
import classes from './asidePanelItem.module.css';

export default function AsidePanelItem(props: any) {
  return (
    <>
      <ListItem
        style={{ backgroundColor: props.color }}
        onClick={props.handleSelectedItem}
        button>
        <ListItemAvatar>
          <Avatar alt={props.item.name} src={props.item.avatarURL} />
        </ListItemAvatar>

        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
          }}>
          <ListItemText
            sx={
              props.togglerWidthButton
                ? {}
                : {
                    overflow: 'visible',
                    wordBreak: 'break-word',
                    maxHeight: '100%',
                  }
            }
            className={classes.title}
            primary={props.item.title}
          />

          <div
            style={{
              display: 'flex',
              flexDirection: 'row',
              width: '220px',
            }}>
            <ListItemText
              className={classes.name}
              secondary={props.item.name}
            />
            <ListItemText
              className={classes.time}
              secondary={new Date(props.item.time).toDateString()}
            />
          </div>
        </div>
      </ListItem>

      <Divider />
    </>
  );
}
