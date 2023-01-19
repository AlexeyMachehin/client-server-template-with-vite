import { useState } from 'react';
import { Route, Routes, useParams } from 'react-router-dom';
import Chat from '../../features/forumPage/components/chat/Chat';
import Header from '../../features/forumPage/components/header/Header';
import MainList from '../../features/forumPage/components/mainList/MainList';
import { IQuestion } from '../../service/types/forumPage/IQuestion';
import classes from './forumPage.module.css';

export default function ForumPage() {
  const [currentMainTheme, setCurrentMainTheme] = useState<
    'discussionOfGameMoments' | 'technicalIssues' | 'errorQuestions' | null
  >(null);
  const [foundQuestions, setFoundQuestions] = useState<IQuestion[] | null>(
    null
  );
  const [selectedQuestion, setSelectedQuestion] = useState<null | IQuestion>(
    null
  );



  return (
    <div className={classes.forumPageWrapper}>
      <Routes>
        <Route
          path=":mainTheme/:questionId"
          element={
            <Chat
              setFoundQuestions={setFoundQuestions}
              foundQuestions={null}
              currentMainTheme={null}
              setSelectedQuestion={setSelectedQuestion}
              selectedQuestion={selectedQuestion}
            />
          }
        />

        <Route
          path="main"
          element={
            <>
              <Header
                foundQuestions={foundQuestions}
                setFoundQuestions={setFoundQuestions}
                setCurrentMainTheme={setCurrentMainTheme}
                currentMainTheme={currentMainTheme}
                setSelectedQuestion={setSelectedQuestion}
              />
              <MainList
                setSelectedQuestion={setSelectedQuestion}
                setCurrentMainTheme={setCurrentMainTheme}
                setFoundQuestions={setFoundQuestions}
              />
            </>
          }
        />

      

        <Route
          path="/discussionOfGameMoments/*"
          element={
            <Chat
              setFoundQuestions={setFoundQuestions}
              foundQuestions={foundQuestions}
              currentMainTheme={'discussionOfGameMoments'}
              setSelectedQuestion={setSelectedQuestion}
              selectedQuestion={selectedQuestion}
            />
          }
        />

        <Route
          path="/technicalIssues/*"
          element={
            <Chat
              setFoundQuestions={setFoundQuestions}
              foundQuestions={foundQuestions}
              currentMainTheme={'technicalIssues'}
              setSelectedQuestion={setSelectedQuestion}
              selectedQuestion={selectedQuestion}
            />
          }
        />
        <Route
          path="/errorQuestions/*"
          element={
            <Chat
              setFoundQuestions={setFoundQuestions}
              foundQuestions={foundQuestions}
              currentMainTheme={'errorQuestions'}
              setSelectedQuestion={setSelectedQuestion}
              selectedQuestion={selectedQuestion}
            />
          }
        />
      </Routes>
    </div>
  );
}
