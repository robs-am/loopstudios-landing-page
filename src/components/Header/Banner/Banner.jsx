import React from "react";
import styled from "styled-components";

const Banner = ({ bannerImg }) => {
  return (
    <div>
      <BannerHome src={bannerImg} alt="banner" />
    </div>
  );
};

export default Banner;

const BannerHome = styled.img`
  max-width: 100%;
`;
