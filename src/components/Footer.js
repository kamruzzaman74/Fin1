import React from 'react';
import { FaFacebook, FaLinkedin, FaYoutube } from 'react-icons/fa'; // Import your preferred icons

const Footer = () => {
  return (
    <footer className="bg-gradient-to-tl from-blue-900 via-blue-700 to-blue-500 text-white py-6">
      <div className="container mx-auto flex flex-col items-center">
        <div className="text-2xl font-bold mb-4">Stay Connected</div>
        <div className="flex items-center space-x-4">
          <div className="flex-shrink-0">
            <FaFacebook size={24} />
          </div>
          <div className="flex-shrink-0">
            <FaLinkedin size={24} />
          </div>
          <div className="flex-shrink-0">
            <FaYoutube size={24} />
          </div>
        </div>
        <div className="mt-4">
          &copy; growMore19. All rights reserved.
        </div>
        <div className="mt-4 flex space-x-4">
          <a href="https://www.facebook.com/yourfacebookpage" target="_blank" rel="noopener noreferrer" className="text-white hover:text-blue-400 hover:underline">
            Facebook
          </a>
          <a href="https://www.linkedin.com/company/yourlinkedinpage" target="_blank" rel="noopener noreferrer" className="text-white hover:text-blue-400 hover:underline">
            LinkedIn
          </a>
          <a href="https://www.youtube.com/youryoutubepage" target="_blank" rel="noopener noreferrer" className="text-white hover:text-blue-400 hover:underline">
            YouTube
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

