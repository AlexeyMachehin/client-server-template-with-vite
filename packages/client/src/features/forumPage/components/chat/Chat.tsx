import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import AsidePanel from './asidePanel/AsidePanel';
import ChatPanel from './chatPanel/ChatPanel';
import { IQuestion } from '../../../../service/types/forumPage/IQuestion';
import { forumState } from '../../../mockData/forumState';
import classes from './chat.module.css';

export default function Chat() {
  const { mainTheme, id } = useParams();
  const [foundedQuestion, setFoundQuestions] = useState<IQuestion[]>([]);
  const [selectedQuestion, setSelectedQuestion] = useState<IQuestion | null>(
    null
  );

  useEffect(() => {
    if (mainTheme) {
      setFoundQuestions(forumState[mainTheme]);
      if (id) {
        const selectedQuestion =
          foundedQuestion.find(question => question.id === Number(id)) ?? null;
        setSelectedQuestion(selectedQuestion);
      }
    }
  });

  return (
    <div className={classes.chatWrapper}>
      <AsidePanel
        foundQuestions={foundedQuestion}
        selectedQuestion={selectedQuestion}
      />
      <ChatPanel selectedQuestion={selectedQuestion} />
    </div>
  );
}
