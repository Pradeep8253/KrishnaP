import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";


const CounterSection = () => {
  const [counts, setCounts] = useState({
    years: 0,
    clients: 0,
    products: 0,
    satisfaction: 0,
  });

  useEffect(() => {
    const duration = 2000; // 2 seconds
    const steps = duration / 16; // 60 FPS
    let currentStep = 0;

    const timer = setInterval(() => {
      currentStep++;
      if (currentStep >= steps) {
        setCounts({
          years: 10,
          clients: 500,
          products: 50,
          satisfaction: 98,
        });
        clearInterval(timer);
      } else {
        const progress = currentStep / steps;
        setCounts({
          years: Math.floor(10 * progress),
          clients: Math.floor(500 * progress),
          products: Math.floor(50 * progress),
          satisfaction: Math.floor(98 * progress),
        });
      }
    }, 16);

    return () => clearInterval(timer);
  }, []);

  const statsData = [
    {
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-12 w-12 text-red-600"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
      ),
      value: counts.years,
      label: "Years of Excellence",
      suffix: "+",
    },
    {
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-12 w-12 text-red-600"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
          />
        </svg>
      ),
      value: counts.clients,
      label: "Happy Clients",
      suffix: "+",
    },
    {
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-12 w-12 text-red-600"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"
          />
        </svg>
      ),
      value: counts.products,
      label: "Products Range",
      suffix: "+",
    },
    {
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-12 w-12 text-red-600"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
      ),
      value: counts.satisfaction,
      label: "Customer Satisfaction",
      suffix: "%",
    },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="my-16"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto px-4">
        {statsData.map((stat, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="bg-white rounded-xl shadow-lg p-6 transform hover:scale-105 transition-transform duration-300"
          >
            <div className="flex flex-col items-center text-center">
              {stat.icon}
              <div className="mt-4">
                <div className="text-4xl font-bold text-red-600">
                  {stat.value}
                  {stat.suffix}
                </div>
                <div className="mt-2 text-gray-600 font-medium">
                  {stat.label}
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};


export default CounterSection;