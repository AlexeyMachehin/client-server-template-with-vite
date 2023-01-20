import { useState } from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import CreateIcon from '@mui/icons-material/Create';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import Divider from '@mui/material/Divider';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import { CURRENT_MAIN_TOPICS } from '../../../../../../service/types/forumPage/currentMainTopic';
import classes from './askQuestionModal.module.css';

export default function AskQuestionModal(props: { currentMainTheme: string }) {
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const [titleInputValue, setTitleInputValue] = useState<string>(
    props.currentMainTheme
  );
  const handleChange = (event: SelectChangeEvent) => {
    setTitleInputValue(event.target.value);
  };

  return (
    <div>
      <ListItem
        className={classes.askQuestionButton}
        onClick={handleClickOpen}
        button>
        <ListItemAvatar>
          <Avatar className={classes.askQuestionAvatar}>
            <CreateIcon />
          </Avatar>
        </ListItemAvatar>
        <ListItemText primary="Ask a question" />
      </ListItem>
      <Divider />

      <Dialog open={open} onClose={handleClose}>
        <DialogTitle className={classes.title}>
          <FormControl variant="standard" sx={{ m: 1 }}>
            <Select
              displayEmpty={true}
              renderValue={value => value ?? 'Choose main theme'}
              value={CURRENT_MAIN_TOPICS[titleInputValue as keyof typeof CURRENT_MAIN_TOPICS]}
              onChange={handleChange}>
              <MenuItem value={'discussionOfGameMoments'}>
                {CURRENT_MAIN_TOPICS.discussionOfGameMoments}
              </MenuItem>
              <MenuItem value={'technicalIssues'}>
                {CURRENT_MAIN_TOPICS.technicalIssues}
              </MenuItem>
              <MenuItem value={'errorQuestions'}>
                {CURRENT_MAIN_TOPICS.errorQuestions}
              </MenuItem>
            </Select>
          </FormControl>
          / your question:
        </DialogTitle>

        <DialogContent className={classes.askQuestionInput}>
          <TextField
            margin="dense"
            fullWidth
            label="message"
            multiline
            maxRows={20}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={handleClose}>Send</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
