import React from 'react';
import YouTube from 'react-youtube';
import { FaLinkedin, FaFacebook, FaInstagram, FaPinterest, FaTwitter, FaYoutube, FaGlobe, FaCheck, FaEnvelope, FaArrowRight, FaQuoteLeft } from 'react-icons/fa';

function App() {
  const videoOpts = {
    height: '390',
    width: '100%',
    playerVars: {
      autoplay: 0,
    },
  };

  const testimonials = [
    {
      name: "Sarah Johnson",
      position: "Marketing Director, TechSolutions Inc.",
      content: "Business Development Experts transformed our outreach strategy. Their cold email campaigns generated a 43% response rate, far exceeding our previous attempts. Within 3 months, we closed 5 major deals directly from these campaigns.",
      image: "https://randomuser.me/api/portraits/women/32.jpg"
    },
    {
      name: "Michael Chen",
      position: "CEO, GrowthPartners",
      content: "I was skeptical about cold email marketing until I worked with BizDevXperts. Their approach is refreshingly different - personalized, value-driven, and highly effective. Our sales pipeline is now consistently full thanks to their campaigns.",
      image: "https://randomuser.me/api/portraits/men/54.jpg"
    },
    {
      name: "Jessica Williams",
      position: "Sales Manager, InnovateNow",
      content: "The ROI we've seen from BizDevXperts' cold email campaigns has been incredible. They don't just send emails - they create conversations that convert. Our sales team now has more qualified leads than they can handle!",
      image: "https://randomuser.me/api/portraits/women/45.jpg"
    }
  ];

  const benefits = [
    "Personalized email sequences tailored to your target audience",
    "Compelling subject lines that boost open rates",
    "Strategic follow-ups that drive engagement",
    "A/B testing to optimize performance",
    "Real-time analytics and reporting",
    "Lead qualification and nurturing",
    "Integration with your CRM system",
    "Continuous optimization based on results"
  ];

  return (
    <div className="font-sans">
      {/* Header */}
      <header className="bg-white py-4 sticky top-0 z-50 shadow-md">
        <div className="container flex justify-between items-center">
          <div className="flex items-center">
            <h1 className="text-2xl font-bold text-primary">Business Development Experts</h1>
          </div>
          <div className="hidden md:flex space-x-6">
            <a href="https://app.apollo.io/#/meet/bizdevxperts/30-min" className="btn btn-primary">Book Free Consultation</a>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="gradient-bg text-white py-20 md:py-28">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="heading text-4xl md:text-5xl lg:text-6xl mb-6">
                Turn Cold Emails Into Hot Leads
              </h1>
              <p className="text-xl mb-8">
                Cut through inbox clutter with targeted outreach that drives responses. Our innovative cold email campaigns convert prospects into clients.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a href="https://app.apollo.io/#/meet/bizdevxperts/30-min" className="btn btn-secondary">
                  Book Free Consultation
                </a>
                <a href="https://bizdevxperts.com/services" className="btn bg-white text-primary hover:bg-gray-100">
                  Explore Our Services
                </a>
              </div>
            </div>
            <div className="rounded-lg overflow-hidden shadow-2xl">
              <YouTube videoId="GU-0ZWGy06s" opts={videoOpts} className="w-full" />
            </div>
          </div>
        </div>
      </section>

      {/* Problem/Solution Section */}
      <section className="section bg-white">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="heading text-3xl md:text-4xl mb-4">Why Most Cold Emails Fail</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              And how our innovative approach delivers results when others don't
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-16">
            <div className="bg-gray-50 p-8 rounded-lg shadow-lg">
              <h3 className="heading text-2xl mb-6 text-red-600">Common Cold Email Mistakes</h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <span className="text-red-500 mr-2">✗</span>
                  <span>Generic, templated messages that feel impersonal</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-500 mr-2">✗</span>
                  <span>Focusing on features instead of value and benefits</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-500 mr-2">✗</span>
                  <span>Poor subject lines that get ignored or flagged as spam</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-500 mr-2">✗</span>
                  <span>Lack of strategic follow-up sequences</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-500 mr-2">✗</span>
                  <span>No performance tracking or optimization</span>
                </li>
              </ul>
            </div>
            
            <div className="bg-primary-light bg-opacity-10 p-8 rounded-lg shadow-lg">
              <h3 className="heading text-2xl mb-6 text-primary">The BizDevXperts Difference</h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <span className="text-primary mr-2"><FaCheck /></span>
                  <span>Hyper-personalized messages based on deep prospect research</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2"><FaCheck /></span>
                  <span>Value-focused content that addresses specific pain points</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2"><FaCheck /></span>
                  <span>Attention-grabbing subject lines with proven open rates</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2"><FaCheck /></span>
                  <span>Strategic multi-touch sequences that build relationships</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2"><FaCheck /></span>
                  <span>Real-time analytics and continuous optimization</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="section bg-gray-50">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="heading text-3xl md:text-4xl mb-4">Our Cold Email Campaign Services</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Everything you need to transform your outreach and fill your sales pipeline
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <div className="w-12 h-12 bg-primary-light bg-opacity-20 rounded-full flex items-center justify-center mb-4">
                  <FaEnvelope className="text-primary text-xl" />
                </div>
                <p className="font-medium">{benefit}</p>
              </div>
            ))}
          </div>
          
          <div className="mt-16 text-center">
            <p className="text-xl mb-6">Ready to revolutionize your cold email strategy?</p>
            <a href="https://app.apollo.io/#/meet/bizdevxperts/30-min" className="btn btn-primary">
              Book Your Free Consultation <FaArrowRight className="inline ml-2" />
            </a>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="section bg-white">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="heading text-3xl md:text-4xl mb-4">What Our Clients Say</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Success stories from businesses that transformed their lead generation
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-gray-50 p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <div className="flex items-center mb-6">
                  <img 
                    src={testimonial.image} 
                    alt={testimonial.name} 
                    className="w-16 h-16 rounded-full mr-4 object-cover"
                  />
                  <div>
                    <h4 className="font-bold text-lg">{testimonial.name}</h4>
                    <p className="text-gray-600 text-sm">{testimonial.position}</p>
                  </div>
                </div>
                <div className="relative">
                  <FaQuoteLeft className="text-primary text-opacity-20 text-4xl absolute -top-2 -left-2" />
                  <p className="relative z-10 text-gray-700">{testimonial.content}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="gradient-bg text-white py-16">
        <div className="container text-center">
          <h2 className="heading text-3xl md:text-4xl mb-6">Ready to Transform Your Cold Email Results?</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Book your free 30-minute consultation today and discover how our innovative cold email campaigns can fill your sales pipeline with qualified leads.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a href="https://app.apollo.io/#/meet/bizdevxperts/30-min" className="btn btn-secondary">
              Book Free Consultation
            </a>
            <a href="https://bizdevxperts.com/services" className="btn bg-white text-primary hover:bg-gray-100">
              Explore Our Services
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-dark text-white py-12">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-8 mb-8">
            <div>
              <h3 className="text-2xl font-bold mb-4">Business Development Experts</h3>
              <p className="mb-4 text-gray-300 max-w-md">
                We help businesses accelerate growth through innovative lead generation strategies and sales development expertise.
              </p>
              <div className="flex space-x-4">
                <a href="https://www.linkedin.com/company/businessdevelopment-experts" className="text-gray-300 hover:text-white text-xl">
                  <FaLinkedin />
                </a>
                <a href="https://www.facebook.com/480956031758876" className="text-gray-300 hover:text-white text-xl">
                  <FaFacebook />
                </a>
                <a href="https://www.instagram.com/bizdevxperts/" className="text-gray-300 hover:text-white text-xl">
                  <FaInstagram />
                </a>
                <a href="https://www.pinterest.com/bizdevxperts/" className="text-gray-300 hover:text-white text-xl">
                  <FaPinterest />
                </a>
                <a href="https://www.x.com/bizdevxperts" className="text-gray-300 hover:text-white text-xl">
                  <FaTwitter />
                </a>
                <a href="https://www.youtube.com/@bizdevxpert" className="text-gray-300 hover:text-white text-xl">
                  <FaYoutube />
                </a>
                <a href="https://bizdevxperts.com/" className="text-gray-300 hover:text-white text-xl">
                  <FaGlobe />
                </a>
              </div>
            </div>
            <div>
              <h4 className="text-xl font-bold mb-4">Quick Links</h4>
              <ul className="space-y-2">
                <li><a href="https://bizdevxperts.com/services" className="text-gray-300 hover:text-white">Our Services</a></li>
                <li><a href="https://app.apollo.io/#/meet/bizdevxperts/30-min" className="text-gray-300 hover:text-white">Book a Consultation</a></li>
                <li><a href="https://bizdevxperts.com/" className="text-gray-300 hover:text-white">Visit Our Website</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-700 pt-8 text-center text-gray-400">
            <p>&copy; {new Date().getFullYear()} Business Development Experts. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
