import React from 'react';
import pic from '../photo/jj.png';
import '../components/LandingPage.css'; // Import your CSS file
import { Link } from 'react-router-dom';

const LandingPage = () => {
  return (
    <div
    style={{
      backgroundImage: `url(${pic})`,
      backgroundSize: 'cover',
      backgroundPosition: 'right', // Adjusted background position
      minHeight: '100vh',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      textAlign: 'center',
      color: 'white',
      marginTop: '50px', // Adjusted top margin
    }}
    >
      <div style={{ backgroundColor: 'rgba(0, 0, 0, 0.7)', padding: '20px', borderRadius: '10px' }}>
        <h1 className="text-3xl sm:text-5xl md:text-6xl font-extrabold mb-4 text-cyan-300 title">
          Welcome to FinVerse
        </h1>
        <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold mb-4 text-yellow-300 subtitle">
          Your Trusted Financial Partner
        </h2>
        <p className="paragraph"
          style={{
            fontSize: '1.4rem',
            lineHeight: '1.6',
            maxWidth: '600px',
            margin: '0 auto',
          }}
        >
          Elevate your financial journey with our expert solutions and unwavering commitment. We provide a wide range of financial services tailored to your specific needs, ensuring your financial success.
        </p>
       
        <Link to="/Hire" className="ctao-button">
          Hire us
        </Link>
      </div>
    </div>
  );
};

export default LandingPage;
