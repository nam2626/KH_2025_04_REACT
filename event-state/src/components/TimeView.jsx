import { useState } from "react";

export default function TimeView() {
    // 일반 변수의 값이 바뀌어도 다시 렌더링 되지 않음.
    // 해당 date 변수를 상태값으로 지정해야 상태값이 바뀌면 다시 렌더링이 됨. <-- 상태변수(state)
    // let date = new Date().toLocaleTimeString();
    // setInterval(() => {
    //     date = new Date().toLocaleTimeString();
    //     console.log(date);
    // }, 1000);
    console.log("TimeView 렌더링");
    const [date, setDate] = useState(new Date().toLocaleTimeString());
    setTimeout(() => {
        setDate(new Date().toLocaleTimeString());
    }, 1000);
    return (
        <div>
            <h2>현재 시간</h2>
            <p>{date}</p>
        </div>
    );
}