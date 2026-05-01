import React from 'react';
import { tipsData } from '../../../Data/PlanTrip/PlanningTools/TipsData';

const TipsSection = ({ onHomeClick }) => {
  return (
    <div className="w-full bg-white font-sans overflow-hidden">
      {/* Breadcrumb */}
      <div className="w-full bg-[#3ab0c9] py-3 px-8 text-white text-[11px] flex items-center gap-2 uppercase font-medium z-30 relative">
        <span className="hover:underline cursor-pointer" onClick={onHomeClick}>Home</span>
        <span>{">"}</span>
        <span className="hover:underline cursor-pointer">Plan your trip</span>
        <span>{">"}</span>
        <span className="font-bold">Tips to start planning your trip to India</span>
      </div>

      {/* Hero */}
      <div className="w-full h-[120vh] relative">
        <img src={tipsData.hero.img} className="w-full h-full object-cover" alt="Hero" />
      </div>

      {/* Main Content */}
      <div className="max-w-5xl mx-auto px-6 relative z-10 bg-white -mt-24 rounded-t-[40px] pt-20 pb-20 shadow-sm">
        
        <div className="text-center mb-24">
          <h1 className="text-5xl md:text-8xl font-serif text-gray-900 mb-8 leading-[1.1]">
            {tipsData.hero.title}
          </h1>
          <p className="text-xl md:text-2xl font-medium text-gray-800 mb-6">
            {tipsData.hero.subtitle}
          </p>
          <p className="text-[#6b7280] text-lg md:text-xl max-w-3xl mx-auto leading-relaxed font-light">
            {tipsData.hero.description}
          </p>
        </div>

        {/* Steps List */}
        <div className="space-y-32">
          {tipsData.steps.map((step) => (
            <div key={step.id} className="flex flex-col items-center text-center">
              
              <h2 className="text-4xl md:text-6xl font-serif text-gray-900 mb-12">
                {step.id}. {step.title}
              </h2>
              
              {/* Instagram Style Card */}
              <div className="w-full max-w-lg bg-white shadow-2xl rounded-sm p-3 mb-12 border border-gray-100 flex flex-col">
                <div className="flex items-center gap-2 mb-3 px-2">
                  
                  {/* LEFT: Old Gradient Profile Icon */}
                  <div className="w-6 h-6 rounded-full bg-gradient-to-tr from-yellow-400 via-red-500 to-purple-600"></div>
                  
                  <span className="text-[13px] font-bold text-gray-800 tracking-tight">{step.instaTag}</span>
                  
                  {/* RIGHT: Instagram SVG Icon + Ellipsis */}
                  <div className="ml-auto flex items-center gap-3">
                    <div className="w-5 h-5 text-gray-800">
                        <svg viewBox="0 0 24 24" fill="currentColor">
                            <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                        </svg>
                    </div>
                    <div className="flex gap-[2px]">
                       <div className="w-1 h-1 rounded-full bg-gray-400"></div>
                       <div className="w-1 h-1 rounded-full bg-gray-400"></div>
                       <div className="w-1 h-1 rounded-full bg-gray-400"></div>
                    </div>
                  </div>
                </div>
                
                <div className="aspect-square w-full overflow-hidden">
                  <img src={step.img} className="w-full h-full object-cover" alt={step.title} />
                </div>

                <div className="w-full text-right pt-4 pb-1 pr-2">
                  <span className="text-[#6b7280] text-[12px] font-medium tracking-wide">{step.date}</span>
                </div>
              </div>

              <p className="text-lg md:text-xl text-[#4b5563] max-w-3xl leading-relaxed font-light">
                {step.content}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TipsSection;