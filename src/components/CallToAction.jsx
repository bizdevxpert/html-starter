import React from 'react';
import { FaArrowRight, FaCalendarCheck } from 'react-icons/fa';

const CallToAction = () => {
  return (
    <section className="py-20 relative overflow-hidden">
      {/* Background with modern gradient and pattern */}
      <div className="absolute inset-0 bg-gradient-to-r from-indigo-600 to-purple-600 opacity-95 z-0"></div>
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC4xIj48cGF0aCBkPSJNMzYgMzRjMC0yLjIgMS44LTQgNC00czQgMS44IDQgNC0xLjggNC00IDQtNC0xLjgtNC00eiIvPjwvZz48L2c+PC9zdmc+')] opacity-20 z-0"></div>
      
      <div className="container relative z-10">
        <div className="bg-white rounded-3xl shadow-2xl p-8 md:p-12 max-w-5xl mx-auto overflow-hidden relative">
          {/* Decorative elements */}
          <div className="absolute -top-20 -right-20 w-64 h-64 bg-indigo-100 rounded-full opacity-50"></div>
          <div className="absolute -bottom-16 -left-16 w-48 h-48 bg-purple-100 rounded-full opacity-50"></div>
          
          <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-10">
            <div className="md:w-2/3">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Ready to Reclaim Your Time?
              </h2>
              <p className="text-xl text-gray-600 mb-6">
                Our virtual assistants are ready to help you focus on what matters most - growing your business and enjoying more freedom.
              </p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center text-gray-700">
                  <span className="bg-green-100 text-green-600 p-1 rounded-full mr-3">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </span>
                  Free 30-minute consultation
                </li>
                <li className="flex items-center text-gray-700">
                  <span className="bg-green-100 text-green-600 p-1 rounded-full mr-3">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </span>
                  Customized service plan
                </li>
                <li className="flex items-center text-gray-700">
                  <span className="bg-green-100 text-green-600 p-1 rounded-full mr-3">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </span>
                  No long-term contracts
                </li>
              </ul>
            </div>
            
            <div className="md:w-1/3 flex justify-center">
              <a 
                href="https://app.apollo.io/#/meet/bizdevxperts/30-min" 
                className="group bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white font-bold py-4 px-8 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 flex items-center space-x-2 text-center"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaCalendarCheck className="text-xl" />
                <span>Book Your Free Call</span>
                <FaArrowRight className="group-hover:translate-x-1 transition-transform duration-300" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
