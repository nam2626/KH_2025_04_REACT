import logo from './logo.svg';
import './App.css';
import TimeView from './components/TimeView';
import CountButton from './components/CountButton';

function App() {
  return (
    <div className="App">
      <TimeView/>
      <hr/>
      <CountButton/>
    </div>
  );
}

export default App;
