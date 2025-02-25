import React from "react";
import SaiKrishnaIndustries from "./SaiKrishnaIndustries";
import MainComponent from "./MainComponents";
import HeroSlider from "../Slider/HeroSlider";
import ProductCard from "../Pages/ProductCard"
import EnhancedSlider from "../Slider/Slider"
import PremiumSlider from "../Slider/Shadcn";


const Home = () => {
  return (
    <div>
      <PremiumSlider />
      {/* <HeroSlider /> */}
      {/* <EnhancedSlider /> */}
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
