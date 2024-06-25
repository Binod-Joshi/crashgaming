import React from "react";
import "./Navbar.css";
import Logo from "../assets/navbar/logo.svg"

const Navbar = () => {
  return (
    <div className="navbar">
      <img src={Logo} alt ="logo" className="logo" style={{marginRight:"20px"}}/>
      <div className="brand-name">BUSTATRX</div>
      <div className="nav-links">
        <div className="loginbutton">LOGIN</div>
        <div className="registerbutton">REGISTER</div>
      </div>
    </div>
  );
};

export default Navbar;
