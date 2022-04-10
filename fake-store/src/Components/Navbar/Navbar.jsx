import React, {useEffect, useState} from "react";
import {DiReact} from "react-icons/di";
import {BiMenuAltLeft} from "react-icons/bi";
import {
  AiOutlineClose,
  AiOutlineBell,
  AiOutlineShoppingCart,
} from "react-icons/ai";
import {Link} from "react-router-dom";
import Item from "./Item";
import "./Navbar.css";
import Button from "./Button";
const Navbar = () => {
  const [click, setClick] = useState(false);
  const [nav, setNav] = useState(false);
  const [hide, setHide] = useState(false);
  const HideButton = () => {
    if (window.innerWidth < 1022) {
      setHide(true);
    } else {
      setHide(false);
    }
  };

  const handleChangeBackground = () => {
    if (window.scrollY >= 80) {
      setNav(true);
    } else {
      setNav(false);
    }
  };
  useEffect(() => {
    window.addEventListener("resize", HideButton);
    return () => window.removeEventListener("resize", HideButton);
  }, []);
  useEffect(() => {
    window.addEventListener("scroll", handleChangeBackground);
    return () => window.removeEventListener("scroll", handleChangeBackground);
  }, []);
  return (
    <div className={nav ? `navbar active text-white` : `navbar`}>
      <div className="menu-icon" onClick={() => setClick(!click)}>
        {click ? <AiOutlineClose /> : <BiMenuAltLeft />}
      </div>
      <div className={nav ? "logo text-white" : "logo"}>
        FakeStore <DiReact />
      </div>
      <ul className={click ? `nav-menu active  ` : `nav-menu `}>
        {Item &&
          Item.map((item, index) => {
            return (
              <li key={index}>
                <Link to={item.path} className={item.cName}>
                  {item.title}
                </Link>
              </li>
            );
          })}
      </ul>
      <div className="user-menu">
        <AiOutlineBell />
        <AiOutlineShoppingCart />
        {hide ? [] : <Button />}
      </div>
    </div>
  );
};

export default Navbar;
