import React, { useEffect, useRef, useState } from 'react';
import { ArrowUpRight } from 'lucide-react';
import { PROJECTS } from '../constants';
import { Project } from '../types';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

interface ProjectsProps {
  onProjectSelect: (project: Project) => void;
}

interface ParallaxImageProps {
  src: string;
  alt: string;
  className?: string;
}

const ParallaxImage: React.FC<ParallaxImageProps> = ({ src, alt, className = '' }) => {
  const imageRef = useRef<HTMLDivElement>(null);
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (!imageRef.current) return;
      const rect = imageRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      const elementCenter = rect.top + rect.height / 2;
      const viewportCenter = windowHeight / 2;
      const distance = elementCenter - viewportCenter;
      const parallaxOffset = distance * 0.15;
      setOffset(parallaxOffset);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div ref={imageRef} className={`parallax-container overflow-hidden ${className}`}>
      <img
        src={src}
        alt={alt}
        className="parallax-image w-full h-full object-cover"
        style={{ transform: `translateY(${offset}px) scale(1.2)` }}
      />
    </div>
  );
};

const Projects: React.FC<ProjectsProps> = ({ onProjectSelect }) => {
  const { ref: headerRef, isVisible: headerVisible } = useScrollAnimation<HTMLDivElement>({
    threshold: 0.2
  });

  return (
    <section id="work" className="py-32 bg-white/90 relative">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header - Creative text layout */}
        <div ref={headerRef} className="grid md:grid-cols-2 gap-12 mb-32">
          <div className="space-y-2">
            <h2
              className={`text-4xl sm:text-5xl md:text-6xl font-bold uppercase text-black leading-[1.1] tracking-tight transition-all duration-700 ease-out ${
                headerVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
            >
              A SELECTION OF
            </h2>
            <h2
              className={`text-4xl sm:text-5xl md:text-6xl font-bold uppercase text-black leading-[1.1] tracking-tight transition-all duration-700 ease-out ${
                headerVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: '50ms' }}
            >
              THINGS I BUILT
            </h2>
            <h2
              className={`text-4xl sm:text-5xl md:text-6xl font-bold uppercase text-black leading-[1.1] tracking-tight transition-all duration-700 ease-out ${
                headerVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: '100ms' }}
            >
              ANYWAY,
            </h2>
            <h2
              className={`text-4xl sm:text-5xl md:text-6xl font-bold uppercase text-black leading-[1.1] tracking-tight transition-all duration-700 ease-out ${
                headerVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: '150ms' }}
            >
              TO SOLVE PROBLEMS
            </h2>
            <h2
              className={`text-4xl sm:text-5xl md:text-6xl font-bold uppercase text-black leading-[1.1] tracking-tight transition-all duration-700 ease-out ${
                headerVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: '200ms' }}
            >
              I COULDN'T IGNORE.
            </h2>
          </div>
        </div>

        {/* Projects - Asymmetric Layout */}
        <div className="space-y-32">
          {PROJECTS.map((project, index) => (
            <ProjectCard
              key={project.id}
              project={project}
              index={index}
              onSelect={onProjectSelect}
              isEven={index % 2 === 0}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

interface ProjectCardProps {
  project: Project;
  index: number;
  onSelect: (project: Project) => void;
  isEven: boolean;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project, index, onSelect, isEven }) => {
  const { ref, isVisible } = useScrollAnimation<HTMLDivElement>({
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
  });

  return (
    <div
      ref={ref}
      className={`grid md:grid-cols-2 gap-8 md:gap-16 items-start ${
        isEven ? '' : 'md:direction-rtl'
      }`}
      style={{ direction: isEven ? 'ltr' : 'rtl' }}
    >
      {/* Image */}
      <div
        className={`transition-all duration-700 ease-out ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-16'
        }`}
        style={{
          transitionDelay: `${index * 50}ms`,
          direction: 'ltr'
        }}
      >
        <div
          onClick={() => onSelect(project)}
          className="group cursor-pointer relative"
        >
          <ParallaxImage
            src={project.imageUrl}
            alt={project.title}
            className="aspect-[4/3] grayscale hover:grayscale-0 transition-all duration-700"
          />
          {/* Hover overlay */}
          <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-500 flex items-center justify-center">
            <span className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-white font-medium flex items-center gap-2">
              View Project <ArrowUpRight size={18} />
            </span>
          </div>
        </div>
      </div>

      {/* Content */}
      <div
        className={`transition-all duration-700 ease-out ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-16'
        } ${isEven ? 'md:pt-24' : 'md:pt-12'}`}
        style={{
          transitionDelay: `${index * 50 + 100}ms`,
          direction: 'ltr'
        }}
      >
        {/* Categories */}
        <p className="text-xs font-medium text-gray-400 uppercase tracking-widest mb-4">
          {project.category} / {project.tags.slice(0, 2).join(' / ')}
        </p>

        {/* Title */}
        <h3
          onClick={() => onSelect(project)}
          className="text-2xl sm:text-3xl font-bold text-black uppercase tracking-tight mb-2 cursor-pointer hover:text-gray-600 transition-colors"
        >
          {project.title}
        </h3>

        {/* Subtitle / Problem */}
        <p className="text-lg text-gray-600 mb-4">
          {project.description}
        </p>

        {/* Description */}
        <p className="text-sm text-gray-500 leading-relaxed">
          {project.longDescription.slice(0, 200)}...
        </p>
      </div>
    </div>
  );
};

export default Projects;
