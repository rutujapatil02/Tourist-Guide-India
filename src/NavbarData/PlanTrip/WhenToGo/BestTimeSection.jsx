import React from 'react';
import { bestTimeContent } from '../../../Data/PlanTrip/WhenToGo/BestTimeData';

const BestTimeSection = ({ onBack }) => {
  return (
    <div className="bg-white min-h-screen">

      {/* 1. CLEAN BREADCRUMB WITH FUNCTIONALITY */}
      <div className="bg-[#4fb0ba] text-white py-3 px-6 text-sm flex items-center gap-2">
        <button onClick={onBack} className="hover:underline opacity-90">
          Home
        </button>
        <span>&gt;</span>

        <button onClick={onBack} className="hover:underline opacity-90">
          Plan your trip
        </button>
        <span>&gt;</span>

        <span className="font-semibold">
          When to go
        </span>
      </div>

      {/* 2. HERO */}
      <div className="relative h-[500px] w-full overflow-hidden">
        <img 
          src={bestTimeContent.heroImage} 
          className="w-full h-full object-cover" 
          alt="India Hero" 
        />
        <div className="absolute inset-0 bg-black/10"></div>
      </div>

      {/* 3. OVERLAPPING CONTENT */}
      <div className="relative z-10 -mt-24 max-w-8xl mx-auto px-6 pb-20">
        <div className="bg-white shadow-2xl p-10 md:p-14 rounded-sm">

          <h1 className="text-5xl font-serif text-gray-900 mb-8">
            {bestTimeContent.title}
          </h1>

          <p className="text-xl text-gray-700 leading-relaxed mb-12">
            {bestTimeContent.description}
          </p>

          {/* Seasons */}
          <div className="space-y-12">
            {bestTimeContent.seasons.map((season, index) => (
              <div key={index} className="border-t border-gray-200 pt-8">
                <h3 className="text-3xl font-bold text-[#007a83] mb-4">
                  {season.name} 
                  <span className="text-gray-400 font-light"> | </span> 
                  {season.months}
                </h3>

                <p className="font-bold text-gray-900 mb-2">
                  Average Temperature: {season.tempRange}
                </p>

                <p className="text-gray-700 text-lg leading-relaxed">
                  {season.details}
                </p>
              </div>
            ))}
          </div>

        </div>
      </div>

    </div>
  );
};

export default BestTimeSection;