import { useState } from 'react';

export default () => {
  const [count, setCount] = useState(() => {
    const localCount = localStorage.getItem('count');
    return localCount == null ? 0 : parseInt(localCount);
  });

  const addCount = () => {
    setCount((prev) => {
      localStorage.setItem('count', prev + 1);
      return prev + 1;
    });
  };
  const minusCount = () => {
    setCount((prev) => {
      localStorage.setItem('count', prev - 1);
      return prev - 1;
    });
  };
  return (
    <>
      <h2>Counter</h2>
      <p>
        <button onClick={addCount}>+</button>
        <button onClick={minusCount}>-</button>
      </p>
      <p>count : {count}</p>
    </>
  );
};
