import React from 'react';
import { adventureData } from '../Data/AdvantureData';

const AdventureSection = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
      {adventureData.map((item) => (
        <div key={item.id} className="group cursor-pointer">
          {/* Image Container */}
          <div className="relative aspect-[3/2] w-full overflow-hidden rounded-xl bg-gray-100">
            <img
              src={item.image}
              alt={item.name}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
            />
          </div>

          {/* Label Container - Matches the grey footer style in your images */}
          <div className="mt-2 text-center py-4 bg-gray-50 rounded-b-xl group-hover:bg-gray-100 transition-all border-b-2 border-transparent group-hover:border-gray-200">
            <span className="font-bold text-gray-900">{item.name}</span>
          </div>
        </div>
      ))}
    </div>
  );
};

export default AdventureSection;