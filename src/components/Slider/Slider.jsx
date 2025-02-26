import React, { useState, useEffect, useCallback } from "react";
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
  Lazy,
} from "swiper/modules";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronRight, ChevronLeft, ExternalLink, Info } from "lucide-react";

// Import your images here - consider using dynamic imports or webpack optimization if possible
import BasinChickDrinker from "../Pages/fwdkrishnatradersproductsmain/BasinChickDrinker2.5.jpg";
import flamegun from "../Pages/fwdkrishnatradersproductsmain/flamegun4way.jpg";
import jumboautomaticdrinker from "../Pages/fwdkrishnatradersproductsmain/jumboautomaticdrinkerclassic.jpg";
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
      {
        image: BasinChickDrinker,
        name: "Basin Chick Drinker",
        price: "₹650",
        description: "High-quality durable plastic basin for chicks",
      },
      {
        image: flamegun,
        name: "Flame Gun 4-Way",
        price: "₹1200",
        description: "Versatile 4-way flame gun for farm sanitation",
      },
      {
        image: jumboautomaticdrinker,
        name: "Jumbo Automatic Drinker",
        price: "₹950",
        description: "Large capacity automatic water drinker",
      },
      {
        image: SprinklerSmall,
        name: "Small Sprinkler",
        price: "₹450",
        description: "Efficient water distribution system",
      },
    ],
  },
  {
    image: slider2,
    title: "Quality Products Farm Equipments",
    subtitle: "Using state-of-the-art equipment for the best results",
    description: "Providing advanced solutions for modern poultry farming",
    products: [
      {
        image: chickfeeder3kg,
        name: "Chick Feeder 3kg",
        price: "₹520",
        description: "Durable 3kg capacity feeder for chicks",
      },
      {
        image: chickcrate,
        name: "Chick Crate",
        price: "₹850",
        description: "Spacious and ventilated transportation crate",
      },
      {
        image: nippledrinker,
        name: "Nipple Drinker",
        price: "₹380",
        description: "Leak-proof precision nipple drinking system",
      },
      {
        image: vaccinator,
        name: "Vaccinator",
        price: "₹720",
        description: "Precise vaccination tool for poultry health",
      },
    ],
  },
  {
    image: slider6,
    title: "Sustainable Practices",
    subtitle: "Committed to environmental sustainability and animal welfare",
    description:
      "Balancing productivity with eco-friendly poultry farming solutions",
    products: [
      {
        image: BasinChickDrinker,
        name: "Basin Chick Drinker",
        price: "₹650",
        description: "High-quality durable plastic basin for chicks",
      },
      {
        image: nippledrinker,
        name: "Nipple Drinker",
        price: "₹380",
        description: "Leak-proof precision nipple drinking system",
      },
      {
        image: SprinklerSmall,
        name: "Small Sprinkler",
        price: "₹450",
        description: "Efficient water distribution system",
      },
      {
        image: flamegun,
        name: "Flame Gun 4-Way",
        price: "₹1200",
        description: "Versatile 4-way flame gun for farm sanitation",
      },
    ],
  },
];

const EnhancedSlider = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [swiperInstance, setSwiperInstance] = useState(null);
  const [isMobile, setIsMobile] = useState(true);
  const [activeProductIndex, setActiveProductIndex] = useState(null);
  const [showAllProducts, setShowAllProducts] = useState(false);
  const [imagesLoaded, setImagesLoaded] = useState({});

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

  // Preload critical images for better mobile performance
  useEffect(() => {
    // Preload slider background images first
    const criticalImages = [slider5, slider2, slider6];

    const preloadImage = (src) => {
      return new Promise((resolve) => {
        const img = new Image();
        img.src = src;
        img.onload = () => {
          setImagesLoaded((prev) => ({ ...prev, [src]: true }));
          resolve();
        };
        img.onerror = () => {
          console.error(`Failed to load image: ${src}`);
          resolve();
        };
      });
    };

    Promise.all(criticalImages.map(preloadImage)).then(() => {
      // Preload first set of product images after slider images are loaded
      const firstSlideProducts = slides[0].products.map(
        (product) => product.image
      );
      return Promise.all(firstSlideProducts.map(preloadImage));
    });
  }, []);

  const handleSlideChange = useCallback((swiper) => {
    setActiveIndex(swiper.realIndex);
    setActiveProductIndex(null);
    setShowAllProducts(false);
  }, []);

  const toggleProductDetails = useCallback((index) => {
    setActiveProductIndex((prev) => (prev === index ? null : index));
  }, []);

  const toggleShowAllProducts = useCallback(() => {
    setShowAllProducts((prev) => !prev);
  }, []);

  const ProductCard = React.memo(({ product, index, isActive }) => {
    const [imageLoaded, setImageLoaded] = useState(false);
    const [imageError, setImageError] = useState(false);

    const handleImageLoad = () => {
      setImageLoaded(true);
    };

    const handleImageError = () => {
      setImageError(true);
      console.error(`Failed to load image for ${product.name}`);
    };

    return (
      <motion.div
        initial={{ scale: 0.95, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.3, delay: 0.05 + index * 0.05 }}
        className={`bg-white/15 backdrop-blur-md rounded-lg overflow-hidden shadow-xl border border-white/20 hover:border-yellow-400 transition-all duration-300 ${
          isActive ? "border-yellow-400 ring-2 ring-yellow-400/50" : ""
        }`}
        onClick={() => toggleProductDetails(index)}
      >
        <div className="relative h-24 sm:h-28 md:h-32 overflow-hidden bg-black/20">
          {!imageLoaded && !imageError && (
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-6 h-6 border-2 border-yellow-300 border-t-transparent rounded-full animate-spin"></div>
            </div>
          )}

          {imageError ? (
            <div className="absolute inset-0 flex items-center justify-center text-yellow-400 text-xs text-center p-2">
              {product.name}
            </div>
          ) : (
            <img
              src={product.image}
              alt={product.name}
              className={`w-full h-full object-contain object-center transition-transform duration-500 group-hover:scale-105 ${
                imageLoaded ? "opacity-100" : "opacity-0"
              }`}
              onLoad={handleImageLoad}
              onError={handleImageError}
              loading="lazy"
            />
          )}

          {!isActive && (
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          )}
        </div>
        <div className="p-2 sm:p-3">
          <h3
            className={`font-medium text-sm sm:text-base truncate ${
              isActive ? "text-yellow-400" : "text-white"
            }`}
          >
            {product.name}
          </h3>
          <p className="text-yellow-300 text-xs sm:text-sm font-semibold mt-1">
            {product.price}
          </p>
          {isActive && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              transition={{ duration: 0.3 }}
              className="mt-2"
            >
              <p className="text-white/90 text-xs sm:text-sm">
                {product.description}
              </p>
              <button className="mt-2 bg-yellow-500 hover:bg-yellow-600 text-black text-xs font-medium py-1 px-3 rounded-full flex items-center justify-center gap-1 w-full">
                View Details <ExternalLink size={12} />
              </button>
            </motion.div>
          )}
        </div>
      </motion.div>
    );
  });

  // Mobile product layout component - memoized
  const MobileProductLayout = React.memo(({ products }) => {
    const visibleProducts = showAllProducts ? products : products.slice(0, 2);

    return (
      <div className="w-full">
        <div className="grid grid-cols-2 gap-3">
          {visibleProducts.map((product, prodIndex) => (
            <ProductCard
              key={prodIndex}
              product={product}
              index={prodIndex}
              isActive={activeProductIndex === prodIndex}
            />
          ))}
        </div>
        {products.length > 2 && (
          <motion.button
            initial={{ y: 10, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.3, delay: 0.4 }}
            onClick={toggleShowAllProducts}
            className="w-full mt-3 py-2 bg-white/10 hover:bg-white/20 text-white text-sm rounded-md backdrop-blur-sm border border-white/10 transition-all flex items-center justify-center"
          >
            {showAllProducts
              ? "Show Less"
              : `Show All ${products.length} Products`}
          </motion.button>
        )}
      </div>
    );
  });

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
          Lazy,
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
        lazy={{
          loadPrevNext: true,
          loadPrevNextAmount: 2,
          loadOnTransitionStart: true,
        }}
        className="h-screen md:h-[100vh]" // More reliable height
        onSlideChange={handleSlideChange}
        onSwiper={setSwiperInstance}
        preloadImages={false}
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index} className="bg-black">
            <div className="relative flex flex-col h-full w-full overflow-hidden">
              {/* Parallax Background Image with overlay */}
              <div className="absolute inset-0 w-full h-full bg-black">
                {/* Loading placeholder */}
                {!imagesLoaded[slide.image] && (
                  <div className="absolute inset-0 flex items-center justify-center bg-black">
                    <div className="w-10 h-10 border-4 border-yellow-400 border-t-transparent rounded-full animate-spin"></div>
                  </div>
                )}

                <img
                  src={slide.image}
                  alt={`Krishna Poultry - ${slide.title}`}
                  className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ${
                    imagesLoaded[slide.image] ? "opacity-100" : "opacity-0"
                  }`}
                  loading={index === 0 ? "eager" : "lazy"}
                />
                <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/30 to-black/20"></div>
              </div>

              {/* Content Container */}
              <div className="relative z-10 flex flex-col h-full pt-10 pb-16 px-4 max-w-6xl mx-auto w-full">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={`slide-${index}-${activeIndex}`}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: activeIndex === index ? 1 : 0 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.5 }}
                    className="flex flex-col h-full"
                  >
                    {/* Header Section */}
                    <div className="mb-2 md:mb-4 flex-shrink-0 text-center mx-auto max-w-xl mt-8 md:mt-16">
                      <motion.div
                        initial={{ y: 20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                        className="flex flex-col items-center"
                      >
                        <h1 className="text-xl md:text-4xl sm:text-3xl font-bold bg-gradient-to-r from-yellow-400 via-amber-300 to-yellow-200 bg-clip-text text-transparent pb-1">
                          {slide.title}
                        </h1>
                        <motion.div
                          initial={{ width: "0%" }}
                          animate={{ width: "80%" }}
                          transition={{ duration: 0.8, delay: 0.3 }}
                          className="h-1 bg-gradient-to-r from-yellow-500 to-amber-300 rounded-full mt-2 max-w-xs"
                        />
                      </motion.div>

                      <motion.h2
                        initial={{ y: 10, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="text-xs sm:text-base text-yellow-100 font-medium tracking-wider uppercase mt-2 md:mt-3"
                      >
                        {slide.subtitle}
                      </motion.h2>

                      <motion.p
                        initial={{ y: 10, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ duration: 0.5, delay: 0.3 }}
                        className="mt-2 md:mt-3 text-xs sm:text-base text-white/90 font-light max-w-md mx-auto"
                      >
                        {slide.description}
                      </motion.p>
                    </div>

                    {/* Product Section */}
                    <div className="flex-grow flex flex-col justify-center overflow-y-auto py-2 scrollbar-hide max-w-4xl mx-auto w-full">
                      <motion.div
                        initial={{ y: 20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ duration: 0.5, delay: 0.3 }}
                        className="w-full"
                      >
                        <h3 className="text-white font-medium text-xs md:text-base mb-2 md:mb-3 flex items-center justify-center">
                          <span className="mr-2">Featured Products</span>
                          <Info size={14} className="text-yellow-400" />
                        </h3>

                        {isMobile ? (
                          <MobileProductLayout products={slide.products} />
                        ) : (
                          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 md:gap-4">
                            {slide.products.map((product, prodIndex) => (
                              <ProductCard
                                key={prodIndex}
                                product={product}
                                index={prodIndex}
                                isActive={activeProductIndex === prodIndex}
                              />
                            ))}
                          </div>
                        )}
                      </motion.div>
                    </div>
                  </motion.div>
                </AnimatePresence>
              </div>
            </div>
          </SwiperSlide>
        ))}

        {/* Custom Navigation Buttons - Improved for mobile */}
        <div className="custom-navigation absolute inset-x-0 top-1/2 z-20 pointer-events-none transform -translate-y-1/2">
          <div className="h-full flex items-center justify-between px-2">
            <button
              onClick={() => swiperInstance?.slidePrev()}
              className="swiper-button-prev flex items-center justify-center w-10 h-10 rounded-full bg-black/60 backdrop-blur-md border border-white/20 text-white hover:bg-yellow-500/70 hover:text-black transition-all duration-300 pointer-events-auto touch-manipulation"
              aria-label="Previous slide"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={() => swiperInstance?.slideNext()}
              className="swiper-button-next flex items-center justify-center w-10 h-10 rounded-full bg-black/60 backdrop-blur-md border border-white/20 text-white hover:bg-yellow-500/70 hover:text-black transition-all duration-300 pointer-events-auto touch-manipulation"
              aria-label="Next slide"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Enhanced Pagination - Moved up for better mobile accessibility */}
        <div className="swiper-pagination !bottom-6"></div>
      </Swiper>

      {/* Custom Progress Bar */}
      <div className="absolute bottom-0 left-0 w-full h-1 z-20">
        <motion.div
          key={activeIndex}
          initial={{ width: "0%" }}
          animate={{ width: "100%" }}
          transition={{
            duration: 6,
            ease: "linear",
            repeat: 0,
          }}
          className="h-full bg-gradient-to-r from-yellow-500 via-amber-400 to-yellow-300"
        ></motion.div>
      </div>

      <style jsx>{`
        .swiper-pagination-bullet {
          width: 8px;
          height: 8px;
          background-color: rgba(255, 255, 255, 0.3);
          border: 1px solid rgba(255, 255, 255, 0.5);
          opacity: 1;
          transition: all 0.4s cubic-bezier(0.2, 0.8, 0.2, 1);
          margin: 0 5px;
        }

        @media (min-width: 640px) {
          .swiper-pagination-bullet {
            width: 10px;
            height: 10px;
            margin: 0 6px;
          }
        }

        .swiper-pagination-bullet-active {
          background-color: #eab308;
          transform: scale(1.3);
          box-shadow: 0 0 10px rgba(234, 179, 8, 0.6);
        }

        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }

        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </section>
  );
};

export default React.memo(EnhancedSlider);
