import React, { useState, useEffect } from 'react';
import { insuranceHeroData, insuranceContent } from '../../../Data/PlanTrip/VisasEntry/InsuranceData';

const InsuranceSection = ({ onBack }) => {
  const [openFaq, setOpenFaq] = useState(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    }
  };

  return (
    /* Removed any potential horizontal padding from the root div to ensure true full-width */
    <div className="min-h-screen bg-gray-50 font-sans text-[#1A1A1A] w-full overflow-x-hidden">
      
      {/* 1. TOP BREADCRUMB - 100% Width */}
      <div className="bg-[#0098B1] py-3 px-6 md:px-10 text-white text-[11px] font-medium relative z-[60] w-full">
        <div className="max-w-[1200px] mx-auto flex gap-2 items-center uppercase tracking-wider">
          <a href="/" className="hover:underline cursor-pointer opacity-80">Home</a> 
          <span>&gt;</span> 
          <button onClick={onBack} className="hover:underline uppercase opacity-80">Plan your trip</button> 
          <span>&gt;</span> 
          <span>Travel Insurance</span>
        </div>
      </div>

      {/* 2. STICKY SUB-NAVBAR - 100% Width */}
      <div className="bg-black/40 backdrop-blur-md py-5 px-6 md:px-10 border-b border-white/10 sticky top-0 left-0 right-0 z-[55] w-full flex justify-center items-center">
        <div className="flex gap-6 md:gap-12 flex-wrap justify-center">
          {insuranceContent.sections.map((section) => (
            <button
              key={section.id}
              onClick={() => scrollToSection(section.id)}
              className="text-[11px] md:text-[13px] font-bold text-white uppercase tracking-[0.15em] hover:text-[#0098B1] transition-all border-b-2 border-transparent hover:border-[#0098B1] pb-1"
            >
              {section.title}
            </button>
          ))}
        </div>
      </div>

      {/* 3. HERO IMAGE - Forced Full Width */}
      <div className="relative h-[500px] md:h-[700px] w-full overflow-hidden"> 
        <img 
          src={insuranceHeroData.backgroundImage} 
          /* object-cover ensures it fills the width without losing aspect ratio */
          className="w-full h-full object-cover block" 
          alt="Travel Insurance" 
        />
        <div className="absolute inset-0 bg-black/20" />
      </div>

      {/* 4. CONTENT BOX */}
      <div className="relative z-10 -mt-32 max-w-[1100px] mx-auto bg-white shadow-2xl rounded-sm mb-20 overflow-hidden">
        <div className="p-8 md:p-20 text-center border-b border-gray-100">
          <button onClick={onBack} className="text-[#0098B1] font-bold mb-10 uppercase text-[12px] tracking-widest block mx-auto hover:underline">
            — BACK TO PLANNING TOOLS
          </button>
          <h1 className="text-4xl md:text-7xl font-serif mb-8 text-black leading-tight">
            {insuranceContent.introTitle}
          </h1>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed font-light">
            {insuranceContent.description}
          </p>
        </div>

        <div className="p-8 md:p-20 space-y-24">
          {insuranceContent.sections.map((section) => (
            <div 
              key={section.id} 
              id={section.id} 
              /* scroll-mt-32 keeps the section title from hiding under the sticky bar */
              className="scroll-mt-32 pt-4" 
            >
              <h2 className="text-3xl md:text-5xl font-serif mb-12 text-[#1A1A1A] border-b border-gray-100 pb-6 uppercase">
                {section.title}
              </h2>
              <div className="divide-y divide-gray-100">
                {section.faqs && section.faqs.map((faq) => (
                  <div key={faq.id}>
                    <button 
                      onClick={() => setOpenFaq(openFaq === faq.id ? null : faq.id)} 
                      className="w-full py-8 flex justify-between items-center text-left group"
                    >
                      <span className="text-lg md:text-2xl font-bold group-hover:text-[#0098B1] transition-colors pr-6">
                        {faq.q}
                      </span>
                      <span className="text-2xl md:text-3xl text-gray-300">
                        {openFaq === faq.id ? '−' : '+'}
                      </span>
                    </button>
                    {openFaq === faq.id && (
                      <div className="pb-8 text-base md:text-lg text-gray-600 leading-relaxed max-w-4xl">
                        {faq.a}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default InsuranceSection;