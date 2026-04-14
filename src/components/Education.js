import React from 'react';

const Education = () => {
  const educationData = [
    {
      school: "University of the Cordilleras",
      degree: "Bachelor of Science in Information Technology",
      years: "Current",
      description: "Specializing in web development and full-stack architecture. Focus on modern frameworks and efficient digital solutions.",
    }
  ];

  return (
    <section className="px-6 py-16 md:px-12 bg-transparent">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-white mb-10 border-l-4 border-purple-500 pl-4">
          Education
        </h2>
        
        <div className="space-y-8">
          {educationData.map((edu, index) => (
            <div 
              key={index} 
              className="bg-[#1a111d]/50 border border-gray-800 p-8 rounded-3xl transition-all duration-300 hover:border-purple-500/70 hover:shadow-[0_0_20px_rgba(168,85,247,0.4)] hover:-translate-y-2"
            >
              <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-4">
                <div>
                  <h3 className="text-xl font-bold text-white">{edu.school}</h3>
                  <p className="text-purple-400 font-medium">{edu.degree}</p>
                </div>
                <span className="px-4 py-1 bg-gray-800 text-gray-300 text-xs rounded-full w-fit">
                  {edu.years}
                </span>
              </div>
              <p className="mt-4 text-gray-400 text-sm leading-relaxed max-w-3xl">
                {edu.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;