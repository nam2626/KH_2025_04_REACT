import { Link } from 'react-router-dom';

export default () => {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">홈</Link>
        </li>
        <li>
          <Link to="/about">소개</Link>
        </li>
        <li>
          <Link to="/board">게시판</Link>
        </li>
        <li>
          <Link to="/post/5">포스트</Link>
        </li>
        <li>
          <Link to="/products?sort=price_desc&category=electronic">제품 목록</Link>
        </li>
      </ul>
    </nav>
  );
};
