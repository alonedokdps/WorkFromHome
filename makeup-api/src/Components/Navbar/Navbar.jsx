import React, {useEffect, useState} from "react";
import {Link} from "react-router-dom";
import "./Navbar.css";
import MenuItem from "./MenuItem";
import {AiOutlineMenu, AiOutlineClose} from "react-icons/ai";
import Dropdown from "../DropdownMenu/Dropdown";
const Navbar = () => {
  const [click, setClick] = useState(false);
  const [nav, setNav] = useState(false);
  console.log(nav);
  const changeNavBackground = () => {
    if (window.scrollY >= 80) {
      setNav(true);
    } else {
      setNav(false);
    }
  };
  window.addEventListener("scroll", changeNavBackground);
  const onCLickCLoseMobile = () => {
    setClick(false);
  };

  return (
    <div className={nav ? `navbar active` : `navbar `}>
      <div className={nav ? `logo active` : `logo`}>
        <Link>NEWAUTY</Link>
      </div>
      <div className="menu-icon" onClick={() => setClick(!click)}>
        {click ? <AiOutlineClose /> : <AiOutlineMenu />}
      </div>
      <ul className={click ? "nav-menu active" : "nav-menu"}>
        {MenuItem.map((item, index) => {
          return (
            <li key={index}>
              <Link
                to={item.path}
                className={nav ? `${item.cName} active` : `${item.cName}`}
                onClick={onCLickCLoseMobile}
              >
                {item.name}
              </Link>
            </li>
          );
        })}
      </ul>
      <Dropdown />
    </div>
  );
};

export default Navbar;
