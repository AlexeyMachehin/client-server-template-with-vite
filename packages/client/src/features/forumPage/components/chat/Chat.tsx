import { useState } from 'react';
import AsidePanel from './asidePanel/AsidePanel';
import ChatPanel from './chatPanel/ChatPanel';
import { IQuestion } from '../../../../service/types/forumPage/IQuestion';
import classes from './chat.module.css';

interface IChatProps {
  setFoundQuestions: React.Dispatch<React.SetStateAction<IQuestion[] | null>>;
  foundQuestions: IQuestion[] | null;
  currentMainTheme:
    | 'discussionOfGameMoments'
    | 'technicalIssues'
    | 'errorQuestions'
    | null;
}

export default function Chat(props: IChatProps) {
  const [selectedQuestion, setSelectedQuestion] = useState<null | IQuestion>(null);

  const handleSelectedQuestion = (selectedQuestion: IQuestion): void => {
    setSelectedQuestion(selectedQuestion);
  };

  return (
    <div className={classes.chatWrapper}>
      <AsidePanel
        setFoundQuestions={props.setFoundQuestions}
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
