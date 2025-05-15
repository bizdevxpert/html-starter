import React, { useState } from 'react';
import { FaQuoteLeft, FaChevronLeft, FaChevronRight, FaStar } from 'react-icons/fa';

const Testimonials = () => {
  const testimonials = [
    {
      name: 'Sarah Johnson',
      position: 'CEO, TechStart Inc.',
      image: 'https://randomuser.me/api/portraits/women/32.jpg',
      quote: 'BizDevXperts has completely transformed how I manage my business. Their virtual assistants are professional, efficient, and have saved me countless hours each week. I can now focus on growing my business instead of drowning in administrative tasks.',
      rating: 5
    },
    {
      name: 'Michael Chen',
      position: 'Founder, GrowthLabs',
      image: 'https://randomuser.me/api/portraits/men/46.jpg',
      quote: 'I was skeptical about hiring virtual assistants, but BizDevXperts exceeded all my expectations. Their team quickly learned our processes and became an invaluable part of our operations. The ROI has been incredible - highly recommended!',
      rating: 5
    },
    {
      name: 'Emily Rodriguez',
      position: 'Marketing Director, Innovate Solutions',
      image: 'https://randomuser.me/api/portraits/women/65.jpg',
      quote: 'The virtual assistants from BizDevXperts have been a game-changer for our marketing department. They handle our email campaigns, social media scheduling, and data analysis with precision and creativity. It\'s like having an entire team at a fraction of the cost.',
      rating: 5
    },
    {
      name: 'David Thompson',
      position: 'Small Business Owner',
      image: 'https://randomuser.me/api/portraits/men/22.jpg',
      quote: 'As a small business owner, I was struggling to keep up with everything. BizDevXperts provided me with a dedicated virtual assistant who handles my calendar, emails, and customer inquiries. My stress levels have dropped dramatically, and my business is thriving.',
      rating: 5
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section id="testimonials" className="section bg-gray-50">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="heading">What Our Clients Say</h2>
          <p className="subheading mx-auto">
            Don't just take our word for it. Here's what business owners and executives have to say about our virtual assistant services.
          </p>
        </div>

        <div className="max-w-4xl mx-auto relative">
          <div className="bg-white rounded-xl shadow-xl p-8 md:p-12">
            <FaQuoteLeft className="text-4xl text-primary/20 mb-6" />
            
            <div className="mb-8">
              <p className="text-lg md:text-xl italic text-gray-700 mb-6">
                "{testimonials[currentIndex].quote}"
              </p>
              
              <div className="flex items-center">
                <img
                  src={testimonials[currentIndex].image}
                  alt={testimonials[currentIndex].name}
                  className="w-16 h-16 rounded-full mr-4 object-cover"
                />
                <div>
                  <h4 className="font-bold text-lg">{testimonials[currentIndex].name}</h4>
                  <p className="text-gray-600">{testimonials[currentIndex].position}</p>
                  <div className="flex mt-1">
                    {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                      <FaStar key={i} className="text-yellow-400" />
                    ))}
                  </div>
                </div>
              </div>
            </div>
            
            <div className="flex justify-between">
              <button
                onClick={prevTestimonial}
                className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors"
                aria-label="Previous testimonial"
              >
                <FaChevronLeft />
              </button>
              
              <div className="flex space-x-2">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentIndex(index)}
                    className={`w-3 h-3 rounded-full ${
                      index === currentIndex ? 'bg-primary' : 'bg-gray-300'
                    }`}
                    aria-label={`Go to testimonial ${index + 1}`}
                  />
                ))}
              </div>
              
              <button
                onClick={nextTestimonial}
                className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors"
                aria-label="Next testimonial"
              >
                <FaChevronRight />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
