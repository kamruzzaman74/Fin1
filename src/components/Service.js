// Service.js
import React from 'react';
import { Link } from 'react-router-dom';
import '../components/Service.css';
import pic from '../photo/k.png';
import pic1 from '../photo/kii.webp';
import pic2 from '../photo/kkjpg.jpg';

function Service() {
  return (
    <div className="service-container flex flex-col items-center gap-8">
      <div>
        <h1 className="service-heading text-4xl font-bold mb-4 text-center text-indigo-800">
          Our Professional Services
        </h1>
      </div>

      <div className="flex flex-col items-center gap-8 sm:flex-row">
        <div className="service-card bg-white shadow-lg rounded-lg overflow-hidden transition-transform transform hover:scale-105">
          <img src={pic1} alt="Service 1" className="service-image w-full h-32 object-cover rounded-t-lg" />
          <div className="service-text p-4">
            <h2 className="text-xl font-bold mb-2 text-indigo-800">Tax Consultation</h2>
            <p className="text-gray-700">Expert tax planning and consultation services.</p>
            <Link to="/Adit">
              <button className="service-button service-button-1 mt-4 bg-indigo-800 hover:bg-indigo-900 text-white font-bold py-2 px-4 rounded-full">
                Learn More
              </button>
            </Link>
          </div>
        </div>

        <div className="service-card bg-white shadow-lg rounded-lg overflow-hidden transition-transform transform hover:scale-105">
          <img src={pic2} alt="Service 2" className="service-image w-full h-32 object-cover rounded-t-lg" />
          <div className="service-text p-4">
            <h2 className="text-xl font-bold mb-2 text-indigo-800">Financial Consulting</h2>
            <p className="text-gray-700">Strategic financial and management reporting.</p>
            <Link to="/Fin">
              <button className="service-button service-button-2 mt-4 bg-indigo-800 hover:bg-indigo-900 text-white font-bold py-2 px-4 rounded-full">
                Learn More
              </button>
            </Link>
          </div>
        </div>

        <div className="service-card bg-white shadow-lg rounded-lg overflow-hidden transition-transform transform hover:scale-105">
          <img src={pic} alt="Service 3" className="service-image w-full h-32 object-cover rounded-t-lg" />
          <div className="service-text p-4">
            <h2 className="text-xl font-bold mb-2 text-indigo-800">Audit & Assurance</h2>
            <p className="text-gray-700">Comprehensive audit and assurance services.</p>
            <Link to="/Tax">
              <button className="service-button service-button-3 mt-4 bg-indigo-800 hover:bg-indigo-900 text-white font-bold py-2 px-4 rounded-full">
                Learn More
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Service;







