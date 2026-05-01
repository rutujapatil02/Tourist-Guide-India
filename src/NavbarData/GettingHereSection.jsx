import React, { useState } from 'react';
import { gettingHereData } from '../Data/GettingHereData'; 
import { FaArrowRight } from "react-icons/fa";

import InternationalFlights from './PlanTrip/GettingHere/FlightsSection';
import AirporSection from './PlanTrip/GettingHere/AirporSection';
import CruisesSection from './PlanTrip/GettingHere/CruisesSection';
import BorderSection from './PlanTrip/GettingHere/BorderSection'; // ✅ Added

const GettingHereSection = ({ onViewChange }) => {
  const [activeView, setActiveView] = useState('grid');

  const navigate = (view) => {
    setActiveView(view);
    if (onViewChange) onViewChange(view !== 'grid');
  };

  const goBack = () => navigate('grid');

  if (activeView === 'flights')  return <InternationalFlights onBack={goBack} />;
  if (activeView === 'airport')  return <AirporSection onBack={goBack} />;
  if (activeView === 'cruises')  return <CruisesSection onBack={goBack} />;
  if (activeView === 'border')   return <BorderSection onBack={goBack} />; // ✅ Added

  return (
    <div className="relative bg-white min-h-screen p-10">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        
        {gettingHereData.map((item) => (
          <div 
            key={item.id} 
            className="group cursor-pointer"
            onClick={() => {
              if (item.name === "International flights") navigate('flights');
              else if (item.name === "Airport information") navigate('airport');
              else if (item.name === "Cruises and sea travel") navigate('cruises');
              else if (item.name === "Border crossings") navigate('border'); // ✅ Added
            }} 
          >
            <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl shadow-sm group-hover:shadow-md transition-all duration-500">
              <img
                src={item.image}
                alt={item.name}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
            </div>
            <div className="mt-4 text-center py-4 rounded-xl transition-colors bg-gray-50 group-hover:bg-[#f0f9fa]">
              <span className="font-bold text-gray-800 text-lg">{item.name}</span>
            </div>
          </div>
        ))}

        {/* View More Card */}
        <div className="group cursor-pointer" onClick={() => navigate('flights')}>
          <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl bg-gray-50 flex items-center justify-center border-2 border-dashed border-gray-200 group-hover:border-[#3ab0ba] transition-all">
            <div className="flex flex-col items-center gap-4">
              <div className="w-14 h-14 rounded-full bg-white flex items-center justify-center shadow-sm group-hover:bg-[#3ab0ba] group-hover:text-white transition-all">
                <FaArrowRight className="text-xl" />
              </div>
              <span className="font-bold text-gray-800">View more</span>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default GettingHereSection;