import "./App.scss";
import {BrowserRouter, Route} from "react-router-dom";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import {render} from "@testing-library/react";
import Routes from "./config/Routes";
function App() {
  return (
    <BrowserRouter>
      <Route
        render={(props) => (
          <>
            <Header {...props} />
            <Routes />
            <Footer />
          </>
        )}
      />
    </BrowserRouter>
  );
}

export default App;
