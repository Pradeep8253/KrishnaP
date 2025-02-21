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

const ProductCard = ({ product }) => (
  <motion.div
    className="w-full sm:w-1/2 lg:w-1/3 p-4"
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    whileHover={{ scale: 1.02 }}
    transition={{ duration: 0.3 }}
  >
    <div className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
      <div className="relative aspect-w-16 aspect-h-9">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-64 object-cover"
          onError={(e) => {
            e.target.src = "/placeholder-image.png";
          }}
        />
      </div>
      <div className="p-6">
        <h3 className="text-xl font-semibold text-gray-900 mb-2">
          {product.name}
        </h3>
        <p className="text-gray-600 mb-4 line-clamp-2">
          {product.description ||
            "High-quality poultry equipment for your farming needs"}
        </p>
        {/* <Link
          to={`/product/${product.link}`}
          className="block w-full text-center bg-red-500 text-white py-3 px-4 rounded-lg hover:bg-red-600 transition-colors duration-300"
        >
          View Details
        </Link> */}
      </div>
    </div>
  </motion.div>
);

const Products = () => {
  const [activeTab, setActiveTab] = useState("equipment");

  const categories = [
    { id: "equipment", title: "Poultry Equipment" },
    // { id: "feeders", title: "Feeders & Drinkers" },
    // { id: "accessories", title: "Accessories" },
  ];

  const productsData = {
    equipment: [
      {
        name: "Parent Stock Feeder",
        image: cagebabydrinker,
        description: "Advanced feeder system for parent stock management",
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
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Header Section */}
      <div className="text-center mb-16">
        <h1 className="text-4xl font-bold text-red-600 sm:text-5xl mb-6">
          Welcome To Krishna Poultry{" "}
          <span className="text-black">Equipments Manufacturer</span> & Traders
        </h1>

        <div className="mb-8">
          <h2 className="text-3xl font-semibold text-gray-800 inline-block border-b-4 border-red-500 pb-2">
            Our Products
          </h2>
        </div>

        <div className="max-w-3xl mx-auto mb-12">
          <img
            src={chickdrinker3ltr}
            alt="Featured Product"
            className="w-full h-66 object-contain rounded-xl shadow-lg"
          />
        
        </div>

        <CounterSection />

        <p className="mt-8 text-xl text-gray-600 max-w-2xl mx-auto">
          High-quality equipment designed to meet all your poultry farming
          needs.
        </p>
      </div>

      {/* Category Navigation */}
      <div className="mb-12">
        <nav className="flex flex-wrap justify-center gap-4">
          {categories.map((category) => (
            <motion.button
              key={category.id}
              onClick={() => setActiveTab(category.id)}
              className={`px-8 py-3 text-lg font-medium rounded-full transition-colors duration-300 ${
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
          className="flex flex-wrap -mx-4"
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
