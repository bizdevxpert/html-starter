import React from 'react';

const testimonials = [
  {
    name: "Sarah Johnson",
    title: "CEO, TechStart Inc.",
    content: "Working with BizDevXperts has been transformative for our business. Their virtual assistants are professional, proactive, and incredibly efficient. I've reclaimed at least 15 hours per week!",
    image: "https://randomuser.me/api/portraits/women/1.jpg"
  },
  {
    name: "Michael Chen",
    title: "Founder, GrowthLabs",
    content: "I was skeptical about hiring a virtual assistant, but BizDevXperts exceeded all my expectations. Their team quickly learned our processes and became an invaluable part of our operations.",
    image: "https://randomuser.me/api/portraits/men/2.jpg"
  },
  {
    name: "Jessica Williams",
    title: "Marketing Director, Elevate Media",
    content: "The attention to detail and quality of work from BizDevXperts is outstanding. Their virtual assistants have helped us scale our marketing efforts without increasing our full-time headcount.",
    image: "https://randomuser.me/api/portraits/women/3.jpg"
  }
];

const Testimonials = () => {
  return (
    <section id="testimonials" className="section bg-white">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="heading">What Our Clients Say</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Don't just take our word for it. Here's what business leaders have to say about our virtual assistant services.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="testimonial-card">
              <div className="flex items-center mb-4">
                <img 
                  src={testimonial.image} 
                  alt={testimonial.name} 
                  className="w-16 h-16 rounded-full mr-4"
                />
                <div>
                  <h4 className="font-bold text-lg">{testimonial.name}</h4>
                  <p className="text-gray-600">{testimonial.title}</p>
                </div>
              </div>
              <p className="text-gray-700 italic">"{testimonial.content}"</p>
            </div>
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <p className="text-xl font-medium mb-6">Join hundreds of satisfied clients who have transformed their businesses</p>
          <a 
            href="https://app.apollo.io/#/meet/bizdevxperts/30-min" 
            className="btn-primary"
            target="_blank"
            rel="noopener noreferrer"
          >
            Book Your Free Consultation
          </a>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
