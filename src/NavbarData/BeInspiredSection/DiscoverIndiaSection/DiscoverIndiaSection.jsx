import React from 'react';
import { useNavigate } from 'react-router-dom';
import { discoverIndiaData } from '../../../Data/BeInspiredData/DiscoverIndiaData/DiscoverIndiaData';

const DiscoverIndiaSection = ({ onBack }) => {
  const navigate = useNavigate();

  return (
    <div className="w-full bg-[#D1E9F6] min-h-screen animate-in fade-in duration-500 font-sans">
      {/* Breadcrumb Navbar */}
      <div className="bg-[#41aab4] text-white py-2 px-6 flex items-center gap-2 text-[13px] font-light">
        <span className="cursor-pointer hover:underline" onClick={() => navigate('/')}>Home</span> 
        <span>{">"}</span>
        <span className="cursor-pointer hover:underline" onClick={onBack}>Inspiration</span> 
        <span>{">"}</span>
        <span className="font-normal underline underline-offset-4">Discover your India</span>
      </div>

      {/* Main Content Area */}
      <div className="max-w-[1440px] mx-auto flex flex-col items-center justify-center pt-20 pb-10">
        
        <h2 className="text-[#004D71] text-4xl md:text-6xl font-serif mb-20 text-center">
          Choose a type of holiday
        </h2>

        {/* Card Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-16 px-10 pb-24">
          {discoverIndiaData && discoverIndiaData.map((item) => (
            <div 
              key={item.id} 
              className="group cursor-pointer flex flex-col items-center"
              // Corrected: Uses the id directly from the data item to match your routing
              onClick={() => navigate(`/experience/${item.id}`)}
            >
              <div className="relative w-[360px] h-[500px] shadow-[0_35px_60px_-15px_rgba(0,0,0,0.3)] transition-all duration-500 transform group-hover:-translate-y-6 rounded-2xl overflow-hidden border-l-[6px] border-black/10">
                
                <img 
                  src={item.img} 
                  alt={item.name} 
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" 
                />
                
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent"></div>
                
                <div className="absolute inset-0 flex flex-col items-center justify-end pb-14 text-center px-6">
                  <h3 className="text-white text-5xl font-serif italic mb-2 drop-shadow-2xl">India</h3>
                  <div className="flex flex-col gap-1">
                    <p className="text-white text-xl font-extrabold uppercase tracking-[0.2em] leading-tight drop-shadow-md">
                      {item.name}
                    </p>
                    <p className="text-white text-xl font-extrabold uppercase tracking-[0.2em] drop-shadow-md">
                      Guide
                    </p>
                  </div>
                </div>

                <div className="absolute top-0 left-0 w-4 h-full bg-gradient-to-r from-black/25 to-transparent"></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default DiscoverIndiaSection;