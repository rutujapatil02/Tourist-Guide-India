import React, { useState } from 'react';
import { allPlaces } from '../data/statesData';
import { FaArrowRight } from "react-icons/fa";

const categories = ["States", "Cities", "Beaches", "Nature", "Heritage"];

const PlacesSection = () => {
  const [activeTab, setActiveTab] = useState("States");
  const [showAll, setShowAll] = useState(false);

  // Filter data
  const filteredPlaces = allPlaces.filter(
    (p) => p.category === activeTab
  );

  // Show only 8 (or 12) initially
  const visiblePlaces = showAll ? filteredPlaces : filteredPlaces.slice(0, 8);

  return (
    <div className="w-full bg-white border-t border-gray-100 shadow-2xl animate-in fade-in slide-in-from-top-2 duration-300 z-50 absolute left-0">
      <div className="max-w-7xl mx-auto py-10 px-6">

        {/* Category Pills */}
        <div className="flex flex-wrap justify-center gap-3 mb-10">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => {
                setActiveTab(cat);
                setShowAll(false); // reset when tab changes
              }}
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

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">

          {/* Normal Cards */}
          {visiblePlaces.map((p) => (
            <div key={p.id} className="group cursor-pointer">
              
              <div className="relative aspect-[3/2] w-full overflow-hidden rounded-xl bg-gray-100">
                <img
                  src={p.image}
                  alt={p.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>

              <div className="mt-2 text-center py-4 bg-gray-50 rounded-b-xl group-hover:bg-gray-100 transition-all border-b-2 border-transparent group-hover:border-gray-200">
                <span className="font-bold text-gray-900">
                  {p.name}
                </span>
              </div>

            </div>
          ))}

          {/* View More Card (ONLY if not showing all) */}
          {!showAll && filteredPlaces.length > 8 && (
            <div
              onClick={() => setShowAll(true)}
              className="group cursor-pointer"
            >
              <div className="relative aspect-[3/2] w-full overflow-hidden rounded-xl bg-gray-100 flex items-center justify-center">
                <div className="flex flex-col items-center gap-3">
                  <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center shadow-md transition-transform duration-300 group-hover:scale-110">
                    <FaArrowRight className="text-black text-lg" />
                  </div>
                  <span className="font-bold text-gray-900">
                    View more
                  </span>
                </div>
              </div>
            </div>
          )}

        </div>

      </div>
    </div>
  );
};

export default PlacesSection;