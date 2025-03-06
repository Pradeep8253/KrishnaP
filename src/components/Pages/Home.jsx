import React from "react";
import SaiKrishnaIndustries from "./SaiKrishnaIndustries";
import MainComponent from "./MainComponents";
import ProductCard from "../Pages/ProductCard"
import EnhancedSlider from "../Slider/Slider"
import Testimonials from "./Testimonials";
import AutoSlider from './../Slider/Slider3';


const Home = () => {
  return (
    <div>
      {/* <EnhancedSlider /> */}
 
      <AutoSlider/>

      <ProductCard/>
      <Testimonials/>
    </div>
  );
};

export default Home;
