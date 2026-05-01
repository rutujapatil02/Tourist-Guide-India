import React, { useEffect } from 'react';
import { pLanguageData } from '../../../Data/PlanTrip/AboutIndia/PLanguageData';
import { useNavigate } from 'react-router-dom';

const PLanguageSection = ({ onNavigateBack }) => {
  const { hero, regions } = pLanguageData;
  const navigate = useNavigate();

  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="fixed inset-0 z-[100] bg-white w-screen h-screen overflow-y-auto overflow-x-hidden">
      {/* BREADCRUMB OVERLAY - Positioned at top of Hero */}
      <div className="absolute top-0 left-0 w-full z-50 bg-gradient-to-b from-black/70 to-transparent">
        <div className="max-w-7xl mx-auto py-5 px-10 flex items-center gap-2 text-[14px] text-white font-medium">
          <button onClick={() => navigate('/')} className="hover:underline opacity-80">Home</button>
          <span className="opacity-40">{">"}</span>
          <button onClick={onNavigateBack} className="hover:underline opacity-80">Plan your trip</button>
          <span className="opacity-40">{">"}</span>
          <span className="font-bold tracking-wide">People & Language</span>
        </div>
      </div>

      {/* HERO SECTION */}
      <div className="relative h-[100vh] w-full">
        <img 
          src={hero.backgroundImage} 
          className="w-full h-full object-cover" 
          alt="Indian Heritage" 
        />
        <div className="absolute inset-0 bg-black/30 flex flex-col justify-center items-center text-center px-6">
          <h1 className="text-white text-5xl md:text-8xl font-serif font-bold uppercase tracking-tight animate-fade-in-up">
            {hero.title}
          </h1>
          <p className="text-white/90 max-w-2xl mt-6 text-lg md:text-xl font-light italic">
            {hero.description}
          </p>
        </div>
      </div>

      {/* REGIONAL LISTING */}
      <div className="max-w-7xl mx-auto px-6 -mt-20 relative z-10 pb-32">
        <div className="bg-white shadow-2xl p-10 md:p-20 rounded-sm border-t-8 border-[#3BB0C1]">
          <div className="space-y-48">
            {regions.map((region, idx) => (
              <div 
                key={region.id} 
                className={`flex flex-col lg:flex-row gap-20 items-start ${idx % 2 !== 0 ? 'lg:flex-row-reverse' : ''}`}
              >
                {/* Visual Side */}
                <div className="lg:w-1/2 w-full group relative">
                  <div className="overflow-hidden shadow-2xl rounded-sm">
                    <img 
                      src={region.image} 
                      className="w-full aspect-[4/3] object-cover transition-transform duration-1000 group-hover:scale-110" 
                      alt={region.title} 
                    />
                  </div>
                  {/* Floating Number Decor */}
                  <div className="absolute -top-6 -right-6 text-[100px] font-serif font-bold text-gray-100 -z-10 select-none">
                    0{idx + 1}
                  </div>
                </div>

                {/* Content Side */}
                <div className="lg:w-1/2 space-y-8">
                  <h3 className="text-5xl font-serif font-bold text-gray-900 border-b-4 border-[#3BB0C1] inline-block pb-2">
                    {region.title}
                  </h3>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                    <div>
                      <h4 className="text-[#3BB0C1] font-black text-[11px] tracking-[0.25em] uppercase mb-3">Demographics</h4>
                      <p className="text-gray-800 font-semibold leading-relaxed">{region.people}</p>
                    </div>
                    <div>
                      <h4 className="text-[#3BB0C1] font-black text-[11px] tracking-[0.25em] uppercase mb-3">Linguistic Map</h4>
                      <p className="text-gray-800 font-semibold leading-relaxed">{region.languages}</p>
                    </div>
                  </div>

                  <div className="pt-4">
                    <h4 className="text-gray-400 font-black text-[11px] tracking-[0.25em] uppercase mb-3">Culture & Heritage</h4>
                    <p className="text-gray-600 leading-relaxed text-lg">
                      {region.culture}
                    </p>
                  </div>

                  <div className="bg-gray-50 p-8 border-l-4 border-[#3BB0C1] italic text-gray-500">
                    "{region.content}"
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* FINAL BACK ACTION */}
          <div className="mt-40 text-center">
            <button 
              onClick={onNavigateBack}
              className="group border-2 border-gray-900 px-14 py-4 rounded-full font-bold text-xs tracking-[0.3em] uppercase hover:bg-gray-900 hover:text-white transition-all duration-300"
            >
              Back to Overview
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PLanguageSection;