import './App.css';
import MajorList from './components/MajorList';
import OpenWeather from './components/OpenWeather';

function App() {
  return (
    <div className="App">
      <OpenWeather />
      <hr></hr>
      <h2>전공 목록</h2>
      <MajorList />
    </div>
  );
}

export default App;
