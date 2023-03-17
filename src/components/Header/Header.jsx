import React from "react";
import Navbar from "./NavBar/Navbar";
import logo from "../../assets/svg/logo.svg";

const Header = () => {
  return (
    <>
      <section className="header">
        <img src={logo} alt="logo" />
        <Navbar />;
      </section>
    </>
  );
};

export default Header;
