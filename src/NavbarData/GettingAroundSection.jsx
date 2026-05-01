import React, { useState } from 'react';
import { gettingAroundData } from '../Data/GettingAroundData';
import { FaArrowRight } from "react-icons/fa";

import TrainSection from './PlanTrip/GettingAround/TrainSection';
import DomesticSection from './PlanTrip/GettingAround/DomesticSection';
import CarSection from './PlanTrip/GettingAround/CarSection';
import PublicTransportSection from './PlanTrip/GettingAround/PublicTransportSection'; // ✅ Added

const GettingAroundSection = ({ onViewChange }) => {
  const [activeView, setActiveView] = useState('grid');

  const navigate = (view) => {
    setActiveView(view);
    if (onViewChange) onViewChange(view !== 'grid');
  };

  const goBack = () => navigate('grid');

  if (activeView === 'train')     return <TrainSection onBack={goBack} />;
  if (activeView === 'domestic')  return <DomesticSection onBack={goBack} />;
  if (activeView === 'car')       return <CarSection onBack={goBack} />;
  if (activeView === 'transport') return <PublicTransportSection onBack={goBack} />; // ✅ Added

  return (
    <div className="relative bg-white min-h-screen p-10">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">

        {gettingAroundData.map((item) => (
          <div
            key={item.id}
            className="group cursor-pointer"
            onClick={() => {
              if (item.name === "Rail and train travel") navigate('train');
              else if (item.name === "Domestic flights") navigate('domestic');
              else if (item.name === "Car rental and driving") navigate('car');
              else if (item.name === "Public transport") navigate('transport'); // ✅ Added
            }}
          >
            <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl shadow-sm group-hover:shadow-xl transition-all">
              <img
                src={item.image}
                alt={item.name}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
            </div>
            <div className="mt-4 text-center py-4 bg-gray-50 rounded-xl group-hover:bg-[#f0f9fa] transition-colors">
              <span className="font-bold text-gray-800 text-lg">{item.name}</span>
            </div>
          </div>
        ))}

        {/* View More Card */}
        <div className="group cursor-pointer" onClick={() => navigate('train')}>
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

export default GettingAroundSection;