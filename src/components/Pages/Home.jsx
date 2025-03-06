import React from "react";
import SaiKrishnaIndustries from "./SaiKrishnaIndustries";

import ProductCard from "../Pages/ProductCard"

import Testimonials from "./Testimonials";
import AutoSlider from './../Slider/Slider3';
import TopProducts from "./TopProducts";


const Home = () => {
  return (
    <div>
  
 
      <AutoSlider/>

      <TopProducts/>

      {/* <ProductCard/> */}
      <SaiKrishnaIndustries/>
      <Testimonials/>

    </div>
  );
};

export default Home;
