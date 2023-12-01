// CircularProgressBar.js
import React, { useState, useEffect } from 'react';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css'; // Import the styles
// Import your Tailwind CSS file

const CircularProgressBar = () => {
  const [progress1, setProgress1] = useState(0);
  const [progress2, setProgress2] = useState(0);
  const [progress3, setProgress3] = useState(0);
  const [progress4, setProgress4] = useState(0);

  useEffect(() => {
    // Simulating progress update
    const interval = setInterval(() => {
      setProgress1((prevProgress) => (prevProgress + 1) % 101);
      setProgress2((prevProgress) => (prevProgress + 2) % 101);
      setProgress3((prevProgress) => (prevProgress + 3) % 101);
      setProgress4((prevProgress) => (prevProgress + 4) % 101);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-white">
      <h1 className="text-4xl font-bold text-blue-700 mb-8">STAY WITH US</h1>

      {/* Single Row for Circles */}
      <div className="flex flex-wrap justify-center">

        {/* Circle 1 - VAT */}
        <div className="text-center m-8">
          <h2 className="text-2xl font-bold text-red-500 mb-4">VAT</h2>
          <div className="w-32 h-32 mx-auto">
            <CircularProgressbar
              value={progress1}
              text={`${progress1}`}
              styles={buildStyles({
                strokeLinecap: 'butt',
                pathColor: `#EF4444`, // Red
                textColor: '#EF4444',
                trailColor: '#D1D5DB',
              })}
            />
          </div>
        </div>

        {/* Circle 2 - Tax */}
        <div className="text-center m-8">
          <h2 className="text-2xl font-bold text-yellow-500 mb-4">Tax Planning</h2>
          <div className="w-32 h-32 mx-auto">
            <CircularProgressbar
              value={progress2}
              text={`${progress2}`}
              styles={buildStyles({
                strokeLinecap: 'butt',
                pathColor: `#FCD34D`, // Yellow
                textColor: '#FCD34D',
                trailColor: '#D1D5DB',
              })}
            />
          </div>
        </div>

        {/* Circle 3 - Audit */}
        <div className="text-center m-8">
          <h2 className="text-2xl font-bold text-blue-500 mb-4">Audit Services</h2>
          <div className="w-32 h-32 mx-auto">
            <CircularProgressbar
              value={progress3}
              text={`${progress3}`}
              styles={buildStyles({
                strokeLinecap: 'butt',
                pathColor: `#3B82F6`, // Blue
                textColor: '#3B82F6',
                trailColor: '#D1D5DB',
              })}
            />
          </div>
        </div>

        {/* Circle 4 - Finance */}
        <div className="text-center m-8">
          <h2 className="text-2xl font-bold text-green-500 mb-4">Finance</h2>
          <div className="w-32 h-32 mx-auto">
            <CircularProgressbar
              value={progress4}
              text={`${progress4}`}
              styles={buildStyles({
                strokeLinecap: 'butt',
                pathColor: `#10B981`, // Green
                textColor: '#10B981',
                trailColor: '#D1D5DB',
              })}
            />
          </div>
        </div>

      </div>
    </div>
  );
};

export default CircularProgressBar;




