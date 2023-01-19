import { Route, Routes, BrowserRouter, Navigate } from 'react-router-dom';
import ForumPage from './pages/forumPage/ForumPage';
import StartPage from './pages/startPage/StartPage';
import '@fontsource/orbitron';
import './styles/App.css';
import Chat from './features/forumPage/components/chat/Chat';

function App() {
  return (
    <BrowserRouter>
      <div id="App" className="App">
        <Routes>
          <Route path="/" element={<StartPage />} />
          <Route path="forum/*" element={<ForumPage />} />
          <Route path="forum" element={<Navigate to="main" />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
