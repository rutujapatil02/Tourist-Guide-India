import React, { useState, useRef } from 'react';
import { AirporData } from '../../../Data/PlanTrip/GettingHere/AirporData'; 
import { FaPlus, FaMinus } from "react-icons/fa";

const AirporSection = ({ onBack }) => {
  const [openAccordion, setOpenAccordion] = useState({});
  const sectionRefs = useRef({});

  // ✅ Scroll using refs — reliable inside nested scroll containers
  const scrollToState = (id) => {
    const el = sectionRefs.current[id];
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const toggleAccordion = (airportId, index) => {
    const key = `${airportId}-${index}`;
    setOpenAccordion(prev => ({ ...prev, [key]: !prev[key] }));
  };

  return (
    <div className="bg-white min-h-screen relative">

      {/* 🔹 Breadcrumb Navbar */}
      <div className="bg-[#3ab0ba] text-white py-3 px-6 md:px-10 lg:px-20 text-sm font-medium sticky top-0 z-[60] shadow-md">
        <div className="max-w-7xl mx-auto flex items-center gap-2">
          <button onClick={onBack} className="hover:underline">Home</button>
          <span>{">"}</span>
          <span>Plan your trip</span>
          <span>{">"}</span>
          <span className="opacity-80">Airport information</span>
        </div>
      </div>

      {/* 🔹 Hero Image with Navbar Overlay */}
      <div className="relative h-[110vh] w-full">
        <img 
          src={AirporData.hero.image} 
          alt="Airport Hero" 
          className="w-full h-full object-cover"
        />

        {/* 🔹 State Navbar — overlaid on top of hero */}
        <div className="absolute top-0 left-0 w-full bg-black/40 backdrop-blur-md py-4 border-b border-white/10">
          <div className="max-w-7xl mx-auto px-6 md:px-10 lg:px-20 flex justify-start lg:justify-center gap-8 overflow-x-auto no-scrollbar">
            {AirporData.airports.map(a => (
              <span 
                key={a.id}
                onClick={() => scrollToState(a.id)}
                className="cursor-pointer text-white font-semibold text-xs uppercase tracking-widest hover:text-[#3ab0ba] relative group whitespace-nowrap"
              >
                {a.id}
                <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-[#3ab0ba] transition-all duration-300 group-hover:w-full"></span>
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* 🔹 White Overlap Card — ✅ with left/right padding mx */}
      <div className="relative -mt-20 z-10 bg-white shadow-2xl pb-20  mx-6 md:mx-14 lg:mx-24">

        {/* 🔹 Title Section */}
        <div className="max-w-5xl mx-auto px-6 md:px-12 lg:px-20 py-20 text-center">
          <h1 className="text-5xl md:text-6xl font-serif font-bold text-gray-900 mb-6 leading-tight">
            {AirporData.hero.title}
          </h1>
          <p className="text-lg text-gray-500 italic font-serif leading-relaxed">
            {AirporData.hero.introText}
          </p>
        </div>

        {/* 🔹 Airport Sections */}
        {AirporData.airports.map((airport) => (
          <section 
            key={airport.id} 
            id={airport.id}
            ref={el => sectionRefs.current[airport.id] = el}
            className="max-w-5xl mx-auto px-4 md:px-8 lg:px-12 py-16 border-t border-gray-100"
          >
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-gray-900 mb-10">
              Getting to {airport.id}
            </h2>

            {/* 🔹 Image Card */}
            <div className="w-full md:w-[75%] mx-auto rounded-3xl overflow-hidden mb-12 shadow-xl aspect-video">
              <img 
                src={airport.image} 
                alt={airport.id} 
                className="w-full h-full object-cover" 
              />
            </div>

            {/* 🔹 Accordions */}
            <div className="max-w-4xl mx-auto border-t border-gray-200">
              {airport.details.map((detail, idx) => {
                const key = `${airport.id}-${idx}`;
                const isOpen = openAccordion[key];

                return (
                  <div key={idx} className="border-b border-gray-200">
                    <button 
                      onClick={() => toggleAccordion(airport.id, idx)}
                      className="w-full py-6 flex justify-between items-center text-left px-2 group"
                    >
                      <span className="text-lg md:text-xl font-semibold text-gray-800 group-hover:text-[#3ab0ba] transition-colors">
                        {detail.label}
                      </span>

                      <div className={`transition-transform duration-300 ${isOpen ? 'rotate-180 text-[#3ab0ba]' : 'text-gray-400'}`}>
                        {isOpen ? <FaMinus /> : <FaPlus />}
                      </div>
                    </button>

                    <div className={`overflow-hidden transition-all duration-500 ${isOpen ? "max-h-96 pb-6 px-2" : "max-h-0"}`}>
                      <p className="text-gray-600 leading-relaxed border-l-4 border-[#3ab0ba] pl-4">
                        {detail.content}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>

          </section>
        ))}
      </div>

    </div>
  );
};

export default AirporSection;