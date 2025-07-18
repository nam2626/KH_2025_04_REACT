import logo from './logo.svg';
import './App.css';
import EffectEx1 from './components/EffectEx1';
import EffectEx2 from './components/EffectEx2';
import RefEx from './components/RefEx';
import CounterReducer from './components/CounterReducer';
import CallbackEx from './components/CallbackEx';
import MemoEx from './components/MemoEx';

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
      <hr/>
      <CallbackEx/>
      <hr/>
      <MemoEx/>
    </div>
  );
}

export default App;
