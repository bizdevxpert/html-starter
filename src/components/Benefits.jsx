import React from 'react';
import { FaClock, FaMoneyBillWave, FaChartLine, FaLaptop, FaGlobe, FaUserTie } from 'react-icons/fa';

const Benefits = () => {
  const benefitsList = [
    {
      icon: <FaClock className="text-4xl text-primary mb-4" />,
      title: 'Save Valuable Time',
      description: 'Reclaim hours in your day by delegating time-consuming administrative tasks to our expert virtual assistants.'
    },
    {
      icon: <FaMoneyBillWave className="text-4xl text-primary mb-4" />,
      title: 'Reduce Operational Costs',
      description: 'Cut expenses by up to 70% compared to hiring full-time employees, with no overhead costs for office space or equipment.'
    },
    {
      icon: <FaChartLine className="text-4xl text-primary mb-4" />,
      title: 'Scale Your Business',
      description: 'Easily scale your support team up or down based on your business needs without the hassle of hiring or layoffs.'
    },
    {
      icon: <FaLaptop className="text-4xl text-primary mb-4" />,
      title: 'Access Specialized Skills',
      description: 'Tap into a diverse pool of skilled professionals with expertise in various domains to support your specific needs.'
    },
    {
      icon: <FaGlobe className="text-4xl text-primary mb-4" />,
      title: 'Global Availability',
      description: 'Enjoy 24/7 support with virtual assistants available across different time zones to ensure continuous business operations.'
    },
    {
      icon: <FaUserTie className="text-4xl text-primary mb-4" />,
      title: 'Focus on Core Business',
      description: 'Concentrate on strategic growth initiatives while we handle the day-to-day administrative and operational tasks.'
    }
  ];

  return (
    <section id="benefits" className="section bg-white">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="heading">Why Choose Our Virtual Assistants?</h2>
          <p className="subheading mx-auto">
            Discover how our virtual assistant services can transform your business operations and drive growth.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefitsList.map((benefit, index) => (
            <div key={index} className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow border border-gray-100">
              <div className="flex flex-col items-center text-center">
                {benefit.icon}
                <h3 className="text-xl font-bold mb-3">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <a
            href="https://app.apollo.io/#/meet/bizdevxperts/30-min"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-primary"
          >
            Book Your Free Consultation
          </a>
        </div>
      </div>
    </section>
  );
};

export default Benefits;
