import React from "react";
import "./weather.css";
const Weather = ({onChangeInput, Search, Storage}) => {
  const copy = {...Storage};
  console.log(copy.location);

  return (
    <div className="section">
      <div className="title">
        <i class="fa-solid fa-cloud"></i>Weather APP
      </div>
      <div className="search">
        <input type="text" onChange={onChangeInput} className="input" />
        <button onClick={Search} className="btn">
          Search
        </button>
      </div>
      <div className="content">
        {Object.keys(Storage).map((item, index) => {
          return (
            <>
              <div className="second-title">
                <h3>Live Weather Condition</h3>
              </div>
              <div className="weather-icon">
                <i className="fa fa-sun"></i>
              </div>
              <div className="temprature">
                <h3>{Storage[item].text}</h3>
                <h3>25&deg;C</h3>
              </div>
              <div className="location">
                <h3>
                  <i className="fa fa-street-view"></i> {Storage[item].text} |{" "}
                  {Storage[item].text}
                </h3>
              </div>
              <div className="temprature-range">
                <h5>Min:25&deg;C || 25&deg;C || 25&deg;C </h5>
              </div>
            </>
          );
        })}
      </div>
    </div>
  );
};

export default Weather;
