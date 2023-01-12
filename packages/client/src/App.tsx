import { Route, Routes, BrowserRouter } from 'react-router-dom';
import GamePage from './pages/gamePage/GamePage';
import StartPage from './pages/startPage/StartPage';
import './styles/App.css';

function App() {
  return (
    <BrowserRouter>
      <div id="App" className="App">
        <Routes>
          <Route path="/" element={<StartPage />} />
          <Route path="/game" element={<GamePage />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
