// FinancialBlog.js
import React from 'react';
import announcementImage from '../photo/nnn.jpg';
import announcementImage1 from '../photo/kl.png';

const Blog = () => {
  // Main announcement
  const announcement = {
    title: 'Important Announcement: New Investment Opportunity!',
    description: 'We are excited to introduce a new investment opportunity that aligns with our commitment to financial growth and stability. Learn more about this exciting venture and how it can benefit you.',
    imageUrl: announcementImage, // Use the imported variable directly
  };

  // Dummy data for blog posts
  const blogPosts = [
    {
      title: 'Navigating Market Trends: A Guide for Investors',
      description: 'In this post, we explore the latest market trends and provide valuable insights for investors looking to make informed decisions. Stay ahead of the curve and optimize your investment strategy.',
      imageUrl: announcementImage1, // Use the same image for simplicity, replace with the actual image URL
    },
    // Add more blog posts as needed
  ];

  return (
    <div className="max-w-2xl mx-auto mt-8">
      {/* Main Announcement */}
      <div className="mb-8 p-4 border rounded-lg bg-blue-100">
        <div className="flex items-center justify-center">
          <img src={announcement.imageUrl} alt={announcement.title} className="w-1/2 h-48 object-cover rounded-lg mr-4" />
          <div>
            <h1 className="text-3xl font-bold mb-2">{announcement.title}</h1>
            <p className="text-lg mb-4">{announcement.description}</p>
           
          </div>
        </div>
      </div>

      {/* Blog Posts */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {blogPosts.map((post, index) => (
          <div key={index} className="p-4 border rounded-lg">
            <img src={post.imageUrl} alt={post.title} className="w-full h-48 object-cover mb-4 rounded-lg" />
            <h2 className="text-2xl font-bold mb-2">{post.title}</h2>
            <p className="text-lg mb-4">{post.description}</p>
            {/* You can add more content or styling as needed */}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Blog;

       



