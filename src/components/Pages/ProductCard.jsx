import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import cagebabydrinker from "../Pages/fwdkrishnatradersproducts/cagebabydrinker.jpg";
import chickcrate from "../Pages/fwdkrishnatradersproducts/chickcrate.jpg";
import chickdrinker3ltr from "./fwdkrishnatradersproducts/chickdrinker3ltr.jpg";
import debeakingmachineautomatic from "./fwdkrishnatradersproducts/debeakingmachineautomatic.jpg";
import chickfeeder3kg from "./fwdkrishnatradersproducts/chickfeeder3kg.jpg";
import deberakingmachinemanual from "./fwdkrishnatradersproducts/deberakingmachinemanual.jpg";
import gasbrooder from "./fwdkrishnatradersproducts/gasbrooder.jpg";
import growerdrinker8ltr from "./fwdkrishnatradersproducts/growerdrinker8ltr.jpg";
import CounterSection from "./Products/CounterSection";
import BasinChickDrinker from "../Pages/fwdkrishnatradersproductsmain/BasinChickDrinker2.5.jpg";
import ImageCarousel from "./Products/ImageCrousel";

const ProductCard = ({ product }) => (
  <motion.div
    className="w-full sm:w-1/2 lg:w-1/3 p-2 sm:p-4"
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    whileHover={{ scale: 1.02 }}
    transition={{ duration: 0.3 }}
  >
    <div className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
      <div className="relative">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-48 sm:h-56 object-cover"
          onError={(e) => {
            e.target.src = "/placeholder-image.png";
          }}
        />
      </div>
      <div className="p-4 sm:p-6">
        <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-2">
          {product.name}
        </h3>
        <p className="text-sm sm:text-base text-gray-600 mb-4 line-clamp-2">
          {product.description ||
            "High-quality poultry equipment for your farming needs"}
        </p>
      </div>
    </div>
  </motion.div>
);

const Products = () => {
  const [activeTab, setActiveTab] = useState("equipment");

  const categories = [{ id: "equipment", title: "Poultry Equipment" }];

  const productsData = {
    equipment: [
      {
        name: "Parent Stock Feeder",
        image: cagebabydrinker,
        description: "Advanced feeder for parent stock management",
        link: "parent-stock-feeder",
      },
      {
        name: "Automatic Debeaking Machine",
        image: debeakingmachineautomatic,
        description: "Precision debeaking with automated control",
        link: "automatic-debeaker",
      },
      {
        name: "Gas Brooder",
        image: gasbrooder,
        description: "Temperature-controlled brooding solution",
        link: "gas-brooder",
      },
      {
        name: "Manual Debeaking Machine",
        image: deberakingmachinemanual,
        description: "Reliable manual debeaking equipment",
        link: "manual-debeaker",
      },
      {
        name: "Chick Transport Crate",
        image: chickcrate,
        description: "Safe and secure chick transportation",
        link: "chick-crate",
      },
      {
        name: "Grower Drinker 8L",
        image: growerdrinker8ltr,
        description: "Large capacity drinker for growing birds",
        link: "grower-drinker",
      },
    ],
    feeders: [
      {
        name: "Chick Feeder 3kg",
        image: chickfeeder3kg,
        description: "Efficient feeding solution for chicks",
        link: "chick-feeder",
      },
      {
        name: "Chick Drinker 3L",
        image: chickdrinker3ltr,
        description: "Easy-access drinking system for chicks",
        link: "chick-drinker",
      },
    ],
    accessories: [],
  };

  return (
    <div className="w-full bg-gradient-to-r from-[#9c95a1] via-[#e6a5a5] to-[#d9d8d7] px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
      {/* Header Section */}
      <div className="text-center mb-8 sm:mb-16">
        <h1 className="text-2xl sm:text-3xl lg:text-5xl font-bold text-red-600 mb-4 sm:mb-6 px-2 sm:px-4">
          Welcome To Krishna Poultry{" "}
          <span className="text-black">Equipments Manufacturer</span> & Traders
        </h1>
        <div className="mb-8">
          <h2 className="text-2xl sm:text-3xl font-semibold text-gray-800 inline-block border-b-4 border-red-500 pb-2">
            Our Products
          </h2>
        </div>

        <div className="max-w-full sm:max-w-xl mx-auto">
          <ImageCarousel />
        </div>

        <CounterSection />

        <p className="mt-6 sm:mt-8 text-base sm:text-xl text-gray-600 max-w-2xl mx-auto px-4">
          High-quality equipment designed to meet all your poultry farming
          needs.
        </p>
      </div>

      {/* Category Navigation */}
      <div className="mb-8 sm:mb-12">
        <nav className="flex flex-wrap justify-center gap-2 sm:gap-4 px-2 sm:px-8">
          {categories.map((category) => (
            <motion.button
              key={category.id}
              onClick={() => setActiveTab(category.id)}
              className={`px-4 sm:px-8 py-2 sm:py-3 text-base sm:text-lg font-medium rounded-full transition-colors duration-300 ${
                activeTab === category.id
                  ? "bg-red-500 text-white shadow-md"
                  : "bg-gray-100 text-gray-700 hover:bg-gray-200"
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {category.title}
            </motion.button>
          ))}
        </nav>
      </div>

      {/* Products Grid */}
      <AnimatePresence mode="wait">
        <motion.div
          key={activeTab}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="flex flex-wrap -mx-2 sm:-mx-4"
        >
          {productsData[activeTab]?.map((product, index) => (
            <ProductCard key={index} product={product} />
          ))}
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

export default Products;
