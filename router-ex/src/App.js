import logo from './logo.svg';
import './App.css';

import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import NotFoundPage from './pages/NotFoundPage';
import Header from './components/Header';
function App() {
  return (
    <BrowserRouter>
      <Header />
      <hr />
      <Routes>
        {/* 기본 경로 : / */}
        <Route path="/" element={<HomePage />} />
        {/* /about 경로 */}
        <Route path="/about" element={<AboutPage />} />
        {/* 없는 경로 접근시 NotFoundPage 렌더링 */}
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
