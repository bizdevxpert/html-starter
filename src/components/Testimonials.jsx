import React from 'react';
import { FaQuoteLeft, FaStar } from 'react-icons/fa';

const testimonials = [
  {
    name: "Sarah Johnson",
    position: "CEO, TechStart Inc.",
    image: "https://randomuser.me/api/portraits/women/32.jpg",
    text: "Working with BizDevXperts has been transformative for our business. Their virtual assistants have freed up 20+ hours of my week, allowing me to focus on strategic growth. Our revenue has increased by 35% since we started working together.",
    stars: 5
  },
  {
    name: "Michael Chen",
    position: "Founder, GrowthLabs",
    image: "https://randomuser.me/api/portraits/men/46.jpg",
    text: "I was drowning in administrative tasks before finding BizDevXperts. Their team seamlessly integrated with our processes and now handles everything from email management to customer support. I can finally focus on what I do best.",
    stars: 5
  },
  {
    name: "Jessica Williams",
    position: "Marketing Director, Elevate Media",
    image: "https://randomuser.me/api/portraits/women/65.jpg",
    text: "The level of professionalism and attention to detail from BizDevXperts is outstanding. Their virtual assistants have become an essential part of our team, handling our social media management and customer inquiries with excellence.",
    stars: 5
  }
];

const Testimonials = () => {
  return (
    <section className="section bg-gray-50">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="heading">What Our Clients Say</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Don't just take our word for it. Here's what business owners and entrepreneurs have to say about our virtual assistant services.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white rounded-2xl shadow-xl overflow-hidden transform hover:-translate-y-2 transition-all duration-300">
              <div className="p-8">
                <div className="flex items-center mb-6">
                  <div className="relative">
                    <FaQuoteLeft className="text-indigo-100 text-6xl absolute -top-3 -left-2" />
                    <img 
                      src={testimonial.image} 
                      alt={testimonial.name} 
                      className="w-16 h-16 rounded-full object-cover border-4 border-white shadow-md relative z-10"
                    />
                  </div>
                  <div className="ml-4">
                    <h4 className="text-xl font-bold text-gray-900">{testimonial.name}</h4>
                    <p className="text-gray-600">{testimonial.position}</p>
                    <div className="flex mt-1">
                      {[...Array(testimonial.stars)].map((_, i) => (
                        <FaStar key={i} className="text-yellow-400" />
                      ))}
                    </div>
                  </div>
                </div>
                <p className="text-gray-700 italic">{testimonial.text}</p>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <p className="text-xl font-medium mb-6">Join our satisfied clients and transform your business today</p>
          <a 
            href="https://app.apollo.io/#/meet/bizdevxperts/30-min" 
            className="btn-primary"
            target="_blank"
            rel="noopener noreferrer"
          >
            Schedule Your Free Consultation
          </a>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
