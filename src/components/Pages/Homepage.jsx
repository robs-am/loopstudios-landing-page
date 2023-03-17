import React from "react";
import Banner from "../Header/Banner/Banner";
import Header from "../Header/Header";

const Homepage = () => {
  return (
    <div>
      <Header />
      <Banner bannerImg={"./images/mobile/image-hero.jpg"} />
    </div>
  );
};

export default Homepage;
