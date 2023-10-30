import React from 'react';

function Btest() {
  // Your blog content goes here
  return (
    <div className="bg-white p-4 shadow-md rounded-md">
      <h1 className="text-2xl font-bold mb-4">Announcements</h1>
      {/* Render announcements here */}
      {/* You can map through announcements and display them */}
      <div className="mb-6">
        <p className="text-lg font-semibold">Announcement Title</p>
        <p className="text-gray-600">Announcement Content</p>
      </div>

      <h1 className="text-2xl font-bold mb-4">Blog Posts</h1>
      {/* Render blog posts here */}
      {/* You can map through blog posts and display them */}
      <div className="mb-6">
        <p className="text-lg font-semibold">Blog Post Title</p>
        <p className="text-gray-600">Blog Post Content</p>
        {/* Display uploaded pictures here */}
        <img src="blog-post-image.jpg" alt="Blog Post" className="w-full rounded-md" />
      </div>
    </div>
  );
}

export default Btest;
