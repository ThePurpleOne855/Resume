import React from 'react';

const Experience = () => {
  const experiences = [
    {
      title: "Senior Full Stack Developer",
      company: "Tech Solutions Inc.",
      period: "2022 - Present",
      description: "Led development of scalable web applications using React, Node.js, and cloud technologies. Implemented CI/CD pipelines and improved application performance by 40%.",
      technologies: ["React", "Node.js", "PostgreSQL", "AWS", "Docker"]
    },
    {
      title: "Full Stack Developer",
      company: "Digital Innovations",
      period: "2020 - 2022",
      description: "Developed and maintained full-stack applications using modern JavaScript frameworks. Collaborated with cross-functional teams to deliver high-quality software solutions.",
      technologies: ["JavaScript", "Express", "MongoDB", "React", "Git"]
    },
    {
      title: "Frontend Developer",
      company: "WebCraft Studio",
      period: "2019 - 2020",
      description: "Created responsive and interactive user interfaces using React and modern CSS frameworks. Focused on user experience and accessibility standards.",
      technologies: ["React", "TypeScript", "Tailwind CSS", "HTML5", "CSS3"]
    }
  ];

  return (
    <section id="experience" className="py-20 bg-gradient-to-br from-navy to-blue-gray">
      <div className="section-padding container-max-width">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-block bg-light-blue/10 backdrop-blur-sm rounded-full px-6 py-2 mb-6 border border-light-blue/30">
              <span className="text-light-blue text-sm font-medium">My Journey</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-cream mb-6">
              Work <span className="gradient-text">Experience</span>
            </h2>
            <p className="text-lg text-light-blue/80 max-w-2xl mx-auto">
              A timeline of my professional journey and the valuable experiences that shaped my career.
            </p>
          </div>
          
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-light-blue to-blue-gray"></div>
            
            <div className="space-y-12">
              {experiences.map((exp, index) => (
                <div key={index} className="relative flex items-start">
                  {/* Timeline Dot */}
                  <div className="absolute left-6 w-4 h-4 bg-gradient-to-br from-light-blue to-blue-gray rounded-full border-4 border-navy z-10"></div>
                  
                  {/* Content Card */}
                  <div className="ml-16 bg-gradient-to-br from-dark-navy/60 to-navy/40 backdrop-blur-sm rounded-3xl p-8 border border-light-blue/20 hover:border-light-blue/40 transition-all duration-300 hover:scale-105 w-full">
                    <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-6">
                      <div className="flex-1">
                        <div className="flex items-center mb-3">
                          <div className="w-3 h-3 bg-light-blue rounded-full mr-3"></div>
                          <span className="text-light-blue text-sm font-medium">{exp.period}</span>
                        </div>
                        <h3 className="text-2xl font-bold text-cream mb-2">{exp.title}</h3>
                        <p className="text-light-blue text-xl font-semibold mb-4">{exp.company}</p>
                      </div>
                    </div>
                    
                    <p className="text-light-blue/90 leading-relaxed mb-6 text-lg">
                      {exp.description}
                    </p>
                    
                    <div className="flex flex-wrap gap-3">
                      {exp.technologies.map((tech, techIndex) => (
                        <span 
                          key={techIndex}
                          className="bg-gradient-to-r from-light-blue/20 to-blue-gray/20 text-light-blue px-4 py-2 rounded-full text-sm font-medium border border-light-blue/30 hover:bg-light-blue/30 transition-all duration-300"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          {/* Experience Summary */}
          <div className="mt-16 bg-gradient-to-r from-light-blue/10 to-blue-gray/10 backdrop-blur-sm rounded-3xl p-8 border border-light-blue/20">
            <div className="grid md:grid-cols-4 gap-8 text-center">
              <div>
                <div className="text-3xl font-bold text-light-blue mb-2">3+</div>
                <div className="text-cream font-medium">Years</div>
                <div className="text-light-blue/60 text-sm">Experience</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-light-blue mb-2">3</div>
                <div className="text-cream font-medium">Companies</div>
                <div className="text-light-blue/60 text-sm">Worked At</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-light-blue mb-2">15+</div>
                <div className="text-cream font-medium">Technologies</div>
                <div className="text-light-blue/60 text-sm">Mastered</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-light-blue mb-2">100%</div>
                <div className="text-cream font-medium">Growth</div>
                <div className="text-light-blue/60 text-sm">Mindset</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
