export default function LoginForm() {
    //로그인 버튼 눌렀을때 입력한 값을 경고창 출력하는 함수 작성
    //로그인 버튼에 클릭이벤트에 연결
    const btnClickLogin = () => {
        const email = document.querySelector('#email').value;
        const passwd = document.querySelector('#passwd').value;
        alert(`입력한 이메일: ${email}, 비밀번호: ${passwd}`);
    }
    const txtChange = (e) => {
        console.log(`입력한 -> ${e.target.name}: ${e.target.value}`);
    }
    return (
        <div style={{marginBottom: '200px'}}>
            <h2>LoginForm</h2>
            <input type="email" name="email" id="email" placeholder="E-mail 입력하세요" onChange={txtChange}/><br />
            <input type="password" name="passwd" id="passwd" placeholder="비밀번호 입력하기" onKeyUp={txtChange}/><br/>
            <button type="button" onClick={btnClickLogin}>로그인하기</button>
        </div>
    );
}