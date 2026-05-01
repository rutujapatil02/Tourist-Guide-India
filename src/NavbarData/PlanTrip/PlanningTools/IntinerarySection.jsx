import React, { useState } from 'react';
import { FaSearch, FaFacebookF, FaWhatsapp, FaLink } from "react-icons/fa";
import { itineraryData } from '../../../Data/PlanTrip/PlanningTools/IntineraryData';

const ItinerarySection = ({ onHomeClick }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [visibleCount, setVisibleCount] = useState(9);

  // Filter logic based on the search input
  const filteredCards = itineraryData.cards.filter(card =>
    card.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    card.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()))
  );

  const handleLoadMore = () => {
    setVisibleCount(prevCount => prevCount + 9);
  };

  const displayedCards = filteredCards.slice(0, visibleCount);

  return (
    <div className="w-full bg-white min-h-screen pb-20 animate-in fade-in duration-700">
      {/* Blue Navbar Breadcrumb */}
      <div className="w-full bg-[#3296a8] py-3 px-10 flex items-center gap-2 text-white text-[13px]">
        <span className="cursor-pointer hover:underline" onClick={onHomeClick}>Home</span>
        <span className="opacity-70">&gt;</span>
        <span className="cursor-pointer hover:underline">Plan your trip</span>
        <span className="opacity-70">&gt;</span>
        <span className="font-semibold">Trips and itineraries</span>
      </div>

      <div className="w-full h-[120vh] relative overflow-hidden">
        <img 
          src={itineraryData.heroImg} 
          alt="Adventure Hero" 
          className="w-full h-full object-cover" 
        />
      </div>

      <div className="max-w-9xl mx-auto px-6 -mt-32 relative z-10">
        <div className="bg-white p-10 md:p-16 rounded-t-[3.5rem] shadow-sm text-center">
          <h1 className="text-5xl md:text-7xl font-serif font-bold text-gray-900 mb-6 italic">
            {itineraryData.title}
          </h1>
          <p className="text-xl text-gray-600 mb-10 max-w-3xl mx-auto">
            {itineraryData.subtitle}
          </p>
          
          <div className="flex justify-center gap-5 mb-20">
            <button className="w-11 h-11 rounded-full bg-[#3b5998] text-white flex items-center justify-center hover:scale-110 transition-transform"><FaFacebookF /></button>
            <button className="w-11 h-11 rounded-full bg-[#25D366] text-white flex items-center justify-center hover:scale-110 transition-transform"><FaWhatsapp /></button>
            <button className="w-11 h-11 rounded-full bg-gray-800 text-white flex items-center justify-center hover:scale-110 transition-transform"><FaLink /></button>
          </div>

          <div className="text-left border-t border-gray-100 pt-16">
            <h2 className="text-4xl font-serif font-bold text-gray-900 mb-4">{itineraryData.searchTitle}</h2>
            <p className="text-gray-500 mb-12 text-lg">{itineraryData.searchSubtitle}</p>
            
            <div className="flex flex-wrap gap-4 mb-4 items-center justify-between">
              <div className="flex flex-wrap gap-3">
                {["Category", "Starting location", "Trip duration"].map((filter) => (
                  <button key={filter} className="px-6 py-3 border border-gray-200 rounded-full text-sm font-bold bg-white hover:bg-gray-50 flex items-center gap-3 transition-colors">
                    {filter} <span className="text-[10px] text-gray-400">▼</span>
                  </button>
                ))}
              </div>
              <div className="relative w-full md:w-80 mt-4 md:mt-0">
                <input 
                  type="text" 
                  placeholder="Search itineraries" 
                  value={searchTerm}
                  onChange={(e) => {
                    setSearchTerm(e.target.value);
                    setVisibleCount(9); // Reset visible count on new search
                  }}
                  className="w-full pl-12 pr-4 py-3 border border-gray-200 rounded-lg bg-gray-50 outline-none" 
                />
                <FaSearch className="absolute left-4 top-4 text-gray-400" />
              </div>
            </div>

            <div className="mb-12 text-gray-600 font-medium">
              Showing {displayedCards.length} of {filteredCards.length} results
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 mb-20">
              {displayedCards.map((card) => (
                <div key={card.id} className="group cursor-pointer">
                  <div className="rounded-2xl overflow-hidden mb-6 aspect-[4/3] relative">
                    <img 
                      src={card.img} 
                      alt={card.title} 
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000" 
                    />
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-gray-900 group-hover:text-blue-900 transition-colors">
                    {card.title}
                  </h3>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {card.tags.map(tag => (
                      <span key={tag} className="text-[10px] text-gray-400 uppercase tracking-[0.15em] font-black italic">
                        ● {tag}
                      </span>
                    ))}
                  </div>
                  <p className="text-gray-600 leading-relaxed text-sm line-clamp-3">
                    {card.desc}
                  </p>
                </div>
              ))}
            </div>

            {visibleCount < filteredCards.length && (
              <div className="flex justify-center mt-10">
                <button 
                  onClick={handleLoadMore}
                  className="px-12 py-3 border border-black rounded-full text-black font-bold hover:bg-black hover:text-white transition-all duration-300"
                >
                  Load more
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ItinerarySection;