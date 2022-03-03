import React from "react";
import {Link, Outlet} from "react-router-dom";
import Data from "./data/Data";
const Invoices = () => {
  return (
    <div style={{width: "100%"}}>
      <div>Invoices</div>
      <div style={{float: "left"}}>
        {Data &&
          Data.map((item) => {
            return (
              <Link
                style={{display: "block"}}
                to={`/invoices/${item.id}`}
                key={item.id}
              >
                {item.title}
              </Link>
            );
          })}
      </div>
      <Outlet />
    </div>
  );
};

export default Invoices;
