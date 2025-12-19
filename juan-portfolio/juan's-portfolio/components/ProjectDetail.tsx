import React, { useEffect } from 'react';
import { ArrowLeft, ExternalLink, Github, ArrowRight } from 'lucide-react';
import { Project } from '../types';

interface ProjectDetailProps {
  project: Project;
  onBack: () => void;
  onNext: () => void;
}

const ProjectDetail: React.FC<ProjectDetailProps> = ({ project, onBack, onNext }) => {
  // Scroll to top when component mounts or project changes
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [project]);

  return (
    <div className="min-h-screen pt-32 pb-20 animate-in fade-in duration-500">
      <div className="max-w-4xl mx-auto px-6">
        
        {/* Navigation */}
        <button 
          onClick={onBack}
          className="group flex items-center gap-2 text-gray-500 hover:text-black transition-colors mb-12 text-sm font-medium"
        >
          <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
          Back to all projects
        </button>

        {/* Header */}
        <div className="space-y-6 mb-12">
            <h1 className="text-4xl md:text-6xl font-bold text-black tracking-tight leading-tight">
                {project.title}
            </h1>
            <div className="flex flex-wrap gap-x-8 gap-y-4 text-sm text-gray-500 font-mono uppercase tracking-wider">
                <div>
                    <span className="text-gray-400 mr-2">Role</span>
                    <span className="text-gray-700">{project.role}</span>
                </div>
                <div>
                    <span className="text-gray-400 mr-2">Year</span>
                    <span className="text-gray-700">{project.year}</span>
                </div>
                <div className="flex gap-4 items-center">
                    {project.github && (
                        <a href={project.github} className="flex items-center gap-1 hover:text-black transition-colors">
                            <Github size={14} /> Code
                        </a>
                    )}
                    <a href={project.link} className="flex items-center gap-1 hover:text-black transition-colors">
                        <ExternalLink size={14} /> Live
                    </a>
                </div>
            </div>
        </div>

        {/* Hero Image */}
        <div className="aspect-video w-full rounded-2xl overflow-hidden bg-gray-100 border border-gray-200 mb-16 shadow-xl">
            <img 
                src={project.imageUrl} 
                alt={project.title} 
                className="w-full h-full object-cover"
            />
        </div>

        {/* Content */}
        <div className="grid md:grid-cols-[2fr_1fr] gap-16">
            <div className="space-y-12">
                <div className="space-y-6">
                    <h3 className="text-xl font-semibold text-black">Overview</h3>
                    <p className="text-gray-600 leading-relaxed text-lg">
                        {project.longDescription}
                    </p>
                </div>

                <div className="space-y-6">
                    <h3 className="text-xl font-semibold text-black">Key Challenges</h3>
                    <ul className="space-y-4">
                        {project.challenges?.map((challenge, idx) => (
                            <li key={idx} className="flex gap-4 text-gray-600 leading-relaxed">
                                <span className="w-1.5 h-1.5 rounded-full bg-black mt-2.5 flex-shrink-0"></span>
                                {challenge}
                            </li>
                        ))}
                    </ul>
                </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-10">
                <div className="space-y-4">
                    <h3 className="text-sm font-semibold text-gray-400 uppercase tracking-widest">Tech Stack</h3>
                    <div className="flex flex-wrap gap-2">
                        {project.tags.map(tag => (
                            <span key={tag} className="px-3 py-1.5 rounded-full bg-gray-100 border border-gray-200 text-gray-700 text-xs font-medium">
                                {tag}
                            </span>
                        ))}
                    </div>
                </div>
                
                <div className="pt-8 border-t border-gray-200">
                    <button 
                        onClick={onNext}
                        className="group w-full flex items-center justify-between p-4 rounded-xl bg-gray-100 hover:bg-gray-200 border border-gray-200 hover:border-gray-300 transition-all text-left"
                    >
                        <div>
                            <span className="block text-xs text-gray-500 mb-1">Next Project</span>
                            <span className="block text-black font-medium">View Next</span>
                        </div>
                        <ArrowRight size={20} className="text-gray-400 group-hover:text-black group-hover:translate-x-1 transition-all" />
                    </button>
                </div>
            </div>
        </div>

      </div>
    </div>
  );
};

export default ProjectDetail;