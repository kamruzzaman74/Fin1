import React from 'react';
import pic from '../photo/jj.png';
import '../components/LandingPage.css'; // Import your CSS file

const LandingPage = () => {
  return (
    <div
      style={{
        backgroundImage: `url(${pic})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
        color: 'white',
      }}
    >
      <div>
        <h1 className="text-3xl sm:text-5xl md:text-6xl font-extrabold mb-4 text-cyan-300">
          Welcome to Our CA Firm
        </h1>
        <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold mb-4 text-yellow-300">
          Your Trusted Financial Partner
        </h2>
        <p
          style={{
            fontSize: '1.4rem',
            lineHeight: '1.6',
            maxWidth: '600px',
          }}
        >
          Elevate your financial journey with our expert solutions and unwavering commitment. We provide a wide range of financial services tailored to your specific needs, ensuring your financial success.
        </p>
        <button className="ctao-button">
          Hire Us
        </button>
      </div>
    </div>
  );
};

export default LandingPage;









