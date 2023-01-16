import { useState } from 'react';
import AsidePanel from './asidePanel/AsidePanel';
import ChatPanel from './chatPanel/ChatPanel';
import { IQuestion } from '../../../../service/types/forumPage/IQuestion';
import classes from './chat.module.css';

export default function Chat(props: {
  setIsChatOpen: React.Dispatch<React.SetStateAction<boolean>>;
  foundQuestions: IQuestion[] | null;
  currentMainTheme:
    | 'discussionOfGameMoments'
    | 'technicalIssues'
    | 'errorQuestions'
    | null;
}) {
  const [selectedItemId, setSelectedItemId] = useState<number>(0);
  const [selectedQuestion, setItem] = useState<null | IQuestion>(null);

  const handleSelectedQuestion = (selectedQuestion: IQuestion): void => {
    setSelectedItemId(selectedQuestion.id);
    setItem(selectedQuestion);
  };

  return (
    <div className={classes.chatWrapper}>
      <AsidePanel
        setIsChatOpen={props.setIsChatOpen}
        foundQuestions={props.foundQuestions}
        currentMainTheme={props.currentMainTheme}
        handleSelectedQuestion={handleSelectedQuestion}
        selectedItemId={selectedItemId}
        selectedQuestion={selectedQuestion}
      />
      <ChatPanel
        currentMainTheme={props.currentMainTheme}
        selectedQuestion={selectedQuestion}
      />
    </div>
  );
}
