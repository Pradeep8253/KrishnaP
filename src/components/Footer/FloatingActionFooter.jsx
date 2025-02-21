import { FaWhatsapp, FaPhoneAlt, FaArrowUp } from "react-icons/fa";

const FloatingActionFooter = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="bg-black backdrop-blur-sm fixed bottom-0 w-full py-3 px-4 flex justify-between items-center z-50">
      <span className="text-sm font-medium text-center text-white">
        Krishna Polutry Equip Manufacturer & Trader
      </span>

      {/* Fixed Action Buttons */}
      <div className="fixed bottom-33 right-4 space-y-3">
        <a
          href="https://wa.me/7678433751"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-green-500 p-3 rounded-full flex items-center justify-center hover:bg-green-600 transition-all shadow-lg"
        >
          <FaWhatsapp className="text-xl text-white" />
        </a>

        <a
          href="tel:7678433751"
          className="bg-blue-500 p-3 rounded-full flex items-center justify-center hover:bg-blue-600 transition-all shadow-lg"
        >
          <FaPhoneAlt className="text-xl text-white" />
        </a>
      </div>

      <button
        onClick={scrollToTop}
        className="fixed bottom-20 right-4 bg-red-500 p-3 rounded-full flex items-center justify-center hover:bg-red-600 transition-all shadow-lg"
      >
        <FaArrowUp className="text-xl text-white" />
      </button>
    </div>
  );
};

export default FloatingActionFooter;
