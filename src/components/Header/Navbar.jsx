import React, { useState } from 'react';
import { FaSearch, FaRegHeart, FaGlobeAmericas, FaChevronDown } from 'react-icons/fa';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeCategory, setActiveCategory] = useState('Cities');

  const categories = ["Cities", "States", "Beaches", "Islands", "Country", "Outback", "Nature"];

  const locations = [
    { name: "Sydney", img: "https://images.unsplash.com/photo-1506973035872-a4ec16b8e8d9?w=400" },
    { name: "Melbourne", img: "https://images.unsplash.com/photo-1514395462725-fb4566210144?w=400" },
    { name: "Brisbane", img: "https://images.unsplash.com/photo-1554110397-9bac083977c6?w=400" },
    { name: "Perth", img: "https://images.unsplash.com/photo-1532054230113-d3455325776a?w=400" },
    { name: "Gold Coast", img: "https://images.unsplash.com/photo-1549488344-1f9b8d2bd1f3?w=400" },
    { name: "Adelaide", img: "https://images.unsplash.com/photo-1552528173-04b316f73129?w=400" },
    { name: "Cairns", img: "https://images.unsplash.com/photo-1544073867-27b03862660d?w=400" },
    { name: "Darwin", img: "https://images.unsplash.com/photo-1548567104-368735515223?w=400" },
    { name: "Hobart", img: "https://images.unsplash.com/photo-1524343825501-570a09e0aa75?w=400" },
    { name: "Canberra", img: "https://images.unsplash.com/photo-1510414842594-a61c69b5ae57?w=400" },
  ];

  return (
    <header className="w-full bg-white border-b border-gray-200 relative font-sans">
      {/* Top Navigation Bar */}
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <div className="flex items-center gap-10">
          {/* Brand Logo Placeholder */}
          <div className="font-bold text-2xl text-orange-600 flex items-center gap-2">
            Australia <span className="text-sm text-gray-400 font-normal">| Explore</span>
          </div>

          {/* Nav Links */}
          <nav className="hidden md:flex items-center space-x-6 text-[15px] font-medium text-gray-700">
            <button className="hover:text-black">Be inspired</button>
            <button 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className={`flex items-center gap-1 transition-colors ${isMenuOpen ? 'text-black border-b-2 border-black h-20' : 'hover:text-black'}`}
            >
              Places to go <FaChevronDown size={10} className={isMenuOpen ? 'rotate-180' : ''} />
            </button>
            <button className="hover:text-black">Things to do</button>
            <button className="hover:text-black">Plan your trip</button>
          </nav>
        </div>

        {/* Right Icons */}
        <div className="flex items-center space-x-5 text-gray-600">
          <FaGlobeAmericas size={20} className="cursor-pointer hover:text-black" />
          <FaRegHeart size={20} className="cursor-pointer hover:text-black" />
          <FaSearch size={20} className="cursor-pointer hover:text-black" />
        </div>
      </div>

      {/* --- DROPDOWN CONTENT (MEGA MENU) --- */}
      {isMenuOpen && (
        <div className="absolute top-20 left-0 w-full bg-white shadow-2xl z-[100] border-t border-gray-100 animate-in fade-in slide-in-from-top-2 duration-300">
          <div className="max-w-7xl mx-auto py-10 px-6">
            
            {/* 1. Category Filter Pills */}
            <div className="flex flex-wrap justify-center gap-3 mb-12">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`px-5 py-2 rounded-full text-sm font-bold transition-all border ${
                    activeCategory === cat 
                      ? 'bg-black text-white border-black' 
                      : 'bg-gray-100 text-gray-600 border-transparent hover:bg-gray-200'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>

            {/* 2. Location Cards Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
              {locations.map((item, index) => (
                <div key={index} className="group cursor-pointer">
                  {/* Image Container */}
                  <div className="relative h-40 w-full overflow-hidden rounded-xl bg-gray-200">
                    <img 
                      src={item.img} 
                      alt={item.name} 
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                  </div>
                  {/* Label */}
                  <div className="mt-2 text-center py-4 bg-gray-50 rounded-b-xl group-hover:bg-gray-100 transition-colors">
                    <span className="font-bold text-gray-900">{item.name}</span>
                  </div>
                </div>
              ))}
            </div>

            {/* 3. Footer of Dropdown */}
            <div className="mt-10 pt-6 border-t border-gray-100 text-center">
              <button className="text-sm font-bold text-gray-800 hover:text-orange-600 underline underline-offset-4">
                View all {activeCategory.toLowerCase()} in Australia
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;