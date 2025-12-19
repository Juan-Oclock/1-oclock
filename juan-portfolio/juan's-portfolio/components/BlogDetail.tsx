import React, { useEffect } from 'react';
import { ArrowLeft, Clock, Calendar } from 'lucide-react';
import { BlogPost } from '../types';

interface BlogDetailProps {
  post: BlogPost;
  onBack: () => void;
}

const BlogDetail: React.FC<BlogDetailProps> = ({ post, onBack }) => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [post]);

    return (
        <article className="min-h-screen pt-32 pb-20 animate-in fade-in duration-500">
            <div className="max-w-2xl mx-auto px-6">
                 <button 
                    onClick={onBack}
                    className="group flex items-center gap-2 text-gray-500 hover:text-black transition-colors mb-12 text-sm font-medium"
                >
                    <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
                    Back to writing
                </button>

                <header className="mb-12">
                     <div className="flex items-center gap-4 text-gray-500 text-sm font-mono mb-6">
                        <span className="flex items-center gap-1.5">
                            <Calendar size={14} /> {post.date}
                        </span>
                        <span className="w-px h-4 bg-gray-300"></span>
                        <span className="flex items-center gap-1.5">
                            <Clock size={14} /> {post.readTime}
                        </span>
                         <span className="w-px h-4 bg-gray-300"></span>
                        <span className="text-black font-medium">{post.category}</span>
                     </div>

                     <h1 className="text-3xl md:text-5xl font-bold text-black tracking-tight leading-tight mb-8">
                        {post.title}
                     </h1>
                </header>

                <div 
                    className="prose prose-gray prose-lg max-w-none prose-headings:font-bold prose-headings:tracking-tight prose-a:text-black prose-a:underline prose-img:rounded-xl prose-p:leading-relaxed prose-li:text-gray-600"
                    dangerouslySetInnerHTML={{ __html: post.content }}
                />

                <div className="mt-20 pt-10 border-t border-gray-200">
                     <p className="text-gray-500 italic text-sm">
                        Thanks for reading. If you enjoyed this, feel free to share it or reach out on Twitter.
                     </p>
                </div>
            </div>
        </article>
    )
}
export default BlogDetail;