import React from 'react';
import CaseStudyCard from '../components/CaseStudyCard';

const PortfolioPage = () => {
  const caseStudies = [
    {
      title: 'Optimizing Tax Strategies',
      description:
        'We helped ABC Corporation reduce tax liabilities, resulting in significant annual savings.',
      icon: '📈', // Custom large icon
    },
    {
      title: 'Financial Consulting Success',
      description:
        'Our expert financial consulting led to a 20% increase in revenue for XYZ Inc.',
      icon: '📊', // Another custom large icon
    },
    // Add more case studies here
  ];

  return (
    <div className="bg-gray-100 py-8">
      <div className="container mx-auto">
        <h2 className="text-4xl font-extrabold text-purple-700 text-center mb-8">
          Our Case Studies and Portfolio
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {caseStudies.map((study, index) => (
            <CaseStudyCard key={index} {...study} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default PortfolioPage;