import React, { useEffect, useRef } from 'react';

const Experience = () => {
  const cardRefs = useRef([]);

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
    <section className="px-6 py-12 md:px-12 max-w-6xl mx-auto">
      <h2 className="text-3xl md:text-4xl font-bold text-white mb-8 text-center tracking-tight">
        My <span className="text-gray-400">Experience</span>
      </h2>
      <div className="space-y-6">
        <div 
          ref={(el) => (cardRefs.current[0] = el)}
          className="opacity-0 glass-card p-6 transition-all duration-300 hover:border-purple-500/70 hover:shadow-[0_0_20px_rgba(168,85,247,0.4)] hover:-translate-y-2"
          style={{ animationDelay: '0ms' }}
        >
          <h3 className="text-xl font-bold text-white">Freelance Web Developer</h3>
          <p className="text-blue-400 text-sm mb-3">2024 - Present</p>
          <p className="text-gray-300">Developed responsive, high-performance web applications using React and Tailwind CSS for various clients.</p>
        </div>
        <div 
          ref={(el) => (cardRefs.current[1] = el)}
          className="opacity-0 glass-card p-6 transition-all duration-300 hover:border-purple-500/70 hover:shadow-[0_0_20px_rgba(168,85,247,0.4)] hover:-translate-y-2"
          style={{ animationDelay: '150ms' }}
        >
          <h3 className="text-xl font-bold text-white">IT Intern</h3>
          <p className="text-blue-400 text-sm mb-3">2023 - 2024</p>
          <p className="text-gray-300">Assisted in full-stack architecture design, database management, and UI/UX implementation.</p>
        </div>
      </div>
    </section>
  );
};

export default Experience;