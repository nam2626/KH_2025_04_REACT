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
      </ul>
    </nav>
  );
};
