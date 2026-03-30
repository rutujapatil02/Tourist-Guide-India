import React from 'react';
import { heritageData } from '../Data/HeritageData';
import { FaArrowRight } from "react-icons/fa";

const HeritageSection = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
      {heritageData.map((site) => (
        <div key={site.id} className="group cursor-pointer">
          {/* Image Container */}
          <div className="relative aspect-[3/2] w-full overflow-hidden rounded-xl bg-gray-100">
            <img
              src={site.image}
              alt={site.name}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
            />
          </div>

          {/* Label Section */}
          <div className="mt-2 text-center py-4 bg-gray-50 rounded-b-xl group-hover:bg-gray-100 transition-all border-b-2 border-transparent group-hover:border-gray-200">
            <span className="font-bold text-gray-900">{site.name}</span>
          </div>
        </div>
      ))}

      {/* View More Card */}
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

export default HeritageSection;