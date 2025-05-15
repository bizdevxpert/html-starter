import React from 'react';
import { FaCalendarAlt, FaEnvelope, FaDatabase, FaSearch, FaChartLine, FaHeadset, FaFileAlt, FaLaptopCode, FaUserTie, FaPhoneAlt, FaShoppingCart, FaTasks } from 'react-icons/fa';

const features = [
  {
    icon: <FaCalendarAlt className="text-indigo-600 text-3xl mb-4" />,
    title: "Calendar Management",
    description: "Never miss an appointment again. Our VAs handle scheduling, reminders, and meeting coordination."
  },
  {
    icon: <FaEnvelope className="text-indigo-600 text-3xl mb-4" />,
    title: "Email Management",
    description: "Reclaim hours from your inbox with professional email filtering, responding, and organization."
  },
  {
    icon: <FaDatabase className="text-indigo-600 text-3xl mb-4" />,
    title: "Data Entry & Management",
    description: "Accurate, efficient data processing and CRM updates to keep your business information current."
  },
  {
    icon: <FaSearch className="text-indigo-600 text-3xl mb-4" />,
    title: "Research & Reports",
    description: "Detailed market research, competitor analysis, and custom reports tailored to your needs."
  },
  {
    icon: <FaChartLine className="text-indigo-600 text-3xl mb-4" />,
    title: "Social Media Management",
    description: "Consistent, engaging social presence across all platforms to build your brand and audience."
  },
  {
    icon: <FaHeadset className="text-indigo-600 text-3xl mb-4" />,
    title: "Customer Support",
    description: "Professional, responsive customer service to maintain satisfaction and loyalty."
  },
  {
    icon: <FaFileAlt className="text-indigo-600 text-3xl mb-4" />,
    title: "Document Preparation",
    description: "Professional creation and formatting of documents, presentations, and reports."
  },
  {
    icon: <FaLaptopCode className="text-indigo-600 text-3xl mb-4" />,
    title: "Website Management",
    description: "Keep your website updated with fresh content, monitor analytics, and handle basic maintenance."
  },
  {
    icon: <FaUserTie className="text-indigo-600 text-3xl mb-4" />,
    title: "Executive Assistance",
    description: "Comprehensive support for executives including travel arrangements and complex scheduling."
  },
  {
    icon: <FaPhoneAlt className="text-indigo-600 text-3xl mb-4" />,
    title: "Phone Answering",
    description: "Professional call handling, message taking, and appointment scheduling services."
  },
  {
    icon: <FaShoppingCart className="text-indigo-600 text-3xl mb-4" />,
    title: "E-commerce Support",
    description: "Product listing, inventory management, and order processing for online stores."
  },
  {
    icon: <FaTasks className="text-indigo-600 text-3xl mb-4" />,
    title: "Project Management",
    description: "Task coordination, deadline tracking, and team communication to keep projects on schedule."
  }
];

const Features = () => {
  return (
    <section id="features" className="section bg-white">
      <div className="container">
        <div className="text-center mb-16">
          <span className="bg-indigo-100 text-indigo-800 text-sm font-medium px-4 py-1.5 rounded-full inline-block mb-4">Our Services</span>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
            Comprehensive Virtual Assistant <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600">Solutions</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our professional VAs handle the time-consuming tasks that keep you from focusing on what matters most - growing your business.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 md:gap-8">
          {features.map((feature, index) => (
            <div key={index} className="bg-white rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-all duration-300 overflow-hidden group">
              <div className="p-6">
                <div className="bg-indigo-50 w-16 h-16 rounded-lg flex items-center justify-center mb-5 group-hover:bg-indigo-100 transition-colors duration-300">
                  {React.cloneElement(feature.icon, { className: "text-indigo-600 text-2xl" })}
                </div>
                <h3 className="text-xl font-bold mb-3 text-gray-900 group-hover:text-indigo-600 transition-colors duration-300">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <div className="inline-block bg-gray-50 p-1 rounded-full">
            <a 
              href="https://app.apollo.io/#/meet/bizdevxperts/30-min" 
              className="bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white font-bold py-3 px-8 rounded-full shadow-md hover:shadow-lg transition-all duration-300 inline-block"
              target="_blank"
              rel="noopener noreferrer"
            >
              Book Your Free Consultation
            </a>
          </div>
          <p className="mt-4 text-gray-500">No obligation, cancel anytime</p>
        </div>
      </div>
    </section>
  );
};

export default Features;
