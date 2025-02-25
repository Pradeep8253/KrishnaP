import React, { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ChevronLeft,
  ChevronRight,
  CircleDot,
  ShoppingBag,
  Eye,
} from "lucide-react";

// Import product images
import BasinChickDrinker from "../Pages/fwdkrishnatradersproductsmain/BasinChickDrinker2.5.jpg";
import flamegun from "../Pages/fwdkrishnatradersproductsmain/flamegun4way.jpg";
import jumboautomaticdrinkerclassic from "../Pages/fwdkrishnatradersproductsmain/jumboautomaticdrinkerclassic.jpg";
import SprinklerSmall from "../Pages/fwdkrishnatradersproductsmain/SprinklerSmall.jpg";
import chickfeeder3kg from "../Pages/fwdkrishnatradersproducts/chickfeeder3kg.jpg";
import chickcrate from "../Pages/fwdkrishnatradersproducts/chickcrate.jpg";
import nippledrinker from "../Pages/fwdkrishnatradersproducts/nippledrinker.jpg";
import vaccinator from "../Pages/fwdkrishnatradersproducts/vaccinator.jpg";

// Import background images
import slider1 from "../Slider/sloider1.png";
import slider2 from "../Slider/slider2.png";
import slider4 from "../Slider/slider4.png";

// Product data with prices and descriptions
const productData = {
  "Basin Chick Drinker": {
    price: "₹650",
    description: "Durable plastic basin for efficient water delivery",
  },
  "Flame Gun 4-Way": {
    price: "₹1200",
    description: "Powerful flame gun for sanitization and pest control",
  },
  "Jumbo Automatic Drinker": {
    price: "₹950",
    description: "Large capacity automatic water dispenser",
  },
  "Small Sprinkler": {
    price: "₹450",
    description: "Water-efficient sprinkler for climate control",
  },
  "Chick Feeder 3kg": {
    price: "₹520",
    description: "High-capacity feeder designed for growing birds",
  },
  "Chick Crate": {
    price: "₹850",
    description: "Sturdy transportation crate with ventilation",
  },
  "Nipple Drinker": {
    price: "₹380",
    description: "Leak-proof nipple drinking system",
  },
  Vaccinator: {
    price: "₹720",
    description: "Precision vaccinator for poultry health management",
  },
};

// Slider data configuration
const sliderData = [
  {
    id: "slide-1",
    backgroundImage: slider1,
    title: "PREMIUM POULTRY EQUIPMENT",
    subtitle: "TRUSTED BY PROFESSIONALS",
    description:
      "High-quality products designed for maximum efficiency and animal welfare",
    products: [
      { image: BasinChickDrinker, name: "Basin Chick Drinker" },
      { image: flamegun, name: "Flame Gun 4-Way" },
      { image: jumboautomaticdrinkerclassic, name: "Jumbo Automatic Drinker" },
      { image: SprinklerSmall, name: "Small Sprinkler" },
    ],
    // accentColor: "from-blue-600 to-indigo-700",
    textColor: "text-blue-50",
  },
  {
    id: "slide-2",
    backgroundImage: slider2,
    title: "ADVANCED FARMING SOLUTIONS",
    subtitle: "INNOVATION IN EVERY PRODUCT",
    description:
      "Cutting-edge equipment that improves farm efficiency and productivity",
    products: [
      { image: chickfeeder3kg, name: "Chick Feeder 3kg" },
      { image: chickcrate, name: "Chick Crate" },
      { image: jumboautomaticdrinkerclassic, name: "Jumbo Automatic Drinker" },
      { image: SprinklerSmall, name: "Small Sprinkler" },
    ],
    // accentColor: "from-green-600 to-emerald-700",
    textColor: "text-emerald-50",
  },
  {
    id: "slide-3",
    backgroundImage: slider4,
    title: "ECO-FRIENDLY PRACTICES",
    subtitle: "SUSTAINABLE POULTRY SOLUTIONS",
    description:
      "Environmentally conscious equipment designed for the modern farm",
    products: [
      { image: nippledrinker, name: "Nipple Drinker" },
      { image: vaccinator, name: "Vaccinator" },
      { image: jumboautomaticdrinkerclassic, name: "Jumbo Automatic Drinker" },
      { image: SprinklerSmall, name: "Small Sprinkler" },
    ],
    // accentColor: "from-amber-500 to-orange-600",
    textColor: "text-amber-50",
  },
];

// Single product card component with animations and hover effects
const ProductCard = ({ product, index, accentColor }) => {
  const { name, image } = product;
  const { price, description } = productData[name] || {
    price: "₹0",
    description: "Product description",
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.1 * index }}
      className="relative group overflow-hidden rounded-xl shadow-lg bg-white"
    >
      {/* Product Image Container */}
      <div className="relative h-40 md:h-52 lg:h-60 overflow-hidden bg-gray-100">
        <motion.img
          src={image}
          alt={name}
          className="w-full h-full object-contain p-2"
          initial={{ scale: 0.9 }}
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.3 }}
        />

        {/* Hover Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <div className="absolute bottom-0 w-full p-3 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300 flex justify-between items-center">
            <button
              className={`bg-gradient-to-r ${accentColor} text-white px-3 py-1 rounded-full text-xs flex items-center gap-1 hover:shadow-lg transition-all duration-300`}
            >
              <Eye size={14} /> View
            </button>
            <button className="bg-white text-gray-800 px-3 py-1 rounded-full text-xs flex items-center gap-1 hover:bg-gray-100 transition-all duration-300">
              <ShoppingBag size={14} /> Add
            </button>
          </div>
        </div>
      </div>

      {/* Product Info */}
      <div className="p-3">
        <h3 className="font-medium text-gray-800 text-sm md:text-base truncate">
          {name}
        </h3>
        <div className="mt-1 flex justify-between items-center">
          <p
            className={`font-bold bg-gradient-to-r ${accentColor} bg-clip-text text-transparent`}
          >
            {price}
          </p>
          <div
            className={`h-1 w-6 rounded-full bg-gradient-to-r ${accentColor}`}
          ></div>
        </div>
        <p className="text-xs text-gray-500 mt-1 line-clamp-2">{description}</p>
      </div>

      {/* Background Decorative Element */}
      <div
        className={`absolute -right-6 -bottom-6 w-12 h-12 rounded-full bg-gradient-to-r ${accentColor} opacity-20`}
      ></div>
    </motion.div>
  );
};

const PremiumSlider = () => {
  const [activeSlide, setActiveSlide] = useState(0);
  const [direction, setDirection] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [touchStart, setTouchStart] = useState(0);
  const [isGrabbing, setIsGrabbing] = useState(false);

  // Navigate to specific slide
  const goToSlide = useCallback(
    (index) => {
      setDirection(index > activeSlide ? 1 : -1);
      setActiveSlide(index);
    },
    [activeSlide]
  );

  // Handle next/prev navigation
  const navigate = useCallback((dir) => {
    setDirection(dir);
    setActiveSlide((prev) => {
      if (dir === 1) {
        return prev === sliderData.length - 1 ? 0 : prev + 1;
      }
      return prev === 0 ? sliderData.length - 1 : prev - 1;
    });
  }, []);

  // Autoplay functionality
  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      navigate(1);
    }, 8000);

    return () => clearInterval(interval);
  }, [isAutoPlaying, navigate]);

  // Touch handlers for mobile swipe
  const handleTouchStart = (e) => {
    setTouchStart(e.touches[0].clientX);
    setIsGrabbing(true);
  };

  const handleTouchEnd = (e) => {
    setIsGrabbing(false);
    const touchEnd = e.changedTouches[0].clientX;
    const diff = touchStart - touchEnd;

    // Minimum swipe distance required to trigger slide change
    if (Math.abs(diff) > 50) {
      navigate(diff > 0 ? 1 : -1);
    }
  };

  // Animation variants
  const slideVariants = {
    enter: (direction) => ({
      x: direction > 0 ? "100%" : "-100%",
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (direction) => ({
      x: direction < 0 ? "100%" : "-100%",
      opacity: 0,
    }),
  };

  // Text animation variants
  const textVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: (delay) => ({
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        delay: delay,
      },
    }),
  };

  return (
    <div
      className={`relative overflow-hidden w-full h-[600px] md:h-[700px] lg:h-[800px] ${
        isGrabbing ? "cursor-grabbing" : "cursor-default"
      }`}
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
    >
      {/* Background Slides */}
      <AnimatePresence initial={false} custom={direction} mode="wait">
        <motion.div
          key={activeSlide}
          custom={direction}
          variants={slideVariants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{
            x: { type: "spring", stiffness: 300, damping: 30 },
            opacity: { duration: 0.3 },
          }}
          className="absolute inset-0 w-full h-full"
        >
          {/* Background Image with Mask */}
          <div className="absolute inset-0 overflow-hidden">
            <img
              src={sliderData[activeSlide].backgroundImage}
              alt="Background"
              className="w-full h-full object-cover scale-105 filter  "
            />
            <div
              className={`absolute inset-0 bg-gradient-to-br ${sliderData[activeSlide].accentColor} opacity-80`}
            ></div>

            {/* Decorative elements */}
            <div className="absolute inset-0 overflow-hidden">
              <div className="absolute -top-40 -left-40 w-96 h-96 rounded-full bg-white opacity-10"></div>
              <div className="absolute -bottom-20 -right-20 w-80 h-80 rounded-full bg-white opacity-10"></div>
            </div>
          </div>

          {/* Content Container */}
          <div className="relative z-10 h-full flex flex-col pt-8 md:pt-16 pb-12 px-4 md:px-8 max-w-7xl mx-auto">
            {/* Title Section */}
            <div className="text-center text-white mb-6 md:mb-10">
              <motion.span
                className={`inline-block px-4 py-1 rounded-full text-xs font-medium bg-white ${sliderData[
                  activeSlide
                ].textColor.replace("text-", "text-opacity-90 text-")} mb-3`}
                custom={0.1}
                initial="hidden"
                animate="visible"
                variants={textVariants}
              >
                {sliderData[activeSlide].subtitle}
              </motion.span>

              <motion.h2
                className="text-2xl md:text-4xl lg:text-5xl font-bold mb-3 md:mb-4 tracking-tight text-white"
                custom={0.2}
                initial="hidden"
                animate="visible"
                variants={textVariants}
              >
                {sliderData[activeSlide].title}
              </motion.h2>

              <motion.p
                className="text-sm md:text-base text-white/90 max-w-2xl mx-auto"
                custom={0.3}
                initial="hidden"
                animate="visible"
                variants={textVariants}
              >
                {sliderData[activeSlide].description}
              </motion.p>

              <motion.div
                className={`h-1 w-24 mx-auto mt-4 rounded-full bg-gradient-to-r ${sliderData[activeSlide].accentColor}`}
                initial={{ width: 0, opacity: 0 }}
                animate={{ width: 96, opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.4 }}
              ></motion.div>
            </div>

            {/* Products Grid Section */}
            <div className="flex-1 flex items-center justify-center pb-4 mb-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 w-full max-w-6xl mx-auto">
                {sliderData[activeSlide].products.map((product, index) => (
                  <ProductCard
                    key={`${sliderData[activeSlide].id}-${index}`}
                    product={product}
                    index={index}
                    accentColor={sliderData[activeSlide].accentColor}
                  />
                ))}
              </div>
            </div>

            {/* Bottom Controls and Indicators */}
            <div className="mt-auto flex justify-between items-center">
              {/* Left slide details */}
              <div className="hidden md:block">
                <p className="text-white/90 text-sm font-medium">
                  {activeSlide + 1}/{sliderData.length}
                </p>
              </div>

              {/* Center indicators */}
              <div className="flex gap-3 justify-center mx-auto">
                {sliderData.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => goToSlide(index)}
                    className={`h-2 rounded-full transition-all duration-300 ${
                      activeSlide === index
                        ? `w-8 bg-white`
                        : `w-2 bg-white/40 hover:bg-white/60`
                    }`}
                    aria-label={`Go to slide ${index + 1}`}
                  />
                ))}
              </div>

              {/* Right controls */}
              <div className="flex gap-2">
                <button
                  onClick={() => navigate(-1)}
                  className="bg-white/10 hover:bg-white/20 p-2 rounded-full text-white transition-all duration-300"
                  aria-label="Previous slide"
                >
                  <ChevronLeft size={18} />
                </button>
                <button
                  onClick={() => navigate(1)}
                  className="bg-white/10 hover:bg-white/20 p-2 rounded-full text-white transition-all duration-300"
                  aria-label="Next slide"
                >
                  <ChevronRight size={18} />
                </button>
              </div>
            </div>
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Slide progress indicator */}
      <div className="absolute bottom-0 left-0 w-full h-1 bg-white/20">
        <motion.div
          className={`h-full bg-gradient-to-r ${sliderData[activeSlide].accentColor}`}
          initial={{ width: "0%" }}
          animate={{ width: "100%" }}
          transition={{
            duration: 8,
            ease: "linear",
            repeat: isAutoPlaying ? Infinity : 0,
          }}
          key={`progress-${activeSlide}`}
        />
      </div>
    </div>
  );
};

export default PremiumSlider;
