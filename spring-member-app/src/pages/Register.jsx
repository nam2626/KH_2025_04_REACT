import { useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
export default () => {
  const txtId = useRef(null);
  const txtPasswd = useRef(null);
  const txtPasswdChk = useRef(null);
  const txtName = useRef(null);
  const txtNickName = useRef(null);
  const [passChkResult, setPassChkResult] = useState('');
  const navigate = useNavigate();
  const passCheck = () => {
    const pattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#%$^&*])[A-Za-z\d!@#$%\^&\*]{8,20}$/;
    console.log(pattern.test(txtPasswd.current.value));
    const falseStyle = { fontWegiht: 'bold', color: 'red' };
    const truetyle = { fontWegiht: 'bold', color: 'blue' };
    if (pattern.test(txtPasswd.current.value)) {
      if (txtPasswd.current.value == txtPasswdChk.current.value) {
        setPassChkResult(<span style={truetyle}>두 암호가 동일하게 입력되었습니다.</span>);
        return true;
      } else {
        setPassChkResult(<span style={falseStyle}>두 암호가 일치하지 않습니다.</span>);
      }
    } else {
      setPassChkResult(<span style={falseStyle}>암호가 형식에 일치 하지 않습니다.</span>);
    }
    return false;
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
          <input type="password" onChange={passCheck} ref={txtPasswdChk} placeholder="암호를 한번 더 입력하세요" />
        </li>
        <li>{passChkResult}</li>
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
