import React, { useEffect, useRef } from 'react';

const Skills = () => {
  const cardRefs = useRef([]);

  const skillCategories = [
    {
      title: "Frontend Development",
      skills: ["HTML5", "CSS3", "JavaScript", "React JS", "Tailwind CSS"]
    },
    {
      title: "Backend & Tools",
      skills: ["Laravel", "PostgreSQL", "Supabase", "Git & GitHub", "TypeScript"]
    },
    {
      title: "IT & Networking",
      skills: ["Cisco Packet Tracer", "Network Configuration", "VLANs", "STP"]
    }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('fade-in-up');
            // Unobserve so the animation only happens the first time you scroll down
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    cardRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <section className="px-6 py-16 md:px-12">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-white mb-10 border-l-4 border-purple-500 pl-4">
          Technical Skills
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <div 
              key={index} 
              ref={(el) => (cardRefs.current[index] = el)}
              className="opacity-0 bg-[#1a111d]/30 border border-gray-800 p-6 rounded-2xl transition-all duration-300 hover:bg-[#1a111d]/50 hover:border-purple-500/70 hover:shadow-[0_0_20px_rgba(168,85,247,0.4)] hover:-translate-y-2"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <h3 className="text-purple-400 font-semibold mb-6 text-lg uppercase tracking-wider">
                {category.title}
              </h3>
              <div className="flex flex-wrap gap-3">
                {category.skills.map((skill, sIndex) => (
                  <span 
                    key={sIndex} 
                    className="px-4 py-2 bg-gray-800/50 text-gray-300 text-sm rounded-xl border border-gray-700 hover:border-purple-500/50 transition-colors cursor-default"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;