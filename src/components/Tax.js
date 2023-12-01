import React from 'react';

function Tax() {
  return (
    <div style={styles.container}>
      <div style={styles.content}>
        <h1 style={styles.heading}>Audit & Assurances</h1>
        <p style={styles.paragraph}>
          Our experienced auditors make technical contributions to audit engagements and internal projects. We collaborate with clients' internal teams to conduct audits according to their requirements and ensure the best delivery. Any support falling within our scope is handled by experts in the field. We review our work thoroughly before delivering assignments to clients. Our assurance services include:
        </p>

        <ul style={styles.list}>
          <li>Internal audit</li>
          <li>Limited assurance</li>
          <li>Assistance in external audit</li>
          <li>Legal & regulatory compliance audit</li>
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
    backgroundColor: '#fcf7f1',
    padding: '20px',
    borderRadius: '10px',
    boxShadow: '0 0 20px rgba(0, 0, 0, 0.2)',
  },
  heading: {
    fontSize: '36px',
    color: '#e74c3c', // Red color
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

export default Tax;
