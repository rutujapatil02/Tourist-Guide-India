import React, { useState, useEffect } from 'react';
import { artsData } from '../../../Data/ThingsToDo/Culture/ArtsData';
import { FaChevronLeft, FaChevronRight, FaArrowLeft } from 'react-icons/fa';

const ArtsSection = ({ onBackToCulture }) => {
  const [activeItem, setActiveItem] = useState(null);
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [activeItem]);

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % artsData.topExperiences.length);
  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + artsData.topExperiences.length) % artsData.topExperiences.length);

  // --- DETAIL VIEW ---
  if (activeItem) {
    return (
      <div className="bg-white min-h-screen pb-20 animate-in fade-in duration-500 pt-16">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <button 
            onClick={() => setActiveItem(null)} 
            className="flex items-center gap-2 text-[#48abbc] font-bold mb-12 hover:-translate-x-1 transition-transform group"
          >
            <FaArrowLeft className="group-hover:mr-1 transition-all" /> Back to Arts & Culture
          </button>

          <div className="flex flex-col lg:flex-row gap-12 items-start">
            <div className="w-full lg:w-1/2">
              <div className="rounded-[40px] overflow-hidden shadow-2xl h-[450px] md:h-[600px]">
                <img src={activeItem.img} className="w-full h-full object-cover" alt="" />
              </div>
            </div>

            <div className="w-full lg:w-1/2 pt-4">
              <div className="flex items-baseline gap-6 mb-6">
                <span className="text-[#f47b20] text-7xl md:text-9xl font-serif font-bold leading-none select-none">
                  {activeItem.id}
                </span>
                <h1 className="text-4xl md:text-6xl font-serif text-gray-900 leading-tight">
                  {activeItem.title}
                </h1>
              </div>
              <div className="mt-8 space-y-6">
                <h3 className="text-2xl font-bold text-gray-800 italic border-l-4 border-[#48abbc] pl-4">
                  {activeItem.tagline}
                </h3>
                {/* Fixed text formatting for long museum info */}
                <p className="text-xl text-gray-600 leading-relaxed font-light whitespace-pre-line">
                  {activeItem.details}
                </p>
                <div className="pt-8">
                   <div className="p-6 bg-gray-50 rounded-[24px] flex items-center gap-6 border border-gray-100 max-w-sm">
                      <img src={activeItem.img} className="w-20 h-20 rounded-xl object-cover" alt="" />
                      <div>
                        <p className="font-bold text-gray-900">Experience {activeItem.title}</p>
                        <button className="text-[#48abbc] text-sm font-bold underline mt-1">Book Now ↗</button>
                      </div>
                   </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // --- MAIN VIEW ---
  return (
    <div className="bg-white min-h-screen pb-20">
      <div className="w-full h-[60vh] bg-cover bg-center relative" style={{ backgroundImage: `url('${artsData.hero.bannerImg}')` }}>
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="absolute inset-0 flex items-center justify-center text-white z-10 text-center px-4">
          <h1 className="text-7xl md:text-9xl font-serif tracking-tight">{artsData.hero.title}</h1>
        </div>
      </div>

      <div className="relative z-10 bg-white max-w-5xl mx-auto -mt-20 p-12 rounded-[50px] shadow-sm text-center border border-gray-50">
         <h2 className="text-4xl md:text-5xl font-serif mb-6 text-gray-900">Arts and culture in India</h2>
         <p className="max-w-2xl mx-auto italic text-gray-500 text-lg leading-relaxed">
           India's museums and galleries are time capsules that preserve the soul of one of the world's oldest civilizations.
         </p>
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 mt-20">
        <h2 className="text-3xl md:text-4xl font-serif text-gray-900 mb-8">Top cultural experiences</h2>
        {/* Clickable Slider Image */}
        <div 
          className="relative group rounded-[40px] overflow-hidden aspect-[16/7] shadow-xl cursor-pointer"
          onClick={() => setActiveItem(artsData.topExperiences[currentSlide])}
        >
          <img src={artsData.topExperiences[currentSlide].img} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000" alt="" />
          <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 p-12 text-white">
            <h3 className="text-3xl font-serif">{artsData.topExperiences[currentSlide].title}</h3>
            <p className="text-white/70 mt-2">Click to discover the story</p>
          </div>
          <button onClick={(e) => { e.stopPropagation(); prevSlide(); }} className="absolute left-6 top-1/2 -translate-y-1/2 bg-white/90 p-4 rounded-full text-[#48abbc] hover:bg-white shadow-lg z-20">
            <FaChevronLeft size={20} />
          </button>
          <button onClick={(e) => { e.stopPropagation(); nextSlide(); }} className="absolute right-6 top-1/2 -translate-y-1/2 bg-white/90 p-4 rounded-full text-[#48abbc] hover:bg-white shadow-lg z-20">
            <FaChevronRight size={20} />
          </button>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 mt-24">
        <h2 className="text-3xl md:text-4xl font-serif mb-12 text-gray-900">Essential arts experiences</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-16">
          {artsData.categories.map((item) => (
            <div key={item.id} onClick={() => setActiveItem(item)} className="group cursor-pointer">
              <div className="rounded-[30px] overflow-hidden aspect-[4/3] mb-6 shadow-md border border-gray-100">
                <img src={item.img} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" alt="" />
              </div>
              <h3 className="text-2xl font-bold group-hover:text-[#48abbc] transition-colors mb-3">{item.title}</h3>
              <p className="text-gray-500 text-[16px] leading-relaxed line-clamp-3">{item.description}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 mt-24 pt-16 border-t border-gray-100">
        <h2 className="text-3xl md:text-4xl font-serif text-gray-900 mb-12">Check out our museums</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {artsData.museums.map((museum) => (
            <div 
              key={museum.id} 
              onClick={() => setActiveItem(museum)}
              className="relative group rounded-[32px] overflow-hidden aspect-square shadow-lg cursor-pointer"
            >
              <img src={museum.img} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" alt="" />
              <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-all flex items-end p-8">
                <h4 className="text-white text-xl font-bold leading-tight">{museum.title}</h4>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ArtsSection;