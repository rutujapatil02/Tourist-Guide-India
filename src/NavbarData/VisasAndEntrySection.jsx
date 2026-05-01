import React, { useState } from 'react';
import { visasAndEntryData } from '../Data/PlanTrip/VisasEntry/VisaData';
import VisaSection from './PlanTrip/VisasEntry/VisaSection';
import CustomsSection from './PlanTrip/VisasEntry/CustomsSection';
import InsuranceSection from './PlanTrip/VisasEntry/InsuranceSection';

const VisasAndEntrySection = () => {
  const [activeView, setActiveView] = useState(null);

  // Helper to wrap detail sections for full-width execution
  const renderDetailView = (Component) => (
    /* Using w-screen and negative margins ensures the component breaks 
       out of any parent 'max-w' or 'px' constraints.
    */
    <div className="relative z-[50] bg-white w-screen left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] -mt-[100px]"> 
      <Component onBack={() => setActiveView(null)} />
    </div>
  );

  if (activeView === 'visa') return renderDetailView(VisaSection);
  if (activeView === 'customs') return renderDetailView(CustomsSection);
  if (activeView === 'insurance') return renderDetailView(InsuranceSection);

  return (
    <div className="w-full bg-white">
      {/* The grid remains contained and centered */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 p-6 max-w-[1400px] mx-auto items-stretch">
        {visasAndEntryData.map((item) => (
          <div 
            key={item.id} 
            className="group cursor-pointer flex flex-col h-full"
            onClick={() => {
              if (item.name === "Visa requirements") setActiveView('visa');
              if (item.name === "Customs and border protection") setActiveView('customs');
              if (item.name === "Travel insurance") setActiveView('insurance');
            }}
          >
            <div className="relative aspect-[3/2] overflow-hidden rounded-t-xl bg-gray-100 shadow-sm">
              <img
                src={item.image}
                alt={item.name}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
            </div>
            <div className="flex-grow py-5 px-3 bg-white border-x border-b border-gray-100 rounded-b-xl shadow-sm text-center flex items-center justify-center">
              <span className="font-bold text-[#1A1A1A] text-base leading-tight">
                {item.name}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default VisasAndEntrySection;