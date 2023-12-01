import React from 'react';
import aboutImage1 from '../photo/ggg2.png';
import aboutImage4 from '../photo/kg.jpg';
import aboutImage2 from '../photo/t.jpg';
import aboutImage3 from '../photo/jj.png';
import '../components/About.css';

const About = () => {
  return (
    <section className="bg-white py-16 md:py-20 lg:py-24">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between">
        <div className="md:w-1/2 relative">
          <div className="rounded-full overflow-hidden w-64 h-64 md:w-80 md:h-80 animated-image">
            <img
              src={aboutImage1}
              alt="About Us"
              className="w-full h-full object-cover rounded-full transform hover:scale-105 transition duration-300"
            />
          </div>
        </div>
        <div className="md:w-1/2 bg-white p-6 rounded-lg shadow-lg">
          <h2 className="text-4xl sm:text-5xl font-extrabold text-purple-800 mb-4 leading-tight">
            <span className="text-pink-600">Our Story</span>
          </h2>
          <div className="box">
            <p className="text-lg text-gray-700 mt-4 leading-relaxed fancy-paragraph">
              We are a dynamic financial consultancy firm with a team of creative professionals dedicated to their field of work. Our team has diverse knowledge in financial reporting, taxation services, legal and regulatory requirements for companies and individuals. We analyze financial data systematically, empowering our clients to make data-driven decisions. Our commitment is to provide high-quality services that offer value for money.
            </p>
          </div>
        </div>
      </div>
      <div className="container mx-auto text-center mt-8">
        <h1 className="text-3xl sm:text-4xl font-extrabold text-purple-800 mb-2 leading-tight">Meet Our Visionaries</h1>
        <p className="text-gray-700 text-lg leading-relaxed fancy-paragraph">
          We have a great team of professional experts who are running their careers in the dynamic business finance & accounting world. Our area of expertise includes financial & management accounting, taxation both direct and indirect (VAT), valuation both for individual and business as per required standard, RJSC, BIDA-related any work, and so on.
        </p>
      </div>
      <div className="container mx-auto mt-8 flex justify-between flex-wrap">
        <div className="team-member">
          <img src={aboutImage4} alt="Team Member 1" className="rounded-lg w-32 h-32 md:w-48 md:h-48 object-cover mb-4 mx-auto transform hover:rotate-12 transition duration-300" />
          <p className="text-purple-800 text-lg font-semibold mb-2">Rakibun Mridha</p>
          <p className="text-gray-700 text-md fancy-paragraph">Financial Maestro</p>
        </div>
        <div className="team-member">
          <img src={aboutImage2} alt="Team Member 2" className="rounded-lg w-32 h-32 md:w-48 md:h-48 object-cover mb-4 mx-auto transform hover:rotate-12 transition duration-300" />
          <p className="text-purple-800 text-lg font-semibold mb-2">Jane Smith</p>
          <p className="text-gray-700 text-md fancy-paragraph">Tax Virtuoso</p>
        </div>
        <div className="team-member">
          <img src={aboutImage3} alt="Team Member 3" className="rounded-lg w-32 h-32 md:w-48 md:h-48 object-cover mb-4 mx-auto transform hover:rotate-12 transition duration-300" />
          <p className="text-purple-800 text-lg font-semibold mb-2">Bob Johnson</p>
          <p className="text-gray-700 text-md fancy-paragraph">Legal Luminary</p>
        </div>
      </div>
    </section>
  );
};

export default About;
