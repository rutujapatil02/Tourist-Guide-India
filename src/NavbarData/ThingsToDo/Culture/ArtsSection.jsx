import React, { useState, useEffect } from 'react';
import { artsData } from '../../../Data/ThingsToDo/Culture/ArtsData';
import { FaChevronLeft, FaChevronRight, FaArrowLeft, FaHome } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

const ArtsSection = ({ onBackToCulture }) => {
  const [activeItem, setActiveItem] = useState(null);
  const [currentSlide, setCurrentSlide] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [activeItem]);

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % artsData.topExperiences.length);
  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + artsData.topExperiences.length) % artsData.topExperiences.length);

  // --- Breadcrumb Component (shared between main and detail views) ---
  const Breadcrumb = ({ currentPage }) => (
    <div className="w-full bg-gradient-to-r from-[#3BB0C1] to-[#48abbc] text-white py-3 px-6 md:px-10 flex items-center gap-2 text-sm font-medium sticky top-0 z-50 shadow-md">
      <button 
        onClick={() => navigate('/')} 
        className="flex items-center gap-1 hover:text-gray-200 transition-colors"
      >
        <FaHome className="w-4 h-4" />
        <span>Home</span>
      </button>
      <span className="text-white/60 text-xs">›</span>
      <button 
        onClick={onBackToCulture} 
        className="hover:text-gray-200 transition-colors"
      >
        Things to Do
      </button>
      <span className="text-white/60 text-xs">›</span>
      <button 
        onClick={onBackToCulture} 
        className="hover:text-gray-200 transition-colors"
      >
        Culture
      </button>
      <span className="text-white/60 text-xs">›</span>
      <span className="opacity-95 font-semibold tracking-wide">{currentPage}</span>
    </div>
  );

  // --- DETAIL VIEW ---
  if (activeItem) {
    return (
      <div className="bg-white min-h-screen pb-20 animate-in fade-in duration-500">
        <Breadcrumb currentPage={activeItem.title} />
        <div className="max-w-7xl mx-auto px-6 lg:px-12 pt-12">
          <button 
            onClick={() => setActiveItem(null)} 
            className="flex items-center gap-2 text-[#48abbc] font-bold mb-8 hover:gap-3 transition-all group"
          >
            <FaArrowLeft className="group-hover:-translate-x-1 transition-transform" /> Back to Arts & Culture
          </button>

          <div className="flex flex-col lg:flex-row gap-12 items-start">
            <div className="w-full lg:w-1/2">
              <div className="rounded-3xl overflow-hidden shadow-2xl h-[400px] md:h-[550px]">
                <img src={activeItem.img} className="w-full h-full object-cover" alt="" />
              </div>
            </div>
            <div className="w-full lg:w-1/2 pt-4">
              <div className="flex items-baseline gap-4 mb-6">
                <span className="text-[#f47b20] text-6xl md:text-8xl font-serif font-bold leading-none select-none">
                  {activeItem.id}
                </span>
                <h1 className="text-3xl md:text-5xl font-serif text-gray-900 leading-tight">
                  {activeItem.title}
                </h1>
              </div>
              <div className="mt-6 space-y-6">
                <h3 className="text-xl md:text-2xl font-bold text-gray-800 italic border-l-4 border-[#48abbc] pl-4">
                  {activeItem.tagline}
                </h3>
                <p className="text-lg md:text-xl text-gray-600 leading-relaxed font-light whitespace-pre-line">
                  {activeItem.details}
                </p>
                <div className="pt-6">
                  <div className="p-5 bg-gray-50 rounded-2xl flex items-center gap-5 border border-gray-100 max-w-sm shadow-sm">
                    <img src={activeItem.img} className="w-16 h-16 rounded-xl object-cover" alt="" />
                    <div>
                      <p className="font-bold text-gray-800">Experience {activeItem.title}</p>
                      <button className="text-[#48abbc] text-sm font-bold underline mt-1 hover:text-[#2a8d9b] transition">
                        Book Now ↗
                      </button>
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
      <Breadcrumb currentPage="Arts & Culture" />

      {/* Hero Section */}
      <div className="relative w-full h-[65vh] md:h-[75vh] overflow-hidden">
        <img 
          src={artsData.hero.bannerImg} 
          className="w-full h-full object-cover" 
          alt="Arts and Culture Hero" 
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/20 to-transparent"></div>
        <div className="absolute inset-0 flex flex-col items-center justify-center text-white z-10 text-center px-4">
          <h1 className="text-5xl md:text-8xl lg:text-9xl font-serif font-bold tracking-tight drop-shadow-2xl">
            {artsData.hero.title}
          </h1>
          <div className="w-24 h-1 bg-[#f47b20] mt-6 rounded-full"></div>
        </div>
      </div>

      {/* Intro Card */}
      <div className="relative z-10 bg-white max-w-5xl mx-auto -mt-20 p-8 md:p-12 rounded-3xl shadow-xl text-center border border-gray-100 backdrop-blur-sm">
        <h2 className="text-3xl md:text-5xl font-serif mb-5 text-gray-900">Arts and culture in India</h2>
        <p className="max-w-2xl mx-auto italic text-gray-600 text-base md:text-lg leading-relaxed">
          India's museums and galleries are time capsules that preserve the soul of one of the world's oldest civilizations.
        </p>
      </div>

      {/* Top Experiences Slider */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 mt-20">
        <h2 className="text-2xl md:text-3xl font-serif text-gray-900 mb-6 flex items-center gap-3">
          <span className="w-8 h-[2px] bg-[#48abbc]"></span>
          Top cultural experiences
        </h2>
        <div 
          className="relative group rounded-3xl overflow-hidden aspect-[16/9] md:aspect-[16/7] shadow-2xl cursor-pointer"
          onClick={() => setActiveItem(artsData.topExperiences[currentSlide])}
        >
          <img 
            src={artsData.topExperiences[currentSlide].img} 
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000" 
            alt="" 
          />
          <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent p-6 md:p-10 text-white">
            <h3 className="text-2xl md:text-4xl font-serif font-bold">{artsData.topExperiences[currentSlide].title}</h3>
            <p className="text-white/80 text-sm md:text-base mt-2">Click to discover the story</p>
          </div>
          <button 
            onClick={(e) => { e.stopPropagation(); prevSlide(); }} 
            className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/90 p-3 rounded-full text-[#48abbc] hover:bg-white shadow-lg z-20 transition-all hover:scale-110"
          >
            <FaChevronLeft size={18} />
          </button>
          <button 
            onClick={(e) => { e.stopPropagation(); nextSlide(); }} 
            className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/90 p-3 rounded-full text-[#48abbc] hover:bg-white shadow-lg z-20 transition-all hover:scale-110"
          >
            <FaChevronRight size={18} />
          </button>
        </div>
        {/* Slide indicators */}
        <div className="flex justify-center gap-2 mt-4">
          {artsData.topExperiences.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentSlide(idx)}
              className={`h-1.5 rounded-full transition-all ${
                idx === currentSlide ? 'w-8 bg-[#48abbc]' : 'w-3 bg-gray-300'
              }`}
            />
          ))}
        </div>
      </div>

      {/* Essential Arts Experiences */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 mt-24">
        <h2 className="text-2xl md:text-3xl font-serif mb-10 text-gray-900 flex items-center gap-3">
          <span className="w-8 h-[2px] bg-[#48abbc]"></span>
          Essential arts experiences
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
          {artsData.categories.map((item) => (
            <div 
              key={item.id} 
              onClick={() => setActiveItem(item)} 
              className="group cursor-pointer transition-all duration-300 hover:-translate-y-1"
            >
              <div className="rounded-2xl overflow-hidden aspect-[4/3] mb-5 shadow-md border border-gray-100">
                <img 
                  src={item.img} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" 
                  alt="" 
                />
              </div>
              <h3 className="text-xl md:text-2xl font-bold group-hover:text-[#48abbc] transition-colors mb-2">
                {item.title}
              </h3>
              <p className="text-gray-500 text-sm md:text-base leading-relaxed line-clamp-3">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Museums Grid */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 mt-24 pt-12 border-t border-gray-100">
        <h2 className="text-2xl md:text-3xl font-serif text-gray-900 mb-10 flex items-center gap-3">
          <span className="w-8 h-[2px] bg-[#48abbc]"></span>
          Check out our museums
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {artsData.museums.map((museum) => (
            <div 
              key={museum.id} 
              onClick={() => setActiveItem(museum)}
              className="relative group rounded-2xl overflow-hidden aspect-square shadow-lg cursor-pointer"
            >
              <img 
                src={museum.img} 
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" 
                alt="" 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent group-hover:from-black/50 transition-all flex items-end p-5">
                <h4 className="text-white text-lg md:text-xl font-bold leading-tight drop-shadow">
                  {museum.title}
                </h4>
              </div>
              <div className="absolute inset-0 border-2 border-transparent group-hover:border-[#48abbc] transition-all rounded-2xl pointer-events-none"></div>
            </div>
          ))}
        </div>
      </div>

      {/* Back to Culture Footer Link */}
      <div className="text-center mt-20">
        <button 
          onClick={onBackToCulture}
          className="inline-flex items-center gap-2 text-sm font-bold text-gray-700 border-b-2 border-gray-300 pb-1 hover:text-[#48abbc] hover:border-[#48abbc] transition-all"
        >
          <FaArrowLeft size={12} /> Back to Culture
        </button>
      </div>
    </div>
  );
};

export default ArtsSection;