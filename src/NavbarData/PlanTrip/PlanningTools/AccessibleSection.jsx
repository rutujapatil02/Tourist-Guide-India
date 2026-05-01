import React, { useState } from "react";
import { FaPlus, FaMinus } from "react-icons/fa";
import { accessibleData } from "../../../Data/PlanTrip/PlanningTools/AccessibleData";

const AccessibleSection = ({ onHomeClick }) => {
  const [openInner, setOpenInner] = useState(null);

  const toggleInner = (id) => {
    setOpenInner(openInner === id ? null : id);
  };

  return (
    <div className="w-full bg-gray-50 min-h-screen font-sans pb-20">
      
      {/* 1. BREADCRUMB */}
      <div className="w-full bg-[#3ab0c9] py-3 px-8 text-white text-[12px] flex items-center gap-2 z-30 relative uppercase">
        <span className="hover:underline cursor-pointer" onClick={onHomeClick}>Home</span> 
        <span>{">"}</span>
        <span className="hover:underline cursor-pointer">Plan your trip</span>
        <span>{">"}</span>
        <span className="font-semibold">Accessible travel around India</span>
      </div>

      {/* 2. STICKY NAV */}
      <div className="sticky top-0 w-full bg-black/70 backdrop-blur-md py-5 px-6 flex justify-center gap-6 md:gap-10 text-white text-[10px] md:text-xs font-bold uppercase tracking-widest z-50">
        {accessibleData.sections.map((section) => (
          <a 
            key={section.id} 
            href={`#section-${section.id}`} 
            className="hover:text-[#3ab0c9] transition-all border-b-2 border-transparent hover:border-[#3ab0c9] pb-1"
          >
            {section.title}
          </a>
        ))}
      </div>

      {/* 3. HERO */}
      <div className="relative h-[60vh] md:h-[65vh] w-full overflow-hidden">
        <img 
          src={accessibleData.hero.img} 
          className="w-full h-full object-cover" 
          alt="Accessible Travel India" 
        />
        <div className="absolute inset-0 bg-black/20"></div>
      </div>

      {/* 4. MAIN CONTAINER */}
      <div className="relative z-20 -mt-32 max-w-6xl mx-auto bg-white shadow-2xl overflow-hidden rounded-sm mb-20">
        
        {/* Intro Text */}
        <div className="pt-20 pb-16 px-6 md:px-12 text-center">
          <h1 className="text-4xl md:text-7xl font-serif text-[#1a1a1a] mb-8 leading-[1.1]">
            Accessible travel around <br className="hidden md:block" /> India
          </h1>
          <p className="text-[#4a4a4a] text-lg md:text-2xl leading-relaxed max-w-4xl mx-auto font-light italic">
            {accessibleData.hero.subtitle}
          </p>
        </div>

        {/* 5. REPEATING SECTIONS */}
        {accessibleData.sections.map((category) => (
          <div 
            key={category.id} 
            id={`section-${category.id}`} 
            className="px-6 md:px-12 py-16 border-t border-gray-100 scroll-mt-24"
          >
            
            {/* IMAGE COLLAGE */}
            <div className="grid grid-cols-1 md:grid-cols-12 gap-5 h-auto md:h-[500px] mb-12">
              <div className="md:col-span-8 rounded-xl overflow-hidden shadow-lg group">
                <img 
                  src={category.images.feature} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" 
                  alt={category.title} 
                />
              </div>
              <div className="md:col-span-4 flex flex-col gap-5">
                <div className="h-64 md:h-1/2 rounded-xl overflow-hidden shadow-md group">
                  <img 
                    src={category.images.side1} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" 
                    alt={`${category.title} detail 1`} 
                  />
                </div>
                <div className="h-64 md:h-1/2 rounded-xl overflow-hidden shadow-md group">
                  <img 
                    src={category.images.side2} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" 
                    alt={`${category.title} detail 2`} 
                  />
                </div>
              </div>
            </div>

            {/* SECTION HEADER */}
            <h2 className="text-3xl md:text-5xl font-serif text-[#1a1a1a] mb-12 text-left">
              {category.mainTitle}
            </h2>

            {/* INNER ACCORDION LIST */}
            <div className="max-w-5xl border border-gray-200 rounded-lg overflow-hidden bg-white">
              {category.innerAccordions.map((item, idx) => {
                const uniqueId = `${category.id}-${idx}`;
                const isOpen = openInner === uniqueId;
                
                return (
                  <div key={idx} className="border-b last:border-0 border-gray-200">
                    <button 
                      onClick={() => toggleInner(uniqueId)}
                      className={`w-full py-6 px-6 md:px-10 flex justify-between items-center transition-all duration-300 ${isOpen ? 'bg-[#3ab0c9]/5' : 'bg-white hover:bg-gray-50'}`}
                    >
                      <span className={`text-lg md:text-xl font-bold transition-colors ${isOpen ? 'text-[#3ab0c9]' : 'text-[#1a1a1a]'}`}>
                        {item.label}
                      </span>
                      <div className={`${isOpen ? 'text-[#3ab0c9]' : 'text-gray-400'}`}>
                        {isOpen ? <FaMinus size={18} /> : <FaPlus size={18} />}
                      </div>
                    </button>

                    {isOpen && (
                      <div className="px-6 md:px-10 pb-10 bg-white text-gray-700 text-base md:text-lg leading-relaxed animate-in slide-in-from-top-2 duration-300">
                        <div className="pt-2 border-t border-gray-100 mt-2">
                           {/* Custom logic to ensure unique text is displayed */}
                          <p className="font-medium text-[#3ab0c9] mb-3">
                            Planning your visit:
                          </p>
                          <p>
                            {item.content}
                          </p>
                          <p className="mt-4 text-sm text-gray-500 italic">
                            India is committed to improving accessibility; we recommend confirming specific requirements with local vendors 24 hours in advance.
                          </p>
                        </div>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AccessibleSection;