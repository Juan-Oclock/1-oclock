import React, { useRef, useEffect, useState } from 'react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const HowIShip: React.FC = () => {
  const { ref: sectionRef, isVisible } = useScrollAnimation<HTMLDivElement>({
    threshold: 0.3
  });

  const parallaxRef = useRef<HTMLDivElement>(null);
  const [parallaxOffset, setParallaxOffset] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (!parallaxRef.current) return;

      const rect = parallaxRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      const elementCenter = rect.top + rect.height / 2;
      const viewportCenter = windowHeight / 2;
      const distanceFromCenter = elementCenter - viewportCenter;

      setParallaxOffset(distanceFromCenter * -0.15);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <section
      ref={parallaxRef}
      className="py-32 bg-white/90 relative overflow-hidden"
    >
      {/* Large background watermark text with parallax */}
      <div
        className="absolute inset-0 flex items-center justify-center pointer-events-none select-none"
        style={{ transform: `translateY(${parallaxOffset}px)` }}
      >
        <span
          className={`text-[clamp(6rem,20vw,16rem)] font-bold tracking-tighter text-black uppercase leading-none transition-opacity duration-1000 ${
            isVisible ? 'opacity-[0.02]' : 'opacity-0'
          }`}
        >
          SHIP
        </span>
      </div>

      {/* Content */}
      <div className="max-w-5xl mx-auto px-6 text-center relative z-10" ref={sectionRef}>
        <h2
          className={`text-sm font-semibold text-gray-400 uppercase tracking-widest mb-6 transition-all duration-700 ease-out ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          How I Ship
        </h2>

        <p
          className={`text-2xl sm:text-3xl md:text-4xl font-medium text-gray-700 max-w-3xl mx-auto leading-relaxed transition-all duration-700 ease-out ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
          style={{ transitionDelay: '150ms' }}
        >
          <span className="text-black font-bold">Find the friction.</span>
          {' '}Build the simplest fix.{' '}
          <span className="text-gray-400">Ship, measure, learn.</span>
        </p>

        {/* Animated line */}
        <div className="mt-12 flex justify-center">
          <div
            className={`h-px bg-gray-200 transition-all duration-1000 ease-out ${
              isVisible ? 'w-24' : 'w-0'
            }`}
            style={{ transitionDelay: '400ms' }}
          ></div>
        </div>
      </div>
    </section>
  );
};

export default HowIShip;
