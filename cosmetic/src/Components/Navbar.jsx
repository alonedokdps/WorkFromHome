import React, {useEffect, useState} from "react";
import {Link} from "react-router-dom";
import {AiOutlineMenu} from "react-icons/ai";
import {GrClose} from "react-icons/gr";
import "./Navbar.css";
import Navitem from "./Navitem";
import Button from "./Button";
const Navbar = () => {
  const [menu, setMenu] = useState(false);
  const [hide, setHide] = useState(true);
  const [change, setChange] = useState(false);
  const hideButton = () => {
    if (window.innerWidth <= 768) {
      setHide(false);
    } else {
      setHide(true);
    }
  };
  useEffect(() => {
    hideButton();
  }, []);
  window.addEventListener("resize", hideButton);
  const ChangeBackGround = () => {
    if (window.scrollY > 100) {
      setChange(true);
    } else {
      setChange(false);
    }
  };

  window.addEventListener("scroll", ChangeBackGround);
  return (
    <nav className={change ? "nav-bar active" : "nav-bar"}>
      <Link>
        <div className="logo">
          <h1>MAKEUP API</h1>
        </div>
      </Link>
      <div className="menu-icon" onClick={() => setMenu(!menu)}>
        {menu ? <GrClose /> : <AiOutlineMenu />}
      </div>

      <ul className={menu ? "nav-menu active" : "nav-menu"}>
        {Navitem.map((item, index) => {
          return (
            <li key={index}>
              <Link to={item.path} className={item.cName}>
                {item.title}
              </Link>
            </li>
          );
        })}
      </ul>
      {hide ? <Button>Sign Up</Button> : ""}
    </nav>
  );
};

export default Navbar;
