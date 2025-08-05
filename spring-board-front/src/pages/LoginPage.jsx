import { useState } from 'react';
import { getUserData, login } from '../service/authApi';
import { useNavigate } from 'react-router-dom';

export default () => {
  const navigate = useNavigate();
  /* 로그인할 아이디 비번 저장 */
  const [userid, setUserid] = useState('');
  const [password, setPassword] = useState('');
  /* 로그인 호출하는 함수 */
  const handleLogin = async () => {
    try {
      const resonse = await login(userid, password);
      console.log(resonse);
      alert('로그인 성공');
      //사용자 정보를 받아서 저장
      const userData = await getUserData();
      console.log(userData);
      //로그인 성공 후 홈으로 이동
      navigate('/');
    } catch (error) {
      alert('로그인 실패');
      console.log('로그인 오류 : ', error);
    }
  };
  return (
    <div>
      <h2>로그인</h2>
      {/* 로그인 폼 */}
      <input type="text" placeholder="아이디" onChange={(e) => setUserid(e.target.value)} />
      <br />
      <input type="password" placeholder="암호" onChange={(e) => setPassword(e.target.value)} />
      <button onClick={handleLogin}>로그인</button>
      <p>
        계정이 없으신가요? <a href="/signup">회원가입</a>
      </p>
    </div>
  );
};
