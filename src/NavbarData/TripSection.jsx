import React, { useState, useRef } from 'react';
import { tripPlannerData } from '../Data/TripData';

const TripSection = ({ destinationId, cityName }) => {
  const [activeTab, setActiveTab] = useState('accommodation');
  const scrollRef = useRef(null);

  const categories = [
    { id: 'accommodation', label: 'Accommodation' },
    { id: 'events', label: 'Events' },
    { id: 'experiences', label: 'Experiences' },
    { id: 'eatAndDrink', label: 'Eat and Drink' },
    { id: 'transport', label: 'Transport' },
  ];

  const cityData = tripPlannerData[destinationId] || {};
  const cards = cityData[activeTab] || [];

  // ✅ SAFE SCROLL FUNCTION
  const scroll = (direction) => {
    if (!scrollRef.current) return;

    const scrollAmount = 320;

    scrollRef.current.scrollBy({
      left: direction === 'left' ? -scrollAmount : scrollAmount,
      behavior: 'smooth',
    });
  };

  return (
    <section className="max-w-[1400px] mx-auto px-6 py-12 font-sans relative">

      {/* ✅ TITLE SAFE (avoid undefined) */}
      <h2 className="text-4xl md:text-5xl font-serif font-medium text-gray-900 mb-8 capitalize">
        {cityName ? `${cityName} trip planner` : "Trip Planner"}
      </h2>

      {/* Navigation Pills */}
      <div className="flex items-center gap-2 mb-8 overflow-x-auto no-scrollbar">
        {categories.map((cat) => (
          <button
            key={cat.id}
            onClick={() => setActiveTab(cat.id)}
            className={`px-5 py-2.5 rounded-full text-[13px] font-bold transition-all border whitespace-nowrap ${
              activeTab === cat.id
                ? 'bg-black text-white border-black'
                : 'bg-[#f0f0f0] text-gray-600 border-transparent hover:bg-gray-200'
            }`}
          >
            {cat.label}
          </button>
        ))}

        <button className="px-4 py-2 text-[13px] font-bold text-gray-500 hover:text-black flex items-center shrink-0">
          View all <span className="ml-1">→</span>
        </button>
      </div>

      {/* Main Container */}
      <div className="relative group">

        {/* Left Arrow */}
        <button 
          onClick={() => scroll('left')}
          className="hidden md:flex absolute left-[-20px] top-[35%] z-10 bg-white border border-gray-200 shadow-md w-10 h-10 rounded-full items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity"
        >
          ‹
        </button>

        {/* Cards */}
        <div 
          ref={scrollRef}
          className="flex gap-4 overflow-x-auto snap-x snap-mandatory no-scrollbar"
        >
          {cards.length > 0 ? (
            cards.map((item) => (
              <div 
                key={item.id} 
                className="min-w-[280px] md:min-w-[320px] max-w-[320px] snap-start bg-white rounded-2xl overflow-hidden border border-gray-100 shadow-sm"
              >
                {/* Image */}
                <div className="relative h-[200px] overflow-hidden">
                  <img 
                    src={item.image} 
                    alt={item.title} 
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Content */}
                <div className="p-5">
                  <h3 className="text-lg font-bold text-gray-900 mb-1 line-clamp-1">
                    {item.title}
                  </h3>

                  <p className="text-gray-500 text-[12px] font-medium mb-6 line-clamp-1">
                    {item.type} <span className="mx-1">•</span> {item.amenity}
                  </p>

                  <div className="flex items-center text-[13px] font-bold text-gray-500 hover:text-black transition-colors cursor-pointer">
                    Learn more →
                  </div>
                </div>
              </div>
            ))
          ) : (
            // ✅ EMPTY STATE
            <div className="text-gray-500 text-lg py-10">
              No data available
            </div>
          )}
        </div>

        {/* Right Arrow */}
        <button 
          onClick={() => scroll('right')}
          className="hidden md:flex absolute right-[-20px] top-[35%] z-10 bg-white border border-gray-200 shadow-md w-10 h-10 rounded-full items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity"
        >
          ›
        </button>
      </div>
    </section>
  );
};

export default TripSection;