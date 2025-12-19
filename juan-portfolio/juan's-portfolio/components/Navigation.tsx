import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

interface NavigationProps {
  onNavigate: (sectionId: string) => void;
}

const Navigation: React.FC<NavigationProps> = ({ onNavigate }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isInDarkSection, setIsInDarkSection] = useState(true);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      setIsScrolled(scrollY > 20);

      // Check if we're in the dark hero section (first 100px of scroll)
      setIsInDarkSection(scrollY < 100);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();

    // Trigger load animation
    const timer = setTimeout(() => setIsLoaded(true), 100);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      clearTimeout(timer);
    };
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const sectionId = href.replace('#', '');
    onNavigate(sectionId);
    setIsMobileOpen(false);
  };

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Build', href: '#build' },
    { name: 'Work', href: '#work' },
    { name: 'Writing', href: '#writing' },
    { name: 'Contact', href: '#contact' },
  ];

  // Determine colors based on scroll state
  const logoColor = isInDarkSection && !isScrolled ? 'text-white' : 'text-black';
  const navLinkColor = isInDarkSection && !isScrolled ? 'text-gray-300 hover:text-white' : 'text-gray-500 hover:text-black';
  const menuIconColor = isInDarkSection && !isScrolled ? 'text-white' : 'text-black';

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-out ${
          isScrolled
            ? 'bg-white/90 backdrop-blur-xl border-b border-gray-100 py-4'
            : 'bg-transparent py-8'
        }`}
      >
        <div className="max-w-5xl mx-auto px-6 flex items-center justify-between">
          {/* Logo */}
          <a
            href="#about"
            onClick={(e) => handleNavClick(e, '#about')}
            className={`text-xl font-bold tracking-tighter z-50 relative group transition-all duration-300 ${logoColor} ${
              isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4'
            }`}
          >
            Juan<span className={`${isInDarkSection && !isScrolled ? 'text-gray-500' : 'text-gray-400'} group-hover:text-current transition-colors duration-300`}>.</span>
          </a>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link, index) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className={`text-sm font-medium transition-all duration-300 ${navLinkColor} ${
                  isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4'
                }`}
                style={{
                  transitionDelay: isLoaded ? '0ms' : `${(index + 1) * 100}ms`
                }}
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Mobile Toggle */}
          <button
            className={`md:hidden z-50 relative p-2 -mr-2 transition-all duration-300 ${menuIconColor} ${
              isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4'
            }`}
            onClick={() => setIsMobileOpen(!isMobileOpen)}
            aria-label="Toggle menu"
            style={{ transitionDelay: '400ms' }}
          >
            <div className={`transition-transform duration-300 ${isMobileOpen ? 'rotate-90' : 'rotate-0'}`}>
              {isMobileOpen ? <X size={24} /> : <Menu size={24} />}
            </div>
          </button>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 z-40 bg-white transition-all duration-500 ease-out md:hidden flex flex-col items-center justify-center ${
          isMobileOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        } ${isMobileOpen ? 'mobile-menu-open' : ''}`}
      >
         <nav className="flex flex-col items-center gap-10">
            {navLinks.map((link, index) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className={`text-4xl font-bold text-black hover:text-gray-400 transition-all duration-300 tracking-tight ${
                  isMobileOpen
                    ? 'opacity-100 translate-x-0'
                    : 'opacity-0 -translate-x-8'
                }`}
                style={{ transitionDelay: isMobileOpen ? `${index * 75}ms` : '0ms' }}
              >
                {link.name}
              </a>
            ))}
         </nav>
      </div>
    </>
  );
};

export default Navigation;
