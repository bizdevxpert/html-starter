import React from 'react';

const Hero = () => {
  return (
    <section className="pt-32 pb-20 bg-gradient-to-r from-indigo-50 to-blue-50">
      <div className="container">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-gray-900">
            Virtual Assistant Services <span className="text-indigo-600">Tailored for Your Business</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-700 mb-10">
            Reclaim your time and focus on growth while our expert virtual assistants handle your administrative tasks.
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-6">
            <a 
              href="https://app.apollo.io/#/meet/bizdevxperts/30-min" 
              className="btn-primary"
              target="_blank"
              rel="noopener noreferrer"
            >
              Book Your Free Consultation
            </a>
            <a 
              href="#features" 
              className="btn-outline"
            >
              Explore Our Services
            </a>
          </div>
          
          <p className="mt-6 text-gray-600">
            Trusted by 100+ businesses across industries
          </p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
