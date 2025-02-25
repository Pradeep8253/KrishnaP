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
import slider5 from "../Slider/slider5.png"
import slider6 from "../Slider/slider6.png"

// Define your product categories for each slide
const slides = [
  {
    image: slider5,
    title: " Welcome to Krishna Poultry Equipments  ",
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
    title: "     Quality Products Farm Equipments",
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
    image: slider6,
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
          delay: 5000,
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
        className="h-screen md:h-screen"
        onSlideChange={handleSlideChange}
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <div className="relative flex items-center justify-center h-screen w-screen overflow-hidden">
              {/* Full-Screen Background Image */}
              <img
                src={slide.image}
                alt="slide"
                className="absolute inset-0 w-full h-full object-cover md:object-fit"
              />

              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/30 to-black/10 transition-opacity duration-500"></div>

              {/* Content */}
              <div className="relative z-10 text-center w-full max-w-7xl mx-auto px-4 sm:px-6 md:px-8 flex flex-col items-center">
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
                      className="text-2xl sm:text-3xl md:text-5xl  bg-gradient-to-r from-[#f3a719] via-[#ffc355] to-[#ffe3c7] stroke-orange-600 bg-clip-text text-transparent  font-bold mb-2 sm:mb-4 leading-tight relative mt-40"
                    >
                      {slide.title}
                    </motion.h1>

                    <motion.p
                      initial={{ y: 30, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{ duration: 0.6, delay: 0.5 }}
                      className="mb-4 sm:mb-6 text-sm sm:text-base md:text-xl text-white/90 font-light px-2"
                    >
                      {slide.description}
                    </motion.p>

                    {/* Product Grid - Adjusted for better mobile display */}
                    <motion.div
                      initial={{ y: 40, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{ duration: 0.8, delay: 0.8 }}
                      className="w-full max-w-6xl mt-1 sm:mt-4"
                    >
                      <div className="grid grid-cols-2 md:grid-cols-4 gap-2 sm:gap-4 md:gap-6">
                        {slide.products.map((product, prodIndex) => (
                          <motion.div
                            key={prodIndex}
                            initial={{ scale: 0.8, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            transition={{
                              duration: 0.5,
                              delay: 0.9 + prodIndex * 0.1,
                            }}
                            className="bg-white/10 backdrop-blur-md rounded-lg overflow-hidden shadow-lg border border-white/20 hover:border-yellow-400/50 transition-all duration-300 group"
                          >
                            <div className="relative h-24 sm:h-32 md:h-40 overflow-hidden">
                              <img
                                src={product.image}
                                alt={product.name}
                                className="w-full h-full object-contain object-center transition-transform duration-500 group-hover:scale-110"
                              />
                              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                            </div>
                            <div className="p-2 sm:p-3 text-center">
                              <h3 className="text-white font-medium text-xs sm:text-sm md:text-base truncate group-hover:text-yellow-400 transition-colors">
                                {product.name}
                              </h3>
                            </div>
                          </motion.div>
                        ))}
                      </div>
                    </motion.div>
                  </motion.div>
                </AnimatePresence>
              </div>
            </div>
          </SwiperSlide>
        ))}

        {/* Enhanced Navigation Buttons - Adjusted for mobile */}
        <div className="swiper-button-next !w-8 !h-8 sm:!w-10 sm:!h-10 md:!w-14 md:!h-14 !right-2 sm:!right-4 md:!right-6 !after:text-xs sm:!after:text-sm md:!after:text-base"></div>
        <div className="swiper-button-prev !w-8 !h-8 sm:!w-10 sm:!h-10 md:!w-14 md:!h-14 !left-2 sm:!left-4 md:!left-6 !after:text-xs sm:!after:text-sm md:!after:text-base"></div>

        {/* Enhanced Pagination */}
        <div className="swiper-pagination !bottom-4 sm:!bottom-6 md:!bottom-10"></div>
      </Swiper>

      {/* Slide indicators - Hidden on mobile, visible on larger screens */}
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
          font-size: 1rem;
        }

        @media (min-width: 640px) {
          .swiper-button-next::after,
          .swiper-button-prev::after {
            font-size: 1.25rem;
          }
        }

        @media (min-width: 768px) {
          .swiper-button-next::after,
          .swiper-button-prev::after {
            font-size: 1.5rem;
          }
        }

        .swiper-pagination-bullet {
          width: 8px;
          height: 8px;
          background-color: rgba(255, 255, 255, 0.4);
          border: 1px solid transparent;
          opacity: 1;
          transition: all 0.3s ease;
          margin: 0 4px;
        }

        @media (min-width: 640px) {
          .swiper-pagination-bullet {
            width: 10px;
            height: 10px;
            margin: 0 5px;
            border-width: 1.5px;
          }
        }

        @media (min-width: 768px) {
          .swiper-pagination-bullet {
            width: 12px;
            height: 12px;
            margin: 0 6px;
            border-width: 2px;
          }
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
