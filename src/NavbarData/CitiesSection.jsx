import React from 'react';
import { citiesData } from '../Data/CitiesData';
import { FaArrowRight } from "react-icons/fa";

const CitiesSection = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
      {citiesData.map((city) => (
        <div key={city.id} className="group cursor-pointer">
          {/* Image Container - Matches States size exactly */}
          <div className="relative aspect-[3/2] w-full overflow-hidden rounded-xl bg-gray-100">
            <img
              src={city.image}
              alt={city.name}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
            />
          </div>

          {/* Label Section - Matches States label exactly */}
          <div className="mt-2 text-center py-4 bg-gray-50 rounded-b-xl group-hover:bg-gray-100 transition-all">
            <span className="font-bold text-gray-900">{city.name}</span>
          </div>
        </div>
      ))}

      {/* View More Card - Matches States size exactly */}
      <div className="group cursor-pointer">
        <div className="relative aspect-[3/2] w-full overflow-hidden rounded-xl bg-gray-100 flex items-center justify-center">
          <div className="flex flex-col items-center gap-3">
            <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center shadow-md transition-transform duration-300 group-hover:scale-110">
              <FaArrowRight className="text-black text-lg" />
            </div>
            <span className="font-bold text-gray-900">View more</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CitiesSection;