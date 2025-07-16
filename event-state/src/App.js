import logo from './logo.svg';
import './App.css';
import TimeView from './components/TimeView';
import CountButton from './components/CountButton';
import ColorToggle from './components/ColorToggle';

function App() {
  return (
    <div className="App" style={{marginBottom:'100px'}}>
      <TimeView/>
      <hr/>
      <CountButton/>
      <hr/>
      <ColorToggle/>
    </div>
  );
}

export default App;
