import React from 'react';

const Projects = () => {
  const projects = [
    {
      title: "Blackjack Game",
      description: "A Python-based Blackjack game implementation with object-oriented programming principles. Features game logic, card management, and user interaction.",
      technologies: ["Python", "OOP", "Game Logic", "User Interface"],
      image: "/api/placeholder/600/400",
      github: "https://github.com/ThePurpleOne855/Blackjack",
      live: "#"
    },
    {
      title: "Calculator",
      description: "A functional calculator application built with Python. Features basic arithmetic operations, clean interface, and robust error handling.",
      technologies: ["Python", "GUI", "Arithmetic Operations", "Error Handling"],
      image: "/api/placeholder/600/400",
      github: "https://github.com/ThePurpleOne855/Calculator",
      live: "#"
    },
    {
      title: "Todo List App",
      description: "A task management application developed in Python. Features add, edit, delete, and mark complete functionality with persistent data storage.",
      technologies: ["Python", "Data Persistence", "CRUD Operations", "User Interface"],
      image: "/api/placeholder/600/400",
      github: "https://github.com/ThePurpleOne855/todolist",
      live: "#"
    }
  ];

  return (
    <section id="projects" className="py-20 bg-gradient-to-br from-dark-navy to-navy">
      <div className="section-padding container-max-width">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-block bg-light-blue/10 backdrop-blur-sm rounded-full px-6 py-2 mb-6 border border-light-blue/30">
              <span className="text-light-blue text-sm font-medium">Portfolio</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-cream mb-6">
              Featured <span className="gradient-text">Projects</span>
            </h2>
            <p className="text-lg text-light-blue/80 max-w-2xl mx-auto">
              A showcase of my recent work and the technologies I use to bring ideas to life.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div key={index} className="group bg-gradient-to-br from-navy/60 to-blue-gray/20 backdrop-blur-sm rounded-3xl overflow-hidden border border-light-blue/20 hover:border-light-blue/40 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-light-blue/10">
                {/* Project Image/Icon */}
                <div className="relative h-48 bg-gradient-to-br from-light-blue/20 to-blue-gray/20 flex items-center justify-center overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-light-blue/10 to-transparent"></div>
                  <div className="relative text-light-blue text-6xl font-bold opacity-80 group-hover:scale-110 transition-transform duration-300">
                    {project.title.charAt(0)}
                  </div>
                  <div className="absolute top-4 right-4 bg-dark-navy/80 backdrop-blur-sm rounded-full px-3 py-1">
                    <span className="text-cream text-xs font-medium">Featured</span>
                  </div>
                </div>
                
                <div className="p-8">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-2xl font-bold text-cream group-hover:text-light-blue transition-colors duration-300">
                      {project.title}
                    </h3>
                    <div className="flex space-x-2">
                      <a 
                        href={project.github}
                        className="w-8 h-8 bg-light-blue/20 rounded-lg flex items-center justify-center hover:bg-light-blue/30 transition-colors duration-300"
                        title="GitHub"
                      >
                        <svg className="w-4 h-4 text-light-blue" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                        </svg>
                      </a>
                      <a 
                        href={project.live}
                        className="w-8 h-8 bg-light-blue/20 rounded-lg flex items-center justify-center hover:bg-light-blue/30 transition-colors duration-300"
                        title="Live Demo"
                      >
                        <svg className="w-4 h-4 text-light-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                        </svg>
                      </a>
                    </div>
                  </div>
                  
                  <p className="text-light-blue/80 leading-relaxed mb-6 text-base">
                    {project.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.technologies.map((tech, techIndex) => (
                      <span 
                        key={techIndex}
                        className="bg-gradient-to-r from-light-blue/20 to-blue-gray/20 text-light-blue px-3 py-1 rounded-full text-xs font-medium border border-light-blue/30 hover:bg-light-blue/30 transition-all duration-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2 text-light-blue/60 text-sm">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      <span>Recent Project</span>
                    </div>
                    <div className="text-light-blue text-sm font-medium">
                      View Details →
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          {/* Projects Summary */}
          <div className="mt-16 bg-gradient-to-r from-light-blue/10 to-blue-gray/10 backdrop-blur-sm rounded-3xl p-8 border border-light-blue/20">
            <div className="grid md:grid-cols-3 gap-8 text-center">
              <div>
                <div className="text-3xl font-bold text-light-blue mb-2">3</div>
                <div className="text-cream font-medium">Featured</div>
                <div className="text-light-blue/60 text-sm">Projects</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-light-blue mb-2">50+</div>
                <div className="text-cream font-medium">Total</div>
                <div className="text-light-blue/60 text-sm">Projects</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-light-blue mb-2">100%</div>
                <div className="text-cream font-medium">Client</div>
                <div className="text-light-blue/60 text-sm">Satisfaction</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
