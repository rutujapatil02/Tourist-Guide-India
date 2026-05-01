import React, { useState } from 'react';
import { FaFacebookF, FaWhatsapp, FaLink, FaSearch } from "react-icons/fa";
import { IoLocationOutline } from "react-icons/io5";

// ✅ FIXED PATH based on your update
import { visitorData } from "../../../Data/PlanTrip/PlanningTools/InformationData"; 

const InformationCenterSection = ({ onHomeClick, type = "history" }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const displayData = visitorData[type] || visitorData.history;
  
  const headerInfo = {
    history: { title: "History & Heritage", sub: "Explore the stories that shaped the nation." },
    deals: { title: "Exclusive Deals", sub: "Premium experiences at unbeatable prices." },
    updates: { title: "Daily Updates", sub: "Real-time travel advisories and news." }
  };

  return (
    <div className="w-full bg-white min-h-screen pb-20">
      <div className="w-full bg-[#3296a8] py-3 px-10 flex gap-2 text-white text-sm">
        <span onClick={onHomeClick} className="cursor-pointer hover:underline">Home</span>
        <span>&gt;</span>
        <span className="font-bold">{headerInfo[type].title}</span>
      </div>

      <div className="w-full h-[40vh] relative">
        <img src={displayData[0]?.img} className="w-full h-full object-cover" alt="Hero" />
        <div className="absolute inset-0 bg-black/30" />
      </div>

      <div className="max-w-7xl mx-auto px-6 -mt-20 relative z-10">
        <div className="bg-white rounded-t-[3.5rem] shadow-2xl p-10 lg:p-16">
          <div className="text-center mb-10">
            <h1 className="text-5xl font-serif italic font-bold mb-3">{headerInfo[type].title}</h1>
            <p className="text-gray-400 italic">{headerInfo[type].sub}</p>
          </div>

          {/* Search bar */}
          <div className="max-w-2xl mx-auto mb-16 flex items-center bg-gray-50 border rounded-full p-2">
            <div className="pl-4 text-gray-400"><IoLocationOutline size={22} /></div>
            <input 
              type="text" 
              placeholder={`Search ${type}...`} 
              className="w-full py-3 px-4 bg-transparent outline-none"
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <button className="bg-black text-white p-4 rounded-full"><FaSearch /></button>
          </div>

          {/* Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {displayData.map((item) => (
              <div key={item.id} className="group cursor-pointer">
                <div className="aspect-[3/4] rounded-[2rem] overflow-hidden mb-4 shadow-sm relative">
                  <img src={item.img} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" alt={item.name} />
                  {item.badge && (
                    <div className="absolute top-4 left-4 bg-yellow-400 text-[10px] font-black px-2 py-1 rounded">
                      {item.badge}
                    </div>
                  )}
                </div>
                <h3 className="text-xl font-serif italic font-bold text-gray-800 leading-tight">{item.name}</h3>
                <p className="text-[10px] text-[#3296a8] mt-2 uppercase tracking-widest font-bold">{item.location}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default InformationCenterSection;