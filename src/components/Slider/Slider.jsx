import React, { useState, useEffect } from "react";
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
  EffectFade,
} from "swiper/modules";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronRight, ChevronLeft, ExternalLink } from "lucide-react";

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
import slider5 from "../Slider/slider5.png";
import slider6 from "../Slider/slider6.png";

// Define your product categories for each slide
const slides = [
  {
    image: slider5,
    title: "Welcome to Krishna Poultry Equipments",
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
    title: "Quality Products Farm Equipments",
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
  const [swiperInstance, setSwiperInstance] = useState(null);
  const [isMobile, setIsMobile] = useState(false);

  // Handle responsive layout
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);

    return () => {
      window.removeEventListener("resize", checkMobile);
    };
  }, []);

  const handleSlideChange = (swiper) => {
    setActiveIndex(swiper.realIndex);
  };

  const ProductCard = ({ product, index }) => {
    return (
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
        className="bg-white/15 backdrop-blur-md rounded-lg overflow-hidden shadow-xl border border-white/20 hover:border-yellow-400 transition-all duration-300 group"
      >
        <div className="relative h-24 sm:h-32 md:h-40 overflow-hidden">
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-full object-contain object-center transition-transform duration-700 group-hover:scale-110"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        </div>
        <div className="p-2 sm:p-3 text-center">
          <h3 className="text-white font-medium text-xs sm:text-sm md:text-base truncate group-hover:text-yellow-400 transition-colors">
            {product.name}
          </h3>
          <p className="text-yellow-300 text-xs md:text-sm font-semibold mt-1 opacity-0 group-hover:opacity-100 transition-all duration-300">
            {product.price}
          </p>
        </div>
        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <button className="bg-yellow-500 hover:bg-yellow-600 text-black text-xs md:text-sm font-medium py-1 px-3 rounded-full transform translate-y-4 group-hover:translate-y-0 transition-all duration-300 flex items-center gap-1">
            View <ExternalLink size={14} />
          </button>
        </div>
      </motion.div>
    );
  };

  return (
    <section id="slider-part" className="w-full relative overflow-hidden">
      <Swiper
        modules={[
          EffectCreative,
          EffectFade,
          Autoplay,
          Navigation,
          Pagination,
          Keyboard,
        ]}
        effect={isMobile ? "fade" : "creative"}
        creativeEffect={{
          prev: {
            shadow: true,
            translate: ["-20%", 0, -400],
          },
          next: {
            translate: ["100%", 0, 0],
          },
        }}
        speed={800}
        autoplay={{
          delay: 6000,
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
        onSwiper={setSwiperInstance}
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index} className="bg-black">
            <div className="relative flex items-center justify-center h-screen w-full overflow-hidden">
              {/* Parallax Background Image */}
              <motion.div
                initial={{ scale: 1.1 }}
                animate={{
                  scale: activeIndex === index ? 1 : 1.1,
                  y: activeIndex === index ? 0 : 20,
                }}
                transition={{ duration: 6 }}
                className="absolute inset-0 w-full h-full"
              >
                <img
                  src={slide.image}
                  alt={`Krishna Poultry - ${slide.title}`}
                  className="absolute inset-0 w-full h-full object-cover transform transition-transform duration-500"
                  loading={index === 0 ? "eager" : "lazy"}
                />
              </motion.div>

              {/* Enhanced Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/40 to-black/60 md:from-black/40 md:via-black/30 md:to-black/50"></div>

              {/* Content */}
              <div className="relative z-10 text-center w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={`slide-${index}-${activeIndex}`}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: activeIndex === index ? 1 : 0 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.5 }}
                    className="flex flex-col items-center w-full"
                  >
                    {/* Title with animated gradient */}
                    <motion.div
                      initial={{ y: 40, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{ duration: 0.7, delay: 0.2 }}
                      className="relative mt-16 md:mt-24 lg:mt-20 mb-4"
                    >
                      <h1 className="text-2xl sm:text-3xl md:text-5xl font-bold bg-gradient-to-r from-yellow-400 via-amber-300 to-yellow-200 bg-clip-text text-transparent pb-1">
                        {slide.title}
                      </h1>
                      <motion.div
                        initial={{ width: "0%" }}
                        animate={{ width: "80%" }}
                        transition={{ duration: 1, delay: 0.5 }}
                        className="h-1 bg-gradient-to-r from-yellow-500 to-amber-300 rounded-full mx-auto mt-2"
                      />
                    </motion.div>

                    {/* Subtitle */}
                    <motion.h2
                      initial={{ y: 20, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{ duration: 0.6, delay: 0.4 }}
                      className="text-sm sm:text-base md:text-lg text-yellow-100 font-medium tracking-wider uppercase mb-3"
                    >
                      {slide.subtitle}
                    </motion.h2>

                    {/* Description */}
                    <motion.p
                      initial={{ y: 20, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{ duration: 0.6, delay: 0.6 }}
                      className="mb-6 sm:mb-8 text-sm sm:text-base md:text-xl text-white/90 font-light max-w-2xl"
                    >
                      {slide.description}
                    </motion.p>

                    {/* Product Grid - Responsive Layout */}
                    <motion.div
                      initial={{ y: 40, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{ duration: 0.8, delay: 0.7 }}
                      className="w-full max-w-6xl mt-2 sm:mt-6"
                    >
                      <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 lg:gap-6">
                        {slide.products.map((product, prodIndex) => (
                          <ProductCard
                            key={prodIndex}
                            product={product}
                            index={prodIndex}
                          />
                        ))}
                      </div>
                    </motion.div>

                    {/* CTA Button */}
                    <motion.button
                      initial={{ y: 20, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{ duration: 0.5, delay: 1.2 }}
                      className="mt-8 bg-gradient-to-r from-yellow-500 to-amber-600 hover:from-yellow-600 hover:to-amber-700 text-black font-medium rounded-full px-6 py-3 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-yellow-500/30"
                    >
                      Browse All Products
                    </motion.button>
                  </motion.div>
                </AnimatePresence>
              </div>
            </div>
          </SwiperSlide>
        ))}

        {/* Custom Navigation Buttons with Lucide Icons */}
        <div className="custom-navigation absolute inset-0 z-20 pointer-events-none">
          <div className="h-full flex items-center justify-between px-2 sm:px-4 md:px-8">
            <button
              onClick={() => swiperInstance?.slidePrev()}
              className="swiper-button-prev flex items-center justify-center w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 rounded-full bg-black/20 backdrop-blur-md border border-white/10 text-white hover:bg-yellow-500/70 hover:text-black transition-all duration-300 pointer-events-auto"
            >
              <ChevronLeft className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6" />
            </button>
            <button
              onClick={() => swiperInstance?.slideNext()}
              className="swiper-button-next flex items-center justify-center w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 rounded-full bg-black/20 backdrop-blur-md border border-white/10 text-white hover:bg-yellow-500/70 hover:text-black transition-all duration-300 pointer-events-auto"
            >
              <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6" />
            </button>
          </div>
        </div>

        {/* Enhanced Pagination - Animated and Responsive */}
        <div className="swiper-pagination !bottom-4 sm:!bottom-6 md:!bottom-8"></div>
      </Swiper>

      {/* Slide indicators - Responsive visibility */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-20 hidden lg:flex items-center space-x-4">
        {slides.map((slide, index) => (
          <button
            key={index}
            onClick={() => swiperInstance?.slideTo(index)}
            className="group flex flex-col items-center focus:outline-none"
          >
            <span className="text-xs text-white/60 group-hover:text-yellow-300 transition-colors mb-2">
              {slide.title.split(" ")[0]}
            </span>
            <div
              className={`h-1 transition-all duration-500 rounded-full ${
                index === activeIndex
                  ? "w-16 bg-yellow-400"
                  : "w-8 bg-white/30 group-hover:bg-white/50"
              }`}
            ></div>
          </button>
        ))}
      </div>

      {/* Custom Progress Bar */}
      <div className="absolute bottom-0 left-0 w-full h-1 z-20">
        <motion.div
          initial={{ width: "0%" }}
          animate={{ width: "100%" }}
          transition={{
            duration: 6,
            ease: "linear",
            repeat: Infinity,
            repeatType: "loop",
          }}
          className="h-full bg-gradient-to-r from-yellow-500 via-amber-400 to-yellow-300"
        ></motion.div>
      </div>

      <style jsx>{`
        .swiper-pagination-bullet {
          width: 10px;
          height: 10px;
          background-color: rgba(255, 255, 255, 0.3);
          border: 1px solid rgba(255, 255, 255, 0.5);
          opacity: 1;
          transition: all 0.4s cubic-bezier(0.2, 0.8, 0.2, 1);
          margin: 0 5px;
        }

        @media (min-width: 640px) {
          .swiper-pagination-bullet {
            width: 12px;
            height: 12px;
            margin: 0 6px;
          }
        }

        .swiper-pagination-bullet-active {
          background-color: #eab308;
          transform: scale(1.3);
          box-shadow: 0 0 10px rgba(234, 179, 8, 0.6);
        }
      `}</style>
    </section>
  );
};

export default EnhancedSlider;
