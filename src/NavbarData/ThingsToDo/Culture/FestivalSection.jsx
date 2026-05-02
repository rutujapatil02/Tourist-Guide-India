import React, { useState, useEffect } from 'react';
import { festivalData } from '../../../Data/ThingsToDo/Culture/FestivalData';
import { 
  FaSearch, FaArrowLeft, FaMapMarkerAlt, FaCalendarAlt, 
  FaShareAlt, FaGlobe, FaHeart, FaFilter, FaTimes 
} from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

const FestivalSection = ({ onBackToCulture }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [activeCategory, setActiveCategory] = useState("All");
  const [selectedFestival, setSelectedFestival] = useState(null);
  const [showFilters, setShowFilters] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [selectedFestival]);

  const filteredEvents = festivalData.allEvents.filter(event => {
    const matchesSearch = event.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
                          event.location.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = activeCategory === "All" || event.category === activeCategory;
    return matchesSearch && matchesCategory;
  });

  // Categories for filter
  const categories = ["All", "Religious", "Culture", "Music", "Arts"];

  // --- Breadcrumb Component (shared) ---
  const Breadcrumb = ({ currentPage }) => (
    <div className="w-full bg-gradient-to-r from-[#3BB0C1] to-[#48abbc] text-white py-3 px-6 md:px-10 flex items-center gap-2 text-sm font-medium sticky top-0 z-50 shadow-md">
      <button 
        onClick={() => navigate('/')} 
        className="flex items-center gap-1 hover:text-gray-200 transition-colors"
      >
        <FaGlobe className="w-3 h-3" />
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
      {currentPage ? (
        <>
          <button 
            onClick={() => setSelectedFestival(null)} 
            className="hover:text-gray-200 transition-colors"
          >
            Major Events Calendar
          </button>
          <span className="text-white/60 text-xs">›</span>
          <span className="opacity-95 font-semibold truncate">{currentPage}</span>
        </>
      ) : (
        <span className="opacity-95 font-semibold">Major Events Calendar</span>
      )}
    </div>
  );

  // --- FESTIVAL DETAIL VIEW ---
  if (selectedFestival) {
    return (
      <div className="bg-white min-h-screen">
        <Breadcrumb currentPage={selectedFestival.title} />
        
        {/* Hero with image and overlay */}
        <div className="relative h-[50vh] md:h-[65vh] w-full overflow-hidden">
          <img 
            src={selectedFestival.img} 
            className="w-full h-full object-cover" 
            alt={selectedFestival.title} 
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent"></div>
          <div className="absolute bottom-0 left-0 right-0 p-8 md:p-12 text-white">
            <div className="max-w-7xl mx-auto">
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif font-bold leading-tight">
                {selectedFestival.title}
              </h1>
              <div className="flex flex-wrap gap-6 mt-4 text-white/90">
                <span className="flex items-center gap-2 text-sm md:text-base">
                  <FaMapMarkerAlt /> {selectedFestival.location}
                </span>
                <span className="flex items-center gap-2 text-sm md:text-base">
                  <FaCalendarAlt /> {selectedFestival.date}
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Content area */}
        <div className="max-w-4xl mx-auto px-6 py-12 md:py-20">
          <div className="flex flex-wrap justify-between items-center gap-4 mb-12 pb-6 border-b border-gray-200">
            <div className="flex gap-8">
              <div>
                <p className="text-[10px] font-bold text-gray-400 uppercase tracking-wider">Starts</p>
                <p className="text-xl font-semibold text-gray-800">
                  {selectedFestival.date.split(' - ')[0]}
                </p>
              </div>
              <div>
                <p className="text-[10px] font-bold text-gray-400 uppercase tracking-wider">Ends</p>
                <p className="text-xl font-semibold text-gray-800">
                  {selectedFestival.date.split(' - ')[1] || 'TBA'}
                </p>
              </div>
              <div>
                <p className="text-[10px] font-bold text-gray-400 uppercase tracking-wider">Category</p>
                <p className="text-base font-medium text-[#48abbc]">{selectedFestival.category}</p>
              </div>
            </div>
            <button className="flex items-center gap-2 px-4 py-2 rounded-full bg-gray-100 text-gray-700 hover:bg-gray-200 transition text-sm font-medium">
              <FaShareAlt /> Share
            </button>
          </div>

          <article className="prose prose-lg max-w-none">
            <h2 className="text-3xl md:text-4xl font-serif text-gray-900 mb-6">About the Festival</h2>
            <p className="text-gray-600 leading-relaxed mb-6">
              {selectedFestival.title} is a magnificent celebration held in {selectedFestival.location}. 
              It represents the heart of Indian heritage, inviting travelers to witness vibrant colors, 
              rhythmic music, and spiritual depth.
            </p>
            <p className="text-gray-600 leading-relaxed">
              Attendees can expect a variety of cultural performances, local delicacies, and 
              ceremonies that have remained unchanged for centuries. This event is a highlight 
              of the {selectedFestival.category} calendar in India.
            </p>
          </article>

          <div className="mt-12 pt-8 border-t border-gray-100">
            <button 
              onClick={() => setSelectedFestival(null)}
              className="inline-flex items-center gap-2 text-[#48abbc] font-medium hover:gap-3 transition-all"
            >
              <FaArrowLeft /> Back to all events
            </button>
          </div>
        </div>
      </div>
    );
  }

  // --- MAIN CALENDAR GRID VIEW ---
  return (
    <div className="bg-white min-h-screen">
      <Breadcrumb />
      
      {/* Hero Section */}
      <div className="relative bg-gradient-to-br from-gray-50 to-white pt-16 pb-12 md:pt-24 md:pb-20">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <span className="text-[#48abbc] text-sm font-bold uppercase tracking-wider">Plan your trip</span>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif font-bold text-gray-900 mt-4 mb-6 leading-tight">
            Major events calendar
          </h1>
          <p className="max-w-3xl mx-auto text-lg md:text-xl text-gray-500 font-light leading-relaxed">
            Discover festivals, cultural celebrations, and religious events across India. 
            Search by destination or interest to plan your perfect visit.
          </p>
        </div>
      </div>

      {/* Search & Filters */}
      <div className="sticky top-16 z-30 bg-white/95 backdrop-blur-sm shadow-sm border-b border-gray-100 py-4">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row gap-4 items-center">
            <div className="relative flex-1 w-full">
              <FaSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
              <input
                type="text"
                placeholder="Search by festival name, city, or state..."
                className="w-full pl-12 pr-4 py-3 rounded-xl border border-gray-200 focus:border-[#48abbc] focus:ring-2 focus:ring-[#48abbc]/20 outline-none transition"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            <button
              onClick={() => setShowFilters(!showFilters)}
              className="flex items-center gap-2 px-5 py-3 rounded-xl border border-gray-200 bg-white hover:bg-gray-50 transition"
            >
              <FaFilter className="text-gray-500" />
              <span className="text-sm font-medium">Filters</span>
            </button>
          </div>
          
          {/* Filter chips */}
          <div className={`flex flex-wrap gap-3 mt-4 transition-all duration-300 ${showFilters ? 'max-h-40 opacity-100' : 'max-h-0 opacity-0 invisible overflow-hidden'}`}>
            {categories.map(cat => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-5 py-1.5 rounded-full text-sm font-medium transition-all ${
                  activeCategory === cat
                    ? 'bg-[#48abbc] text-white shadow-md'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {cat}
              </button>
            ))}
            {showFilters && (
              <button
                onClick={() => setShowFilters(false)}
                className="text-gray-400 hover:text-gray-600"
              >
                <FaTimes />
              </button>
            )}
          </div>
        </div>
      </div>

      {/* Results Grid */}
      <div className="max-w-7xl mx-auto px-6 py-12">
        {filteredEvents.length === 0 ? (
          <div className="text-center py-20">
            <p className="text-gray-400 text-lg">No festivals match your search.</p>
            <button
              onClick={() => { setSearchTerm(""); setActiveCategory("All"); }}
              className="mt-4 text-[#48abbc] underline"
            >
              Clear filters
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredEvents.map((event) => (
              <div
                key={event.id}
                className="group cursor-pointer bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
                onClick={() => setSelectedFestival(event)}
              >
                <div className="relative aspect-[4/3] overflow-hidden">
                  <img
                    src={event.img}
                    alt={event.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  {/* Date badge */}
                  <div className="absolute top-4 left-4 bg-white/95 backdrop-blur-sm rounded-lg px-3 py-1.5 shadow-md">
                    <div className="text-center">
                      <span className="text-xl font-bold text-gray-800 block leading-tight">
                        {event.date.split(' ')[0]}
                      </span>
                      <span className="text-[10px] font-semibold text-[#48abbc] uppercase">
                        {event.date.split(' ')[1] || event.date.split(' ')[0]}
                      </span>
                    </div>
                  </div>
                  {/* Category tag */}
                  <div className="absolute bottom-4 right-4 bg-black/60 backdrop-blur-sm text-white text-xs px-3 py-1 rounded-full">
                    {event.category}
                  </div>
                </div>
                <div className="p-5">
                  <h3 className="text-xl font-serif font-bold text-gray-800 group-hover:text-[#48abbc] transition-colors line-clamp-1">
                    {event.title}
                  </h3>
                  <p className="text-sm text-gray-500 mt-2 flex items-center gap-2">
                    <FaCalendarAlt className="w-3 h-3" /> {event.date}
                  </p>
                  <p className="text-sm text-gray-400 mt-1 flex items-center gap-2">
                    <FaMapMarkerAlt className="w-3 h-3" /> {event.location}
                  </p>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Footer / Back to Culture */}
      <div className="text-center py-12 border-t border-gray-100">
        <button
          onClick={onBackToCulture}
          className="inline-flex items-center gap-2 text-gray-500 hover:text-[#48abbc] transition"
        >
          <FaArrowLeft size={12} /> Back to Culture
        </button>
      </div>
    </div>
  );
};

export default FestivalSection;