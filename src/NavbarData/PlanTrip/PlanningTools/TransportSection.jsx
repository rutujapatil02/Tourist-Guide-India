import React, { useState, useMemo } from "react";
import { FaFacebookF, FaWhatsapp, FaLink, FaSearch } from "react-icons/fa";
import { IoLocationOutline } from "react-icons/io5";
import { transportData } from "../../../Data/PlanTrip/PlanningTools/TransportData";

const TransportSection = ({ onHomeClick }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");

  const scroll = (id, direction) => {
    const el = document.getElementById(id);
    const scrollAmount = direction === "left" ? -480 : 480;
    el.scrollBy({ left: scrollAmount, behavior: "smooth" });
  };

  const filteredTransport = useMemo(() => {
    return transportData.transportList.filter((item) => {
      const matchesSearch = 
        item.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
        item.location.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesCategory = selectedCategory === "All" || item.category === selectedCategory;
      return matchesSearch && matchesCategory;
    });
  }, [searchTerm, selectedCategory]);

  return (
    <div className="w-full bg-white min-h-screen font-sans pb-20">
      {/* 🔹 BREADCRUMBS */}
      <div className="w-full bg-[#3296a8] py-3 px-10 flex gap-2 text-white text-sm">
        <span onClick={onHomeClick} className="cursor-pointer hover:underline">Home</span>
        <span>&gt;</span>
        <span>Plan your trip</span>
        <span>&gt;</span>
        <span className="font-bold">Find transport</span>
      </div>

      {/* 🔹 HERO IMAGE */}
      <div className="w-full h-[60vh] relative">
        <img src={transportData.heroImg} className="w-full h-full object-cover" alt="Transport Hero" />
      </div>

      {/* 🔹 MAIN OVERLAY CARD */}
      <div className="max-w-7xl mx-auto px-6 -mt-32 relative z-10">
        <div className="bg-white rounded-t-[3rem] shadow-2xl relative overflow-hidden border-t border-gray-100">
          
          {/* 🔹 SOCIAL ICONS */}
          <div className="absolute top-8 right-10 flex gap-3 z-20">
            <button className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center text-gray-500 hover:bg-[#1877F2] hover:text-white transition-all">
              <FaFacebookF size={14} />
            </button>
            <button className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center text-gray-500 hover:bg-[#25D366] hover:text-white transition-all">
              <FaWhatsapp size={18} />
            </button>
            <button className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center text-gray-500 hover:bg-black hover:text-white transition-all">
              <FaLink size={16} />
            </button>
          </div>

          <div className="py-16 px-6 md:px-12 text-center">
            <h1 className="text-5xl font-serif italic font-bold mb-4 text-gray-900">{transportData.title}</h1>
            <p className="text-gray-400 mb-10 italic">{transportData.subtitle}</p>

            {/* 🔹 SEARCH */}
            <div className="max-w-2xl mx-auto mb-12">
              <div className="flex items-center bg-gray-50 border border-gray-100 rounded-full p-2 shadow-sm focus-within:bg-white focus-within:shadow-md transition-all">
                <div className="pl-4 pr-2 text-gray-400"><IoLocationOutline size={24} /></div>
                <input
                  type="text"
                  placeholder="Where do you want to go?"
                  className="w-full py-3 px-2 bg-transparent outline-none text-gray-700 text-lg"
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
                <button className="bg-black text-white p-4 rounded-full"><FaSearch size={16} /></button>
              </div>
            </div>

            {/* 🔹 CATEGORY SELECTORS */}
            <div className="flex items-center justify-start lg:justify-center gap-4 overflow-x-auto no-scrollbar pb-10 px-4">
              {transportData.categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`flex items-center gap-3 px-6 py-2.5 rounded-full border text-sm font-bold transition-all whitespace-nowrap ${
                    selectedCategory === cat ? "bg-black text-white border-black" : "bg-white text-gray-500 border-gray-200"
                  }`}
                >
                  <div className={`w-3.5 h-3.5 border rounded-sm flex items-center justify-center ${selectedCategory === cat ? "bg-white border-white" : "border-gray-300"}`}>
                    {selectedCategory === cat && <div className="w-2 h-2 bg-black rounded-sm" />}
                  </div>
                  {cat.toUpperCase()}
                </button>
              ))}
            </div>

            {/* 🔹 HORIZONTAL SLIDER */}
            <div className="text-left py-6">
              <div className="flex justify-between items-center mb-8 px-4">
                <h2 className="text-3xl font-serif italic font-bold text-gray-900">
                  Everything in {selectedCategory === "All" ? "India" : selectedCategory}
                </h2>
                <div className="flex gap-2">
                  <button onClick={() => scroll("trans-scroll", "left")} className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center hover:bg-gray-50">❮</button>
                  <button onClick={() => scroll("trans-scroll", "right")} className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center hover:bg-gray-50">❯</button>
                </div>
              </div>

              <div id="trans-scroll" className="flex gap-6 overflow-x-auto no-scrollbar scroll-smooth px-4">
                {filteredTransport.map((item) => (
                  <div key={item.id} className="min-w-[60px] group cursor-pointer flex-shrink-0">
                    <div className="aspect-[3/4] rounded-[2rem] overflow-hidden mb-4 shadow-sm border border-gray-100">
                      <img src={item.image} alt={item.name} className="w-[400px] h-[500px] object-cover transition-transform duration-700 group-hover:scale-105" />
                    </div>
                    <h3 className="text-xl font-serif italic font-bold text-gray-800 leading-tight group-hover:text-black transition-colors">
                      {item.name}
                    </h3>
                    <p className="text-[10px] text-[#3296a8] mt-2 uppercase tracking-[0.2em] font-bold">
                      {item.location}
                    </p>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default TransportSection;