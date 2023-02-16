import { BrowserRouter, Routes, Route } from 'react-router-dom';

import './App.css';

import Layout from './components/Layout/Layout';
import End from './pages/End';
import Start from './pages/Start';
import Quiz from './pages/Quiz';
import HighScore from './pages/HighScore';
import { Reset } from 'styled-reset';

function App() {
  return (
    <div className='App'>
      <Reset />
      <BrowserRouter>
        <Layout>
          <Routes>
            <Route path='/' element={<Start />} />
            <Route path='/quiz' element={<Quiz />} />
            <Route path='/end' element={<End />} />
            <Route path='/high-score' element={<HighScore />} />
            <Route path='*' element={<p>Your're Lost! No Page Here!</p>} />
          </Routes>
        </Layout>
      </BrowserRouter>
    </div>
  );
}

export default App;
