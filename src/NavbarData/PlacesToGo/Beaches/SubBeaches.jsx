import { useState, useRef, useEffect } from "react";
import beachesData from "../../../Data/PlacesToGo/Beaches/SubBeachesData";
import MapComponent from "../../../pages/MapPage";;

// Scrollable Horizontal List with Arrows
function ScrollRow({ children, className = "" }) {
  const rowRef = useRef(null);
  const scroll = (dir) => {
    if (rowRef.current) {
      rowRef.current.scrollBy({ left: dir * 320, behavior: "smooth" });
    }
  };
  return (
    <div className={`relative flex items-center ${className}`}>
      <button
        className="absolute left-0 z-10 w-10 h-10 bg-white border border-gray-300 rounded-full shadow-md hover:bg-black hover:text-white transition-all flex items-center justify-center text-2xl -translate-x-5"
        onClick={() => scroll(-1)}
      >
        ‹
      </button>
      <div
        ref={rowRef}
        className="flex gap-5 overflow-x-auto scrollbar-hide snap-x snap-mandatory pb-4 flex-1"
      >
        {children}
      </div>
      <button
        className="absolute right-0 z-10 w-10 h-10 bg-white border border-gray-300 rounded-full shadow-md hover:bg-black hover:text-white transition-all flex items-center justify-center text-2xl translate-x-5"
        onClick={() => scroll(1)}
      >
        ›
      </button>
    </div>
  );
}

// Attractions Section (Hotels, Events, etc.)
function AttractionSection({ beach }) {
  const [activeAttrTab, setActiveAttrTab] = useState("Accommodation");
  const attractionContent = {
    Accommodation: beach.hotels,
    ...(beach.attractionData || {}),
  };
  const currentItems = attractionContent[activeAttrTab] || [];

  return (
    <section className="py-12 px-6 md:px-12 bg-white border-b border-gray-100">
      <h2 className="text-2xl md:text-3xl font-bold mb-8">
        {beach.name} hotels and attractions
      </h2>
      <div className="flex flex-wrap gap-3 mb-6">
        {beach.attractionTabs.map((tab) => (
          <button
            key={tab}
            className={`px-5 py-2 rounded-full text-sm font-medium transition-all ${
              activeAttrTab === tab
                ? "bg-black text-white"
                : "bg-gray-100 text-gray-700 hover:bg-gray-200"
            }`}
            onClick={() => setActiveAttrTab(tab)}
          >
            {tab}
          </button>
        ))}
        <button className="px-5 py-2 rounded-full text-sm font-medium text-emerald-700 border border-gray-300 hover:bg-emerald-50">
          View all →
        </button>
      </div>
      <ScrollRow>
        {currentItems.map((item, i) => (
          <div key={i} className="min-w-[240px] flex-shrink-0 snap-start bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition">
            <div className="h-40 overflow-hidden">
              <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
            </div>
            <div className="p-4">
              <h4 className="font-bold text-gray-900">{item.name}</h4>
              <p className="text-xs text-gray-500">{item.type}</p>
              <p className="text-sm mt-2">
                From <strong>{item.priceFrom}</strong>
                {item.priceTo && ` to ${item.priceTo}`}
              </p>
            </div>
          </div>
        ))}
      </ScrollRow>
    </section>
  );
}

// Main Component
export default function SubBeaches({ beachId, onBack, onGoHome }) {
  const beach = beachesData.find((b) => b.id === beachId) || beachesData[0];
  const [activeTab, setActiveTab] = useState(beach.tabs[0].id);

  useEffect(() => {
    setActiveTab(beach.tabs[0].id);
  }, [beachId]);

  const activeTabContent = beach.tabs.find((t) => t.id === activeTab)?.content;

  return (
    <div className="font-serif bg-gray-50 min-h-screen">
      {/* Hero + Nav */}
      <div className="relative">
        <nav className="absolute top-0 left-0 w-full z-40 flex items-center gap-2 text-white/90 px-6 py-5 bg-gradient-to-b from-black/50 to-transparent">
          <button onClick={onGoHome || onBack} className="hover:text-white font-semibold">
            Home
          </button>
          <span className="text-white/50">›</span>
          <button onClick={onBack} className="hover:text-white font-semibold">
            Places to go
          </button>
          <span className="text-white/50">›</span>
          <span className="text-white font-bold">{beach.name}</span>
        </nav>

        <div className="relative h-[520px] w-full overflow-hidden">
          <img src={beach.heroImage} alt={beach.name} className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
          <div className="absolute bottom-24 left-6 md:left-12 text-white">
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight">{beach.name}</h1>
            {beach.aboriginalName && (
              <p className="text-sm italic opacity-90 mt-2">Local name: {beach.aboriginalName}</p>
            )}
          </div>
          <div className="absolute bottom-24 right-6 md:right-12 flex gap-3">
            <button className="w-10 h-10 bg-white/20 backdrop-blur rounded-full border border-white/50 flex items-center justify-center hover:bg-white/40">
              ♡
            </button>
            <button className="w-10 h-10 bg-white/20 backdrop-blur rounded-full border border-white/50 flex items-center justify-center hover:bg-white/40">
              ⇧
            </button>
          </div>
        </div>
      </div>

      {/* Content overlap */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-20 -mt-20">
        <div className="bg-white rounded-t-xl shadow-lg">
          {/* Welcome + Tabs + Map */}
          <div className="grid md:grid-cols-3 gap-8 p-6 md:p-10">
            <div className="md:col-span-2">
              <div className="flex flex-wrap gap-3 mb-6">
                {beach.tabs.map((tab) => (
                  <button
                    key={tab.id}
                    className={`px-4 py-1.5 rounded-full text-xs font-semibold transition-all border ${
                      activeTab === tab.id
                        ? "bg-black text-white border-black"
                        : "bg-gray-100 text-gray-600 border-transparent hover:bg-gray-200"
                    }`}
                    onClick={() => setActiveTab(tab.id)}
                  >
                    {tab.label}
                  </button>
                ))}
              </div>
              <p className="text-lg font-bold text-gray-900 mb-4">{beach.tagline}</p>
              <p className="text-gray-600 leading-relaxed">{activeTabContent}</p>
            </div>

            {/* Map Sidebar */}
            <div className="bg-teal-50 rounded-xl overflow-hidden flex flex-col h-80">
              <div className="flex-1 min-h-0 relative">
                <MapComponent
                  position={beach.coordinates || [20.5937, 78.9629]}
                  name={beach.name}
                  zoom={12}
                />
              </div>
              <button
                className="py-3 bg-white border-t border-gray-200 text-center font-semibold text-sm hover:bg-gray-50 transition"
                onClick={() =>
                  window.open(
                    `https://www.google.com/maps/place/${encodeURIComponent(
                      beach.name + ", " + beach.location
                    )}`
                  )
                }
              >
                View full map ↗
              </button>
            </div>
          </div>

          {/* Top things to do */}
          <section className="py-12 px-6 md:px-10 border-t border-gray-100">
            <h2 className="text-2xl md:text-3xl font-bold mb-8">Top things to do in {beach.name}</h2>
            <ScrollRow>
              {beach.topThingsToDo.map((item, i) => (
                <div key={i} className="min-w-[260px] flex-shrink-0 snap-start bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition">
                  <img src={item.image} alt={item.title} className="h-40 w-full object-cover" />
                  <div className="p-4">
                    <h3 className="font-bold text-gray-800">{item.title}</h3>
                    <p className="text-sm text-gray-500 mt-1">{item.description}</p>
                  </div>
                </div>
              ))}
            </ScrollRow>
          </section>

          {/* Trips & Itineraries */}
          <section className="py-12 px-6 md:px-10 border-t border-gray-100">
            <h2 className="text-2xl md:text-3xl font-bold mb-8">Trips and Itineraries</h2>
            <ScrollRow>
              {beach.itineraries.map((item, i) => (
                <div key={i} className="min-w-[260px] flex-shrink-0 snap-start relative rounded-xl overflow-hidden cursor-pointer group">
                  <img src={item.image} alt={item.title} className="h-52 w-full object-cover group-hover:scale-105 transition duration-500" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end p-4">
                    <span className="text-white font-semibold">{item.title}</span>
                  </div>
                </div>
              ))}
            </ScrollRow>
          </section>

          {/* Attractions (Hotels, Events, etc.) */}
          <AttractionSection beach={beach} />

          {/* Nearby Destinations */}
          <section className="py-12 px-6 md:px-10 border-t border-gray-100">
            <h2 className="text-2xl md:text-3xl font-bold mb-8">Destinations near {beach.name}</h2>
            <ScrollRow>
              {beach.nearbyDestinations.map((dest, i) => (
                <div key={i} className="min-w-[280px] flex-shrink-0 snap-start relative rounded-xl overflow-hidden cursor-pointer group h-56">
                  <img src={dest.image} alt={dest.name} className="w-full h-full object-cover group-hover:scale-105 transition duration-500" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-5">
                    <span className="text-white text-xl font-bold">{dest.name}</span>
                  </div>
                </div>
              ))}
            </ScrollRow>
          </section>

          {/* Photo Grid */}
          <section className="py-12 px-6 md:px-10 border-t border-gray-100">
            <h2 className="text-2xl md:text-3xl font-bold mb-8">{beach.name} travel experiences</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-2 auto-rows-[200px]">
              {beach.experienceImages.slice(0, 5).map((src, i) => (
                <div
                  key={i}
                  className={`overflow-hidden rounded-lg cursor-pointer ${
                    i === 0 ? "md:row-span-2 md:col-span-2" : ""
                  }`}
                >
                  <img src={src} alt="experience" className="w-full h-full object-cover hover:scale-105 transition duration-500" />
                </div>
              ))}
            </div>
          </section>
        </div>
      </div>

      {/* Utility: hide scrollbar */}
      <style>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </div>
  );
}