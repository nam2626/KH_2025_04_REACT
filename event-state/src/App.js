import logo from './logo.svg';
import './App.css';
import TimeView from './components/TimeView';
import CountButton from './components/CountButton';
import ColorToggle from './components/ColorToggle';
import LoginForm from './components/LoginForm';
import ListState from './components/ListState';
import NumberList from './components/NumberList';

function App() {
  return (
    <div className="App" style={{marginBottom:'300px'}}>
      <TimeView/>
      <hr/>
      <CountButton/>
      <hr/>
      <ColorToggle/>
      <hr/>
      <LoginForm/>
      <hr/>
      <ListState/>
      <hr/>
      <NumberList/>
    </div>
  );
}

export default App;
