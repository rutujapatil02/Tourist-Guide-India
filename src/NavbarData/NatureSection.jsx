import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { natureData } from '../Data/NatureData';
import { FaArrowRight } from "react-icons/fa";
import MunnarGardensSection from './ThingsToDo/Nature/MunnarGardensSection';

const NatureSection = () => {
  const navigate = useNavigate();
  const [activeItem, setActiveItem] = useState(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [activeItem]);

  const handleBackToGrid = () => {
    setActiveItem(null);
  };

  // If an item is clicked, render the detail view as an overlay
  if (activeItem) {
    return (
      <div 
        className="fixed bg-white w-full"
        style={{ 
          top: '80px',    // This offset keeps your Main Navbar (Logo) visible
          left: 0, 
          height: 'calc(100vh - 80px)', 
          zIndex: 50,     // High enough to cover the "marked" category navbar
          overflowY: 'auto' 
        }}
      >
        <MunnarGardensSection 
          place={activeItem} 
          onNavigateBack={handleBackToGrid} 
        />
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 px-4 py-8">
      {natureData.map((item) => (
        <div 
          key={item.id} 
          onClick={() => setActiveItem(item)}
          className="group cursor-pointer transform transition-all duration-500 hover:-translate-y-2"
        >
          {/* Image Container */}
          <div className="relative aspect-[3/2] w-full overflow-hidden rounded-xl bg-gray-100 shadow-lg">
            <img
              src={item.image}
              alt={item.name}
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
              <p className="text-white text-xs font-medium tracking-wider uppercase">
                {item.location}
              </p>
            </div>
          </div>

          {/* Label Section */}
          <div className="mt-2 text-center py-5 bg-white rounded-b-xl border-b-4 border-transparent group-hover:border-[#3BB0C1] group-hover:bg-cyan-50/30 transition-all shadow-sm">
            <span className="font-bold text-gray-900 group-hover:text-[#3BB0C1] transition-colors duration-300">
              {item.name}
            </span>
          </div>
        </div>
      ))}

      {/* Explore All Card */}
      <div className="group cursor-pointer" onClick={() => navigate('/nature-all')}>
        <div className="relative aspect-[3/2] w-full overflow-hidden rounded-xl bg-gray-900 flex items-center justify-center shadow-lg transition-all duration-500 group-hover:bg-gray-800">
          <div className="flex flex-col items-center gap-3">
            <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center shadow-md transition-all duration-300 group-hover:bg-[#3BB0C1] group-hover:scale-110">
              <FaArrowRight className="text-black group-hover:text-white text-lg transition-colors" />
            </div>
            <span className="font-bold text-white uppercase tracking-[0.3em] text-[10px]">Explore All</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NatureSection;