import React, { useState, useEffect } from 'react';
import { aboriginalData } from '../../../Data/ThingsToDo/Culture/AboriginalData';
import { FaFacebookF, FaWhatsapp, FaLink, FaInstagram, FaArrowLeft } from 'react-icons/fa';

const AboriginalSection = ({ onBackToCulture }) => {
  const [activeContent, setActiveContent] = useState(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [activeContent]);

  // --- VIEW 1: DETAILED PAGE (Numbered Layout) ---
  if (activeContent) {
    return (
      <div className="bg-white min-h-screen pb-20 animate-in fade-in duration-500">
        {/* Header with full path */}
        <div className="w-full bg-[#48abbc] text-white py-3 px-12 flex items-center text-[13px] gap-2 font-medium">
          <span className="cursor-pointer hover:underline" onClick={onBackToCulture}>Home</span>
          <span className="opacity-70">{'>'}</span>
          <span className="cursor-pointer hover:underline" onClick={onBackToCulture}>Things to do</span>
          <span className="opacity-70">{'>'}</span>
          <span className="cursor-pointer hover:underline" onClick={() => setActiveContent(null)}>Aboriginal India</span>
          <span className="opacity-70">{'>'}</span>
          <span className="font-bold">{activeContent.title}</span>
        </div>
        
        <div className="max-w-7xl mx-auto py-16 px-6 lg:px-12">
          <button onClick={() => setActiveContent(null)} className="flex items-center gap-2 text-[#48abbc] font-bold mb-12 hover:translate-x-[-4px] transition-transform">
            <FaArrowLeft /> Back to Aboriginal India
          </button>

          <div className="flex flex-col lg:flex-row gap-12 items-start">
            {/* Image Section */}
            <div className="w-full lg:w-1/2">
              <div className="rounded-[32px] overflow-hidden shadow-lg h-[400px] md:h-[550px]">
                <img src={activeContent.img} alt={activeContent.title} className="w-full h-full object-cover" />
              </div>
            </div>

            {/* Text Section */}
            <div className="w-full lg:w-1/2">
              <div className="flex items-baseline gap-4 mb-4">
                <span className="text-[#f47b20] text-6xl md:text-8xl font-serif font-bold">
                  {activeContent.id}
                </span>
                <h1 className="text-4xl md:text-6xl font-serif text-gray-900 leading-tight">
                  {activeContent.title}
                </h1>
              </div>

              <div className="mt-8">
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  Why you'll love it: {activeContent.tagline}
                </h3>
                <div className="text-lg md:text-xl text-gray-600 leading-relaxed space-y-6">
                  <p>{activeContent.details}</p>
                </div>

                {/* Info Card Sub-box */}
                <div className="mt-12 p-6 border border-gray-100 rounded-3xl bg-gray-50 flex items-center gap-6 shadow-sm max-w-md">
                   <img src={activeContent.img} className="w-20 h-20 rounded-xl object-cover" alt="icon" />
                   <div>
                      <p className="font-bold text-gray-900 text-lg">{activeContent.title}</p>
                      <p className="text-gray-500 text-sm italic">Culture • Heritage • Authentic</p>
                      <button className="text-[#48abbc] text-sm font-bold mt-2 underline">Learn more ↗</button>
                   </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // --- VIEW 2: MAIN PAGE ---
  return (
    <div className="bg-white min-h-screen pb-20">
      {/* Navigation Header */}
      <div className="w-full bg-[#48abbc] text-white py-3 px-12 flex items-center text-[13px] gap-2 font-medium relative z-20">
        <span className="cursor-pointer hover:underline" onClick={onBackToCulture}>Home</span>
        <span className="opacity-70">{'>'}</span>
        <span className="cursor-pointer hover:underline" onClick={onBackToCulture}>Things to do</span>
        <span className="opacity-70">{'>'}</span>
        <span className="font-bold">Aboriginal India</span>
      </div>

      {/* Hero Section */}
      <div className="w-full h-[65vh] bg-cover bg-center relative" style={{ backgroundImage: `url('${aboriginalData.hero.bannerImg}')` }}>
        <div className="absolute inset-0 bg-black/20"></div>
      </div>

      {/* Acknowledgment */}
      <div className="relative -mt-32 z-10 bg-white pt-16 px-6 max-w-5xl mx-auto rounded-t-[40px] md:rounded-t-[80px] shadow-sm">
        <div className="text-center pb-20 border-b border-gray-100">
          <h1 className="text-[45px] md:text-[80px] font-serif leading-tight mb-6 text-gray-900">Aboriginal India</h1>
          <p className="text-lg md:text-2xl text-gray-600 font-light mb-12 max-w-3xl mx-auto italic">
            "The world's oldest living cultures invite you to be inspired and leave transformed."
          </p>
          <div className="flex justify-center gap-4 mb-12">
            <button className="w-10 h-10 rounded-full bg-[#3b5998] text-white flex items-center justify-center hover:scale-110 transition-transform"><FaFacebookF size={18} /></button>
            <button className="w-10 h-10 rounded-full bg-[#25d366] text-white flex items-center justify-center hover:scale-110 transition-transform"><FaWhatsapp size={20} /></button>
            <button className="w-10 h-10 rounded-full bg-[#333] text-white flex items-center justify-center hover:scale-110 transition-transform"><FaLink size={18} /></button>
          </div>
          <div className="flex flex-col items-center">
            <h2 className="text-2xl font-serif mb-4 text-gray-800 italic">Acknowledgement of Traditional Custodians</h2>
            <p className="text-gray-500 max-w-2xl text-center leading-relaxed">
              We acknowledge the Adivasi communities — the original custodians of this land. We recognise their enduring connection to Country, their ancient wisdom, and their living cultures.
            </p>
          </div>
        </div>
      </div>

      {/* Essential Tribal Experiences */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 mt-20">
        <h2 className="text-[32px] md:text-[42px] font-serif mb-12 text-gray-900">Essential Tribal Experiences</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {aboriginalData.experiences.map((item) => (
            <div key={item.id} onClick={() => setActiveContent(item)} className="group cursor-pointer">
              <div className="rounded-[20px] overflow-hidden aspect-[4/3] mb-5 shadow-sm">
                <img src={item.img} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" alt={item.title} />
              </div>
              <h3 className="text-xl font-bold group-hover:text-[#48abbc] transition-colors">{item.title}</h3>
              <p className="text-gray-500 mt-2 text-[15px] leading-relaxed line-clamp-2">{item.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Explore Grid */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 mt-24 mb-20">
        <h2 className="text-[32px] md:text-[48px] font-serif mb-10 text-gray-900">Explore India's Indigenous culture</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {aboriginalData.exploreSections.map((section) => (
            <div key={section.id} onClick={() => setActiveContent(section)} className="relative group cursor-pointer overflow-hidden rounded-[24px] h-[550px] shadow-md">
              <img src={section.img} className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" alt="" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent"></div>
              <div className="absolute bottom-12 left-0 right-0 px-8 text-center text-white">
                <h3 className="text-[26px] md:text-[30px] font-serif leading-tight">{section.title}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Instagram Grid */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 mt-24 mb-24">
        <h2 className="text-[32px] md:text-[52px] font-serif mb-12 text-gray-900">Discover a living culture</h2>
        <div className="grid grid-cols-1 md:grid-cols-12 gap-4 h-auto md:h-[800px]">
          <div className="md:col-span-6 relative group cursor-pointer rounded-[32px] overflow-hidden">
            <img src="https://cdn.crowdriff.com/in-use/06ed5009-8587-d533-36ce-9f0d875e95d0/orig.jpg" className="w-full h-full object-cover" alt="" />
            <div className="absolute bottom-6 right-6 text-white"><FaInstagram size={30} /></div>
          </div>
          <div className="md:col-span-6 grid grid-cols-2 gap-4">
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="relative group cursor-pointer rounded-[24px] overflow-hidden h-full">
                <img src={`https://cdn.crowdriff.com/default/e2204617-26c8-b1cc-c9a3-d0bef92eeaf4/orig.jpg-${1582555172866 + i}-f73bb12a2ab3?q=80&w=600`} className="w-full h-full object-cover" alt="" />
                <div className="absolute bottom-4 right-4 text-white"><FaInstagram size={22} /></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboriginalSection;