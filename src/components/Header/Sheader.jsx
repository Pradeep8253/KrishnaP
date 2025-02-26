import React, { useState, useEffect, useRef } from "react";
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
import { Button } from "@/components/ui/button";
// import { Card } from "@/components/ui/card";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
} from "@/components/ui/dropdown-menu";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Card } from "../ui/card";

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
      <div
        className="container mx-auto px-4 transition-all duration-300"
        style={{
          paddingTop: isScrolled ? "0.75rem" : "1rem",
          paddingBottom: isScrolled ? "0.75rem" : "1rem",
        }}
      >
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <Link to="/" className="group relative overflow-hidden">
              <div className="absolute inset-0 bg-red-600 rounded-full scale-0 group-hover:scale-100 transition-transform duration-300 opacity-0 group-hover:opacity-10"></div>
              <img
                src="/logo.png"
                alt="Krishna Poultry Logo"
                className={`transition-all duration-300 ${
                  isScrolled ? "h-16" : "h-15"
                } w-auto`}
              />
            </Link>
          </div>

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

            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" className="flex items-center">
                  PRODUCTS
                  <ChevronDown className="ml-1 w-4 h-4" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                {productLinks.map((product) => (
                  <DropdownMenuItem key={product.path}>
                    <Link to={product.path}>{product.name}</Link>
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>

            <Link
              to="/contact"
              className={`nav-link ${
                isScrolled ? "text-gray-800" : "text-white"
              }`}
            >
              CONTACT
            </Link>

            <Button asChild>
              <a href="tel:9246659508">Call Now</a>
            </Button>
          </nav>

          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" className="lg:hidden">
                <Menu className="w-6 h-6" />
              </Button>
            </SheetTrigger>
            <SheetContent>
              <div className="p-5 flex justify-between items-center border-b border-gray-200">
                <div>
                  <h2 className="text-red-500 font-bold text-xl">
                    KRISHNA POULTRY
                  </h2>
                  <p className="text-gray-500 text-sm">
                    MANUFACTURERS & TRADER
                  </p>
                </div>
                <Button
                  variant="ghost"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  <X className="w-6 h-6" />
                </Button>
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
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button
                        variant="ghost"
                        className="w-full flex items-center justify-start"
                      >
                        PRODUCTS
                        <ChevronDown className="w-4 h-4 ml-1" />
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent>
                      {productLinks.map((product) => (
                        <DropdownMenuItem key={product.path}>
                          <Link to={product.path}>{product.name}</Link>
                        </DropdownMenuItem>
                      ))}
                    </DropdownMenuContent>
                  </DropdownMenu>
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
                  >
                    <Phone size={20} />
                    <span className="font-medium">924-665-9508</span>
                  </a>
                  <a
                    href="mailto:contact@krishnapoultry.com"
                    className="flex items-center space-x-3 mt-4 text-gray-700 hover:text-red-700 transition-colors"
                  >
                    <Mail size={20} />
                    <span className="font-medium">
                      contact@krishnapoultry.com
                    </span>
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
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
};

export default Header;
