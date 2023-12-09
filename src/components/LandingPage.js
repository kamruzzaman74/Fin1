// LandingPage.js
import React from 'react';
import pic from '../photo/mm.jpg';
import '../components/LandingPage.css'; // Import your CSS file
import { Link } from 'react-router-dom';

const LandingPage = () => {
  return (
    <div
      className="landing-page"
      style={{
        backgroundImage: `url(${pic})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        minHeight: '80vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
        color: 'white',
        padding: '20px',
        marginTop: '50px', // Adjust this value for more or less space
      }}
    >
      <div className="overlay">
        <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold mb-4 text-cyan-300 title">
          Welcome to FinVerseBD
        </h1>
        <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-semibold mb-4 text-yellow-300 subtitle">
          Your Trusted Financial Partner
        </h2>

        <Link
          to="/Hire"
          className="ctaok-button mt-4 bg-gradient-to-r from-rose-500 via-pink-500 to-purple-500 hover:from-rose-700 hover:via-pink-700 hover:to-purple-700 text-white px-4 sm:px-6 py-2 sm:py-3 rounded-full font-semibold text-md sm:text-lg transition duration-300 ease-in-out transform hover:scale-105"
        >
          Get Started
        </Link>
      </div>
    </div>
  );
};

export default LandingPage;




