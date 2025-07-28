import { Link } from 'react-router-dom';
import '../css/header.css';
export default () => {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/home">홈</Link>
        </li>
        <li>
          <Link to="/register">회원등록</Link>
        </li>
      </ul>
    </nav>
  );
};
