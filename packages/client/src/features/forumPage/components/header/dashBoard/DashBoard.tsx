import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListSubheader from '@mui/material/ListSubheader';
import { IQuestion } from '../../../../../service/types/forumPage/IQuestion';
import { Divider } from '@mui/material';
import { useNavigate } from 'react-router-dom';

export default function DashBoard(props: {
  mainTheme: string | null;
  setFoundQuestions: React.Dispatch<React.SetStateAction<IQuestion[] | null>>;
  foundQuestions: IQuestion[] | null;
  setSelectedQuestion: (selectedQuestion: IQuestion | null) => void;
}) {
  const navigate = useNavigate();
  return (
    <List
      sx={{
        position: 'fixed',
        zIndex: '9999',
        top: '51px',
        left: '8px',
        width: '100%',
        maxWidth: 500,
        bgcolor: 'background.paper',
        overflow: 'auto',
        maxHeight: 600,
        padding: '5px',
        border: '1px solid black',
        borderRadius: '4px',
      }}>
      {props.foundQuestions?.map((question: IQuestion) => (
        <>
          <ListItem
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'flex-start',
            }}
            button
            onClick={() => {
              props.setSelectedQuestion(question);
              navigate(`/forum/${props.mainTheme}/${question.id}`);
              props.setFoundQuestions(null);
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
