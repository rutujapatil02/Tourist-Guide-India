import React, { useState, useEffect } from 'react';
import { festivalData } from '../../../Data/ThingsToDo/Culture/FestivalData';
import { FaSearch, FaArrowLeft, FaMapMarkerAlt, FaCalendarAlt, FaShareAlt, FaGlobe, FaHeart } from 'react-icons/fa';

const FestivalSection = ({ onBackToCulture }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [activeCategory, setActiveCategory] = useState("All");
  const [selectedFestival, setSelectedFestival] = useState(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [selectedFestival]);

  const filteredEvents = festivalData.allEvents.filter(event => {
    const matchesSearch = event.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
                          event.location.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = activeCategory === "All" || event.category === activeCategory;
    return matchesSearch && matchesCategory;
  });

  // --- PERSISTENT TOP NAVIGATION HEADER ---
  const MainHeader = () => (
    <nav className="fixed top-0 left-0 w-full bg-white z-[100] border-b border-gray-100 px-6 py-4">
      <div className="max-w-[1440px] mx-auto flex justify-between items-center">
        <div className="flex items-center gap-8">
          <div className="text-2xl font-black tracking-tighter cursor-pointer" onClick={onBackToCulture}>
            INDIA<span className="text-[#48abbc]">.</span>
          </div>
          <div className="hidden md:flex gap-6 font-bold text-sm uppercase tracking-widest text-gray-600">
            <span className="hover:text-black cursor-pointer">Be inspired</span>
            <span className="hover:text-black cursor-pointer">Places to go</span>
            <span className="text-black border-b-2 border-[#48abbc] cursor-pointer">Things to do</span>
            <span className="hover:text-black cursor-pointer">Plan your trip</span>
          </div>
        </div>
        <div className="flex items-center gap-6 text-gray-700">
          <FaGlobe className="cursor-pointer hover:text-black" />
          <FaHeart className="cursor-pointer hover:text-black" />
          <FaSearch className="cursor-pointer hover:text-black" />
        </div>
      </div>
    </nav>
  );

  // --- BREADCRUMB BAR ---
  const Breadcrumbs = ({ currentPath }) => (
    <div className="bg-[#48abbc] text-white py-3 px-10 mt-[72px]">
      <div className="max-w-7xl mx-auto flex items-center gap-2 text-xs font-bold uppercase tracking-widest">
        <span className="opacity-70 cursor-pointer" onClick={onBackToCulture}>Home</span>
        <span className="opacity-70"> &gt; </span>
        <span className={currentPath ? "opacity-70 cursor-pointer" : ""} onClick={() => setSelectedFestival(null)}>Major Events Calendar</span>
        {currentPath && (
          <>
            <span className="opacity-70"> &gt; </span>
            <span>{currentPath}</span>
          </>
        )}
      </div>
    </div>
  );

  // --- VIEW: FESTIVAL DETAIL PAGE ---
  if (selectedFestival) {
    return (
      <div className="bg-white min-h-screen animate-in fade-in duration-500">
        <MainHeader />
        <Breadcrumbs currentPath={selectedFestival.title} />

        <div className="relative h-[55vh] w-full">
          <img src={selectedFestival.img} className="w-full h-full object-cover" alt="" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
          <div className="absolute bottom-12 left-12 text-white">
            <h1 className="text-6xl md:text-8xl font-serif leading-none">{selectedFestival.title}</h1>
            <p className="text-xl mt-4 font-light flex items-center gap-2">
              <FaMapMarkerAlt /> {selectedFestival.location}
            </p>
          </div>
        </div>

        <div className="max-w-4xl mx-auto px-6 py-20">
          <div className="flex justify-between items-center mb-12 border-b border-gray-100 pb-8">
            <div className="flex gap-10">
              <div>
                <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-1">Starts</p>
                <p className="text-xl font-bold">{selectedFestival.date.split(' - ')[0]}</p>
              </div>
              <div>
                <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-1">Ends</p>
                <p className="text-xl font-bold">{selectedFestival.date.split(' - ')[1] || 'TBA'}</p>
              </div>
            </div>
            <button className="flex items-center gap-2 font-bold text-gray-600 hover:text-black">
              <FaShareAlt /> Share Event
            </button>
          </div>

          <article className="prose prose-xl max-w-none text-gray-600 leading-relaxed font-light">
            <h2 className="text-3xl font-serif text-black mb-6">Experience the Tradition</h2>
            <p className="mb-6">
              {selectedFestival.title} is a magnificent celebration held in {selectedFestival.location}. 
              It represents the heart of Maharashtrian and Indian heritage, inviting travelers 
              to witness the vibrant colors, rhythmic music, and spiritual depth of the region.
            </p>
            <p>
              Attendees can expect a variety of cultural performances, local delicacies, and 
              ceremonies that have remained unchanged for centuries. This event is a highlight 
              of the {selectedFestival.category} calendar.
            </p>
          </article>
        </div>
      </div>
    );
  }

  // --- VIEW: MAIN CALENDAR GRID ---
  return (
    <div className="bg-white min-h-screen pb-20 animate-in fade-in duration-500">
      <MainHeader />
      <Breadcrumbs />

      {/* Hero Content */}
      <div className="pt-20 pb-12 text-center px-6">
        <h1 className="text-6xl md:text-[100px] font-serif text-gray-900 mb-6 leading-none">
          Major events calendar
        </h1>
        <p className="max-w-2xl mx-auto text-xl text-gray-500 font-light leading-relaxed">
          To help plan your visit around the fantastic range of events and festivals across the country, 
          start by searching specific dates and interests in the calendar below.
        </p>
      </div>

      {/* Modern Search Bar */}
      <div className="max-w-4xl mx-auto px-6 mb-20">
        <div className="relative">
          <input 
            type="text" 
            placeholder="Search for festivals, Maharashtra, cities..."
            className="w-full h-20 px-8 rounded-xl text-xl border border-gray-200 outline-none focus:ring-2 ring-[#48abbc]/20"
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <div className="absolute right-4 top-1/2 -translate-y-1/2 bg-gray-100 p-4 rounded-lg cursor-pointer hover:bg-gray-200 transition-all">
            <FaSearch className="text-gray-600" />
          </div>
        </div>
        <div className="flex gap-3 mt-6 justify-center">
          {["All", "Religious", "Culture", "Music", "Arts"].map(cat => (
            <button 
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-6 py-2 rounded-full text-xs font-bold uppercase tracking-widest border transition-all ${
                activeCategory === cat ? 'bg-black text-white border-black' : 'bg-white text-gray-400 border-gray-200 hover:border-gray-400'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Grid Results */}
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-16 gap-x-10">
          {filteredEvents.map((event) => (
            <div 
              key={event.id} 
              className="group cursor-pointer"
              onClick={() => setSelectedFestival(event)}
            >
              <div className="relative rounded-2xl overflow-hidden aspect-[4/3] mb-6 shadow-sm">
                <img src={event.img} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" alt="" />
                {/* Calendar Date Badge */}
                <div className="absolute top-4 left-4 bg-white rounded-lg p-2 shadow-xl flex flex-col items-center min-w-[60px]">
                  <span className="text-xl font-black text-gray-900 leading-none">{event.date.split(' ')[0]}</span>
                  <span className="text-[10px] font-bold text-[#48abbc] uppercase mt-1">{event.date.split(' ')[1]}</span>
                </div>
              </div>
              <h3 className="text-2xl font-serif text-gray-900 group-hover:underline underline-offset-4 mb-2">{event.title}</h3>
              <p className="text-sm text-gray-500 font-medium mb-1">{event.date}</p>
              <p className="text-sm text-gray-400 italic">{event.location}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FestivalSection;