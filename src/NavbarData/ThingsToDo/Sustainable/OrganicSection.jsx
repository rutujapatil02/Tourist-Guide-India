import React, { useState } from "react";
import { FaHome, FaArrowLeft, FaChevronLeft, FaChevronRight, FaFacebook, FaWhatsapp, FaLink, FaInstagram } from "react-icons/fa";
import {
  organicHero,
  organicIntro,
  organicPrinciples,
  featuredOrganicTours,
  planYourTour,
  organicSnaps,
} from "../../../Data/ThingsToDo/Sustainable/OrganicData";

const OrganicSection = ({ 
  onBack,                    // back to Sustainable travel main grid
  onBackToThingsToDo,        // optional
  onGoHome                   // optional
}) => {
  const [activePrinciple, setActivePrinciple] = useState(0);
  const totalPrinciples = organicPrinciples.items.length;

  // Navigation handlers
  const handleHome = () => {
    if (onGoHome) onGoHome();
    else window.location.href = '/';
  };

  const handleThingsToDo = () => {
    if (onBackToThingsToDo) onBackToThingsToDo();
    else if (onBack) onBack();
    else window.history.back();
  };

  const handleSustainable = () => {
    if (onBack) onBack();
    else window.history.back();
  };

  // Breadcrumb Component
  const Breadcrumb = () => (
    <div className="w-full bg-gradient-to-r from-[#3BB0C1] to-[#48abbc] text-white py-3 px-6 md:px-10 flex items-center gap-2 text-sm font-medium shadow-md">
      <button onClick={handleHome} className="flex items-center gap-1 hover:text-gray-200 transition-colors">
        <FaHome className="w-4 h-4" />
        <span>Home</span>
      </button>
      <span className="text-white/60 text-xs">›</span>
      <button onClick={handleThingsToDo} className="hover:text-gray-200 transition-colors">
        Things to Do
      </button>
      <span className="text-white/60 text-xs">›</span>
      <button onClick={handleSustainable} className="hover:text-gray-200 transition-colors">
        Sustainable travel
      </button>
      <span className="text-white/60 text-xs">›</span>
      <span className="opacity-95 font-semibold">Organic Farm Tours</span>
    </div>
  );

  const prevPrinciple = () => setActivePrinciple((prev) => (prev - 1 + totalPrinciples) % totalPrinciples);
  const nextPrinciple = () => setActivePrinciple((prev) => (prev + 1) % totalPrinciples);

  return (
    <div className="bg-white min-h-screen">
      <Breadcrumb />

      {/* Hero Section */}
      <div className="relative h-[65vh] md:h-[75vh] w-full overflow-hidden">
        <img 
          src={organicHero.backgroundImage || "https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=1400&q=80"} 
          className="w-full h-full object-cover" 
          alt="Organic Farm Tours" 
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 p-8 md:p-12 text-white">
          <div className="max-w-7xl mx-auto">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif font-bold drop-shadow-2xl leading-tight">
              {organicHero.title}
            </h1>
            <p className="text-base md:text-lg font-light mt-4 max-w-2xl opacity-95">
              {organicHero.subtitle}
            </p>
            <div className="flex gap-3 mt-6">
              <button className="w-8 h-8 rounded-full bg-white/20 backdrop-blur flex items-center justify-center hover:bg-[#1877f2] transition-colors">
                <FaFacebook size={14} />
              </button>
              <button className="w-8 h-8 rounded-full bg-white/20 backdrop-blur flex items-center justify-center hover:bg-[#25d366] transition-colors">
                <FaWhatsapp size={14} />
              </button>
              <button className="w-8 h-8 rounded-full bg-white/20 backdrop-blur flex items-center justify-center hover:bg-gray-700 transition-colors">
                <FaLink size={14} />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Overlapping Container */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 -mt-16 md:-mt-24 pb-20">
        <div className="bg-white rounded-3xl shadow-2xl p-6 md:p-10 border-t-4 border-[#48abbc]">

          {/* Intro Block */}
          <div className="mb-16 text-center max-w-4xl mx-auto">
            <h2 className="text-2xl md:text-4xl font-serif font-bold text-gray-800 mb-5">
              {organicIntro.heading}
            </h2>
            <p className="text-gray-600 leading-relaxed text-base md:text-lg">
              {organicIntro.body}
            </p>
          </div>

          {/* Principles Carousel */}
          <section className="mb-20">
            <h2 className="text-2xl md:text-3xl font-serif font-bold text-gray-800 mb-8 border-l-8 border-[#48abbc] pl-6">
              {organicPrinciples.heading}
            </h2>
            <div className="relative">
              <div className="flex items-center gap-4">
                <button 
                  onClick={prevPrinciple}
                  className="w-10 h-10 rounded-full border border-gray-300 flex items-center justify-center hover:bg-[#48abbc] hover:text-white hover:border-[#48abbc] transition-all"
                >
                  <FaChevronLeft />
                </button>
                <div className="flex-1 overflow-hidden">
                  <div className="flex flex-col md:flex-row bg-gray-50 rounded-2xl overflow-hidden shadow-md">
                    <div className="md:w-1/2 h-64 md:h-auto overflow-hidden">
                      <img 
                        src={organicPrinciples.items[activePrinciple].image} 
                        alt={organicPrinciples.items[activePrinciple].alt}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="md:w-1/2 p-6 md:p-8 flex flex-col justify-center">
                      <h3 className="text-xl md:text-2xl font-serif font-bold text-[#48abbc] mb-3">
                        {organicPrinciples.items[activePrinciple].title}
                      </h3>
                      <p className="text-gray-600 leading-relaxed">
                        {organicPrinciples.items[activePrinciple].description}
                      </p>
                    </div>
                  </div>
                </div>
                <button 
                  onClick={nextPrinciple}
                  className="w-10 h-10 rounded-full border border-gray-300 flex items-center justify-center hover:bg-[#48abbc] hover:text-white hover:border-[#48abbc] transition-all"
                >
                  <FaChevronRight />
                </button>
              </div>
              <div className="flex justify-center gap-2 mt-5">
                {organicPrinciples.items.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setActivePrinciple(idx)}
                    className={`h-2 rounded-full transition-all ${
                      idx === activePrinciple ? 'w-6 bg-[#48abbc]' : 'w-2 bg-gray-300'
                    }`}
                  />
                ))}
              </div>
            </div>
          </section>

          {/* Featured Organic Tours */}
          <section className="mb-20">
            <h2 className="text-2xl md:text-3xl font-serif font-bold text-gray-800 mb-8 border-l-8 border-[#48abbc] pl-6">
              Featured Organic Tours
            </h2>
            <div className="space-y-12">
              {featuredOrganicTours.map((tour, idx) => (
                <div key={tour.id} className={`flex flex-col ${idx % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} gap-6 bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-100`}>
                  <div className="md:w-1/2 h-64 md:h-auto overflow-hidden">
                    <img src={tour.image} alt={tour.alt} className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
                  </div>
                  <div className="md:w-1/2 p-6 md:p-8">
                    <span className="text-4xl font-black text-[#48abbc]/20">0{tour.id}</span>
                    <h3 className="text-2xl font-serif font-bold text-gray-800 mt-2 mb-1">{tour.name}</h3>
                    <p className="text-sm font-medium text-[#48abbc] mb-3">{tour.tagline}</p>
                    <p className="text-gray-600 text-sm leading-relaxed mb-5">{tour.description}</p>
                    {tour.readMore && (
                      <div className="flex gap-3 items-start p-3 bg-gray-50 rounded-xl">
                        <img src={tour.readMore.image} alt="" className="w-16 h-16 rounded-lg object-cover" />
                        <div>
                          <h4 className="font-bold text-sm">{tour.readMore.title}</h4>
                          <p className="text-xs text-gray-500 mt-1">{tour.readMore.description}</p>
                          <span className="text-[10px] text-gray-400 mt-1 block">{tour.readMore.readTime} read</span>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Plan Your Tour */}
          <section className="mb-20">
            <h2 className="text-2xl md:text-3xl font-serif font-bold text-gray-800 mb-8 border-l-8 border-[#48abbc] pl-6">
              {planYourTour.heading}
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {planYourTour.cards.map((card, idx) => (
                <div key={idx} className="relative rounded-xl overflow-hidden shadow-md group cursor-pointer aspect-[3/4]">
                  <img src={card.image} alt={card.alt} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <span className="absolute bottom-3 left-3 text-white text-sm font-bold">{card.title}</span>
                </div>
              ))}
            </div>
          </section>

          {/* Farm Snaps */}
          <section className="mb-8">
            <h2 className="text-2xl md:text-3xl font-serif font-bold text-gray-800 mb-8 border-l-8 border-[#48abbc] pl-6">
              {organicSnaps.heading}
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-3 auto-rows-[200px] md:auto-rows-[240px]">
              {organicSnaps.images.map((img, idx) => (
                <div 
                  key={idx} 
                  className={`relative rounded-xl overflow-hidden shadow-md group cursor-pointer ${
                    idx === 0 ? 'md:row-span-2 md:col-span-1' : ''
                  }`}
                >
                  <img src={img.src} alt={img.alt} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                  <div className="absolute bottom-2 right-2 bg-black/50 rounded-full p-1.5">
                    <FaInstagram className="text-white text-xs" />
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Back Button */}
          <div className="text-center pt-8 mt-6 border-t border-gray-100">
            <button
              onClick={handleSustainable}
              className="inline-flex items-center gap-2 text-gray-500 hover:text-[#48abbc] transition-colors text-sm font-medium"
            >
              <FaArrowLeft size={12} /> Back to Sustainable travel
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrganicSection;