import { useRef } from 'react';
import { useNavigate } from 'react-router-dom';
export default () => {
  const txtId = useRef(null);
  const txtPasswd = useRef(null);
  const txtPasswdChk = useRef(null);
  const txtName = useRef(null);
  const txtNickName = useRef(null);

  const navigate = useNavigate();
  const passCheck = () => {
    const pattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#%$^&*])[A-Za-z\d!@#$%\^&\*]{8,20}$/;
    console.log(pattern.test(txtPasswd.current.value));
  };
  return (
    <div>
      <h2>회원 등록</h2>
      <ul>
        <li>
          <input type="text" ref={txtId} placeholder="아이디를 입력하세요" />
        </li>
        <li>
          <input type="text" onChange={passCheck} ref={txtPasswd} placeholder="암호를 입력하세요" />
        </li>
        <li>
          <input type="password" ref={txtPasswdChk} placeholder="암호를 한번 더 입력하세요" />
        </li>
        <li></li>
        <li>
          <input type="text" ref={txtName} placeholder="이름을 입력하세요" />
        </li>
        <li>
          <input type="text" ref={txtNickName} placeholder="닉네임을 입력하세요" />
        </li>
        <li>
          <button>회원가입</button>
          <button onClick={() => navigate(-1)}>취소</button>
        </li>
      </ul>
    </div>
  );
};
