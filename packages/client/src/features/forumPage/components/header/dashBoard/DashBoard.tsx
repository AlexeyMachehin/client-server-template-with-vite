import { useNavigate } from 'react-router-dom';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import { Divider } from '@mui/material';
import { IQuestion } from '../../../../../service/types/forumPage/IQuestion';
import classes from './dashBoard.module.css';

export default function DashBoard(props: {
  mainTheme: string | null;
  foundQuestions: IQuestion[];
}) {
  const navigate = useNavigate();
  return (
    <List className={classes.dashBoardWrapper}>
      {props.foundQuestions.map((question: IQuestion) => (
        <>
          <ListItem
            className={classes.dashBoardItem}
            button
            onClick={() => {
              navigate(`/forum/${props.mainTheme}/${question.id}`);
            }}
            key={question.id}>
            <ListItemText primary={question.title} secondary={question.name} />
            <ListItemText secondary={new Date(question.time).toDateString()} />
          </ListItem>

          <Divider />
        </>
      ))}
    </List>
  );
}
