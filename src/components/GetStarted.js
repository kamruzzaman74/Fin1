import React from 'react';

function GetStarted() {
  return (
    <div className="bg-gradient-to-r from-purple-300 via-pink-400 to-red-500 text-white min-h-screen flex flex-col items-center justify-center p-4 md:p-8">
      <div className="text-center max-w-md mx-auto">
        <h1 className="text-4xl font-extrabold mb-4">
          Get Started with Our Financial Services
        </h1>
        <p className="text-lg mb-6">
          Take the first step to financial success for your business with our tailored packages.
        </p>
      </div>
      <div className="text-left max-w-md mx-auto">
        <h2 className="text-2xl font-semibold mb-2 text-blue-300">Our Packages Include:</h2>
        <ul className="list-disc list-inside mb-4">
          <li>Financial Analysis and Planning</li>
          <li>Tax Consulting and Planning</li>
          <li>Accounting and Bookkeeping Services</li>
          <li>Legal Compliance Support</li>
          <li>Customized Financial Solutions</li>

          <li>	Accounting and Bookkeeping Services</li>
          <li>Tax Consulting and Planning</li>
          <li>	Legal Compliance Support </li>

        </ul>
        <p className="text-lg mb-4">
          We understand that every business is unique. Our expert team is ready to assist you in choosing the right package that best suits your needs.
        </p>
      </div>

      <div className="flex flex-col items-center md:flex-row md:justify-between">
        <div className="mb-4 md:mb-0">
          <div className="bg-cyan-500 hover:bg-rose-600 text-white px-6 py-3 rounded-full font-semibold text-lg">
            Learn More
          </div>
        </div>
        <div className="text-gray-300 text-lg">
          Or explore our <a href="/services" className="underline">services</a> in detail.
        </div>
      </div>
    </div>
  );
}

export default GetStarted;
