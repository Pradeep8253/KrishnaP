import React, { useState, useEffect, useRef } from "react";
import "../Header/Header.css"
import TopHeader from "./TopHeader"
import { Link } from "react-router-dom";
import {
  Menu,
  X,
  ChevronDown,
  Phone,
  Facebook,
  Twitter,
  Linkedin,
  Youtube,
  MapPin,
  Mail,
} from "lucide-react";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const headerRef = useRef(null);
  const mobileMenuRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    const handleClickOutside = (event) => {
      if (
        isMobileMenuOpen &&
        mobileMenuRef.current &&
        !mobileMenuRef.current.contains(event.target) &&
        !headerRef.current.contains(event.target)
      ) {
        setIsMobileMenuOpen(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isMobileMenuOpen]);

  // Close mobile menu when window is resized to desktop width
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024 && isMobileMenuOpen) {
        setIsMobileMenuOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [isMobileMenuOpen]);

  const productLinks = [
    { name: "FEEDER", path: "/products/feeder" },
    { name: "DRINKER", path: "/products/drinker" },
    { name: "BROODER & DEBEAKER", path: "/products/brooder-debeaker" },
    { name: "BIRD TRAY", path: "/products/bird-tray" },
    { name: "OTHERS", path: "/products/others" },
  ];

  const handleNavLinkClick = () => {
    if (isMobileMenuOpen) {
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <header
      ref={headerRef}
      className={`fixed w-full z-50 transition-all duration-500 ${
        isScrolled
          ? "bg-white shadow-lg"
          : "bg-gradient-to-b from-danger/40 to-transparent"
      }`}
    >
      {/* Top Bar */}
      {/* <TopHeader /> */}

      {/* Main Header */}
      <div
        className="container mx-auto px-4 transition-all duration-300"
        style={{
          paddingTop: isScrolled ? "0.75rem" : "1rem",
          paddingBottom: isScrolled ? "0.75rem" : "1rem",
        }}
      >
        <div className="flex items-center justify-between">
          {/* Logo Section */}
          <div className="flex items-center space-x-4">
            <Link to="/" className="group relative overflow-hidden">
              <div className="absolute inset-0 bg-red-600 rounded-full scale-0 group-hover:scale-100 transition-transform duration-300 opacity-0 group-hover:opacity-10"></div>
              <img
                src="/logo.png"
                alt="Krishna Poultry Logo"
                className={`transition-all duration-300 ${
                  isScrolled ? "h-16" : "h-16"
                } w-auto`}
              />
            </Link>
            <div
              className={`hidden md:block  duration-300 ${
                isScrolled ? "opacity-100" : "opacity-90"
              }`}
            >
              {/* <h1 className="text-red-500 font-bold text-xl tracking-tight  ">
                KRISHNA POULTRY EQUIP
              </h1>
              <p
                className={`text-sm  transition-colors duration-300 tracking-tight ${
                  isScrolled ? "text-white" : "text-white"
                }`}
              >
                MANUFACTURERS & TRADER
              </p> */}
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            <Link
              to="/"
              className={`nav-link ${
                isScrolled ? "text-gray-800" : "text-white"
              }`}
            >
              HOME
            </Link>
            <Link
              to="/about"
              className={`nav-link ${
                isScrolled ? "text-gray-800" : "text-white"
              }`}
            >
              ABOUT
            </Link>

            {/* Products Dropdown */}
            <div
              className="relative group"
              onMouseEnter={() => setActiveDropdown("products")}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <Link
                to="/products"
                className={`nav-link flex items-center ${
                  isScrolled ? "text-gray-800" : "text-white"
                }`}
              >
                PRODUCTS
                <ChevronDown
                  className={`ml-1 w-4 h-4 transition-transform duration-300 ${
                    activeDropdown === "products" ? "rotate-180" : ""
                  }`}
                />
              </Link>

              <div
                className={`absolute top-full left-0 w-64 bg-white shadow-xl rounded-lg py-2 transition-all duration-300 transform ${
                  activeDropdown === "products"
                    ? "opacity-100 visible translate-y-0"
                    : "opacity-0 invisible -translate-y-4"
                }`}
              >
                {productLinks.map((product, index) => (
                  <Link
                    key={product.path}
                    to={product.path}
                    className="block px-5 py-2 text-gray-700 hover:bg-red-50 hover:text-red-700 transition-all duration-200"
                    style={{
                      transitionDelay: `${index * 50}ms`,
                      opacity: activeDropdown === "products" ? 1 : 0,
                      transform:
                        activeDropdown === "products"
                          ? "translateX(0)"
                          : "translateX(-10px)",
                    }}
                  >
                    {product.name}
                  </Link>
                ))}
              </div>
            </div>

            <Link
              to="/contact"
              className={`nav-link ${
                isScrolled ? "text-gray-800" : "text-white"
              }`}
            >
              CONTACT
            </Link>

            <a href="tel:9246659508" className="call-button group">
              <span className="relative z-10">Call Now</span>
            </a>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2 relative z-20 overflow-hidden rounded-md group"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
          >
            <span className="absolute inset-0 bg-red-100 scale-0 group-hover:scale-100 transition-transform duration-200 rounded-md"></span>
            {isMobileMenuOpen ? (
              <X
                className={`w-6 h-6 relative z-10 transition-colors duration-200 ${
                  isScrolled ? "text-gray-800" : "text-white"
                } group-hover:text-red-700`}
              />
            ) : (
              <Menu
                className={`w-6 h-6 relative z-10 transition-colors duration-200 ${
                  isScrolled ? "text-gray-800" : "text-white"
                } group-hover:text-red-700`}
              />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Overlay */}
      <div
        className={`fixed inset-0 bg-black/70 backdrop-blur-sm transition-opacity duration-300 z-40 lg:hidden ${
          isMobileMenuOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
        onClick={() => setIsMobileMenuOpen(false)}
      ></div>

      {/* Mobile Navigation Panel */}
      <div
        ref={mobileMenuRef}
        className={`fixed top-0 right-0 h-full w-4/5 max-w-sm bg-white shadow-xl z-50 transition-transform duration-500 ease-in-out transform lg:hidden ${
          isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="p-5 flex justify-between items-center border-b border-gray-200">
          <div>
            <h2 className="text-red-500 font-bold text-xl">KRISHNA POULTRY</h2>
            <p className="text-gray-500 text-sm">MANUFACTURERS & TRADER</p>
          </div>
          <button
            onClick={() => setIsMobileMenuOpen(false)}
            className="p-2 rounded-full hover:bg-red-50 transition-colors"
          >
            <X className="w-6 h-6 text-gray-700" />
          </button>
        </div>

        <nav className="p-5">
          <div className="space-y-1">
            <Link
              to="/"
              className="mobile-nav-link"
              onClick={handleNavLinkClick}
            >
              HOME
            </Link>

            <Link
              to="/about"
              className="mobile-nav-link"
              onClick={handleNavLinkClick}
            >
              ABOUT
            </Link>

            <div className="mobile-dropdown">
              <button
                className="w-full flex items-center justify-items-start mobile-nav-link"
                onClick={() =>
                  setActiveDropdown(
                    activeDropdown === "mobile-products"
                      ? null
                      : "mobile-products"
                  )
                }
              >
                PRODUCTS
                <ChevronDown
                  className={`w-4 h-4 transition-transform duration-300 ${
                    activeDropdown === "mobile-products" ? "rotate-180" : ""
                  }`}
                />
              </button>

              <div
                className={`space-y-1 pl-4 overflow-hidden transition-all duration-300 ${
                  activeDropdown === "mobile-products"
                    ? "max-h-96 opacity-100"
                    : "max-h-0 opacity-0"
                }`}
              >
                {productLinks.map((product, index) => (
                  <Link
                    key={product.path}
                    to={product.path}
                    className="block py-2 pl-2 border-l-2 border-red-100 text-gray-600 hover:text-red-700 hover:border-red-700 transition-all"
                    onClick={handleNavLinkClick}
                    style={{
                      transitionDelay: `${index * 50}ms`,
                      opacity: activeDropdown === "mobile-products" ? 1 : 0,
                      transform:
                        activeDropdown === "mobile-products"
                          ? "translateX(0)"
                          : "translateX(-10px)",
                    }}
                  >
                    {product.name}
                  </Link>
                ))}
              </div>
            </div>

            <Link
              to="/contact"
              className="mobile-nav-link"
              onClick={handleNavLinkClick}
            >
              CONTACT
            </Link>
          </div>

          <div className="mt-8 pt-6 border-t border-gray-200">
            <a
              href="tel:9246659508"
              className="flex items-center space-x-3 text-gray-700 hover:text-red-700 transition-colors"
              onClick={handleNavLinkClick}
            >
              <Phone size={20} />
              <span className="font-medium">924-665-9508</span>
            </a>

            <a
              href="mailto:contact@krishnapoultry.com"
              className="flex items-center space-x-3 mt-4 text-gray-700 hover:text-red-700 transition-colors"
              onClick={handleNavLinkClick}
            >
              <Mail size={20} />
              <span className="font-medium">contact@krishnapoultry.com</span>
            </a>

            <div className="flex space-x-6 mt-6">
              <a
                href="#"
                aria-label="Facebook"
                className="text-gray-500 hover:text-red-700 transition-colors"
              >
                <Facebook size={20} />
              </a>
              <a
                href="#"
                aria-label="Twitter"
                className="text-gray-500 hover:text-red-700 transition-colors"
              >
                <Twitter size={20} />
              </a>
              <a
                href="#"
                aria-label="YouTube"
                className="text-gray-500 hover:text-red-700 transition-colors"
              >
                <Youtube size={20} />
              </a>
              <a
                href="#"
                aria-label="LinkedIn"
                className="text-gray-500 hover:text-red-700 transition-colors"
              >
                <Linkedin size={20} />
              </a>
            </div>
          </div>
        </nav>
      </div>

      {/* Custom CSS */}
    </header>
  );
};

export default Header;
