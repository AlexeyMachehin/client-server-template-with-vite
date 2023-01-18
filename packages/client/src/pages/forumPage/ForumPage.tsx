import { useEffect, useState } from 'react';
import { useNavigate, Route, Routes, useParams } from 'react-router-dom';
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

   

  // useEffect(() => {
  //   isChatOpen
  //     ? currentMainTheme
  //       ? navigate(`${currentMainTheme?.toString()}`)
  //       : navigate('chat')
  //     : navigate('mainList');
  // }, [isChatOpen]);

  return (
    <div className={classes.forumPageWrapper}>
      <Header
        setFoundQuestions={setFoundQuestions}
        setCurrentMainTheme={setCurrentMainTheme}
        currentMainTheme={currentMainTheme}
      />

      <Routes>
        {/* <Route
          path={`${"discussionOfGameMoments" || "errorQuestions" || "technicalIssues" || "mainList" || "foundQuestions"}/:questionTitle`}
          element={
            <Chat
              setIsChatOpen={setIsChatOpen}
              foundQuestions={foundQuestions}
              currentMainTheme={currentMainTheme}
            />
          }
        /> */}

        <Route
          path=":mainTheme/:questionTitle"
          element={<Chat foundQuestions={null} currentMainTheme={null} />}
        />

        <Route
          path="/discussionOfGameMoments"
          element={
            <Chat
              foundQuestions={foundQuestions}
              currentMainTheme={'discussionOfGameMoments'}
            />
          }
        />
        <Route
          path="/technicalIssues"
          element={
            <Chat
              foundQuestions={foundQuestions}
              currentMainTheme={'technicalIssues'}
            />
          }
        />
        <Route
          path="/errorQuestions"
          element={
            <Chat
              foundQuestions={foundQuestions}
              currentMainTheme={'errorQuestions'}
            />
          }
        />

        <Route
          path="foundQuestions"
          element={
            <Chat
              foundQuestions={foundQuestions}
              currentMainTheme={currentMainTheme}
            />
          }
        />

        <Route
          path="mainList"
          element={
            <MainList
              setCurrentMainTheme={setCurrentMainTheme}
              setFoundQuestions={setFoundQuestions}
            />
          }
        />
      </Routes>
    </div>
  );
}
