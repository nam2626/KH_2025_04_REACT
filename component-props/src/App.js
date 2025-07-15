import './App.css';
import ButtonOK from './components/ButtonOK';
import ButtonProps from './components/ButtonProps';
import PropsEx from './components/PropsEx';

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
    </div>
  );
}

export default App;
