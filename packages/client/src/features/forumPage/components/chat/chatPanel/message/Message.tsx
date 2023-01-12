import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import MessageDashboard from '../messageDashboard/MessageDashboard';
import { IMessage } from '../../../../../../service/types/forumPage/IMessage';
import classes from './message.module.css';

interface IMessageProps {
  message: IMessage;

  answerMessage?: null | JSX.Element;
}

export default function Message(props: IMessageProps) {
  const myMessageColor = {
    backgroundColor: 'var(--myMessageColor)',
  };

  return (
    <ListItem
      className={classes.message}
      sx={props.message.isMyMessage ? myMessageColor : {}}>
      <ListItemAvatar>
        <Avatar alt={props.message.name} src={props.message.avatarURL} />
      </ListItemAvatar>

      <div className={classes.messageContent}>
        <div className={classes.messageHeader}>
          <div>
            <ListItemText
              className={classes.name}
              secondary={props.message.name}
            />
          </div>
          <div>
            <ListItemText
              className={classes.date}
              secondary={new Date(props.message.time).toDateString()}
            />
          </div>
          <MessageDashboard message={props.message} />
        </div>
        {props.answerMessage}
        <ListItemText
          className={classes.message}
          primary={props.message.message}
        />
      </div>
    </ListItem>
  );
}
