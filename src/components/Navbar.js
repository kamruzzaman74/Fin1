import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';

function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="bg-white p-4 md:p-0 w-full md:w-full relative z-10">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-4xl font-extrabold text-teal-300">
          FinVerse
        </Link>
        <div className="hidden md:flex space-x-4">
          <Link to="/" className="text-gray-800 font-semibold hover:text-red-600 transition duration-300">
            Home
          </Link>
          <Link to="/blog" className="text-gray-800 font-semibold hover:text-red-600 transition duration-300">
            Blog
          </Link>
          <Link to="/about" className="text-gray-800 font-semibold hover:text-red-600 transition duration-300">
            About
          </Link>
          <Link to="/service" className="text-gray-800 font-semibold hover:text-red-600 transition duration-300">
            Service
          </Link>
          <Link to="/contact" className="text-gray-800 font-semibold hover:text-red-600 transition duration-300">
            Contact
          </Link>
          <Link to="/GetStarted" className="text-white font-semibold hover:text-cyan-300 transition duration-300 rounded-full px-4 py-2 bg-rose-600">
            Get Started
          </Link>
        </div>
        <div className="md:hidden">
          <button
            onClick={toggleMobileMenu}
            className="text-gray-800 focus:outline-none">
            {isMobileMenuOpen ? (
              <FontAwesomeIcon icon={faTimes} size="lg" />
            ) : (
              <FontAwesomeIcon icon={faBars} size="lg" />
            )}
          </button>
        </div>
      </div>
      <div
        className={`md:hidden absolute top-19 right-0 h-screen w-full bg-white z-20 ${
          isMobileMenuOpen
            ? "transition-transform duration-300 ease-in transform translate-x-0"
            : "transition-transform duration-300 ease-out transform translate-x-full"
        }`}
      >
        <ul className="h-full flex flex-col justify-center items-center space-y-4 p-4">
          <Link
            to="/"
            onClick={toggleMobileMenu}
            className="text-gray-800 hover:text-red-600 transition duration-300 ease-in-out transform rounded-full px-4 py-2 bg-yellow-400">
            Home
          </Link>
          <Link
            to="/blog"
            onClick={toggleMobileMenu}
            className="text-gray-800 hover-text-red-600 transition duration-300 ease-in-out transform rounded-full px-4 py-2 bg-yellow-400">
            Blog
          </Link>
          <Link
            to="/about"
            onClick={toggleMobileMenu}
            className="text-gray-800 hover-text-red-600 transition duration-300 ease-in-out transform rounded-full px-4 py-2 bg-yellow-400">
            About
          </Link>
          <Link
            to="/service"
            onClick={toggleMobileMenu}
            className="text-gray-800 hover-text-red-600 transition duration-300 ease-in-out transform rounded-full px-4 py-2 bg-yellow-400">
            Service
          </Link>
          <Link
            to="/contact"
            onClick={toggleMobileMenu}
            className="text-gray-800 hover-text-red-600 transition duration-300 ease-in-out transform rounded-full px-4 py-2 bg-yellow-400">
            Contact
          </Link>
          <Link
            to="/GetStarted"
            onClick={toggleMobileMenu}
            className="text-white hover-text-red-600 transition duration-300 ease-in-out transform rounded-full px-4 py-2 bg-rose-600">
            Get Started
          </Link>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
