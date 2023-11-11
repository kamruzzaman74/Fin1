
import React from 'react';
import aboutImage from '../photo/kg.jpg';
import '../components/About.css'; // Import the CSS file

const About = () => {
  return (
    <section className="bg-white py-16 md:py-20 lg:py-24">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between">
        <div className="md:w-1/2 relative">
          <div className="rounded-full overflow-hidden w-64 h-64 md:w-80 md:h-80  animated-image">
            <img
              src={aboutImage}
              alt="About Us"
              className="w-full h-full object-cover rounded-full"
            />
          </div>
        </div>
        <div className="md:w-1/2 bg-gradient-to-t from-blue-500 to-yellow-200 p-6 rounded-lg shadow-lg">
          <h2 className="text-4xl sm:text-5xl font-extrabold text-white mb-4">
            Who we are
          </h2>
          <div className="box">
            <p className="text-xl text-white mt-4">
              We are a newly established consultancy firm with a bunch of professionals who are very expert and dedicated to work.
            </p>
          </div>
          <div className="box">
            <p className="text-xl text-white mt-4">
              Our team is composed of diversified knowledge on many things such as financial reporting, taxation services, legal and regulatory requirements of companies along with individuals.
            </p>
          </div>
          <div className="box">
            <p className="text-xl text-white mt-4">
              We are capable of analyzing financial data in a systematic way so that anyone can take data-driven decisions. We strive to give our clients the best services in a designed way that is value for money for parties. We thrive for quality services as we go through from one service assignment to the next.
              <br /><br />
              <strong>What we do (Our mission):</strong> Ensuring quality services for clients is our ultimate goal. Utilizing our acquired skills and experiences over time to provide fast solution services in the complex business world. We aim to be a one-stop solution for any kind of help needed by corporations.
              <br /><br />
              <strong>Our area of expertise:</strong> We have a great team of professional experts who are running their careers in the dynamic business finance & accounting world. Our area of expertise includes financial accounting, management accounting, and taxation both direct and indirect (VAT), business valuation, individual asset valuation, RJSC return filing, BIDA-related any work, and so on.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;




