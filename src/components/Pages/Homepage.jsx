import React from "react";

import Banner from "../Header/Banner/Banner";
import Header from "../Header/Header";

const Homepage = () => {
  return (
    <div>
      <Header />
      <Banner bannerImg={"./images/desktop/image-hero.jpg"} />
    </div>
  );
};

export default Homepage;
