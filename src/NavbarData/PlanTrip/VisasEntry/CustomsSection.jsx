import React, { useState, useEffect } from 'react';
import { customsHeroData, customsContent } from '../../../Data/PlanTrip/VisasEntry/CustomsData';

const CustomsSection = ({ onBack }) => {
  const [openFaq, setOpenFaq] = useState(null);

  // Auto-scroll to top when section mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      const navbarHeight = 80; 
      const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
      const offsetPosition = elementPosition - navbarHeight;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 font-sans text-[#1A1A1A]">

      {/* 🔹 1. TOP BREADCRUMB - No margin, sits flush atop hero */}
      <div className="bg-[#0098B1] py-3 px-10 text-white text-[11px] font-medium relative z-[60] w-full">
        <div className="max-w-[1200px] mx-auto flex gap-2 items-center uppercase tracking-wider">
          <a href="/" className="hover:underline cursor-pointer opacity-70">Home</a> 
          <span className="opacity-40">&gt;</span> 
          <button onClick={onBack} className="hover:underline opacity-70 uppercase">Plan your trip</button> 
          <span className="opacity-40">&gt;</span> 
          <span>India customs and biosecurity FAQs</span>
        </div>
      </div>

      {/* 🔹 2. STICKY NAVBAR */}
      <div className="bg-black/40 backdrop-blur-md py-5 px-10 border-b border-white/10 sticky top-0 z-[55] w-full flex justify-center items-center">
        <div className="flex gap-12">
          {customsContent.sections.map((section) => (
            <button
              key={section.id}
              onClick={() => scrollToSection(section.id)}
              className="text-[13px] font-bold text-white uppercase tracking-[0.15em] hover:text-[#0098B1] transition-all border-b-2 border-transparent hover:border-[#0098B1] pb-1"
            >
              {section.title}
            </button>
          ))}
        </div>
      </div>

      {/* 🔹 3. HERO IMAGE - Removed negative margins */}
      <div className="relative h-[600px] w-full overflow-hidden">
        <img 
          src={customsHeroData.backgroundImage} 
          className="w-full h-full object-cover" 
          alt="India Customs"
        />
        <div className="absolute inset-0 bg-black/20" />
      </div>

      {/* 🔹 4. MAIN OVERLAPPING CONTENT */}
      <div className="relative z-10 -mt-32 max-w-[1100px] mx-auto bg-white shadow-2xl rounded-sm mb-20 overflow-hidden">
        
        {/* INTRO SECTION */}
        <div className="p-12 md:p-20 text-center border-b border-gray-100">
          <button 
            onClick={onBack} 
            className="text-[#0098B1] font-bold mb-10 uppercase text-[12px] tracking-widest block mx-auto hover:underline"
          >
            — BACK TO PLANNING TOOLS
          </button>
          <h1 className="text-5xl md:text-7xl font-serif mb-8 text-black leading-tight">
            {customsContent.introTitle}
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed font-light">
            {customsContent.description}
          </p>
        </div>

        {/* CONTENT SECTIONS */}
        <div className="p-12 md:p-20 space-y-24">
          {customsContent.sections.map((section) => (
            <div 
              key={section.id} 
              id={section.id}
              className="scroll-mt-24"
            >
              <h2 className="text-4xl md:text-5xl font-serif mb-12 text-[#1A1A1A] border-b border-gray-100 pb-6 uppercase">
                {section.title}
              </h2>

              <div className="divide-y divide-gray-100">
                {section.faqs && section.faqs.map((faq) => (
                  <div key={faq.id}>
                    <button 
                      onClick={() => setOpenFaq(openFaq === faq.id ? null : faq.id)}
                      className="w-full py-8 flex justify-between items-center text-left group"
                    >
                      <span className="text-xl md:text-2xl font-bold group-hover:text-[#0098B1] transition-colors pr-6">
                        {faq.q}
                      </span>
                      <span className="text-3xl text-gray-300">
                        {openFaq === faq.id ? '−' : '+'}
                      </span>
                    </button>

                    {openFaq === faq.id && (
                      <div className="pb-8 text-lg text-gray-600 leading-relaxed max-w-4xl animate-in fade-in duration-300">
                        {faq.a}
                      </div>
                    )}
                  </div>
                ))}
              </div>

              {/* SPECIAL DECLARING LIST */}
              {section.id === "declaring" && section.items && (
                <div className="mt-10 bg-gray-50 p-10 border-l-[6px] border-[#0098B1]">
                  <p className="font-bold text-xl mb-6">{section.content}</p>
                  <ul className="grid grid-cols-1 md:grid-cols-2 gap-y-4 gap-x-12">
                    {section.items.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        <span className="text-[#0098B1] mt-1.5">•</span>
                        <span className="text-gray-700">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CustomsSection;