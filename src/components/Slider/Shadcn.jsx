import React, { useState, useEffect, useCallback, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ChevronLeft,
  ChevronRight,
  Eye,
  ShoppingBag,
  PauseCircle,
  PlayCircle,
  Share2,
  Heart,
} from "lucide-react";

import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";

// Lazy load images for performance improvement
const LazyImage = ({ src, alt, className, ...props }) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isError, setIsError] = useState(false);
  
  return (
    <div className="relative w-full h-full">
      {!isLoaded && !isError && (
        <Skeleton className={`absolute inset-0 ${className}`} />
      )}
      <img
        src={src}
        alt={alt}
        className={`${className} ${isLoaded ? 'opacity-100' : 'opacity-0'} transition-opacity duration-300`}
        onLoad={() => setIsLoaded(true)}
        onError={() => setIsError(true)}
        loading="lazy"
        {...props}
      />
      {isError && (
        <div className="absolute inset-0 flex items-center justify-center bg-gray-100 text-gray-400 text-sm">
          Failed to load image
        </div>
      )}
    </div>
  );
};

// Import product images (same as original)
import BasinChickDrinker from "../Pages/fwdkrishnatradersproductsmain/BasinChickDrinker2.5.jpg";
import flamegun from "../Pages/fwdkrishnatradersproductsmain/flamegun4way.jpg";
import jumboautomaticdrinkerclassic from "../Pages/fwdkrishnatradersproductsmain/jumboautomaticdrinkerclassic.jpg";
import SprinklerSmall from "../Pages/fwdkrishnatradersproductsmain/SprinklerSmall.jpg";
import chickfeeder3kg from "../Pages/fwdkrishnatradersproducts/chickfeeder3kg.jpg";
import chickcrate from "../Pages/fwdkrishnatradersproducts/chickcrate.jpg";
import nippledrinker from "../Pages/fwdkrishnatradersproducts/nippledrinker.jpg";
import vaccinator from "../Pages/fwdkrishnatradersproducts/vaccinator.jpg";

// Import background images (same as original)
import slider1 from "../Slider/sloider1.png";
import slider2 from "../Slider/slider2.png";
import slider4 from "../Slider/slider4.png";
import { Skeleton } from "../ui/skeleton";
import { Badge } from "../ui/badge";
import { Button } from "../ui/button";

// Enhanced product data with additional information
const productData = {
  "Basin Chick Drinker": {
    price: "₹650",
    originalPrice: "₹750",
    description: "Durable plastic basin for efficient water delivery",
    rating: 4.7,
    stock: "In Stock",
    isNew: true,
    discount: "15%",
  },
  "Flame Gun 4-Way": {
    price: "₹1200",
    originalPrice: "₹1350",
    description: "Powerful flame gun for sanitization and pest control",
    rating: 4.3,
    stock: "Limited Stock",
    isNew: false,
    discount: "11%",
  },
  "Jumbo Automatic Drinker": {
    price: "₹950",
    originalPrice: "₹1050",
    description: "Large capacity automatic water dispenser",
    rating: 4.9,
    stock: "In Stock",
    isNew: true,
    discount: "10%",
  },
  "Small Sprinkler": {
    price: "₹450",
    originalPrice: "₹520",
    description: "Water-efficient sprinkler for climate control",
    rating: 4.5,
    stock: "In Stock",
    isNew: false,
    discount: "13%",
  },
  "Chick Feeder 3kg": {
    price: "₹520",
    originalPrice: "₹600",
    description: "High-capacity feeder designed for growing birds",
    rating: 4.6,
    stock: "In Stock",
    isNew: false,
    discount: "13%",
  },
  "Chick Crate": {
    price: "₹850",
    originalPrice: "₹950",
    description: "Sturdy transportation crate with ventilation",
    rating: 4.4,
    stock: "In Stock",
    isNew: true,
    discount: "11%",
  },
  "Nipple Drinker": {
    price: "₹380",
    originalPrice: "₹450",
    description: "Leak-proof nipple drinking system",
    rating: 4.8,
    stock: "In Stock",
    isNew: false,
    discount: "16%",
  },
  "Vaccinator": {
    price: "₹720",
    originalPrice: "₹800",
    description: "Precision vaccinator for poultry health management",
    rating: 4.7,
    stock: "Limited Stock",
    isNew: true,
    discount: "10%",
  },
};

// Enhanced slider data with improved content and theme colors
const sliderData = [
  {
    id: "slide-1",
    backgroundImage: slider1,
    title: "PREMIUM POULTRY EQUIPMENT",
    subtitle: "TRUSTED BY PROFESSIONALS",
    description:
      "High-quality products designed for maximum efficiency and animal welfare",
    cta: "Explore Premium Range",
    ctaLink: "/collections/premium",
    products: [
      { image: BasinChickDrinker, name: "Basin Chick Drinker" },
      { image: flamegun, name: "Flame Gun 4-Way" },
      { image: jumboautomaticdrinkerclassic, name: "Jumbo Automatic Drinker" },
      { image: SprinklerSmall, name: "Small Sprinkler" },
    ],
    accentColor: "from-blue-600 to-indigo-700",
    textColor: "text-blue-50",
    themeColor: "blue",
  },
  {
    id: "slide-2",
    backgroundImage: slider2,
    title: "ADVANCED FARMING SOLUTIONS",
    subtitle: "INNOVATION IN EVERY PRODUCT",
    description:
      "Cutting-edge equipment that improves farm efficiency and productivity",
    cta: "Shop Innovations",
    ctaLink: "/collections/innovations",
    products: [
      { image: chickfeeder3kg, name: "Chick Feeder 3kg" },
      { image: chickcrate, name: "Chick Crate" },
      { image: jumboautomaticdrinkerclassic, name: "Jumbo Automatic Drinker" },
      { image: SprinklerSmall, name: "Small Sprinkler" },
    ],
    accentColor: "from-green-600 to-emerald-700",
    textColor: "text-emerald-50",
    themeColor: "green",
  },
  {
    id: "slide-3",
    backgroundImage: slider4,
    title: "ECO-FRIENDLY PRACTICES",
    subtitle: "SUSTAINABLE POULTRY SOLUTIONS",
    description:
      "Environmentally conscious equipment designed for the modern farm",
    cta: "Discover Eco Solutions",
    ctaLink: "/collections/eco-friendly",
    products: [
      { image: nippledrinker, name: "Nipple Drinker" },
      { image: vaccinator, name: "Vaccinator" },
      { image: jumboautomaticdrinkerclassic, name: "Jumbo Automatic Drinker" },
      { image: SprinklerSmall, name: "Small Sprinkler" },
    ],
    accentColor: "from-amber-500 to-orange-600",
    textColor: "text-amber-50",
    themeColor: "amber",
  },
];

// Get theme-specific button styles
const getThemeStyles = (theme) => {
  const themes = {
    blue: {
      primary: "bg-blue-600 hover:bg-blue-700 text-white",
      secondary: "bg-white/10 hover:bg-white/20 text-white",
      accent: "bg-blue-600/10 text-blue-600",
      progress: "bg-blue-600",
      indicator: "bg-blue-600",
      border: "border-blue-600",
    },
    green: {
      primary: "bg-green-600 hover:bg-green-700 text-white",
      secondary: "bg-white/10 hover:bg-white/20 text-white",
      accent: "bg-green-600/10 text-green-600",
      progress: "bg-green-600",
      indicator: "bg-green-600",
      border: "border-green-600",
    },
    amber: {
      primary: "bg-amber-500 hover:bg-amber-600 text-white",
      secondary: "bg-white/10 hover:bg-white/20 text-white",
      accent: "bg-amber-500/10 text-amber-500",
      progress: "bg-amber-500",
      indicator: "bg-amber-500",
      border: "border-amber-500",
    },
  };
  
  return themes[theme] || themes.blue;
};

// Shimmer effect component for loading state
const ShimmerEffect = () => (
  <div className="animate-pulse grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 w-full max-w-6xl mx-auto">
    {[1, 2, 3, 4].map((i) => (
      <div key={i} className="bg-white rounded-xl shadow-lg overflow-hidden">
        <Skeleton className="h-40 md:h-52 lg:h-60 w-full" />
        <div className="p-3">
          <Skeleton className="h-4 w-3/4 mb-2" />
          <Skeleton className="h-3 w-1/4 mb-1" />
          <Skeleton className="h-3 w-full" />
        </div>
      </div>
    ))}
  </div>
);

// Enhanced product card with additional features and improved UI
const ProductCard = ({ product, index, activeSlide, theme = "blue" }) => {
  const { name, image } = product;
  const {
    price,
    originalPrice,
    description,
    rating,
    stock,
    isNew,
    discount,
  } = productData[name] || {
    price: "₹0",
    originalPrice: "₹0",
    description: "Product description",
    rating: 0,
    stock: "Out of Stock",
    isNew: false,
    discount: "0%",
  };

  const themeStyles = getThemeStyles(theme);
  const [isFavorite, setIsFavorite] = useState(false);
  const [isQuickView, setIsQuickView] = useState(false);

 

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: 0.05 * index }}
      className="relative group overflow-hidden rounded-xl shadow-lg bg-white"
    >
    
      {/* Favorite Button */}
      <button
        onClick={(e) => {
          e.stopPropagation();
          setIsFavorite(!isFavorite);
        }}
        className="absolute top-2 right-2 z-20 bg-white/70 backdrop-blur-sm p-1.5 rounded-full shadow-sm transition-all duration-200 hover:bg-white"
      >
        <Heart
          size={16}
          className={isFavorite ? "fill-red-500 text-red-500" : "text-gray-500"}
        />
      </button>

      {/* Product Image Container */}
      <div className="relative h-36 sm:h-44 md:h-52 lg:h-60 overflow-hidden bg-gray-50">
        <LazyImage
          src={image}
          alt={name}
          className="w-full h-full object-contain p-2"
        />

        {/* Quick View Overlay */}
        <motion.div
          initial={{ opacity: 0 }}
          whileHover={{ opacity: 1 }}
          className="absolute inset-0 bg-black/30 backdrop-blur-sm flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        >
          <div className="flex flex-col gap-2">
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger asChild>
                  <Button
                    onClick={() => setIsQuickView(true)}
                    size="sm"
                    className={`${themeStyles.primary} rounded-full px-4 text-xs sm:text-sm`}
                  >
                    <Eye size={14} className="mr-1" />
                    Quick View
                  </Button>
                </TooltipTrigger>
                <TooltipContent>
                  <p>Preview product details</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>

            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger asChild>
                  <Button
                    size="sm"
                    variant="outline"
                    className="bg-white text-gray-800 hover:bg-gray-100 border-gray-200 rounded-full px-4 text-xs sm:text-sm"
                  >
                    <ShoppingBag size={14} className="mr-1" />
                    Add to Cart
                  </Button>
                </TooltipTrigger>
                <TooltipContent>
                  <p>Add to your shopping cart</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
          </div>
        </motion.div>
      </div>

      {/* Product Info */}
      <div className="p-3">
        <h3 className="font-medium text-gray-800 text-sm md:text-base truncate">
          {name}
        </h3>
        
      
        
    
        
        <p className="text-xs text-gray-500 mt-1 line-clamp-2">{description}</p>
        
    
      </div>

      {/* Mobile Touch Indicator */}
      <div className="absolute inset-x-0 bottom-0 h-1 bg-gradient-to-r from-transparent via-gray-200 to-transparent opacity-0 group-hover:opacity-100 sm:hidden"></div>
    </motion.div>
  );
};

// Enhanced Premium Slider Component
const PremiumSlider = () => {
  const [activeSlide, setActiveSlide] = useState(0);
  const [direction, setDirection] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [touchStart, setTouchStart] = useState(0);
  const [isGrabbing, setIsGrabbing] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [hasInteracted, setHasInteracted] = useState(false);
  const [swipeDistance, setSwipeDistance] = useState(0);
  const sliderRef = useRef(null);

  // Custom hook for media queries
  const useMediaQuery = (query) => {
    const [matches, setMatches] = useState(false);

    useEffect(() => {
      const media = window.matchMedia(query);
      if (media.matches !== matches) {
        setMatches(media.matches);
      }

      const listener = () => setMatches(media.matches);

      // Use the correct event listener method based on browser support
      if (media.addEventListener) {
        media.addEventListener("change", listener);
        return () => media.removeEventListener("change", listener);
      } else {
        // Fallback for older browsers
        media.addListener(listener);
        return () => media.removeListener(listener);
      }
    }, [matches, query]);

    return matches;
  };

  const isMobile = useMediaQuery("(max-width: 640px)");
  const isTablet = useMediaQuery("(max-width: 1024px)");

  // Simulate loading for demo purposes
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  // Navigate to specific slide
  const goToSlide = useCallback(
    (index) => {
      if (index === activeSlide) return;
      setHasInteracted(true);
      setDirection(index > activeSlide ? 1 : -1);
      setActiveSlide(index);
    },
    [activeSlide]
  );

  // Handle next/prev navigation
  const navigate = useCallback((dir) => {
    setHasInteracted(true);
    setDirection(dir);
    setActiveSlide((prev) => {
      if (dir === 1) {
        return prev === sliderData.length - 1 ? 0 : prev + 1;
      }
      return prev === 0 ? sliderData.length - 1 : prev - 1;
    });
  }, []);

  // Autoplay functionality with pause on interaction
  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      if (!hasInteracted) {
        navigate(1);
      }
    }, 8000);

    return () => clearInterval(interval);
  }, [isAutoPlaying, navigate, hasInteracted]);

  // Reset hasInteracted after some inactivity
  useEffect(() => {
    if (!hasInteracted) return;

    const timer = setTimeout(() => {
      setHasInteracted(false);
    }, 30000); // Reset after 30 seconds of inactivity

    return () => clearTimeout(timer);
  }, [hasInteracted]);

  // Touch handlers for mobile swipe with improved physics
  const handleTouchStart = (e) => {
    setTouchStart(e.touches[0].clientX);
    setIsGrabbing(true);
    setSwipeDistance(0);
    setHasInteracted(true);
  };

  const handleTouchMove = (e) => {
    if (!isGrabbing) return;
    const currentTouch = e.touches[0].clientX;
    const diff = touchStart - currentTouch;
    setSwipeDistance(diff);
  };

  const handleTouchEnd = () => {
    setIsGrabbing(false);

    // If swipe distance is significant, change slide
    if (Math.abs(swipeDistance) > 50) {
      navigate(swipeDistance > 0 ? 1 : -1);
    }

    // Reset swipe distance
    setSwipeDistance(0);
  };

  // Animation variants with improved physics
  const slideVariants = {
    enter: (direction) => ({
      x: direction > 0 ? "100%" : "-100%",
      opacity: 0,
      scale: 1.05,
    }),
    center: {
      x: 0,
      opacity: 1,
      scale: 1,
      transition: {
        x: { type: "spring", stiffness: 300, damping: 30 },
        opacity: { duration: 0.4 },
        scale: { duration: 0.4 },
      },
    },
    exit: (direction) => ({
      x: direction < 0 ? "100%" : "-100%",
      opacity: 0,
      scale: 0.95,
      transition: {
        x: { type: "spring", stiffness: 300, damping: 30 },
        opacity: { duration: 0.4 },
        scale: { duration: 0.4 },
      },
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

  // Get current theme styles
  const themeStyles = getThemeStyles(
    sliderData[activeSlide]?.themeColor || "blue"
  );

  return (
    <div
      ref={sliderRef}
      className={`relative overflow-hidden w-full h-[500px] sm:h-[600px] md:h-[700px] lg:h-[680px] ${
        isGrabbing ? "cursor-grabbing" : "cursor-default"
      }`}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
      role="region"
      aria-label="Product carousel"
    >
      {/* Loading State */}
      {isLoading && (
        <div className="absolute inset-0 flex flex-col items-center justify-center bg-gray-100 z-50">
          <ShimmerEffect />
        </div>
      )}

      {/* Background Slides */}
      <AnimatePresence initial={false} custom={direction} mode="wait">
        <motion.div
          key={activeSlide}
          custom={direction}
          variants={slideVariants}
          initial="enter"
          animate="center"
          exit="exit"
          className="absolute inset-0 w-full h-full"
        >
          {/* Background Image with Enhanced Styling */}
          <div className="absolute inset-0 overflow-hidden">
            <LazyImage
              src={sliderData[activeSlide].backgroundImage}
              alt={`${sliderData[activeSlide].title} background`}
              className="w-full h-full object-cover scale-105 filter blur-[2px] sm:blur-0"
            />

            <div className="absolute inset-0 bg-gradient-to-br from-black/70 to-black/40"></div>

            {/* Colored overlay with custom gradient based on theme */}
            <div
              className={`absolute inset-0 bg-gradient-to-br ${sliderData[activeSlide].accentColor} mix-blend-multiply opacity-40`}
            ></div>

            {/* Decorative elements */}
            <div className="absolute inset-0 overflow-hidden">
              <div className="absolute -top-40 -left-40 w-96 h-96 rounded-full bg-white opacity-5"></div>
              <div className="absolute -bottom-20 -right-20 w-80 h-80 rounded-full bg-white opacity-5"></div>
              <div className="absolute top-1/4 right-1/4 w-32 h-32 rounded-full bg-white opacity-5"></div>
            </div>
          </div>

          {/* Content Container with Improved Layout */}
          <div className="relative z-10 h-full flex flex-col pt-6 sm:pt-90  md:pt-12 pb-12 px-4 md:px-8 max-w-7xl mx-auto my-15 sm:my-12">
            {/* Title Section with Enhanced Typography */}
            <div className="text-center text-white mb-4 sm:mb-6 md:mb-10">
              <motion.span
                className={`inline-block px-3 py-1 rounded-full text-xs font-medium ${themeStyles.accent} mb-2 sm:mb-3`}
                custom={0.1}
                initial="hidden"
                animate="visible"
                variants={textVariants}
              >
                {sliderData[activeSlide].subtitle}
              </motion.span>

              <motion.h2
                className="text-xl sm:text-2xl md:text-4xl lg:text-5xl font-bold mb-2 md:mb-4 tracking-tight  text-white"
                custom={0.2}
                initial="hidden"
                animate="visible"
                variants={textVariants}
              >
                {sliderData[activeSlide].title}
              </motion.h2>

              <motion.p
                className="text-sm md:text-base text-white/90 max-w-2xl mx-auto sm:my-12 "
                custom={0.3}
                initial="hidden"
                animate="visible"
                variants={textVariants}
              >
                {sliderData[activeSlide].description}
              </motion.p>

              <motion.button
                className={`mt-4 px-6 py-2 rounded-full text-sm font-medium ${themeStyles.primary} shadow-lg hover:shadow-xl transition-all duration-300`}
                custom={0.4}
                initial="hidden"
                animate="visible"
                variants={textVariants}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
              >
                {sliderData[activeSlide].cta}
              </motion.button>

              <motion.div
                className={`h-1 w-16 sm:w-24 mx-auto mt-4 rounded-full ${themeStyles.progress}`}
                initial={{ width: 0, opacity: 0 }}
                animate={{ width: isMobile ? 64 : 96, opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.4 }}
              ></motion.div>
            </div>

            {/* Products Grid Section with Responsive Layout */}
            <div className="flex-1 flex items-center justify-center pb-4 px-1 sm:px-4">
              <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 md:gap-6 w-full max-w-6xl mx-auto">
                {sliderData[activeSlide].products.map((product, index) => (
                  <ProductCard
                    key={`${sliderData[activeSlide].id}-${index}`}
                    product={product}
                    index={index}
                    activeSlide={activeSlide}
                    theme={sliderData[activeSlide].themeColor}
                  />
                ))}
              </div>
            </div>

            {/* Enhanced Bottom Controls and Indicators */}
            <div className="mt-auto flex justify-between items-center">
              {/* Left slide details */}
              <div className="hidden md:flex items-center">
                <button
                  onClick={() => setIsAutoPlaying(!isAutoPlaying)}
                  className={`mr-2 p-1.5 rounded-full ${themeStyles.secondary} transition-all duration-300`}
                  aria-label={
                    isAutoPlaying ? "Pause autoplay" : "Start autoplay"
                  }
                >
                  {isAutoPlaying ? (
                    <PauseCircle size={18} />
                  ) : (
                    <PlayCircle size={18} />
                  )}
                </button>
                <p className="text-white/90 text-sm font-medium">
                  {activeSlide + 1}/{sliderData.length}
                </p>
              </div>

              {/* Center indicators - Enhanced for touch */}
              <div className="flex gap-2 justify-center mx-auto">
                {sliderData.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => goToSlide(index)}
                    className={`h-2 rounded-full transition-all duration-300 ${
                      activeSlide === index
                        ? `w-8 ${themeStyles.indicator}`
                        : `w-2 bg-white/40 hover:bg-white/60`
                    }`}
                    aria-label={`Go to slide ${index + 1}`}
                    aria-current={activeSlide === index ? "true" : "false"}
                  />
                ))}
              </div>

              {/* Right share button and navigation arrows */}
              <div className="flex items-center gap-2">
                <button
                  className="hidden md:flex p-1.5 rounded-full bg-white/20 hover:bg-white/30 text-white transition-all duration-300"
                  aria-label="Share this collection"
                >
                  <Share2 size={18} />
                </button>

                <div className="flex gap-1">
                  <button
                    onClick={() => navigate(-1)}
                    className={`p-1.5 rounded-full ${themeStyles.navButton} transition-all duration-300`}
                    aria-label="Previous slide"
                  >
                    <ChevronLeft size={20} />
                  </button>
                  <button
                    onClick={() => navigate(1)}
                    className={`p-1.5 rounded-full ${themeStyles.navButton} transition-all duration-300`}
                    aria-label="Next slide"
                  >
                    <ChevronRight size={20} />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Swipe Indicator for Mobile */}
      {isMobile && (
        <div className="absolute bottom-16 left-1/2 -translate-x-1/2 text-white/80 text-xs flex items-center gap-1 pointer-events-none">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: hasInteracted ? 0 : 1 }}
            transition={{ delay: 2 }}
            className="flex items-center gap-1"
          >
            <ChevronLeft size={14} />
            <span>Swipe</span>
            <ChevronRight size={14} />
          </motion.div>
        </div>
      )}

      {/* Custom Sidebar Navigation for Desktop */}
      <div className="hidden lg:block absolute right-4 top-1/2 -translate-y-1/2 z-20">
        <div className="flex flex-col gap-2">
          {sliderData.map((slide, index) => {
            const isActive = activeSlide === index;
            return (
              <TooltipProvider key={index}>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <button
                      onClick={() => goToSlide(index)}
                      className={`w-2 h-12 rounded-full transition-all duration-300 ${
                        isActive
                          ? `${themeStyles.indicator}`
                          : "bg-white/30 hover:bg-white/50"
                      }`}
                      aria-label={`Go to ${slide.title} section`}
                      aria-current={isActive ? "true" : "false"}
                    />
                  </TooltipTrigger>
                  <TooltipContent side="left">
                    <p>{slide.title}</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default PremiumSlider;