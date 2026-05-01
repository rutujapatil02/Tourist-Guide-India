// src/NavbarData/PlacesSection.jsx
import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import { useNavigate } from "react-router-dom";

import { allPlaces } from '../data/statesData';
import { FaArrowRight } from "react-icons/fa";

import CitiesSection from './CitiesSection';
import BeachSection from './BeachSection';
import NatureSection from './NatureSection';
import HeritageSection from './HeritageSection';
import SubHeritageSection from '../NavbarData/PlacesToGo/Heritage/SubHeritageSection';
import SubBeaches from './PlacesToGo/Beaches/SubBeaches';
import Destination from './PlacesToGo/States/Destinations'; // ✅ adjust path as needed

import { heritageData as fullHeritageData } from "../Data/PlacesToGo/Heritage/SubHeritageData";

const categories = ["States", "Beaches", "Nature", "Heritage"];

const PlacesSection = () => {
  const navigate = useNavigate();

  const [activeTab, setActiveTab] = useState("States");
  const [selectedHeritage, setSelectedHeritage] = useState(null);
  const [selectedBeach, setSelectedBeach] = useState(null);
  const [showAllStates, setShowAllStates] = useState(false);
  const [selectedState, setSelectedState] = useState(null); // ✅ NEW

  const handleHeritageSelect = (site) => {
    const fullSite = fullHeritageData.find((s) => s.id === site.id);
    setSelectedHeritage(fullSite || site);
  };

  // ✅ UPDATED: now sets selectedState instead of navigating
  const handleStateClick = (state) => {
    const slug = state.name
      .toLowerCase()
      .replace(/\s+/g, '')
      .replace(/-/g, '');
    setSelectedState(slug);
  };

  const handleNavigate = (destination) => {
    if (destination === "home" || destination === "placesToGo") {
      setSelectedHeritage(null);
      setSelectedBeach(null);
    }
  };

  // ✅ Show Destination component when a state is selected
  if (selectedState) {
    return (
      <Destination
        stateKey={selectedState}
        onBack={() => setSelectedState(null)}
      />
    );
  }

  if (selectedHeritage) {
    return (
      <SubHeritageSection
        place={selectedHeritage}
        onNavigate={handleNavigate}
      />
    );
  }

  const states = allPlaces.filter(p => p.category === "States");
  const visibleStates = showAllStates ? states : states.slice(0, 12);

  return (
    <>
      <div className="w-full bg-white border-t border-gray-100 shadow-md relative z-10">
        <div className="max-w-7xl mx-auto py-10 px-6">

          {!selectedBeach && (
            <div className="flex flex-wrap justify-center gap-3 mb-10">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => {
                    setActiveTab(cat);
                    setShowAllStates(false);
                  }}
                  className={`px-6 py-2 rounded-full text-sm font-bold transition-all border ${
                    activeTab === cat
                      ? 'bg-black text-white border-black'
                      : 'bg-gray-100 text-gray-500 border-transparent hover:bg-gray-200'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          )}

          {!selectedBeach && (
            <>
              {activeTab === "Beaches" ? (
                <BeachSection onSelectBeach={(id) => setSelectedBeach(id)} />
              ) : activeTab === "Nature" ? (
                <NatureSection />
              ) : activeTab === "Heritage" ? (
                <HeritageSection onSelectPlace={handleHeritageSelect} />
              ) : (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                  {visibleStates.map((p) => (
                    <div
                      key={p.id}
                      className="group cursor-pointer relative z-10"
                      onClick={() => handleStateClick(p)} // ✅ triggers Destination view
                    >
                      <div className="relative aspect-[3/2] overflow-hidden rounded-xl bg-gray-100 pointer-events-none">
                        <img
                          src={p.image}
                          alt={p.name}
                          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                        />
                      </div>
                      <div className="mt-2 text-center py-4 bg-gray-50 rounded-b-xl font-bold">
                        {p.name}
                      </div>
                    </div>
                  ))}

                  {!showAllStates && states.length > 12 && (
                    <div
                      className="group cursor-pointer"
                      onClick={() => setShowAllStates(true)}
                    >
                      <div className="relative aspect-[3/2] w-full overflow-hidden rounded-xl bg-gray-100 flex items-center justify-center">
                        <div className="flex flex-col items-center gap-3">
                          <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center shadow-md transition-transform duration-300 group-hover:scale-110">
                            <FaArrowRight className="text-black text-lg" />
                          </div>
                          <span className="font-bold text-gray-900">View more</span>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              )}
            </>
          )}
        </div>
      </div>

      {selectedBeach &&
        ReactDOM.createPortal(
          <div style={{
            position: 'fixed',
            top: '80px',
            left: 0,
            right: 0,
            bottom: 0,
            zIndex: 999999,
            overflowY: 'auto',
            background: '#f9f9f9',
          }}>
            <SubBeaches
              beachId={selectedBeach}
              onBack={() => setSelectedBeach(null)}
              onGoHome={() => setSelectedBeach(null)}
            />
          </div>,
          document.body
        )}
    </>
  );
};

export default PlacesSection;