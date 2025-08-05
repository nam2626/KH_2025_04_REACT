//src/components/NavBar.jsx

import { Link, useNavigate } from 'react-router-dom';
import '../css/NavBar.css';
import { clearUserData, getUserData, isAuthenticated } from '../utils/authUtil';
import { apiLogout } from '../service/authApi';

export default () => {
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      //서버에 로그아웃 요청
      await apiLogout();
      //사용자 데이터도 삭제
      clearUserData();
      //홈으로 이동
      navigate('/');
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">홈</Link>
        </li>
        {isAuthenticated() && getUserData() ? (
          getUserData().role === 'ROLE_ADMIN' ? (
            <>
              <li>
                <Link to="/admin">관리자 페이지</Link>
              </li>
              <li>
                <button onClick={handleLogout}>로그아웃</button>
              </li>
            </>
          ) : (
            <>
              <li>
                <Link to="/mypage">마이 페이지</Link>
              </li>
              <li>
                <Link to="/board/write">글쓰기</Link>
              </li>
              <li>
                <button onClick={handleLogout}>로그아웃</button>
              </li>
            </>
          )
        ) : (
          <>
            <li>
              <Link to="/login">로그인</Link>
            </li>
            <li>
              <Link to="/signup">회원가입</Link>
            </li>
          </>
        )}
      </ul>
    </nav>
  );
};
