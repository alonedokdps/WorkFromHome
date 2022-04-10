import {BrowserRouter, Route, Routes} from "react-router-dom";
import "./App.css";
import Cart from "./Components/Cart/Cart";
import {DataProvider} from "./Components/DataContext/DataProvider";
import Detail from "./Components/Detail/Detail";
import Navbar from "./Components/navbar/Navbar";
import Products from "./Components/Products/Products";

function App() {
  return (
    <DataProvider>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/products/" element={<Products />} />
          <Route path="/products/:id" element={<Detail />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </BrowserRouter>
    </DataProvider>
  );
}

export default App;
