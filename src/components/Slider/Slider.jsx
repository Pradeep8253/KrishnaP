import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-creative";
import "swiper/css/navigation";
import "swiper/css/pagination";
import {
  EffectCreative,
  Autoplay,
  Navigation,
  Pagination,
  Keyboard,
} from "swiper/modules";
import { motion, AnimatePresence } from "framer-motion";

// Import your images here
import BasinChickDrinker from "../Pages/fwdkrishnatradersproductsmain/BasinChickDrinker2.5.jpg";
import flamegun from "../Pages/fwdkrishnatradersproductsmain/flamegun4way.jpg";
import jumboautomaticdrinkerclassic from "../Pages/fwdkrishnatradersproductsmain/jumboautomaticdrinkerclassic.jpg";
import SprinklerSmall from "../Pages/fwdkrishnatradersproductsmain/SprinklerSmall.jpg";
import chickfeeder3kg from "../Pages/fwdkrishnatradersproducts/chickfeeder3kg.jpg";
import chickcrate from "../Pages/fwdkrishnatradersproducts/chickcrate.jpg";
import nippledrinker from "../Pages/fwdkrishnatradersproducts/nippledrinker.jpg";
import vaccinator from "../Pages/fwdkrishnatradersproducts/vaccinator.jpg";
import slider1 from "../Slider/sloider1.png";
import slider2 from "../Slider/slider2.png";
import slider3 from "../Slider/slider4.png";

// Define your product categories for each slide
const slides = [
  {
    image: slider1,
    title: "WELCOME TO KRISHNA POULTRY EQUIPMENTS",
    subtitle: "EXCELLENCE IN POULTRY FARMING",
    description:
      "We provide the highest quality poultry products with modern farming techniques",
    products: [
      { image: BasinChickDrinker, name: "Basin Chick Drinker", price: "₹650" },
      { image: flamegun, name: "Flame Gun 4-Way", price: "₹1200" },
      {
        image: jumboautomaticdrinkerclassic,
        name: "Jumbo Automatic Drinker",
        price: "₹950",
      },
      { image: SprinklerSmall, name: "Small Sprinkler", price: "₹450" },
    ],
  },
  {
    image: slider2,
    title: "QUALITY PRODUCTS FARM EQUIPMENTS",
    subtitle: "Using state-of-the-art equipment for the best results",
    description: "Providing advanced solutions for modern poultry farming",
    products: [
      { image: chickfeeder3kg, name: "Chick Feeder 3kg", price: "₹520" },
      { image: chickcrate, name: "Chick Crate", price: "₹850" },
      { image: nippledrinker, name: "Nipple Drinker", price: "₹380" },
      { image: vaccinator, name: "Vaccinator", price: "₹720" },
    ],
  },
  {
    image: slider3,
    title: "Sustainable Practices",
    subtitle: "Committed to environmental sustainability and animal welfare",
    description:
      "Balancing productivity with eco-friendly poultry farming solutions",
    products: [
      { image: BasinChickDrinker, name: "Basin Chick Drinker", price: "₹650" },
      { image: nippledrinker, name: "Nipple Drinker", price: "₹380" },
      { image: SprinklerSmall, name: "Small Sprinkler", price: "₹450" },
      { image: flamegun, name: "Flame Gun 4-Way", price: "₹1200" },
    ],
  },
];

const EnhancedSlider = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleSlideChange = (swiper) => {
    setActiveIndex(swiper.realIndex);
  };

  return (
    <section id="slider-part" className="w-full relative overflow-hidden">
      <Swiper
        modules={[EffectCreative, Autoplay, Navigation, Pagination, Keyboard]}
        effect="creative"
        creativeEffect={{
          prev: {
            shadow: true,
            translate: [0, 0, -400],
          },
          next: {
            translate: ["100%", 0, 0],
          },
        }}
        speed={700}
        autoplay={{
          delay: 5000, // Increased delay to give users time to see products
          disableOnInteraction: false,
          pauseOnMouseEnter: true,
        }}
        loop
        navigation={{
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        }}
        pagination={{
          clickable: true,
          el: ".swiper-pagination",
          type: "bullets",
          bulletClass: "swiper-pagination-bullet",
          bulletActiveClass: "swiper-pagination-bullet-active",
        }}
        keyboard={{ enabled: true }}
        lazy={{ loadPrevNext: true }}
        className="h-screen"
        onSlideChange={handleSlideChange}
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <div className="relative flex items-center justify-center h-screen w-screen overflow-hidden ">
              {/* Full-Screen Background Image */}
              <img
                src={slide.image}
                alt="slide"
                className="absolute inset-0 w-full h-full object-fit: contain"
              />

              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-black/70 to-black/10 transition-opacity duration-1000"></div>

              {/* Content */}
              <div className="relative z-10 text-center w-full max-w-7xl mx-auto px-8 flex flex-col items-center">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={index}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.5 }}
                    className="flex flex-col items-center w-full"
                  >
                    <motion.h1
                      initial={{ y: 40, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{ duration: 0.7, delay: 0.2 }}
                      className="text-10xl sm:text-5xl md:text-10xl font-bold text-white mb-4 leading-tight relative"
                    >
                      {slide.title}
                    </motion.h1>

                    <motion.p
                      initial={{ y: 30, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{ duration: 0.6, delay: 0.5 }}
                      className="mb-8 text-lg sm:text-xl md:text-2xl text-white/90 font-light"
                    >
                      {slide.description}
                    </motion.p>

                    {/* Product Grid */}
                    <motion.div
                      initial={{ y: 40, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{ duration: 0.8, delay: 0.8 }}
                      className="w-full max-w-6xl mt-4"
                    >
                      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 ">
                        {slide.products.map((product, prodIndex) => (
                          <motion.div
                            key={prodIndex}
                            initial={{ scale: 0.8, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            transition={{
                              duration: 0.5,
                              delay: 0.9 + prodIndex * 0.1,
                            }}
                            className="bg-white/10 backdrop-blur-md rounded-lg overflow-hidden shadow-lg border border-white/20 hover:border-yellow-400/50 transition-all duration-300 group "
                          >
                            <div className="relative h-32 sm:h-44 md:h-52 overflow-hidden  ">
                              <img
                                src={product.image}
                                alt={product.name}
                                className="w-full h-full object-fit: contain transition-transform duration-500 group-hover:scale-110 "
                              />
                              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                            </div>
                            <div className="p-3 sm:p-4 text-center">
                              <h3 className="text-white font-medium text-sm sm:text-base mb-1 group-hover:text-yellow-400 transition-colors">
                                {product.name}
                              </h3>
                              <p className="text-yellow-400 font-bold text-sm sm:text-base">
                                {/* {product.price} */}
                              </p>
                            </div>
                          </motion.div>
                        ))}
                      </div>
                    </motion.div>

                    <motion.div
                      initial={{ y: 30, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{ duration: 0.6, delay: 1.2 }}
                      className="mt-8"
                    ></motion.div>
                  </motion.div>
                </AnimatePresence>
              </div>
            </div>
          </SwiperSlide>
        ))}

        {/* Enhanced Navigation Buttons */}
        <div className="swiper-button-next !w-14 !h-14 !right-6"></div>
        <div className="swiper-button-prev !w-14 !h-14 !left-6"></div>

        {/* Enhanced Pagination */}
        <div className="swiper-pagination !bottom-10"></div>
      </Swiper>

      {/* Slide indicators */}
      <div className="absolute bottom-6 left-6 z-20 hidden md:flex items-center space-x-3">
        {slides.map((_, index) => (
          <div
            key={index}
            className={`h-1 transition-all duration-500 ${
              index === activeIndex ? "w-10 bg-yellow-400" : "w-4 bg-white/40"
            }`}
          ></div>
        ))}
      </div>

      <style jsx>{`
        .swiper-button-next,
        .swiper-button-prev {
          background-color: rgba(255, 255, 255, 0.1);
          backdrop-filter: blur(8px);
          border: 1px solid rgba(255, 255, 255, 0.3);
          border-radius: 50%;
          color: white;
          transition: all 0.4s cubic-bezier(0.2, 0.8, 0.2, 1);
          transform-origin: center;
        }

        .swiper-button-next:hover,
        .swiper-button-prev:hover {
          background-color: rgba(234, 179, 8, 0.2);
          border-color: rgba(234, 179, 8, 0.5);
          transform: scale(1.1);
          box-shadow: 0 0 15px rgba(234, 179, 8, 0.4);
        }

        .swiper-button-next::after,
        .swiper-button-prev::after {
          font-size: 1.5rem;
          font-weight: bold;
        }

        .swiper-pagination-bullet {
          width: 12px;
          height: 12px;
          background-color: rgba(255, 255, 255, 0.4);
          border: 2px solid transparent;
          opacity: 1;
          transition: all 0.3s ease;
          margin: 0 6px;
        }

        .swiper-pagination-bullet-active {
          background-color: #eab308;
          border-color: rgba(255, 255, 255, 0.5);
          transform: scale(1.2);
          box-shadow: 0 0 10px rgba(234, 179, 8, 0.5);
        }
      `}</style>
    </section>
  );
};

export default EnhancedSlider;
