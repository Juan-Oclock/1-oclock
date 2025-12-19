import React from 'react';
import { ArrowRight } from 'lucide-react';
import { BLOG_POSTS } from '../constants';
import { BlogPost } from '../types';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

interface BlogListProps {
  onPostSelect: (post: BlogPost) => void;
}

const BlogList: React.FC<BlogListProps> = ({ onPostSelect }) => {
  const { ref: headerRef, isVisible: headerVisible } = useScrollAnimation<HTMLDivElement>({
    threshold: 0.2
  });

  const { ref: listRef, isVisible: listVisible } = useScrollAnimation<HTMLDivElement>({
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  });

  return (
    <section id="writing" className="py-32 bg-gray-50/90">
      <div className="max-w-5xl mx-auto px-6">
        {/* Header */}
        <div className="mb-16" ref={headerRef}>
          <h2
            className={`text-sm font-semibold text-gray-400 uppercase tracking-widest mb-6 transition-all duration-700 ease-out ${
              headerVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            Thoughts No One Asked For
          </h2>
          <p
            className={`text-2xl sm:text-3xl font-medium text-gray-600 transition-all duration-700 ease-out ${
              headerVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
            style={{ transitionDelay: '100ms' }}
          >
            Notes from building, breaking, and rebuilding.
          </p>
        </div>

        {/* Blog List */}
        <div className="flex flex-col" ref={listRef}>
          {BLOG_POSTS.map((post, index) => (
            <article
              key={post.id}
              onClick={() => onPostSelect(post)}
              className={`group relative flex flex-col md:flex-row md:items-baseline gap-4 md:gap-12 py-10 border-t border-gray-200 cursor-pointer transition-all duration-700 ease-out ${
                listVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              {/* Hover background effect */}
              <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 -mx-4 px-4 rounded-lg"></div>

              {/* Date */}
              <div className="md:w-32 shrink-0 relative z-10">
                <time className="text-sm font-mono text-gray-400 group-hover:text-gray-600 transition-colors duration-300">
                  {post.date}
                </time>
              </div>

              {/* Content */}
              <div className="flex-1 relative z-10">
                <h3 className="text-xl font-bold text-black group-hover:text-gray-600 transition-colors duration-300 mb-3">
                  {post.title}
                </h3>
                <p className="text-gray-600 leading-relaxed max-w-2xl text-base md:text-lg group-hover:text-gray-700 transition-colors duration-300">
                  {post.summary}
                </p>
                <div className="flex items-center gap-4 mt-4 text-xs font-medium text-gray-400 uppercase tracking-wider">
                  <span className="group-hover:text-gray-600 transition-colors duration-300">{post.category}</span>
                  <span className="text-gray-300">•</span>
                  <span>{post.readTime}</span>
                </div>
              </div>

              {/* Arrow */}
              <div className="hidden md:flex items-center pr-4 relative z-10">
                <div className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center opacity-0 translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 group-hover:border-gray-400">
                  <ArrowRight size={18} className="text-gray-400 group-hover:text-black transition-colors duration-300" />
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Secondary CTA */}
        <div
          className={`mt-16 pt-10 border-t border-gray-200 transition-all duration-700 ease-out ${
            listVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
          style={{ transitionDelay: '400ms' }}
        >
          <a
            href="#contact"
            className="group inline-flex items-center gap-4 text-gray-500 font-medium text-lg hover:text-black transition-colors duration-300"
          >
            <span className="relative">
              Like this thinking? Let's work together.
              <span className="absolute bottom-0 left-0 w-full h-px bg-gray-300 transform origin-left transition-transform duration-300 scale-x-0 group-hover:scale-x-100"></span>
            </span>
            <ArrowRight size={20} className="transition-transform duration-300 group-hover:translate-x-2" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default BlogList;
