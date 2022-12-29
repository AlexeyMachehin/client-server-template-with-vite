import { Route, Routes } from 'react-router-dom';
import StartPage from './pages/startPage/StartPage';
import './styles/App.css';

function App() {
  return (
    <div id="App" className="App">
      <Routes>
        <Route path="/" element={<StartPage />} />
      </Routes>
    </div>
  );
}

export default App;
