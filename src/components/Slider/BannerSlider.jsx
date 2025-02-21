import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const BannerSlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: true,
  };

  const slides = [
    {
      id: 1,
      image: "assets/images/banner/01.jpg",
      title: "Auto Pan Feeding System",
      description:
        "The Auto Pan Feeding System with centralized feed level adjustment represents a major technological innovation. This helps in minimizing feed waste, labour and helps maintain hygienic conditions for the birds.",
      link: "auto_pan_feeding.html",
    },
    {
      id: 2,
      image: "assets/images/banner/02.jpg",
      title: "Nipple Drinking System",
      description:
        "Nipple Drinking System has been proven to be a most consistent and sanitized solution for the supply of water. It consists of water front parts, drinking system, hanging system, regulator and water line and end parts.",
      link: "nipple_drinking_system.html",
    },
  ];

  return (
    <div className="slider-area slider-one-style">
      <Slider {...settings}>
        {slides.map((slide) => (
          <div key={slide.id} className="relative">
            <img src={slide.image} alt="slider" className="w-full h-auto" />
            <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50">
              <div className="text-center text-white">
                <h1 className="text-4xl font-bold mb-4">{slide.title}</h1>
                <p className="text-lg mb-6">{slide.description}</p>
                <a
                  href={slide.link}
                  className="bg-blue-500 text-white px-6 py-2 rounded-full hover:bg-blue-600 transition duration-300"
                >
                  Know More <i className="fa fa-chevron-right ml-2"></i>
                </a>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default BannerSlider;
