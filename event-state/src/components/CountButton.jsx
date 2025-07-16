import { useEffect, useState } from "react";

export default () => {
  const [count, setCount] = useState(0);
  
return <button onClick={() => {
    setCount(count + 1);
    // count 변수는 상태변수이므로 값이 바뀌면 컴포넌트가 다시 렌더링됨.
    // 로그로 찍히는건 이전 상태값이 찍힘.
    console.log("count : ",count);
  }}>Count: {count}</button>;
};
