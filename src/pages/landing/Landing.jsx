import React from "react";
import Carousel from "../../component/carousel/Carousel";

import Footer from "../../component/footer/Footer";
import Faq from "../../component/faq/Faq";
import Statistics from "../../component/statistics/Statistics";
import "./landing.css";
import MenuTop from "./../../component/menuTop/MenuTop";

function Landing() {
  return (
    <div>
      <MenuTop />
      <Carousel />
      <Statistics />
      <Faq />
      <Footer />
    </div>
  );
}

export default Landing;
