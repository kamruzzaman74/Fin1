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
        backgroundPosition: 'center',
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
        color: 'white',
        padding: '20px',
      }}
    >
      <div style={{ backgroundColor: 'rgba(0, 0, 0, 0.7)', padding: '20px', borderRadius: '10px', maxWidth: '600px' }}>
        <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold mb-4 text-cyan-300 title">
          Welcome to FinVerse
        </h1>
        <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-semibold mb-4 text-yellow-300 subtitle">
          Your Trusted Financial Partner
        </h2>
        <p className="paragraph text-sm sm:text-base md:text-lg lg:text-xl">
          Elevate your financial journey with our expert solutions and unwavering commitment. We provide a wide range of financial services tailored to your specific needs, ensuring your financial success.
        </p>

        <Link to="/Hire" className="ctaok-button mt-4 bg-rose-500 hover:bg-rose-700 text-white px-4 sm:px-6 py-2 sm:py-3 rounded-full font-semibold text-md sm:text-lg transition duration-300 ease-in-out transform hover:scale-105">
          Get Started
        </Link>
      </div>
    </div>
  );
};

export default LandingPage;


