import React, { useState, useRef } from 'react';
import { CarData } from '../../../Data/PlanTrip/GettingAround/CarData';

const CarSection = ({ onBack }) => {
  const [activeRegion, setActiveRegion] = useState(CarData.regions[0].id);
  const regionRefs = useRef({});

  const scrollToRegion = (id) => {
    setActiveRegion(id);
    const el = regionRefs.current[id];
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <div className="bg-white min-h-screen">

      {/* 1. BREADCRUMB */}
      <div className="bg-[#3ab0ba] text-white py-3 px-6 md:px-10 text-sm font-medium sticky top-0 z-[60] shadow-md">
        <div className="max-w-7xl mx-auto flex items-center gap-2 flex-wrap">
          <button onClick={onBack} className="hover:underline">Plan your trip</button>
          <span>&gt;</span>
          <span>Getting around</span>
          <span>&gt;</span>
          <span className="opacity-80">Car rental and driving</span>
        </div>
      </div>

      {/* 2. HERO */}
      <div className="relative w-full h-[420px] md:h-[560px] overflow-hidden">
        <img
          src={CarData.hero.image}
          alt="Car rental hero"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/50 flex flex-col items-center justify-center text-white text-center px-6">
          <h1 className="text-4xl md:text-7xl font-serif font-bold mb-6">
            {CarData.hero.title}
          </h1>
          <p className="text-lg md:text-xl text-white/80 max-w-2xl">
            {CarData.hero.subtitle}
          </p>
        </div>
      </div>

      {/* 3. OVERLAPPING CARD */}
      <div className="relative z-10 -mt-24 max-w-7xl mx-auto px-6 pb-24">
        <div className="bg-white shadow-2xl rounded-xl pt-10 pb-16">

          {/* DRIVING TIPS */}
          <div className="px-6 mb-16">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {CarData.tips.map((tip, idx) => (
                <div key={idx} className="flex flex-col items-center text-center gap-3">
                  <span className="text-4xl">{tip.icon}</span>
                  <h3 className="font-bold text-gray-900 text-sm uppercase tracking-wide">{tip.title}</h3>
                  <p className="text-sm text-gray-500">{tip.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* MAIN CONTENT */}
          <div className="flex flex-col lg:flex-row gap-12 px-6">

            {/* SIDEBAR */}
            <aside className="w-full lg:w-1/4 lg:sticky lg:top-24 lg:self-start">
              <h3 className="text-xs font-black uppercase tracking-widest text-gray-400 mb-6">
                Road Trip Routes
              </h3>

              <div className="flex flex-row lg:flex-col gap-2 overflow-x-auto lg:overflow-visible">
                {CarData.regions.map((region) => (
                  <button
                    key={region.id}
                    onClick={() => scrollToRegion(region.id)}
                    className={`flex items-center gap-3 px-4 py-3 rounded-xl text-left transition-all whitespace-nowrap lg:whitespace-normal w-full ${
                      activeRegion === region.id
                        ? 'bg-[#3ab0ba] text-white shadow-md'
                        : 'bg-gray-50 text-gray-700 hover:bg-gray-100'
                    }`}
                  >
                    <div>
                      <span className="font-bold text-sm">{region.name}</span>
                      <div className={`text-xs mt-0.5 ${activeRegion === region.id ? 'text-white/70' : 'text-gray-400'}`}>
                        {region.distance} · {region.duration}
                      </div>
                    </div>
                  </button>
                ))}
              </div>
            </aside>

            {/* RIGHT CONTENT */}
            <main className="w-full lg:w-3/4 flex flex-col gap-20">
              {CarData.regions.map((region) => (
                <div
                  key={region.id}
                  ref={el => regionRefs.current[region.id] = el}
                  className="scroll-mt-24"
                >
                  {/* Image */}
                  <div className="rounded-2xl overflow-hidden mb-8 shadow-lg">
                    <img
                      src={region.image}
                      alt={region.name}
                      className="w-full h-[280px] md:h-[420px] object-cover hover:scale-105 transition"
                    />
                  </div>

                  {/* Header */}
                  <div className="flex flex-wrap items-center gap-4 mb-6">
                    <h2 className="text-3xl md:text-5xl font-serif font-bold text-gray-900">
                      {region.name}
                    </h2>
                    <span className={`px-3 py-1 rounded-full text-xs font-bold ${region.difficultyColor}`}>
                      {region.difficulty}
                    </span>
                  </div>

                  {/* Stats */}
                  <div className="flex flex-wrap gap-6 mb-8 pb-8 border-b">
                    <div>
                      <span className="text-xs text-gray-400 uppercase font-bold">Distance</span>
                      <div className="text-xl font-black">{region.distance}</div>
                    </div>
                    <div>
                      <span className="text-xs text-gray-400 uppercase font-bold">Drive Time</span>
                      <div className="text-xl font-black">{region.duration}</div>
                    </div>
                    <div>
                      <span className="text-xs text-gray-400 uppercase font-bold">Best Time</span>
                      <div className="text-xl font-black">{region.bestTime}</div>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-lg text-gray-600 mb-8">
                    {region.description}
                  </p>

                  {/* Highlights */}
                  <div>
                    <h4 className="text-xs font-black uppercase tracking-widest text-gray-400 mb-4">
                      Route Highlights
                    </h4>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {region.highlights.map((h, i) => (
                        <div key={i} className="flex items-center gap-3 bg-gray-50 rounded-xl px-4 py-3">
                          <div className="w-2 h-2 bg-[#3ab0ba] rounded-full" />
                          <span className="text-sm font-semibold">{h}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                </div>
              ))}
            </main>

          </div>
        </div>
      </div>
    </div>
  );
};

export default CarSection;