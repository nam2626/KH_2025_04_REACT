export default function ComponentEx() {
    //이벤트 목록
    //https://react.dev/reference/react-dom/components/common#react-event-object
    //경고창 띄우는 함수
    const showAlert = () => {
        alert('경고창이 출력되었습니다!');
    };

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

    </div>;
}