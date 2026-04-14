import React, { useState, useEffect, useRef } from 'react';

const Projects = () => {
  const cardRefs = useRef([]);
  const [selectedProject, setSelectedProject] = useState(null);

  const projectData = [
    {
      title: "Nova Financial App",
      description: "A sophisticated mobile dashboard for financial tracking with a focus on dark-mode aesthetics.",
      details: "This project involved creating a full mobile dashboard allowing users to track their expenses, manage budgets, and visualize their financial health through interactive charts. Built entirely with React and Tailwind CSS.",
      image: process.env.PUBLIC_URL + "/nova.jpg",
      link: "https://example.com/nova" 
    },
    {
      title: "Dropoint System",
      description: "Full-stack logistics management platform integrated with PSGC data for high-precision tracking.",
      details: "A comprehensive logistics platform designed to optimize delivery routes and track packages in real-time. It integrates directly with the Philippine Standard Geographic Code (PSGC) API to ensure accurate location tagging.",
      image: process.env.PUBLIC_URL + "/dropoint.png",
      link: "https://example.com/dropoint" 
    },
    {
      title: "Kape Kuma",
      description: "Digital branding and menu system designed for a mobile coffee pop-up, focusing on accessibility.",
      details: "Developed a modern, accessible digital menu and branding landing page for a local coffee pop-up. The interface was heavily optimized for mobile devices and quick scanning by customers waiting in line.",
      image: process.env.PUBLIC_URL + "/kapekuma.png",
      link: "https://example.com/kapekuma"
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
    <section className="px-6 py-12 md:px-12">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {projectData.map((project, index) => (
          <div 
            key={index} 
            ref={(el) => (cardRefs.current[index] = el)}
            onClick={() => setSelectedProject(project)}
            className="opacity-0 group block cursor-pointer bg-[#1a111d] border border-gray-800 rounded-[2rem] p-4 transition-all duration-300 hover:border-purple-500/70 hover:shadow-[0_0_20px_rgba(168,85,247,0.4)] hover:-translate-y-2 shadow-xl"
            style={{ animationDelay: `${index * 150}ms` }}
          >
            {/* Project Image Container */}
            <div className="relative rounded-[1.5rem] overflow-hidden mb-6 aspect-video bg-gray-900">
              <img 
                src={project.image} 
                alt={project.title} 
                className="w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500"
              />
              {/* Hover Overlay */}
              <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="flex items-center gap-2 bg-white/20 backdrop-blur-md text-white px-5 py-2.5 rounded-full font-semibold text-sm border border-white/30 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                  <span>View Details</span>
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </div>
              </div>
            </div>

            {/* Project Text */}
            <div className="px-2 pb-4">
              <h3 className="text-xl font-bold text-white mb-3 tracking-tight">
                {project.title}
              </h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                {project.description}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Project Details Modal */}
      {selectedProject && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm fade-in" 
          onClick={() => setSelectedProject(null)}
        >
          <div 
            className="bg-[#1a111d] border border-purple-500/50 rounded-3xl max-w-2xl w-full p-6 relative shadow-[0_0_40px_rgba(168,85,247,0.2)] max-h-[90vh] overflow-y-auto fade-in-up"
            style={{ animationDuration: '400ms' }}
            onClick={(e) => e.stopPropagation()}
          >
            <button 
              onClick={() => setSelectedProject(null)}
              className="absolute top-4 right-4 z-10 text-gray-400 hover:text-white bg-black/50 hover:bg-black p-2 rounded-full transition-colors"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path></svg>
            </button>
            <div className="rounded-2xl overflow-hidden mb-6 aspect-video bg-gray-900">
              <img src={selectedProject.image} alt={selectedProject.title} className="w-full h-full object-cover" />
            </div>
            <h3 className="text-2xl font-bold text-white mb-4">{selectedProject.title}</h3>
            <p className="text-gray-300 leading-relaxed mb-8">{selectedProject.details}</p>
            <a 
              href={selectedProject.link} 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-purple-600 hover:bg-purple-700 text-white font-bold py-3 px-6 rounded-xl transition-colors duration-300"
            >
              <span>Visit Project Site</span>
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
            </a>
          </div>
        </div>
      )}
    </section>
  );
};

export default Projects;