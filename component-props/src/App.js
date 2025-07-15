import './App.css';
import ButtonOK from './components/ButtonOK';
import ButtonProps from './components/ButtonProps';

function App() {
  return (
    <div className="App">
      <h2>컴포넌트 Props</h2>
      <ButtonOK data="데이터" var1="확인" attr="속성값"/>
      <br></br>
      <ButtonProps name="홍길동" age={20} />
      <br></br>
      <ButtonProps name="김철수" age={30} />
      <br></br>
    </div>
  );
}

export default App;
