import React from 'react';

const Hero = () => {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="min-h-screen flex items-center relative overflow-hidden bg-gradient-to-br from-dark-navy via-navy to-blue-gray">
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-light-blue/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-blue-gray/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-navy/30 rounded-full blur-3xl animate-pulse delay-500"></div>
      </div>
      
      <div className="section-padding container-max-width relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Text Content */}
          <div className="text-center lg:text-left">
            <div className="inline-block bg-light-blue/10 backdrop-blur-sm rounded-full px-4 py-2 mb-6 border border-light-blue/30">
              <span className="text-light-blue text-sm font-medium">Available for Work</span>
            </div>
            
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
              <span className="text-cream">Hi, I'm</span>
              <br />
              <span className="gradient-text">Jose Armando Santana</span>
            </h1>
            
            <h2 className="text-2xl md:text-3xl text-light-blue mb-6 font-medium">
              Full Stack Developer
            </h2>
            
            <p className="text-lg text-light-blue/80 mb-8 max-w-xl leading-relaxed">
              I create beautiful, functional, and user-centered digital experiences that bring ideas to life through code.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <button 
                onClick={() => scrollToSection('projects')}
                className="bg-gradient-to-r from-light-blue to-blue-gray text-dark-navy px-8 py-4 rounded-xl font-semibold hover:shadow-2xl transition-all duration-300 hover:scale-105 hover:shadow-light-blue/25"
              >
                View My Work
              </button>
              <button 
                onClick={() => scrollToSection('contact')}
                className="border-2 border-light-blue text-light-blue px-8 py-4 rounded-xl font-semibold hover:bg-light-blue hover:text-dark-navy transition-all duration-300 backdrop-blur-sm"
              >
                Get In Touch
              </button>
            </div>
          </div>
          
          {/* Right Column - Visual Element */}
          <div className="relative">
            <div className="bg-gradient-to-br from-light-blue/20 to-blue-gray/20 backdrop-blur-sm rounded-3xl p-8 border border-light-blue/30">
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-dark-navy/50 rounded-2xl p-4 text-center">
                  <div className="text-2xl font-bold text-light-blue mb-2">50+</div>
                  <div className="text-sm text-cream">Projects</div>
                </div>
                <div className="bg-dark-navy/50 rounded-2xl p-4 text-center">
                  <div className="text-2xl font-bold text-light-blue mb-2">3+</div>
                  <div className="text-sm text-cream">Years</div>
                </div>
                <div className="bg-dark-navy/50 rounded-2xl p-4 text-center">
                  <div className="text-2xl font-bold text-light-blue mb-2">100%</div>
                  <div className="text-sm text-cream">Satisfaction</div>
                </div>
                <div className="bg-dark-navy/50 rounded-2xl p-4 text-center">
                  <div className="text-2xl font-bold text-light-blue mb-2">24/7</div>
                  <div className="text-sm text-cream">Support</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-light-blue rounded-full flex justify-center">
          <div className="w-1 h-3 bg-light-blue rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
