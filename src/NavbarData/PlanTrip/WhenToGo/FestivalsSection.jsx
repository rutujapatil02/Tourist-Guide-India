import React, { useState, useMemo } from 'react';
import { festivalsData } from '../../../Data/PlanTrip/WhenToGo/FestivalsData';
import { FaSearch } from "react-icons/fa";

const FestivalsSection = ({ onBack }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedSeason, setSelectedSeason] = useState("All");
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [priceRange, setPriceRange] = useState(1000);
  const [visibleCount, setVisibleCount] = useState(12);

  const toggleCategory = (cat) => {
    setSelectedCategories(prev =>
      prev.includes(cat) ? prev.filter(c => c !== cat) : [...prev, cat]
    );
  };

  const filteredEvents = useMemo(() => {
    return festivalsData.events.filter(event => {
      const matchesSearch = event.name.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesSeason = selectedSeason === "All" || event.season === selectedSeason;
      const matchesCategory = selectedCategories.length === 0 || selectedCategories.includes(event.category);
      const matchesPrice = event.price <= priceRange;
      return matchesSearch && matchesSeason && matchesCategory && matchesPrice;
    });
  }, [searchTerm, selectedSeason, selectedCategories, priceRange]);

  return (
    <div className="bg-[#f8f9fa] min-h-screen">

      {/* ✅ Breadcrumb with functionality */}
      <div className="bg-[#4fb0ba] text-white py-3 px-6 md:px-12 text-sm relative z-30">
        <div className="max-w-[1600px] mx-auto flex items-center gap-2">
          <span onClick={onBack} className="cursor-pointer hover:underline">
            Home
          </span>
          <span>&gt;</span>
          <span onClick={onBack} className="cursor-pointer hover:underline">
            Plan your trip
          </span>
          <span>&gt;</span>
          <span className="font-medium text-white/90">
            Major Events Calendar
          </span>
        </div>
      </div>

      {/* HERO */}
      <div className="relative h-[750px] overflow-hidden">
        <img src={festivalsData.heroImage} className="w-full h-full object-cover" alt="Hero" />
        <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
          <h1 className="text-5xl md:text-7xl font-serif font-bold text-white text-center">
            Major events calendar
          </h1>
        </div>
      </div>

      {/* ✅ OVERLAPPING DIV (NO CURVE, FULL WIDTH) */}
      <div className="max-w-[1600px] mx-auto px-6 -mt-32 relative z-20 pb-20">
        <div className="bg-white shadow-2xl p-6 md:p-12">

          {/* Search */}
          <div className="max-w-4xl mx-auto mb-16 text-center">
            <h2 className="text-3xl md:text-4xl font-serif mb-8 text-gray-800">
              Search all events and festivals
            </h2>

            <div className="relative">
              <input
                type="text"
                placeholder="Search for..."
                className="w-full py-6 px-10 border border-gray-200 outline-none text-xl bg-gray-50"
                onChange={(e) => setSearchTerm(e.target.value)}
              />
              <FaSearch className="absolute right-6 top-6 text-[#4fb0ba] text-xl" />
            </div>

            <div className="mt-6">
              <span className="bg-black text-white px-5 py-2 text-sm font-bold">
                Search Results {filteredEvents.length}
              </span>
            </div>
          </div>

          <div className="flex flex-col lg:flex-row gap-12">

            {/* Sidebar */}
            <aside className="w-full lg:w-1/4 space-y-12">

              {/* Price */}
              <div>
                <h4 className="font-bold text-gray-900 mb-6 text-xl border-b pb-2">
                  Price Range
                </h4>
                <input
                  type="range"
                  min="0"
                  max="1000"
                  step="50"
                  value={priceRange}
                  onChange={(e) => setPriceRange(parseInt(e.target.value))}
                  className="w-full"
                />
                <div className="flex justify-between text-sm mt-4">
                  <span>Free</span>
                  <span className="text-[#4fb0ba] font-bold">AU${priceRange}</span>
                </div>
              </div>

              {/* Category */}
              <div>
                <h4 className="font-bold text-gray-900 mb-6 text-xl border-b pb-2">
                  Category
                </h4>
                {["Business Event","Community Event","Food and Wine","Markets"].map(cat => (
                  <label key={cat} className="flex items-center gap-3 mb-3 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={selectedCategories.includes(cat)}
                      onChange={() => toggleCategory(cat)}
                    />
                    <span>{cat}</span>
                  </label>
                ))}
              </div>

              {/* Season */}
              <div>
                <h4 className="font-bold text-gray-900 mb-6 text-xl border-b pb-2">
                  Seasons
                </h4>
                {["All","Spring","Summer","Autumn","Winter"].map(s => (
                  <label key={s} className="flex items-center gap-3 mb-3 cursor-pointer">
                    <input
                      type="radio"
                      name="season"
                      checked={selectedSeason === s}
                      onChange={() => setSelectedSeason(s)}
                    />
                    <span>{s}</span>
                  </label>
                ))}
              </div>

            </aside>

            {/* Events */}
            <main className="w-full lg:w-3/4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                {filteredEvents.slice(0, visibleCount).map(event => (
                  <div key={event.id} className="border-b pb-10">
                    <div className="aspect-[16/10] overflow-hidden mb-4">
                      <img src={event.image} className="w-full h-full object-cover" />
                    </div>
                    <h3 className="text-xl font-bold">{event.name}</h3>
                    <p className="text-gray-500">{event.date} • {event.location}</p>
                  </div>
                ))}
              </div>

              {visibleCount < filteredEvents.length && (
                <div className="mt-10 text-center">
                  <button
                    onClick={() => setVisibleCount(prev => prev + 12)}
                    className="px-10 py-3 border font-bold"
                  >
                    Load more
                  </button>
                </div>
              )}
            </main>

          </div>
        </div>
      </div>
    </div>
  );
};

export default FestivalsSection;