import React, { useState, useEffect } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'}`}>
      <div className="container">
        <nav className="flex justify-between items-center">
          <a href="/" className="text-2xl font-bold text-indigo-600">
            BizDevXperts
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <div className="space-x-6">
              <a href="/" className="text-gray-700 hover:text-indigo-600 font-medium">Home</a>
              <a href="/services" className="text-indigo-600 font-medium">Services</a>
              <a href="/about" className="text-gray-700 hover:text-indigo-600 font-medium">About</a>
              <a href="/contact" className="text-gray-700 hover:text-indigo-600 font-medium">Contact</a>
            </div>
            
            <a 
              href="https://app.apollo.io/#/meet/bizdevxperts/30-min" 
              className="btn-primary"
              target="_blank"
              rel="noopener noreferrer"
            >
              Book a Call
            </a>
          </div>

          {/* Mobile Navigation Toggle */}
          <button 
            className="md:hidden text-gray-700 focus:outline-none"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>
        </nav>

        {/* Mobile Navigation Menu */}
        {isOpen && (
          <div className="md:hidden bg-white mt-4 py-4 rounded-lg shadow-lg">
            <div className="flex flex-col space-y-4 px-4">
              <a href="/" className="text-gray-700 hover:text-indigo-600 font-medium py-2">Home</a>
              <a href="/services" className="text-indigo-600 font-medium py-2">Services</a>
              <a href="/about" className="text-gray-700 hover:text-indigo-600 font-medium py-2">About</a>
              <a href="/contact" className="text-gray-700 hover:text-indigo-600 font-medium py-2">Contact</a>
              
              <a 
                href="https://app.apollo.io/#/meet/bizdevxperts/30-min" 
                className="btn-primary text-center"
                target="_blank"
                rel="noopener noreferrer"
              >
                Book a Call
              </a>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Navbar;
