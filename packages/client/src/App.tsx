import { Route, Routes, BrowserRouter, Navigate } from 'react-router-dom';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import ForumPage from './pages/forumPage/ForumPage';
import StartPage from './pages/startPage/StartPage';
import Chat from './features/forumPage/components/chat/Chat';
import Login from './pages/Login/index';
import Signup from './pages/Signup';
import LeaderBoard from './pages/leaderBoardPage/LeaderBoardPage';
import GamePage from './pages/GamePage/GamePage';
import AuthGuard from './features/authGuard/AuthGuard';
import { selectorIsLoading } from './store/user/selectors';
import UnAuthGuard from './features/unAuthGuard/UnAuthGuard';
import { Layout } from './features/layout/Layout';
import { useAppSelector } from './utils/hooks';
import './styles/App.css';

function App() {
  const theme = createTheme();
  const isLoading = useAppSelector(selectorIsLoading);

  return (
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <Layout>
          <div id="App" className="App">
            {isLoading && (
              <Routes>
                <Route path="*" element={<Navigate to="/" />} />
                <Route element={<UnAuthGuard />}>
                  <Route path="/login" element={<Login />} />
                  <Route path="/signup" element={<Signup />} />
                </Route>
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
            )}
          </div>
        </Layout>
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;
