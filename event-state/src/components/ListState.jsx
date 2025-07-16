import { useState } from 'react';

export default () => {
  const [list, setList] = useState([]);
  const [txt, setTxt] = useState('');

  const addList = () => {
    // list가 저장하고 있는 주소값이 변경이 안되서 아래와 같이 처리하면 다시 렌더링이 발생하지 않는다.
    // list.push(txt);
    // 새로 리스트를 만들어서 처리해야 바로 다시 렌더링이 발생한다.
    //setList(list.concat(txt));
    setList([...list, txt]);
    console.log(list);
  };
  return (
    <>
      <p>리스트 내용 : {list.join(',')}</p>
      <input type="text" onChange={(e) => setTxt(e.target.value)} />
      <br />
      <button onClick={addList}>리스트에 추가</button>
    </>
  );
};
