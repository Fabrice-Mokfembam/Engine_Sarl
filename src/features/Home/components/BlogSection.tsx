import React from 'react';
import { Link } from 'react-router-dom';

interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  date: string;
}

const BlogSection: React.FC = () => {
  const blogPosts: BlogPost[] = [
    {
      id: 1,
      title: "Top Tips for Engine Maintenance in Tropical Climates",
      excerpt: "Learn how to protect your engine from the challenges of Cameroon's climate with proper maintenance techniques.",
      date: "2023-10-15"
    },
    {
      id: 2,
      title: "Understanding Oil Viscosity: What Do Those Numbers Mean?",
      excerpt: "A comprehensive guide to understanding engine oil grades and choosing the right one for your vehicle.",
      date: "2023-09-28"
    }
  ];

  return (
    <section className="py-20 bg-gray-100">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">Latest From Our Blog</h2>
          <p className="text-xl text-gray-600">Stay informed with industry insights, tips, and company news</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {blogPosts.map(post => (
            <div key={post.id} className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300">
              <div className="h-48 bg-gradient-to-r from-primary to-secondary flex items-center justify-center">
                <svg className="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z"></path>
                </svg>
              </div>
              <div className="p-6">
                <span className="text-sm text-gray-500">{new Date(post.date).toLocaleDateString()}</span>
                <h3 className="text-xl font-bold text-primary my-3">{post.title}</h3>
                <p className="text-gray-700 mb-4">{post.excerpt}</p>
                <Link to={`/blog/${post.id}`} className="text-secondary font-semibold hover:underline">
                  Read More →
                </Link>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <Link to="/blog" className="bg-primary hover:bg-primary/90 text-white font-bold py-3 px-8 shadow-lg transition-all duration-300 inline-block">
            View All Articles
          </Link>
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
