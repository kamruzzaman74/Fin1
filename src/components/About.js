import React from 'react';

// Import your image
import aboutImage from '../photo/r.png';

const About = () => {
  return (
    <section className="bg-gradient-to-b from-yellow-200 to-blue-500 py-16">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between">
        <div className="md:w-1/2">
          <img
            src={aboutImage}
            alt="About Us"
            className="rounded-full w-64 h-64 md:w-80 md:h-80 border-4 border-yellow-400 object-cover shadow-lg"
          />
        </div>
        <div className="md:w-1/2 bg-white p-6 rounded-lg shadow-lg">
          <h2 className="text-3xl sm:text-4xl font-semibold text-blue-700 mb-4">
            Discover Your Financial Journey
          </h2>
          <div className="box">
            <p className="text-lg text-blue-900 mt-4">
              Immerse yourself in the world of Your CA Firm, where financial expertise meets innovation and dedication. Our unwavering commitment to excellence has positioned us as leaders in accounting, auditing, tax planning, and financial consulting. With every step you take with us, you embark on a vibrant and colorful financial adventure.
            </p>
          </div>
          <div className="box">
            <p className="text-lg text-blue-900 mt-4">
              We are a team of professionals driven by a rainbow of talents, each contributing their unique color to create a dazzling spectrum of services. Our goal is to make your financial canvas as bright as possible. With tailored solutions that span the entire spectrum, from tax optimization in vivid green to wealth management in brilliant blue, we paint the picture of your financial success.
            </p>
          </div>
          <div className="box">
            <p className="text-lg text-blue-900 mt-4">
              Your financial well-being is our top priority, painted with the colors of security, prosperity, and trust. As you choose us, you join a masterpiece of financial security. Your journey with us is not just numbers; it's a kaleidoscope of opportunities, and we're here to ensure every hue is vibrant and every chapter is colorful.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
