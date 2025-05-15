import React from 'react';

const CallToAction = () => {
  return (
    <section className="py-20 bg-gradient-to-r from-indigo-600 to-blue-500 text-white">
      <div className="container">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Transform Your Business Operations?
          </h2>
          <p className="text-xl mb-10 opacity-90">
            Join hundreds of business owners who have reclaimed their time and accelerated their growth with our virtual assistant services.
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-6">
            <a 
              href="https://app.apollo.io/#/meet/bizdevxperts/30-min" 
              className="bg-white text-primary hover:bg-gray-100 font-bold py-4 px-8 rounded-lg transition-colors duration-300 text-center"
              target="_blank"
              rel="noopener noreferrer"
            >
              Book Your Free Consultation
            </a>
            <a 
              href="https://bizdevxperts.com/services" 
              className="bg-transparent hover:bg-indigo-700 text-white border-2 border-white font-bold py-4 px-8 rounded-lg transition-colors duration-300 text-center"
              target="_blank"
              rel="noopener noreferrer"
            >
              Explore All Services
            </a>
          </div>
          
          <p className="mt-8 text-sm opacity-80">
            No obligation. Cancel anytime. 100% satisfaction guarantee.
          </p>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
