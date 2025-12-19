import React, { useState } from 'react';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import WhatIBuild from './components/WhatIBuild';
import Projects from './components/Projects';
import HowIShip from './components/HowIShip';
import Footer from './components/Footer';
import AIChat from './components/AIChat';
import ProjectDetail from './components/ProjectDetail';
import BlogList from './components/BlogList';
import BlogDetail from './components/BlogDetail';
import FloatingParticles from './components/FloatingParticles';
import { Project, BlogPost } from './types';
import { PROJECTS } from './constants';

const App: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [selectedPost, setSelectedPost] = useState<BlogPost | null>(null);

  const handleNavigate = (sectionId: string) => {
    setSelectedProject(null);
    setSelectedPost(null);
    // Use setTimeout to allow state update to render Home view before scrolling
    setTimeout(() => {
        const element = document.getElementById(sectionId);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    }, 0);
  };

  const handleNextProject = () => {
    if (!selectedProject) return;
    const currentIndex = PROJECTS.findIndex(p => p.id === selectedProject.id);
    const nextIndex = (currentIndex + 1) % PROJECTS.length;
    setSelectedProject(PROJECTS[nextIndex]);
  };

  const renderContent = () => {
    if (selectedProject) {
        return (
            <ProjectDetail 
                project={selectedProject} 
                onBack={() => setSelectedProject(null)}
                onNext={handleNextProject}
            />
        );
    }

    if (selectedPost) {
        return (
            <BlogDetail 
                post={selectedPost}
                onBack={() => setSelectedPost(null)}
            />
        );
    }

    return (
        <>
            <Hero />
            <WhatIBuild />
            <Projects onProjectSelect={setSelectedProject} />
            <HowIShip />
            <BlogList onPostSelect={setSelectedPost} />
            <Footer />
        </>
    );
  };

  return (
    <div className="min-h-screen bg-white text-black">
      <FloatingParticles count={100} />
      <Navigation onNavigate={handleNavigate} />

      <main>
        {renderContent()}
      </main>

      <AIChat />
    </div>
  );
};

export default App;