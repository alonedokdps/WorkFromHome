import "./App.css";
import {BrowserRouter} from "react-router-dom";
import Header from "./Components/Layout/Header";
import Content from "./Components/Layout/Content";
function App() {
  return (
    <BrowserRouter>
      <Header />
      <Content />
    </BrowserRouter>
  );
}

export default App;
