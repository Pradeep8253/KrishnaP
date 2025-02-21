import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const Banner = ({ title, image, breadcrumbItems }) => {
  // Animation variants for different elements
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.5,
        staggerChildren: 0.2,
      },
    },
  };

  const titleVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  const breadcrumbVariants = {
    hidden: { x: -20, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 0.4,
        ease: "easeOut",
      },
    },
  };

  return (
    <motion.section
      initial="hidden"
      animate="visible"
      variants={containerVariants}
      id="page-banner"
      className="relative pt-28 pb-44 bg-cover bg-center overflow-hidden group"
      style={{
        backgroundImage: `url(${image})`,
        backgroundBlendMode: "overlay",
        backgroundColor: "rgba(0, 0, 0, 0.5)",
      }}
    >
      {/* Animated overlay effect */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.3 }}
        transition={{ duration: 1.5, repeat: Infinity, repeatType: "reverse" }}
        className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20"
      />

      {/* Floating particles effect */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-white rounded-full opacity-20"
            initial={{
              x: Math.random() * 100,
              y: Math.random() * 100,
            }}
            animate={{
              x: [Math.random() * 100, Math.random() * 100],
              y: [Math.random() * 100, Math.random() * 100],
            }}
            transition={{
              duration: Math.random() * 10 + 5,
              repeat: Infinity,
              repeatType: "reverse",
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-4 relative">
        <div className="row">
          <div className="col-lg-12">
            <div className="page-banner-cont text-left mt-10">
              <motion.h2
                variants={titleVariants}
                className="text-4xl font-bold text-white ml-4 hover:scale-105 transition-transform duration-300"
              >
                {title}
              </motion.h2>

              <nav aria-label="breadcrumb" className="mt-4">
                <ol className="breadcrumb flex justify-start space-x-2">
                  {breadcrumbItems.map((item, index) => (
                    <motion.li
                      key={index}
                      variants={breadcrumbVariants}
                      className={`breadcrumb-item ${
                        item.active ? "text-gray-300" : ""
                      }`}
                    >
                      <Link
                        to={item.link}
                        className="text-white hover:text-gray-300 transition-colors duration-300"
                      >
                        {item.name}
                      </Link>
                      {index < breadcrumbItems.length - 1 && (
                        <span className="mx-2 text-white/50">→</span>
                      )}
                    </motion.li>
                  ))}
                </ol>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Banner;
