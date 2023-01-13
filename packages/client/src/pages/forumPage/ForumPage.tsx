import { useState } from 'react';
import Chat from '../../features/forumPage/components/chat/Chat';
import Header from '../../features/forumPage/components/header/Header';
import MainList from '../../features/forumPage/components/mainList/MainList';
import classes from './forumPage.module.css';

export default function ForumPage() {
  const [isChatOpen, setIsChatOpen] = useState<boolean>(false);
  const [currentMainTheme, setCurrentMainTheme] = useState<
    'discussionOfGameMoments' | 'technicalIssues' | 'errorQuestions' | null
  >(null);
  const [foundQuestions, setFoundQuestions] = useState(null);

  return (
    <div className={classes.forumPageWrapper}>
      <Header
        setFoundQuestions={setFoundQuestions}
        setIsChatOpen={setIsChatOpen}
        setCurrentMainTheme={setCurrentMainTheme}
       
      />
      {isChatOpen ? (
        <Chat
          foundQuestions={foundQuestions}
          currentMainTheme={currentMainTheme}
        />
      ) : (
        <MainList
          setIsChatOpen={setIsChatOpen}
          setCurrentMainTheme={setCurrentMainTheme}
          setFoundQuestions={setFoundQuestions}
        />
      )}
    </div>
  );
}
