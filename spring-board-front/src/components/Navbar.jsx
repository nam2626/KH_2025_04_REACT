//src/components/NavBar.jsx

import { Link } from 'react-router-dom';
import '../css/NavBar.css';
import { useEffect, useState } from 'react';
import { getUserData, isAuthenticated } from '../utils/authUtil';

export default () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const data = getUserData();
    if (!data && isAuthenticated()) {
      setUser(data);
    }
  }, []);

  return (
    <nav>
      <ul>
        <li>
          <Link to="/">홈</Link>
        </li>
        {isAuthenticated() && user ? user.role === 'ROLE_ADMIN' ? <></> : <></> : <></>}
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
