import React, { useState, useEffect } from 'react';
import { foodData } from '../../../Data/ThingsToDo/Culture/FoodData'; 
import { 
  FaMapMarkerAlt, FaArrowLeft, FaRegClock, 
  FaSearch, FaRegHeart, FaGlobeAmericas, FaChevronDown 
} from 'react-icons/fa';

const FoodSection = () => {
  const [selectedItem, setSelectedItem] = useState(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [selectedItem]);

  // --- COMPONENT: UPDATED HEADER (Matching Screenshots) ---
  const Header = () => (
    <header className="w-full z-50 bg-white">
      {/* 1. Main Navigation Bar */}
      <div className="max-w-[1400px] mx-auto px-6 h-20 flex justify-between items-center">
        {/* Logo Section */}
        <div className="flex items-center gap-2 cursor-pointer">
          <span className="text-orange-600 font-bold text-xl tracking-tighter">India</span>
          <img 
            src="/path-to-your-peacock-logo.png" // Replace with your logo path
            alt="India Logo" 
            className="h-8 w-auto" 
          />
        </div>

        {/* Center Nav Links */}
        <nav className="hidden lg:flex items-center gap-8">
          {['Be inspired', 'Places to go', 'Things to do', 'Plan your trip'].map((link) => (
            <div key={link} className="group relative flex items-center gap-1 cursor-pointer">
              <span className={`text-[15px] font-medium transition-colors hover:text-orange-600 ${link === 'Things to do' ? 'text-black border-b-2 border-black pb-1' : 'text-gray-700'}`}>
                {link}
              </span>
              <FaChevronDown className="text-[10px] text-gray-400 group-hover:rotate-180 transition-transform" />
            </div>
          ))}
        </nav>

        {/* Right Side Icons */}
        <div className="flex items-center gap-6 text-xl text-gray-800">
          <FaGlobeAmericas className="cursor-pointer hover:text-orange-600 text-lg" />
          <FaRegHeart className="cursor-pointer hover:text-orange-600 text-lg" />
          <FaSearch className="cursor-pointer hover:text-orange-600 text-lg" />
        </div>
      </div>

      {/* 2. Breadcrumb Bar (The Teal Strip from image_8d2fa9.png) */}
      <div className="w-full bg-[#41abbc] py-3 shadow-inner">
        <div className="max-w-[1400px] mx-auto px-6 flex items-center gap-3 text-white text-[11px] font-bold uppercase tracking-wider">
          <span className="cursor-pointer hover:underline">Home</span>
          <span className="text-white/60 text-xs">{'>'}</span>
          <span className="cursor-pointer hover:underline">Things to do</span>
          <span className="text-white/60 text-xs">{'>'}</span>
          <span className="opacity-80">Food and drink</span>
        </div>
      </div>
    </header>
  );

  // --- VIEW: ARTICLE DETAIL PAGE ---
  if (selectedItem) {
    return (
      <div className="bg-white min-h-screen">
        <Header />
        <div className="max-w-4xl mx-auto py-12 px-6">
          <button 
            onClick={() => setSelectedItem(null)}
            className="flex items-center gap-2 text-gray-500 hover:text-black mb-8 transition-all"
          >
            <FaArrowLeft /> <span className="text-xs font-bold uppercase tracking-widest">Back to Food & Drink</span>
          </button>
          
          <h1 className="text-5xl md:text-7xl font-serif text-gray-900 mb-6">{selectedItem.title}</h1>
          <img src={selectedItem.img} className="w-full h-[500px] object-cover rounded-sm mb-10" alt="" />
          <p className="text-xl text-gray-700 leading-relaxed whitespace-pre-line">{selectedItem.details}</p>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white">
      <Header />

      {/* Main Content Area */}
      <main className="max-w-[1400px] mx-auto px-6 py-16">
        {/* Title Section matching image_8d3b09.jpg */}
        <section className="text-center mb-20 max-w-3xl mx-auto">
          <h1 className="text-6xl md:text-[80px] font-serif text-gray-900 mb-6 leading-tight">
            India's food and drink experiences
          </h1>
          <p className="text-xl text-gray-600 leading-relaxed font-light">
            Indian cuisine is all about quality ingredients, the people who produce them and the incredible landscapes in which they’re shared.
          </p>
        </section>

        {/* Section: Top Culinary Experiences */}
        <section className="mb-24">
          <h2 className="text-4xl font-serif mb-12">Top culinary experiences</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {foodData.topExperiences.map((item) => (
              <div 
                key={item.id} 
                className="group cursor-pointer"
                onClick={() => setSelectedItem(item)}
              >
                <div className="overflow-hidden rounded-sm mb-4">
                  <img 
                    src={item.img} 
                    className="w-full aspect-video object-cover group-hover:scale-105 transition-transform duration-700" 
                    alt="" 
                  />
                </div>
                <h3 className="text-2xl font-serif mb-3 group-hover:text-orange-600">{item.title}</h3>
                <p className="text-gray-600 line-clamp-3 text-sm leading-relaxed mb-4">{item.details}</p>
                <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#41abbc]">Read more</p>
              </div>
            ))}
          </div>
        </section>

        {/* Section: Experience India's Food (Vertical Cards from image_8d3b89.jpg) */}
        <section className="py-16 border-t border-gray-100">
          <h2 className="text-4xl font-serif mb-12">Experience India's food and drink</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {foodData.interests.map((int) => (
              <div 
                key={int.id} 
                className="relative h-[450px] group cursor-pointer overflow-hidden rounded-xl"
                onClick={() => setSelectedItem(int)}
              >
                <img src={int.img} className="w-full h-full object-cover" alt="" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                <div className="absolute bottom-6 left-6 right-6 text-white text-center">
                   <h4 className="text-2xl font-serif leading-tight">{int.title}</h4>
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
};

export default FoodSection;