import React, { useState, useRef } from 'react';
import { CruisesData } from '../../../Data/PlanTrip/GettingHere/CruisesData';
import { FaPlus, FaMinus } from "react-icons/fa";

const CruisesSection = ({ onBack }) => {
  const [openAccordion, setOpenAccordion] = useState({});
  const sectionRefs = useRef({});

  const scrollToPort = (id) => {
    const el = sectionRefs.current[id];
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  const toggleAccordion = (portId, index) => {
    const key = `${portId}-${index}`;
    setOpenAccordion(prev => ({ ...prev, [key]: !prev[key] }));
  };

  return (
    <div className="bg-white min-h-screen">

      {/* 1. TEAL BREADCRUMB */}
      <div className="bg-[#3ab0ba] text-white py-3 px-6 md:px-10 text-sm font-medium sticky top-0 z-[60] shadow-md">
        <div className="max-w-7xl mx-auto flex items-center gap-2 flex-wrap">
          <button onClick={onBack} className="hover:underline">Plan your trip</button>
          <span>&gt;</span>
          <span>Getting here</span>
          <span>&gt;</span>
          <span className="opacity-80">Cruises and sea travel</span>
        </div>
      </div>

      {/* 2. HERO IMAGE + PORT NAVBAR overlaid on top */}
      <div className="relative w-full h-[500px] md:h-[620px]">
        <img
          src={CruisesData.hero.image}
          alt="Cruises Hero"
          className="w-full h-full object-cover"
        />

        {/* Port navbar on top of hero */}
        <div className="absolute top-0 left-0 w-full bg-black/40 backdrop-blur-md py-4 border-b border-white/10">
          <div className="max-w-7xl mx-auto px-6 flex gap-8 md:gap-12 justify-start lg:justify-center overflow-x-auto scrollbar-hide">
            {CruisesData.ports.map(port => (
              <button
                key={port.id}
                onClick={() => scrollToPort(port.id)}
                className="text-white font-semibold text-xs uppercase tracking-widest opacity-80 hover:opacity-100 border-b-2 border-transparent hover:border-white transition-all pb-1 whitespace-nowrap shrink-0"
              >
                {port.name}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* 3. WHITE CONTENT — overlaps hero, straight edges, side margins */}
      <div className="relative z-10 bg-white -mt-12 mx-6 md:mx-14 lg:mx-24 shadow-2xl pb-20">

        {/* Hero text */}
        <div className="max-w-3xl mx-auto px-6 py-20 text-center">
          <h1 className="text-5xl md:text-7xl font-serif font-bold text-gray-900 mb-8 leading-tight">
            {CruisesData.hero.title}
          </h1>
          <div className="border-t border-gray-200 pt-10">
            <p className="text-lg text-gray-500 italic font-serif leading-relaxed">
              {CruisesData.hero.introText}
            </p>
          </div>
        </div>

        {/* Port sections */}
        {CruisesData.ports.map((port) => (
          <section
            key={port.id}
            id={port.id}
            ref={el => sectionRefs.current[port.id] = el}
            className="max-w-3xl mx-auto px-6 py-16 border-t border-gray-100"
          >
            <h2 className="text-4xl md:text-6xl font-serif font-bold text-gray-900 mb-10">
              {port.name}
            </h2>

            <div className="w-full overflow-hidden mb-3">
              <img
                src={port.image}
                alt={port.name}
                className="w-full h-[300px] md:h-[480px] object-cover"
              />
            </div>

            <p className="text-xs text-gray-400 mb-10 flex items-center gap-1">
              <span>📷</span>
              <span>{port.name}, India</span>
            </p>

            <div className="border-t border-gray-200">
              {port.details.map((detail, idx) => {
                const key = `${port.id}-${idx}`;
                const isOpen = openAccordion[key];

                return (
                  <div key={idx} className="border-b border-gray-200">
                    <button
                      onClick={() => toggleAccordion(port.id, idx)}
                      className="w-full py-5 flex justify-between items-center text-left group"
                    >
                      <span className="text-base md:text-lg font-bold text-gray-900 group-hover:text-[#3ab0ba] transition-colors">
                        {detail.label}
                      </span>
                      <span className="text-2xl font-light text-gray-400 ml-4 shrink-0 group-hover:text-gray-900 transition-colors">
                        {isOpen ? '×' : '+'}
                      </span>
                    </button>

                    <div className={`overflow-hidden transition-all duration-500 ease-in-out ${isOpen ? 'max-h-60 pb-6' : 'max-h-0'}`}>
                      <p className="text-base text-gray-600 leading-relaxed border-l-4 border-[#3ab0ba] pl-4">
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

export default CruisesSection;