import React from 'react';

const CallToAction = () => {
  return (
    <section id="cta" className="section bg-primary text-white">
      <div className="container">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Transform Your Business?</h2>
          <p className="text-xl mb-8 opacity-90">
            Take the first step towards a more efficient and productive business operation. 
            Schedule your free consultation today and discover how our virtual assistants can help you grow.
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a
              href="https://app.apollo.io/#/meet/bizdevxperts/30-min"
              target="_blank"
              rel="noopener noreferrer"
              className="btn bg-white text-primary hover:bg-gray-100"
            >
              Book Free Consultation
            </a>
            <a
              href="https://bizdevxperts.com/services"
              target="_blank"
              rel="noopener noreferrer"
              className="btn border-2 border-white text-white hover:bg-white hover:text-primary"
            >
              Explore Our Services
            </a>
          </div>
          
          <div className="mt-12 p-6 bg-white/10 rounded-lg backdrop-blur-sm">
            <h3 className="text-2xl font-bold mb-4">Why Schedule a Consultation?</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
              <div>
                <h4 className="text-xl font-semibold mb-2">Personalized Solution</h4>
                <p>We'll analyze your specific needs and create a tailored virtual assistant solution.</p>
              </div>
              <div>
                <h4 className="text-xl font-semibold mb-2">Cost Analysis</h4>
                <p>Discover how much time and money you can save with our professional services.</p>
              </div>
              <div>
                <h4 className="text-xl font-semibold mb-2">No Obligation</h4>
                <p>Our consultation is completely free with no pressure or commitment required.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
