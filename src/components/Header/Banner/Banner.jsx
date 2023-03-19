import React from "react";
import styled from "styled-components";

const Banner = ({ bannerImg }) => {
  return (
    <div>
      <SectionBanner />
      <BannerHome src={bannerImg} alt="banner" />
    </div>
  );
};

export default Banner;

const BannerHome = styled.img`
  max-width: 100%;
  background: linear-gradient(#121111, #0e0d0d);
`;

const SectionBanner = styled.div``;
