import React from "react";
import styled from "styled-components";

const Main = ({ mainImg }) => {
  return (
    <SectionMain>
      <MainImg src={mainImg} alt="Mulher usando óculos VR" />
      <InfoMain>
        <h1>THE LEADER IN INTERACTIVE VR</h1>
        <p>
          Founded in 2011, Loopstudios has been producing world-class virtual
          reality projects for some of the best companies around the globe. Our
          award-winning creations have transformed businesses through digital
          experiences that bind to their brand.
        </p>
      </InfoMain>
    </SectionMain>
  );
};

export default Main;

const SectionMain = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  padding: 1rem;
  //width: 100%;
`;

const MainImg = styled.img`
  max-width: 100%;
  border-radius: 0.3rem;
  position: relative;
`;

const InfoMain = styled.div`
  //background-color: #f8f8f8;
  border-radius: 0.3rem;
  padding: 4rem 0 0 4rem;
  max-width: 500px;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #262626;
  position: absolute;
  bottom: 0;
  left: 35%;

  h1 {
    font-size: 42px;
    font-weight: 300;
    color: #f8f8f8;
    //max-width: 300px;
  }

  p {
    color: #939393;
    line-height: 20px;
  }
`;
