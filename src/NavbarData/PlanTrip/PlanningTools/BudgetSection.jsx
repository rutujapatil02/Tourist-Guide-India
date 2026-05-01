import React, { useState, useEffect } from 'react';
import { FaChevronRight, FaArrowLeft } from "react-icons/fa";
import { budgetData } from '../../../Data/PlanTrip/PlanningTools/BudgetData';

const BudgetSection = () => {
  const [view, setView] = useState('list');

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [view]);

  if (view === 'list') {
    return (
      <div className="w-full bg-[#fcfcfc] min-h-screen font-sans">
        <nav className="bg-[#00a3ad] text-white py-3 px-6 sticky top-0 z-50">
          <div className="max-w-7xl mx-auto flex items-center gap-2 text-[11px] font-bold uppercase tracking-widest">
            <span>Home</span> <FaChevronRight className="text-[8px]" />
            <span>Plan your trip</span> <FaChevronRight className="text-[8px]" />
            <span className="opacity-70">India budget guide</span>
          </div>
        </nav>

        <div className="relative h-[120vh] w-full">
          <img src={budgetData.heroImage} alt="Hero" className="w-full h-full object-cover" />
        </div>

        <div className="relative max-w-8xl mx-auto px-4 pb-24">
          <div className="bg-white shadow-2xl -mt-32 relative z-10 p-10 md:p-20 rounded-sm">
            <div className="max-w-3xl mx-auto text-center mb-24">
              <h1 className="text-6xl md:text-7xl font-serif text-slate-900 mb-8 italic tracking-tighter">{budgetData.title}</h1>
              <p className="text-xl text-slate-800 leading-relaxed font-medium">{budgetData.subtitle}</p>
            </div>

            <div className="space-y-40">
              {budgetData.interactiveSections.map((section) => (
                <div key={section.id} className="max-w-4xl mx-auto">
                  <h2 className="text-5xl font-serif text-center mb-12 text-slate-900">{section.title}</h2>
                  <div className="rounded-2xl overflow-hidden shadow-lg mb-12">
                    <img src={section.image} alt={section.title} className="w-full h-auto" />
                  </div>
                  <div className="space-y-6 text-center max-w-3xl mx-auto mb-16 font-light">
                    {section.description.map((p, i) => (
                      <p key={i} className="text-lg text-slate-600 leading-relaxed">{p}</p>
                    ))}
                  </div>

                  <div className="bg-[#e0f7fa] rounded-xl p-8 md:p-12 border-l-8 border-[#00a3ad] mb-12">
                    <h3 className="text-[#005e7e] font-bold text-xl mb-6 uppercase tracking-wider">{section.blueBoxTitle}</h3>
                    <ul className="space-y-4">
                      {section.blueBoxTips.map((tip, i) => (
                        <li key={i} className="flex gap-3 text-slate-700 leading-relaxed italic">
                          <span className="text-[#00a3ad] font-bold">•</span> {tip}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="text-center pt-8 border-t border-slate-50">
                    <button onClick={() => setView(section.id)} className="text-xl font-bold text-slate-800 group">
                      <span className="border-b-2 border-[#00a3ad] pb-1 group-hover:text-[#00a3ad] transition-colors uppercase tracking-widest text-sm">
                        {section.toggleLabel}
                      </span>
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  }

  const activeSection = budgetData.interactiveSections.find(s => s.id === view);

  return (
    <div className="min-h-screen bg-white">
      <div className="bg-[#f8f9fa] py-4 px-6 border-b sticky top-0 z-50">
        <button onClick={() => setView('list')} className="flex items-center gap-2 text-[#00a3ad] font-bold uppercase tracking-tighter text-sm">
          <FaArrowLeft /> Back to Budget Guide
        </button>
      </div>

      <div className="max-w-4xl mx-auto p-10 md:p-24">
        <h1 className="text-6xl font-serif text-slate-900 mb-12 leading-tight italic">
          {activeSection.detailsPage.header}
        </h1>
        <div className="rounded-xl overflow-hidden mb-12 shadow-xl">
          <img src={activeSection.detailsPage.subImage} alt="Detail" className="w-full h-[400px] object-cover" />
        </div>
        <div className="space-y-8">
          <p className="text-2xl text-slate-700 leading-loose font-light italic">{activeSection.detailsPage.fullText}</p>
          <div className="h-1 w-20 bg-[#00a3ad] mt-10"></div>
          <p className="text-slate-500 text-lg">Travel smart, experience more.</p>
        </div>
      </div>
    </div>
  );
};

export default BudgetSection;