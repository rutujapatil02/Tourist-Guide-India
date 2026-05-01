import React, { useState } from 'react';
import { PublicTransportData } from '../../../Data/PlanTrip/GettingAround/PublicTransportData';

const PublicTransportSection = ({ onBack }) => {
  const [activeCategory, setActiveCategory] = useState(PublicTransportData.categories[0].id);

  const selected = PublicTransportData.categories.find(c => c.id === activeCategory);

  return (
    <div className="bg-white min-h-screen">

      {/* 1. TEAL BREADCRUMB */}
      <div className="bg-[#3ab0ba] text-white py-3 px-6 md:px-10 text-sm font-medium sticky top-0 z-[60] shadow-md">
        <div className="max-w-7xl mx-auto flex items-center gap-2 flex-wrap">
          <button onClick={onBack} className="hover:underline">Plan your trip</button>
          <span>&gt;</span>
          <span>Getting around</span>
          <span>&gt;</span>
          <span className="opacity-80">Public transport</span>
        </div>
      </div>

      {/* 2. HERO */}
      <div className="relative w-full h-[400px] md:h-[520px] overflow-hidden">
        <img
          src={PublicTransportData.hero.image}
          alt="Public transport"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/55 flex flex-col items-center justify-center text-white text-center px-6">
          <h1 className="text-4xl md:text-6xl font-serif font-bold mb-5">
            {PublicTransportData.hero.title}
          </h1>
          <p className="text-base md:text-xl text-white/80 max-w-2xl">
            {PublicTransportData.hero.subtitle}
          </p>
        </div>
      </div>

      {/* 3. OVERLAPPING CONTENT */}
      <div className="relative z-10 -mt-24 max-w-7xl mx-auto px-6 pb-24">
        <div className="bg-white shadow-2xl rounded-xl pt-8 pb-16">

          {/* CATEGORY TABS */}
          <div className="w-full overflow-x-auto mb-12">
            <div className="flex gap-3 px-6 pb-2">
              {PublicTransportData.categories.map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => setActiveCategory(cat.id)}
                  className={`flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-bold whitespace-nowrap transition-all ${
                    activeCategory === cat.id
                      ? 'bg-[#3ab0ba] text-white shadow-md'
                      : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                  }`}
                >
                  <span>{cat.icon}</span>
                  <span>{cat.name}</span>
                </button>
              ))}
            </div>
          </div>

          {/* CATEGORY DETAIL */}
          {selected && (
            <div className="px-6">

              {/* Top section */}
              <div className="flex flex-col lg:flex-row gap-12 mb-16">

                <div className="w-full lg:w-1/2 overflow-hidden rounded-2xl shadow-lg">
                  <img
                    src={selected.image}
                    alt={selected.name}
                    className="w-full h-[300px] md:h-[420px] object-cover"
                  />
                </div>

                <div className="w-full lg:w-1/2 flex flex-col justify-center">
                  <div className={`inline-flex items-center gap-3 px-4 py-2 rounded-full ${selected.lightColor} w-fit mb-6`}>
                    <span className="text-2xl">{selected.icon}</span>
                    <span className={`font-black text-sm uppercase tracking-widest ${selected.textColor}`}>
                      {selected.tagline}
                    </span>
                  </div>

                  <h2 className="text-4xl md:text-5xl font-serif font-bold text-gray-900 mb-6">
                    {selected.name}
                  </h2>

                  <p className="text-lg text-gray-600 mb-8">
                    {selected.overview}
                  </p>

                  <div>
                    <h4 className="text-xs font-black uppercase tracking-widest text-gray-400 mb-4">
                      Where available
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {selected.cities.map((city, idx) => (
                        <span
                          key={idx}
                          className={`px-3 py-1.5 rounded-lg text-sm font-semibold ${selected.lightColor} ${selected.textColor}`}
                        >
                          {city}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

              </div>

              {/* Tips */}
              <div>
                <h3 className="text-xs font-black uppercase tracking-widest text-gray-400 mb-8 text-center">
                  Traveller Tips
                </h3>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                  {selected.tips.map((tip, idx) => (
                    <div
                      key={idx}
                      className={`rounded-2xl p-6 ${selected.lightColor}`}
                    >
                      <div className={`w-8 h-8 rounded-full ${selected.color} text-white flex items-center justify-center font-bold mb-3`}>
                        {idx + 1}
                      </div>
                      <p className="text-sm text-gray-700">{tip}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Bottom Nav */}
              <div className="mt-20 flex justify-between items-center border-t pt-10">
                {PublicTransportData.categories.findIndex(c => c.id === activeCategory) > 0 && (
                  <button
                    onClick={() => {
                      const idx = PublicTransportData.categories.findIndex(c => c.id === activeCategory);
                      setActiveCategory(PublicTransportData.categories[idx - 1].id);
                    }}
                    className="text-gray-500 hover:text-[#3ab0ba] font-bold"
                  >
                    ← Previous
                  </button>
                )}

                <div className="flex-1" />

                {PublicTransportData.categories.findIndex(c => c.id === activeCategory) < PublicTransportData.categories.length - 1 && (
                  <button
                    onClick={() => {
                      const idx = PublicTransportData.categories.findIndex(c => c.id === activeCategory);
                      setActiveCategory(PublicTransportData.categories[idx + 1].id);
                    }}
                    className="text-[#3ab0ba] hover:text-[#2a9aa4] font-bold"
                  >
                    Next →
                  </button>
                )}
              </div>

            </div>
          )}

        </div>
      </div>

    </div>
  );
};

export default PublicTransportSection;