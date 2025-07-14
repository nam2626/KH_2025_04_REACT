import './App.css';
import ComponentEx from './components/ComponentEx';
import NoJSX from './components/NoJSX';
import LoginForm from './quest/LoginForm';

function App() {
  return (
    <div className="App">
      <NoJSX/>
      <ComponentEx />
      <hr></hr>
      <LoginForm/>
    </div>
  );
}

export default App;
