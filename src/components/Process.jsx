import React from 'react';
import { FaComments, FaUserCheck, FaHandshake, FaRocket } from 'react-icons/fa';

const Process = () => {
  const steps = [
    {
      icon: <FaComments className="text-4xl text-white mb-4" />,
      title: 'Consultation',
      description: 'We start with a free consultation to understand your business needs, challenges, and goals.'
    },
    {
      icon: <FaUserCheck className="text-4xl text-white mb-4" />,
      title: 'Matching',
      description: 'We match you with the perfect virtual assistant based on your specific requirements and industry.'
    },
    {
      icon: <FaHandshake className="text-4xl text-white mb-4" />,
      title: 'Onboarding',
      description: 'We handle the smooth integration of your virtual assistant into your existing workflows and systems.'
    },
    {
      icon: <FaRocket className="text-4xl text-white mb-4" />,
      title: 'Growth',
      description: 'With administrative tasks handled, you can focus on strategic initiatives and growing your business.'
    }
  ];

  return (
    <section className="section bg-gray-50">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="heading">How It Works</h2>
          <p className="subheading mx-auto">
            Our simple four-step process to get you set up with the perfect virtual assistant solution.
          </p>
        </div>

        <div className="flex flex-col md:flex-row">
          {steps.map((step, index) => (
            <div key={index} className="flex-1 relative mb-8 md:mb-0">
              <div className="flex flex-col items-center">
                <div className="w-20 h-20 rounded-full bg-primary flex items-center justify-center mb-4 z-10">
                  {step.icon}
                </div>
                
                {index < steps.length - 1 && (
                  <div className="hidden md:block absolute top-10 left-1/2 w-full h-1 bg-primary" style={{ transform: 'translateX(50%)' }}></div>
                )}
                
                <h3 className="text-xl font-bold mb-2">{step.title}</h3>
                <p className="text-center text-gray-600 px-4">{step.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <a
            href="https://app.apollo.io/#/meet/bizdevxperts/30-min"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-primary"
          >
            Start Your Journey Today
          </a>
        </div>
      </div>
    </section>
  );
};

export default Process;
