import React, { useState } from 'react';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';

const FAQ = () => {
  const faqs = [
    {
      question: 'What exactly is a virtual assistant?',
      answer: 'A virtual assistant is a professional who provides administrative, technical, or creative assistance to clients remotely. Our virtual assistants work from their own locations but are fully dedicated to helping your business with various tasks and projects.'
    },
    {
      question: 'How do I communicate with my virtual assistant?',
      answer: 'Communication is streamlined through your preferred channels, including email, phone, video calls, messaging apps, or project management tools. We adapt to your existing workflow to ensure seamless collaboration.'
    },
    {
      question: 'Are your virtual assistants available full-time?',
      answer: 'We offer flexible arrangements based on your needs. You can hire virtual assistants for full-time support, part-time hours, or on a project basis. Our goal is to provide the right level of support for your business requirements.'
    },
    {
      question: 'How quickly can a virtual assistant start working with me?',
      answer: 'After your initial consultation and once we understand your needs, we can typically match you with a suitable virtual assistant within 3-5 business days. For urgent requirements, we may be able to expedite this process.'
    },
    {
      question: 'What if I\'m not satisfied with my virtual assistant?',
      answer: 'Your satisfaction is our priority. If you\'re not completely satisfied with your assigned virtual assistant, we\'ll work with you to address any concerns or match you with another professional who better fits your needs and expectations.'
    },
    {
      question: 'How do you ensure data security and confidentiality?',
      answer: 'We take security seriously. All our virtual assistants sign confidentiality agreements, follow strict data protection protocols, and use secure tools for communication and file sharing. We can also adapt to your specific security requirements.'
    }
  ];

  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="section bg-white">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="heading">Frequently Asked Questions</h2>
          <p className="subheading mx-auto">
            Find answers to common questions about our virtual assistant services.
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          {faqs.map((faq, index) => (
            <div key={index} className="mb-4 border border-gray-200 rounded-lg overflow-hidden">
              <button
                className="w-full flex justify-between items-center p-5 bg-gray-50 hover:bg-gray-100 transition-colors text-left"
                onClick={() => toggleFAQ(index)}
              >
                <span className="font-semibold text-lg">{faq.question}</span>
                {activeIndex === index ? <FaChevronUp /> : <FaChevronDown />}
              </button>
              
              {activeIndex === index && (
                <div className="p-5 bg-white">
                  <p className="text-gray-600">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="mb-4 text-gray-600">
            Have more questions? We're here to help!
          </p>
          <a
            href="https://app.apollo.io/#/meet/bizdevxperts/30-min"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-primary"
          >
            Schedule a Consultation
          </a>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
