import React, { useState } from 'react';
import { blogPosts } from '../data/blogData';
import BlogPostCard from '../components/BlogPostCard';

const BlogPage: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [selectedTag, setSelectedTag] = useState<string | null>(null);
  
  // Extract unique categories and tags for sidebar
  const categories = Array.from(new Set(blogPosts.map(post => post.category)));
  const tags = Array.from(new Set(blogPosts.flatMap(post => post.tags)));

  // Filter posts based on search, category, and tag
  const filteredPosts = blogPosts.filter(post => {
    const matchesSearch = searchQuery === '' || 
      post.title.toLowerCase().includes(searchQuery.toLowerCase()) 
    
    const matchesCategory = selectedCategory === null || post.category === selectedCategory;
    const matchesTag = selectedTag === null || post.tags.includes(selectedTag);
    
    return matchesSearch && matchesCategory && matchesTag;
  });

  const recentPosts = blogPosts.slice(0, 2);

  return (
    <div className="min-h-screen bg-gray-50 mt-[80px]">
      {/* Hero Section */}
      <section className="relative flex flex-col md:flex-row items-center justify-between bg-gradient-to-br from-primary via-primary/90 to-secondary rounded-b-[4rem] shadow-2xl overflow-hidden min-h-[60vh] mb-20">
        <div className="absolute inset-0 bg-black/20 z-0"></div>
        <div className="z-10 flex-1 px-8 py-16 md:py-24 flex flex-col justify-center text-center md:text-left">
          <div className="max-w-2xl mx-auto md:mx-0">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-black text-white mb-6 leading-tight">
              Engine SARL <span className="text-secondary block md:inline-block">Blog</span>
            </h1>
            <p className="text-xl md:text-2xl text-white/95 mb-10 max-w-xl font-medium leading-relaxed">
              Stay informed with the latest news, industry insights, and expert advice from Engine SARL.
            </p>
            <div className="relative max-w-md">
              <input 
                type="text" 
                placeholder="Search articles..." 
                className="w-full p-4 pl-12 pr-10 rounded-full border-2 border-white/30 bg-white/20 backdrop-blur-sm text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-secondary focus:border-transparent"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              <svg className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
              </svg>
            </div>
          </div>
        </div>
        <div className="flex-1 flex items-center justify-center relative h-[350px] md:h-[450px]">
          <div className="absolute w-72 h-72 md:w-96 md:h-96 bg-white/10 rounded-full flex items-center justify-center">
            <div className="w-56 h-56 md:w-80 md:h-80 bg-white/20 rounded-full flex items-center justify-center overflow-hidden">
              <img
                src={blogPosts[0].image}
                alt="Blog Hero"
                className="w-full h-full object-cover rounded-3xl shadow-2xl border-4 border-secondary/50"
              />
            </div>
          </div>
        </div>
        {/* Decorative elements */}
        <div className="absolute -top-32 -right-32 w-96 h-96 bg-secondary/40 rounded-full blur-3xl z-0 animate-float" />
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-primary/30 rounded-full blur-3xl z-0 animate-float-reverse" />
      </section>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-10">
          {/* Sidebar */}
          <aside className="lg:col-span-1 flex flex-col gap-8">
            {/* Categories Section */}
            <div className="bg-white rounded-3xl shadow-lg p-8 mb-4 border-l-4 border-secondary">
              <h2 className="text-2xl font-bold text-secondary mb-6 relative pb-2 after:absolute after:bottom-0 after:left-0 after:w-12 after:h-1 after:bg-secondary/30">Categories</h2>
              <ul className="space-y-3">
                <li>
                  <button 
                    onClick={() => setSelectedCategory(null)}
                    className={`w-full text-left p-3 rounded-xl transition-all duration-300 ${selectedCategory === null ? 'bg-secondary/10 text-secondary font-bold' : 'text-gray-700 hover:bg-gray-100'}`}
                  >
                    All Categories
                  </button>
                </li>
                {categories.map(cat => (
                  <li key={cat}>
                    <button 
                      onClick={() => setSelectedCategory(cat)}
                      className={`w-full text-left p-3 rounded-xl transition-all duration-300 ${selectedCategory === cat ? 'bg-secondary/10 text-secondary font-bold' : 'text-gray-700 hover:bg-gray-100'}`}
                    >
                      {cat}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
            
            {/* Tags */}
            <div className="bg-white rounded-3xl shadow-lg p-8 border-l-4 border-secondary">
              <h2 className="text-2xl font-bold text-secondary mb-6 relative pb-2 after:absolute after:bottom-0 after:left-0 after:w-12 after:h-1 after:bg-secondary/30">Tags</h2>
              <div className="flex flex-wrap gap-2">
                <button 
                  onClick={() => setSelectedTag(null)}
                  className={`text-sm px-3 py-1 transition duration-300 ${selectedTag === null ? 'bg-primary text-white' : 'bg-gray-200 text-gray-700 hover:bg-primary hover:text-white'}`}
                >
                  All Tags
                </button>
                {tags.map(tag => (
                  <button 
                    key={tag} 
                    onClick={() => setSelectedTag(tag)}
                    className={`text-sm px-3 py-1 transition duration-300 ${selectedTag === tag ? 'bg-primary text-white' : 'bg-gray-200 text-gray-700 hover:bg-primary hover:text-white'}`}
                  >
                    #{tag}
                  </button>
                ))}
              </div>
            </div>
            
            {/* Recent Posts */}
            <div className="bg-white rounded-3xl shadow-lg p-8 border-l-4 border-secondary">
              <h2 className="text-2xl font-bold text-secondary mb-6 relative pb-2 after:absolute after:bottom-0 after:left-0 after:w-12 after:h-1 after:bg-secondary/30">Recent Posts</h2>
              <div className="space-y-4">
                {recentPosts.map(post => (
                  <div key={post.id} className="flex gap-3 group">
                    <div className="w-16 h-16 flex-shrink-0 overflow-hidden rounded-xl">
                      <img 
                        src={post.image} 
                        alt={post.title} 
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                      />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-800 group-hover:text-secondary transition-colors duration-300 line-clamp-2">{post.title}</h3>
                      <p className="text-sm text-gray-500">{new Date(post.date).toLocaleDateString()}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </aside>
          
          {/* Main Content Area */}
          <div className="lg:col-span-3 flex flex-col gap-14">
            {/* Filter Status */}
            {(selectedCategory || selectedTag || searchQuery) && (
              <div className="bg-white rounded-2xl shadow-lg p-6 flex items-center justify-between">
                <div>
                  <h3 className="text-lg font-semibold text-gray-800">Filtered Results</h3>
                  <p className="text-gray-600">
                    {selectedCategory && `Category: ${selectedCategory} `}
                    {selectedTag && `Tag: ${selectedTag} `}
                    {searchQuery && `Search: "${searchQuery}"`}
                  </p>
                </div>
                <button 
                  onClick={() => {
                    setSelectedCategory(null);
                    setSelectedTag(null);
                    setSearchQuery('');
                  }}
                  className="bg-primary hover:bg-primary/90 text-white font-medium py-2 px-4 transition-all duration-300"
                >
                  Clear Filters
                </button>
              </div>
            )}
            
            {/* Recent Posts Section */}
            {!selectedCategory && !selectedTag && searchQuery === '' && (
              <section className="mb-8">
                <h2 className="text-3xl font-bold text-primary mb-8 relative pb-2 after:absolute after:bottom-0 after:left-0 after:w-16 after:h-1 after:bg-secondary">Featured Posts</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {recentPosts.map(post => (
                    <BlogPostCard key={post.id} post={post} />
                  ))}
                </div>
              </section>
            )}
            
            {/* All Posts Section */}
            <section className="mb-8">
              <h2 className="text-3xl font-bold text-primary mb-8 relative pb-2 after:absolute after:bottom-0 after:left-0 after:w-16 after:h-1 after:bg-secondary">
                {filteredPosts.length === 0 ? 'No Posts Found' : (selectedCategory || selectedTag || searchQuery) ? 'Filtered Posts' : 'All Posts'}
              </h2>
              
              {filteredPosts.length === 0 ? (
                <div className="bg-white rounded-3xl shadow-lg p-12 text-center">
                  <svg className="w-16 h-16 text-gray-400 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                  </svg>
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">No posts match your criteria</h3>
                  <p className="text-gray-600">Try adjusting your filters or search query</p>
                </div>
              ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {filteredPosts.map(post => (
                    <BlogPostCard key={post.id} post={post} />
                  ))}
                </div>
              )}
            </section>
            
            {/* Pagination */}
            {filteredPosts.length > 0 && (
              <div className="flex justify-center mt-8">
                <div className="bg-white rounded-full shadow-lg p-2 flex">
                  <button className="w-10 h-10 flex items-center justify-center rounded-full bg-secondary text-white mr-2">
                    1
                  </button>
                  <button className="w-10 h-10 flex items-center justify-center rounded-full text-gray-700 hover:bg-gray-100 mx-1">
                    2
                  </button>
                  <button className="w-10 h-10 flex items-center justify-center rounded-full text-gray-700 hover:bg-gray-100 mx-1">
                    3
                  </button>
                  <button className="w-10 h-10 flex items-center justify-center rounded-full text-gray-700 hover:bg-gray-100 ml-2">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                    </svg>
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogPage;