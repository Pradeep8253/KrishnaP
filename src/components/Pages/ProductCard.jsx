import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link, useLocation } from "react-router-dom";
import { Search, Filter, X } from "lucide-react";

// Import your images
import cagebabydrinker from "../Pages/fwdkrishnatradersproducts/cagebabydrinker.jpg";
import chickcrate from "../Pages/fwdkrishnatradersproducts/chickcrate.jpg";
import chickdrinker3ltr from "./fwdkrishnatradersproducts/chickdrinker3ltr.jpg";
import debeakingmachineautomatic from "./fwdkrishnatradersproducts/debeakingmachineautomatic.jpg";
import chickfeeder3kg from "./fwdkrishnatradersproducts/chickfeeder3kg.jpg";
import deberakingmachinemanual from "./fwdkrishnatradersproducts/deberakingmachinemanual.jpg";
import gasbrooder from "./fwdkrishnatradersproducts/gasbrooder.jpg";
import growerdrinker8ltr from "./fwdkrishnatradersproducts/growerdrinker8ltr.jpg";
import CounterSection from "./Products/CounterSection";

const ProductCard = ({ product, index }) => {
  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.5,
        ease: "easeOut",
      },
    }),
    hover: {
      y: -10,
      boxShadow:
        "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
      transition: {
        duration: 0.3,
      },
    },
  };

  return (
    <motion.div
      className="w-full sm:w-1/2 lg:w-1/3 xl:w-1/4 p-3"
      variants={cardVariants}
      initial="hidden"
      animate="visible"
      whileHover="hover"
      custom={index}
      layout
    >
      <Link to={`/product/${product.link}`} className="block h-full">
        <motion.div
          className="h-full rounded-xl overflow-hidden shadow-md bg-white flex flex-col"
          whileHover={{ scale: 1.02 }}
          transition={{ duration: 0.3 }}
        >
          <div className="relative overflow-hidden">
            <motion.div
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.5 }}
              className="h-48 sm:h-52 bg-gray-100 overflow-hidden"
            >
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-full object-cover transition-transform duration-700"
                onError={(e) => {
                  e.target.src = "/placeholder-product.png";
                }}
              />
            </motion.div>

            <div className="absolute top-0 right-0 bg-red-600 text-white text-xs font-bold px-3 py-1 m-2 rounded-full">
              NEW
            </div>
          </div>

          <div className="p-4 flex-grow flex flex-col justify-between">
            <div>
              <h3 className="text-base font-medium text-gray-800 mb-1 line-clamp-2">
                {product.name}
              </h3>
              <p className="text-sm text-gray-500 mb-3 line-clamp-2">
                High-quality poultry equipment for optimal performance
              </p>
            </div>

            <button className="w-full bg-red-600 hover:bg-red-700 text-white py-2 px-4 rounded-lg transition-colors duration-200 text-sm font-medium flex items-center justify-center">
              View Details
            </button>
          </div>
        </motion.div>
      </Link>
    </motion.div>
  );
};

const MobileFilterButton = ({ showFilters, setShowFilters }) => (
  <motion.button
    className="md:hidden fixed bottom-6 right-6 z-20 bg-red-600 text-white p-4 rounded-full shadow-lg flex items-center justify-center"
    whileTap={{ scale: 0.9 }}
    onClick={() => setShowFilters(!showFilters)}
    aria-label={showFilters ? "Close filters" : "Show filters"}
  >
    {showFilters ? <X size={24} /> : <Filter size={24} />}
  </motion.button>
);

const Products = () => {
  const location = useLocation();
  const [activeTab, setActiveTab] = useState("tab-1");
  const [searchTerm, setSearchTerm] = useState("");
  const [showFilters, setShowFilters] = useState(false);
  const productsRef = useRef(null);

  // Scroll to products section when tab changes
  useEffect(() => {
    if (productsRef.current) {
      const yOffset = -100; // Adjust based on header height
      const y =
        productsRef.current.getBoundingClientRect().top +
        window.pageYOffset +
        yOffset;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
  }, [activeTab]);

  const categories = [
    { id: "tab-1", category: "Drinking", title: "EQUIPMENTS" },
    { id: "tab-2", category: "Feeding", title: "FEEDERS" },
    { id: "tab-3", category: "Brooding", title: "BROODERS" },
    { id: "tab-4", category: "Accessories", title: "ACCESSORIES" },
  ];

  const productsData = {
    "tab-1": [
      {
        name: "Parent Feeder",
        image: cagebabydrinker,
        link: "baby-chick-drinker",
      },
      {
        name: "Vaccinator",
        image: chickcrate,
        link: "chick-drinker",
      },
      {
        name: "Debeaking Machine",
        image: debeakingmachineautomatic,
        link: "jumbo-drinker",
      },
      {
        name: "Basin Chick Feeder",
        image: chickdrinker3ltr,
        link: "deluxe-drinker",
      },
      {
        name: "Gas Broder",
        image: chickfeeder3kg,
        link: "deluxe-jumbo-drinker",
      },
      {
        name: "Chick Crate",
        image: deberakingmachinemanual,
        link: "grower-drinker",
      },
      {
        name: "Debeaking Machine Automatic",
        image: gasbrooder,
        link: "nipples-and-pressure-regulator",
      },
      {
        name: "Grower Drinker 8L",
        image: growerdrinker8ltr,
        link: "growerdrinker8ltr",
      },
    ],
    "tab-2": [
      {
        name: "Chick Feeder 3kg",
        image: chickfeeder3kg,
        link: "chick-feeder-3kg",
      },
      {
        name: "Parent Feeder",
        image: cagebabydrinker,
        link: "parent-feeder",
      },
    ],
    "tab-3": [
      {
        name: "Gas Brooder",
        image: gasbrooder,
        link: "gas-brooder",
      },
    ],
    "tab-4": [
      {
        name: "Chick Crate",
        image: chickcrate,
        link: "chick-crate",
      },
      {
        name: "Debeaking Machine Manual",
        image: deberakingmachinemanual,
        link: "debeaking-machine-manual",
      },
    ],
  };

  // Filter products based on search term
  const filteredProducts =
    productsData[activeTab]?.filter((product) =>
      product.name.toLowerCase().includes(searchTerm.toLowerCase())
    ) || [];

  return (
    <div className="bg-gray-50 min-h-screen">
      <div className="pt-16 pb-6 bg-gradient-to-r from-red-600 to-red-700">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center py-12">
            <motion.h1
              className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              Krishna Poultry Equipments
            </motion.h1>
            <motion.p
              className="text-lg text-white/90 max-w-2xl mx-auto"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.5 }}
            >
              High-quality equipment designed to meet all your poultry farming
              needs
            </motion.p>
          </div>
        </div>
      </div>

      <CounterSection />

      <div className="max-w-7xl mx-auto px-4 py-8">
        {/* Mobile Filter Drawer */}
        <AnimatePresence>
          {showFilters && (
            <motion.div
              className="fixed inset-0 bg-black/50 z-40 md:hidden"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setShowFilters(false)}
            >
              <motion.div
                className="absolute bottom-0 left-0 right-0 bg-white rounded-t-2xl p-6 pb-8"
                initial={{ y: "100%" }}
                animate={{ y: 0 }}
                exit={{ y: "100%" }}
                transition={{ type: "spring", damping: 25 }}
                onClick={(e) => e.stopPropagation()}
              >
                <div className="w-16 h-1 bg-gray-300 rounded-full mx-auto mb-6"></div>
                <h3 className="text-lg font-semibold mb-4">Categories</h3>
                <div className="flex flex-col space-y-2">
                  {categories.map((tab) => (
                    <button
                      key={tab.id}
                      onClick={() => {
                        setActiveTab(tab.id);
                        setShowFilters(false);
                      }}
                      className={`px-4 py-3 text-left rounded-lg transition-colors ${
                        activeTab === tab.id
                          ? "bg-red-100 text-red-700 font-medium"
                          : "bg-gray-100 text-gray-700"
                      }`}
                    >
                      {tab.title}
                    </button>
                  ))}
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

        <div className="flex flex-col md:flex-row gap-6">
          {/* Desktop Sidebar */}
          <div className="hidden md:block w-64 flex-shrink-0">
            <div className="bg-white rounded-xl shadow-sm p-5 sticky top-24">
              <h3 className="text-lg font-semibold mb-4">Categories</h3>
              <div className="flex flex-col space-y-2">
                {categories.map((tab) => (
                  <motion.button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`px-4 py-3 text-left rounded-lg transition-colors ${
                      activeTab === tab.id
                        ? "bg-red-100 text-red-700 font-medium"
                        : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                    }`}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    {tab.title}
                  </motion.button>
                ))}
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div className="flex-1" ref={productsRef}>
            {/* Search & Filters Bar */}
            <div className="bg-white rounded-xl p-4 mb-6 shadow-sm">
              <div className="relative">
                <Search
                  className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
                  size={18}
                />
                <input
                  type="text"
                  placeholder="Search products..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-2 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent"
                />
              </div>
            </div>

            {/* Category Pills (Mobile) */}
            <div className="md:hidden overflow-x-auto pb-4 -mx-4 px-4">
              <div className="flex space-x-2 min-w-max">
                {categories.map((tab) => (
                  <motion.button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`px-4 py-2 text-sm font-medium rounded-full transition-colors whitespace-nowrap ${
                      activeTab === tab.id
                        ? "bg-red-600 text-white"
                        : "bg-white text-gray-700 shadow-sm"
                    }`}
                    whileTap={{ scale: 0.95 }}
                  >
                    {tab.title}
                  </motion.button>
                ))}
              </div>
            </div>

            {/* Section Header */}
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-xl font-bold text-gray-800">
                {categories.find((c) => c.id === activeTab)?.title ||
                  "Products"}
              </h2>
              <p className="text-sm text-gray-500">
                {filteredProducts.length} items
              </p>
            </div>

            {/* Products Grid */}
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab + searchTerm}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="flex flex-wrap -mx-3"
              >
                {filteredProducts.length > 0 ? (
                  filteredProducts.map((product, index) => (
                    <ProductCard
                      key={product.link}
                      product={product}
                      index={index}
                    />
                  ))
                ) : (
                  <motion.div
                    className="w-full py-12 text-center"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.2 }}
                  >
                    <p className="text-lg text-gray-500">
                      No products found. Try another search.
                    </p>
                  </motion.div>
                )}
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>

      {/* Mobile Filter Button */}
      <MobileFilterButton
        showFilters={showFilters}
        setShowFilters={setShowFilters}
      />
    </div>
  );
};

export default Products;
