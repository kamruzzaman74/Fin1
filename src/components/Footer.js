import React from 'react';
import { FaFacebook, FaLinkedin, FaYoutube } from 'react-icons/fa';
import '../components/Footer.css';
const Footer = () => {
  return (
    <footer className="bg-white text-gray-800 py-6">
      <div className="container mx-auto flex flex-col items-center">
        <div className="text-3xl font-extrabold text-cyan-300 mb-4">Stay Connected</div>
        <div className="social-icons">
          <div className="social-link">
            <a href="https://www.facebook.com/finversebd" target="_blank" rel="noopener noreferrer">
              <FaFacebook size={28} color="#1877F2" />
            </a>
          </div>
          <div className="social-link">
            <a href="https://www.linkedin.com/company/finversebd" target="_blank" rel="noopener noreferrer">
              <FaLinkedin size={28} color="#0A66C2" />
            </a>
          </div>
          <div className="social-link">
            <a href="https://www.youtube.com/youryoutubepage" target="_blank" rel="noopener noreferrer">
              <FaYoutube size={28} color="#FF0000" />
            </a>
          </div>
        </div>
        <div className="mt-4 text-sm text-gray-500">
          &copy; growMore19. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;

