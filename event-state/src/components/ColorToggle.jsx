import { useState } from 'react';

export default () => {
  const [toggle, setToggle] = useState(true);
  const toggleFunction = () => setToggle(!toggle);
  
  return (
    <div>
      <p style={{ color: toggle ? 'red' : 'blue' }}>
        이 텍스트의 색상을 변경해 보세요!
      </p>
      <button onClick={toggleFunction}>글자 색상 변경</button>
    </div>
  );
};
