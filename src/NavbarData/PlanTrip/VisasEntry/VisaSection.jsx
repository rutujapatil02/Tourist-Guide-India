import React, { useState } from 'react';
import { visaHeroData, indiaVisaContent, relatedArticles } from '../../../Data/PlanTrip/VisasEntry/VisaData';

const VisaSection = ({ onBack }) => {
  const [openIndex, setOpenIndex] = useState(0);
  const [activeTab, setActiveTab] = useState('india-visa');

  return (
    <div className="w-full bg-white font-['Montserrat'] min-h-screen text-[#1A1A1A]">
      
      {/* BREADCRUMB - Teal Bar */}
      <div className="bg-[#0098B1] text-white py-[12px] px-6 md:px-12 relative z-30">
        <div className="max-w-[1300px] mx-auto w-full flex items-center font-medium tracking-wide text-[12px]">
          <span className="cursor-pointer hover:underline" onClick={onBack}>Home</span>
          <span className="mx-2 opacity-60 font-sans text-[10px]">{">"}</span>
          <span className="cursor-pointer hover:underline" onClick={onBack}>Plan your trip</span>
          <span className="mx-2 opacity-60 font-sans text-[10px]">{">"}</span>
          <span className="opacity-90 uppercase tracking-wider">India Visa and Entry Requirements FAQs</span>
        </div>
      </div>

      {/* SECONDARY NAV - Tab Switcher */}
      <div className="bg-[#F2F2F2] border-b border-gray-200 relative z-20">
        <div className="max-w-[2200px] mx-auto flex justify-center gap-12 py-[20px] text-[#1A1A1A] font-bold uppercase text-[13px] tracking-[0.05em]">
          <button
            onClick={() => setActiveTab('india-visa')}
            className={`pb-1 transition-all border-gray-800 ${
              activeTab === 'india-visa' ? 'border-b-[3px] opacity-100' : 'opacity-40 hover:opacity-100'
            }`}
          >
            India visa information
          </button>
          <button
            onClick={() => setActiveTab('working-holiday')}
            className={`pb-1 transition-all border-gray-800 ${
              activeTab === 'working-holiday' ? 'border-b-[3px] opacity-100' : 'opacity-40 hover:opacity-100'
            }`}
          >
            Working holiday visas
          </button>
        </div>
      </div>

      {/* HERO SECTION - True Full Width */}
      <div className="relative w-full h-[700px] z-0 overflow-hidden">
        <img 
          src={visaHeroData.backgroundImage} 
          className="w-full h-full object-cover brightness-[0.9]" 
          alt="Visa Background"
        />
      </div>

      {/* CONTENT AREA - Overlapping White Box */}
      {/* max-w-[1300px] centered here keeps text content aligned while hero is full width */}
      <div className="relative z-10 max-w-[1300px] mx-auto px-6 md:px-12 -mt-32 pb-24">
        <div className="bg-white p-8 md:p-16 shadow-2xl rounded-sm">
          
          {activeTab === 'india-visa' ? (
            <>
              <h1 className="text-[40px] md:text-[64px] font-bold text-[#1A1A1A] leading-[1.05] mb-12 tracking-tight">
                India Visa and Entry <br className="hidden md:block"/> Requirements FAQs
              </h1>
              
              <div className="flex flex-col lg:flex-row gap-16 mb-20">
                <div className="lg:w-[65%]">
                  <p className="text-[22px] font-light leading-[1.6] text-[#333333] mb-12">
                    {indiaVisaContent.description}
                  </p>
                  <p className="text-[14px] text-[#777777] italic font-light leading-relaxed border-t border-gray-100 pt-8">
                    {indiaVisaContent.legalNote}
                  </p>
                </div>

                <div className="lg:w-[35%] bg-[#F0FAFB] p-8 border-t-[5px] border-[#0098B1] h-fit">
                  <p className="text-[15px] font-bold text-[#0098B1] mb-6 leading-tight uppercase tracking-wider">
                    {indiaVisaContent.sidebar.title}
                  </p>
                  <ul className="space-y-4 text-[14px] text-[#444444] leading-relaxed font-medium">
                    {indiaVisaContent.sidebar.items.map((item, i) => (
                      <li key={i} className="flex gap-3">
                        <span className="text-[#0098B1]">•</span> {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="max-w-[1000px]">
                <h2 className="text-[32px] md:text-[42px] font-bold text-[#1A1A1A] mb-10 tracking-tight">
                  {indiaVisaContent.introTitle}
                </h2>
                <div className="border-t border-gray-200">
                  {indiaVisaContent.faqs.map((item, index) => (
                    <div key={item.id} className="border-b border-gray-200">
                      <button 
                        className="w-full flex justify-between items-center py-8 text-left group"
                        onClick={() => setOpenIndex(openIndex === index ? null : index)}
                      >
                        <span className={`text-[18px] md:text-[20px] font-bold tracking-tight transition-colors ${openIndex === index ? 'text-[#0098B1]' : 'text-[#1A1A1A]'}`}>
                          {item.q}
                        </span>
                        <span className={`text-3xl font-light ${openIndex === index ? 'text-[#0098B1]' : 'text-gray-300'}`}>
                          {openIndex === index ? '−' : '+'}
                        </span>
                      </button>
                      {openIndex === index && (
                        <div className="pb-10 text-[17px] text-[#555555] leading-[1.8] font-light pr-12">
                          {item.a}
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </>
          ) : (
            <>
              <h1 className="text-[40px] md:text-[64px] font-bold text-[#1A1A1A] leading-tight mb-12 tracking-tight">
                Working Holiday Visas
              </h1>

              <div className="max-w-[1000px]">
                <div className="border border-gray-200 rounded-sm">
                  <div className="flex justify-between items-center p-6 md:p-8 bg-white border-b border-gray-100">
                    <span className="text-[18px] md:text-[22px] font-bold text-[#1A1A1A]">
                      {indiaVisaContent.workingHolidayInfo.title}
                    </span>
                    <button className="text-2xl font-light text-gray-400">×</button>
                  </div>

                  <div className="p-6 md:p-10 bg-white">
                    <p className="text-[16px] md:text-[18px] text-[#555555] font-light leading-relaxed mb-8">
                      {indiaVisaContent.workingHolidayInfo.content}
                    </p>
                    <a 
                      href="#" 
                      className="text-[#0098B1] font-medium border-b border-[#0098B1] pb-0.5 hover:opacity-70 transition-opacity inline-block"
                    >
                      {indiaVisaContent.workingHolidayInfo.linkText}
                    </a>
                  </div>
                </div>

                <p className="mt-12 text-[14px] text-[#777777] italic font-light leading-relaxed">
                  *Indian visa regulations (including visa application charges) change from time to time. 
                  The information provided here is valid at the time of publication, but visitors 
                  should check this information is still current by visiting the{" "}
                  <span className="underline cursor-pointer">Indian Ministry of External Affairs</span>.
                </p>
              </div>
            </>
          )}
        </div>
      </div>

      {/* RELATED ARTICLES - Light Green Section */}
      <div className="bg-[#E7F3D1] py-24 px-6 md:px-12">
        <div className="max-w-[1300px] mx-auto">
          <h2 className="text-[40px] md:text-[56px] font-bold text-[#1A1A1A] mb-12 tracking-tight leading-tight">
            More articles like this
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {relatedArticles.map((article) => (
              <div 
                key={article.id} 
                className="group cursor-pointer bg-white overflow-hidden shadow-md hover:shadow-xl transition-all duration-300"
              >
                <div className="h-[240px] overflow-hidden">
                  <img 
                    src={article.image} 
                    alt={article.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-8 flex justify-between items-center">
                  <span className="text-[20px] font-bold text-[#1A1A1A]">
                    {article.name}
                  </span>
                  <div className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center group-hover:bg-[#1A1A1A] group-hover:text-white transition-colors">
                    <span className="text-xl">→</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default VisaSection;