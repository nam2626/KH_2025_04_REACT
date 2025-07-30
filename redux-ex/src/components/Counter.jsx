import { useDispatch, useSelector } from 'react-redux';
import { increment } from '../store/counterSlice';

export default () => {
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();
  return (
    <div>
      <h2>redux 예제</h2>
      <input type="text" />
      <button>증가</button>
      <hr />
      <button onClick={() => dispatch(increment())}>+</button>
      <span>{count}</span>
      <button>-</button>
    </div>
  );
};
