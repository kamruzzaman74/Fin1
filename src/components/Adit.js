import React from 'react';

function Adit() {
  return (
    <div style={styles.container}>
      <div style={styles.background}></div>
      <div style={styles.content}>
        <h1 style={styles.heading}>Taxation Services</h1>
        <p style={styles.paragraph}>
          We have a sophisticated and experienced team dedicated to handling various types of taxation services applicable in Bangladesh. Our services go beyond simply submitting tax returns; we offer comprehensive tax planning and advisory services to ensure you navigate complex issues effectively. Our taxation services include:
        </p>

        <ul style={styles.list}>
          <li>Corporate tax statements preparation and year-round planning</li>
          <li>Individual tax planning and return filing</li>
          <li>Tax advisory services on complex matters</li>
          <li>Value Added Tax (VAT) planning and return filing</li>
        </ul>
      </div>
    </div>
  );
}

const styles = {
  container: {
    position: 'relative',
    maxWidth: '800px',
    margin: '0 auto',
    padding: '40px',
    textAlign: 'center',
    overflow: 'hidden',
  },
  background: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    backgroundImage: 'linear-gradient(to right top, #65dfc9, #6cdbeb)',
    zIndex: -1,
  },
  content: {
    backgroundColor: 'rgba(255, 255, 255, 0.9)',
    padding: '20px',
    borderRadius: '10px',
    boxShadow: '0 0 20px rgba(0, 0, 0, 0.2)',
    position: 'relative',
    zIndex: 1,
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

export default Adit;

