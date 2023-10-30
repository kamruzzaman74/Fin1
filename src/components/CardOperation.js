import React from 'react';

const CardOperation = () => {
  const cards = [
    {
      title: 'Financial Solutions',
      description: 'Discover tailored financial solutions that empower your business growth.',
      icon: '💹',
    },
    {
      title: 'Wealth Management',
      description: 'Achieve financial success with expert wealth management and investment strategies.',
      icon: '💎',
    },
    {
      title: 'Tax Optimization',
      description: 'Optimize your tax strategies and keep more of what you earn.',
      icon: '📊',
    },
    {
      title: 'Financial Security',
      description: 'Ensure your financial security and plan for a prosperous future.',
      icon: '🔒',
    },

  ]
  return (
    <section className="bg-gray-100 py-16">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-bold mb-8 text-purple-700">
          Explore Our  Services
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {cards.map((card, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg shadow-lg text-left transition-transform transform hover:scale-105"
            >
              <div className="text-5xl mb-4 text-blue-500">{card.icon}</div>
              <h3 className="text-2xl font-semibold text-purple-800 mb-2">{card.title}</h3>
              <p className="text-gray-700">{card.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CardOperation;