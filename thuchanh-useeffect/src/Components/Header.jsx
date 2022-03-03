import React, {useState, useEffect} from "react";

const Header = () => {
  const [nav, setNav] = useState(false);
  useEffect(() => {
    const handleFixedHeader = () => {
      const header = document.getElementById("header");
      if (window.scrollY > 100) {
        setNav(true);
      } else {
        setNav(false);
      }
    };
    window.addEventListener("scroll", handleFixedHeader);
  }, []);
  return (
    <div
      className={
        nav
          ? `flex fixed justify-center bg-blue-500 w-full p-5  `
          : `flex  justify-center bg-black w-full p-5  `
      }
      id="header"
    >
      <div className=" logo text-white">REACT</div>
      <ul
        className={`w-[70%] flex justify-end ${
          nav ? "text-white " : "text-white"
        }`}
      >
        <li className="mx-2">Home</li>
        <li className="mx-2">Product</li>
        <li className="mx-2">Contact</li>
        <li className="mx-2">About</li>
      </ul>
    </div>
  );
};

export default Header;
