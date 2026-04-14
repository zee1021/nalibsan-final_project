import React from 'react';

const AboutMe = () => {
  return (
    <section className="flex flex-col items-center justify-center text-center py-20 px-4">
      {}
      <h2 className="text-4xl md:text-6xl font-extrabold text-white mb-6 tracking-tight">
        Digital Artisan & <span className="text-gray-400">IT Developer</span>
      </h2>

      {}
      <p className="max-w-2xl text-gray-300 text-base md:text-lg leading-relaxed font-light">
        I blend BSIT expertise with intuitive design to build high-performance digital experiences. 
        Specializing in sleek, high-contrast interfaces and full-stack architecture.
      </p>

      {}
      <div className="mt-10 w-12 h-[1px] bg-gradient-to-r from-transparent via-gray-500 to-transparent"></div>
    </section>
  );
};

export default AboutMe;