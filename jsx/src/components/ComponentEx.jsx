import '../css/style.css';

export default function ComponentEx() {
    //이벤트 목록
    //https://react.dev/reference/react-dom/components/common#react-event-object
    //경고창 띄우는 함수
    const showAlert = () => {
        alert('경고창이 출력되었습니다!');
    };
    // 배열 생성
    const items = ['item1', 'item2', 'item3'];    

    // 스타일 객체 생성
    const style = {
        color: 'blue',
        fontWeight: 'bold'
    };

    // 배열 생성, 사용자 정보 이름, 나이, 성별 3건 저장하는 배열 생성
    const users = [
        {name : '홍길동', age: 30, gender: '남'},
        {name : '김영희', age: 25, gender: '여'},
        {name : '이철수', age: 40, gender: '남'}
    ];

    const age = 15;

    return <div>
        <h2>태그는 반드시 닫아야됨</h2>
        <label htmlFor="id">아이디 : </label>
        <input type="text" id="id" placeholder="아이디를 입력하세요" />
        <hr></hr>
        {/* 버튼 생성 후 경고창 띄우기*/}
        <button onClick={showAlert}>경고창 출력 - 1</button>
        <button onClick={(e) => {
            console.log(e);
            // alert('경고창이 출력되었습니다!');
            //입력한 아이디값 경고창으로 출력
            alert(`입력한 아이디 : ${document.querySelector('#id').value}`);

        }}>경고창 출력 - 2</button>
        <hr></hr>
        {/* 배열 출력 */}
        <h3>반복적인 UI 생성</h3>
        <ul>
            {items.map((item, index) => (
                <li style={style}>{item}</li>
            ))}
        </ul>
        <hr></hr>
        {/* 배열 출력 - 사용자 정보 */}
        {
            users.map((user, index) => (
                <p key={index} className='bold'>
                    {user.name} / {user.age} / {user.gender}
                </p>
            ))
        }
        <hr></hr>
        <h2>조건부 렌더링</h2>
        {
            age >= 20 ? <p>성인입니다.</p> : <p>미성년자입니다.</p>
        }
    </div>;
}