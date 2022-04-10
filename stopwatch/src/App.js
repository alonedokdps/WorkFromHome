import logo from "./logo.svg";
import "./App.css";
import {useEffect, useRef, useState} from "react";

function App() {
  const divRef = useRef();
  useEffect(() => {
    console.log(divRef.current);
  }, []);
  return (
    <div className="App">
      <header className="App-header">
        <div className="input-group" ref={divRef}>
          <input type="text" />
        </div>
      </header>
    </div>
  );
}

export default App;
