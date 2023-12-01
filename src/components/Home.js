import React from 'react';
import LandingPage from '../components/LandingPage';
import Service from '../components/Service';
import Business from '../components/Business';
import { Link } from 'react-router-dom';
import '../components/Home.css';
import Special from '../components/Special';
import Circle from '../components/Circle';
import StockGraphPage from'../components/StockGraphPage';
function Home() {
  return (
    <div>
      <LandingPage />
      <Service />
      <Business />
      <Special />
      <Circle />
      <StockGraphPage/>

      <section className="bg-white text-gray-800 py-8 sm:py-12 animate__animated animate__fadeIn">
        <div className="container mx-auto text-center">
          {/* Your content here */}
        </div>
      </section>

      <section className="bg-red-600 text-white py-8 animate__animated animate__fadeInUp">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-extrabold mb-4">Hire Us Today</h2>
          <p className="text-xl sm:text-2xl md:text-3xl lg:text-4xl mb-6">
            Let our experts help you with your financial needs.
          </p>

          <Link to="/contact" className="cta-button-fancy">
  <span>Contact us</span>
</Link>
        </div>
      </section>
    </div>
  );
}

export default Home;


