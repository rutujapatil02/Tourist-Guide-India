import React, { useState } from 'react';
import { thingsData } from '../Data/ThingsData';

const ThingsSection = () => {
  const [activeTab, setActiveTab] = useState("Culture");

  // Filter the data based on the clicked pill
  const filteredActivities = thingsData.activities.filter(
    (item) => item.category === activeTab
  );

  return (
    <div className="w-full bg-white border-t border-gray-100 shadow-2xl animate-in fade-in slide-in-from-top-2 duration-300 z-50 absolute left-0">
      <div className="max-w-7xl mx-auto py-10 px-6">
        
        {/* Category Selection Pills */}
        <div className="flex flex-wrap justify-center gap-3 mb-10">
          {thingsData.categories.map((cat) => (
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

        {/* 4-Column Activity Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredActivities.length > 0 ? (
            filteredActivities.map((item) => (
              <div key={item.id} className="group cursor-pointer">
                {/* Image Box */}
                <div className="relative aspect-[3/2] w-full overflow-hidden rounded-xl bg-gray-100">
                  <img 
                    src={item.img} 
                    alt={item.name} 
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
                {/* Text Box */}
                <div className="mt-2 text-center py-4 bg-gray-50 rounded-b-xl group-hover:bg-gray-100 transition-all border-b-2 border-transparent group-hover:border-gray-200">
                  <span className="font-bold text-gray-900">{item.name}</span>
                </div>
              </div>
            ))
          ) : (
            <div className="col-span-full py-16 text-center">
              <p className="text-gray-400 italic">No activities added for {activeTab} yet.</p>
            </div>
          )}
        </div>

        {/* View All Button */}
        <div className="mt-10 pt-6 border-t border-gray-100 text-center">
          <button className="text-sm font-bold text-gray-800 hover:text-orange-600 underline underline-offset-4 decoration-2 transition-colors">
            View more {activeTab.toLowerCase()} in India
          </button>
        </div>
      </div>
    </div>
  );
};

export default ThingsSection;