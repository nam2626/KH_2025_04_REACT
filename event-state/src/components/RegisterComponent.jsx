import { useState } from 'react';

export default () => {
  const [name, setName] = useState('');
  const [passwd, setPasswd] = useState('');
  const [email, setEmail] = useState('');

  const changeName = (e) => setName(e.target.value);
  const changeEmail = (e) => setEmail(e.target.value);
  const changePasswd = (e) => setPasswd(e.target.value);

  const handleSubmit = (e) => {
    alert(name + ' ' + email + ' ' + passwd);
    e.preventDefault(); // 기본 이벤트 처리 제거
  };
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="name">이름</label>
        <input type="text" id="name" onChange={changeName} />
      </div>
      <div>
        <label htmlFor="email">이메일</label>
        <input type="email" id="email" onChange={changeEmail} />
      </div>
      <div>
        <label htmlFor="password">암호</label>
        <input type="password" id="password" onChange={changePasswd} />
      </div>
      <button>가입하기</button>
    </form>
  );
};
