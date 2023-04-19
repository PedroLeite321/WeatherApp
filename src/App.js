import './App.css';
import { useState } from 'react';

function App() {
  const apiKey = '72095579eb8b2c9381a1d588e381fcbe';
  let citySearch = "";
  const current = new Date();
  let temperature = "";
  let [weather, setWeather] = useState();
  const startFetch = async (e) =>{

    if(e.key === "Enter") {
      if(e.target.value === ""){
        e.target.value = "london";
      }
      citySearch = e.target.value;
      await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${citySearch}&APPID=${apiKey}`)
      .then(function(resp){return resp.json()})//transfom the data from fetch into json.
      .then(data => {
        setWeather(data);
      })//rename resp.json to data.  
      .catch(Error)
    }

  }

   if(weather !== undefined){
      temperature = weather.main.temp
      function turnToCelcius(turnToC) {
        turnToC = temperature - 273.15;
        return temperature = Math.round(turnToC);
      }
      turnToCelcius(temperature);
    } 
  if(weather !== undefined){
    const climate = weather.weather[0].main;
    return (

      <div className="App">
        <main>
          <div className='searchCity' >
            <input type="text" className="searchBar" placeholder="Search City" onKeyUp={startFetch} />
          </div>
          <div className="place">
            <h2>{weather === undefined? "" : weather.name}</h2>
          </div>
          <div className="dates">
            <h2>{current.getUTCDate()}/{current.getUTCMonth()+1}/{current.getUTCFullYear()}</h2>
            <h3>{current.getHours()}:{current.getMinutes() < 10? '0' + current.getMinutes() : current.getMinutes()}:{current.getSeconds() < 10? '0' + current.getSeconds() : current.getSeconds()}</h3>
          </div>
          <div>
            <h2>{climate}</h2>
          </div>
          <div className='temperature'>
            <p className="temperatureDisplay">{weather === undefined? "" : temperature !== "" ? temperature + "ºC" : ""}</p>
          </div>
        </main>
      </div>

    );
}else{
  return (
    
    <div className="App">
      <main>
        <div className='searchCity' >
          <input type="text" className="searchBar" placeholder="Search City" onKeyUp={startFetch} />
        </div>
        <div className="place">
          <h2>{weather === undefined? "" : weather.name}</h2>
        </div>
        <div className="dates">
          <h2>{current.getUTCDate()}/{current.getUTCMonth()+1}/{current.getUTCFullYear()}</h2>
          <h3>{current.getHours()}:{current.getMinutes() < 10? '0' + current.getMinutes() : current.getMinutes()}:{current.getSeconds() < 10? '0' + current.getSeconds() : current.getSeconds()}</h3>
        </div>
        <div className='temperature'>
          <p className="temperatureDisplay">{weather === undefined? "" : temperature !== "" ? temperature + "ºC" : ""}</p>
        </div>
      </main>
    </div>

  );
}
}

export default App;