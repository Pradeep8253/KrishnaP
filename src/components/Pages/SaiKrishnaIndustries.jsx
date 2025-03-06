import React, { useState } from "react";
import { ArrowRight, Award, Factory, Users, Package } from "lucide-react";


const PoultryEquipmentCompany = () => {
  const [activeTab, setActiveTab] = useState("infrastructure");

  const features = [
    {
      id: "infrastructure",
      icon: <Factory className="w-6 h-6" />,
      title: "Infrastructure",
      content: [
        "State-of-the-art manufacturing facility",
        "Advanced Plastic Injection Molding",
        "Extensive storage capabilities",
        "Strategic Hyderabad location",
      ],
    },
    {
      id: "leadership",
      icon: <Users className="w-6 h-6" />,
      title: "Leadership",
      content: [
        "Expert guidance by Managing Partners",
        "Mr. Srikanth M & Naveen Kumar",
        "25+ years combined experience",
        "Industry-leading expertise",
      ],
    },
    {
      id: "products",
      icon: <Package className="w-6 h-6" />,
      title: "Products",
      content: [
        "Innovative poultry equipment",
        "High-quality materials",
        "Durable construction",
        "Modern design principles",
      ],
    },
  ];

  const stats = [
    { value: "30+", label: "Years Experience" },
    { value: "50+", label: "Products" },
    { value: "100+", label: "Dealers" },
    { value: "10+", label: "Countries Served" },
  ];

  return (
    <div className="bg-gray-50 min-h-screen">
      <div className="max-w-7xl mx-auto  px-4 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Content Section - Left Side */}
          <div className="space-y-8">
            <div className="space-y-4">
              <div className="flex items-center space-x-2">
                <Award className="text-red-600 w-6 h-6" />
                <span className="text-red-600 font-semibold">
                  Industry Leaders Since 2002
                </span>
              </div>
              <h1 className="text-4xl font-bold text-gray-900">
                Krishna Poultry Equipment
                <span className="block text-red-600">
                  Manufacturers & Traders
                </span>
              </h1>
              <p className="text-gray-600 leading-relaxed">
                Pioneering innovation in poultry equipment from our base in
                Hyderabad, Telangana. Delivering excellence through cutting-edge
                technology and unmatched expertise.
              </p>
            </div>

            {/* Feature Tabs */}
            <div className="space-y-6">
              <div className="flex space-x-4 border-b border-gray-200">
                {features.map((feature) => (
                  <button
                    key={feature.id}
                    onClick={() => setActiveTab(feature.id)}
                    className={`pb-4 flex items-center space-x-2 ${
                      activeTab === feature.id
                        ? "border-b-2 border-red-600 text-red-600"
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
                            <ArrowRight className="w-4 h-4 text-red-600" />
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
                  <div className="text-3xl font-bold text-red-600">
                    {stat.value}
                  </div>
                  <div className="text-sm text-gray-600">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Image Grid - Right Side */}
          <div className="relative">
            <div className="grid grid-cols-2 gap-4 sticky top-8">
              {[1, 2, 3, 4].map((num) => (
                <div
                  key={num}
                  className="group relative overflow-hidden rounded-xl shadow-lg aspect-square"
                >
                  <img
                    src={`/api/placeholder/400/400`}
                    alt={`Poultry Equipment ${num}`}
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PoultryEquipmentCompany;
