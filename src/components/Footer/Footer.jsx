import React from 'react';
import { Mail, Phone, Clock, MapPin, Facebook, Twitter, Linkedin, Youtube } from 'lucide-react';
import FloatingActionFooter from './FloatingActionFooter';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  const locations = [
    {
      name: "Hyderabad Factory - Kondapur",
      address: "Industrial Park Kondapur, Medak Dist - 502 336, Telangana",
      phone: "9440406200, 9849059508"
    },
    {
      name: "Karimnagar Factory",
      address: "Behind Petrol Bunk, Padmanagar, Karimnagar - 505002, Telangana",
    },
    {
      name: "Hyderabad Sales Depot - Nagole",
      address: "Plot No: 16, Road No: 2, Mamatanagar Colony, Nagole, Hyderabad - 68",
      phone: "9246659508, 8897911508"
    }
  ];

  const socialLinks = [
    { icon: Facebook, href: "#", label: "Facebook" },
    { icon: Twitter, href: "#", label: "Twitter" },
    { icon: Youtube, href: "#", label: "Youtube" },
    { icon: Linkedin, href: "#", label: "LinkedIn" }
  ];

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/about-us", label: "About" },
    { href: "/products", label: "Products" },
    { href: "/contact", label: "Contact" }
  ];

  return (
    <footer className="bg-gray-900 text-gray-200">
      <div className="container mx-auto px-4 py-12">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-6">
            <img
              src="/logo.png"
              alt="Krishna Poultry Equipment Logo"
              className="h-12 w-auto"
            />
            <nav>
              <ul className="space-y-3">
                {navLinks.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="hover:text-white transition-colors duration-200 block"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          </div>

          {/* Contact Information */}
          <div className="space-y-6">
            <h3 className="text-white text-lg font-semibold">Contact Us</h3>
            <div className="space-y-4">
              {locations.map((location) => (
                <div key={location.name} className="space-y-2">
                  <h4 className="font-medium text-white">{location.name}</h4>
                  <p className="text-sm flex items-start space-x-2">
                    <MapPin className="h-5 w-5 mt-0.5 flex-shrink-0" />
                    <span>{location.address}</span>
                  </p>
                  {location.phone && (
                    <p className="text-sm flex items-center space-x-2">
                      <Phone className="h-5 w-5" />
                      <span>{location.phone}</span>
                    </p>
                  )}
                </div>
              ))}
              <p className="text-sm flex items-center space-x-2">
                <Mail className="h-5 w-5" />
                <a
                  href="mailto:info@krishnapoultry.com"
                  className="hover:text-white"
                >
                  info@krishnapoultry.com
                </a>
              </p>
            </div>
          </div>

          {/* Business Hours */}
          <div className="space-y-6">
            <h3 className="text-white text-lg font-semibold">Opening Hours</h3>
            <div className="space-y-3">
              <div className="flex items-start space-x-2">
                <Clock className="h-5 w-5 mt-0.5" />
                <div>
                  <p>Monday - Saturday</p>
                  <p className="text-gray-400">9:00 AM - 9:00 PM</p>
                </div>
              </div>
              <div className="flex items-start space-x-2">
                <Clock className="h-5 w-5 mt-0.5" />
                <div>
                  <p>Sunday</p>
                  <p className="text-gray-400">10:00 AM - 8:00 PM</p>
                </div>
              </div>
            </div>
          </div>

          {/* Map */}
          <div className="space-y-6">
            <h3 className="text-white text-lg font-semibold">Location</h3>
            <div className="rounded-lg overflow-hidden">
              <iframe
                className="w-full h-48"
                src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15503130.135087622!2d79.097002!3d18.440857!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bccdfd080c233b3%3A0xdffdfa7ea808c2b6!2sSai%20krishna%20poultry%20equipments!5e0!3m2!1sen!2sin!4v1731940118279!5m2!1sen!2sin"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Krishna Poultry Equipment Location"
              />
            </div>
          </div>
        </div>

        {/* Social Links & Copyright */}
        <div className="mt-12 pt-8 border-t border-gray-800">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="flex space-x-6">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  className="text-gray-400 hover:text-white transition-colors duration-200"
                  aria-label={social.label}
                >
                  <social.icon className="h-6 w-6" />
                </a>
              ))}
            </div>
            <p className="text-gray-400 text-sm">
              © {currentYear} Krishna Poultry Equipment. All rights reserved.
            </p>
          </div>
        </div>
      </div>
      <FloatingActionFooter />
    </footer>
  );
};

export default Footer;