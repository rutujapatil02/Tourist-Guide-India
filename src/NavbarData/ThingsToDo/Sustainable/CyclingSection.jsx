import React, { useState, useRef } from "react";
import { FaHome, FaArrowLeft, FaChevronLeft, FaChevronRight, FaFacebook, FaWhatsapp, FaLink, FaInstagram } from "react-icons/fa";
import Footer from "../../../components/Footer";
import {
  cyclingHeroData,
  cyclingIntroData,
  cyclingPrinciplesData,
  cyclingPlanData,
  cyclingSnapsData,
} from "../../../Data/ThingsToDo/Sustainable/CyclingData";

const CyclingSection = ({ 
  onBack,                    // back to Sustainable travel main grid
  onBackToThingsToDo,        // optional
  onGoHome                   // optional
}) => {
  const [activePrinciple, setActivePrinciple] = useState(null);
  const [detailImageIndex, setDetailImageIndex] = useState({});
  const principlesRef = useRef(null);
  const planRef = useRef(null);

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
  const Breadcrumb = ({ currentPage }) => (
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
      {currentPage ? (
        <>
          <span className="hover:text-gray-200 transition-colors">Cycling & Walking Tours</span>
          <span className="text-white/60 text-xs">›</span>
          <span className="opacity-95 font-semibold truncate">{currentPage}</span>
        </>
      ) : (
        <span className="opacity-95 font-semibold">Cycling & Walking Tours</span>
      )}
    </div>
  );

  // Scroll handlers for carousels
  const scrollCarousel = (ref, direction) => {
    if (ref.current) {
      const scrollAmount = 400;
      ref.current.scrollBy({ left: direction * scrollAmount, behavior: "smooth" });
    }
  };

  // Detail Slideshow Component
  const DetailSlideshow = ({ principle }) => {
    const currentIdx = detailImageIndex[principle.id] || 0;
    const total = principle.detailImages.length;

    const goPrev = () => {
      setDetailImageIndex(prev => ({
        ...prev,
        [principle.id]: (currentIdx - 1 + total) % total
      }));
    };
    const goNext = () => {
      setDetailImageIndex(prev => ({
        ...prev,
        [principle.id]: (currentIdx + 1) % total
      }));
    };

    return (
      <div className="relative group">
        <div className="relative rounded-2xl overflow-hidden shadow-lg bg-gray-100">
          <img 
            src={principle.detailImages[currentIdx]} 
            alt={principle.title} 
            className="w-full h-80 md:h-96 object-cover"
          />
          <button 
            onClick={goPrev}
            className="absolute left-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/80 hover:bg-white shadow-md flex items-center justify-center transition-all opacity-0 group-hover:opacity-100"
          >
            <FaChevronLeft className="text-gray-700" />
          </button>
          <button 
            onClick={goNext}
            className="absolute right-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/80 hover:bg-white shadow-md flex items-center justify-center transition-all opacity-0 group-hover:opacity-100"
          >
            <FaChevronRight className="text-gray-700" />
          </button>
          <div className="absolute bottom-0 left-0 right-0 flex gap-0">
            {principle.detailImages.map((_, i) => (
              <div 
                key={i}
                className={`h-1 flex-1 transition-all cursor-pointer ${i === currentIdx ? 'bg-[#48abbc]' : 'bg-white/40'}`}
                onClick={() => setDetailImageIndex(prev => ({ ...prev, [principle.id]: i }))}
              />
            ))}
          </div>
        </div>
        <p className="text-xs text-gray-400 italic mt-2">{principle.caption}</p>
      </div>
    );
  };

  // Detail Page (when a principle card is clicked)
  if (activePrinciple) {
    const allItems = cyclingPrinciplesData.items;
    return (
      <div className="bg-white min-h-screen">
        <Breadcrumb currentPage={activePrinciple.title} />
        <div className="max-w-7xl mx-auto px-6 py-8">
          <button 
            onClick={() => setActivePrinciple(null)} 
            className="flex items-center gap-2 text-[#48abbc] font-bold mb-6 hover:gap-3 transition-all group"
          >
            <FaArrowLeft className="group-hover:-translate-x-1 transition-transform" />
            <span className="text-sm uppercase tracking-wider">Back to Tours</span>
          </button>
          <div className="text-sm text-gray-500 mb-8">By India Tourism</div>

          {allItems.map((principle, idx) => (
            <div key={principle.id} className={`mb-20 pb-12 ${idx !== allItems.length - 1 ? 'border-b border-gray-100' : ''}`}>
              <div className={`flex flex-col ${idx % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} gap-10`}>
                <div className="md:w-1/2">
                  <DetailSlideshow principle={principle} />
                </div>
                <div className="md:w-1/2">
                  <div className="flex items-baseline gap-3 mb-4">
                    <span className="text-6xl font-black text-[#48abbc]/20">{principle.id}</span>
                    <h2 className="text-2xl md:text-3xl font-serif font-bold text-gray-800">{principle.title}</h2>
                  </div>
                  <p className="text-gray-600 leading-relaxed mb-6">{principle.description}</p>
                  {principle.learnMore && (
                    <div className="flex items-center gap-4 p-4 bg-gray-50 rounded-xl border border-gray-100">
                      <img src={principle.learnMore.thumbnail} alt="" className="w-16 h-16 rounded-lg object-cover" />
                      <div className="flex-1">
                        <h4 className="font-bold text-sm">{principle.learnMore.name}</h4>
                        <p className="text-xs text-gray-500">{principle.learnMore.tags}</p>
                      </div>
                      <a href="#" className="text-[#48abbc] font-bold text-sm whitespace-nowrap hover:underline">
                        Learn more →
                      </a>
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
        <Footer />
      </div>
    );
  }

  // Main Page
  return (
    <div className="bg-white min-h-screen">
      <Breadcrumb />

      {/* Hero Section */}
      <div className="relative h-[65vh] md:h-[75vh] w-full overflow-hidden">
        <img 
          src={cyclingHeroData.heroImage} 
          className="w-full h-full object-cover" 
          alt="Cycling and Walking Tours in India" 
          onError={(e) => { e.target.src = "https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=1400&q=80"; }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 p-8 md:p-12 text-white">
          <div className="max-w-7xl mx-auto">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif font-bold drop-shadow-2xl leading-tight">
              {cyclingHeroData.title}
            </h1>
            <p className="text-base md:text-lg font-light mt-4 max-w-2xl opacity-95">
              {cyclingHeroData.subtitle}
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

          {/* Intro Section */}
          <div className="flex flex-col md:flex-row gap-10 mb-16">
            <div className="md:w-2/3">
              <h2 className="text-2xl md:text-3xl font-serif font-bold text-gray-800 mb-4">
                {cyclingIntroData.heading}
              </h2>
              <p className="text-gray-600 leading-relaxed">{cyclingIntroData.body}</p>
            </div>
            <div className="md:w-1/3">
              <img src={cyclingIntroData.image} alt="Green is our Gold" className="rounded-2xl shadow-md w-full h-48 object-cover" />
            </div>
          </div>

          {/* Principles Carousel */}
          <section className="mb-20">
            <div className="flex flex-wrap justify-between items-end mb-8 gap-4">
              <h2 className="text-2xl md:text-3xl font-serif font-bold text-gray-800 border-l-8 border-[#48abbc] pl-6">
                {cyclingPrinciplesData.heading}
              </h2>
              <div className="flex gap-3">
                <button onClick={() => scrollCarousel(principlesRef, -1)} className="w-10 h-10 rounded-full border border-gray-300 flex items-center justify-center hover:bg-[#48abbc] hover:text-white transition-all">
                  <FaChevronLeft />
                </button>
                <button onClick={() => scrollCarousel(principlesRef, 1)} className="w-10 h-10 rounded-full border border-gray-300 flex items-center justify-center hover:bg-[#48abbc] hover:text-white transition-all">
                  <FaChevronRight />
                </button>
              </div>
            </div>
            <div ref={principlesRef} className="flex gap-6 overflow-x-auto no-scrollbar scroll-smooth snap-x pb-4">
              {cyclingPrinciplesData.items.map((item) => (
                <div 
                  key={item.id} 
                  onClick={() => setActivePrinciple(item)}
                  className="min-w-[280px] md:min-w-[360px] group cursor-pointer snap-start transition-transform hover:-translate-y-1 duration-300 bg-white rounded-xl shadow-md overflow-hidden border border-gray-100"
                >
                  <img src={item.image} alt={item.title} className="w-full h-56 object-cover group-hover:scale-105 transition-transform duration-500" />
                  <div className="p-4">
                    <h3 className="text-xl font-serif font-bold text-gray-800 group-hover:text-[#48abbc] transition-colors mb-2">{item.title}</h3>
                    <p className="text-sm text-gray-500 line-clamp-2">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Plan Your Tour */}
          <section className="mb-20">
            <div className="flex flex-wrap justify-between items-end mb-8 gap-4">
              <h2 className="text-2xl md:text-3xl font-serif font-bold text-gray-800 border-l-8 border-[#48abbc] pl-6">
                {cyclingPlanData.heading}
              </h2>
              <div className="flex gap-3">
                <button onClick={() => scrollCarousel(planRef, -1)} className="w-10 h-10 rounded-full border border-gray-300 flex items-center justify-center hover:bg-[#48abbc] hover:text-white transition-all">
                  <FaChevronLeft />
                </button>
                <button onClick={() => scrollCarousel(planRef, 1)} className="w-10 h-10 rounded-full border border-gray-300 flex items-center justify-center hover:bg-[#48abbc] hover:text-white transition-all">
                  <FaChevronRight />
                </button>
              </div>
            </div>
            <div ref={planRef} className="flex gap-6 overflow-x-auto no-scrollbar scroll-smooth snap-x pb-4">
              {cyclingPlanData.items.map((item) => (
                <div key={item.id} className="min-w-[240px] md:min-w-[260px] group cursor-pointer snap-start relative rounded-xl overflow-hidden shadow-md aspect-[3/4]">
                  <img src={item.image} alt={item.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <span className="absolute bottom-3 left-3 text-white font-bold text-sm">{item.title}</span>
                </div>
              ))}
            </div>
          </section>

          {/* Sustainable Snaps */}
          <section className="mb-8">
            <h2 className="text-2xl md:text-3xl font-serif font-bold text-gray-800 mb-8 border-l-8 border-[#48abbc] pl-6">
              {cyclingSnapsData.heading}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 auto-rows-[240px]">
              <div className="md:row-span-2 rounded-xl overflow-hidden shadow-md relative group">
                <img src={cyclingSnapsData.images[0].src} alt="snap" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                <div className="absolute bottom-2 right-2 bg-black/50 rounded-full p-1.5">
                  <FaInstagram className="text-white text-xs" />
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4 md:col-span-2">
                {cyclingSnapsData.images.slice(1).map((img) => (
                  <div key={img.id} className="rounded-xl overflow-hidden shadow-md relative group h-[240px]">
                    <img src={img.src} alt="snap" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                    <div className="absolute bottom-2 right-2 bg-black/50 rounded-full p-1.5">
                      <FaInstagram className="text-white text-xs" />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Back to Sustainable Travel Button */}
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

      <Footer />
    </div>
  );
};

export default CyclingSection;