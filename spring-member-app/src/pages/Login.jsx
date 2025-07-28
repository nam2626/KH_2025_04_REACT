import { useNavigate } from 'react-router-dom';

export default () => {
  const navigate = useNavigate();

  return (
    <div>
      <h2>로그인</h2>
      <input type="text" placeholder="아이디 입력" />
      <br />
      <input type="password" placeholder="암호 입력" />
      <br />
      <button onClick={() => navigate('/home')}>로그인</button>
    </div>
  );
};
