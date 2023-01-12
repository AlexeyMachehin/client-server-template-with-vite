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
import classes from './askQuestionModal.module.css';

export default function AskQuestionModal() {
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
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
        <DialogTitle>Ask a question</DialogTitle>
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
