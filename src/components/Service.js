import React, { useState } from 'react';
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
import '../components/Service.css';

function Service() {
  const services = [
    {
      title: 'Audit and Assurance Services',
      description: 'Our experienced auditors give technical contribution to audit engagements and internal projects to the clients’ internal team to conduct an audit as per client’s requirement and we deliver our best towards our client’s expectation. Any type of support which falls within out scope of work is done with the finest expert in this area. We ensure our work has been done properly by reviewing before delivering the assignment to the clients.',
      image: TxImage,
      icon: <FiTrendingUp className="w-12 h-12 text-yellow-600" />,
    },
    {
      title: 'Taxation Services',
      description: 'We have a very sophisticated and experienced team solely dedicated for assignments for all types of taxation services applicable in Bangladesh. With the new aggressive tax strategies, one’s tax burden will increase if not planned properly. Unlike traditional tax services, we are not here only to submit your various tax returns. Our team got the negotiation skills required by the market standard to discharge responsibility in different complex issues. Our taxation services ',
      image: AdImage,
      icon: <FiCheckCircle className="w-12 h-12 text-cyan-400" />,
    },
    {
      title: 'Financial Consulting',
      description: 'Get tailored financial consulting to drive growth and achieve your goals.',
      image: FiImage,
      icon: <FiBarChart2 className="w-12 h-12 text-cyan-400" />,
    },
    {
      title: 'Financial & Management',
      description: 'Finance and accounting play a vital role in modern businesses. A minor mistake may lead the business to complex situation which it was not prepared for. Our team is dynamic in providing financial and management reporting services as per updated international required standards along with giving priority to the local laws. From complex accounting treatment to simple journal entry, we are here to guide to the best and simple way to give financial solutions. We offer a comprehensive range of financial and management services, which includes:',
      image: AccountingImage,
      icon: <FiBookOpen className="w-12 h-12 text-cyan-400" />,
    },
  ];

  const demoInfo = [
    "We specialize in tax planning and can help you optimize your tax strategies, reducing your tax liability and maximizing your financial benefits.",
    "Our audit services ensure the accuracy and compliance of your financial records. We leave no stone unturned to maintain financial integrity.",
    "With our financial consulting services, you get a personalized plan to achieve financial growth and meet your financial goals.",
    "Our accounting services provide accurate and reliable financial management, whether for your business or personal finances.",
  ];

  const [expandedService, setExpandedService] = useState(null);

  return (
    <section className="service-section py-16">
      <div className="container mx-auto text-center">
        <h2 className="service-title mb-8 animate-fadeIn">Our Financial Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div key={index} className="service-card text-left">
              <div className="text-3xl mb-4 text-center service-icon">{service.icon}</div>
              <img
                src={service.image}
                alt={service.title}
                className="w-full h-40 object-cover rounded-lg mb-4"
              />
              <h3 className="text-2xl font-semibold text-blue-700 mb-2">{service.title}</h3>
              <p className="text-gray-600 service-description">
                {expandedService === index ? demoInfo[index] : service.description.slice(0, 100)}
              </p>
              {expandedService !== index && (
                <button
                  className="expand-button mt-2"
                  onClick={() => setExpandedService(index)}
                >
                  See More
                </button>
              )}
              {expandedService === index && (
                <button
                  className="expand-button mt-2"
                  onClick={() => setExpandedService(null)}
                >
                  Show Less
                </button>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Service;




