import { useRef } from 'react';

export default () => {
  const area = useRef(null);
  const colorChange = (e) => {
    area.current.style.backgroundColor = e.target.value;
  };
  return (
    <div>
      <h2>useCallback 테스트</h2>
      <div style={{ width: '200px', height: '200px', border: '1px solid black', margin: '0 auto' }} ref={area}></div>
      <input type="color" onChange={colorChange} />
    </div>
  );
};
