import './App.css';
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

function App() {
  return (
    <div className="App">
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
    </div>
  );
}

export default App;
