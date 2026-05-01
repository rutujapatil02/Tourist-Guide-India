import React, { useState, useEffect } from 'react';
import { HikingData } from '../../../Data/ThingsToDo/Adventure/HikingData';
import { 
  FaFacebookF, FaWhatsapp, FaLink, FaSearch, 
  FaChevronDown, FaTimes, FaMapMarkerAlt, FaArrowLeft, FaMap 
} from "react-icons/fa";

const HikingSection = ({ onBack }) => {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [selectedItinerary, setSelectedItinerary] = useState(null);
  const [showMapModal, setShowMapModal] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  // Scroll to top whenever a view changes
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [selectedCategory, selectedItinerary]);

  const filteredSearch = HikingData.itineraries.filter(item =>
    item.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  // --- 1. DETAIL VIEW: INFORMATION & PLANNING ---
  if (selectedItinerary) {
    return (
      <div className="bg-white min-h-screen">
        {/* Navigation Header */}
        <div className="w-full bg-[#3AA8C1] py-4 text-white sticky top-0 z-50">
          <div className="max-w-[1440px] mx-auto px-10 flex items-center justify-between">
            <button 
              onClick={() => setSelectedItinerary(null)} 
              className="flex items-center gap-2 text-[11px] font-bold uppercase tracking-widest hover:opacity-70 transition-opacity"
            >
              <FaArrowLeft /> Back to List
            </button>
            <div className="flex gap-4">
               <button className="text-white hover:text-orange-200 transition-colors"><FaFacebookF/></button>
               <button className="text-white hover:text-green-200 transition-colors"><FaWhatsapp/></button>
            </div>
          </div>
        </div>
        
        <main className="max-w-[1100px] mx-auto py-12 px-6 lg:px-10">
          <div className="grid lg:grid-cols-3 gap-12">
            
            {/* Left Column: Image and Description */}
            <div className="lg:col-span-2">
              <img 
                src={selectedItinerary.img} 
                className="w-full h-[500px] object-cover rounded-[2rem] shadow-2xl mb-10" 
                alt={selectedItinerary.title} 
              />
              <h1 className="text-5xl font-serif text-gray-900 mb-6">{selectedItinerary.title}</h1>
              <p className="text-xl text-gray-600 font-light leading-relaxed mb-10">
                {selectedItinerary.description}
              </p>

              {/* Day-by-Day Planning Section */}
              <h2 className="text-3xl font-serif mb-8 border-b pb-4">Trek Itinerary</h2>
              <div className="space-y-8">
                {selectedItinerary.plan && selectedItinerary.plan.length > 0 ? (
                  selectedItinerary.plan.map((step) => (
                    <div key={step.day} className="flex gap-6 relative">
                      <div className="flex-shrink-0 w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center text-orange-600 font-bold">
                        {step.day}
                      </div>
                      <div className="pb-8 border-b border-gray-100 last:border-0 w-full">
                        <h3 className="text-xl font-bold text-gray-800 mb-2">{step.title}</h3>
                        <p className="text-gray-500 font-light leading-relaxed">{step.detail}</p>
                      </div>
                    </div>
                  ))
                ) : (
                  <p className="text-gray-400 italic">Detailed daily plan coming soon for this route.</p>
                )}
              </div>
            </div>

            {/* Right Column: Trip Info & Map Link */}
            <div className="lg:col-span-1">
              <div className="sticky top-24 space-y-6">
                <div className="bg-gray-50 p-8 rounded-3xl border border-gray-100">
                  <h4 className="font-bold text-sm uppercase tracking-widest text-[#3AA8C1] mb-6">Trip Highlights</h4>
                  <ul className="space-y-4 text-gray-600">
                    <li className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-[#3AA8C1] rounded-full" /> {selectedItinerary.location}
                    </li>
                    <li className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-[#3AA8C1] rounded-full" /> {selectedItinerary.tags}
                    </li>
                    <li className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-[#3AA8C1] rounded-full" /> Expert Guide Included
                    </li>
                  </ul>
                  <button 
                    onClick={() => setShowMapModal(true)}
                    className="w-full mt-8 bg-black text-white py-4 rounded-xl font-bold flex items-center justify-center gap-3 hover:bg-[#3AA8C1] transition-colors"
                  >
                    <FaMap /> View Route Map
                  </button>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    );
  }

  // --- 2. CATEGORY LIST VIEW ---
  if (selectedCategory) {
    const categoryTreks = HikingData.itineraries.filter(i => i.categoryTitle === selectedCategory);
    return (
      <div className="bg-white min-h-screen">
        <div className="w-full bg-[#3AA8C1] py-4 text-white sticky top-0 z-50">
          <div className="max-w-[1440px] mx-auto px-10">
            <button onClick={() => setSelectedCategory(null)} className="flex items-center gap-2 text-[11px] font-bold uppercase tracking-widest hover:underline">
              <FaArrowLeft /> Back to Styles
            </button>
          </div>
        </div>
        <section className="py-20 px-10 max-w-[1440px] mx-auto">
          <h2 className="text-6xl font-serif mb-16">{selectedCategory}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
            {categoryTreks.map((item) => (
              <div key={item.id} onClick={() => setSelectedItinerary(item)} className="group cursor-pointer">
                <div className="h-[400px] rounded-[2rem] overflow-hidden mb-6 shadow-lg">
                  <img src={item.img} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" alt="" />
                </div>
                <h3 className="text-3xl font-serif mb-2 group-hover:text-[#3AA8C1]">{item.title}</h3>
                <p className="text-gray-500 uppercase text-xs tracking-widest">{item.location} • {item.tags}</p>
              </div>
            ))}
          </div>
        </section>
      </div>
    );
  }

  // --- 3. MAIN LANDING VIEW ---
  return (
    <div className="bg-white min-h-screen">
      {/* MAP MODAL (Shared logic) */}
      {showMapModal && (
        <div className="fixed inset-0 z-[200] bg-black/90 flex items-center justify-center p-6 backdrop-blur-md">
          <div className="bg-white w-full max-w-5xl h-[80vh] rounded-[3rem] overflow-hidden relative shadow-2xl">
            <button onClick={() => setShowMapModal(false)} className="absolute top-8 right-8 z-10 bg-black text-white p-4 rounded-full"><FaTimes /></button>
            <div className="w-full h-full flex flex-col items-center justify-center bg-blue-50">
              <FaMapMarkerAlt className="text-6xl text-red-500 animate-bounce mb-4" />
              <h2 className="text-3xl font-serif">Route Map View</h2>
              <p className="text-gray-400 mt-2 italic">Terrain data for {selectedItinerary?.title || "India"} Loading...</p>
              <div className="mt-8 border-2 border-dashed border-gray-300 w-64 h-64 rounded-full flex items-center justify-center">
                 <span className="text-gray-400">Map Interface</span>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* STICKY BREADCRUMB */}
      <div className="w-full bg-[#3AA8C1] py-3 text-white sticky top-0 z-[100]">
        <div className="max-w-[1440px] mx-auto px-10 flex items-center gap-3 text-[10px] font-bold uppercase tracking-widest">
          <button onClick={onBack} className="hover:underline">Home</button>
          <span>{">"}</span>
          <span>Hiking in India</span>
        </div>
      </div>

      {/* HERO */}
      <section className="relative h-[80vh]">
        <img src={HikingData.hero.bannerImg} className="w-full h-full object-cover" alt="Hero" />
        <div className="absolute inset-0 bg-black/20" />
        <div className="absolute bottom-20 left-10 text-white max-w-3xl">
           <h1 className="text-8xl font-serif mb-6">{HikingData.hero.title}</h1>
           <p className="text-xl font-light opacity-90">{HikingData.hero.description}</p>
        </div>
      </section>

      {/* CATEGORY SELECTOR */}
      <section className="py-24 px-10 max-w-[1440px] mx-auto">
        <h2 className="text-5xl font-serif mb-12">Browse Styles</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {HikingData.categories.map((cat) => (
            <div 
              key={cat.id} 
              onClick={() => setSelectedCategory(cat.title)} 
              className="relative h-[500px] rounded-3xl overflow-hidden group cursor-pointer shadow-xl transition-transform hover:-translate-y-2"
            >
              <img src={cat.img} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000" alt={cat.title} />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
              <h4 className="absolute bottom-8 left-8 text-white text-3xl font-serif pr-4">{cat.title}</h4>
            </div>
          ))}
        </div>
      </section>

      {/* GLOBAL SEARCH / EXPLORE ALL */}
      <section className="py-20 px-10 bg-gray-50 border-t">
        <div className="max-w-[1440px] mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center mb-12 gap-8">
            <h2 className="text-4xl font-serif italic">Find your trail</h2>
            <div className="relative w-full md:w-96">
              <input 
                type="text" 
                placeholder="Search all 25 treks..." 
                className="w-full p-5 pl-12 rounded-2xl bg-white border-none shadow-sm focus:ring-2 focus:ring-[#3AA8C1] outline-none"
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              <FaSearch className="absolute left-5 top-1/2 -translate-y-1/2 text-gray-300" />
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-5 gap-6">
            {filteredSearch.map(item => (
              <div key={item.id} onClick={() => setSelectedItinerary(item)} className="bg-white p-3 rounded-2xl cursor-pointer group hover:shadow-lg transition-shadow">
                <div className="h-40 overflow-hidden rounded-xl mb-3">
                    <img src={item.img} className="w-full h-full object-cover group-hover:scale-110 transition-transform" alt="" />
                </div>
                <h3 className="font-bold text-sm text-gray-800 group-hover:text-[#3AA8C1]">{item.title}</h3>
                <p className="text-[10px] text-gray-400 mt-1 uppercase">{item.location}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default HikingSection;