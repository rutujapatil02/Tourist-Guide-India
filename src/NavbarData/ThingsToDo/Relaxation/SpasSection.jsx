import React from 'react';
import { spasData } from '../../../Data/ThingsToDo/Relaxation/SpasData';
import { ChevronLeft } from 'lucide-react'; // Assuming you use lucide-react for icons

const SpasSection = ({ onBack }) => {
  return (
    <div className="w-full bg-white min-h-screen">
      {/* Navigation / Header */}
      <div className="flex items-center p-6 border-b border-gray-100">
        <button 
          onClick={onBack}
          className="flex items-center text-gray-600 hover:text-black transition-colors"
        >
          <ChevronLeft size={20} />
          <span className="ml-2 font-medium">Back to Relaxation</span>
        </button>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto py-12 px-6">
        <div className="mb-10 text-center">
          <h2 className="text-4xl font-serif text-gray-900 mb-4">Spas and Wellness</h2>
          <div className="h-1 w-20 bg-blue-500 mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {spasData.map((spa) => (
            <div 
              key={spa.id} 
              className="group cursor-pointer flex flex-col"
            >
              <div className="relative overflow-hidden rounded-xl h-60 mb-4 shadow-md">
                <img 
                  src={spa.image} 
                  alt={spa.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/10 group-hover:bg-black/0 transition-colors" />
              </div>
              
              <h3 className="text-xl font-bold text-gray-800 mb-2 group-hover:text-blue-600">
                {spa.title}
              </h3>
              
              <p className="text-gray-600 text-sm leading-relaxed flex-grow">
                {spa.description}
              </p>
              
              <button className="mt-4 text-xs font-bold uppercase tracking-widest text-blue-600 border-b-2 border-blue-600 w-fit pb-1">
                Explore More
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SpasSection;