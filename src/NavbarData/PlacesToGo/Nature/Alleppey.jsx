import React, { useState, useRef } from 'react';
import { FaArrowLeft, FaChevronLeft, FaChevronRight, FaFacebook, FaWhatsapp, FaLink, FaCheckCircle } from 'react-icons/fa';
import { munnarGardensData } from '../../../Data/ThingsToDo/Nature/MunnarGardensData';
import Footer from '../../../components/Footer';

const MunnarGardensSection = ({ onBack }) => {
  const [activeItem, setActiveItem] = useState(null);
  
  // Separate refs for two different scrollers
  const experienceScrollRef = useRef(null);
  const attractionScrollRef = useRef(null);

  const { 
    experiences, 
    spectacularNature, 
    naturalAttractions, 
    title, 
    description, 
    heroImage 
  } = munnarGardensData;

  // Generic scroll function to handle both sections
  const handleScroll = (ref, direction) => {
    const { current } = ref;
    const scrollAmount = 450; // Increased for smoother large-card scrolling
    if (direction === 'left') {
      current.scrollLeft -= scrollAmount;
    } else {
      current.scrollLeft += scrollAmount;
    }
  };

  // --- DETAIL PAGE VIEW ---
  if (activeItem) {
    return (
      <div className="w-full bg-white min-h-screen flex flex-col animate-in fade-in slide-in-from-bottom-4 duration-500">
        <div className="bg-[#3BB0C1] text-white py-4 px-6 flex items-center sticky top-0 z-50 shadow-md">
          <button 
            onClick={() => { setActiveItem(null); window.scrollTo(0,0); }} 
            className="flex items-center gap-2 hover:opacity-80 transition-opacity font-bold uppercase text-xs tracking-widest"
          >
            <FaArrowLeft /> Back to Exploration
          </button>
        </div>

        <div className="flex-grow max-w-6xl mx-auto py-12 px-6">
          <div className="rounded-[2.5rem] overflow-hidden h-[500px] mb-12 shadow-2xl">
            <img src={activeItem.image} alt={activeItem.title} className="w-full h-full object-cover" />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
            <div className="lg:col-span-2">
              <h1 className="text-5xl font-serif text-gray-900 mb-6 leading-tight">{activeItem.details?.title || activeItem.title}</h1>
              <p className="text-xl text-gray-600 leading-relaxed mb-10 font-light">{activeItem.details?.fullDesc || activeItem.desc}</p>
              
              {activeItem.details?.gallery && activeItem.details.gallery.length > 0 && (
                <>
                  <h3 className="text-2xl font-serif mb-6 text-gray-800">Gallery</h3>
                  <div className="grid grid-cols-2 gap-5">
                    {activeItem.details.gallery.map((img, i) => (
                      <div key={i} className="overflow-hidden rounded-2xl shadow-md">
                        <img src={img} className="h-56 w-full object-cover hover:scale-110 transition-transform duration-700" alt="gallery" />
                      </div>
                    ))}
                  </div>
                </>
              )}
            </div>

            {activeItem.details?.highlights && (
              <div className="bg-gray-50 p-10 rounded-[2rem] border border-gray-100 h-fit sticky top-24 shadow-sm">
                <h3 className="text-sm font-black mb-8 text-[#3BB0C1] uppercase tracking-[0.2em]">Highlights</h3>
                <ul className="space-y-6">
                  {activeItem.details.highlights.map((item, index) => (
                    <li key={index} className="flex items-start gap-4 text-gray-800 font-medium leading-tight">
                      <FaCheckCircle className="text-[#3BB0C1] mt-1 shrink-0 text-lg" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="w-full bg-white min-h-screen flex flex-col">
      {/* Navbar */}
      <div className="bg-[#3BB0C1] text-white py-4 px-6 flex items-center sticky top-0 z-50 shadow-sm">
        <button onClick={onBack} className="mr-4 hover:scale-110 transition-transform flex items-center gap-2 text-xs font-bold uppercase tracking-widest">
          <FaArrowLeft /> Back
        </button>
        <div className="h-4 w-[1px] bg-white/30 mr-4 hidden md:block"></div>
        <span className="text-[10px] font-bold uppercase tracking-[0.15em] invisible md:visible opacity-90">Nature / {title}</span>
      </div>

      <div className="flex-grow">
        {/* Updated Hero Section: Now 85vh for a larger, more impactful look */}
        <div className="relative h-[85vh] w-full bg-gray-200 overflow-hidden">
          <img 
            src={heroImage} 
            alt="Munnar" 
            className="w-full h-full object-cover animate-in fade-in zoom-in-105 duration-[2000ms]" 
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
          <div className="absolute bottom-16 left-12 right-12 max-w-7xl mx-auto">
             <span className="text-white/80 uppercase tracking-[0.3em] text-xs font-bold mb-4 block">Destination Guide</span>
             <h1 className="text-6xl md:text-8xl font-serif text-white mb-4 drop-shadow-xl">{title}</h1>
          </div>
        </div>

        {/* Intro */}
        <div className="max-w-5xl mx-auto text-center py-24 px-6">
          <p className="text-2xl md:text-3xl text-gray-600 leading-relaxed font-serif italic mb-10 tracking-tight">
            "{description}"
          </p>
          <div className="flex justify-center gap-6">
            <button className="w-12 h-12 rounded-full border border-gray-100 flex items-center justify-center hover:bg-[#3B5998] hover:text-white transition-all text-[#3B5998] shadow-sm"><FaFacebook size={20}/></button>
            <button className="w-12 h-12 rounded-full border border-gray-100 flex items-center justify-center hover:bg-[#25D366] hover:text-white transition-all text-[#25D366] shadow-sm"><FaWhatsapp size={20}/></button>
            <button className="w-12 h-12 rounded-full border border-gray-100 flex items-center justify-center hover:bg-gray-800 hover:text-white transition-all text-gray-700 shadow-sm"><FaLink size={18}/></button>
          </div>
        </div>

        {/* 1. HORIZONTAL SCROLLER: EXPERIENCES */}
        <div className="bg-gray-50/50 py-24 mb-16 overflow-hidden border-y border-gray-100">
          <div className="max-w-7xl mx-auto px-6 relative">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 gap-6">
              <div>
                <h2 className="text-4xl md:text-6xl font-serif text-gray-900 mb-4 tracking-tighter">Top nature experiences</h2>
                <p className="text-[#3BB0C1] uppercase tracking-[0.25em] text-xs font-black">Unforgettable Munnar Moments</p>
              </div>
              <div className="flex gap-4">
                <button onClick={() => handleScroll(experienceScrollRef, 'left')} className="p-5 bg-white rounded-full shadow-lg border border-gray-50 hover:bg-[#3BB0C1] hover:text-white transition-all active:scale-95"><FaChevronLeft size={18}/></button>
                <button onClick={() => handleScroll(experienceScrollRef, 'right')} className="p-5 bg-white rounded-full shadow-lg border border-gray-50 hover:bg-[#3BB0C1] hover:text-white transition-all active:scale-95"><FaChevronRight size={18}/></button>
              </div>
            </div>
            
            <div ref={experienceScrollRef} className="flex gap-10 overflow-x-auto scroll-smooth no-scrollbar pb-12 snap-x">
              {experiences.map((exp) => (
                <div key={exp.id} className="min-w-[340px] md:min-w-[450px] group cursor-pointer snap-start" onClick={() => { setActiveItem(exp); window.scrollTo(0, 0); }}>
                  <div className="aspect-[4/5] rounded-[3rem] overflow-hidden mb-8 shadow-2xl relative">
                    <img src={exp.image} alt={exp.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-[1500ms]" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-90" />
                    <div className="absolute bottom-10 left-10 right-10 text-white">
                       <h3 className="text-3xl md:text-4xl font-bold leading-tight drop-shadow-md">{exp.title}</h3>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* 2. HORIZONTAL SCROLLER: NATURAL ATTRACTIONS */}
        <div className="max-w-7xl mx-auto px-6 mb-36 overflow-hidden">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 gap-6">
            <div>
              <h2 className="text-4xl md:text-6xl font-serif text-gray-900 mb-4 tracking-tighter">Natural attractions</h2>
              <p className="text-[#3BB0C1] uppercase tracking-[0.25em] text-xs font-black">Explore the Peaks & Sanctuaries</p>
            </div>
            <div className="flex gap-4">
              <button onClick={() => handleScroll(attractionScrollRef, 'left')} className="p-5 bg-white rounded-full shadow-lg border border-gray-50 hover:bg-[#3BB0C1] hover:text-white transition-all active:scale-95"><FaChevronLeft size={18}/></button>
              <button onClick={() => handleScroll(attractionScrollRef, 'right')} className="p-5 bg-white rounded-full shadow-lg border border-gray-50 hover:bg-[#3BB0C1] hover:text-white transition-all active:scale-95"><FaChevronRight size={18}/></button>
            </div>
          </div>

          <div ref={attractionScrollRef} className="flex gap-8 overflow-x-auto scroll-smooth no-scrollbar pb-12 snap-x">
            {naturalAttractions.map((attraction) => (
              <div 
                key={attraction.id} 
                className="min-w-[280px] md:min-w-[340px] group cursor-pointer snap-start" 
                onClick={() => { setActiveItem(attraction); window.scrollTo(0, 0); }}
              >
                <div className="aspect-[3/4] rounded-[2.5rem] overflow-hidden mb-6 relative shadow-xl">
                  <img src={attraction.image} alt={attraction.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000" />
                  <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors duration-700" />
                  <div className="absolute bottom-8 left-8 right-8">
                    <h4 className="text-white font-bold text-2xl leading-tight drop-shadow-lg">{attraction.title}</h4>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 3. SPECTACULAR NATURE MOSAIC */}
        <div className="max-w-7xl mx-auto px-6 mb-32">
          <div className="mb-16">
            <h2 className="text-4xl md:text-6xl font-serif text-gray-900 tracking-tighter mb-4">Spectacular Vistas</h2>
            <p className="text-[#3BB0C1] uppercase tracking-[0.25em] text-xs font-black">Captured through the lens</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 h-[750px]">
            <div className="md:col-span-7 rounded-[3rem] overflow-hidden shadow-2xl relative group">
              <img src={spectacularNature[0].img} alt="Landscape" className="w-full h-full object-cover group-hover:scale-105 transition-all duration-[2000ms]" />
              <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-all duration-700"></div>
            </div>
            <div className="md:col-span-5 grid grid-cols-2 gap-6">
              {spectacularNature.slice(1, 5).map((item) => (
                <div key={item.id} className="overflow-hidden rounded-[2rem] shadow-xl group">
                  <img src={item.img} alt="Munnar nature" className="w-full h-full object-cover group-hover:scale-110 transition-all duration-1000" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default MunnarGardensSection;