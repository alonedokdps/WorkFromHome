import axios from "axios";
import {useEffect, useState} from "react";
import "./App.css";
import Weather from "./Components/Weather";

function App() {
  const [query, setQuery] = useState("");
  const [storage, setStorage] = useState([]);
  const handleOnChange = (e) => {
    setQuery(e.target.value);
  };
  const Search = () => {
    axios
      .get(
        `http://api.weatherapi.com/v1/current.json?key=07da2582f88b4fdab7e91426220303&q=${query}`
      )
      .then((res) => setStorage(res.data))
      .catch((err) => console.log(err));
  };

  return (
    <>
      <Weather
        Storage={storage}
        Search={Search}
        onChangeInput={handleOnChange}
      />
    </>
  );
}

export default App;
