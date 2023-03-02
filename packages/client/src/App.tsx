import { Route, Routes, BrowserRouter } from 'react-router-dom';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { setUser } from './store/user/thunk';
import { useAppDispatch, useAppSelector } from './utils/hooks';
import { useEffect } from 'react';
import ForumPage from './pages/forumPage/ForumPage';
import StartPage from './pages/startPage/StartPage';
import Chat from './features/forumPage/components/chat/Chat';
import Login from './pages/Login/index';
import Signup from './pages/Signup';
import LeaderBoard from './pages/leaderBoardPage/LeaderBoardPage';
import GamePage from './pages/GamePage/GamePage';
import AuthGuard from './features/authGuard/AuthGuard';
import './styles/App.css';
import { selectorUser } from './store/user/selectors';
import { memo } from 'react';

function App() {
  const theme = createTheme();
  // const dispatch = useAppDispatch();
  // const user = useAppSelector(selectorUser);

  useEffect(() => {
  
    console.log(2);
  }, []);

  return (
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <div id="App" className="App">
          <Layout>
            <Routes>
              <Route path="/login" element={<Login />} />
              <Route path="/signup" element={<Signup />} />
              <Route element={<AuthGuard />}>
                <Route path="/" element={<StartPage />} />
                <Route path="/game" element={<GamePage />} />
                <Route path="forum" element={<ForumPage />} />
                <Route path="forum/:mainTopic" element={<Chat />}>
                  <Route path=":id" element={<Chat />} />
                </Route>
                <Route path="/leaderboard" element={<LeaderBoard />} />
              </Route>
            </Routes>
          </Layout>
        </div>
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;

function Layout({ children }: { children: JSX.Element }) {
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(setUser());
    console.log(1)
  }, []);

  return children;
};
