import { useState } from 'react';
import AsidePanel from './asidePanel/AsidePanel';
import ChatPanel from './chatPanel/ChatPanel';
import { IQuestion } from '../../../../service/types/forumPage/IQuestion';
import classes from './chat.module.css';

interface IChatProps {
  selectedQuestion: IQuestion | null;
  setSelectedQuestion: any;
  setFoundQuestions: React.Dispatch<React.SetStateAction<IQuestion[] | null>>;
  foundQuestions: IQuestion[] | null;
  currentMainTheme:
    | 'discussionOfGameMoments'
    | 'technicalIssues'
    | 'errorQuestions'
    | null;
}

export default function Chat(props: IChatProps) {
  return (
    <div className={classes.chatWrapper}>
      <AsidePanel
        setFoundQuestions={props.setFoundQuestions}
        foundQuestions={props.foundQuestions}
        currentMainTheme={props.currentMainTheme}
        setSelectedQuestion={props.setSelectedQuestion}
        selectedQuestion={props.selectedQuestion}
      />
      <ChatPanel selectedQuestion={props.selectedQuestion} />
    </div>
  );
}
