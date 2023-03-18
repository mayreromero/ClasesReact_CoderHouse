import React from "react";
import CartWidget from "../CartWidget/CartWidget";
import "./Navbar.css";

const Navbar = () => {
  return (
    <div className="container-navbar">
      <img
        src="https://res.cloudinary.com/dyt4eknl1/image/upload/v1677884404/web_logo_z6njru.png"
        alt=""
      />
      <ul className="container-list">
        <a href="">Uno</a>
        <a href="">Dos</a>
        <a href="">Tres</a>
      </ul>
      <CartWidget />
    </div>
  );
};

export default Navbar;
