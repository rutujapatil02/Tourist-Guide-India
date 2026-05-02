import React, { useState } from 'react';
import { aboutIndiaData } from "../Data/AboutIndiaData";
import { FaArrowRight } from "react-icons/fa";
import HistoryCultureSection from "./PlanTrip/AboutIndia/HistoryCultureSection";
import GeographySection from "./PlanTrip/AboutIndia/GeographySection";
import WeatherSection from "./PlanTrip/AboutIndia/WeatherSection"; 
import PLanguageSection from "./PlanTrip/AboutIndia/PLanguageSection";

const AboutIndiaSection = () => {
  const [view, setView] = useState('grid');

  const handleBackToGrid = () => {
    setView('grid');
    window.scrollTo(0, 0);
  };

  // Detail views (each already has its own breadcrumb)
  if (view === 'history') return <HistoryCultureSection onNavigateBack={handleBackToGrid} />;
  if (view === 'geography') return <GeographySection onNavigateBack={handleBackToGrid} />;
  if (view === 'weather') return <WeatherSection onNavigateBack={handleBackToGrid} />;
  if (view === 'people') return <PLanguageSection onNavigateBack={handleBackToGrid} />;

  // Main grid – NO breadcrumb here
  return (
    <div className="w-full bg-white min-h-screen">
      <div className="max-w-7xl mx-auto p-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {aboutIndiaData.map((item) => (
            <div 
              key={item.id} 
              className="group cursor-pointer"
              onClick={() => {
                const name = item.name.trim();
                if (name === "History and Culture") setView('history');
                else if (name === "Geography and Landscapes") setView('geography');
                else if (name === "Weather and Seasons") setView('weather');
                else if (name === "People and Language") setView('people');
              }}
            >
              <div className="relative aspect-[3/2] w-full overflow-hidden rounded-2xl bg-gray-100 shadow-sm">
                <img 
                  src={item.image} 
                  alt={item.name} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
                />
              </div>
              <div className="mt-4 text-center py-5 bg-gray-50 rounded-2xl group-hover:bg-gray-100 transition-colors border-b-4 border-transparent group-hover:border-[#3BB0C1]">
                <span className="font-bold text-gray-900 text-lg">{item.name}</span>
              </div>
            </div>
          ))}
          <div className="group cursor-pointer">
            <div className="relative aspect-[3/2] w-full overflow-hidden rounded-2xl bg-gray-50 flex items-center justify-center border-2 border-dashed border-gray-200 group-hover:border-[#3BB0C1]/30 transition-all">
              <div className="flex flex-col items-center gap-4">
                <div className="w-14 h-14 rounded-full bg-white shadow-sm flex items-center justify-center group-hover:scale-110 transition-transform">
                  <FaArrowRight className="text-gray-900" />
                </div>
                <span className="font-bold text-gray-800">View more</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutIndiaSection;