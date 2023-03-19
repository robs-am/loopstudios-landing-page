import React from "react";
import styled from "styled-components";

const Main = ({ mainImg }) => {
  return (
    <SectionMain>
      <img src={mainImg} alt="Mulher usando óculos VR" />
    </SectionMain>
  );
};

export default Main;

const SectionMain = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1rem;
`;

/* const MainImg = styled.img`
  max-width: 100%;
`; */
