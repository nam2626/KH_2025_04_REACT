//상태값 제어를 하는 함수
function reducer(state, action) {
  switch (action.type) {
    case 'INCREMENT':
      return { value: state.value + 1 };
    case 'DECREMENT':
      return { value: state.value - 1 };
    default:
      return state;
  }
}
export default () => {
  return (
    <div>
      <h2>reducer 예제</h2>
      <p>count : {0}</p>
      <p>
        <button>+</button>
        <button>-</button>
      </p>
    </div>
  );
};
