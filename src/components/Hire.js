import React, { useState } from 'react';
import { FaCalendarAlt } from 'react-icons/fa';

const Hire = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    date: '',
    time: '',
  });

  const [submitMessage, setSubmitMessage] = useState('');

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your logic to handle the form submission (e.g., sending data to the server)
    console.log('Form submitted:', formData);

    // Display a success message
    setSubmitMessage('Form submitted successfully!');

    // Clear the form
    setFormData({
      name: '',
      email: '',
      phone: '',
      service: '',
      date: '',
      time: '',
    });
  };

  return (
    <div className="flex flex-col items-center justify-center">
      <div className="max-w-md mx-auto bg-white p-6 rounded-md shadow-md mb-8">
        <h2 className="text-2xl font-semibold mb-4">Book an Appointment</h2>
        {submitMessage && (
          <div className="mb-4 text-green-600 font-semibold">{submitMessage}</div>
        )}
        <form onSubmit={handleSubmit}>
          {/* Full Name */}
          <div className="mb-4">
            <label htmlFor="name" className="block text-gray-700 text-sm font-medium">
              Full Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="mt-1 p-2 w-full border rounded-md focus:outline-none focus:ring focus:border-blue-300"
              required
            />
          </div>

          {/* Email */}
          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-700 text-sm font-medium">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="mt-1 p-2 w-full border rounded-md focus:outline-none focus:ring focus:border-blue-300"
              required
            />
          </div>

          {/* Phone Number */}
          <div className="mb-4">
            <label htmlFor="phone" className="block text-gray-700 text-sm font-medium">
              Phone Number
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              className="mt-1 p-2 w-full border rounded-md focus:outline-none focus:ring focus:border-blue-300"
              required
            />
          </div>

          {/* Service Needed */}
          <div className="mb-4">
            <label htmlFor="service" className="block text-gray-700 text-sm font-medium">
              Service Needed
            </label>
            <input
              type="text"
              id="service"
              name="service"
              value={formData.service}
              onChange={handleChange}
              className="mt-1 p-2 w-full border rounded-md focus:outline-none focus:ring focus:border-blue-300"
              required
            />
          </div>

          {/* Preferred Date */}
          <div className="mb-4">
            <label htmlFor="date" className="block text-gray-700 text-sm font-medium">
              Preferred Date
            </label>
            <input
              type="date"
              id="date"
              name="date"
              value={formData.date}
              onChange={handleChange}
              className="mt-1 p-2 w-full border rounded-md focus:outline-none focus:ring focus:border-blue-300"
              required
            />
          </div>

          {/* Preferred Time */}
          <div className="mb-4">
            <label htmlFor="time" className="block text-gray-700 text-sm font-medium">
              Preferred Time
            </label>
            <input
              type="time"
              id="time"
              name="time"
              value={formData.time}
              onChange={handleChange}
              className="mt-1 p-2 w-full border rounded-md focus:outline-none focus:ring focus:border-blue-300"
              required
            />
          </div>

          <div className="flex justify-end">
            <button
              type="submit"
              className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition duration-300"
            >
              Submit
            </button>
          </div>
        </form>
      </div>

      {/* Free Consultation Section */}
      <div className="max-w-md mx-auto bg-white p-6 rounded-md shadow-md">
        <h2 className="text-2xl font-semibold mb-4 flex items-center">
          <FaCalendarAlt className="w-6 h-6 mr-2" />
          Free Consultation
        </h2>
        <p className="text-gray-700">
          As a CA firm, we offer free consultations to discuss your financial needs and provide
          personalized advice. Schedule a consultation today to get started on your financial
          journey with us.
        </p>
        <div className="flex justify-end mt-4">
          <button className="px-4 py-2 bg-green-500 text-white rounded-md hover:bg-green-600 transition duration-300">
            stay with us
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hire;



