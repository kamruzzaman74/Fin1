import React, { useState, useEffect } from 'react';
import pic from '../photo/t.jpg';

const LandingPage = () => {
  const [bgColor, setBgColor] = useState('#FF5733');

  const fancyTextVariants = {
    hidden: {
      opacity: 0,
      y: 20,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        delay: 1,
        duration: 1,
        type: 'spring',
        damping: 10,
        stiffness: 100,
      },
    },
  };

  useEffect(() => {
    const colors = ['#FF5733', '#33FF57', '#5733FF', '#FFFF33', '#FF33FF'];
    let currentIndex = 0;

    const interval = setInterval(() => {
      currentIndex = (currentIndex + 1) % colors.length;
      setBgColor(colors[currentIndex]);
    }, 4000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <div
      style={{
        backgroundColor: bgColor,
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <header
        style={{ textAlign: 'center', color: 'white', textShadow: '2px 2px 4px rgba(0, 0, 0, 0.4)' }}
      >
        <h1 className="text-6xl font-extrabold text-purple-600" style={{ margin: 0 }}>
          Welcome to Our
        </h1>
        <h1 className="text-6xl font-extrabold text-blue-600" style={{ margin: 0 }}>
          CA Firm
        </h1>
      </header>

      <div
        style={{
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
        }}
      >
        <div style={{ flex: 1 }}>
          <h2
            className="text-3xl font-semibold mb-4 text-blue-700"
            style={{ margin: '1rem 0' }}
          >
            Your Trusted Financial Partner
          </h2>
          <p
            style={{
              fontSize: '1.2rem',
              lineHeight: '1.6',
              maxWidth: '400px',
              textAlign: 'left',
              textShadow: '1px 1px 2px rgba(0, 0, 0, 0.2)',
            }}
          >
            Elevate your financial journey with our expert solutions and unwavering commitment.
          </p>
          <button
            className="cta-button"
            style={{
              backgroundColor: 'blue',
              color: 'white',
              fontSize: '1.5rem',
              padding: '1rem 2rem',
              border: 'none',
              borderRadius: '5px',
              cursor: 'pointer',
              transition: 'background-color 0.3s ease',
            }}
          >
            Discover More
          </button>
        </div>

        <div style={{ flex: 1, marginLeft: '2rem' }}>
          <img
            src={pic}
            alt="pic"
            style={{
              width: '100%',
              maxWidth: '400px',
              borderRadius: '10px',
              boxShadow: '0 0 10px rgba(0, 0, 0, 0.3)',
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default LandingPage;

