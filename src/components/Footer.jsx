import React from 'react';
import { FaLinkedin, FaFacebook, FaInstagram, FaPinterest, FaTwitter, FaYoutube, FaGlobe } from 'react-icons/fa';
import { Link } from 'react-scroll';

const Footer = () => {
  const socialLinks = [
    { icon: <FaLinkedin />, url: 'https://www.linkedin.com/company/businessdevelopment-experts', name: 'LinkedIn' },
    { icon: <FaFacebook />, url: 'https://www.facebook.com/480956031758876', name: 'Facebook' },
    { icon: <FaInstagram />, url: 'https://www.instagram.com/bizdevxperts/', name: 'Instagram' },
    { icon: <FaPinterest />, url: 'https://www.pinterest.com/bizdevxperts/', name: 'Pinterest' },
    { icon: <FaTwitter />, url: 'https://www.x.com/bizdevxperts', name: 'X' },
    { icon: <FaYoutube />, url: 'https://www.youtube.com/@bizdevxpert', name: 'YouTube' },
    { icon: <FaGlobe />, url: 'https://bizdevxperts.com/', name: 'Website' }
  ];

  const quickLinks = [
    { name: 'Home', to: 'hero' },
    { name: 'Services', to: 'services' },
    { name: 'Benefits', to: 'benefits' },
    { name: 'Testimonials', to: 'testimonials' },
    { name: 'Contact', to: 'cta' }
  ];

  return (
    <footer className="bg-dark text-white pt-16 pb-8">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          <div>
            <h3 className="text-2xl font-bold mb-6">BizDevXperts</h3>
            <p className="mb-6 text-gray-300">
              Professional virtual assistant services to help your business grow, scale, and succeed in today's competitive market.
            </p>
            <div className="flex flex-wrap gap-4">
              {socialLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white hover:text-primary transition-colors text-xl"
                  aria-label={link.name}
                >
                  {link.icon}
                </a>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-6">Quick Links</h3>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <Link
                    to={link.to}
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={500}
                    className="text-gray-300 hover:text-white transition-colors cursor-pointer"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
              <li>
                <a
                  href="https://bizdevxperts.com/services"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  All Services
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-6">Contact Us</h3>
            <p className="text-gray-300 mb-4">
              Ready to transform your business with our virtual assistant services? Reach out to us today.
            </p>
            <a
              href="https://app.apollo.io/#/meet/bizdevxperts/30-min"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary"
            >
              Book Free Consultation
            </a>
          </div>
        </div>

        <div className="pt-8 border-t border-gray-700 text-center text-gray-400">
          <p>
            &copy; {new Date().getFullYear()} BizDevXperts. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
