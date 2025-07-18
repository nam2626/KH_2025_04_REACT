import logo from './logo.svg';
import './App.css';
import EffectEx1 from './components/EffectEx1';
import EffectEx2 from './components/EffectEx2';
import RefEx from './components/RefEx';
import CounterReducer from './components/CounterReducer';

function App() {
  return (
    <div className="App" style={{ marginBottom: '200px' }}>
      <EffectEx1 />
      <hr></hr>
      <EffectEx2 />
      <hr></hr>
      <RefEx />
      <hr/>
      <CounterReducer/>
    </div>
  );
}

export default App;
