// src/components/BlogPostDetail.js
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getBlogPostById } from '../components/BlogData';

const BlogPostDetail = () => {
  const { id } = useParams();
  const [blogPost, setBlogPost] = useState(null);

  useEffect(() => {
    getBlogPostById(Number(id)).then((data) => setBlogPost(data));
  }, [id]);

  if (!blogPost) {
    return <div>Loading...</div>;
  }

  return (
    <div className="container mx-auto my-4">
      <h1 className="text-3xl font-bold">{blogPost.title}</h1>
      <p className="mt-4 text-gray-700">{blogPost.content}</p>
    </div>
  );
};

export default BlogPostDetail;
