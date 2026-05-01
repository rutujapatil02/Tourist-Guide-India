import React, { useState, useMemo } from "react";
import { FaSearch } from "react-icons/fa";
import { IoLocationOutline } from "react-icons/io5";
import { toursData } from "../../../Data/PlanTrip/PlanningTools/ToursData";

const ToursSection = ({ onHomeClick }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");

  const scroll = (id, direction) => {
    const el = document.getElementById(id);
    const scrollAmount = direction === "left" ? -400 : 400;
    el.scrollBy({ left: scrollAmount, behavior: "smooth" });
  };

  const filteredTours = useMemo(() => {
    return toursData.tourList.filter((tour) => {
      const matchesSearch = 
        tour.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
        tour.location.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesCategory = selectedCategory === "All" || tour.category === selectedCategory;
      return matchesSearch && matchesCategory;
    });
  }, [searchTerm, selectedCategory]);

  return (
    <div className="w-full bg-white min-h-screen font-sans">
      {/* 🔹 BREADCRUMBS */}
      <div className="w-full bg-[#3296a8] py-3 px-10 flex gap-2 text-white text-sm">
        <span onClick={onHomeClick} className="cursor-pointer hover:underline">Home</span>
        <span>&gt;</span>
        <span>Plan your trip</span>
        <span>&gt;</span>
        <span className="font-bold">Find tours</span>
      </div>

      {/* 🔹 HERO SECTION */}
      <div className="w-full h-[120vh] relative">
        <img src={toursData.heroImg} className="w-full h-full object-cover" alt="Tours Hero" />
      </div>

      {/* 🔹 MAIN OVERLAY BOX */}
      <div className="max-w-9xl mx-auto px-6 -mt-32 relative z-10 pb-20">
        <div className="bg-white rounded-t-[3rem] shadow-2xl overflow-hidden border-t border-gray-100">
          
          <div className="py-16 px-10 text-center">
            <h1 className="text-5xl font-serif italic font-bold mb-4 text-gray-900">{toursData.title}</h1>
            <p className="text-gray-400 mb-8 italic">{toursData.subtitle}</p>
            <p className="text-gray-600 leading-relaxed mb-10 max-w-3xl mx-auto">
              {toursData.description}
            </p>

            {/* SEARCH BAR */}
            <div className="max-w-2xl mx-auto mb-12">
              <div className="flex items-center bg-white border border-gray-200 rounded-full p-2 shadow-sm">
                <div className="pl-4 pr-2 text-gray-400"><IoLocationOutline size={24} /></div>
                <input
                  type="text"
                  placeholder="Search tours, activities or cities..."
                  className="w-full py-3 px-2 outline-none text-gray-700 text-lg"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
                <button className="bg-black text-white p-4 rounded-full"><FaSearch size={16} /></button>
              </div>
            </div>

            {/* 🔹 CATEGORY CHECKBOX FILTERS */}
            <div className="flex items-center justify-start md:justify-center gap-4 overflow-x-auto no-scrollbar pb-10 px-2">
              {toursData.categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`flex items-center gap-3 px-6 py-2.5 rounded-full border text-sm font-bold transition-all whitespace-nowrap ${
                    selectedCategory === cat 
                    ? "bg-black text-white border-black" 
                    : "bg-white text-gray-500 border-gray-200"
                  }`}
                >
                  <div className={`w-4 h-4 border rounded flex items-center justify-center ${selectedCategory === cat ? "bg-white border-white" : "border-gray-300"}`}>
                    {selectedCategory === cat && <div className="w-2 h-2 bg-black rounded-sm" />}
                  </div>
                  {cat.toUpperCase()}
                </button>
              ))}
            </div>

            {/* 🔹 SCROLLABLE EVERYTHING SECTION */}
            <div className="text-left py-10">
              <div className="flex justify-between items-center mb-10 px-4">
                <h2 className="text-3xl font-serif italic font-bold text-gray-900">
                  Everything in {selectedCategory === "All" ? "India" : selectedCategory}
                </h2>
                <div className="flex gap-2">
                  <button onClick={() => scroll("tour-slider", "left")} className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center hover:bg-gray-50 transition-colors">❮</button>
                  <button onClick={() => scroll("tour-slider", "right")} className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center hover:bg-gray-50 transition-colors">❯</button>
                </div>
              </div>

              <div id="tour-slider" className="flex gap-8 overflow-x-auto no-scrollbar scroll-smooth px-4">
                {filteredTours.length > 0 ? (
                  filteredTours.map((tour) => (
                    <div key={tour.id} className="min-w-[300px] max-w-[300px] group cursor-pointer flex-shrink-0">
                      <div className="relative aspect-[4/5] rounded-[2.5rem] overflow-hidden mb-5 shadow-sm">
                        <img 
                          src={tour.image} 
                          alt={tour.name} 
                          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
                        />
                      </div>
                      <h3 className="text-2xl font-serif italic font-bold text-gray-800 leading-tight group-hover:border-b-2 border-black inline transition-all">
                        {tour.name}
                      </h3>
                      <p className="text-xs text-gray-400 mt-2 uppercase tracking-[0.2em] font-semibold">{tour.location}</p>
                    </div>
                  ))
                ) : (
                  <div className="w-full text-center py-20 text-gray-400 italic">No tours match your search.</div>
                )}
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default ToursSection;