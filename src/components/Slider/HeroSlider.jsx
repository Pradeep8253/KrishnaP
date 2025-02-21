import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Circle, CircleDot } from "lucide-react";
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
import slider4 from "../Slider/slider4.png";
const WelcomeSlider = () => {
  const [activeSlide, setActiveSlide] = useState(0);
  const [direction, setDirection] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const slides = [
    {
      backgroundImage: slider1,
      images: [
        BasinChickDrinker,
        flamegun,
        jumboautomaticdrinkerclassic,
        SprinklerSmall,
      ],
      title: "WELCOME TO KRISHNA POULTRY EQUIPMENTS",
      description:
        "We provide the highest quality poultry products with modern farming techniques",
      highlight: "Featured",
    },
    {
      backgroundImage: slider2,
      images: [
        chickfeeder3kg,
        chickcrate,
        jumboautomaticdrinkerclassic,
        SprinklerSmall,
      ],
      title: "QUALITY PRODUCTS FARM EQUIPMENTS",
      description: "Using state-of-the-art equipment for the best results",
      highlight: "New",
    },
    {
      backgroundImage: slider4,
      images: [
        nippledrinker,
        vaccinator,
        jumboautomaticdrinkerclassic,
        SprinklerSmall,
      ],
      title: "Sustainable Practices",
      description:
        "Committed to environmental sustainability and animal welfare",
      highlight: "Eco-Friendly",
    },
  ];

  useEffect(() => {
    if (isAutoPlaying) {
      const interval = setInterval(() => {
        setDirection(1);
        setActiveSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
      }, 10000);
      return () => clearInterval(interval);
    }
  }, [isAutoPlaying, slides.length]);

  const slideVariants = {
    enter: (direction) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0,
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
    },
    exit: (direction) => ({
      zIndex: 0,
      x: direction < 0 ? 1000 : -1000,
      opacity: 0,
    }),
  };

  const swipeConfidenceThreshold = 10000;
  const swipePower = (offset, velocity) => {
    return Math.abs(offset) * velocity;
  };

  const paginate = (newDirection) => {
    setDirection(newDirection);
    setActiveSlide((prev) => {
      if (newDirection === 1) {
        return prev === slides.length - 1 ? 0 : prev + 1;
      }
      return prev === 0 ? slides.length - 1 : prev - 1;
    });
  };

  return (
    <div className="relative w-full rounded-xl shadow-xl overflow-hidden">
      <div className="relative min-h-[500px] sm:min-h-[600px] md:min-h-[800px]">
        <AnimatePresence initial={false} custom={direction}>
          <motion.div
            key={activeSlide}
            custom={direction}
            variants={slideVariants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{
              x: { type: "spring", stiffness: 300, damping: 30 },
              opacity: { duration: 0.2 },
            }}
            drag="x"
            dragConstraints={{ left: 0, right: 0 }}
            dragElastic={1}
            onDragEnd={(e, { offset, velocity }) => {
              const swipe = swipePower(offset.x, velocity.x);
              if (swipe < -swipeConfidenceThreshold) {
                paginate(1);
              } else if (swipe > swipeConfidenceThreshold) {
                paginate(-1);
              }
            }}
            className="absolute inset-0 w-full h-full"
            style={{
              backgroundImage: `url(${slides[activeSlide].backgroundImage})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            {/* Semi-transparent overlay */}
            <div className="absolute inset-0 bg-[rgba(0,15,52,0.32)]"></div>

            {/* Content Container */}
            <motion.div
              className="relative z-10 h-full flex flex-col justify-center sm:justify-start my-80 sm:my-45 md:my-32"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.5 }}
            >
              {/* Title Section */}
              <div className="text-center text-white pt-8 sm:pt-16 px-4 mb-4 sm:mb-8">
                <motion.h2
                  className="text-xl sm:text-3xl lg:text-5xl font-bold mb-2 sm:mb-4 tracking-wide"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3, duration: 0.5 }}
                >
                  {slides[activeSlide].title}
                </motion.h2>
                <motion.p
                  className="text-xs sm:text-lg max-w-2xl mx-auto"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4, duration: 0.5 }}
                >
                  {slides[activeSlide].description}
                </motion.p>
              </div>

              {/* Images Grid */}
              <div className="px-4 sm:px-6 mb-20 sm:mt-auto sm:mb-16">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2 sm:gap-4 max-w-6xl mx-auto mb-50">
                  {slides[activeSlide].images.map((image, imgIndex) => (
                    <motion.div
                      key={imgIndex}
                      className="relative h-32 sm:h-48 overflow-hidden rounded-lg"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{
                        delay: 0.5 + imgIndex * 0.1,
                        duration: 0.5,
                      }}
                    >
                      <div className="absolute inset-0 bg-black/20 backdrop-blur-sm"></div>
                      <div className="absolute inset-2 bg-white/80 backdrop-blur-sm rounded-lg overflow-hidden flex items-center justify-center p-2">
                        <img
                          src={image}
                          alt={`Product ${imgIndex + 1}`}
                          className="max-w-full max-h-full object-contain transform transition-all duration-500 hover:scale-105"
                        />
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={() => paginate(-1)}
        className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 bg-white/40 hover:bg-white p-1 sm:p-2 rounded-full shadow-lg z-20 text-gray-800 hover:text-indigo-600 transition-all"
        aria-label="Previous slide"
      >
        <ChevronLeft size={16} />
      </button>

      <button
        onClick={() => paginate(1)}
        className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white p-1 sm:p-2 rounded-full shadow-lg z-20 text-gray-800 hover:text-indigo-600 transition-all"
        aria-label="Next slide"
      >
        <ChevronRight size={16} />
      </button>

      {/* Indicator Dots */}
      <div className="absolute bottom-2 sm:bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-20">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => {
              setDirection(index > activeSlide ? 1 : -1);
              setActiveSlide(index);
            }}
            className="focus:outline-none"
            aria-label={`Go to slide ${index + 1}`}
          >
            {activeSlide === index ? (
              <CircleDot size={10} className="text-white" />
            ) : (
              <Circle
                size={10}
                className="text-white/60 hover:text-white transition-colors"
              />
            )}
          </button>
        ))}
      </div>
    </div>
  );
};

export default WelcomeSlider;
