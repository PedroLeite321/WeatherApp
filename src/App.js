import logo from './logo.svg';
import './App.css';
const api_info = {
  key: '72095579eb8b2c9381a1d588e381fcbe',
  httpRequire: 'https://api.openweathermap.org/data/2.5/weather'
}
const current = new Date()
function App() {
  return (
    <div className="App">
      <main>
        <div className='searchCity' >
          <input type="text" className="searchBar" placeholder="Search City"/>
        </div>
        <div className="place">
          <h2>Tatuí, Br</h2>
        </div>
        <div className="dates">
          <h2>{current.getDate()}/{current.getMonth()+1}/{current.getFullYear()}</h2>
        </div>
        <div className='temperature'></div>
      </main>
    </div>
  );
}

export default App;
