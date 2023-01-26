import { Route, Routes, BrowserRouter } from 'react-router-dom';
import StartPage from './pages/startPage/StartPage';
import Login from './pages/Login/index';
import Signup from './pages/Signup';
import LeaderBoard from './pages/leaderBoardPage/LeaderBoardPage';

import './styles/App.css';

import { ThemeProvider, createTheme } from '@mui/material/styles';
import { Provider } from 'react-redux';
import { store, useSelector } from './store/store';
import RequireAuth from './utils/Route/ProtectedRoute';

function App() {
  const theme = createTheme();

  const user = useSelector(state => state['common'].user);

  return (
    <BrowserRouter>
      <Provider store={store}>
        <ThemeProvider theme={theme}>
          <div id="App" className="App">
            <Routes>
              <Route element={<RequireAuth isAuthorized={!!user} />}>
                <Route path="/" element={<StartPage />} />
              </Route>
              <Route path="/login" element={<Login />} />
              <Route path="/signup" element={<Signup />} />
              <Route path="/leaderboard" element={<LeaderBoard />} />
            </Routes>
          </div>
        </ThemeProvider>
      </Provider>
    </BrowserRouter>
  );
}

export default App;
