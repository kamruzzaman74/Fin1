import React from 'react';
import LandingPage from '../components/LandingPage';
import Service from '../components/Service';
import CardOperation from '../components/CardOperation';
import PortfolioPage from '../components/PortfolioPage';
import LegalCompliancePage from'../components/LegalCompliancePage';
function Home() {
  return (
    <div>
      <LandingPage />
      <Service />
      <CardOperation />
      {/* Render the CaseStudy component here */}
      <section className="bg-white text-gray-800 py-8 sm:py-12">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-extrabold mb-4 text-blue-700">
            Discover Our Expertise
          </h2>
          <p className="text-xl sm:text-2xl md:text-3xl lg:text-4xl mb-6 text-gray-600">
            With years of experience, we provide professional and reliable financial services tailored to your needs.
          </p>
          <p className="text-xl sm:text-2xl md:text-3xl lg:text-4xl text-blue-700">
            Our services include accounting, auditing, tax planning, financial consulting, and more.
          </p>
        </div>
      </section>

      {/* Hire Us Section */}
      <section className="bg-red-600 text-white py-8">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-extrabold mb-4">
            Hire Us Today
          </h2>
          <p className="text-xl sm:text-2xl md:text-3xl lg:text-4xl mb-6">
            Let our experts help you with your financial needs.
          </p>
          <a
            href="#contact"
            className="bg-yellow-400 hover:bg-white text-black px-8 py-4 sm:px-10 sm:py-5 rounded-full font-semibold transition duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg"
          >
            Contact us
          </a>
        </div>
      </section>
      <PortfolioPage />
      <LegalCompliancePage/>
    </div>
  );
}

export default Home;
