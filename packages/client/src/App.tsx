import { Route, Routes, BrowserRouter } from 'react-router-dom';
import ForumPage from './pages/forumPage/ForumPage';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import StartPage from './pages/startPage/StartPage';
import Chat from './features/forumPage/components/chat/Chat';
import Login from './pages/Login/index';
import Signup from './pages/Signup';
import GamePage from './pages/GamePage/GamePage';
import LeaderBoard from './pages/leaderBoardPage/LeaderBoardPage';
import './styles/App.css';

function App() {
  const theme = createTheme();
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
