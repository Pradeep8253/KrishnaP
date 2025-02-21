import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination } from "swiper/modules";

import parentfeederfemale from "../fwdkrishnatradersproducts/parentfeederfemale.jpg";
import Image2 from "../fwdkrishnatradersproducts/debeakingmachineautomatic.jpg";
import Image3 from "../fwdkrishnatradersproducts/IMG-20150124-WA0048.jpg";
import Image4 from "../fwdkrishnatradersproducts/growerfeeder8kg.jpg";
import Image5 from "../fwdkrishnatradersproductsmain/20240509_180126.jpg";
import Image6 from "../fwdkrishnatradersproductsmain/20210408_092117.jpg";

const ImageCarousel = () => {
  return (
    <div className="max-w-xl mx-auto mb-12">
      <Swiper
        modules={[Navigation, Pagination]}
        spaceBetween={50}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
      >
        <SwiperSlide>
          <img
            src={parentfeederfemale}
            alt="Featured Product"
            className="w-full h-66 object-contain rounded-xl shadow-lg"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src={Image2}
            alt="Featured Product 2"
            className="w-full h-66 object-contain rounded-xl shadow-lg"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src={Image3}
            alt="Featured Product 3"
            className="w-full h-66 object-contain rounded-xl shadow-lg"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src={Image4}
            alt="Featured Product 3"
            className="w-full h-66 object-contain rounded-xl shadow-lg"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src={Image5}
            alt="Featured Product 3"
            className="w-full h-66 object-contain rounded-xl shadow-lg"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src={Image6}
            alt="Featured Product 3"
            className="w-full h-66 object-contain rounded-xl shadow-lg"
          />
        </SwiperSlide>
        {/* Add more SwiperSlide components as needed */}
      </Swiper>
    </div>
  );
};

export default ImageCarousel;
