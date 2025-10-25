import React, { useState, useEffect } from 'react';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-dark-navy/95 backdrop-blur-sm shadow-lg' : 'bg-transparent'
    }`}>
      <nav className="section-padding container-max-width" role="navigation" aria-label="Main navigation">
        <div className="flex items-center justify-between py-4">
          <h1 className="text-2xl font-bold gradient-text">
            Jose Santana
          </h1>
          <div className="hidden md:flex space-x-8" role="list">
            <button 
              onClick={() => scrollToSection('about')}
              className="text-cream hover:text-light-blue transition-colors duration-200"
              aria-label="Scroll to About section"
            >
              About
            </button>
            <button 
              onClick={() => scrollToSection('skills')}
              className="text-cream hover:text-light-blue transition-colors duration-200"
              aria-label="Scroll to Skills section"
            >
              Skills
            </button>
            <button 
              onClick={() => scrollToSection('projects')}
              className="text-cream hover:text-light-blue transition-colors duration-200"
              aria-label="Scroll to Projects section"
            >
              Projects
            </button>
            <button 
              onClick={() => scrollToSection('contact')}
              className="text-cream hover:text-light-blue transition-colors duration-200"
              aria-label="Scroll to Contact section"
            >
              Contact
            </button>
          </div>
          <div className="md:hidden">
            <button className="text-cream hover:text-light-blue transition-colors duration-200">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
