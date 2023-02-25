import { Route, Routes } from 'react-router-dom';
import { ThemeProvider, createTheme } from '@mui/material/styles';
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
  return (
    <ThemeProvider theme={theme}>
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
    </ThemeProvider>
  );
}

export default App;
