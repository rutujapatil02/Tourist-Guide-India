import React, { useState, useEffect } from 'react';
import { historyCultureData } from '../../../Data/PlanTrip/AboutIndia/HistoryCultureData';
import { FaChevronRight, FaChevronLeft } from "react-icons/fa";
import { useNavigate } from 'react-router-dom';

/* ================= IMAGE SLIDER ================= */
const SharpMediaSlider = ({ images }) => {
  const [currentImg, setCurrentImg] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImg((prev) => (prev === images.length - 1 ? 0 : prev + 1));
    }, 5000);
    return () => clearInterval(timer);
  }, [images.length]);

  const nextSlide = () =>
    setCurrentImg((prev) => (prev === images.length - 1 ? 0 : prev + 1));

  const prevSlide = () =>
    setCurrentImg((prev) => (prev === 0 ? images.length - 1 : prev - 1));

  return (
    <div className="relative aspect-video w-full overflow-hidden shadow-md group">
      <div className="w-full h-full relative">
        {images.map((img, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentImg ? "opacity-100 z-10" : "opacity-0 z-0"
            }`}
          >
            <img src={img} className="w-full h-full object-cover" alt="India" />
          </div>
        ))}
      </div>

      {/* Arrows */}
      <button 
        onClick={prevSlide} 
        className="absolute left-0 top-1/2 -translate-y-1/2 z-20 bg-black/40 text-white p-3 opacity-0 group-hover:opacity-100 transition"
      >
        <FaChevronLeft size={16} />
      </button>

      <button 
        onClick={nextSlide} 
        className="absolute right-0 top-1/2 -translate-y-1/2 z-20 bg-black/40 text-white p-3 opacity-0 group-hover:opacity-100 transition"
      >
        <FaChevronRight size={16} />
      </button>

      {/* Progress bar */}
      <div className="absolute bottom-0 left-0 w-full flex gap-[2px] z-20">
        {images.map((_, i) => (
          <div 
            key={i} 
            className="h-1 flex-1 transition-all" 
            style={{
              backgroundColor: i === currentImg ? "white" : "rgba(255,255,255,0.3)"
            }} 
          />
        ))}
      </div>
    </div>
  );
};

/* ================= MAIN COMPONENT ================= */
const HistoryCultureSection = ({ onNavigateBack }) => {
  const { hero, points } = historyCultureData;
  const navigate = useNavigate();

  return (
    <div className="fixed inset-0 z-[100] bg-gray-100 w-screen h-screen overflow-y-auto font-sans overflow-x-hidden">
      
      {/* ✅ CLEAN BREADCRUMB */}
      <div className="w-full bg-[#3BB0C1] text-white py-3 px-6 md:px-10 flex items-center gap-2 text-sm font-semibold sticky top-0 z-50">
        
        <span 
          onClick={() => navigate('/')} 
          className="cursor-pointer hover:underline"
        >
          Home
        </span>

        <span>&gt;</span>

        <span 
          onClick={onNavigateBack} 
          className="cursor-pointer hover:underline"
        >
          Plan your trip
        </span>

        <span>&gt;</span>

        <span className="opacity-90">
          {hero.title}
        </span>

      </div>

      {/* HERO */}
      <div className="relative w-full h-[80vh] overflow-hidden">
        <img 
          src={hero.backgroundImage} 
          className="w-full h-full object-cover" 
          alt="Hero" 
        />
        <div className="absolute inset-0 bg-black/20 flex flex-col justify-end p-10 md:p-24 pb-44">
          <h1 className="text-white text-5xl md:text-8xl font-serif font-bold max-w-6xl leading-tight">
            {hero.title}
          </h1>
        </div>
      </div>

      {/* CONTENT */}
      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="-mt-32 bg-white shadow-2xl p-8 md:p-16 mb-20 border-t-8 border-orange-600">
          
          {/* Subtitle */}
          <div className="mb-24 border-b border-gray-100 pb-16">
            <p className="text-3xl md:text-5xl text-gray-900 leading-tight font-serif italic max-w-4xl">
              {hero.subtitle}
            </p>
          </div>

          {/* Sections */}
          <div className="space-y-40">
            {points.map((item, index) => (
              <div 
                key={item.id} 
                className={`flex flex-col lg:flex-row items-start gap-12 ${
                  index % 2 !== 0 ? "lg:flex-row-reverse" : ""
                }`}
              >
                <div className="w-full lg:w-3/5">
                  <SharpMediaSlider images={item.images} />
                </div>

                <div className="w-full lg:w-2/5 pt-4">
                  <div className="flex items-center gap-4 mb-4">
                    <span className="text-5xl font-serif text-orange-600">
                      {item.id < 10 ? `0${item.id}` : item.id}
                    </span>
                    <div className="h-[1px] flex-grow bg-gray-200"></div>
                  </div>

                  <h3 className="text-3xl font-serif font-bold text-gray-900 mb-6">
                    {item.title}
                  </h3>

                  <p className="text-lg text-gray-600 leading-relaxed font-light">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Back Button */}
          <div className="mt-32 pt-10 border-t border-gray-100 text-center">
            <button 
              onClick={onNavigateBack}
              className="text-orange-600 font-bold uppercase tracking-widest text-sm hover:tracking-[0.2em] transition-all"
            >
              ← Back to Overview
            </button>
          </div>

        </div>
      </div>
    </div>
  );
};

export default HistoryCultureSection;