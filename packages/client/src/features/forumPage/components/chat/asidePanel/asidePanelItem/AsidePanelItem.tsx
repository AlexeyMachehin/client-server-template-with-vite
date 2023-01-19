import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import Divider from '@mui/material/Divider';
import { IQuestion } from '../../../../../../service/types/forumPage/IQuestion';
import classes from './asidePanelItem.module.css';
import { useNavigate } from 'react-router-dom';

interface IAsidePanelItemProps {
  isWideAsidePanel: boolean;
  question: IQuestion;
  color: string;
  setSelectedQuestion: any;
}

export default function AsidePanelItem(props: IAsidePanelItemProps) {
  const navigate = useNavigate();
  return (
    <>
      <ListItem
        style={{ backgroundColor: props.color }}
        onClick={() => {
          props.setSelectedQuestion(props.question);
          navigate(`${props.question.id}`)
        }}
        button>
        <ListItemAvatar>
          <Avatar alt={props.question.name} src={props.question.avatarURL} />
        </ListItemAvatar>

        <div className={classes.AsidePanelItemContent}>
          <ListItemText
            sx={
              props.isWideAsidePanel
                ? {}
                : {
                    overflow: 'visible',
                    wordBreak: 'break-word',
                    maxHeight: '100%',
                  }
            }
            className={classes.title}
            primary={props.question.title}
          />

          <div className={classes.AsidePanelItemFooter}>
            <ListItemText
              className={classes.name}
              secondary={props.question.name}
            />
            <ListItemText
              className={classes.time}
              secondary={new Date(props.question.time).toDateString()}
            />
          </div>
        </div>
      </ListItem>

      <Divider />
    </>
  );
}
