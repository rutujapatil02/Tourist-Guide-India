import React, { useState, useRef } from 'react';
import { TrainData } from '../../../Data/PlanTrip/GettingAround/TrainData';

const TrainSection = ({ onBack }) => {
  const [openAccordion, setOpenAccordion] = useState({});
  const sectionRefs = useRef({});

  const scrollToRoute = (id) => {
    const el = sectionRefs.current[id];
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  const toggleAccordion = (routeId, index) => {
    const key = `${routeId}-${index}`;
    setOpenAccordion(prev => ({ ...prev, [key]: !prev[key] }));
  };

  return (
    <div className="bg-white min-h-screen">

      {/* 1. TEAL BREADCRUMB */}
      <div className="bg-[#3ab0ba] text-white py-3 px-6 md:px-10 text-sm font-medium sticky top-0 z-[60] shadow-md">
        <div className="max-w-7xl mx-auto flex items-center gap-2 flex-wrap">
          <button onClick={onBack} className="hover:underline">Plan your trip</button>
          <span>&gt;</span>
          <span>Getting around</span>
          <span>&gt;</span>
          <span className="opacity-80">Rail and train travel</span>
        </div>
      </div>

      {/* 2. HERO IMAGE + ROUTE NAVBAR overlaid */}
      <div className="relative w-full h-[500px] md:h-[620px]">
        <img
          src={TrainData.hero.image}
          alt="Train travel hero"
          className="w-full h-full object-cover"
        />

        {/* Route navbar on top of hero */}
        <div className="absolute top-0 left-0 w-full bg-black/40 backdrop-blur-md py-4 border-b border-white/10">
          <div className="max-w-7xl mx-auto px-6 flex gap-8 md:gap-12 justify-start lg:justify-center overflow-x-auto scrollbar-hide">
            {TrainData.routes.map(route => (
              <button
                key={route.id}
                onClick={() => scrollToRoute(route.id)}
                className="text-white font-semibold text-xs uppercase tracking-widest opacity-80 hover:opacity-100 border-b-2 border-transparent hover:border-white transition-all pb-1 whitespace-nowrap shrink-0"
              >
                {route.name}
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
            {TrainData.hero.title}
          </h1>
          <div className="border-t border-gray-200 pt-10">
            <p className="text-lg text-gray-500 italic font-serif leading-relaxed">
              {TrainData.hero.introText}
            </p>
          </div>
        </div>

        {/* Route sections */}
        {TrainData.routes.map((route) => (
          <section
            key={route.id}
            id={route.id}
            ref={el => sectionRefs.current[route.id] = el}
            className="max-w-3xl mx-auto px-6 py-16 border-t border-gray-100"
          >
            <h2 className="text-4xl md:text-6xl font-serif font-bold text-gray-900 mb-10">
              {route.name}
            </h2>

            <div className="w-full overflow-hidden mb-3">
              <img
                src={route.image}
                alt={route.name}
                className="w-full h-[300px] md:h-[480px] object-cover"
              />
            </div>

            <p className="text-xs text-gray-400 mb-10 flex items-center gap-1">
              <span>📷</span>
              <span>{route.name}, India</span>
            </p>

            <div className="border-t border-gray-200">
              {route.details.map((detail, idx) => {
                const key = `${route.id}-${idx}`;
                const isOpen = openAccordion[key];

                return (
                  <div key={idx} className="border-b border-gray-200">
                    <button
                      onClick={() => toggleAccordion(route.id, idx)}
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

export default TrainSection;