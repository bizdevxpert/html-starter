import React from 'react';
import YouTube from 'react-youtube';

const VideoSection = () => {
  // Extract video ID from the YouTube URL
  const getYouTubeID = (url) => {
    const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/;
    const match = url.match(regExp);
    return (match && match[2].length === 11) ? match[2] : null;
  };

  const videoId = getYouTubeID('https://youtu.be/arwVmsA3wR4');
  
  const opts = {
    height: '390',
    width: '100%',
    playerVars: {
      autoplay: 0,
    },
  };

  return (
    <section id="video" className="section bg-white">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="heading">See How We Can Help Your Business</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Watch this short video to learn how our virtual assistant services can transform your business operations and help you focus on growth.
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <div className="aspect-w-16 aspect-h-9 rounded-xl overflow-hidden shadow-xl">
            {videoId && (
              <div className="relative pb-[56.25%] h-0 overflow-hidden max-w-full">
                <YouTube 
                  videoId={videoId} 
                  opts={opts} 
                  className="absolute top-0 left-0 w-full h-full rounded-xl"
                />
              </div>
            )}
          </div>
          
          <div className="mt-12 text-center">
            <p className="text-xl font-medium mb-6">Ready to experience these benefits for your business?</p>
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
                href="https://bizdevxperts.com/services" 
                className="btn-outline"
                target="_blank"
                rel="noopener noreferrer"
              >
                Explore All Services
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VideoSection;
