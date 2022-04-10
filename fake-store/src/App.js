import {BrowserRouter} from "react-router-dom";
import "./App.css";
import Home from "./Components/Home/Home";
import Navbar from "./Components/Navbar/Navbar";
import Products from "./Components/Products/Products";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Home />
      <Products />
    </BrowserRouter>
  );
}

export default App;
