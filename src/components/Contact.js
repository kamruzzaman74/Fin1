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
    <div className="min-h-screen bg-white py-8 px-4">
      <div className="max-w-md mx-auto w-full bg-blue-300 p-4 rounded-lg shadow-md text-black">
        <h2 className="text-2xl sm:text-3xl font-semibold mb-2 text-yellow-700">Contact Us</h2>
        {isSubmitted ? (
          <div className="text-green-600 mb-2">Thank you for your message! We'll get back to you soon.</div>
        ) : (
          <form onSubmit={handleSubmit} className="mb-2">
            <div className="mb-2">
              <label htmlFor="name" className="block text-blue-700 font-semibold mb-2">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full border-2 border-blue-300 p-2 rounded focus:outline-none focus:ring focus:border-blue-500"
                required
              />
            </div>
            <div className="mb-2">
              <label htmlFor="email" className="block text-blue-700 font-semibold mb-2">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full border-2 border-blue-300 p-2 rounded focus:outline-none focus:ring focus:border-blue-500"
                required
              />
            </div>
            <div className="mb-2">
              <label htmlFor="message" className="block text-blue-700 font-semibold mb-2">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                className="w-full border-2 border-blue-300 p-2 rounded focus:outline-none focus:ring focus:border-blue-500"
                rows="4"
                required
              />
            </div>
            <button
              type="submit"
              className="bg-blue-500 text-white py-3 px-6 rounded-full hover:bg-blue-600 focus:outline-none w-full mt-4"
            >
              Submit
            </button>
          </form>
        )}
      </div>
      <div className="max-w-md mx-auto mt-8 bg-yellow-300 p-4 rounded-lg shadow-md text-black">
        <h2 className="text-2xl sm:text-3xl font-semibold mb-2 text-blue-700">Our Address</h2>
        <p className="text-gray-600">
          -3/7/B, Garden Road,
          <br />
          Karwan Bazar, Dhaka
          <br />
          Bangladesh
        </p>
      </div>
    </div>
  );
};

export default Contact;





