import './App.css';
import ButtonCount from './components/ButtonCount';
import ButtonOK from './components/ButtonOK';
import ButtonProps from './components/ButtonProps';
import ItemList from './components/ItemList';
import PropsEx from './components/PropsEx';

const profile = [
	{ name: 'Alex', age: 20, job: 'developer' },
	{ name: 'Bob', age: 17, job: 'student' },
	{ name: 'Charlie', age: 20, job: 'designer' },
	{ name: 'David', age: 30, job: 'developer' },
	{ name: 'Ethan', age: 15, job: 'student' },
];
const obj ={
  count : 0
}
function App() {
  const addCount = () => {
    obj.count++;
    alert(`카운트 증가: ${obj.count}`);
    console.log("count : ",obj.count);
  }
  return (
    <div className="App" style={{ marginBottom: '100px' }}>
      <h2>컴포넌트 Props</h2>
      <ButtonOK data="데이터" var1="확인" attr="속성값"/>
      <br></br>
      <ButtonProps name="홍길동" age={20} data="TEST" />
      <br></br>
      <ButtonProps name="김철수" />
      <br></br>
      <PropsEx name="박철수" age={20} />
      <br></br>
      <ItemList profile={profile} />
      <hr/>
      <ButtonCount count={obj.count} addCount={addCount} />
    </div>
  );
}

export default App;
