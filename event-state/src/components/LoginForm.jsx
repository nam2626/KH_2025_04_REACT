import { useState } from 'react';

export default function LoginForm() {
  const [id, setId] = useState('');
  const [pass, setPass] = useState('');

  const changeId = (e) => setId(e.target.value);
  console.log("login 폼 렌더링");

  const changePass = (e) => {
    //pre는 현재 상태값
    setPass((pre) => {
        console.log("바뀌기 전값 : ",pre,"바뀔 값: ",e.target.value);
        return e.target.value;//바뀔값
    });
  }
  return (
    <>
      <h2>로그인 폼</h2>
      <input type="text" id="id" onKeyUp={changeId} /> <br />
      <input type="password" id="passwd" onChange={changePass}/>
      <br />
      <button>로그인</button>
      <hr />
      id : {id}<br/>
      pass {pass}
    </>
  );
}
