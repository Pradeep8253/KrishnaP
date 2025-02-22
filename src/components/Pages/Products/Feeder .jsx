import React, { useState } from "react";
import { ArrowRight, Award, Settings, ShieldCheck, Package } from "lucide-react";
import Banner from "../../../Banner/Banner";

const FeederShowcase = () => {
  const [activeTab, setActiveTab] = useState("features");
  const breadcrumb = [{ name: "Home", link: "/", active: true }];


  // Add image data at the top of your component
  const feederImages = [
    {
      src: chickfedding, // Replace with your actual image paths
      alt: "Cage Feeder"
    },
    {
      src: "/images/feeder-2.jpg",
      alt: "Chain Feeding System"
    },
    {
      src: "/images/feeder-3.jpg",
      alt: "Tube Feeder"
    },
    {
      src: "/images/feeder-4.jpg",
      alt: "Automatic Feeding System"
    }
  ];

  const features = [
    {
      id: "features",
      icon: <Package className="w-6 h-6" />,
      title: "Features",
      content: [
        "Large capacity feed storage",
        "Anti-waste design mechanism",
        "Durable UV-resistant plastic",
        "Easy cleaning and maintenance",
      ],
    },
    {
      id: "technical",
      icon: <Settings className="w-6 h-6" />,
      title: "Technical",
      content: [
        "Precision feed flow control",
        "360° feeding accessibility",
        "Adjustable feed levels",
        "Weather-resistant seals",
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
        "2-year warranty coverage",
      ],
    },
  ];

  const stats = [
    { value: "5000+", label: "Units Sold" },
    { value: "99%", label: "Feed Retention" },
    { value: "15kg", label: "Capacity" },
    { value: "5yr", label: "Lifespan" },
  ];

  return (
    <>
     <Banner
      title="Feeder"
      image="https://skapoultryequipment.com/wp-content/uploads/2021/06/chicken-drinkers-drinkers-for-chickens-automatic-water-drinkers-for-chickens-broiler-drinkers-3.jpg"
      breadcrumbItems={breadcrumb}
    />
      <div className="bg-gradient-to-r from-[#9c95a1] via-[#e6a5a5] to-[#d9d8d7] min-h-screen">
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 ">
          {/* Content Section - Left Side */}
          <div className="space-y-8">
            <div className="space-y-4">
              <div className="flex items-center space-x-2">
                <Award className="text-red-600 w-6 h-6" />
                <span className="text-red-600 font-semibold">
                  Advanced Feeding Solutions
                </span>
              </div>
              <h1 className="text-4xl font-bold text-gray-900">
                Our Premium Feeders
                <span className="block text-red-600">
                  Innovative Design & Performance
                </span>
              </h1>
              <p className="text-gray-800 leading-relaxed">
                Experience superior feeding efficiency with our state-of-the-art feeders. 
                Engineered for optimal feed conversion, durability, and ease of use, 
                our feeders represent the perfect blend of innovation and reliability.
              </p>
            </div>

            {/* Feature Tabs */}
            <div className="space-y-6">
              <div className="flex space-x-4 border-b border-red-200">
                {features.map((feature) => (
                  <button
                    key={feature.id}
                    onClick={() => setActiveTab(feature.id)}
                    className={`pb-4 flex items-center space-x-2 ${
                      activeTab === feature.id
                        ? "border-b-2  text-gray-800"
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
                            <ArrowRight className="w-4 h-4 text-red-400" />
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
                  <div className="text-3xl font-bold text-yellow-600">
                    {stat.value}
                  </div>
                  <div className="text-sm text-red-600">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Image Grid - Right Side */}
          <div className="relative">
            <div className="grid grid-cols-2 gap-4 sticky top-8">
              {feederImages.map((image, index) => (
                <div
                  key={index}
                  className="group relative overflow-hidden rounded-xl shadow-lg aspect-square"
                >
                  <img
                    src={image.src}
                    alt={image.alt}
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
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

export default FeederShowcase;