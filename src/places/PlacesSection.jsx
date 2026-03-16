import React, { useState } from 'react';
import { allPlaces } from '../data/statesData';

const categories = ["States", "Cities", "Beaches", "Nature", "Heritage"];

const PlacesSection = () => {
  const [activeTab, setActiveTab] = useState("States");
  const [showAll, setShowAll] = useState(false);

  const filtered = allPlaces.filter(p => p.category === activeTab);
  const displayed = showAll ? filtered : filtered.slice(0, 10);

  return (
    <section className="py-12 px-10">
      <div className="flex justify-center flex-wrap gap-3 mb-12">
        {categories.map((cat) => (
          <button key={cat} onClick={() => { setActiveTab(cat); setShowAll(false); }}
            className={`px-6 py-2 rounded-full font-bold ${activeTab === cat ? "bg-black text-white" : "bg-gray-100"}`}>
            {cat}
          </button>
        ))}
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-6">
        {displayed.map((p) => (
          <div key={p.id} className="group cursor-pointer">
            <img src={p.image} className="w-full h-48 object-cover rounded-2xl mb-3" />
            <h3 className="text-center font-bold">{p.name}</h3>
          </div>
        ))}
        {!showAll && filtered.length > 10 && (
          <div onClick={() => setShowAll(true)} className="flex items-center justify-center border-2 border-dashed rounded-2xl h-48 cursor-pointer">
            View More
          </div>
        )}
      </div>
    </section>
  );
};
export default PlacesSection;