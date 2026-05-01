import React, { useState, useRef, useEffect } from 'react';
import { FaMapMarkerAlt, FaPlay, FaTimes, FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { 
  beginnerGuideData, 
  heroData, 
  destinationData, 
  planningEssentialsData,
  bannerData,
  localExperiencesData // Add this import
} from '../../../Data/PlanTrip/PlanningTools/BeginnerGuideData';

const useScrollPosition = () => {
  const [scrollPosition, setScrollPosition] = useState(0);
  useEffect(() => {
    const updatePosition = () => setScrollPosition(window.pageYOffset);
    window.addEventListener("scroll", updatePosition);
    updatePosition();
    return () => window.removeEventListener("scroll", updatePosition);
  }, []);
  return scrollPosition;
};

const BeginnerSection = ({ onHomeClick }) => {
  const [isMarkerHovered, setIsMarkerHovered] = useState(false);
  const [activeVideo, setActiveVideo] = useState(null);
  const destScrollRef = useRef(null);
  const planningScrollRef = useRef(null);
  const scrollY = useScrollPosition();

  const closeVideo = () => setActiveVideo(null);

  const scroll = (ref, direction) => {
    if (ref.current) {
      const scrollAmount = 350; 
      ref.current.scrollBy({ left: direction === 'left' ? -scrollAmount : scrollAmount, behavior: 'smooth' });
    }
  };

  const isScrolled = scrollY > 100;
  const overlapClass = isScrolled ? '-mt-60' : '-mt-10';

  return (
    <div className="w-full bg-white animate-in fade-in duration-500 font-poppins relative">
      
      {/* 1. VIDEO MODAL */}
      {activeVideo && (
        <div className="fixed inset-0 z-[300] flex items-center justify-center bg-black/95 backdrop-blur-md p-4 md:p-10">
          <button onClick={closeVideo} className="absolute top-10 right-10 text-white text-3xl hover:rotate-90 transition-transform duration-300 z-[310]">
            <FaTimes />
          </button>
          <div className="relative w-full max-w-5xl aspect-video rounded-2xl overflow-hidden shadow-2xl border border-white/10">
            <video src={activeVideo} autoPlay controls className="w-full h-full object-cover" />
          </div>
        </div>
      )}

      {/* 2. BREADCRUMB BAR */}
      <div className="w-full bg-[#3ab3cc] py-2 px-10 flex items-center text-white text-[13px] sticky top-0 z-[110]">
        <div className="flex items-center gap-3">
          <span onClick={onHomeClick} className="cursor-pointer hover:underline font-medium">Home</span>
          <span className="text-[10px] opacity-60">&gt;</span>
          <span className="opacity-90">Plan your trip</span>
          <span className="text-[10px] opacity-60">&gt;</span>
          <span className="font-semibold">Beginner's Guide</span>
        </div>
      </div>

      {/* 3. HERO SECTION */}
      <div className="relative w-full h-[110vh] z-10"> 
        <img src={heroData.heroImg} alt="Hero" className="w-full h-full object-cover" />
        <div 
          className="absolute top-10 right-10 flex items-center gap-3 z-30"
          onMouseEnter={() => setIsMarkerHovered(true)}
          onMouseLeave={() => setIsMarkerHovered(false)}
        >
          {isMarkerHovered && (
            <div className="bg-white/90 backdrop-blur-sm px-3 py-1.5 rounded shadow-lg animate-in slide-in-from-right-2">
               <p className="text-[12px] font-bold text-gray-800">Australia</p>
            </div>
          )}
          <div className="bg-[#ffcc00] p-2.5 rounded-full shadow-md cursor-pointer hover:scale-110 transition-all duration-300">
            <FaMapMarkerAlt className="text-white text-lg" />
          </div>
        </div>
      </div>

      {/* 4. CONTENT CONTAINER */}
      <div className={`relative z-20 ${overlapClass} max-w-[1300px] mx-auto px-4 md:px-0 transition-all duration-500 ease-in-out`}> 
        <div className="bg-white px-8 md:px-20 py-24 shadow-2xl rounded-t-[40px]">
          
          <div className="text-center mb-28">
            <h1 className="text-[55px] md:text-[80px] font-serif text-[#1a1a1a] leading-[1.1] mb-10">
                {heroData.title}
            </h1>
            <p className="text-[20px] md:text-[22px] text-[#4a4a4a] leading-relaxed max-w-3xl mx-auto font-light">
                {heroData.description}
            </p>
          </div>

          {/* Section: Know Before You Go */}
          <div className="py-16">
            <h2 className="text-[40px] font-serif text-[#1a1a1a] mb-12">Know before you go</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
              {beginnerGuideData.map((item) => (
                <div key={item.id} className="group cursor-pointer">
                  <div className="aspect-[2/3] rounded-[24px] overflow-hidden mb-8 shadow-sm">
                    <img src={item.img} alt={item.title} className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105" />
                  </div>
                  <h3 className="text-[24px] font-bold text-[#1a1a1a] mb-4 group-hover:text-[#3ab3cc] transition-colors leading-tight">{item.title}</h3>
                  <p className="text-[#666] text-[17px] leading-relaxed">{item.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Section: Find Your Perfect Destination */}
          <div className="py-24 relative group/arrows border-t border-gray-100">
            <h2 className="text-[40px] font-serif text-[#1a1a1a] mb-12">Find your perfect destination</h2>
            <button onClick={() => scroll(destScrollRef, 'left')} className="absolute left-[-20px] top-[60%] z-40 bg-white w-12 h-12 rounded-full shadow-xl flex items-center justify-center text-gray-800 hover:bg-gray-50 opacity-0 group-hover/arrows:opacity-100 hidden md:flex transition-all"><FaChevronLeft /></button>
            <button onClick={() => scroll(destScrollRef, 'right')} className="absolute right-[-20px] top-[60%] z-40 bg-white w-12 h-12 rounded-full shadow-xl flex items-center justify-center text-gray-800 hover:bg-gray-50 opacity-0 group-hover/arrows:opacity-100 hidden md:flex transition-all"><FaChevronRight /></button>

            <div ref={destScrollRef} className="flex gap-6 overflow-x-auto no-scrollbar snap-x snap-mandatory scroll-smooth pb-4" style={{ scrollbarWidth: 'none' }}>
              {destinationData.map((dest) => (
                <div key={dest.id} onClick={() => dest.hasVideo && setActiveVideo(dest.videoUrl)} className="relative min-w-[300px] md:min-w-[310px] aspect-[2/3] rounded-2xl overflow-hidden group cursor-pointer shadow-md snap-start">
                  <img src={dest.img} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" alt={dest.title}/>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-80" />
                  <div className="absolute inset-0 flex flex-col justify-end p-6">
                    {dest.hasVideo && (
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="w-14 h-14 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center group-hover:bg-[#3ab3cc] group-hover:scale-110 transition-all border border-white/30"><FaPlay className="text-white text-xs ml-1" /></div>
                      </div>
                    )}
                    <h3 className="text-white text-[22px] font-serif leading-tight mb-2">{dest.title}</h3>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Section: Planning Essentials */}
          <div className="py-24 relative group/arrows2 border-t border-gray-100">
            <h2 className="text-[40px] font-serif text-[#1a1a1a] mb-12">Planning essentials</h2>
            <button onClick={() => scroll(planningScrollRef, 'left')} className="absolute left-[-20px] top-[60%] z-40 bg-white w-12 h-12 rounded-full shadow-xl flex items-center justify-center text-gray-800 opacity-0 group-hover/arrows2:opacity-100 transition-all hidden md:flex"><FaChevronLeft /></button>
            <button onClick={() => scroll(planningScrollRef, 'right')} className="absolute right-[-20px] top-[60%] z-40 bg-white w-12 h-12 rounded-full shadow-xl flex items-center justify-center text-gray-800 opacity-0 group-hover/arrows2:opacity-100 transition-all hidden md:flex"><FaChevronRight /></button>

            <div ref={planningScrollRef} className="flex gap-6 overflow-x-auto no-scrollbar snap-x snap-mandatory scroll-smooth pb-4" style={{ scrollbarWidth: 'none' }}>
              {planningEssentialsData.map((item) => (
                <div key={item.id} className="relative min-w-[280px] aspect-[2/3] rounded-2xl overflow-hidden group cursor-pointer shadow-md snap-start">
                  <img src={item.img} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" alt={item.title}/>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-90" />
                  <div className="absolute inset-0 flex flex-col justify-end p-6">
                    <h3 className="text-white text-[20px] font-serif leading-tight">{item.title}</h3>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* --- BANNER SECTION --- */}
          {bannerData && (
            <div className="mt-12 relative rounded-[20px] overflow-hidden h-[450px] group cursor-pointer shadow-xl">
              <img 
                src={bannerData.img} 
                alt={bannerData.title} 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000" 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent" />
              <div className="absolute inset-0 flex flex-col md:flex-row items-end justify-between p-8 md:p-12 gap-6">
                <div className="text-white max-w-2xl">
                  <h2 className="text-3xl md:text-[42px] font-serif mb-3 leading-tight">
                    {bannerData.title}
                  </h2>
                  <p className="text-white/90 text-[15px] md:text-[17px] font-light max-w-xl">
                    {bannerData.description}
                  </p>
                </div>
                <div className="pb-2">
                  <button className="bg-[#ffcc00] text-black text-[14px] font-bold py-3.5 px-8 rounded-full hover:bg-[#ffdb4d] transition-all transform hover:scale-105 whitespace-nowrap shadow-lg">
                    {bannerData.buttonText || "Find out more"}
                  </button>
                </div>
              </div>
            </div>
          )}

          {/* --- NEW SECTION: EXPERIENCE AUSTRALIA LIKE A LOCAL --- */}
          <div className="py-24 border-t border-gray-100 mt-12">
            <h2 className="text-[40px] font-serif text-[#1a1a1a] mb-12">Experience Australia like a local</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {localExperiencesData.map((item) => (
                <div key={item.id} className="group cursor-pointer">
                  {/* Image Container - Matches Rounded Corners in Image */}
                  <div className="aspect-[4/5] rounded-[20px] overflow-hidden mb-6 shadow-sm">
                    <img 
                      src={item.img} 
                      alt={item.title} 
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
                    />
                  </div>
                  {/* Title */}
                  <h3 className="text-[22px] font-bold text-[#1a1a1a] mb-2 leading-tight group-hover:text-[#3ab3cc] transition-colors">
                    {item.title}
                  </h3>
                  {/* Description */}
                  <p className="text-[#666] text-[15px] leading-relaxed">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default BeginnerSection;