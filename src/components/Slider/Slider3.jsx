import { useState, useEffect } from "react";
import slider1 from "../Slider/slider1.png"
import slider2 from "../Slider/slider2.png"


const AutoSlider = () => {
  const slides = [
    { url: slider1, title: "" },
    { url: slider2, title: "" },
   
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [isPaused, setIsPaused] = useState(false);

  const goToSlide = (index) => {
    if (!isTransitioning && index !== currentIndex) {
      setIsTransitioning(true);
      setCurrentIndex(index);
      // Reset transition state after animation completes
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
      className="w-full flex items-center justify-center mx-auto"
      onKeyDown={handleKeyDown}
      tabIndex={0}
      role="region"
      aria-label="Image Slider"
    >
      <div className="w-full max-w-11xl">
        <div
          className="relative h-[250px] sm:h-[400px] md:h-[500px] lg:h-[700px] overflow-hidden rounded-lg shadow-2xl"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          {/* Slides Container */}
          {slides.map((slide, index) => (
            <div
              key={index}
              className={`absolute inset-0 w-full h-full transition-all duration-700 ease-in-out transform
                ${
                  index === currentIndex
                    ? "opacity-100 translate-x-0 scale-100"
                    : index < currentIndex
                    ? "opacity-0 -translate-x-full scale-95"
                    : "opacity-0 translate-x-full scale-95"
                }`}
              aria-hidden={currentIndex !== index}
            >
              <img
                src={slide.url}
                className="w-full h-full object-fit-contain"
                alt={slide.title}
              />
              {/* Caption overlay */}
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-4">
                <h3 className="text-white text-xl font-semibold">
                  {slide.title}
                </h3>
              </div>
            </div>
          ))}

          {/* Navigation Arrows */}
          <button
            onClick={prevSlide}
            className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/30 hover:bg-white text-gray-800 p-3 rounded-full shadow-lg transition-all duration-300 transform hover:scale-110 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 z-10"
            disabled={isTransitioning}
            aria-label="Previous slide"
          >
            <svg
              className="w-6 h-6"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 19l-7-7 7-7"
              />
            </svg>
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/30 hover:bg-white text-gray-800 p-3 rounded-full shadow-lg transition-all duration-300 transform hover:scale-110 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 z-10"
            disabled={isTransitioning}
            aria-label="Next slide"
          >
            <svg
              className="w-6 h-6"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </button>

          {/* Navigation Dots */}
          <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2 z-10">
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300
                  ${
                    currentIndex === index
                      ? "bg-white scale-110"
                      : "bg-white/50 hover:bg-white/75"
                  } focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500`}
                aria-label={`Go to slide ${index + 1}`}
                aria-current={currentIndex === index ? "true" : "false"}
              />
            ))}
          </div>

          {/* Progress Bar */}
          <div className="absolute bottom-0 left-0 w-full h-1 bg-white/20">
            <div
              className="h-full bg-white/80 transition-all duration-[5000ms] ease-linear"
              style={{
                width: isPaused ? "0%" : "100%",
                transitionProperty: "width",
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AutoSlider;