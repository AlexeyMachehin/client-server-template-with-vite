import { useState } from 'react';
import {useParams} from "react-router-dom"
import AsidePanel from './asidePanel/AsidePanel';
import ChatPanel from './chatPanel/ChatPanel';
import { IQuestion } from '../../../../service/types/forumPage/IQuestion';
import classes from './chat.module.css';

interface IChatProps {
 
  foundQuestions: IQuestion[] | null ;
  currentMainTheme:
    | 'discussionOfGameMoments'
    | 'technicalIssues'
    | 'errorQuestions'
    | null;
}

export default function Chat(props: IChatProps) {
  const [selectedQuestion, setItem] = useState<null | IQuestion>(null);
 
  const handleSelectedQuestion = (selectedQuestion: IQuestion): void => {
    setItem(selectedQuestion);
  };
 
  return (
    <div className={classes.chatWrapper}>
      <AsidePanel
       
        foundQuestions={props.foundQuestions}
        currentMainTheme={props.currentMainTheme}
        handleSelectedQuestion={handleSelectedQuestion}
        selectedQuestion={selectedQuestion}
      />
      <ChatPanel
        currentMainTheme={props.currentMainTheme}
        selectedQuestion={selectedQuestion}
      />
    </div>
  );
}
