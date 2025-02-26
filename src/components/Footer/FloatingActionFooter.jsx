import { FaWhatsapp, FaPhoneAlt, FaArrowUp } from "react-icons/fa";

const FloatingActionFooter = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="fixed bottom-4 right-4 flex flex-col gap-3">
      {/* WhatsApp Button */}
      <a
        href="https://wa.me/yourphonenumber"
        target="_blank"
        rel="noopener noreferrer"
        className="bg-green-500 text-white p-3 rounded-full shadow-lg hover:bg-green-600"
      >
        <FaWhatsapp size={24} />
      </a>

      {/* Phone Call Button */}
      <a
        href="tel:+yourphonenumber"
        className="bg-blue-500 text-white p-3 rounded-full shadow-lg hover:bg-blue-600"
      >
        <FaPhoneAlt size={24} />
      </a>

      {/* Scroll to Top Button */}
      <button
        onClick={scrollToTop}
        className="bg-gray-500 text-white p-3 rounded-full shadow-lg hover:bg-gray-600"
      >
        <FaArrowUp size={24} />
      </button>
    </div>
  );
};

export default FloatingActionFooter;
