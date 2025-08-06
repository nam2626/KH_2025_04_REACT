import logo from './logo.svg';
import './App.css';
import { Route, BrowserRouter, Routes } from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import SignupPage from './pages/SignupPage';
import HomePage from './pages/HomePage';
import BoardView from './pages/BoardView';
import Navbar from './components/Navbar';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <div>
        <Routes>
          {/* 공개 라우트 */}
          <Route path="/login" element={<LoginPage />} />
          <Route path="/signup" element={<SignupPage />} />
          <Route path="/" element={<HomePage />} />
          <Route path="/board/:bno" element={<BoardView />} />
          {/* 보호된 라우트 */}

          {/* 경로가 잘못된 경우 */}
          <Route path="*" element={<h2>404 페이지를 찾을 수 없습니다.</h2>} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
