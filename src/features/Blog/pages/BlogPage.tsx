import React from 'react';

const BlogPage: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-4xl font-bold text-gray-800 mb-4">Our Blog</h1>
      <p className="text-lg text-gray-600">Read our latest articles and news.</p>
    </div>
  );
};

export default BlogPage;