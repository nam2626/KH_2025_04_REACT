import { useEffect, useState } from 'react';

//useEffect
export default () => {
  const [today, setToday] = useState(new Date());
  const [count, setCount] = useState(0);

  //매번 렌더링 될때마다 실행
  //의존성 배열을 추가하지않으면
  //매번 렌더링 될때마다 실행
  //   useEffect(() => {
  //     setTimeout(() => {
  //       setToday(new Date());
  //       console.log(today.toLocaleString());
  //     }, 1000);
  //   });

  //의존성 배열이 있는 경우
  // [] 넣고, 상태값을 안넣으면 한번만 실행
  //   useEffect(() => {
  //     const id = setTimeout(() => {
  //       setToday(new Date());
  //       console.log(today.toLocaleString());
  //     }, 1000);
  //     return () => {
  //       //클린업 함수
  //       //해당 컴포넌트가 언마운트 될떄 실행되는 함수
  //       clearTimeout(id);
  //       console.log('클린업 함수 실행');
  //     };
  //   }, []);

  //의존성 배열에 count를 넣으면
  //count가 변경될때마다 실행
  useEffect(() => {
    const id = setTimeout(() => {
      setToday(new Date());
      console.log(today.toLocaleString());
    }, 1000);
    return () => {
      //클린업 함수
      //해당 컴포넌트가 언마운트 될떄 실행되는 함수
      clearTimeout(id);
      console.log('클린업 함수 실행');
    };
  }, [count]);

  return (
    <div>
      <p>현재 시간 :{today.toLocaleString()}</p>
      {/* 카운트 버튼 만들어서 숫자 카운트되는 부분 추가 */}
      <p>카운트: {count}</p>
      <button onClick={() => setCount(count + 1)}>카운트 증가</button>
    </div>
  );
};
