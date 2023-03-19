import React from "react";
import styled from "styled-components";

import Banner from "../Header/Banner/Banner";
import Header from "../Header/Header";
import Main from "../Main/Main";

const Homepage = () => {
  return (
    <SectionHome>
      <Header />
      <Banner bannerImg={"./images/desktop/image-hero.jpg"} />
      <Main mainImg={"./images/desktop/main-desktop.jpg"} />
    </SectionHome>
  );
};

export default Homepage;

const SectionHome = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  width: auto;
`;
