// Special.js
import React from 'react';
import { FaRegLightbulb, FaBuilding } from 'react-icons/fa';
import '../components/Special.css'; // Import your CSS file for additional styling

function Special() {
    return (
      <div className="special-container">
        <div className="card">
          <h1 className="fancy-heading">
            <FaRegLightbulb className="icon" />
            Other Special Services
          </h1>
          <p>
            We are not limited to only the finance and accounting field but also active in non-financial fields. We can assist you on the following matters with experts’ hands:
            <ul>
              <li>Internal control system design;</li>
              <li>Company Incorporation in Bangladesh;</li>
              <li>Pre-Incorporation Advisory Services;</li>
              <li>Registrar of Joint Stock Companies & Firms (RJSC);</li>
              <li>Bangladesh Investment Development Authority;</li>
              <li>Import registration certificate (IRC);</li>
              <li>Export registration certificate (ERC);</li>
              <li>Trade License, TIN, BIN opening or closing;</li>
              <li>Winding up of companies under RJSC;</li>
              <li>Any finance, accounting & tax-related matters.</li>
            </ul>
          </p>
        </div>
  
        <div className="card">
          <h1 className="fancy-heading">
            <FaBuilding className="icon" />
            Not for Profit organization
          </h1>
          <p>
            From registering under Non-Government Organization Affairs Bureau (NGOAB) to proposal writing to donors, we are your trusted hands where all your regulated works will be managed by us such as filing different returns to NGOAB. We are also available for the following services:
            <ul>
              <li>Grant and funding applications;</li>
              <li>Assistance in Financial planning and reporting;</li>
              <li>Fraud prevention and detection;</li>
              <li>Internal controls;</li>
              <li>Performance measurement.</li>
            </ul>
          </p>
        </div>
      </div>
    );
  }
  
  export default Special;
