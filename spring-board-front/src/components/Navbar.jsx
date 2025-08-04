//src/components/NavBar.jsx

import { Link } from 'react-router-dom';
import '../css/NavBar.css';

export default () => {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">홈</Link>
        </li>
        <li>
          <Link to="/login">로그인</Link>
        </li>
        <li>
          <Link to="/signup">회원가입</Link>
        </li>
      </ul>
    </nav>
  );
};
