import React, { useState, useRef } from 'react';
import { SurfingData } from '../../../Data/ThingsToDo/Adventure/SurfingData'; 
import { FaChevronLeft, FaChevronRight, FaInstagram } from "react-icons/fa";

const SurfingSection = ({ onBack }) => {
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

  // --- DETAIL PAGE VIEW (Button Removed Here) ---
  if (selectedItem) {
    return (
      <div className="bg-white min-h-screen animate-in fade-in duration-500">
        <div className="w-full bg-[#3AA8C1] py-4 text-white sticky top-0 z-50 shadow-sm">
          <div className="max-w-[1440px] mx-auto px-10 flex items-center gap-4 text-[11px] font-bold uppercase tracking-widest">
            <button onClick={() => setSelectedItem(null)} className="hover:underline cursor-pointer">Back</button>
            <span className="opacity-60">{">"}</span>
            <span className="truncate">{selectedItem.title || selectedItem.name}</span>
          </div>
        </div>

        <main className="max-w-[1200px] mx-auto py-20 px-10">
          <div className="flex flex-col lg:flex-row gap-16 items-start">
            <img 
              src={selectedItem.img} 
              className="w-full lg:w-1/2 h-[600px] object-cover rounded-[3rem] shadow-2xl" 
              alt="Detail" 
            />
            <div className="flex-1 pt-10">
              <p className="text-[#3AA8C1] font-black tracking-[0.4em] uppercase mb-4">
                {selectedItem.location || "Featured Experience"}
              </p>
              <h1 className="text-6xl font-serif mb-8 text-gray-900 leading-tight">
                {selectedItem.title || selectedItem.name}
              </h1>
              <p className="text-xl text-gray-600 font-light leading-relaxed mb-8">
                {selectedItem.description || "Explore the incredible beauty and heritage of this location. From breathtaking views to cultural immersion, this experience offers a unique glimpse into the heart of the region."}
              </p>
              {/* Plan Your Visit button has been removed */}
            </div>
          </div>
        </main>
      </div>
    );
  }

  return (
    <div className="bg-white min-h-screen font-sans">
      {/* 1. BREADCRUMB HEADER */}
      <div className="w-full bg-[#3AA8C1] py-4 text-white sticky top-0 z-[100] shadow-sm">
        <div className="max-w-[1440px] mx-auto px-10 flex items-center gap-4 text-[11px] font-bold uppercase tracking-widest">
          <button onClick={onBack} className="hover:underline">Home</button>
          <span className="opacity-60">{">"}</span>
          <button onClick={onBack} className="hover:underline">Things to do</button>
          <span className="opacity-60">{">"}</span>
          <span>Surfing in India</span>
        </div>
      </div>

      {/* 2. HERO */}
      <section className="relative h-[75vh] w-full overflow-hidden">
        <img src={SurfingData.hero.bannerImg} className="w-full h-full object-cover" alt="Hero" />
        <div className="absolute inset-0 bg-black/30 flex items-center justify-center text-center text-white">
          <div className="max-w-4xl px-6">
            <h1 className="text-7xl md:text-9xl font-serif mb-6 italic drop-shadow-lg">Surfing in India</h1>
            <p className="text-xl md:text-2xl font-light opacity-90">Ride the waves of the Indian Ocean</p>
          </div>
        </div>
      </section>

      {/* 3. TOP EXPERIENCES */}
      <section className="py-24 px-10 bg-[#f9f9f9]">
        <div className="max-w-[1500px] mx-auto">
          <div className="flex justify-between items-end mb-12">
            <h2 className="text-5xl font-serif italic">Top surfing experiences</h2>
            <div className="flex gap-3">
              <button onClick={() => scroll('left')} className="w-12 h-12 rounded-full border border-gray-300 flex items-center justify-center hover:bg-[#3AA8C1] hover:text-white transition-all"><FaChevronLeft /></button>
              <button onClick={() => scroll('right')} className="w-12 h-12 rounded-full border border-gray-300 flex items-center justify-center hover:bg-[#3AA8C1] hover:text-white transition-all"><FaChevronRight /></button>
            </div>
          </div>
          <div ref={scrollRef} className="flex gap-8 overflow-x-auto no-scrollbar snap-x pb-6">
            {SurfingData.records.map((item) => (
              <div key={item.id} onClick={() => setSelectedItem(item)} className="min-w-[380px] group cursor-pointer snap-start">
                <div className="h-[280px] rounded-[2rem] overflow-hidden mb-6 shadow-md">
                  <img src={item.img} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" alt="Surf" />
                </div>
                <h3 className="text-2xl font-serif group-hover:text-[#3AA8C1] transition-colors">{item.title}</h3>
                <p className="text-[#3AA8C1] text-xs font-bold uppercase tracking-widest mt-1">{item.location}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. UNFORGETTABLE HIKES */}
      <section className="py-24 px-10 bg-white">
        <div className="max-w-[1440px] mx-auto">
          <h2 className="text-5xl font-serif mb-12 italic">Explore unforgettable hikes</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {[
              { title: "Top day hikes", img: "https://images.unsplash.com/photo-1551632811-561732d1e306?q=80&w=800" },
              { title: "Beautiful coastal walks", img: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=800" },
              { title: "India's best hiking trails", img: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?q=80&w=800" },
              { title: "Unique Aboriginal guides", img: "https://images.unsplash.com/photo-1518413922365-246ee238cc64?q=80&w=800" }
            ].map((hike, idx) => (
              <div key={idx} onClick={() => setSelectedItem(hike)} className="relative h-[400px] rounded-[2rem] overflow-hidden group cursor-pointer">
                <img src={hike.img} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" alt="Hike" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                <h4 className="absolute bottom-6 left-6 text-white text-2xl font-serif pr-4">{hike.title}</h4>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. EXPLORE OTHER INTERESTS (Second to last) */}
      <section className="py-24 px-10 bg-[#f9f9f9]">
        <div className="max-w-[1440px] mx-auto">
          <h2 className="text-5xl font-serif mb-12 italic">Explore other interests</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { name: "Seasonal travel", img: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?q=80&w=800" },
              { name: "Nature and National Parks", img: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?q=80&w=800" },
              { name: "Luxury Travel", img: "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?q=80&w=800" },
              { name: "Health and Wellness", img: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?q=80&w=800" }
            ].map((interest, idx) => (
              <div key={idx} onClick={() => setSelectedItem(interest)} className="group cursor-pointer">
                <div className="h-[350px] rounded-[2.5rem] overflow-hidden mb-4 shadow-md">
                  <img src={interest.img} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" alt="Interest" />
                </div>
                <p className="text-xl font-serif text-center text-gray-800">{interest.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. TRAVELLERS' STORIES (Very end) */}
      <section className="py-24 px-10 bg-white mb-20">
        <div className="max-w-[1440px] mx-auto">
          <h2 className="text-5xl font-serif mb-12 italic">Travellers' Stories</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div 
              onClick={() => setSelectedItem(SurfingData.stories[0])}
              className="md:col-span-2 relative h-[600px] rounded-[2.5rem] overflow-hidden group cursor-pointer shadow-xl"
            >
              <img src={SurfingData.stories[0].img} className="w-full h-full object-cover group-hover:scale-105 transition-all duration-700" alt="Story" />
              <div className="absolute inset-0 bg-black/20" />
              <div className="absolute bottom-10 left-10 text-white max-w-lg">
                <h4 className="text-4xl font-serif leading-tight mb-4">"Catching my first wave in Mulki changed my perspective."</h4>
                <div className="flex items-center gap-2 text-[10px] font-bold tracking-widest uppercase"><FaInstagram /> View on Instagram</div>
              </div>
            </div>

            <div className="flex flex-col gap-6">
              {SurfingData.stories.slice(1, 3).map((story, i) => (
                <div 
                  key={i} 
                  onClick={() => setSelectedItem(story)}
                  className="relative flex-1 rounded-[2rem] overflow-hidden shadow-lg group cursor-pointer"
                >
                  <img src={story.img} className="w-full h-full object-cover group-hover:scale-110 transition-all duration-700" alt="Story Small" />
                  <div className="absolute top-4 right-4 bg-white/20 backdrop-blur-md p-2 rounded-full text-white"><FaInstagram /></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SurfingSection;