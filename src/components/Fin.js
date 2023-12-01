import React from 'react';
 
function Fin() {
  return (
    <div style={styles.container}>
      <div style={styles.content}>
        
        <h1 style={styles.heading}>Financial & Management Reporting</h1>
        <p style={styles.paragraph}>
          Finance and accounting play a vital role in modern businesses. A minor mistake may lead the business to a complex situation for which it was not prepared. Our dynamic team provides financial and management reporting services as per updated international standards, giving priority to local laws. From complex accounting treatments to simple journal entries, we are here to guide you to the best and simplest financial solutions.
        </p>

        <ul style={styles.list}>
          <li>Preparation of financial statements as per International Financial Reporting Standards (IFRS)</li>
          <li>Preparation of management reports as per client requirements</li>
          <li>Preparation of all forms of regulatory reporting in Bangladesh, including RJSC</li>
          <li>Cash management</li>
          <li>Payroll accounting</li>
          <li>Forecasting and budgeting based on client discussion</li>
          <li>Reconciliations including bank, revenue, expense, tax, etc.</li>
        </ul>
      </div>
    </div>
  );
}

const styles = {
  container: {
    maxWidth: '800px',
    margin: '0 auto',
    padding: '40px',
    textAlign: 'center',
  },
  content: {
    backgroundColor: '#f9f9f9',
    padding: '20px',
    borderRadius: '10px',
    boxShadow: '0 0 20px rgba(0, 0, 0, 0.2)',
  },
 
  heading: {
    fontSize: '36px',
    color: '#3498db',
    marginBottom: '20px',
    textTransform: 'uppercase',
    letterSpacing: '2px',
  },
  paragraph: {
    fontSize: '18px',
    lineHeight: '1.6',
    color: '#555',
  },
  list: {
    listStyleType: 'square',
    marginLeft: '20px',
  },
};

export default Fin;
