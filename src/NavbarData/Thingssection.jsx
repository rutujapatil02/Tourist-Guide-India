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
  { name: "Aboriginal experiences", id: "aboriginal", img: "https://plus.unsplash.com/premium_photo-1724695601024-26c417347557?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
  { name: "Arts and culture",        id: "arts",       img: "https://media.istockphoto.com/id/1639086148/photo/odissi-pose-photoshoot.webp?a=1&b=1&s=612x612&w=0&k=20&c=r82SC40QdprJesvtqSd6wKvv258rO7lLulRhzPOQQow=" },
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

/* ── Reusable card matching your PlanSection style ── */
const PlanCard = ({ img, name, onClick }) => (
  <div className="group cursor-pointer" onClick={onClick}>
    <div className="relative aspect-[3/2] w-full overflow-hidden rounded-xl bg-gray-100">
      <img
        src={img}
        alt={name}
        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
      />
    </div>
    <div className="mt-2 text-center py-4 bg-gray-50 rounded-b-xl">
      <span className="font-bold text-gray-900">{name}</span>
    </div>
  </div>
);

const ThingsSection = () => {
  const [activeTab, setActiveTab] = useState("Nature");
  const [activeSubPage, setActiveSubPage] = useState(null);

  const [selectedRelaxationId, setSelectedRelaxationId]         = useState(null);
  const [selectedFamilyCategory, setSelectedFamilyCategory]     = useState(null);
  const [selectedBackpackingCategory, setSelectedBackpackingCategory] = useState(null);

  const handleBackToMain = () => {
    setActiveSubPage(null);
    setSelectedRelaxationId(null);
    setSelectedFamilyCategory(null);
    setSelectedBackpackingCategory(null);
    window.scrollTo(0, 0);
  };

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

  return (
    <div className="w-full bg-white border-t border-gray-100 shadow-2xl absolute left-0 z-50 animate-in fade-in slide-in-from-top-4 duration-300">
      <div className="max-w-7xl mx-auto py-10 px-6">

        {/* Tab Navigation */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => { setActiveTab(cat); setActiveSubPage(null); }}
              className={`px-6 py-2.5 rounded-full text-sm font-bold transition-all border ${
                activeTab === cat
                  ? 'bg-black text-white border-black shadow-md'
                  : 'bg-gray-50 text-gray-600 border-gray-200 hover:bg-gray-100 hover:border-gray-300'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="min-h-[400px]">

          {/* Culture */}
          {activeTab === "Culture" && (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 animate-in fade-in duration-500">
              {cultureSubCategories.map((sub) => (
                <PlanCard key={sub.id} img={sub.img} name={sub.name} onClick={() => setActiveSubPage(sub.id)} />
              ))}
            </div>
          )}

          {/* Adventure */}
          {activeTab === "Adventure" && (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 animate-in fade-in duration-500">
              {adventureSubCategories.map((sub) => (
                <PlanCard key={sub.id} img={sub.img} name={sub.name} onClick={() => setActiveSubPage(sub.id)} />
              ))}
            </div>
          )}

          {/* Nature */}
          {activeTab === "Nature" && (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 animate-in fade-in duration-500">
              {natureData.slice(0, 4).map((item, index) => {
                const subPageIds = ["wildlife", "munnar", "spiti", "sundarbans"];
                const labels     = ["Wildlife Safaris", item.name, item.name, item.name];
                return (
                  <PlanCard
                    key={item.id}
                    img={item.image}
                    name={index === 0 ? "Wildlife Safaris" : item.name}
                    onClick={() => setActiveSubPage(subPageIds[index])}
                  />
                );
              })}
            </div>
          )}

          {/* Sustainable Travel */}
          {activeTab === "Sustainable travel" && (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 animate-in fade-in duration-500">
              {sustainableSubCategories.map((sub) => (
                <PlanCard key={sub.id} img={sub.img} name={sub.name} onClick={() => setActiveSubPage(sub.id)} />
              ))}
            </div>
          )}

          {/* Relaxation */}
          {activeTab === "Relaxation" && (
            <RelaxationSection
              onSelect={(name) => { setSelectedRelaxationId(name); setActiveSubPage("relaxation-detail"); }}
            />
          )}

          {/* Family */}
          {activeTab === "Family" && (
            <FamilySection
              onSelect={(name) => { setSelectedFamilyCategory(name); setActiveSubPage("family-detail"); }}
            />
          )}

          {/* Backpacking */}
          {activeTab === "Backpacking" && (
            <BackpackingSection
              onSelect={(name) => { setSelectedBackpackingCategory(name); setActiveSubPage("backpacking-detail"); }}
            />
          )}
        </div>

        {/* Footer Link */}
        <div className="mt-16 text-center border-t border-gray-100 pt-8">
          <button className="text-xs font-semibold text-gray-700 border-b-2 border-gray-300 pb-1 hover:text-[#3BB0C1] hover:border-[#3BB0C1] transition-all uppercase tracking-wider">
            View more {activeTab.toLowerCase()} in India
          </button>
        </div>
      </div>
    </div>
  );
};

export default ThingsSection;