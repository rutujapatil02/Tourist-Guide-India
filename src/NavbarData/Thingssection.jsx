import React, { useState } from 'react';
import { natureData } from '../Data/NatureData';

import SustainableTravelSection from './SustainableTravelSection';
import RelaxationSection from './RelaxationSection';
import FamilySection from './FamilySection';
import BackpackingSection from './BackpackingSection';

import AboriginalSection from './ThingsToDo/Culture/AboriginalSection';
import ArtsSection from './ThingsToDo/Culture/ArtsSection';
import FestivalSection from './ThingsToDo/Culture/FestivalSection';
import FoodSection from './ThingsToDo/Culture/FoodSection';
import SkydivingSection from './ThingsToDo/Adventure/SkydivingSection';
import SurfingSection from './ThingsToDo/Adventure/SurfingSection';
import HikingSection from './ThingsToDo/Adventure/HikingSection';

import WildlifeSafarisSection from './ThingsToDo/Nature/WildlifeSafarisSection';
import MunnarGardensSection from './ThingsToDo/Nature/MunnarGardensSection';
import SpitiValleySection from './ThingsToDo/Nature/SpitiValleySection';
import SundarbansSection from './ThingsToDo/Nature/SundarbansSection';

import EcoStaysSection from './ThingsToDo/Sustainable/Eco-staysSection';
import OrganicSection from './ThingsToDo/Sustainable/OrganicSection';
import LocalCraftSection from './ThingsToDo/Sustainable/LocalCraftSection';
import CyclingSection from './ThingsToDo/Sustainable/CyclingSection';

import SubRelaxationSection from './ThingsToDo/Relaxation/SubRelaxationSection';
import SubFamilySection from './ThingsToDo/Family/SubFamilySection';
import SubBagpackingSection from './ThingsToDo/Bagpacking/SubbagpackingSection';

const categories = ["Culture", "Adventure", "Nature", "Sustainable travel", "Relaxation", "Family", "Backpacking"];

const cultureSubCategories = [
  { name: "Aboriginal experiences", id: "aboriginal", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTrFYmU_BhnyZ6jwyZLrbAbnZeaBv28qZnJbw&s" },
  { name: "Arts and culture",        id: "arts",       img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQgrMAcfP5TAm091lpl0k9bxlxZHWAsxJ9ZGg&s" },
  { name: "Festivals and events",    id: "festivals",  img: "https://images.unsplash.com/photo-1533900298318-6b8da08a523e?auto=format&fit=crop&q=80&w=800" },
  { name: "Food and drink",          id: "food",       img: "https://images.unsplash.com/photo-1505253716362-afaea1d3d1af?auto=format&fit=crop&q=80&w=800" }
];

const adventureSubCategories = [
  { name: "Skydiving", id: "skydiving", img: "https://images.unsplash.com/photo-1521017432531-fbd92d768814?q=80&w=800" },
  { name: "Surfing",   id: "surfing",   img: "https://images.unsplash.com/photo-1502680390469-be75c86b636f?q=80&w=800" },
  { name: "Hiking",    id: "hiking",    img: "https://images.unsplash.com/photo-1551632432-c736ec6c6dc4?q=80&w=800" }
];

const sustainableSubCategories = [
  { name: "Eco-stays and Homestays",   id: "eco-stays",   img: "https://images.unsplash.com/photo-1596402184320-417e7178b2cd?w=800&q=80" },
  { name: "Organic Farm Tours",        id: "organic",     img: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=800&q=80" },
  { name: "Local Craft Workshops",     id: "local-craft", img: "https://images.unsplash.com/photo-1602173574767-37ac01994b2a?w=800&q=80" },
  { name: "Cycling and Walking Tours", id: "cycling",     img: "https://images.unsplash.com/photo-1541625602330-2277a4c46182?w=800&q=80" }
];

const ThingsSection = () => {
  const [activeTab, setActiveTab] = useState("Nature");
  const [activeSubPage, setActiveSubPage] = useState(null);

  // Shared selected category state for all 3 sections
  const [selectedRelaxationId, setSelectedRelaxationId]     = useState(null);
  const [selectedFamilyCategory, setSelectedFamilyCategory] = useState(null);
  const [selectedBackpackingCategory, setSelectedBackpackingCategory] = useState(null);

  const handleBackToMain = () => {
    setActiveSubPage(null);
    setSelectedRelaxationId(null);
    setSelectedFamilyCategory(null);
    setSelectedBackpackingCategory(null);
    window.scrollTo(0, 0);
  };

  // ─── SUB-PAGE EARLY RETURNS (no tab bar shown) ────────────────────────────

  if (activeSubPage === "relaxation-detail")
    return <SubRelaxationSection selectedCategory={selectedRelaxationId} onBack={handleBackToMain} />;

  if (activeSubPage === "family-detail")
    return <SubFamilySection category={selectedFamilyCategory} onBack={handleBackToMain} />;

  if (activeSubPage === "backpacking-detail")
    return <SubBagpackingSection category={selectedBackpackingCategory} onBack={handleBackToMain} />;

  if (activeSubPage === "wildlife")    return <WildlifeSafarisSection onBack={handleBackToMain} />;
  if (activeSubPage === "munnar")      return <MunnarGardensSection onBack={handleBackToMain} />;
  if (activeSubPage === "spiti")       return <SpitiValleySection onBack={handleBackToMain} />;
  if (activeSubPage === "sundarbans")  return <SundarbansSection onBack={handleBackToMain} />;

  if (activeSubPage === "aboriginal")  return <AboriginalSection onBackToCulture={handleBackToMain} />;
  if (activeSubPage === "arts")        return <ArtsSection onBackToCulture={handleBackToMain} />;
  if (activeSubPage === "festivals")   return <FestivalSection onBackToCulture={handleBackToMain} />;
  if (activeSubPage === "food")        return <FoodSection onBackToMain={handleBackToMain} />;

  if (activeSubPage === "skydiving")   return <SkydivingSection onBack={handleBackToMain} />;
  if (activeSubPage === "surfing")     return <SurfingSection onBack={handleBackToMain} />;
  if (activeSubPage === "hiking")      return <HikingSection onBack={handleBackToMain} />;

  if (activeSubPage === "eco-stays")   return <EcoStaysSection onBack={handleBackToMain} />;
  if (activeSubPage === "organic")     return <OrganicSection onBack={handleBackToMain} />;
  if (activeSubPage === "local-craft") return <LocalCraftSection onBack={handleBackToMain} />;
  if (activeSubPage === "cycling")     return <CyclingSection onBack={handleBackToMain} />;

  // ─── MAIN DROPDOWN VIEW ───────────────────────────────────────────────────
  return (
    <div className="w-full bg-white border-t border-gray-100 shadow-2xl absolute left-0 z-50 animate-in fade-in slide-in-from-top-4 duration-300">
      <div className="max-w-7xl mx-auto py-10 px-6">

        {/* Tab Navigation */}
        <div className="flex flex-wrap justify-center gap-3 mb-10">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => {
                setActiveTab(cat);
                setActiveSubPage(null);
              }}
              className={`px-6 py-2 rounded-full text-sm font-bold transition-all border ${
                activeTab === cat
                  ? 'bg-black text-white border-black shadow-lg'
                  : 'bg-gray-100 text-gray-500 border-transparent hover:bg-gray-200'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Content Grid */}
        <div className="min-h-[400px]">

          {activeTab === "Culture" && (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 animate-in fade-in duration-500">
              {cultureSubCategories.map((sub) => (
                <div key={sub.id} className="group cursor-pointer" onClick={() => setActiveSubPage(sub.id)}>
                  <div className="relative aspect-[4/3] overflow-hidden rounded-xl bg-gray-100 border border-gray-100 shadow-sm">
                    <img src={sub.img} alt={sub.name} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                  </div>
                  <div className="mt-4 text-center">
                    <span className="text-lg font-bold text-gray-900 group-hover:text-[#3BB0C1] transition-colors uppercase tracking-widest">
                      {sub.name}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          )}

          {activeTab === "Adventure" && (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 animate-in fade-in duration-500">
              {adventureSubCategories.map((sub) => (
                <div key={sub.id} className="group cursor-pointer" onClick={() => setActiveSubPage(sub.id)}>
                  <div className="relative aspect-[4/3] overflow-hidden rounded-xl bg-gray-100 border border-gray-100 shadow-sm">
                    <img src={sub.img} alt={sub.name} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                  </div>
                  <div className="mt-4 text-center">
                    <span className="text-lg font-bold text-gray-900 group-hover:text-[#3BB0C1] transition-colors uppercase tracking-widest">
                      {sub.name}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          )}

          {activeTab === "Nature" && (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 animate-in fade-in duration-500">
              {natureData.slice(0, 4).map((item, index) => (
                <div
                  key={item.id}
                  className="group cursor-pointer"
                  onClick={() => {
                    if (index === 0) setActiveSubPage("wildlife");
                    else if (index === 1) setActiveSubPage("munnar");
                    else if (index === 2) setActiveSubPage("spiti");
                    else if (index === 3) setActiveSubPage("sundarbans");
                  }}
                >
                  <div className="relative aspect-[4/3] overflow-hidden rounded-xl bg-gray-100 border border-gray-100 shadow-sm">
                    <img src={item.image} alt={item.name} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                  </div>
                  <div className="mt-4 text-center bg-gray-50 py-4 rounded-b-xl border-x border-b border-gray-100 group-hover:border-[#3BB0C1] transition-all">
                    <span className="text-sm font-bold text-gray-900 group-hover:text-[#3BB0C1] uppercase tracking-widest">
                      {index === 0 ? "Wildlife Safaris" : item.name}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          )}

          {activeTab === "Sustainable travel" && (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 animate-in fade-in duration-500">
              {sustainableSubCategories.map((sub) => (
                <div key={sub.id} className="group cursor-pointer" onClick={() => setActiveSubPage(sub.id)}>
                  <div className="relative aspect-[4/3] overflow-hidden rounded-xl bg-gray-100 border border-gray-100 shadow-sm">
                    <img src={sub.img} alt={sub.name} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                  </div>
                  <div className="mt-4 text-center bg-gray-50 py-4 rounded-b-xl border-x border-b border-gray-100 group-hover:border-[#3BB0C1] transition-all">
                    <span className="text-sm font-bold text-gray-900 group-hover:text-[#3BB0C1] uppercase tracking-widest">
                      {sub.name}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          )}

          {activeTab === "Relaxation" && (
            <RelaxationSection
              onSelect={(name) => {
                setSelectedRelaxationId(name);
                setActiveSubPage("relaxation-detail");
              }}
            />
          )}

          {activeTab === "Family" && (
            <FamilySection
              onSelect={(name) => {
                setSelectedFamilyCategory(name);
                setActiveSubPage("family-detail");
              }}
            />
          )}

          {activeTab === "Backpacking" && (
            <BackpackingSection
              onSelect={(name) => {
                setSelectedBackpackingCategory(name);
                setActiveSubPage("backpacking-detail");
              }}
            />
          )}

        </div>

        {/* Footer Link */}
        <div className="mt-16 text-center border-t border-gray-100 pt-8">
          <button className="text-[12px] font-bold text-gray-900 border-b-2 border-black pb-1 hover:text-[#3BB0C1] hover:border-[#3BB0C1] transition-all uppercase tracking-widest">
            View more {activeTab.toLowerCase()} in India
          </button>
        </div>

      </div>
    </div>
  );
};

export default ThingsSection;