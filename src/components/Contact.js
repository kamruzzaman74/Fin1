import React, { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission, e.g., send data to the server
    console.log(formData);

    // Show success message
    setIsSubmitted(true);

    // Reset the form
    setFormData({
      name: '',
      email: '',
      message: '',
    });
  };

  return (
    <div className="min-h-screen py-8 px-4">
      <div className="max-w-3xl mx-auto flex flex-col md:flex-row space-x-8 bg-white p-8 rounded-lg shadow-lg text-gray-800">
        <div className="w-full md:w-1/2">
          <h2 className="text-3xl font-semibold mb-4">Contact Us</h2>
          {isSubmitted ? (
            <div className="text-green-600 mb-4">Thank you for your message! We'll get back to you soon.</div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-lg font-semibold text-gray-800">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full border-2 border-purple-400 p-3 rounded focus:outline-none focus:ring focus:border-purple-500"
                  placeholder="Your Name"
                  required
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-lg font-semibold text-gray-800">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full border-2 border-purple-400 p-3 rounded focus:outline-none focus:ring focus:border-purple-500"
                  placeholder="Your Email"
                  required
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-lg font-semibold text-gray-800">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full border-2 border-purple-400 p-3 rounded focus:outline-none focus:ring focus:border-purple-500"
                  rows="4"
                  placeholder="Your Message"
                  required
                />
              </div>
              <button
                type="submit"
                className="bg-purple-700 text-white py-3 px-6 rounded-full hover:bg-purple-800 focus:outline-none w-full transform transition-transform duration-300 hover:scale-105"
              >
                Send Message
              </button>
            </form>
          )}
        </div>
        <div className="w-full md:w-1/2 mt-8 md:mt-0">
          {/* Embedded Map */}
          <iframe
            title="Our Location"
            width="100%"
            height="300"
            frameBorder="0"
            scrolling="no"
            marginHeight="0"
            marginWidth="0"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3649.2424654342466!2d90.41326171534973!3d23.748552090932758!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c6e220cbb79d%3A0x9f8b8323b0955861!2sKarwan%20Bazar%2C%20Dhaka!5e0!3m2!1sen!2sbd!4v1644347946342!5m2!1sen!2sbd"
          />
        </div>
      </div>
      <div className="max-w-md mx-auto mt-8 p-6 rounded-lg shadow-md text-gray-800">
        <h2 className="text-3xl font-semibold mb-4">Our Address</h2>
        <p className="text-gray-600">
          -3/7/B, Garden Road,
          <br />
          Karwan Bazar, Dhaka
          <br />
          Bangladesh
          <br />
          Phone: 01576672498
        </p>
      </div>
    </div>
  );
};

export default Contact;
