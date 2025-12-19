import React from 'react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const WhatIBuild: React.FC = () => {
  const { ref: sectionRef, isVisible } = useScrollAnimation<HTMLDivElement>({
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  });

  const items = [
    {
      title: 'Automation',
      points: [
        'Workflow analysis',
        'Process optimization',
        'One-click solutions'
      ],
      icon: (
        <svg viewBox="0 0 80 80" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-16 h-16">
          <ellipse cx="40" cy="40" rx="25" ry="20" />
          <ellipse cx="40" cy="40" rx="15" ry="12" />
          <ellipse cx="40" cy="40" rx="6" ry="5" />
          <path d="M15 40 Q5 20 20 15" />
        </svg>
      )
    },
    {
      title: 'Dashboards',
      points: [
        'Real-time data visualization',
        'KPI tracking & analytics',
        'Decision-ready insights'
      ],
      icon: (
        <svg viewBox="0 0 80 80" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-16 h-16">
          <path d="M20 25 L35 40 L30 55 L45 35 L60 50" />
          <path d="M15 60 L65 60" />
          <path d="M20 15 L20 60" />
          <circle cx="20" cy="25" r="3" />
          <circle cx="35" cy="40" r="3" />
          <circle cx="45" cy="35" r="3" />
          <circle cx="60" cy="50" r="3" />
        </svg>
      )
    },
    {
      title: 'Internal Tools',
      points: [
        'Custom admin panels',
        'Team productivity apps',
        'Streamlined operations'
      ],
      icon: (
        <svg viewBox="0 0 80 80" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-16 h-16">
          <line x1="15" y1="25" x2="55" y2="25" />
          <line x1="15" y1="40" x2="50" y2="40" />
          <line x1="15" y1="55" x2="60" y2="55" />
          <path d="M10 20 L10 60" />
        </svg>
      )
    },
    {
      title: 'Mobile Apps',
      points: [
        'Cross-platform development',
        'Native performance',
        'User-centered design'
      ],
      icon: (
        <svg viewBox="0 0 80 80" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-16 h-16">
          <rect x="25" y="10" width="30" height="55" rx="3" />
          <line x1="25" y1="20" x2="55" y2="20" />
          <line x1="25" y1="55" x2="55" y2="55" />
          <circle cx="40" cy="60" r="2" />
        </svg>
      )
    },
    {
      title: 'MVPs',
      points: [
        'Rapid prototyping',
        'Concept validation',
        'Market-ready launches'
      ],
      icon: (
        <svg viewBox="0 0 80 80" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-16 h-16">
          <path d="M25 55 L40 20 L55 55" />
          <path d="M30 45 L50 45" />
          <circle cx="40" cy="15" r="5" />
        </svg>
      )
    },
    {
      title: 'Integrations',
      points: [
        'API connections',
        'Third-party services',
        'Seamless data flow'
      ],
      icon: (
        <svg viewBox="0 0 80 80" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-16 h-16">
          <rect x="15" y="25" width="20" height="30" rx="2" />
          <rect x="45" y="25" width="20" height="30" rx="2" />
          <path d="M35 35 L45 35" />
          <path d="M35 45 L45 45" />
          <circle cx="40" cy="40" r="8" />
        </svg>
      )
    },
  ];

  return (
    <section id="build" className="py-32 bg-white/90 relative overflow-hidden" ref={sectionRef}>
      <div className="max-w-6xl mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="max-w-3xl mb-20">
          <h2
            className={`text-sm font-semibold text-gray-400 uppercase tracking-widest mb-6 transition-all duration-700 ease-out ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            What I Solve
          </h2>
          <p
            className={`text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-black leading-tight transition-all duration-700 ease-out ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
            style={{ transitionDelay: '100ms' }}
          >
            Problems I couldn't ignore—
            <span className="text-gray-300">turned into tools that actually work.</span>
          </p>
        </div>

        {/* Grid Layout */}
        <div className="grid md:grid-cols-2 gap-x-20 gap-y-16">
          {items.map((item, index) => (
            <div
              key={item.title}
              className={`flex gap-6 transition-all duration-700 ease-out ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
              }`}
              style={{ transitionDelay: `${200 + index * 100}ms` }}
            >
              {/* Icon */}
              <div className="flex-shrink-0 text-gray-800">
                {item.icon}
              </div>

              {/* Content */}
              <div>
                <h3 className="text-xl font-bold text-black mb-3">
                  {item.title}
                </h3>
                <ul className="space-y-1">
                  {item.points.map((point, i) => (
                    <li key={i} className="text-gray-600 text-sm leading-relaxed">
                      {point}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhatIBuild;
