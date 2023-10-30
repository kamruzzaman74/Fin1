
import React from 'react';
const CaseStudyCard = ({ title, description }) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden transition-transform transform hover:scale-105 hover:shadow-lg">
      <div className="p-4">
        <div className="text-4xl text-purple-700 mb-4">📈</div> {/* Custom large icon */}
        <h3 className="text-2xl font-semibold text-purple-700 mb-2">{title}</h3>
        <p className="text-gray-600 mb-4">{description}</p>
        <div className="text-sm font-semibold text-gray-800">
          <p>Client: ABC Corporation</p>
          <p>Challenge: Tax Optimization</p>
          <p>Result: $50,000 annual savings</p>
        </div>
        <a href="#" className="block text-purple-700 mt-4 font-semibold hover:underline">
          Read More
        </a>
      </div>
    </div>
  );
};

export default CaseStudyCard;

