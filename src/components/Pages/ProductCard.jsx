import React, { useState } from "react";

import { ChevronLeft, ChevronRight } from "lucide-react";
import { Card, CardContent, CardHeader } from "../ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../ui/tabs";

// Sample product data
const productData = {
  equipment: [
    {
      name: "Parent Stock Feeder",
      image: "/placeholder/400/300",
      description: "Advanced feeder for parent stock management",
      link: "parent-stock-feeder",
    },
    {
      name: "Automatic Debeaking Machine",
      image: "/placeholder/400/300",
      description: "Precision debeaking with automated control",
      link: "automatic-debeaker",
    },
    {
      name: "Gas Brooder",
      image: "/placeholder/400/300",
      description: "Temperature-controlled brooding solution",
      link: "gas-brooder",
    },
    {
      name: "Manual Debeaking Machine",
      image: "/placeholder/400/300",
      description: "Reliable manual debeaking equipment",
      link: "manual-debeaker",
    },
    {
      name: "Chick Transport Crate",
      image: "/placeholder/400/300",
      description: "Safe and secure chick transportation",
      link: "chick-crate",
    },
    {
      name: "Grower Drinker 8L",
      image: "/placeholder/400/300",
      description: "Large capacity drinker for growing birds",
      link: "grower-drinker",
    },
  ],
  feeders: [
    {
      name: "Chick Feeder 3kg",
      image: "/placeholder/400/300",
      description: "Efficient feeding solution for chicks",
      link: "chick-feeder",
    },
    {
      name: "Chick Drinker 3L",
      image: "/placeholder/400/300",
      description: "Easy-access drinking system for chicks",
      link: "chick-drinker",
    },
  ],
  accessories: [
    {
      name: "Poultry Thermometer",
      image: "/placeholder/400/300",
      description: "Accurate temperature monitoring for your coop",
      link: "poultry-thermometer",
    },
  ],
};

// ProductCard Component
const ProductCard = ({ product }) => {
  return (
    <div className="group w-full p-2">
      <Card className="overflow-hidden transition-all duration-300 hover:shadow-lg h-full">
        <div className="relative h-48 overflow-hidden bg-gray-100">
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
        </div>
        <CardHeader className="p-4">
          <h3 className="text-lg font-semibold text-center">{product.name}</h3>
        </CardHeader>
        <CardContent className="px-4 pb-4 pt-0">
          <p className="text-sm text-gray-600 text-center line-clamp-2">
            {product.description ||
              "High-quality poultry equipment for your farming needs"}
          </p>
        </CardContent>
      </Card>
    </div>
  );
};

// Counter Component
const CounterSection = () => {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 my-8 max-w-4xl mx-auto">
      {[
        { count: "15+", label: "Years Experience" },
        { count: "1000+", label: "Happy Customers" },
        { count: "50+", label: "Products" },
        { count: "15+", label: "Countries Served" },
      ].map((item, index) => (
        <div
          key={index}
          className="bg-white rounded-lg p-4 shadow-md text-center"
        >
          <h3 className="text-2xl md:text-3xl font-bold text-red-600">
            {item.count}
          </h3>
          <p className="text-sm md:text-base text-gray-700">{item.label}</p>
        </div>
      ))}
    </div>
  );
};

// Image Carousel Component
const ImageCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const images = [
    "/api/placeholder/600/300",
    "/api/placeholder/600/300",
    "/api/placeholder/600/300",
  ];

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div className="relative w-full max-w-3xl mx-auto">
      <div className="overflow-hidden rounded-lg">
        <div className="relative h-56 md:h-72">
          <img
            src={images[currentIndex]}
            alt="Product showcase"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
      <button
        className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/80 p-2 rounded-full shadow-md hover:bg-white"
        onClick={goToPrevious}
      >
        <ChevronLeft className="h-6 w-6" />
      </button>
      <button
        className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/80 p-2 rounded-full shadow-md hover:bg-white"
        onClick={goToNext}
      >
        <ChevronRight className="h-6 w-6" />
      </button>
      <div className="flex justify-center mt-2 gap-1">
        {images.map((_, index) => (
          <button
            key={index}
            className={`w-2 h-2 rounded-full transition-colors ${
              currentIndex === index ? "bg-red-600" : "bg-gray-300"
            }`}
            onClick={() => setCurrentIndex(index)}
          />
        ))}
      </div>
    </div>
  );
};

// Main Component
const ResponsiveProductShowcase = () => {
  return (
    <div className="w-full bg-gradient-to-r from-gray-100 via-red-50 to-gray-100 px-4 py-10">
      {/* Header Section */}
      <div className="max-w-6xl mx-auto text-center mb-12">
        <h1 className="text-3xl md:text-5xl font-bold mb-4">
          <span className="text-red-600">Welcome To Krishna Poultry</span>{" "}
          <span className="text-black block md:inline">
            Equipments Manufacturer & Traders
          </span>
        </h1>

        <div className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-800 inline-block border-b-4 border-red-500 pb-2">
            Our Products
          </h2>
        </div>

        {/* Carousel */}
        <div className="mb-8">
          <ImageCarousel />
        </div>

        {/* Counter Section */}
        <CounterSection />

        <p className="text-lg text-gray-600 max-w-2xl mx-auto mt-6">
          High-quality equipment designed to meet all your poultry farming
          needs.
        </p>
      </div>

      {/* Product Tabs */}
      <div className="max-w-6xl mx-auto">
        <Tabs defaultValue="equipment" className="w-full">
          <div className="flex justify-center mb-8">
            <TabsList className="bg-gray-100/80 p-1">
              <TabsTrigger
                value="equipment"
                className="data-[state=active]:bg-red-500 data-[state=active]:text-white px-6 py-2"
              >
                Poultry Equipment
              </TabsTrigger>
              <TabsTrigger
                value="feeders"
                className="data-[state=active]:bg-red-500 data-[state=active]:text-white px-6 py-2"
              >
                Feeders & Drinkers
              </TabsTrigger>
              <TabsTrigger
                value="accessories"
                className="data-[state=active]:bg-red-500 data-[state=active]:text-white px-6 py-2"
              >
                Accessories
              </TabsTrigger>
            </TabsList>
          </div>

          <TabsContent value="equipment" className="mt-0">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {productData.equipment.map((product, index) => (
                <ProductCard key={index} product={product} />
              ))}
            </div>
          </TabsContent>

          <TabsContent value="feeders" className="mt-0">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {productData.feeders.map((product, index) => (
                <ProductCard key={index} product={product} />
              ))}
            </div>
          </TabsContent>

          <TabsContent value="accessories" className="mt-0">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {productData.accessories.map((product, index) => (
                <ProductCard key={index} product={product} />
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default ResponsiveProductShowcase;
