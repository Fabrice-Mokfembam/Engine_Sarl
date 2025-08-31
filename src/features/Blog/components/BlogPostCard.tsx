import React from 'react';
import type { BlogPost } from '../data/blogData';


interface BlogPostCardProps {
  post: BlogPost;
}

const BlogPostCard: React.FC<BlogPostCardProps> = ({ post }) => {
  return (
    <div className="bg-white rounded-2xl shadow-lg overflow-hidden flex flex-col h-full border-b-4 border-secondary hover:scale-[1.03] transition-transform">
      <img src={post.image} alt={post.title} className="w-full h-48 object-cover" />
      <div className="p-6 flex flex-col flex-1">
        <div className="flex items-center gap-2 mb-2">
          <span className="text-xs bg-secondary text-white px-3 py-1 rounded-full font-semibold">{post.category}</span>
          <span className="text-xs text-gray-400 ml-auto">{new Date(post.date).toLocaleDateString()}</span>
        </div>
        <h3 className="font-bold text-xl text-dark mb-2 line-clamp-2">{post.title}</h3>
        <p className="text-sm text-dark/70 mb-4 line-clamp-3">{post.summary}</p>
        <div className="flex flex-wrap gap-2 mb-4">
          {post.tags.map(tag => (
            <span key={tag} className="bg-muted text-secondary text-xs px-2 py-1 rounded-full">#{tag}</span>
          ))}
        </div>
        <a href={post.link} className="mt-auto inline-block bg-secondary text-white font-bold py-2 px-6 rounded-full hover:bg-primary transition duration-300 text-sm self-start">Read More &rarr;</a>
      </div>
    </div>
  );
};

export default BlogPostCard;
