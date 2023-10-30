import React from 'react';

function GetStarted() {
  return (
    <div className="bg-blue-900 text-white min-h-screen flex flex-col items-center justify-center">
      <div className="text-center">
        <h1 className="text-4xl font-extrabold mb-4">Get Started with Our Financial Services</h1>
        <p className="text-lg mb-6">
          Take the first step to financial success for your business with our tailored packages.
        </p>
        <div className="text-left max-w-md mx-auto">
          <h2 className="text-2xl font-semibold mb-2">Our Packages Include:</h2>
          <ul className="list-disc list-inside mb-4">
            <li>Financial Analysis and Planning</li>
            <li>Tax Consulting and Planning</li>
            <li>Accounting and Bookkeeping Services</li>
            <li>Legal Compliance Support</li>
            <li>Customized Financial Solutions</li>
          </ul>
          <p className="text-lg mb-4">
            We understand that every business is unique. Our expert team is ready to assist you in choosing the right package that best suits your needs.
          </p>
        </div>

        {/* Pricing Section */}
        <div className="text-left max-w-md mx-auto mt-8">
          <h2 className="text-2xl font-semibold mb-2">Our Pricing Plans:</h2>
          <div className="bg-blue-800 text-yellow-400 p-4 rounded-md mb-4">
            <h3 className="text-lg font-semibold mb-2">Starter Package</h3>
            <p>Perfect for small businesses looking to get started with financial planning.</p>
            <p className="font-bold text-lg">Price: $99/month</p>
          </div>
          <div className="bg-blue-800 text-yellow-400 p-4 rounded-md mb-4">
            <h3 className="text-lg font-semibold mb-2">Business Pro</h3>
            <p>Our comprehensive package for established businesses seeking advanced financial solutions.</p>
            <p className="font-bold text-lg">Price: $199/month</p>
          </div>
          <div className="bg-blue-800 text-yellow-400 p-4 rounded-md">
            <h3 className="text-lg font-semibold mb-2">Enterprise</h3>
            <p>Customized packages for large enterprises with unique financial requirements.</p>
            <p className="font-bold text-lg">Custom Pricing</p>
          </div>
        </div>

        <button className="bg-yellow-400 hover:bg-yellow-500 text-blue-900 px-8 py-4 rounded-full font-semibold text-lg mt-8">
          Contact Us to Get Started
        </button>
      </div>
    </div>
  );
}

export default GetStarted;