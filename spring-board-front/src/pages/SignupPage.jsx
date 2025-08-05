import { useRef } from 'react';
import { signup } from '../service/authApi';
import { useNavigate } from 'react-router-dom';

export default () => {
  const userid = useRef(null);
  const password = useRef(null);
  const username = useRef(null);
  const navigate = useNavigate();
  const handleRegister = async () => {
    try {
      const response = await signup(userid.current.value, username.current.value, password.current.value);
      console.log(response);
      alert('회원가입 성공');
      navigate('/login');
    } catch (error) {
      alert('회원가입 오류');
      console.log('회원가입 오류 : ', error);
    }
  };

  return (
    <div>
      <h2>회원가입</h2>
      <input type="text" ref={userid} placeholder="아이디 입력하세요" />
      <br />
      <input type="password" ref={password} placeholder="암호 입력하세요" />
      <br />
      <input type="text" ref={username} placeholder="이름 입력하세요" />
      <br />
      <button onClick={handleRegister}>회원가입</button>
      <p>
        이미 계정이 있으신가요? <a href="/login">로그인</a>
      </p>
    </div>
  );
};
