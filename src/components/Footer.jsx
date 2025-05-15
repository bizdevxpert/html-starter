import React from 'react';
import { FaFacebook, FaTwitter, FaLinkedin, FaInstagram, FaEnvelope, FaPhoneAlt, FaMapMarkerAlt } from 'react-icons/fa';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8 relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PHBhdGggZD0iTTM2IDM0YzAtMi4yIDEuOC00IDQtNHM0IDEuOCA0IDQtMS44IDQtNCA0LTQtMS44LTQtNHoiLz48L2c+PC9nPjwvc3ZnPg==')] opacity-10"></div>
      
      <div className="container relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          <div>
            <h3 className="text-2xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 to-purple-400">BizDevXperts</h3>
            <p className="text-gray-400 mb-6">
              Professional virtual assistant services to help you reclaim your time and grow your business.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300 hover:scale-110 transform">
                <FaFacebook size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300 hover:scale-110 transform">
                <FaTwitter size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300 hover:scale-110 transform">
                <FaLinkedin size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300 hover:scale-110 transform">
                <FaInstagram size={20} />
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="text-lg font-bold mb-6 text-white">Quick Links</h4>
            <ul className="space-y-3">
              <li>
                <a href="/" className="text-gray-400 hover:text-white transition-colors duration-300 flex items-center">
                  <span className="mr-2">→</span> Home
                </a>
              </li>
              <li>
                <a href="/services" className="text-gray-400 hover:text-white transition-colors duration-300 flex items-center">
                  <span className="mr-2">→</span> Services
                </a>
              </li>
              <li>
                <a href="/about" className="text-gray-400 hover:text-white transition-colors duration-300 flex items-center">
                  <span className="mr-2">→</span> About Us
                </a>
              </li>
              <li>
                <a href="/contact" className="text-gray-400 hover:text-white transition-colors duration-300 flex items-center">
                  <span className="mr-2">→</span> Contact
                </a>
              </li>
              <li>
                <a href="/blog" className="text-gray-400 hover:text-white transition-colors duration-300 flex items-center">
                  <span className="mr-2">→</span> Blog
                </a>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-bold mb-6 text-white">Our Services</h4>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300 flex items-center">
                  <span className="mr-2">→</span> Calendar Management
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300 flex items-center">
                  <span className="mr-2">→</span> Email Management
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300 flex items-center">
                  <span className="mr-2">→</span> Customer Support
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300 flex items-center">
                  <span className="mr-2">→</span> Social Media
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300 flex items-center">
                  <span className="mr-2">→</span> View All Services
                </a>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-bold mb-6 text-white">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex items-start">
                <FaEnvelope className="text-indigo-400 mt-1 mr-3" />
                <span className="text-gray-400">info@bizdevxperts.com</span>
              </li>
              <li className="flex items-start">
                <FaPhoneAlt className="text-indigo-400 mt-1 mr-3" />
                <span className="text-gray-400">(555) 123-4567</span>
              </li>
              <li className="flex items-start">
                <FaMapMarkerAlt className="text-indigo-400 mt-1 mr-3" />
                <span className="text-gray-400">123 Business Ave, Suite 100<br />New York, NY 10001</span>
              </li>
            </ul>
            <div className="mt-6">
              <a 
                href="https://app.apollo.io/#/meet/bizdevxperts/30-min" 
                className="bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white font-bold py-3 px-6 rounded-full shadow-md hover:shadow-lg transition-all duration-300 inline-block"
                target="_blank"
                rel="noopener noreferrer"
              >
                Book a Consultation
              </a>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-800 pt-8 text-center text-gray-500">
          <p>&copy; {currentYear} BizDevXperts. All rights reserved.</p>
          <div className="mt-2 flex justify-center space-x-6 text-sm">
            <a href="#" className="hover:text-gray-300 transition-colors duration-300">Privacy Policy</a>
            <a href="#" className="hover:text-gray-300 transition-colors duration-300">Terms of Service</a>
            <a href="#" className="hover:text-gray-300 transition-colors duration-300">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
