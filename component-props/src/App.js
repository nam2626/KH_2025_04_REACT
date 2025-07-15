import './App.css';
import ButtonOK from './components/ButtonOK';

function App() {
  return (
    <div className="App">
      <h2>컴포넌트 Props</h2>
      <ButtonOK data="데이터" var1="확인" attr="속성값"/>
    </div>
  );
}

export default App;
