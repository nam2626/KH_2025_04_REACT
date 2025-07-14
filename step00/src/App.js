import './App.css';
import test from './func/log';
import { add, subtract } from './func/math';

function App() {
  let obj1 = { name: '홍길동', age: 20,};
  let obj2 = { name: '홍길동', age: 20,};
  console.log(obj1 === obj2,Object.is(obj1, obj2));
  console.log(+0 === -0, Object.is(+0, -0));
  console.log(NaN,Number.NaN, NaN === Number.NaN, Object.is(NaN, Number.NaN));

  test("App.js에서 log 호출");
  return (
    <div className="App">
      <h1>리액트 테스트</h1>
      <p>obj1 : {obj1.name}, {obj1.age}</p>
      <p>obj2 : {obj2.name}, {obj2.age}</p>
      <p>{add(10,5)}</p>
      <p>{subtract(10,5)}</p>
    </div>
  );
}

export default App;
