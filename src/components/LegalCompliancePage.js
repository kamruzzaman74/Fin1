import React from 'react';

const LegalCompliancePage = () => {
  return (
    <div className="bg-blue-800 text-white py-8">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-extrabold text-yellow-400 mb-8">
          Legal and Compliance
        </h2>
        <div className="text-left prose prose-lg text-gray-200">
          <h3 className="text-2xl font-semibold text-blue-400 mb-2">Terms of Service</h3>
          <p>
            Welcome to Your CA Firm. By accessing our website, you agree to comply with and be bound by our{' '}
            <a
              href="/terms-of-service"
              className="text-blue-400 hover:underline transition duration-300 ease-in-out"
            >
              Terms of Service
            </a>.
          </p>
          <h3 className="text-2xl font-semibold text-blue-400 mt-4 mb-2">Privacy Policy</h3>
          <p>
            Our Privacy Policy outlines how we collect, use, and protect your personal information. We take your privacy seriously and ensure compliance with data protection laws.
          </p>
          <h3 className="text-2xl font-semibold text-blue-400 mt-4 mb-2">Compliance with Regulations</h3>
          <p>
            Your CA Firm is committed to complying with all relevant laws and regulations related to financial services, accounting, and auditing. We strictly adhere to industry standards and legal requirements to ensure the highest level of compliance.
          </p>
          <h3 className="text-2xl font-semibold text-blue-400 mt-4 mb-2">Disclaimers</h3>
          <p>
            The information provided on this website is for general informational purposes only. It is not intended to serve as professional advice. Please consult with our experts for personalized guidance.
          </p>
          <h3 className="text-2xl font-semibold text-blue-400 mt-4 mb-2">Contact Us</h3>
          <p>
            If you have any questions or concerns about our legal and compliance practices, please don't hesitate to{' '}
            <a
              href="/contact"
              className="text-blue-400 hover:underline transition duration-300 ease-in-out"
            >
              contact us
            </a>.
          </p>
        </div>
      </div>
    </div>
  );
};

export default LegalCompliancePage;






