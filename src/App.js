import './App.css';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import Greeting from './components/greeting';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Greeting />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
