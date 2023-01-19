import { Route, Routes, BrowserRouter } from 'react-router-dom';
import ForumPage from './pages/forumPage/ForumPage';
import StartPage from './pages/startPage/StartPage';
import Chat from './features/forumPage/components/chat/Chat';
import './styles/App.css';

function App() {
  return (
    <BrowserRouter>
      <div id="App" className="App">
        <Routes>
          <Route path="/" element={<StartPage />} />
          <Route path="forum" element={<ForumPage />} />
          <Route path="forum/:mainTheme" element={<Chat />}>
            <Route path=":id" element={<Chat />} />
          </Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
