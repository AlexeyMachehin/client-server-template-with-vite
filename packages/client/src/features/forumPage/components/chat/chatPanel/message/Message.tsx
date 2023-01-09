import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import classes from './message.module.css';
import MessageDashboard from '../messageDashboard/MessageDashboard';

export default function Message(props: any) {
  const myMessageColor = {
    backgroundColor: '#2e94fa11',
  };

  return (
    <ListItem
      className={classes.message}
      sx={props.message.myMessage ? myMessageColor : {}}>
      <ListItemAvatar>
        <Avatar alt={props.message.name} src={props.message.avatarURL} />
      </ListItemAvatar>

      <div style={{ display: 'flex', flexDirection: 'column' }}>
        <div style={{ display: 'flex', alignItems: 'center' }}>
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
          <MessageDashboard
            setInputFooterValue={props.setInputFooterValue}
            setAnswerMessage={props.setAnswerMessage}
            message={props.message}
            createAnswerTemplate={() =>
              props.createAnswerTemplate(props.message)
            }
          />
        </div>
        {props.answerMessage}
        <ListItemText
          className={classes.content}
          primary={props.message.message}
        />
      </div>
    </ListItem>
  );
}
