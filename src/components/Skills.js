import React from 'react';

const Skills = () => {
  const skillCategories = [
    {
      title: "Frontend Technologies",
      skills: [
        { name: "React", icon: "/logos-front-end-tech/react.svg" },
        { name: "JavaScript", icon: "/logos-front-end-tech/javascript.svg" },
        { name: "TypeScript", icon: "/logos-front-end-tech/typescript.svg" },
        { name: "HTML5", icon: "/logos-front-end-tech/html5.svg" },
        { name: "CSS3", icon: "/logos-front-end-tech/css.svg" },
        { name: "Tailwind CSS", icon: "/logos-front-end-tech/tailwindcss.svg" }
      ]
    },
    {
      title: "Backend Technologies",
      skills: [
        { name: "Node.js", icon: "/logos-back-end-tech/nodedotjs.svg" },
        { name: "Express", icon: "/logos-back-end-tech/express.svg" },
        { name: "Python", icon: "/logos-back-end-tech/python.svg" },
        { name: "Linux", icon: "/logos-back-end-tech/linux.svg" }
      ]
    },
    {
      title: "Databases & Data",
      skills: [
        { name: "MongoDB", icon: "/logos-databases-&-data/mongodb.svg" },
        { name: "PostgreSQL", icon: "/logos-databases-&-data/postgresql.svg" },
        { name: "MySQL", icon: "/logos-databases-&-data/mysql.svg" },
        { name: "SQLite", icon: "/logos-databases-&-data/sqlite.svg" },
        { name: "Pandas", icon: "/logo-others/pandas.svg" }
      ]
    },
    {
      title: "Tools & Others",
      skills: [
        { name: "Git", icon: "/logo-others/git.svg" },
        { name: "GitHub", icon: "/logo-others/github.svg" },
        { name: "NPM", icon: "/logo-others/npm.svg" },
        { name: "Supabase", icon: "/logo-others/supabase.svg" }
      ]
    }
  ];

  return (
    <section id="skills" className="py-20 bg-gradient-to-br from-dark-navy to-navy">
      <div className="section-padding container-max-width">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-block bg-light-blue/10 backdrop-blur-sm rounded-full px-6 py-2 mb-6 border border-light-blue/30">
              <span className="text-light-blue text-sm font-medium">What I Do</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-cream mb-6">
              Technical <span className="gradient-text">Skills</span>
            </h2>
            <p className="text-lg text-light-blue/80 max-w-2xl mx-auto">
              A comprehensive overview of the technologies and tools I work with to create amazing digital experiences.
            </p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-8 mb-12">
            {skillCategories.map((category, categoryIndex) => (
              <div key={categoryIndex} className="bg-gradient-to-br from-navy/50 to-blue-gray/20 backdrop-blur-sm rounded-3xl p-8 border border-light-blue/20 hover:border-light-blue/40 transition-all duration-300">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-gradient-to-br from-light-blue to-blue-gray rounded-2xl flex items-center justify-center mr-4">
                    <span className="text-dark-navy font-bold text-lg">{categoryIndex + 1}</span>
                  </div>
                  <h3 className="text-2xl font-semibold text-cream">
                    {category.title}
                  </h3>
                </div>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                  {category.skills.map((skill, skillIndex) => (
                    <div 
                      key={skillIndex}
                      className="bg-dark-navy/40 rounded-xl p-4 text-center hover:bg-dark-navy/60 transition-all duration-300 hover:scale-105 group"
                    >
                      <div className="w-10 h-10 mx-auto mb-3 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                        <img 
                          src={skill.icon} 
                          alt={skill.name}
                          className="w-6 h-6 object-contain"
                          onError={(e) => {
                            e.target.style.display = 'none';
                            e.target.nextSibling.style.display = 'block';
                          }}
                        />
                        <div className="w-6 h-6 bg-light-blue/20 rounded flex items-center justify-center text-light-blue text-xs font-bold" style={{display: 'none'}}>
                          {skill.name.charAt(0)}
                        </div>
                      </div>
                      <span className="text-cream text-xs font-medium group-hover:text-light-blue transition-colors duration-300">{skill.name}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
          
          {/* Skills Summary */}
          <div className="bg-gradient-to-r from-light-blue/10 to-blue-gray/10 backdrop-blur-sm rounded-3xl p-8 border border-light-blue/20">
            <div className="grid md:grid-cols-3 gap-8 text-center">
              <div>
                <div className="text-3xl font-bold text-light-blue mb-2">15+</div>
                <div className="text-cream font-medium">Technologies</div>
                <div className="text-light-blue/60 text-sm">Mastered</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-light-blue mb-2">4</div>
                <div className="text-cream font-medium">Categories</div>
                <div className="text-light-blue/60 text-sm">Expertise</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-light-blue mb-2">100%</div>
                <div className="text-cream font-medium">Commitment</div>
                <div className="text-light-blue/60 text-sm">To Quality</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
