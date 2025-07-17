//useRef
//값을 유지하거나 또는 DOM 요소를 참조

import { useRef, useState } from 'react';

//DOM 참조 => ref 속성값으로 추가해서 해당 변수로 DOM 요소를 참조해서 사용
export default function RefEx() {
  let n = 0;
  const txt = useRef(null);
  const changeText = () => {
    //ref와 연결된 input 태그 정보 선택
    console.log(txt.current.value);
  };

  const clickCount = useRef(0);
  const addClickCount = () => {
    clickCount.current++;
    n++;
    console.log('n : ', n);
    console.log('ref : ', clickCount.current);
  };
  console.log('RefEx 렌더링 됨');
  const [stateCount, setStateCount] = useState(0);
  const addStateCount = () => {
    setStateCount(stateCount + 1);
    console.log('state : ', stateCount);
  };

  return (
    <>
      <p>
        <input type="text" id="ref_txt" ref={txt} onChange={changeText} />,{txt.current && txt.current.value}
      </p>
      <p>
        <button onClick={addClickCount}>ref 카운트 증가 : {clickCount.current}</button>
        <button onClick={addStateCount}>state 카운트 증가 : {stateCount}</button>
      </p>
    </>
  );
}
