import React, { useState, useEffect } from 'react';
import { foodData } from '../../../Data/ThingsToDo/Culture/FoodData';
import { FaArrowLeft, FaHome } from 'react-icons/fa';

const FoodSection = ({ 
  onBackToCulture,      // required: what happens when "Culture" is clicked
  onBackToThingsToDo,   // optional: what happens when "Things to Do" is clicked
  onGoHome              // optional: what happens when "Home" is clicked
}) => {
  const [selectedItem, setSelectedItem] = useState(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [selectedItem]);

  // Default handlers if props not provided (fallback to simple back navigation)
  const handleHomeClick = () => {
    if (onGoHome) onGoHome();
    else window.location.href = '/'; // fallback – change to your actual home URL
  };

  const handleThingsToDoClick = () => {
    if (onBackToThingsToDo) onBackToThingsToDo();
    else if (onBackToCulture) onBackToCulture(); // fallback to culture parent
    else window.history.back();
  };

  const handleCultureClick = () => {
    if (onBackToCulture) onBackToCulture();
    else window.history.back();
  };

  // --- Breadcrumb Component (fully functional) ---
  const Breadcrumb = ({ currentPage }) => (
    <div className="w-full bg-gradient-to-r from-[#3BB0C1] to-[#48abbc] text-white py-3 px-6 md:px-10 flex items-center gap-2 text-sm font-medium sticky top-0 z-50 shadow-md">
      <button 
        onClick={handleHomeClick}
        className="flex items-center gap-1 hover:text-gray-200 transition-colors"
      >
        <FaHome className="w-4 h-4" />
        <span>Home</span>
      </button>
      <span className="text-white/60 text-xs">›</span>
      <button 
        onClick={handleThingsToDoClick}
        className="hover:text-gray-200 transition-colors"
      >
        Things to Do
      </button>
      <span className="text-white/60 text-xs">›</span>
      <button 
        onClick={handleCultureClick}
        className="hover:text-gray-200 transition-colors"
      >
        Culture
      </button>
      <span className="text-white/60 text-xs">›</span>
      {currentPage ? (
        <>
          <span className="hover:text-gray-200 transition-colors cursor-default">Food & Drink</span>
          <span className="text-white/60 text-xs">›</span>
          <span className="opacity-95 font-semibold truncate">{currentPage}</span>
        </>
      ) : (
        <span className="opacity-95 font-semibold">Food & Drink</span>
      )}
    </div>
  );

  // --- DETAIL VIEW (when an item is clicked) ---
  if (selectedItem) {
    return (
      <div className="bg-white min-h-screen">
        <Breadcrumb currentPage={selectedItem.title} />
        <div className="max-w-5xl mx-auto py-12 px-6">
          <button 
            onClick={() => setSelectedItem(null)}
            className="flex items-center gap-2 text-[#48abbc] font-bold mb-8 hover:gap-3 transition-all group"
          >
            <FaArrowLeft className="group-hover:-translate-x-1 transition-transform" /> 
            <span className="text-sm uppercase tracking-wider">Back to Food & Drink</span>
          </button>
          
          <h1 className="text-4xl md:text-6xl font-serif text-gray-900 mb-6 leading-tight">{selectedItem.title}</h1>
          <div className="rounded-2xl overflow-hidden mb-10 shadow-lg">
            <img src={selectedItem.img} className="w-full h-[400px] md:h-[550px] object-cover" alt="" />
          </div>
          <div className="prose prose-lg max-w-none">
            <p className="text-lg md:text-xl text-gray-700 leading-relaxed whitespace-pre-line">
              {selectedItem.details}
            </p>
          </div>
        </div>
      </div>
    );
  }

  // --- MAIN VIEW (Food & Drink landing page) ---
  return (
    <div className="bg-white min-h-screen">
      <Breadcrumb />

      {/* Hero Section */}
      <div className="relative bg-gradient-to-br from-gray-50 to-white pt-16 pb-12 md:pt-24 md:pb-20">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif font-bold text-gray-900 mb-6 leading-tight">
            India's food and drink experiences
          </h1>
          <p className="max-w-3xl mx-auto text-lg md:text-xl text-gray-500 font-light leading-relaxed">
            Indian cuisine is all about quality ingredients, the people who produce them, 
            and the incredible landscapes in which they're shared.
          </p>
        </div>
      </div>

      {/* Top Culinary Experiences */}
      <div className="max-w-7xl mx-auto px-6 py-12">
        <h2 className="text-3xl md:text-4xl font-serif text-gray-900 mb-10 flex items-center gap-3">
          <span className="w-8 h-[2px] bg-[#48abbc]"></span>
          Top culinary experiences
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
          {foodData.topExperiences.map((item) => (
            <div 
              key={item.id} 
              className="group cursor-pointer transition-all duration-300 hover:-translate-y-1"
              onClick={() => setSelectedItem(item)}
            >
              <div className="rounded-2xl overflow-hidden aspect-[4/3] mb-5 shadow-md border border-gray-100">
                <img 
                  src={item.img} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" 
                  alt={item.title} 
                />
              </div>
              <h3 className="text-xl md:text-2xl font-serif font-bold text-gray-800 group-hover:text-[#48abbc] transition-colors mb-2">
                {item.title}
              </h3>
              <p className="text-gray-500 text-sm md:text-base leading-relaxed line-clamp-3 mb-3">
                {item.details}
              </p>
              <span className="text-[10px] font-bold uppercase tracking-wider text-[#48abbc] group-hover:tracking-widest transition-all">
                Read more →
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Experience India's Food - Grid Cards */}
      <div className="max-w-7xl mx-auto px-6 py-16 border-t border-gray-100">
        <h2 className="text-3xl md:text-4xl font-serif text-gray-900 mb-10 flex items-center gap-3">
          <span className="w-8 h-[2px] bg-[#48abbc]"></span>
          Experience India's food and drink
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {foodData.interests.map((item) => (
            <div 
              key={item.id} 
              className="relative h-[400px] group cursor-pointer overflow-hidden rounded-2xl shadow-md"
              onClick={() => setSelectedItem(item)}
            >
              <img 
                src={item.img} 
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" 
                alt={item.title} 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent group-hover:from-black/80 transition-all" />
              <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                <h4 className="text-xl md:text-2xl font-serif font-bold leading-tight text-center">
                  {item.title}
                </h4>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Back to Culture Link */}
      <div className="text-center py-12 border-t border-gray-100">
        <button
          onClick={handleCultureClick}
          className="inline-flex items-center gap-2 text-gray-500 hover:text-[#48abbc] transition-colors text-sm font-medium"
        >
          <FaArrowLeft size={12} /> Back to Culture
        </button>
      </div>
    </div>
  );
};

export default FoodSection;