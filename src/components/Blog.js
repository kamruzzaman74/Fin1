// src/components/Home.js
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { getBlogPosts } from './BlogData';

const Blog = () => {
  const [blogPosts, setBlogPosts] = useState([]);

  useEffect(() => {
    getBlogPosts().then((data) => setBlogPosts(data));
  }, []);

  return (
    <div className="container mx-auto p-8">
      <h1 className="text-4xl font-extrabold text-primary my-6">
        Welcome to Our <span className="text-fancyblue"> Blog</span>
      </h1>
      <div className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {blogPosts.map((post) => (
          <div
            key={post.id}
            className="bg-white rounded-lg p-6 shadow-md transition-transform transform hover:scale-105 hover:shadow-fancy"
          >
            <Link to={`/blog/${post.id}`}>
              <h2 className="text-2xl font-semibold text-fancyblue">{post.title}</h2>
              <p className="mt-4 text-fancygreen">{post.content}</p>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Blog;


