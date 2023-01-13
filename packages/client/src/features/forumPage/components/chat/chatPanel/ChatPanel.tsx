import React, { useRef, useState, useEffect } from 'react';
import WestIcon from '@mui/icons-material/West';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';
import Message from './message/Message';
import { IconButton } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import { IMessage } from '../../../../../service/types/forumPage/IMessage';
import { IQuestion } from '../../../../../service/types/forumPage/IQuestion';
import { forumState } from '../../../mockData';
import classes from './chatPanel.module.css';

interface IChatPanelProps {
  selectedQuestion: null | IQuestion;
  currentMainTheme:
    | 'discussionOfGameMoments'
    | 'technicalIssues'
    | 'errorQuestions'
    | null;
}

export const chatPanelContext = React.createContext<{
  setAnswerMessage: React.Dispatch<React.SetStateAction<JSX.Element | null>>;
  createAnswerTemplate: (message: IMessage) => JSX.Element;
} | null>(null);

export default function ChatPanel(props: IChatPanelProps) {
  const [inputFooterValue, setInputFooterValue] = useState<string>('');
  const [answerMessage, setAnswerMessage] = useState<null | JSX.Element>(null);
  const [answerMessageComponent, setAnswerMessageComponent] =
    useState<null | JSX.Element>(null);

  const inputFooter = useRef<null | JSX.Element>(null);
  const messagesPanel = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (messagesPanel.current) {
      messagesPanel.current.scrollTo(0, messagesPanel.current.scrollHeight);
    }
  }, []);

  const createAnswerTemplate = (message: IMessage): JSX.Element => {
    return (
      <div
        style={{
          width: '100%',
          wordBreak: 'break-word',
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

  const closeAnswerMessageBox = (): void => {
    setAnswerMessage(null);
  };

  return (
    <chatPanelContext.Provider
      value={{
        setAnswerMessage: setAnswerMessage,
        createAnswerTemplate: createAnswerTemplate,
      }}>
      <div className={classes.chatPanel}>
        <div className={classes.chatPanelHeader}>
          {props.selectedQuestion ? (
            <div className={classes.selectionQuestionTitle}>
              {props.selectedQuestion.title}
            </div>
          ) : (
            <div className={classes.mainTitle}>
              <WestIcon className={classes.mainTitleIcon} /> Choose or ask a
              question
            </div>
          )}
        </div>

        <div ref={messagesPanel} className={classes.chatPanelMain}>
          {
            props.selectedQuestion &&
              props.selectedQuestion.messages.map((message: IMessage) => (
                <Message key={message.id} message={message} />
              ))

            // forumState.mainThemes[props.currentMainTheme].map(theme => {
            //   if (props.selectedQuestion?.id === theme.id) {
            //     return theme.messages.map((message: IMessage) => (
            //       <Message key={message.id} message={message} />
            //     ));
            //   }
            // })
          }

          {/* test answer */}
          {answerMessageComponent}
        </div>

        <div className={classes.chatPanelFooterWrapper}>
          {answerMessage && (
            <div className={classes.answerMessageBox}>
              <div className={classes.closeButtonContainer}>
                <IconButton onClick={closeAnswerMessageBox}>
                  <CloseIcon className={classes.answerMessageBoxCloseIcon} />
                </IconButton>
              </div>

              {answerMessage}
            </div>
          )}
          <div className={classes.chatPanelFooter}>
            <TextField
              className={classes.chatPanelInput}
              inputRef={inputFooter}
              value={inputFooterValue}
              onChange={event => {
                setInputFooterValue(event.target.value);
                // console.log(inputFooterValue);
              }}
              label="message"
              multiline
              maxRows={20}
            />
            <Button
              className={classes.sendButton}
              component="button"
              onClick={() => {
                // console.log(inputFooterValue);

                closeAnswerMessageBox();
                setInputFooterValue('');
                setAnswerMessageComponent(
                  <Message
                    message={{
                      name: forumState.myProfile.name,
                      id: forumState.myProfile.id,
                      isMyMessage: forumState.myProfile.isMyMessage,
                      time: forumState.myProfile.time.toDateString(),
                      message: inputFooterValue,
                      avatarURL: forumState.myProfile.avatarURL,
                    }}
                    answerMessage={answerMessage}
                  />
                );
              }}
              variant="outlined"
              endIcon={<SendIcon />}>
              Send
            </Button>
          </div>
        </div>
      </div>
    </chatPanelContext.Provider>
  );
}
