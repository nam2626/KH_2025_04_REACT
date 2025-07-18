import { useMemo, useRef, useState } from 'react';

export default () => {
  const [list, setList] = useState([]);
  const num = useRef(null);
  const addNumber = () => {
    setList([...list, parseInt(num.current.value)]);
  };
  const getAverage = () => {
    console.log('평균 계산중....');
    if (list.length === 0) return 0;
    return list.reduce((pre, cur) => pre + cur, 0) / list.length;
  };
  const averageResult = useMemo(() => {
    return getAverage();
  }, [list]);
  const [count, setCount] = useState(0);
  return (
    <>
      <h2>useMemo 테스트</h2>
      <p>
        {list.join(',')} / 평균 : {averageResult}
      </p>
      <p>
        <input type="number" ref={num} />
        <button onClick={addNumber}>숫자 추가</button>
        <br />
        <button onClick={() => setCount(count + 1)}>카운트</button>카운트 횟수 : {count}
      </p>
    </>
  );
};
