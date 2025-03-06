import React, { useState } from "react";
import { ArrowRight, Award, Settings, ShieldCheck, Box } from "lucide-react";

// import broader1 from "../fwdkrishnatradersproducts/broader1.jpg";
// import broader2 from "../fwdkrishnatradersproducts/broader2.jpg";
// import broader3 from "../fwdkrishnatradersproducts/broader3.jpg";
// import broader4 from "../fwdkrishnatradersproducts/broader4.jpg";
import gasbrooder from "../fwdkrishnatradersproducts/gasbrooder.jpg"

import Banner from "@/Banner/Banner";

const BroaderShowcase = () => {
  const [activeTab, setActiveTab] = useState("features");
  const breadcrumb = [{ name: "Home", link: "/", active: true }];

  // Image data
  const broaderImages = [
    {
      src: gasbrooder,
      alt: "Broader System 1",
    },
    // {
    //   src: broader2,
    //   alt: "Broader System 2",
    // },
    // {
    //   src: broader3,
    //   alt: "Broader System 3",
    // },
    // {
    //   src: broader4,
    //   alt: "Broader System 4",
    // },
  ];

  const features = [
    {
      id: "features",
      icon: <Box className="w-6 h-6" />,
      title: "Features",
      content: [
        "Spacious and comfortable design",
        "Adjustable temperature control",
        "Durable and easy to clean",
        "Optimal space utilization",
      ],
    },
    {
      id: "technical",
      icon: <Settings className="w-6 h-6" />,
      title: "Technical",
      content: [
        "Precision climate control",
        "Energy-efficient heating system",
        "Modular design for scalability",
        "Weather-resistant materials",
      ],
    },
    {
      id: "quality",
      icon: <ShieldCheck className="w-6 h-6" />,
      title: "Quality",
      content: [
        "ISO 9001:2015 certified",
        "Rigorous quality testing",
        "Premium grade materials",
        "3-year warranty coverage",
      ],
    },
  ];

  const stats = [
    { value: "3000+", label: "Units Installed" },
    { value: "95%", label: "Customer Satisfaction" },
    { value: "500 sq.ft", label: "Coverage Area" },
    { value: "7yr", label: "Lifespan" },
  ];

  return (
    <>
      <Banner
        title="Broader Systems"
        image="https://example.com/broader-banner.jpg" // Replace with your banner image
        breadcrumbItems={breadcrumb}
      />
      <div className="bg-gradient-to-r from-[#f6d365] via-[#fda085] to-[#fbc2eb] min-h-screen">
        <div className="max-w-7xl mx-auto px-4 py-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Content Section - Left Side */}
            <div className="space-y-8">
              <div className="space-y-4">
                <div className="flex items-center space-x-2">
                  <Award className="text-orange-600 w-6 h-6" />
                  <span className="text-orange-600 font-semibold">
                    Advanced Broader Solutions
                  </span>
                </div>
                <h1 className="text-4xl font-bold text-gray-900">
                  Our Premium Broader Systems
                  <span className="block text-orange-600">
                    Comfort & Efficiency Redefined
                  </span>
                </h1>
                <p className="text-gray-800 leading-relaxed">
                  Experience superior comfort and efficiency with our state-of-the-art broader systems. 
                  Designed for optimal space utilization and climate control, our systems are built to 
                  provide the best environment for your needs.
                </p>
              </div>

              {/* Feature Tabs */}
              <div className="space-y-6">
                <div className="flex space-x-4 border-b border-orange-200">
                  {features.map((feature) => (
                    <button
                      key={feature.id}
                      onClick={() => setActiveTab(feature.id)}
                      className={`pb-4 flex items-center space-x-2 ${
                        activeTab === feature.id
                          ? "border-b-2 text-gray-800"
                          : "text-gray-500 hover:text-gray-700"
                      }`}
                    >
                      {feature.icon}
                      <span>{feature.title}</span>
                    </button>
                  ))}
                </div>

                <div className="bg-white p-6 rounded-lg shadow-lg">
                  {features.map(
                    (feature) =>
                      activeTab === feature.id && (
                        <ul key={feature.id} className="space-y-4">
                          {feature.content.map((item, index) => (
                            <li
                              key={index}
                              className="flex items-center space-x-3"
                            >
                              <ArrowRight className="w-4 h-4 text-orange-400" />
                              <span className="text-gray-700">{item}</span>
                            </li>
                          ))}
                        </ul>
                      )
                  )}
                </div>
              </div>

              {/* Stats Grid */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                {stats.map((stat, index) => (
                  <div
                    key={index}
                    className="bg-white p-4 rounded-lg shadow-md text-center"
                  >
                    <div className="text-3xl font-bold text-orange-600">
                      {stat.value}
                    </div>
                    <div className="text-sm text-orange-600">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Image Grid - Right Side */}
            <div className="relative">
              <div className="grid grid-cols-2 gap-4 sticky top-8">
                {broaderImages.map((image, index) => (
                  <div
                    key={index}
                    className="group relative overflow-hidden rounded-xl shadow-lg aspect-square"
                  >
                    <img
                      src={image.src}
                      alt={image.alt}
                      className="w-full h-full object-contain transform group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <p className="absolute bottom-4 left-4 text-white text-sm font-medium">
                        {image.alt}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BroaderShowcase;