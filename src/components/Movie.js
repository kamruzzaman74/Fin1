import React from 'react';
import '../components/Video.css'; // Import your CSS file
import pic from '../photo/kl.png';

const Movie = () => {
  return (
    <div className="ca-section">
      <img
        src={pic}
        alt="CA Image"
        className="animated-image"
      />
    </div>
  );
};

export default Movie;
