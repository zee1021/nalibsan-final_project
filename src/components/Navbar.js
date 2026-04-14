import React from 'react';

const Navbar = () => {
  const handleScroll = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className="flex justify-between items-center px-6 py-4 md:px-12 bg-transparent text-white">
      {/* Left Side: Profile Info */}
      <div className="flex items-center gap-3">
        <div className="w-10 h-10 rounded-lg bg-gray-700 overflow-hidden border border-gray-600">
          <img 
            src="/profile.png" 
            alt="Suzzane" 
            className="w-full h-full object-cover"
          />
        </div>
        <div>
          <h1 className="text-xs md:text-sm font-bold tracking-widest uppercase">
            Suzzane P. Nalibsan
          </h1>
          <p className="text-[10px] text-gray-400 font-medium">
            BSIT STUDENT | UC
          </p>
        </div>
      </div>

      {/* Right Side: Connect Button */}
      <div>
        <button 
          onClick={handleScroll}
          className="px-5 py-1.5 bg-white text-black text-sm font-bold rounded-lg hover:bg-gray-200 transition-all duration-300"
        >
          Connect
        </button>
      </div>
    </nav>
  );
};

export default Navbar;