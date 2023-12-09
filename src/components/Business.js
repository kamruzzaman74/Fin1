// Business.js
import React from 'react';
import { FiSettings, FiUsers, FiLayers } from 'react-icons/fi';
import '../components/Business.css';
import pic9 from '../photo/nc.webp';
function Business() {
    return (
      <div className="business-container">
        <h1 className="main-heading">Explore Our Services</h1>
  
        <div className="image-container">
          <img src={pic9} alt="Business Services" className="business-image" />
        </div>
  
        <div className="services-container">
          <div className="service">
            <FiSettings className="icon" />
            <h2 className="service-heading">Innovative Solutions</h2>
            <p className="service-description">
              Unlock creativity! Our advisory services provide innovative solutions to propel your business into the future.
            </p>
          </div>
  
          <div className="service">
            <FiUsers className="icon" />
            <h2 className="service-heading">Strategic Partnerships</h2>
            <p className="service-description">
              Build strong partnerships with our expert guidance. We assist in business startup, proposal drafting, and due diligence.
            </p>
          </div>
  
          <div className="service">
            <FiLayers className="icon" />
            <h2 className="service-heading">Efficient Processes</h2>
            <p className="service-description">
              Streamline your operations with our financial analysis. Clients trust our suggestions for daily business efficiency.
            </p>
          </div>
        </div>
      </div>
    );
  }
  
  export default Business;
