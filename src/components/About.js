import React from 'react';

const About = () => {
  return (
    <section id="about" className="py-20 bg-navy">
      <div className="section-padding container-max-width">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-cream mb-6">
              About <span className="gradient-text">Me</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-light-blue to-blue-gray mx-auto"></div>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <p className="text-lg text-light-blue leading-relaxed">
                I'm a programming enthusiast and future software engineer with a passion for creating 
                innovative solutions. I love diving deep into code and building applications that make a difference.
              </p>
              <p className="text-lg text-light-blue leading-relaxed">
                With projects ranging from Python applications to full-stack web development, I'm constantly 
                learning and expanding my skills in modern technologies to become a well-rounded software engineer.
              </p>
              <div className="flex flex-wrap gap-4">
                <span className="bg-blue-gray/20 text-light-blue px-4 py-2 rounded-full text-sm font-medium">
                  Programming Enthusiast
                </span>
                <span className="bg-blue-gray/20 text-light-blue px-4 py-2 rounded-full text-sm font-medium">
                  Future Software Engineer
                </span>
                <span className="bg-blue-gray/20 text-light-blue px-4 py-2 rounded-full text-sm font-medium">
                  Continuous Learner
                </span>
              </div>
            </div>
            
            <div className="relative">
              <div className="bg-gradient-to-br from-light-blue/20 to-blue-gray/20 p-8 rounded-2xl backdrop-blur-sm border border-light-blue/30">
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <div className="w-3 h-3 bg-light-blue rounded-full"></div>
                    <span className="text-cream font-medium">Frontend Development</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-3 h-3 bg-blue-gray rounded-full"></div>
                    <span className="text-cream font-medium">Backend Development</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-3 h-3 bg-light-blue rounded-full"></div>
                    <span className="text-cream font-medium">Database Design</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-3 h-3 bg-blue-gray rounded-full"></div>
                    <span className="text-cream font-medium">Cloud Deployment</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
