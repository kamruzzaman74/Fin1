import React from 'react';

function GetStarted() {
  return (
    <div className="bg-white text-rose-300 min-h-screen flex flex-col items-center justify-center">
      <div className="text-center">
        <h1 className="text-4xl font-extrabold mb-4 text-rose-300">
          Get Started with Our Financial Services
        </h1>
        <p className="text-lg mb-6 text-gray-600">
          Take the first step to financial success for your business with our tailored packages.
        </p>
        <div className="text-left max-w-md mx-auto">
          <h2 className="text-2xl font-semibold mb-2 text-blue-700">Our Packages Include:</h2>
          <ul className="list-disc list-inside mb-4 text-gray-600">
            <li>Financial Analysis and Planning</li>
            <li>Tax Consulting and Planning</li>
            <li>Accounting and Bookkeeping Services</li>
            <li>Legal Compliance Support</li>
            <li>Customized Financial Solutions</li>
          </ul>
          <p className="text-lg mb-4 text-gray-600">
            We understand that every business is unique. Our expert team is ready to assist you in choosing the right package that best suits your needs.
          </p>
        </div>

        <button className="bg-cyan-300 hover:bg-rose-400 text-white px-8 py-4 rounded-full font-semibold text-lg mt-8">
          Contact Us to Get Started
        </button>
      </div>
    </div>
  );
}

export default GetStarted;
