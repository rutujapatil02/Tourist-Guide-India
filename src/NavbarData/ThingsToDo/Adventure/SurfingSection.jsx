import React, { useState, useRef } from 'react';
import { SurfingData } from '../../../Data/ThingsToDo/Adventure/SurfingData'; 
import { FaChevronLeft, FaChevronRight, FaInstagram, FaHome } from "react-icons/fa";

const SurfingSection = ({ 
  onBack,                    // required: back to Adventure main grid
  onBackToThingsToDo,        // optional: back to Things to Do main
  onGoHome                   // optional: go to homepage
}) => {
  const [selectedItem, setSelectedItem] = useState(null);
  const scrollRef = useRef(null);

  const scroll = (direction) => {
    if (scrollRef.current) {
      const scrollAmount = 600; 
      scrollRef.current.scrollBy({ 
        left: direction === 'left' ? -scrollAmount : scrollAmount, 
        behavior: 'smooth' 
      });
    }
  };

  // Navigation handlers for breadcrumb
  const handleHome = () => {
    if (onGoHome) onGoHome();
    else window.location.href = '/';
  };

  const handleThingsToDo = () => {
    if (onBackToThingsToDo) onBackToThingsToDo();
    else if (onBack) onBack();
    else window.history.back();
  };

  const handleAdventure = () => {
    if (onBack) onBack();
    else window.history.back();
  };

  // --- Breadcrumb Component (shared) ---
  const Breadcrumb = ({ currentPage }) => (
    <div className="w-full bg-gradient-to-r from-[#3BB0C1] to-[#48abbc] text-white py-3 px-6 md:px-10 flex items-center gap-2 text-sm font-medium sticky top-0 z-50 shadow-lg">
      <button onClick={handleHome} className="flex items-center gap-1 hover:text-gray-200 transition-colors">
        <FaHome className="w-4 h-4" />
        <span>Home</span>
      </button>
      <span className="text-white/60 text-xs">›</span>
      <button onClick={handleThingsToDo} className="hover:text-gray-200 transition-colors">
        Things to Do
      </button>
      <span className="text-white/60 text-xs">›</span>
      <button onClick={handleAdventure} className="hover:text-gray-200 transition-colors">
        Adventure
      </button>
      <span className="text-white/60 text-xs">›</span>
      {currentPage ? (
        <>
          <span className="hover:text-gray-200 transition-colors">Surfing</span>
          <span className="text-white/60 text-xs">›</span>
          <span className="opacity-95 font-semibold truncate">{currentPage}</span>
        </>
      ) : (
        <span className="opacity-95 font-semibold">Surfing in India</span>
      )}
    </div>
  );

  // --- DETAIL VIEW ---
  if (selectedItem) {
    return (
      <div className="bg-white min-h-screen">
        <Breadcrumb currentPage={selectedItem.title || selectedItem.name} />
        <div className="max-w-6xl mx-auto py-12 px-6">
          <button 
            onClick={() => setSelectedItem(null)} 
            className="flex items-center gap-2 text-[#48abbc] font-bold mb-8 hover:gap-3 transition-all group"
          >
            <FaChevronLeft className="group-hover:-translate-x-1 transition-transform" />
            <span className="text-sm uppercase tracking-wider">Back to Surfing</span>
          </button>
          <div className="flex flex-col lg:flex-row gap-12 items-start">
            <div className="w-full lg:w-1/2 rounded-3xl overflow-hidden shadow-2xl">
              <img 
                src={selectedItem.img} 
                className="w-full h-[450px] lg:h-[550px] object-cover" 
                alt={selectedItem.title || selectedItem.name} 
              />
            </div>
            <div className="flex-1 pt-6">
              <p className="text-[#48abbc] font-black tracking-[0.3em] uppercase text-xs mb-4">
                {selectedItem.location || "Surfing Experience"}
              </p>
              <h1 className="text-4xl md:text-6xl font-serif mb-6 leading-tight text-gray-900">
                {selectedItem.title || selectedItem.name}
              </h1>
              <p className="text-lg text-gray-600 leading-relaxed mb-8">
                {selectedItem.description || "Ride the waves and experience the thrill of surfing on India's stunning coastline. From beginner-friendly breaks to challenging swells, discover the perfect spot for your adventure."}
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // --- MAIN VIEW (Surfing landing with overlapping container) ---
  return (
    <div className="bg-white min-h-screen">
      <Breadcrumb />

      {/* Hero Section */}
      <div className="relative h-[70vh] md:h-[80vh] w-full overflow-hidden">
        <img 
          src={SurfingData.hero.bannerImg} 
          className="w-full h-full object-cover" 
          alt="Hero" 
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-transparent flex items-center justify-center text-center text-white">
          <div className="max-w-4xl px-6">
            <h1 className="text-5xl md:text-8xl lg:text-9xl font-serif mb-6 italic drop-shadow-2xl">
              Surfing in India
            </h1>
            <div className="w-24 h-1 bg-[#FFC107] mx-auto mb-6 rounded-full"></div>
            <p className="text-lg md:text-2xl font-light opacity-95">
              Ride the waves of the Indian Ocean
            </p>
          </div>
        </div>
      </div>

      {/* Overlapping Container (all content goes here) */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 -mt-20 md:-mt-32 pb-20">
        <div className="bg-white rounded-3xl shadow-2xl p-6 md:p-10">

          {/* Top Surfing Experiences (Slider) */}
          <section className="mb-20">
            <div className="flex flex-wrap justify-between items-end mb-10 gap-4">
              <h2 className="text-3xl md:text-5xl font-serif text-gray-900 border-l-8 border-[#48abbc] pl-6">
                Top surfing experiences
              </h2>
              <div className="flex gap-3">
                <button onClick={() => scroll('left')} className="w-12 h-12 rounded-full border border-gray-300 flex items-center justify-center hover:bg-[#48abbc] hover:text-white hover:border-[#48abbc] transition-all shadow-sm">
                  <FaChevronLeft />
                </button>
                <button onClick={() => scroll('right')} className="w-12 h-12 rounded-full border border-gray-300 flex items-center justify-center hover:bg-[#48abbc] hover:text-white hover:border-[#48abbc] transition-all shadow-sm">
                  <FaChevronRight />
                </button>
              </div>
            </div>
            <div ref={scrollRef} className="flex gap-6 overflow-x-auto no-scrollbar scroll-smooth snap-x pb-4">
              {SurfingData.records.map((item) => (
                <div 
                  key={item.id} 
                  onClick={() => setSelectedItem(item)} 
                  className="min-w-[280px] md:min-w-[350px] group cursor-pointer snap-start transition-transform hover:-translate-y-2 duration-300"
                >
                  <div className="h-[260px] md:h-[300px] rounded-2xl overflow-hidden shadow-lg relative">
                    <img 
                      src={item.img} 
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" 
                      alt="Surf" 
                    />
                  </div>
                  <h3 className="text-xl md:text-2xl font-serif text-gray-800 group-hover:text-[#48abbc] transition-colors mt-4 mb-1">
                    {item.title}
                  </h3>
                  <p className="text-[#48abbc] text-xs font-bold uppercase tracking-wider">{item.location}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Explore Unforgettable Hikes */}
          <section className="mb-20">
            <h2 className="text-3xl md:text-5xl font-serif text-gray-900 border-l-8 border-[#48abbc] pl-6 mb-10">
              Explore unforgettable hikes
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { title: "Top day hikes", img: "https://images.unsplash.com/photo-1551632811-561732d1e306?q=80&w=800" },
                { title: "Beautiful coastal walks", img: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=800" },
                { title: "India's best hiking trails", img: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?q=80&w=800" },
                { title: "Unique Aboriginal guides", img: "https://images.unsplash.com/photo-1518413922365-246ee238cc64?q=80&w=800" }
              ].map((hike, idx) => (
                <div 
                  key={idx} 
                  onClick={() => setSelectedItem(hike)} 
                  className="relative h-[320px] rounded-2xl overflow-hidden group cursor-pointer shadow-md"
                >
                  <img 
                    src={hike.img} 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" 
                    alt="Hike" 
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                  <h4 className="absolute bottom-6 left-6 text-white text-xl md:text-2xl font-serif pr-4">
                    {hike.title}
                  </h4>
                </div>
              ))}
            </div>
          </section>

          {/* Explore Other Interests */}
          <section className="mb-20">
            <h2 className="text-3xl md:text-5xl font-serif text-gray-900 border-l-8 border-[#48abbc] pl-6 mb-10">
              Explore other interests
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { name: "Seasonal travel", img: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?q=80&w=800" },
                { name: "Nature and National Parks", img: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?q=80&w=800" },
                { name: "Luxury Travel", img: "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?q=80&w=800" },
                { name: "Health and Wellness", img: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?q=80&w=800" }
              ].map((interest, idx) => (
                <div 
                  key={idx} 
                  onClick={() => setSelectedItem(interest)} 
                  className="group cursor-pointer transition-transform hover:-translate-y-1 duration-300"
                >
                  <div className="h-[280px] rounded-2xl overflow-hidden shadow-md mb-4">
                    <img 
                      src={interest.img} 
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" 
                      alt="Interest" 
                    />
                  </div>
                  <p className="text-lg font-serif text-center text-gray-800 group-hover:text-[#48abbc] transition-colors">
                    {interest.name}
                  </p>
                </div>
              ))}
            </div>
          </section>

          {/* Travellers' Stories */}
          <section>
            <h2 className="text-3xl md:text-5xl font-serif text-gray-900 border-l-8 border-[#48abbc] pl-6 mb-10">
              Travellers' Stories
            </h2>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              <div 
                onClick={() => setSelectedItem(SurfingData.stories[0])}
                className="lg:col-span-2 relative h-[500px] rounded-2xl overflow-hidden group cursor-pointer shadow-xl"
              >
                <img 
                  src={SurfingData.stories[0].img} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" 
                  alt="Story" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
                <div className="absolute bottom-8 left-8 right-8 text-white">
                  <h4 className="text-2xl md:text-3xl font-serif leading-tight mb-3">
                    "Catching my first wave in Mulki changed my perspective."
                  </h4>
                  <div className="flex items-center gap-2 text-xs font-bold tracking-wider uppercase">
                    <FaInstagram /> View on Instagram
                  </div>
                </div>
              </div>

              <div className="flex flex-col gap-6 h-[500px]">
                {SurfingData.stories.slice(1, 3).map((story, i) => (
                  <div 
                    key={i} 
                    onClick={() => setSelectedItem(story)}
                    className="relative flex-1 rounded-2xl overflow-hidden shadow-lg group cursor-pointer"
                  >
                    <img 
                      src={story.img} 
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" 
                      alt="Story Small" 
                    />
                    <div className="absolute top-4 right-4 bg-white/20 backdrop-blur-md p-2 rounded-full text-white">
                      <FaInstagram />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Back to Adventure Button */}
          <div className="text-center pt-12 mt-8 border-t border-gray-100">
            <button
              onClick={handleAdventure}
              className="inline-flex items-center gap-2 text-gray-500 hover:text-[#48abbc] transition-colors text-sm font-medium"
            >
              <FaChevronLeft size={12} /> Back to Adventure
            </button>
          </div>

        </div> {/* end white container */}
      </div> {/* end overlapping container */}
    </div>
  );
};

export default SurfingSection;