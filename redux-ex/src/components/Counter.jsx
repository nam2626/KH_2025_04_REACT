import { useDispatch, useSelector } from 'react-redux';
import { decrement, increment, incrementByAmount } from '../store/counterSlice';
import { useRef } from 'react';

export default () => {
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();
  const num = useRef(null);
  return (
    <div>
      <h2>redux 예제</h2>
      <input type="text" ref={num} />
      <button
        onClick={() => {
          if (isNaN(num.current.value)) {
            alert('숫자만 입력하세요');
            num.current.value = '';
            num.current.focus();
            return;
          }
          dispatch(incrementByAmount(Number(num.current.value)));
        }}
      >
        증가
      </button>
      <hr />
      <button onClick={() => dispatch(increment())}>+</button>
      <span>{count}</span>
      <button onClick={() => dispatch(decrement())}>-</button>
    </div>
  );
};
