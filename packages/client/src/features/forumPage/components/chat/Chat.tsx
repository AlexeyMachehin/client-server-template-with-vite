import { useState } from 'react';
import AsidePanel from './asidePanel/AsidePanel';
import ChatPanel from './chatPanel/ChatPanel';
import { IQuestion } from '../../../../service/types/forumPage/IQuestion';
import classes from './chat.module.css';

export default function Chat() {
  const [selectedItemId, setSelectedItemId] = useState<number>(0);
  const [selectedQuestion, setItem] = useState<null | IQuestion>(null);

  const handleSelectedQuestion = (selectedQuestion: IQuestion): void => {
    setSelectedItemId(selectedQuestion.id);
    setItem(selectedQuestion);
  };

  return (
    <div className={classes.chatWrapper}>
      <AsidePanel
        handleSelectedQuestion={handleSelectedQuestion}
        selectedItemId={selectedItemId}
      />
      <ChatPanel selectedQuestion={selectedQuestion} />
    </div>
  );
}
