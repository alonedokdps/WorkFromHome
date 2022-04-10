import axios from "axios";
import {useEffect, useState} from "react";
import "./App.css";
import {GetData} from "./Data/GetData.jsx";
function App() {
  const [weatherData, setWeatherData] = useState(null);
  const [city, setCity] = useState("lahore");
  const [loading, setLoading] = useState(false);
  const getWeather = async () => {
    try {
      const data = await GetData(city);
      console.log(data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getWeather();
  }, []);
  return (
    <div className="App">
      <div className="card">
        <h2 className="title">
          <i className="fa fa-cloud"></i>Weather App
        </h2>
        <div className="search-input">
          <input
            type="text"
            onChange={(e) => setCity(e.target.value)}
            placeholder="Enter Your City Name ...."
          />
          <button onClick={() => getWeather()} type="button">
            Search
          </button>
        </div>
        <div className="main-container">
          <h4>Live Weather Condition</h4>
          <div className="weather-icon">
            <i className="fa fa-sun"></i>
          </div>
          <h3>Sunny</h3>
          <div className="temprature">
            <h1>25&deg;c</h1>
          </div>
          <div className="location">
            <h3>
              <i className="fa fa-street-view"></i>
              Laroche | posay
            </h3>
          </div>
          <div className="temprature-range">
            <h6>Min:25&deg;c || Min:25&deg;c || Hmmnii:10%</h6>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
