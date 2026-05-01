import React, { useState } from 'react';
import { inspiredData } from '../Data/InspiredData';

// Component Imports
import GdaySection from "./BeInspiredSection/GDaySection/GdaySection";
import TravelInspirationSection from "./BeInspiredSection/TravelInspirationSection/TravelInspirationSection";
import TravelVideoSection from "./BeInspiredSection/TravelVideoSection/TravelVideoSection";
import DealsOffersSection from "./BeInspiredSection/DealsOffersSection/DealsOffersSection";
import DiscoverIndiaSection from "./BeInspiredSection/DiscoverIndiaSection/DiscoverIndiaSection"; 

const InspiredSection = ({ closeMenu }) => {
  // Use a single state to track which sub-page is open
  const [activeSubSection, setActiveSubSection] = useState(null);

  // Filter items based on the "Travel inspiration" category
  const displayItems = inspiredData.activities.filter(
    (item) => item.category === "Travel inspiration"
  );

  // Reset to the grid view
  const handleBack = () => {
    setActiveSubSection(null);
  };

  // --- 1. CONDITIONAL RENDERING LOGIC ---
  if (activeSubSection === "gday") return <GdaySection onBack={handleBack} />;
  if (activeSubSection === "inspiration") return <TravelInspirationSection onBack={handleBack} />;
  if (activeSubSection === "video") return <TravelVideoSection onBack={handleBack} />;
  if (activeSubSection === "deals") return <DealsOffersSection onBack={handleBack} />;
  if (activeSubSection === "discover") return <DiscoverIndiaSection onBack={handleBack} />;

  return (
    <section className="w-full bg-white border-t border-gray-100 shadow-2xl z-[60] absolute left-0 top-0 min-h-screen animate-in fade-in slide-in-from-top-2 duration-300">
      <div className="max-w-7xl mx-auto py-12 px-6">
        {/* Adjusted to 4 columns to match the visual spacing of the first image */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          
          {displayItems.map((item) => (
            <div 
              key={item.id} 
              className="group cursor-pointer"
              onClick={() => {
                const name = item.name.toLowerCase();
                if (name.includes("g'day")) setActiveSubSection("gday");
                else if (name.includes("inspiration")) setActiveSubSection("inspiration");
                else if (name.includes("videos")) setActiveSubSection("video");
                else if (name.includes("deals")) setActiveSubSection("deals");
                else if (name.includes("discover")) setActiveSubSection("discover");
              }}
            >
              {/* Image Container: High rounded corners and consistent aspect ratio */}
              <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl bg-gray-100">
                <img
                  src={item.img}
                  alt={item.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>

              {/* Title Container: Simple, centered, and clean background as per Image 1 */}
              <div className="mt-0 text-center py-4 bg-[#f8f9fa] rounded-b-2xl transition-colors group-hover:bg-gray-100">
                <span className="font-semibold text-gray-800 text-sm tracking-wide">
                  {item.name}
                </span>
              </div>
            </div>
          ))}

        </div>
      </div>
    </section>
  );
};

export default InspiredSection;