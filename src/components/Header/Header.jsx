import React from "react";
import styled from "styled-components";
import Navbar from "./NavBar/Navbar";
import logo from "../../assets/svg/logo.svg";

const Header = () => {
  return (
    <>
      <Section>
        <img src={logo} alt="logo" />
        <Navbar />
      </Section>
    </>
  );
};
const Section = styled.section`
  display: flex;
  align-items: center;
  flex-direction: row;
  justify-content: space-around;
  background-color: transparent;
  position: absolute;
  margin-top: 3rem;

  top: 0;
  width: 100vw;
`;

const Logo = styled.img``;

export default Header;
