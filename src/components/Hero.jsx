import React from 'react';
import { Link } from 'react-scroll';

const Hero = () => {
  return (
    <section id="hero" className="pt-28 pb-16 md:pt-36 md:pb-24 bg-gradient-to-br from-indigo-50 to-white">
      <div className="container">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-10 md:mb-0">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
              Elevate Your Business with Our <span className="text-primary">Virtual Assistant</span> Services
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Free up your time, reduce costs, and scale your business with our professional virtual assistants. We handle the tasks, you focus on growth.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="https://app.apollo.io/#/meet/bizdevxperts/30-min"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary"
              >
                Book Free Consultation
              </a>
              <a
                href="https://bizdevxperts.com/services"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-outline"
              >
                Explore Our Services
              </a>
            </div>
          </div>
          <div className="md:w-1/2">
            <img
              src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
              alt="Virtual Assistant Services"
              className="rounded-lg shadow-xl w-full"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
