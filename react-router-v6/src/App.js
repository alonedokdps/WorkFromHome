import {BrowserRouter, Link, Outlet} from "react-router-dom";
import "./App.css";

function App() {
  return (
    <>
      <div className="App">
        <h1>Bookeeper</h1>

        <nav style={{borderBottom: "1px solid", paddingBottom: "1rem"}}>
          <Link to="/invoices">Invoices</Link> | {""}
          <Link to="/expenses">Expenses</Link>
        </nav>
        <Outlet />
      </div>
    </>
  );
}

export default App;
