import React, {useEffect, useState} from "react";
import {Link} from "react-router-dom";
import "./header.css";
import "boxicons";
import logo from "../../images/TuaBike.png";
import {
  AiOutlineShopping,
  AiOutlineUser,
  AiOutlineSearch,
  AiOutlineMenu,
} from "react-icons/ai";
const Header = () => {
  const [nav, setNav] = useState(false);
  const [click, setClick] = useState(false);
  useEffect(() => {
    const handleChangeBackground = () => {
      if (window.scrollY > 80) {
        setNav(true);
      } else {
        setNav(false);
      }
    };
    window.addEventListener("scroll", handleChangeBackground);
  }, []);
  let iconStyles = {color: "white", fontSize: "1.5em"};
  return (
    <header className={`header ${nav ? "active" : ""}`}>
      <Link to="/" className="logo">
        <img src={logo} alt="logo" />
      </Link>
      <div className="main-menu-wrapper">
        <ul className={click ? "main-menu active" : "main-menu"}>
          <li>
            <Link to="/" className="active">
              Home
            </Link>
          </li>
          <li>
            <Link to="/">Shop</Link>
          </li>
          <li>
            <Link to="/">Dealer</Link>
          </li>
          <li>
            <Link to="/">About</Link>
          </li>
          <li>
            <Link to="/">Contact</Link>
          </li>
        </ul>
      </div>
      <div className="menu-icon" onClick={() => setClick(!click)}>
        <AiOutlineMenu />
      </div>
      <ul className="user-menu">
        <li>
          <Link>
            <AiOutlineShopping style={iconStyles} />
          </Link>
        </li>
        <li>
          <Link>
            <AiOutlineUser style={iconStyles} />
          </Link>
        </li>
        <li>
          <Link>
            <AiOutlineSearch style={iconStyles} />
          </Link>
        </li>
      </ul>
    </header>
  );
};

export default Header;
