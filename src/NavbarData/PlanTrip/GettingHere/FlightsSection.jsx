import React, { useState, useRef } from 'react';
import { gettingHereData, statesData, accordionOptions } from '../../../Data/PlanTrip/GettingHere/FlightsData';

const FlightsSection = ({ onBack }) => {
  const [openAccordion, setOpenAccordion] = useState({});
  const data = gettingHereData[0];
  const sectionRefs = useRef({});

  const scrollToSection = (id) => {
    const el = sectionRefs.current[id];
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  const toggleAccordion = (stateId, index) => {
    const key = `${stateId}-${index}`;
    setOpenAccordion(prev => ({ ...prev, [key]: !prev[key] }));
  };

  const accordionContent = (option, stateName) => {
    const o = option.toLowerCase();
    if (o.includes("international")) {
      return `${stateName}'s international airport is serviced by many international airlines, making it an easy gateway to arrive from overseas. Flights arrive from cities in Asia, the Middle East, North America, South America, and Europe.`;
    } else if (o.includes("domestic")) {
      return `Domestic flights to ${stateName} are frequent and affordable. Airlines like IndiGo, Air India, SpiceJet, and Vistara operate multiple daily routes connecting ${stateName} to major Indian cities.`;
    } else if (o.includes("driving")) {
      return `Driving to ${stateName} is a scenic option. National highways connect ${stateName} to neighbouring states with well-maintained roads. Toll roads and expressways make long-distance travel comfortable.`;
    } else {
      return `Train connectivity to ${stateName} is excellent. Indian Railways operates express and superfast trains from major cities. Rajdhani and Shatabdi express services offer premium comfort and speed.`;
    }
  };

  return (
    <div className="bg-white min-h-screen">

      {/* 1. TEAL BREADCRUMB */}
      <div className="w-full bg-[#4fb0ba] text-white text-sm py-3 px-6">
        <div className="max-w-7xl mx-auto flex items-center gap-2 flex-wrap">
          <span onClick={onBack} className="cursor-pointer hover:underline">Plan your trip</span>
          <span>&gt;</span>
          <span onClick={onBack} className="cursor-pointer hover:underline">Getting here</span>
          <span>&gt;</span>
          <span className="font-semibold">How to get to India's most iconic cities and destinations</span>
        </div>
      </div>

      {/* 2. STATE NAVBAR — light gray bg, ABOVE hero, sticky */}
      <div className="w-full bg-white/80 backdrop-blur-md border-b border-gray-100 sticky top-0 z-50 overflow-x-auto scrollbar-hide">
        <div className="max-w-7xl mx-auto px-6 py-4 flex gap-8 md:gap-14 justify-start lg:justify-center">
          {statesData.map((state) => (
            <button
              key={state.id}
              onClick={() => scrollToSection(state.id)}
              className="text-gray-700 font-semibold text-sm whitespace-nowrap hover:text-black border-b-2 border-transparent hover:border-black transition-all pb-1 shrink-0"
            >
              {state.name}
            </button>
          ))}
        </div>
      </div>

      {/* 3. HERO IMAGE — full width, no rounded corners */}
      <div className="w-full h-[320px] md:h-[460px] overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1524492412937-b28074a5d7da?q=80&w=2071"
          alt="India"
          className="w-full h-full object-cover"
        />
      </div>

      {/* 4. WHITE CONTENT — straight edges, overlaps hero with negative margin */}
      <div className="relative z-10 bg-white -mt-12 mx-8 md:mx-16 shadow-xl">

        {/* HERO TEXT */}
        <div className="max-w-3xl mx-auto px-6 py-20 text-center">
          <h1 className="text-5xl md:text-7xl font-serif font-bold text-gray-900 mb-8 leading-tight">
            {data.heroTitle}
          </h1>
          <p className="text-xl text-gray-600 mb-8 leading-relaxed">
            {data.heroSubtitle}
          </p>
          <p className="text-xs font-bold text-gray-500 uppercase tracking-widest mb-12">
            {data.author}
          </p>
          <div className="border-t border-gray-200 pt-10">
            <p className="text-lg text-gray-500 italic font-serif leading-relaxed">
              {data.introText}
            </p>
          </div>
        </div>

        {/* PER-STATE SECTIONS */}
        {statesData.map((state) => (
          <div
            key={state.id}
            id={state.id}
            ref={el => sectionRefs.current[state.id] = el}
            className="border-t border-gray-200 px-6 py-16"
          >
            <div className="max-w-3xl mx-auto">

              <h2 className="text-4xl md:text-6xl font-serif font-bold text-gray-900 mb-10">
                Getting to {state.name}
              </h2>

              <div className="w-full overflow-hidden mb-3">
                <img
                  src={state.image}
                  alt={state.name}
                  className="w-full h-[300px] md:h-[480px] object-cover"
                />
              </div>

              <p className="text-xs text-gray-400 mb-10 flex items-center gap-1">
                <span>📷</span>
                <span>{state.name}, India</span>
              </p>

              <div>
                {accordionOptions.map((option, idx) => {
                  const key = `${state.id}-${idx}`;
                  const isOpen = openAccordion[key];
                  const label = option.replace("[Location]", state.name);

                  return (
                    <div key={idx} className="border-t border-gray-200 last:border-b last:border-gray-200">
                      <button
                        onClick={() => toggleAccordion(state.id, idx)}
                        className="w-full py-5 flex justify-between items-center text-left group"
                      >
                        <span className="text-base md:text-lg font-bold text-gray-900">
                          {label}
                        </span>
                        <span className="text-2xl font-light text-gray-400 ml-4 shrink-0 group-hover:text-gray-900 transition-colors">
                          {isOpen ? '×' : '+'}
                        </span>
                      </button>

                      <div className={`overflow-hidden transition-all duration-500 ease-in-out ${isOpen ? 'max-h-60 pb-6' : 'max-h-0'}`}>
                        <p className="text-base text-gray-600 leading-relaxed">
                          {accordionContent(option, state.name)}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>

            </div>
          </div>
        ))}

      </div>

    </div>
  );
};

export default FlightsSection;