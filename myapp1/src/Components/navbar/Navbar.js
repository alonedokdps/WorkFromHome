import React, {useContext, useState} from "react";
import {Link} from "react-router-dom";
import CartModal from "../Cart/CartModal";
import {DataContext} from "../DataContext/DataProvider";
import "./Navbar.css";
const Navbar = () => {
  const [click, setClick] = useState(false);
  const [hover, setHover] = useState(false);
  const value = useContext(DataContext);
  const [cart] = value.cart;
  const mouseOver = () => {
    console.log("ok");
    setHover(true);
  };
  return (
    <div className="navbar">
      <div className="menu-icon" onClick={() => setClick(!click)}>
        {click ? (
          <ion-icon name="close-outline"></ion-icon>
        ) : (
          <ion-icon name="menu-outline"></ion-icon>
        )}
      </div>
      <div className="logo">CITIZEN3</div>
      <ul className={click ? "nav-menu active" : "nav-menu"}>
        <li>
          <Link onClick={() => setClick(false)} to="/">
            HOME
          </Link>
        </li>
        <li>
          <Link onClick={() => setClick(false)} to="/products">
            PRODUCTS
          </Link>
        </li>
        <li>
          <Link onClick={() => setClick(false)} to="/about">
            ABOUT
          </Link>
        </li>
        <li>
          <Link onClick={() => setClick(false)} to="/contact">
            CONTACT
          </Link>
        </li>
        <li>
          <Link onClick={() => setClick(false)} to="/login">
            LOGIN/REGISTER
          </Link>
        </li>
        <li>
          <Link className="cart" to="/cart">
            <span>{cart.length}</span>
            <ion-icon
              onMouseOver={mouseOver}
              onMouseOut={() => setHover(false)}
              name="cart-outline"
            ></ion-icon>
          </Link>
          {hover && <CartModal />}
        </li>
      </ul>
      <div className="user-menu">
        <span>{cart.length}</span>
        <ion-icon name="cart-outline"></ion-icon>
      </div>
    </div>
  );
};

export default Navbar;
