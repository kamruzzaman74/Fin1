import React from 'react';
import LandingPage from '../components/LandingPage';
import Service from '../components/Service';
import CardOperation from '../components/CardOperation';
import PortfolioPage from '../components/PortfolioPage';
import { Link } from 'react-router-dom';
import '../components/Home.css';

function Home() {
  return (
    <div>
      <LandingPage />
      <Service />
      <CardOperation />
      
      <section className="bg-white text-gray-800 py-8 sm:py-12">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-extrabold mb-4 text-rose-600">
            Discover Our Expertise
          </h2>
          <p className="text-xl sm:text-2xl md:text-3xl lg:text-4xl mb-6 text-sky-400">
            With years of experience, we provide professional and reliable financial services tailored to your needs.
          </p>
          <p className="text-xl sm:text-2xl md:text-3xl lg:text-4xl text-teal-200">
            Our services include accounting, auditing, tax planning, financial consulting, and more.
          </p>
        </div>
      </section>

      <section className="bg-red-600 text-white py-8">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-extrabold mb-4">
            Hire Us Today
          </h2>
          <p className="text-xl sm:text-2xl md:text-3xl lg:text-4xl mb-6">
            Let our experts help you with your financial needs.
          </p>
          
          <Link to="/contact" className="cta-button">
            Contact us
          </Link>
        </div>
      </section>
      <PortfolioPage />
    
    </div>
  );
}

export default Home;

