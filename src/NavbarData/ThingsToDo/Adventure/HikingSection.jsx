import React, { useState, useEffect } from 'react';
import { HikingData } from '../../../Data/ThingsToDo/Adventure/HikingData';
import { 
  FaFacebookF, FaWhatsapp, FaLink, FaSearch, 
  FaChevronDown, FaTimes, FaMapMarkerAlt, FaArrowLeft, FaMap, FaHome
} from "react-icons/fa";

const HikingSection = ({ 
  onBack,                    // back to Adventure main grid
  onBackToThingsToDo,        // optional: back to Things to Do main
  onGoHome                   // optional: go to homepage
}) => {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [selectedItinerary, setSelectedItinerary] = useState(null);
  const [showMapModal, setShowMapModal] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [selectedCategory, selectedItinerary]);

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

  // --- Breadcrumb Component (non‑sticky) ---
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
      <button onClick={handleAdventure} className="hover:text-gray-200 transition-colors">
        Adventure
      </button>
      <span className="text-white/60 text-xs">›</span>
      {currentPage ? (
        <>
          <span className="hover:text-gray-200 transition-colors">Hiking</span>
          <span className="text-white/60 text-xs">›</span>
          <span className="opacity-95 font-semibold truncate">{currentPage}</span>
        </>
      ) : (
        <span className="opacity-95 font-semibold">Hiking in India</span>
      )}
    </div>
  );

  // --- 1. DETAIL VIEW (single trek itinerary) ---
  if (selectedItinerary) {
    return (
      <div className="bg-white min-h-screen">
        <Breadcrumb currentPage={selectedItinerary.title} />
        <div className="max-w-6xl mx-auto py-12 px-6">
          <button 
            onClick={() => setSelectedItinerary(null)} 
            className="flex items-center gap-2 text-[#48abbc] font-bold mb-8 hover:gap-3 transition-all group"
          >
            <FaArrowLeft className="group-hover:-translate-x-1 transition-transform" />
            <span className="text-sm uppercase tracking-wider">Back to List</span>
          </button>
          <div className="grid lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2">
              <img 
                src={selectedItinerary.img} 
                className="w-full h-[400px] md:h-[500px] object-cover rounded-2xl shadow-xl mb-8" 
                alt={selectedItinerary.title} 
              />
              <h1 className="text-3xl md:text-5xl font-serif text-gray-900 mb-6">{selectedItinerary.title}</h1>
              <p className="text-lg text-gray-600 font-light leading-relaxed mb-10">
                {selectedItinerary.description}
              </p>
              <h2 className="text-2xl md:text-3xl font-serif mb-6 border-b pb-3">Trek Itinerary</h2>
              <div className="space-y-6">
                {selectedItinerary.plan && selectedItinerary.plan.length > 0 ? (
                  selectedItinerary.plan.map((step) => (
                    <div key={step.day} className="flex gap-4">
                      <div className="flex-shrink-0 w-10 h-10 bg-orange-100 rounded-full flex items-center justify-center text-orange-600 font-bold text-sm">
                        {step.day}
                      </div>
                      <div className="pb-6 border-b border-gray-100 w-full">
                        <h3 className="text-lg font-bold text-gray-800 mb-1">{step.title}</h3>
                        <p className="text-gray-500 leading-relaxed">{step.detail}</p>
                      </div>
                    </div>
                  ))
                ) : (
                  <p className="text-gray-400 italic">Detailed daily plan coming soon.</p>
                )}
              </div>
            </div>
            <div className="lg:col-span-1">
              <div className="sticky top-24 space-y-6">
                <div className="bg-gray-50 p-6 rounded-2xl border border-gray-100">
                  <h4 className="font-bold text-sm uppercase tracking-wider text-[#48abbc] mb-5">Trip Highlights</h4>
                  <ul className="space-y-3 text-gray-600 text-sm">
                    <li className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 bg-[#48abbc] rounded-full" /> {selectedItinerary.location}
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 bg-[#48abbc] rounded-full" /> {selectedItinerary.tags}
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 bg-[#48abbc] rounded-full" /> Expert Guide Included
                    </li>
                  </ul>
                  <button 
                    onClick={() => setShowMapModal(true)}
                    className="w-full mt-6 bg-black text-white py-3 rounded-xl font-bold flex items-center justify-center gap-2 hover:bg-[#48abbc] transition-colors text-sm"
                  >
                    <FaMap /> View Route Map
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Map Modal */}
        {showMapModal && (
          <div className="fixed inset-0 z-[200] bg-black/90 flex items-center justify-center p-4 backdrop-blur-md" onClick={() => setShowMapModal(false)}>
            <div className="bg-white w-full max-w-4xl h-[70vh] rounded-2xl overflow-hidden relative shadow-2xl" onClick={(e) => e.stopPropagation()}>
              <button onClick={() => setShowMapModal(false)} className="absolute top-4 right-4 z-10 bg-black/70 text-white p-2 rounded-full"><FaTimes /></button>
              <div className="w-full h-full flex flex-col items-center justify-center bg-blue-50">
                <FaMapMarkerAlt className="text-5xl text-red-500 animate-bounce mb-3" />
                <h2 className="text-2xl font-serif">Route Map View</h2>
                <p className="text-gray-400 mt-2">Terrain data for {selectedItinerary.title || "India"} Loading...</p>
                <div className="mt-6 border-2 border-dashed border-gray-300 w-48 h-48 rounded-full flex items-center justify-center">
                  <span className="text-gray-400">Map Interface</span>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    );
  }

  // --- 2. CATEGORY VIEW (list of treks in a category) ---
  if (selectedCategory) {
    const categoryTreks = HikingData.itineraries.filter(i => i.categoryTitle === selectedCategory);
    return (
      <div className="bg-white min-h-screen">
        <Breadcrumb currentPage={selectedCategory} />
        <div className="max-w-7xl mx-auto px-6 py-12">
          <button 
            onClick={() => setSelectedCategory(null)} 
            className="flex items-center gap-2 text-[#48abbc] font-bold mb-8 hover:gap-3 transition-all group"
          >
            <FaArrowLeft className="group-hover:-translate-x-1 transition-transform" />
            <span className="text-sm uppercase tracking-wider">Back to Styles</span>
          </button>
          <h2 className="text-4xl md:text-5xl font-serif text-gray-900 mb-10 border-l-8 border-[#48abbc] pl-6">{selectedCategory}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {categoryTreks.map((item) => (
              <div key={item.id} onClick={() => setSelectedItinerary(item)} className="group cursor-pointer transition-transform hover:-translate-y-1 duration-300">
                <div className="h-[280px] rounded-2xl overflow-hidden shadow-md mb-4">
                  <img src={item.img} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" alt="" />
                </div>
                <h3 className="text-xl font-serif text-gray-800 group-hover:text-[#48abbc] transition-colors mb-1">{item.title}</h3>
                <p className="text-gray-400 text-xs uppercase tracking-wider">{item.location} • {item.tags}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }

  // --- 3. MAIN LANDING VIEW (with overlapping container) ---
  return (
    <div className="bg-white min-h-screen">
      <Breadcrumb />

      {/* Hero Section */}
      <div className="relative h-[70vh] md:h-[80vh] w-full overflow-hidden">
        <img 
          src={HikingData.hero.bannerImg} 
          className="w-full h-full object-cover" 
          alt="Hero" 
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/20 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 p-8 md:p-12 text-white">
          <div className="max-w-7xl mx-auto">
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif font-bold leading-tight drop-shadow-2xl">
              {HikingData.hero.title}
            </h1>
            <p className="text-lg md:text-xl font-light mt-4 max-w-2xl opacity-95">
              {HikingData.hero.description}
            </p>
          </div>
        </div>
      </div>

      {/* Overlapping Container */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 -mt-20 md:-mt-32 pb-20">
        <div className="bg-white rounded-3xl shadow-2xl p-6 md:p-10">

          {/* Browse Styles */}
          <section className="mb-20">
            <h2 className="text-3xl md:text-5xl font-serif text-gray-900 border-l-8 border-[#48abbc] pl-6 mb-10">
              Browse Styles
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {HikingData.categories.map((cat) => (
                <div 
                  key={cat.id} 
                  onClick={() => setSelectedCategory(cat.title)} 
                  className="relative h-[350px] rounded-2xl overflow-hidden group cursor-pointer shadow-md transition-transform hover:-translate-y-2 duration-300"
                >
                  <img src={cat.img} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" alt={cat.title} />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
                  <h4 className="absolute bottom-6 left-6 text-white text-2xl font-serif pr-4">{cat.title}</h4>
                </div>
              ))}
            </div>
          </section>

          {/* Global Search / Find your trail */}
          <section className="py-12 border-t border-gray-100">
            <div className="flex flex-col md:flex-row justify-between items-center mb-10 gap-6">
              <h2 className="text-3xl md:text-4xl font-serif text-gray-900 italic">Find your trail</h2>
              <div className="relative w-full md:w-96">
                <input 
                  type="text" 
                  placeholder="Search all treks..." 
                  className="w-full p-4 pl-12 rounded-xl bg-gray-50 border border-gray-200 focus:ring-2 focus:ring-[#48abbc] outline-none"
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
                <FaSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
              </div>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
              {HikingData.itineraries.filter(item =>
                item.title.toLowerCase().includes(searchQuery.toLowerCase())
              ).map(item => (
                <div key={item.id} onClick={() => setSelectedItinerary(item)} className="bg-gray-50 rounded-xl p-2 cursor-pointer group hover:shadow-md transition-shadow">
                  <div className="h-32 overflow-hidden rounded-lg mb-2">
                    <img src={item.img} className="w-full h-full object-cover group-hover:scale-105 transition-transform" alt="" />
                  </div>
                  <h3 className="font-bold text-sm text-gray-800 group-hover:text-[#48abbc] line-clamp-1">{item.title}</h3>
                  <p className="text-[10px] text-gray-400 uppercase">{item.location}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Back to Adventure Button */}
          <div className="text-center pt-8 mt-8 border-t border-gray-100">
            <button
              onClick={handleAdventure}
              className="inline-flex items-center gap-2 text-gray-500 hover:text-[#48abbc] transition-colors text-sm font-medium"
            >
              <FaArrowLeft size={12} /> Back to Adventure
            </button>
          </div>

        </div> {/* end white container */}
      </div> {/* end overlapping container */}
    </div>
  );
};

export default HikingSection;