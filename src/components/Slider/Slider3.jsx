import { useState, useEffect } from "react";
// Product images
import BasinChickDrinker from "../Pages/fwdkrishnatradersproductsmain/BasinChickDrinker2.5.jpg";
import flamegun from "../Pages/fwdkrishnatradersproductsmain/flamegun4way.jpg";
import jumboautomaticdrinkerclassic from "../Pages/fwdkrishnatradersproductsmain/jumboautomaticdrinkerclassic.jpg";
import SprinklerSmall from "../Pages/fwdkrishnatradersproductsmain/SprinklerSmall.jpg";
import chickfeeder3kg from "../Pages/fwdkrishnatradersproducts/chickfeeder3kg.jpg";
import chickcrate from "../Pages/fwdkrishnatradersproducts/chickcrate.jpg";
import nippledrinker from "../Pages/fwdkrishnatradersproducts/nippledrinker.jpg";
import vaccinator from "../Pages/fwdkrishnatradersproducts/vaccinator.jpg";

// Background images - Replace these with your actual background image paths
// import bgPoultry from "../assets/backgrounds/poultry-farm-bg.jpg";
// import bgFeeders from "../assets/backgrounds/feeders-bg.jpg";
// import bgEquipment from "../assets/backgrounds/equipment-bg.jpg";
import slider1 from "../Slider/sloider1.png";
import slider2 from "../Slider/slider2.png";
import slider3 from "../Slider/slider4.png";
import slider5 from "../Slider/slider5.png";
import slider6 from "../Slider/slider6.png";


const ProductAutoSlider = () => {
  // Product data with images, titles, and descriptions
  const slides = [
    {
      id: 1,
      title: "POULTRY EQUIPMENT",
      subtitle: "REPUTABLE MANUFACTURERS, EXPORTERS, DEALERS & SUPPLIERS OF POULTRY EQUIPMENT",
      products: [
        { 
          url: BasinChickDrinker, 
          name: "GROWER DRINKER (8 LTR)"
        },
        { 
          url: flamegun, 
          name: "CHICK DRINKER (3 LTR)"
        },
        { 
          url: jumboautomaticdrinkerclassic, 
          name: "TURBO FEEDER"
        },
        { 
          url: SprinklerSmall, 
          name: "ROUND FEEDER (10KG)"
        }
      ],
      bgImage: slider1
    },
    {
      id: 2,
      title: "FEEDERS & DRINKERS",
      subtitle: "QUALITY POULTRY FEEDING & DRINKING SOLUTIONS",
      products: [
        { 
          url: chickfeeder3kg, 
          name: "CHICK FEEDER (3KG)"
        },
        { 
          url: nippledrinker, 
          name: "NIPPLE DRINKER"
        },
        { 
          url: jumboautomaticdrinkerclassic, 
          name: "AUTOMATIC DRINKER"
        },
        { 
          url: chickcrate, 
          name: "CHICK CRATE"
        }
      ],
      bgImage: slider2
    },
    {
      id: 3,
      title: "EQUIPMENT & TOOLS",
      subtitle: "SPECIALIZED TOOLS FOR POULTRY MANAGEMENT",
      products: [
        { 
          url: vaccinator, 
          name: "VACCINATOR"
        },
        { 
          url: flamegun, 
          name: "FLAME GUN"
        },
        { 
          url: chickcrate, 
          name: "TRANSPORT CRATE"
        },
        { 
          url: SprinklerSmall, 
          name: "SPRINKLER"
        }
      ],
      bgImage: slider3
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const [touchStartX, setTouchStartX] = useState(0);
  const [touchEndX, setTouchEndX] = useState(0);

  // Function for handling touch swipe navigation
  const handleTouchStart = (e) => {
    setTouchStartX(e.touches[0].clientX);
  };

  const handleTouchMove = (e) => {
    setTouchEndX(e.touches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (touchStartX - touchEndX > 100) {
      // Swipe left - go to next slide
      nextSlide();
    } else if (touchEndX - touchStartX > 100) {
      // Swipe right - go to previous slide
      prevSlide();
    }
  };

  const goToSlide = (index) => {
    if (!isTransitioning && index !== currentIndex) {
      setIsTransitioning(true);
      setCurrentIndex(index);
      setTimeout(() => setIsTransitioning(false), 750);
    }
  };

  const nextSlide = () => {
    goToSlide((currentIndex + 1) % slides.length);
  };

  const prevSlide = () => {
    goToSlide(currentIndex === 0 ? slides.length - 1 : currentIndex - 1);
  };

  useEffect(() => {
    if (!isPaused) {
      const timer = setInterval(nextSlide, 5000);
      return () => clearInterval(timer);
    }
  }, [currentIndex, isPaused]);

  const handleKeyDown = (e) => {
    if (e.key === "ArrowLeft") prevSlide();
    if (e.key === "ArrowRight") nextSlide();
  };

  return (
    <div 
      className="w-full relative" 
      onKeyDown={handleKeyDown}
      tabIndex={0}
      role="region"
      aria-label="Product Showcase Slider"
    >
      {/* Main Slider */}
      <div 
        className="w-full overflow-hidden"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        <div className="relative w-full h-auto min-h-[550px] sm:min-h-[600px]">
          {slides.map((slide, slideIndex) => (
            <div
              key={slide.id}
              className={`absolute inset-0 w-full h-full transition-all duration-700 ease-in-out transform ${
                slideIndex === currentIndex
                  ? "opacity-100 translate-x-0"
                  : slideIndex < currentIndex
                  ? "opacity-0 -translate-x-full"
                  : "opacity-0 translate-x-full"
              }`}
              aria-hidden={slideIndex !== currentIndex}
            >
              {/* Background Image with Overlay */}
              <div className="absolute inset-0 w-full h-full">
                <img 
                  src={slide.bgImage} 
                  alt="" 
                  className="w-full h-full object-cover"
                  aria-hidden="true"
                />
                {/* Semi-transparent overlay to ensure text readability */}
                <div className="absolute inset-0 bg-white/20"></div>
              </div>
              
              <div className="relative w-full h-full flex flex-col z-10">
                {/* Slide Header */}
                <div className="text-center py-4 px-3 sm:py-6 sm:px-4">
                  <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-red-600 mb-1 sm:mb-2">{slide.title}</h2>
                  <p className="text-xs sm:text-sm md:text-base text-gray-700 max-w-3xl mx-auto px-2">{slide.subtitle}</p>
                </div>
                
                {/* Products Container */}
                <div className="flex-1 flex items-center justify-center px-2 sm:px-4 md:px-6 pb-12">
                  <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-2 sm:gap-3 md:gap-4 w-full max-w-6xl">
                    {slide.products.map((product, index) => (
                      <div key={index} className="flex flex-col items-center">
                        <div className="bg-white rounded-lg shadow-lg p-2 sm:p-3 md:p-4 mb-2 sm:mb-3 w-full h-32 sm:h-40 md:h-48 flex items-center justify-center hover:shadow-xl transition-shadow duration-300">
                          <img
                            src={product.url}
                            alt={product.name}
                            className="max-h-full max-w-full object-contain transition-transform duration-300 hover:scale-110"
                          />
                        </div>
                        <h3 className="text-xs sm:text-sm font-medium text-center px-1">{product.name}</h3>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}

          {/* Navigation Arrows - Hidden on smallest screens */}
          <button
            onClick={prevSlide}
            className="hidden sm:flex absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 bg-white/70 hover:bg-white text-gray-800 p-2 sm:p-3 rounded-full shadow-lg z-10 items-center justify-center"
            disabled={isTransitioning}
            aria-label="Previous slide"
          >
            <svg className="w-4 h-4 sm:w-6 sm:h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <button
            onClick={nextSlide}
            className="hidden sm:flex absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 bg-white/70 hover:bg-white text-gray-800 p-2 sm:p-3 rounded-full shadow-lg z-10 items-center justify-center"
            disabled={isTransitioning}
            aria-label="Next slide"
          >
            <svg className="w-4 h-4 sm:w-6 sm:h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>

          {/* Navigation Dots */}
          <div className="absolute bottom-2 sm:bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-1 sm:space-x-2 z-10">
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-2 h-2 sm:w-3 sm:h-3 rounded-full transition-all duration-300 ${
                  currentIndex === index ? "bg-red-600 scale-125" : "bg-gray-300 hover:bg-gray-400"
                }`}
                aria-label={`Go to slide ${index + 1}`}
                aria-current={currentIndex === index ? "true" : "false"}
              />
            ))}
          </div>

          {/* Progress Bar */}
          <div className="absolute bottom-0 left-0 w-full h-1 bg-gray-200">
            <div
              className="h-full bg-red-600 transition-all duration-[5000ms] ease-linear"
              style={{
                width: isPaused ? "0%" : "100%",
                transitionProperty: "width",
              }}
            />
          </div>
        </div>
      </div>

      {/* Mobile Swipe Indicator - Only visible on small screens */}
      <div className="block sm:hidden text-center text-xs text-gray-500 italic mt-1 mb-2">
        Swipe left/right to navigate
      </div>
    </div>
  );
};

export default ProductAutoSlider;