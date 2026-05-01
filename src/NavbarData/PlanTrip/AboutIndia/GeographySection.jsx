import React from 'react';
import { geographyData } from '../../../Data/PlanTrip/AboutIndia/GeographyData';
import { useNavigate } from 'react-router-dom';

const GeographySection = ({ onNavigateBack }) => {
  const { hero, contentSections } = geographyData;
  const navigate = useNavigate();

  return (
    /* Main container fixed to cover the screen and hide parent navbars */
    <div className="fixed inset-0 z-[100] bg-gray-100 w-screen h-screen overflow-y-auto font-sans overflow-x-hidden">
      
      {/* ✅ REFINED BREADCRUMB NAVBAR 
          Style: Home > Plan your trip > Page Title
      */}
      <div className="w-full bg-[#3BB0C1] text-white py-3 px-6 md:px-10 flex items-center gap-3 text-[11px] tracking-widest uppercase font-bold sticky top-0 z-50 shadow-md">
        <button 
          onClick={() => navigate('/')} 
          className="hover:opacity-75 transition-opacity"
        >
          Home
        </button>

        <span className="opacity-50 text-[10px] font-normal">&gt;</span>

        <button 
          onClick={onNavigateBack} 
          className="hover:opacity-75 transition-opacity"
        >
          Plan your trip
        </button>

        <span className="opacity-50 text-[10px] font-normal">&gt;</span>

        <span className="opacity-90 truncate">
          {hero.title}
        </span>
      </div>

      {/* HERO SECTION */}
      <div className="relative w-full h-[75vh] md:h-[85vh] overflow-hidden">
        <img 
          src={hero.backgroundImage} 
          className="w-full h-full object-cover" 
          alt="Geography Background" 
        />
        {/* Title overlay positioned at the bottom left */}
        <div className="absolute inset-0 bg-black/20 flex flex-col justify-end p-8 md:p-24 pb-44">
          <h1 className="text-white text-5xl md:text-8xl font-serif font-bold max-w-6xl leading-tight drop-shadow-2xl">
            {hero.title}
          </h1>
        </div>
      </div>

      {/* ✅ OVERLAPPING CONTENT BOX */}
      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="-mt-32 bg-white shadow-2xl p-8 md:p-20 mb-20 border-t-[10px] border-orange-600">
          
          {/* Subtitle / Intro Section */}
          <div className="mb-24 border-b border-gray-100 pb-20">
            <p className="text-3xl md:text-5xl text-gray-900 leading-tight font-serif italic max-w-4xl">
              "{hero.subtitle}"
            </p>
          </div>

          {/* Geography Sections: Alternating Image and Text */}
          <div className="space-y-40">
            {contentSections.map((section, index) => (
              <div 
                key={index} 
                className={`flex flex-col lg:flex-row items-center gap-16 ${index % 2 !== 0 ? "lg:flex-row-reverse" : ""}`}
              >
                {/* Image Side */}
                <div className="w-full lg:w-3/5">
                  <div className="relative overflow-hidden shadow-xl aspect-video group">
                    <img 
                      src={section.image} 
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" 
                      alt={section.title} 
                    />
                  </div>
                </div>

                {/* Text Side */}
                <div className="w-full lg:w-2/5 space-y-6">
                  <div className="flex items-center gap-4">
                    <span className="text-6xl font-serif font-light text-gray-100">
                      0{index + 1}
                    </span>
                    <div className="h-[1px] flex-grow bg-gray-100"></div>
                  </div>
                  <h3 className="text-4xl font-serif font-bold text-gray-900 leading-tight">
                    {section.title}
                  </h3>
                  <p className="text-lg text-gray-600 leading-relaxed font-light">
                    {section.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Footer Navigation Button */}
          <div className="mt-40 pt-12 border-t border-gray-100 text-center">
            <button 
              onClick={onNavigateBack}
              className="text-orange-600 font-bold uppercase tracking-[0.3em] text-xs hover:text-orange-800 transition-all"
            >
              ← Back to Overview
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GeographySection;