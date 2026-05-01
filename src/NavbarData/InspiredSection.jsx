import React, { useState } from 'react';
import { inspiredData } from '../Data/InspiredData';
import { FaArrowRight } from "react-icons/fa";

// Import your sub-section components
import GdaySection from "./BeInspiredSection/GDaySection/GdaySection.jsx";
import TravelInspirationSection from "./BeInspiredSection/TravelInspirationSection/TravelInspirationSection.jsx";
import TravelVideoSection from "./BeInspiredSection/TravelVideoSection/TravelVideoSection.jsx";
import DealsOffersSection from "./BeInspiredSection/DealsOffersSection/DealsOffersSection.jsx";
import DiscoverIndiaSection from "./BeInspiredSection/DiscoverIndiaSection/DiscoverIndiaSection.jsx";
// import GdaySection from "./BeInspired/BeInspiredSection/GdaySection/GdaySection";

const InspiredSection = () => {
  // State to track which sub-section is active
  const [activeSubSection, setActiveSubSection] = useState(null);

  // Filter items for the main grid
  const displayItems = inspiredData.activities.filter(
    (item) => item.category === "Travel inspiration"
  );

  // Reset to main grid
  const handleBack = () => setActiveSubSection(null);

  // --- Sub‑section rendering (if any is active) ---
  if (activeSubSection === 'gday') return <GdaySection onBack={handleBack} />;
  if (activeSubSection === 'inspiration') return <TravelInspirationSection onBack={handleBack} />;
  if (activeSubSection === 'video') return <TravelVideoSection onBack={handleBack} />;
  if (activeSubSection === 'deals') return <DealsOffersSection onBack={handleBack} />;
  if (activeSubSection === 'discover') return <DiscoverIndiaSection onBack={handleBack} />;

  // --- Main Grid View ---
  return (
    <section className="w-full bg-white border-t border-gray-100 shadow-2xl animate-in fade-in slide-in-from-top-2 duration-300 z-50 absolute left-0">
      <div className="max-w-7xl mx-auto py-10 px-6">
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          
          {/* Map over the filtered items */}
          {displayItems.map((item) => {
            // Determine which sub-section to open based on item name
            const getSubSection = (name) => {
              const lowerName = name.toLowerCase();
              if (lowerName.includes("g'day")) return 'gday';
              if (lowerName.includes("inspiration")) return 'inspiration';
              if (lowerName.includes("videos")) return 'video';
              if (lowerName.includes("deals")) return 'deals';
              if (lowerName.includes("discover")) return 'discover';
              return null;
            };

            return (
              <div
                key={item.id}
                className="group cursor-pointer"
                onClick={() => setActiveSubSection(getSubSection(item.name))}
              >
                {/* Image Box */}
                <div className="relative aspect-[3/2] w-full overflow-hidden rounded-xl bg-gray-100">
                  <img
                    src={item.img}
                    alt={item.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>

                {/* Text Box */}
                <div className="mt-2 text-center py-4 bg-gray-50 rounded-b-xl group-hover:bg-gray-100 transition-all border-b-2 border-transparent group-hover:border-gray-200">
                  <span className="font-bold text-gray-900">{item.name}</span>
                </div>
              </div>
            );
          })}

          {/* "View More" Card - you can add your own logic here */}
          <div
            className="group cursor-pointer"
            onClick={() => {
              // Example: open a “See all” page or just console.log
              console.log("View more clicked – you can redirect or open a modal");
              // setActiveSubSection('viewAll'); // if you have a viewAll section
            }}
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

        </div>
      </div>
    </section>
  );
};

export default InspiredSection;