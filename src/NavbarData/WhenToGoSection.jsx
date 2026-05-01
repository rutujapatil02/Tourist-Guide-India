import React, { useState } from 'react';
import { whenToGoData } from '../Data/WhenToGoData'; 
import { FaArrowRight } from "react-icons/fa";
import BestTimeSection from './PlanTrip/WhenToGo/BestTimeSection';
import SeasonalSection from './PlanTrip/WhenToGo/SeasonalSection';
import HolidaysSection from './PlanTrip/WhenToGo/HolidaysSection';
import FestivalsSection from './PlanTrip/WhenToGo/FestivalsSection';

const VIEW_MAP = {
  'best time': 'best-time',
  'seasonal':  'seasonal',
  'holidays':  'holidays',
  'festivals': 'festivals',
};

// ✅ Accept onViewChange from PlanSection
const WhenToGoSection = ({ onViewChange }) => {
  const [activeView, setActiveView] = useState('grid');

  const navigate = (view) => {
    setActiveView(view);
    // true = in detail view (hide tabs), false = back to grid (show tabs)
    if (onViewChange) onViewChange(view !== 'grid');
  };

  const handleNavigation = (name) => {
    if (!name) return;
    const label = name.toLowerCase().trim();
    const matched = Object.keys(VIEW_MAP).find(key => label.includes(key));
    if (matched) navigate(VIEW_MAP[matched]);
  };

  const goBack = () => navigate('grid');

  if (activeView === 'best-time') return <BestTimeSection onBack={goBack} />;
  if (activeView === 'seasonal')  return <SeasonalSection  onBack={goBack} />;
  if (activeView === 'holidays')  return <HolidaysSection  onBack={goBack} />;
  if (activeView === 'festivals') return <FestivalsSection onBack={goBack} />;

  return (
    <div className="relative bg-white min-h-screen p-10">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">

        {whenToGoData.map((item) => (
          <div
            key={item.id}
            className="group cursor-pointer"
            onClick={() => handleNavigation(item.name)}
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

        {/* View More → Festivals */}
        <div
          className="group cursor-pointer"
          onClick={() => navigate('festivals')}
        >
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

export default WhenToGoSection;