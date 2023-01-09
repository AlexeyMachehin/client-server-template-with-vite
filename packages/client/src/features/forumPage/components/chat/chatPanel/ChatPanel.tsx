import classes from './chatPanel.module.css';
import WestIcon from '@mui/icons-material/West';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';
import { useRef, useState } from 'react';
import Message from './message/Message';
import { forumState } from '../../../mockData';
import { IconButton } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';

export default function ChatPanel(props: any) {
  const [inputFooterValue, setInputFooterValue] = useState('');
  const [answerMessage, setAnswerMessage] = useState(null);
  const [answerMessageComponent, setAnswerMessageComponent] =
    useState<null | JSX.Element>(null);

  const inputFooter = useRef(null);

  const createAnswerTemplate = message => {
    return (
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          borderLeft: '1px solid black',
          paddingLeft: '5px',
          marginBottom: '15px',
        }}>
        <div>{message.name}</div>
        <div>{message.message}</div>
      </div>
    );
  };

  const closeAnswerMessageBox = () => {
    setAnswerMessage(null);
  };

  return (
    <div className={classes.chatPanel}>
      <div className={classes.chatPanelHeader}>
        {props.item ? (
          <div style={{ wordBreak: 'break-word' }}>{props.item.title}</div>
        ) : (
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <WestIcon style={{ marginRight: '8px' }} /> Choose or ask a question
          </div>
        )}
      </div>
      <div className={classes.chatPanelMain}>
        {forumState.messages.map(message => (
          <Message
            setInputFooterValue={setInputFooterValue}
            setAnswerMessage={setAnswerMessage}
            createAnswerTemplate={createAnswerTemplate}
            key={message.id}
            message={message}
          />
        ))}

        {/* test answer */}

        {answerMessageComponent}
      </div>

      <div className={classes.chatPanelFooterWrapper}>
        {answerMessage && (
          <div className={classes.answerMessageBox}>
            <div className={classes.closeButtonContainer}>
              <IconButton onClick={() => closeAnswerMessageBox()}>
                <CloseIcon style={{ color: '#1976d2' }} />
              </IconButton>
            </div>

            {answerMessage}
          </div>
        )}
        <div className={classes.chatPanelFooter}>
          <TextField
            inputRef={inputFooter}
            value={inputFooterValue}
            onChange={event => {
              setInputFooterValue(event.target.value);
              console.log(inputFooterValue);
            }}
            style={{ width: '100%' }}
            id="outlined-multiline-flexible"
            label="message"
            multiline
            maxRows={20}
          />
          <Button
            component="button"
            onClick={() => {
              console.log(inputFooterValue);

              closeAnswerMessageBox();
              setInputFooterValue('');
              setAnswerMessageComponent(
                <Message
                  message={{
                    myMessage: forumState.myProfile.myMessage,
                    message: inputFooterValue,
                    time: forumState.myProfile.time,
                    avatarURL: forumState.myProfile.avatarURL,
                    name: forumState.myProfile.name,
                  }}
                  answerMessage={answerMessage}
                />
              );
            }}
            style={{ marginLeft: '16px', maxHeight: '40px' }}
            variant="outlined"
            endIcon={<SendIcon />}>
            Send
          </Button>
        </div>
      </div>
    </div>
  );
}
