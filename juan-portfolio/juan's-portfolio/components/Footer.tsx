import React, { useState } from 'react';
import { ArrowUpRight, Send } from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const Footer: React.FC = () => {
  const [email, setEmail] = useState('');
  const { ref: footerRef, isVisible } = useScrollAnimation<HTMLElement>({
    threshold: 0.1
  });

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle newsletter signup
    console.log('Newsletter signup:', email);
    setEmail('');
  };

  return (
    <footer ref={footerRef} className="bg-black text-white relative overflow-hidden" style={{ zIndex: 10 }}>
      {/* Large Marquee Text */}
      <div className="relative h-32 md:h-48 overflow-hidden border-b border-white/10">
        <div className="absolute whitespace-nowrap animate-marquee flex items-center h-full">
          <span className="text-[8rem] md:text-[12rem] font-bold tracking-tighter text-white/10 uppercase">
            LET'S BUILD SOMETHING &nbsp;&nbsp;&nbsp; LET'S BUILD SOMETHING &nbsp;&nbsp;&nbsp; LET'S BUILD SOMETHING &nbsp;&nbsp;&nbsp;
          </span>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-6 py-20">
        <div className="grid md:grid-cols-12 gap-12 md:gap-8">
          {/* Left Column - Logo & Address */}
          <div
            className={`md:col-span-3 transition-all duration-700 ease-out ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            <h3 className="text-2xl font-bold tracking-tight mb-6">
              Juan<span className="text-gray-500">.</span>
            </h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              Building useful software<br />
              that ships first.
            </p>
          </div>

          {/* Middle Column - Contact */}
          <div
            className={`md:col-span-6 transition-all duration-700 ease-out ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
            style={{ transitionDelay: '100ms' }}
          >
            {/* Write to Us */}
            <div className="mb-12">
              <p className="text-xs font-semibold text-gray-500 uppercase tracking-widest mb-4">
                Write to us
              </p>
              <a
                href="mailto:hello@juan.dev"
                className="group inline-block"
              >
                <span className="text-4xl md:text-5xl lg:text-6xl font-light text-white hover:text-gray-300 transition-colors duration-300">
                  hello<span className="text-gray-600">/</span>
                </span>
                <span className="text-4xl md:text-5xl lg:text-6xl font-light text-white hover:text-gray-300 transition-colors duration-300">
                  @juan.dev
                </span>
              </a>
              <div className="mt-2">
                <a
                  href="mailto:work@juan.dev"
                  className="text-2xl md:text-3xl font-light text-gray-600 hover:text-gray-400 transition-colors duration-300"
                >
                  work<span className="text-gray-700">/</span>
                </a>
              </div>
            </div>

            {/* Discuss */}
            <div>
              <p className="text-xs font-semibold text-gray-500 uppercase tracking-widest mb-4">
                Discuss
              </p>
              <p className="text-3xl md:text-4xl font-light text-white">
                Let's talk projects
              </p>
            </div>
          </div>

          {/* Right Column - Quick Links */}
          <div
            className={`md:col-span-3 transition-all duration-700 ease-out ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
            style={{ transitionDelay: '200ms' }}
          >
            <p className="text-xs font-semibold text-gray-500 uppercase tracking-widest mb-6">
              Navigation
            </p>
            <nav className="space-y-3">
              {[
                { label: 'Projects', href: '#work' },
                { label: 'Services', href: '#build' },
                { label: 'Writing', href: '#writing' },
                { label: 'Contact', href: '#contact' },
              ].map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="group flex items-center gap-2 text-gray-400 hover:text-white transition-colors duration-300"
                >
                  <span>{link.label}</span>
                  <ArrowUpRight size={14} className="opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300" />
                </a>
              ))}
            </nav>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-6 py-8">
          <div className="grid md:grid-cols-12 gap-8 items-center">
            {/* Logo & Copyright */}
            <div
              className={`md:col-span-3 transition-all duration-700 ease-out ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: '300ms' }}
            >
              <div className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center mb-4">
                <span className="text-sm font-bold">J</span>
              </div>
              <p className="text-gray-500 text-xs">
                <a href="#" className="hover:text-white transition-colors">Legal notice</a>
              </p>
              <p className="text-gray-600 text-xs mt-1">
                Copyright Juan {new Date().getFullYear()}
              </p>
            </div>

            {/* Newsletter */}
            <div
              className={`md:col-span-5 transition-all duration-700 ease-out ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: '400ms' }}
            >
              <p className="text-xs font-semibold text-gray-500 uppercase tracking-widest mb-4">
                Receive updates
              </p>
              <form onSubmit={handleNewsletterSubmit} className="flex items-center gap-4">
                <div className="flex-1 relative">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Your email"
                    className="w-full bg-transparent border-b border-gray-700 py-2 text-white text-sm focus:outline-none focus:border-white transition-colors placeholder-gray-600"
                  />
                </div>
                <button
                  type="submit"
                  className="flex items-center gap-2 text-xs font-semibold text-white hover:text-gray-300 transition-colors uppercase tracking-wider"
                >
                  <Send size={14} />
                  Send
                </button>
              </form>
            </div>

            {/* Social Links */}
            <div
              className={`md:col-span-4 flex justify-end gap-6 transition-all duration-700 ease-out ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: '500ms' }}
            >
              {[
                { label: 'GitHub', href: '#' },
                { label: 'LinkedIn', href: '#' },
                { label: 'Twitter', href: '#' },
              ].map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  className="group flex items-center gap-1 text-xs font-medium text-gray-400 hover:text-white transition-colors uppercase tracking-wider"
                >
                  <span>{social.label}</span>
                  <ArrowUpRight size={12} className="opacity-50 group-hover:opacity-100 transition-opacity" />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
