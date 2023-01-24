import { Route, Routes, BrowserRouter } from 'react-router-dom';
import { ThemeProvider, createTheme } from '@mui/material/styles';

import './styles/App.css';

import StartPage from './pages/startPage/StartPage';
import Login from './pages/Login/index';
import Signup from './pages/Signup';
import GamePage from './pages/GamePage/GamePage';

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
          </Routes>
        </div>
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;
