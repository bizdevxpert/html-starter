import React from 'react';
import { FaCalendarAlt, FaEnvelope, FaDatabase, FaSearch, FaChartLine, FaHeadset } from 'react-icons/fa';

const features = [
  {
    icon: <FaCalendarAlt className="text-primary text-3xl mb-4" />,
    title: "Calendar Management",
    description: "Never miss an appointment again. Our VAs handle scheduling, reminders, and meeting coordination."
  },
  {
    icon: <FaEnvelope className="text-primary text-3xl mb-4" />,
    title: "Email Management",
    description: "Reclaim hours from your inbox with professional email filtering, responding, and organization."
  },
  {
    icon: <FaDatabase className="text-primary text-3xl mb-4" />,
    title: "Data Entry & Management",
    description: "Accurate, efficient data processing and CRM updates to keep your business information current."
  },
  {
    icon: <FaSearch className="text-primary text-3xl mb-4" />,
    title: "Research & Reports",
    description: "Detailed market research, competitor analysis, and custom reports tailored to your needs."
  },
  {
    icon: <FaChartLine className="text-primary text-3xl mb-4" />,
    title: "Social Media Management",
    description: "Consistent, engaging social presence across all platforms to build your brand and audience."
  },
  {
    icon: <FaHeadset className="text-primary text-3xl mb-4" />,
    title: "Customer Support",
    description: "Professional, responsive customer service to maintain satisfaction and loyalty."
  }
];

const Features = () => {
  return (
    <section id="features" className="section bg-gray-50">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="heading">How Our Virtual Assistants Help You</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our professional VAs handle the time-consuming tasks that keep you from focusing on what matters most - growing your business.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="feature-card">
              <div className="text-center">
                {feature.icon}
                <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <p className="text-xl font-medium mb-6">Ready to reclaim your time and focus on growth?</p>
          <a 
            href="https://app.apollo.io/#/meet/bizdevxperts/30-min" 
            className="btn-primary"
            target="_blank"
            rel="noopener noreferrer"
          >
            Book Your Free Consultation
          </a>
        </div>
      </div>
    </section>
  );
};

export default Features;
