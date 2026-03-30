import React, { useState } from 'react';
import { thingsData } from '../Data/ThingsData';
import AdventureSection from './AdvantureSection';
import ThingsNatureSection from './ThingsNatureSection';
import SustainableTravelSection from './SustainableTravelSection';
import RelaxationSection from './RelaxationSection';
import FamilySection from './FamilySection';
import BackpackingSection from './BackpackingSection'; // Final Import

const categories = ["Culture", "Adventure", "Nature", "Sustainable travel", "Relaxation", "Family", "Backpacking"];

const ThingsSection = () => {
  const [activeTab, setActiveTab] = useState("Culture");

  const filteredActivities = thingsData.activities.filter(
    (item) => item.category === activeTab
  );

  return (
    <div className="w-full bg-white border-t border-gray-100 shadow-2xl animate-in fade-in slide-in-from-top-2 duration-300 z-50 absolute left-0">
      <div className="max-w-7xl mx-auto py-10 px-6">
        
        {/* Tab Selection */}
        <div className="flex flex-wrap justify-center gap-3 mb-10">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveTab(cat)}
              className={`px-6 py-2 rounded-full text-sm font-bold transition-all border ${
                activeTab === cat 
                ? 'bg-black text-white border-black shadow-md' 
                : 'bg-gray-100 text-gray-500 border-transparent hover:bg-gray-200'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Dynamic Content Switching */}
        {activeTab === "Adventure" ? (
          <AdventureSection />
        ) : activeTab === "Nature" ? (
          <ThingsNatureSection />
        ) : activeTab === "Sustainable travel" ? (
          <SustainableTravelSection />
        ) : activeTab === "Relaxation" ? (
          <RelaxationSection />
        ) : activeTab === "Family" ? (
          <FamilySection />
        ) : activeTab === "Backpacking" ? (
          <BackpackingSection /> // Final Backpacking Case
        ) : (
          /* Default Grid for Culture and others */
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {filteredActivities.length > 0 ? (
              filteredActivities.map((item) => (
                <div key={item.id} className="group cursor-pointer">
                  <div className="relative aspect-[3/2] w-full overflow-hidden rounded-xl bg-gray-100">
                    <img src={item.img} alt={item.name} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                  </div>
                  <div className="mt-2 text-center py-4 bg-gray-50 rounded-b-xl group-hover:bg-gray-100 transition-all border-b-2 border-transparent group-hover:border-gray-200">
                    <span className="font-bold text-gray-900">{item.name}</span>
                  </div>
                </div>
              ))
            ) : (
              <div className="col-span-full py-16 text-center text-gray-400 italic">
                No activities added for {activeTab} yet.
              </div>
            )}
          </div>
        )}

        {/* Centered View More Link */}
        <div className="mt-12 text-center">
          <button className="text-sm font-bold text-gray-900 border-b-2 border-black pb-1 hover:text-gray-600 hover:border-gray-600 transition-all">
            View more {activeTab.toLowerCase()} in India
          </button>
        </div>
      </div>
    </div>
  );
};

export default ThingsSection;