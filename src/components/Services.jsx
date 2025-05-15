import React from 'react';
import { FaCalendarCheck, FaEnvelope, FaChartLine, FaSearch, FaFileAlt, FaUsers } from 'react-icons/fa';

const Services = () => {
  const servicesList = [
    {
      icon: <FaCalendarCheck className="text-4xl text-primary mb-4" />,
      title: 'Calendar Management',
      description: 'We handle scheduling, appointments, and reminders so you never miss an important meeting.'
    },
    {
      icon: <FaEnvelope className="text-4xl text-primary mb-4" />,
      title: 'Email Management',
      description: 'We organize, prioritize, and respond to emails, keeping your inbox clean and manageable.'
    },
    {
      icon: <FaChartLine className="text-4xl text-primary mb-4" />,
      title: 'Data Entry & Analysis',
      description: 'We process data accurately and provide insights to help you make informed business decisions.'
    },
    {
      icon: <FaSearch className="text-4xl text-primary mb-4" />,
      title: 'Research',
      description: 'We conduct thorough research on markets, competitors, and opportunities to keep you ahead.'
    },
    {
      icon: <FaFileAlt className="text-4xl text-primary mb-4" />,
      title: 'Document Preparation',
      description: 'We create, edit, and format professional documents, presentations, and reports.'
    },
    {
      icon: <FaUsers className="text-4xl text-primary mb-4" />,
      title: 'Customer Support',
      description: 'We provide responsive and professional customer service to enhance your client relationships.'
    }
  ];

  return (
    <section id="services" className="section bg-white">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="heading">Our Virtual Assistant Services</h2>
          <p className="subheading mx-auto">
            We offer a comprehensive range of virtual assistant services tailored to meet your specific business needs.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {servicesList.map((service, index) => (
            <div key={index} className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow border border-gray-100">
              <div className="flex flex-col items-center text-center">
                {service.icon}
                <h3 className="text-xl font-bold mb-3">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <a
            href="https://bizdevxperts.com/services"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-outline"
          >
            View All Services
          </a>
        </div>
      </div>
    </section>
  );
};

export default Services;
