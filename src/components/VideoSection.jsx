import React from 'react';
import ReactPlayer from 'react-player/youtube';

const VideoSection = () => {
  return (
    <section className="section bg-gray-50">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="heading">See Our Virtual Assistants in Action</h2>
          <p className="subheading mx-auto">
            Watch how our professional virtual assistants can transform your business operations and help you achieve your goals.
          </p>
        </div>

        <div className="max-w-4xl mx-auto rounded-lg overflow-hidden shadow-xl">
          <div className="aspect-w-16 aspect-h-9 relative pb-[56.25%]">
            <ReactPlayer
              url="https://youtu.be/arwVmsA3wR4"
              width="100%"
              height="100%"
              className="absolute top-0 left-0"
              controls={true}
              playing={false}
            />
          </div>
        </div>

        <div className="mt-12 text-center">
          <a
            href="https://app.apollo.io/#/meet/bizdevxperts/30-min"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-primary"
          >
            Schedule Your Free Consultation
          </a>
        </div>
      </div>
    </section>
  );
};

export default VideoSection;
