import React, { useState, useEffect, useRef } from 'react';
import { ArrowDown, ArrowRight } from 'lucide-react';

const Hero: React.FC = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isDark, setIsDark] = useState(true);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoaded(true), 300);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      // Switch immediately once user scrolls past 100px
      const scrollThreshold = 100;
      setIsDark(window.scrollY < scrollThreshold);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Color classes based on dark/light state
  const bgColor = isDark ? 'bg-black' : 'bg-white/90';
  const primaryTextColor = isDark ? 'text-white' : 'text-black';
  const secondaryTextColor = isDark ? 'text-gray-500' : 'text-gray-300';
  const mutedTextColor = isDark ? 'text-gray-400' : 'text-gray-500';
  const subtleTextColor = isDark ? 'text-gray-500' : 'text-gray-400';
  const linkHoverColor = isDark ? 'hover:text-white' : 'hover:text-black';
  const underlineColor = isDark ? 'bg-white' : 'bg-black';
  const underlineSecondaryColor = isDark ? 'bg-gray-600' : 'bg-gray-400';
  const watermarkColor = isDark ? 'text-white' : 'text-black';
  const watermarkOpacity = isDark ? 'opacity-[0.05]' : 'opacity-[0.02]';

  return (
    <section
      ref={sectionRef}
      id="about"
      className={`min-h-screen flex flex-col justify-center pt-20 relative overflow-hidden transition-colors duration-300 ${bgColor}`}
    >
      {/* Large watermark text in background - positioned to show fully */}
      <div
        className={`absolute top-1/2 -translate-y-1/2 right-0 pointer-events-none select-none transition-all duration-300 ${
          isLoaded ? watermarkOpacity : 'opacity-0'
        } ${watermarkColor}`}
        style={{ right: '2%' }}
      >
        <span className="text-[clamp(8rem,18vw,16rem)] font-bold tracking-tighter leading-none">
          BUILD
        </span>
      </div>

      <div className="max-w-5xl mx-auto px-6 w-full relative z-10">
        <div className="space-y-10 max-w-4xl">
          {/* Main headline with staggered reveal */}
          <h1 className="font-bold tracking-tight leading-[0.9] uppercase">
            <span
              className={`block text-[clamp(2.5rem,9vw,7rem)] transition-all duration-300 ${primaryTextColor} ${
                isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: '200ms' }}
            >
              No One Asked.
            </span>
            <span
              className={`block text-[clamp(2.5rem,9vw,7rem)] transition-all duration-300 ${secondaryTextColor} ${
                isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: '400ms' }}
            >
              I Built It
            </span>
            <span
              className={`block text-[clamp(2.5rem,9vw,7rem)] transition-all duration-300 ${secondaryTextColor} ${
                isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: '600ms' }}
            >
              Anyway.
            </span>
          </h1>

          {/* Subheading */}
          <p
            className={`text-lg sm:text-xl md:text-2xl max-w-2xl leading-relaxed font-medium transition-all duration-300 ${mutedTextColor} ${
              isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
            style={{ transitionDelay: '800ms' }}
          >
            <span className="block">Because useful software doesn't wait for permission—</span>
            <span className="block">it solves problems first.</span>
          </p>

          {/* CTAs */}
          <div
            className={`pt-4 flex flex-col sm:flex-row gap-6 sm:gap-10 transition-all duration-300 ${
              isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
            style={{ transitionDelay: '1000ms' }}
          >
            <a
              href="#work"
              className={`group inline-flex items-center gap-3 font-semibold text-lg relative overflow-hidden transition-colors duration-300 ${primaryTextColor}`}
            >
              <span className="relative">
                See what I've built
                <span className={`absolute bottom-0 left-0 w-full h-0.5 ${underlineColor} transform origin-left transition-transform duration-300 scale-x-100 group-hover:scale-x-0`}></span>
                <span className={`absolute bottom-0 left-0 w-full h-0.5 ${underlineSecondaryColor} transform origin-right transition-transform duration-300 scale-x-0 group-hover:scale-x-100`}></span>
              </span>
              <ArrowDown size={20} className="transition-transform duration-300 group-hover:translate-y-1" />
            </a>
            <a
              href="#contact"
              className={`group inline-flex items-center gap-3 font-semibold text-lg transition-colors duration-300 ${subtleTextColor} ${linkHoverColor}`}
            >
              <span className="relative">
                Let's work together
                <span className={`absolute bottom-0 left-0 w-full h-0.5 ${underlineSecondaryColor} transform origin-left transition-transform duration-300 scale-x-0 group-hover:scale-x-100`}></span>
              </span>
              <ArrowRight size={20} className="transition-transform duration-300 group-hover:translate-x-1" />
            </a>
          </div>

          {/* Micro-proof */}
          <p
            className={`text-sm font-medium tracking-wide transition-all duration-300 ${subtleTextColor} ${
              isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
            style={{ transitionDelay: '1200ms' }}
          >
            Shipping apps, tools, and experiments in public.
          </p>
        </div>

        {/* Floating scroll indicator */}
        <div
          className={`absolute bottom-12 left-1/2 -translate-x-1/2 transition-all duration-300 ${
            isLoaded ? 'opacity-100' : 'opacity-0'
          }`}
          style={{ transitionDelay: '1400ms' }}
        >
          <div className="animate-float">
            <ArrowDown size={24} className={`transition-colors duration-300 ${subtleTextColor}`} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
