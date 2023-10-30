import React from 'react';
import FiImage from '../photo/kkjpg.jpg';
import AdImage from '../photo/a.jpg';
import TxImage from '../photo/p.jpg';
import AccountingImage from '../photo/k.png';
import {
  FiTrendingUp,
  FiCheckCircle,
  FiBarChart2,
  FiBookOpen,
} from 'react-icons/fi';

function Service() {
  const services = [
    {
      title: 'Tax Planning',
      description: 'Optimize your tax strategies and minimize tax liability with our expert guidance.',
      image: TxImage,
      icon: <FiTrendingUp className="w-12 h-12 text-yellow-600" />,
    },
    {
      title: 'Audit Services',
      description: 'Ensure financial accuracy and compliance with our comprehensive audit services.',
      image: AdImage,
      icon: <FiCheckCircle className="w-12 h-12 text-green-600" />,
    },
    {
      title: 'Financial Consulting',
      description: 'Get tailored financial consulting to drive growth and achieve your goals.',
      image: FiImage,
      icon: <FiBarChart2 className="w-12 h-12 text-blue-600" />,
    },
    {
      title: 'Accounting',
      description: 'Accurate accounting services for your business or personal finances to keep you on track.',
      image: AccountingImage,
      icon: <FiBookOpen className="w-12 h-12 text-purple-600" />,
    },
  ];

  return (
    <section className="bg-gradient-to-b from-purple-300 to-blue-500 py-16">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl sm:text-4xl font-semibold mb-6 text-yellow-800">
          Our  Financial Services
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg shadow-lg text-left"
            >
              <div className="text-3xl mb-4 text-center">{service.icon}</div>
              <img
                src={service.image}
                alt={service.title}
                className="w-full h-40 object-cover rounded-lg mb-4"
              />
              <h3 className="text-2xl font-semibold text-blue-700 mb-2">
                {service.title}
              </h3>
              <p className="text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Service;

