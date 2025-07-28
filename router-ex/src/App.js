import logo from './logo.svg';
import './App.css';

import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import NotFoundPage from './pages/NotFoundPage';
import Header from './components/Header';
import BoardPage from './pages/BoardPage';
import TeamPage from './pages/TeamPage';
import CompanyPage from './pages/CompanyPage';
import PostDetailPage from './pages/PostDetailPage';
import ProductList from './pages/ProductList';
function App() {
  return (
    <BrowserRouter>
      <Header />
      <hr />
      <Routes>
        {/* 기본 경로 : / */}
        <Route path="/" element={<HomePage />} />
        {/* /about 경로 */}
        <Route path="/about" element={<AboutPage />}>
          {/* 중첩된 라우트에서는 / 를 안붙임, 자동으로 /about/team 조립됨 */}
          <Route path="team" element={<TeamPage />} />
          <Route path="company" element={<CompanyPage />} />
        </Route>
        {/* /board 경로 */}
        <Route path="/board" element={<BoardPage />} />
        {/* PathVariable 보내는 방법 */}
        <Route path="/post/:id" element={<PostDetailPage />} />
        {/* 쿼리 스트링 사용 */}
        <Route path="/products" element={<ProductList />} />
        {/* 없는 경로 접근시 NotFoundPage 렌더링 */}
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
