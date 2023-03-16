import React from "react";
import Navbar from "./NavBar/Navbar";
import logo from "../../assets/svg/logo.svg";

const Header = () => {
  return (
    <>
      <img src={logo} alt="logo loopstudios" />
      <Navbar />
    </>
  );
};

export default Header;
