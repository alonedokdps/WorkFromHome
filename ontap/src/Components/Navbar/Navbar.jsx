import React, {useEffect, useState} from "react";
import "./Navbar.css";
import MenuItem from "./Menuitem.js";
const Navbar = () => {
  const [click, setClick] = useState(false);
  const [nav, setNav] = useState(false);
  const HandleChangeNav = () => {
    if (window.scrollY > 70) {
      setNav(true);
    } else {
      setNav(false);
    }
  };
  window.addEventListener("scroll", HandleChangeNav);

  return (
    <div className={nav ? "navbar active" : "navbar"}>
      <div className="menu-icon" onClick={() => setClick(!click)}>
        {click ? (
          <i className="fa-solid fa-xmark"></i>
        ) : (
          <i className="fa-solid fa-bars"></i>
        )}
      </div>
      <div className="logo">
        ReactJS <i class="fa-brands fa-react"></i>
      </div>
      <ul className={click ? "nav-menu active" : "nav-menu"}>
        {MenuItem &&
          MenuItem.map((item, index) => {
            return <li className={item.cName}>{item.title}</li>;
          })}
      </ul>
      <ul className="user-menu">
        <li>
          <i className="fa-solid fa-user"></i>
        </li>
        <li>
          <i className="fa-solid fa-magnifying-glass"></i>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
