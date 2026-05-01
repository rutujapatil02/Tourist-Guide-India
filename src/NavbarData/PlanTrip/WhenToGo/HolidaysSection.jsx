import React from 'react';
import { holidaysData } from '../../../Data/PlanTrip/WhenToGo/HolidaysData';

const HolidaysSection = ({ onBack }) => {
  return (
    <div className="bg-[#f8f9fa] min-h-screen pb-20">
      
      {/* 1. Teal Breadcrumb Navbar (FUNCTIONAL) */}
      <div className="bg-[#4fb0ba] text-white py-3 px-6 md:px-12 text-sm relative z-10">
        <div className="max-w-[1400px] mx-auto flex items-center gap-2">
          
          <button onClick={onBack} className="hover:underline opacity-90">
            Home
          </button>

          <span className="opacity-60">&gt;</span>

          <button onClick={onBack} className="hover:underline opacity-90">
            Plan your trip
          </button>

          <span className="opacity-60">&gt;</span>

          <span className="font-medium">
            Indian public holidays
          </span>

        </div>
      </div>

      {/* 2. Hero Image */}
      <div className="relative w-full h-[500px] md:h-[600px] overflow-hidden">
        <img 
          src={holidaysData.heroImage} 
          alt="Indian Festivals" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/10"></div>
      </div>

      {/* 3. Overlapping Content */}
      <div className="relative z-20 -mt-40 md:-mt-56 max-w-[1400px] mx-auto px-6 lg:px-12">
        <div className="bg-white shadow-2xl p-10 md:p-16">
          
          <h1 className="text-4xl md:text-6xl font-serif text-gray-900 mb-8 leading-tight">
            Public holidays in India
          </h1>
          
          <p className="text-lg md:text-xl text-gray-600 mb-16 leading-relaxed max-w-3xl">
            India is a land of vibrant celebrations. While national holidays are observed across the country, 
            local regional festivals offer travelers an immersive look into India's diverse traditions. 
            Plan your journey around these key dates for 2026.
          </p>

          {/* National Holidays */}
          <section className="mb-20">
            <h2 className="text-3xl font-serif font-semibold text-gray-900 mb-8 border-b pb-4">
              National Public Holidays 2026
            </h2>

            <div className="divide-y divide-gray-100">
              {holidaysData.national.map((holiday, index) => (
                <div key={index} className="flex flex-col sm:flex-row sm:justify-between py-6 group">
                  <span className="text-gray-500 font-medium group-hover:text-[#4fb0ba] transition-colors">
                    {holiday.date}
                  </span>
                  <span className="text-gray-900 font-bold text-lg">
                    {holiday.name}
                  </span>
                </div>
              ))}
            </div>
          </section>

          {/* Regional Festivals */}
          <section>
            <h2 className="text-3xl font-serif font-semibold text-gray-900 mb-10">
              Regional & Zonal Festivals
            </h2>
            
            <div className="grid gap-12">
              {holidaysData.regional.map((region, idx) => (
                <div key={idx} className="border-l-4 border-[#4fb0ba] pl-6 py-2">

                  <div className="mb-6">
                    <h3 className="text-2xl font-bold text-gray-900 uppercase tracking-tight">
                      {region.zone}
                    </h3>
                    <p className="text-sm text-[#4fb0ba] font-medium mt-1">
                      {region.regions}
                    </p>
                  </div>
                  
                  <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                    {region.festivals?.map((f, i) => (
                      <div 
                        key={i} 
                        className="flex flex-col bg-gray-50 p-5 rounded-2xl hover:shadow-md transition-shadow"
                      >
                        <span className="text-gray-900 font-bold mb-1">
                          {f.name}
                        </span>
                        <span className="text-gray-500 text-sm">
                          {f.date}
                        </span>
                      </div>
                    ))}
                  </div>

                </div>
              ))}
            </div>
          </section>

        </div>
      </div>
    </div>
  );
};

export default HolidaysSection;