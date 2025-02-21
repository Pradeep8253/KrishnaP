import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const Banner = ({ title, image, breadcrumbItems, subtitle }) => {
  // Animation variants with optimized timing
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.7,
        staggerChildren: 0.15,
      },
    },
  };

  const titleVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  };

  const breadcrumbVariants = {
    hidden: { y: 10, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.3,
        ease: "easeOut",
      },
    },
  };

  return (
    <motion.section
      initial="hidden"
      animate="visible"
      variants={containerVariants}
      className="relative pt-32 pb-36 bg-cover bg-center overflow-hidden group"
      style={{
        backgroundImage: `url(${image})`,
      }}
    >
      {/* Improved overlay with multiple layers */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-black/30 mix-blend-multiply" />
      <div className="absolute inset-0 bg-gradient-to-r from-blue-900/40 to-purple-900/40" />

      {/* Dynamic accent line */}
      <motion.div
        initial={{ scaleX: 0, opacity: 0 }}
        animate={{ scaleX: 1, opacity: 1 }}
        transition={{ duration: 1, delay: 0.2 }}
        className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-400 to-purple-500"
      />

      {/* Enhanced subtle particle effect - reduced quantity for better performance */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(12)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full"
            style={{
              width: Math.random() * 4 + 1 + "px",
              height: Math.random() * 4 + 1 + "px",
              backgroundColor:
                i % 2 === 0
                  ? "rgba(255,255,255,0.15)"
                  : "rgba(156,163,255,0.15)",
            }}
            initial={{
              x: `${Math.random() * 100}%`,
              y: `${Math.random() * 100}%`,
            }}
            animate={{
              x: [`${Math.random() * 100}%`, `${Math.random() * 100}%`],
              y: [`${Math.random() * 100}%`, `${Math.random() * 100}%`],
            }}
            transition={{
              duration: Math.random() * 15 + 10,
              repeat: Infinity,
              repeatType: "reverse",
              ease: "linear",
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Title with improved styling */}
          <motion.div variants={titleVariants} className="mb-6">
            <h1 className="text-5xl font-bold text-white tracking-tight leading-tight">
              {title}
            </h1>
            {subtitle && (
              <p className="text-lg text-gray-200 mt-4 max-w-2xl mx-auto">
                {subtitle}
              </p>
            )}
          </motion.div>

          {/* Redesigned breadcrumb with modern styling */}
          <motion.nav
            aria-label="breadcrumb"
            variants={breadcrumbVariants}
            className="inline-flex items-center px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full shadow-lg"
          >
            <ol className="flex items-center space-x-1">
              {breadcrumbItems.map((item, index) => (
                <li key={index} className="flex items-center text-sm">
                  <Link
                    to={item.link}
                    className={`${
                      item.active
                        ? "text-white font-medium"
                        : "text-gray-300 hover:text-white transition-colors"
                    }`}
                  >
                    {item.name}
                  </Link>
                  {index < breadcrumbItems.length - 1 && (
                    <span className="mx-2 text-gray-400">
                      <svg
                        className="w-3 h-3"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                          clipRule="evenodd"
                        ></path>
                      </svg>
                    </span>
                  )}
                </li>
              ))}
            </ol>
          </motion.nav>
        </div>
      </div>
    </motion.section>
  );
};

export default Banner;
