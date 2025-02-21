import React from 'react'
import { Facebook, Twitter, Youtube, Linkedin, Phone, Mail } from 'lucide-react';

const TopHeader = () => {
  return (
    <div>
      <div className="bg-red-700 text-white py-2 px-4">
        <div className="container mx-auto flex flex-wrap justify-between items-center">
          <div className="flex flex-wrap items-center space-x-4 md:space-x-6">
            <a
              href="tel:9246659508"
              className="flex items-center hover:text-white/90 transition-colors"
            >
              <Phone size={16} className="mr-2" />
              <span className="text-sm md:text-base">924-665-9508</span>
            </a>
            <a
              href="mailto:contact@krishnapoultry.com"
              className="hidden md:flex items-center hover:text-white/90 transition-colors"
            >
              <Mail size={16} className="mr-2" />
              <span className="text-sm md:text-base">
                contact@krishnapoultry.com
              </span>
            </a>
          </div>
          <div className="flex space-x-5">
            <a href="#" aria-label="Facebook" className="social-icon-link">
              <Facebook  size={16} />
            </a>
            <a href="#" aria-label="Twitter" className="social-icon-link">
              <Twitter size={16} />
            </a>
            <a href="#" aria-label="YouTube" className="social-icon-link">
              <Youtube size={16} />
            </a>
            <a href="#" aria-label="LinkedIn" className="social-icon-link">
              <Linkedin size={16} />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TopHeader