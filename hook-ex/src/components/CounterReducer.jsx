import { useReducer } from 'react';

//상태값 제어를 하는 함수
function reducer(state, action) {
  switch (action.type) {
    case 'INCREMENT':
      return { value: state.value + 1 };
    case 'DECREMENT':
      return { value: state.value - 1 };
    case 'INCREMENT2':
      return { value: state.value + 2 };
    case 'DECREMENT2':
      return { value: state.value - 2 };
    default:
      return state;
  }
}
export default () => {
  const [count, dispatch] = useReducer(reducer, { value: 0 });
  return (
    <div>
      <h2>reducer 예제</h2>
      <p>count : {count.value}</p>
      <p>
        <button onClick={() => dispatch({ type: 'INCREMENT' })}>+</button>
        <button onClick={() => dispatch({ type: 'DECREMENT' })}>-</button>
        {/* 2씩 증가하는 버튼, 2씩 감소하는 버튼 */}
        <button onClick={() => dispatch({ type: 'INCREMENT2' })}>+2</button>
        <button onClick={() => dispatch({ type: 'DECREMENT2' })}>-2</button>
      </p>
    </div>
  );
};
