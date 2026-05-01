import React, { useState } from 'react';
import { seasonalExperiences } from '../../../Data/PlanTrip/WhenToGo/SeasonalData';
import { FaChevronRight, FaChevronLeft, FaFacebookF, FaWhatsapp, FaLink } from "react-icons/fa";

const SeasonalSection = ({ onBack }) => {
  const [selectedExperience, setSelectedExperience] = useState(null);

  // ================= DETAIL PAGE =================
  if (selectedExperience) {
    return (
      <div className="bg-white min-h-screen font-sans">
        <div className="h-[600px] w-full relative">
          <img src={selectedExperience.image} className="w-full h-full object-cover" alt="Detail" />

          <div className="absolute top-8 left-12 flex gap-3 text-white text-sm font-semibold drop-shadow-md">
            <button onClick={onBack} className="hover:underline">Home</button>
            <span>&gt;</span>
            <button onClick={() => setSelectedExperience(null)} className="hover:underline">Seasonal travel</button>
          </div>

          <h1 className="absolute bottom-32 left-12 text-7xl font-serif text-white max-w-4xl drop-shadow-lg">
            {selectedExperience.title}
          </h1>
        </div>

        <div className="relative z-10 -mt-20 max-w-[1200px] mx-auto px-6 pb-20">
          <div className="bg-white shadow-2xl p-16 rounded-sm">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
              <div className="md:col-span-2">

                <p className="text-xl text-gray-700 leading-relaxed mb-12">
                  {selectedExperience.description}
                </p>

                <div className="space-y-12">
                  {[1, 2, 3, 4, 5, 6].map((num) => (
                    <div key={num} className="flex gap-8 group">
                      <span className="text-7xl font-bold text-orange-500/20 group-hover:text-orange-500 transition-colors duration-500">
                        {num}
                      </span>
                      <div>
                        <h3 className="text-2xl font-bold text-gray-900 mb-2">Key Highlight {num}</h3>
                        <p className="text-gray-600 leading-relaxed">
                          Detailed explanation of this point regarding {selectedExperience.title}.
                        </p>
                      </div>
                    </div>
                  ))}
                </div>

              </div>
            </div>

            <button 
              onClick={() => setSelectedExperience(null)}
              className="mt-16 font-bold border-b-2 border-black pb-1 hover:text-[#3ab0ba] hover:border-[#3ab0ba]"
            >
              Back to all experiences
            </button>
          </div>
        </div>
      </div>
    );
  }

  // ================= MAIN PAGE =================
  return (
    <div className="bg-white min-h-screen font-sans">

      <style>
        {`
          @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@700&family=Inter:wght@400;600;700&display=swap');
          .font-serif { font-family: 'Playfair Display', serif; }
          .no-scrollbar::-webkit-scrollbar { display: none; }
          .no-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
        `}
      </style>

      {/* TOP NAV BAR */}
      <div className="bg-[#3ab0ba] w-full py-3 px-12 text-white text-[13px] font-bold uppercase tracking-wider flex items-center gap-2">
        <button onClick={onBack} className="hover:underline opacity-90">Home</button>
        <span>&gt;</span>
        <button className="hover:underline opacity-90">Things to do</button>
        <span>&gt;</span>
        <span>Seasonal travel</span>
      </div>

      {/* HERO */}
      <div className="h-[500px] w-full relative">
        <img 
          src={seasonalExperiences.heroImage} 
          className="w-full h-full object-cover" 
          alt="Main Hero" 
        />
      </div>

      {/* CONTENT */}
      <div className="relative z-10 -mt-24 max-w-[1400px] mx-auto px-6 lg:px-12">
        <div className="bg-white shadow-2xl pt-12 pb-32">

          {/* Intro */}
          <div className="max-w-4xl mx-auto text-center mb-24 px-6">
            <h1 className="text-6xl md:text-7xl font-serif text-gray-900 mb-8">
              Seasonal travel in Australia
            </h1>

            <p className="text-xl text-gray-500 leading-relaxed mb-10 max-w-2xl mx-auto">
              Each season in Australia offers something special. Explore coastal summer adventures or cosy winter escapes.
            </p>

            <div className="flex justify-center gap-4">
              <div className="w-10 h-10 rounded-full bg-blue-700 flex items-center justify-center text-white hover:scale-110"><FaFacebookF /></div>
              <div className="w-10 h-10 rounded-full bg-green-500 flex items-center justify-center text-white hover:scale-110"><FaWhatsapp /></div>
              <div className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center text-white hover:scale-110"><FaLink /></div>
            </div>
          </div>

          {/* CAROUSEL */}
          <div className="px-10 relative">
            <h2 className="text-4xl font-serif text-gray-900 mb-12">
              Top seasonal experiences for Indian travellers
            </h2>

            <div className="relative group">

              <button className="absolute -left-6 top-[35%] z-20 w-12 h-12 bg-white rounded-full shadow-xl flex items-center justify-center text-gray-400">
                <FaChevronLeft size={20} />
              </button>

              <div className="flex gap-8 overflow-x-auto no-scrollbar scroll-smooth">
                {seasonalExperiences.experiences.map((exp) => (
                  <div 
                    key={exp.id} 
                    className="min-w-[480px] max-w-[480px] flex-shrink-0 cursor-pointer group"
                    onClick={() => setSelectedExperience(exp)}
                  >
                    <div className="rounded-2xl overflow-hidden aspect-[16/10] mb-6 shadow-sm">
                      <img 
                        src={exp.image} 
                        alt={exp.title} 
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000" 
                      />
                    </div>

                    <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-[#3ab0ba]">
                      {exp.title}
                    </h3>

                    <p className="text-gray-600 text-lg mb-5 line-clamp-3">
                      {exp.description}
                    </p>

                    <button className="font-bold border-b-2 border-black pb-0.5 hover:text-[#3ab0ba] hover:border-[#3ab0ba]">
                      See {exp.link}
                    </button>
                  </div>
                ))}
              </div>

              <button className="absolute -right-6 top-[35%] z-20 w-12 h-12 bg-white rounded-full shadow-xl flex items-center justify-center text-gray-900">
                <FaChevronRight size={20} />
              </button>

            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default SeasonalSection;