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
  justify-content: space-between;
  background-color: transparent;
  position: absolute;
  top: 0;
  width: 100vw;
`;

export default Header;
