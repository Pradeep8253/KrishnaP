export const productData = {
  "Basin Chick Drinker": {
    price: "₹650",
    originalPrice: "₹750",
    description: "Durable plastic basin for efficient water delivery",
    rating: 4.7,
    stock: "In Stock",
    isNew: true,
    discount: "15%",
  },
  "Flame Gun 4-Way": {
    price: "₹1200",
    originalPrice: "₹1350",
    description: "Powerful flame gun for sanitization and pest control",
    rating: 4.3,
    stock: "Limited Stock",
    isNew: false,
    discount: "11%",
  },
  "Jumbo Automatic Drinker": {
    price: "₹950",
    originalPrice: "₹1050",
    description: "Large capacity automatic water dispenser",
    rating: 4.9,
    stock: "In Stock",
    isNew: true,
    discount: "10%",
  },
  "Small Sprinkler": {
    price: "₹450",
    originalPrice: "₹520",
    description: "Water-efficient sprinkler for climate control",
    rating: 4.5,
    stock: "In Stock",
    isNew: false,
    discount: "13%",
  },
  "Chick Feeder 3kg": {
    price: "₹520",
    originalPrice: "₹600",
    description: "High-capacity feeder designed for growing birds",
    rating: 4.6,
    stock: "In Stock",
    isNew: false,
    discount: "13%",
  },
  "Chick Crate": {
    price: "₹850",
    originalPrice: "₹950",
    description: "Sturdy transportation crate with ventilation",
    rating: 4.4,
    stock: "In Stock",
    isNew: true,
    discount: "11%",
  },
  "Nipple Drinker": {
    price: "₹380",
    originalPrice: "₹450",
    description: "Leak-proof nipple drinking system",
    rating: 4.8,
    stock: "In Stock",
    isNew: false,
    discount: "16%",
  },
  Vaccinator: {
    price: "₹720",
    originalPrice: "₹800",
    description: "Precision vaccinator for poultry health management",
    rating: 4.7,
    stock: "Limited Stock",
    isNew: true,
    discount: "10%",
  },
};

export const sliderData = [
  {
    id: "slide-1",
    backgroundImage: slider1,
    title: "PREMIUM POULTRY EQUIPMENT",
    subtitle: "TRUSTED BY PROFESSIONALS",
    description:
      "High-quality products designed for maximum efficiency and animal welfare",
    cta: "Explore Premium Range",
    ctaLink: "/collections/premium",
    products: [
      { image: BasinChickDrinker, name: "Basin Chick Drinker" },
      { image: flamegun, name: "Flame Gun 4-Way" },
      { image: jumboautomaticdrinkerclassic, name: "Jumbo Automatic Drinker" },
      { image: SprinklerSmall, name: "Small Sprinkler" },
    ],
    accentColor: "from-blue-600 to-indigo-700",
    textColor: "text-blue-50",
    themeColor: "blue",
  },
  {
    id: "slide-2",
    backgroundImage: slider2,
    title: "ADVANCED FARMING SOLUTIONS",
    subtitle: "INNOVATION IN EVERY PRODUCT",
    description:
      "Cutting-edge equipment that improves farm efficiency and productivity",
    cta: "Shop Innovations",
    ctaLink: "/collections/innovations",
    products: [
      { image: chickfeeder3kg, name: "Chick Feeder 3kg" },
      { image: chickcrate, name: "Chick Crate" },
      { image: jumboautomaticdrinkerclassic, name: "Jumbo Automatic Drinker" },
      { image: SprinklerSmall, name: "Small Sprinkler" },
    ],
    accentColor: "from-green-600 to-emerald-700",
    textColor: "text-emerald-50",
    themeColor: "green",
  },
  {
    id: "slide-3",
    backgroundImage: slider4,
    title: "ECO-FRIENDLY PRACTICES",
    subtitle: "SUSTAINABLE POULTRY SOLUTIONS",
    description:
      "Environmentally conscious equipment designed for the modern farm",
    cta: "Discover Eco Solutions",
    ctaLink: "/collections/eco-friendly",
    products: [
      { image: nippledrinker, name: "Nipple Drinker" },
      { image: vaccinator, name: "Vaccinator" },
      { image: jumboautomaticdrinkerclassic, name: "Jumbo Automatic Drinker" },
      { image: SprinklerSmall, name: "Small Sprinkler" },
    ],
    accentColor: "from-amber-500 to-orange-600",
    textColor: "text-amber-50",
    themeColor: "amber",
  },
];


export const getThemeStyles = (theme) => {
  const themes = {
    blue: {
      primary: "bg-blue-600 hover:bg-blue-700 text-white",
      secondary: "bg-white/10 hover:bg-white/20 text-white",
      accent: "bg-blue-600/10 text-blue-600",
      progress: "bg-blue-600",
      indicator: "bg-blue-600",
      border: "border-blue-600",
    },
    green: {
      primary: "bg-green-600 hover:bg-green-700 text-white",
      secondary: "bg-white/10 hover:bg-white/20 text-white",
      accent: "bg-green-600/10 text-green-600",
      progress: "bg-green-600",
      indicator: "bg-green-600",
      border: "border-green-600",
    },
    amber: {
      primary: "bg-amber-500 hover:bg-amber-600 text-white",
      secondary: "bg-white/10 hover:bg-white/20 text-white",
      accent: "bg-amber-500/10 text-amber-500",
      progress: "bg-amber-500",
      indicator: "bg-amber-500",
      border: "border-amber-500",
    },
  };

  return themes[theme] || themes.blue;
};


export const ShimmerEffect = () => (
  <div className="animate-pulse grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 w-full max-w-6xl mx-auto">
    {[1, 2, 3, 4].map((i) => (
      <div key={i} className="bg-white rounded-xl shadow-lg overflow-hidden">
        <Skeleton className="h-40 md:h-52 lg:h-60 w-full" />
        <div className="p-3">
          <Skeleton className="h-4 w-3/4 mb-2" />
          <Skeleton className="h-3 w-1/4 mb-1" />
          <Skeleton className="h-3 w-full" />
        </div>
      </div>
    ))}
  </div>
);