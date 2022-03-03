import React from "react";
import Sidebar from "../components/sidebar/Sidebar";
import {Outlet} from "react-router-dom";
import "./main-layout.scss";
import Topnav from "../components/topnav/Topnav";
const MainLayout = () => {
  return (
    <>
      <Sidebar />
      <div className="main">
        <div className="main__content">
          <Topnav />
          <Outlet />
        </div>
      </div>
    </>
  );
};

export default MainLayout;
