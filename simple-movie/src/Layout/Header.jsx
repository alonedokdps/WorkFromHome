import React from "react";
import {NavLink} from "react-router-dom";
const Header = () => {
  return (
    <header className="header flex items-center justify-center text-white   gap-x-5 py-10">
      <NavLink
        to="/"
        className={({isActive}) => (isActive ? "text-primary" : "")}
      >
        Home
      </NavLink>
      <NavLink
        className={({isActive}) => (isActive ? "text-primary" : "")}
        to="/movies"
      >
        Movies
      </NavLink>
    </header>
  );
};

export default Header;
