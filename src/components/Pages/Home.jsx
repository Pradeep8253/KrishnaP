import React from "react";
import SaiKrishnaIndustries from "./SaiKrishnaIndustries";
import MainComponent from "./MainComponents";
import HeroSlider from "../Slider/HeroSlider";
import ProductCard from "../Pages/ProductCard"
import EnhancedSlider from "../Slider/Slider"


const Home = () => {
  return (
    <div>
      {/* <HeroSlider /> */}
      <EnhancedSlider />
      {/* <BannerSlider /> */}
      {/* <SaiKrishnaIndustries /> */}
      {/* <MainComponent /> */}
      {/* <Popup/> */}
      <ProductCard />
      {/* <Testimonials/> */}
    </div>
  );
};

export default Home;
