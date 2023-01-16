import { useEffect, useState } from 'react';
import { useNavigate, Route, Routes } from 'react-router-dom';
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

  const navigate = useNavigate();

  useEffect(() => {
    isChatOpen
      ? currentMainTheme
        ? navigate(`${currentMainTheme?.toString()}`)
        : navigate('chat')
      : navigate('mainList');
  }, [isChatOpen]);

  return (
    <div className={classes.forumPageWrapper}>
      <Header
        setFoundQuestions={setFoundQuestions}
        setIsChatOpen={setIsChatOpen}
        setCurrentMainTheme={setCurrentMainTheme}
        currentMainTheme={currentMainTheme}
      />

      <Routes>
        <Route
          path={currentMainTheme ? `${currentMainTheme?.toString()}` : 'chat'}
          element={
            <Chat
              setIsChatOpen={setIsChatOpen}
              foundQuestions={foundQuestions}
              currentMainTheme={currentMainTheme}
            />
          }
        />
        <Route
          path="mainList"
          element={
            <MainList
              setIsChatOpen={setIsChatOpen}
              setCurrentMainTheme={setCurrentMainTheme}
              setFoundQuestions={setFoundQuestions}
            />
          }
        />
      </Routes>
    </div>
  );
}
