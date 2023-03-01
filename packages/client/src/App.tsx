import { Route, Routes, BrowserRouter } from 'react-router-dom';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { setUser } from './store/user/thunk';
import { useAppDispatch, useAppSelector } from './utils/hooks';
import { selectorUser } from './store/user/selectors';
import { useEffect } from 'react';
import ForumPage from './pages/forumPage/ForumPage';
import StartPage from './pages/startPage/StartPage';
import Chat from './features/forumPage/components/chat/Chat';
import Login from './pages/Login/index';
import Signup from './pages/Signup';
import LeaderBoard from './pages/leaderBoardPage/LeaderBoardPage';
import GamePage from './pages/GamePage/GamePage';
import './styles/App.css';

function App() {
  const theme = createTheme();
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(setUser());
  }, []);

  const user = useAppSelector(selectorUser);

  return (
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <div id="App" className="App">
          <Routes>
            <Route path="/" element={<StartPage />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/game" element={<GamePage />} />
            <Route path="forum" element={<ForumPage />} />
            <Route path="forum/:mainTopic" element={<Chat />}>
              <Route path=":id" element={<Chat />} />
            </Route>
            <Route path="/leaderboard" element={<LeaderBoard />} />
          </Routes>
        </div>
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;
