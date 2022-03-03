import "./App.css";
import Header from "./Components/Header/Header";
import {BrowserRouter as Router} from "react-router-dom";
import Hero from "./Components/Slide/Hero";
function App() {
  return (
    <Router>
      <Header />
      {/* <Hero /> */}
    </Router>
  );
}

export default App;
