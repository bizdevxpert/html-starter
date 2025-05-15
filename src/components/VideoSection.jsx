import React from 'react';
import YouTube from 'react-youtube';

const VideoSection = () => {
  const opts = {
    height: '390',
    width: '100%',
    playerVars: {
      autoplay: 0,
    },
  };

  return (
    <section className="section bg-gradient-to-br from-indigo-900 to-purple-900 text-white">
      <div className="container">
        <div className="max-w-4xl mx-auto text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">See How We Transform Businesses</h2>
          <p className="text-xl text-indigo-100 mb-10">
            Watch how our virtual assistant services help entrepreneurs and business owners reclaim their time and accelerate growth.
          </p>
        </div>
        
        <div className="rounded-2xl overflow-hidden shadow-2xl max-w-4xl mx-auto transform hover:scale-[1.01] transition-transform duration-300">
          <YouTube videoId="arwVmsA3wR4" opts={opts} className="w-full" />
        </div>
        
        <div className="mt-12 text-center">
          <p className="text-xl font-medium mb-6 text-indigo-100">Ready to experience these results for your business?</p>
          <a 
            href="https://app.apollo.io/#/meet/bizdevxperts/30-min" 
            className="bg-white hover:bg-gray-100 text-indigo-700 font-bold py-3 px-8 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 inline-block"
            target="_blank"
            rel="noopener noreferrer"
          >
            Book Your Free Strategy Call
          </a>
        </div>
      </div>
    </section>
  );
};

export default VideoSection;
