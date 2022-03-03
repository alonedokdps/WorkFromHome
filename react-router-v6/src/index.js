import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Invoices from "./Pages/Invoices";
import Expenses from "./Pages/Expenses";
import Child from "./Pages/Child";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<App />}>
          <Route path="invoices" element={<Invoices />}>
            <Route index element={<h1>Please select an invoice</h1>} />
            <Route path=":invoicesId" element={<Child />} />
          </Route>
          <Route path="expenses" element={<Expenses />} />
          <Route path="*" element={<h1>Not Found</h1>} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
