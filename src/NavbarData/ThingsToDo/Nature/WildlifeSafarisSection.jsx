import React, { useState, useEffect } from 'react';
import { WildlifeSafarisData } from '../../../Data/ThingsToDo/Nature/WildlifeSafarisData';
import { FaArrowLeft, FaFacebook, FaInstagram, FaTwitter, FaYoutube, FaLink, FaHome } from "react-icons/fa";

const WildlifeSafarisSection = ({ 
  onBack,                    // back to Nature main grid
  onBackToThingsToDo,        // optional: back to Things to Do main
  onGoHome                   // optional: go to homepage
}) => {
  const [selectedItem, setSelectedItem] = useState(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [selectedItem]);

  // Navigation handlers for breadcrumb
  const handleHome = () => {
    if (onGoHome) onGoHome();
    else window.location.href = '/';
  };

  const handleThingsToDo = () => {
    if (onBackToThingsToDo) onBackToThingsToDo();
    else if (onBack) onBack();
    else window.history.back();
  };

  const handleNature = () => {
    if (onBack) onBack();
    else window.history.back();
  };

  // --- Breadcrumb Component (non‑sticky) ---
  const Breadcrumb = ({ currentPage }) => (
    <div className="w-full bg-gradient-to-r from-[#3BB0C1] to-[#48abbc] text-white py-3 px-6 md:px-10 flex items-center gap-2 text-sm font-medium shadow-md">
      <button onClick={handleHome} className="flex items-center gap-1 hover:text-gray-200 transition-colors">
        <FaHome className="w-4 h-4" />
        <span>Home</span>
      </button>
      <span className="text-white/60 text-xs">›</span>
      <button onClick={handleThingsToDo} className="hover:text-gray-200 transition-colors">
        Things to Do
      </button>
      <span className="text-white/60 text-xs">›</span>
      <button onClick={handleNature} className="hover:text-gray-200 transition-colors">
        Nature
      </button>
      <span className="text-white/60 text-xs">›</span>
      {currentPage ? (
        <>
          <span className="hover:text-gray-200 transition-colors">Wildlife Safaris</span>
          <span className="text-white/60 text-xs">›</span>
          <span className="opacity-95 font-semibold truncate">{currentPage}</span>
        </>
      ) : (
        <span className="opacity-95 font-semibold">Wildlife Safaris</span>
      )}
    </div>
  );

  // --- Detail View (when an item is clicked) ---
  if (selectedItem) {
    return (
      <div className="bg-white min-h-screen pb-20">
        <Breadcrumb currentPage={selectedItem.title} />
        <div className="max-w-7xl mx-auto px-6 py-12">
          <button 
            onClick={() => setSelectedItem(null)} 
            className="flex items-center gap-2 text-[#48abbc] font-bold mb-8 hover:gap-3 transition-all group"
          >
            <FaArrowLeft className="group-hover:-translate-x-1 transition-transform" />
            <span className="text-sm uppercase tracking-wider">Back to Safari Guide</span>
          </button>
          <div className="flex flex-col lg:flex-row gap-12">
            <div className="w-full lg:w-1/2">
              <img src={selectedItem.image} className="w-full h-[450px] lg:h-[550px] object-cover rounded-2xl shadow-xl" alt={selectedItem.title} />
            </div>
            <div className="w-full lg:w-1/2 flex flex-col justify-center">
              <h1 className="text-4xl md:text-6xl font-serif mb-6 text-gray-900 leading-tight">{selectedItem.title}</h1>
              <p className="text-lg text-gray-600 leading-relaxed font-light">{selectedItem.details || selectedItem.content}</p>
              <button className="mt-8 bg-black text-white px-8 py-3 rounded-full font-bold uppercase tracking-wider text-xs self-start hover:bg-[#48abbc] transition-colors">
                Book this experience
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // --- Main View (with overlapping container) ---
  return (
    <div className="bg-white min-h-screen">
      <Breadcrumb />

      {/* Hero Video Section */}
      <div className="relative h-[70vh] md:h-[80vh] w-full overflow-hidden">
        <video autoPlay loop muted playsInline className="w-full h-full object-cover">
          <source src={WildlifeSafarisData.header.videoSrc} type="video/mp4" />
        </video>
        {/* Dark overlay for better text contrast */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-transparent" />
        {/* Centered title */}
        <div className="absolute inset-0 flex items-center justify-center text-center">
          <h1 className="text-white text-5xl md:text-8xl lg:text-9xl font-serif drop-shadow-2xl">
            Indian Wildlife
          </h1>
        </div>
      </div>

      {/* Overlapping Container (all content goes here) */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 -mt-20 md:-mt-32 pb-20">
        <div className="bg-white rounded-3xl shadow-2xl p-6 md:p-10">

          {/* Intro Section */}
          <div className="text-center max-w-4xl mx-auto py-8 px-4">
            <h2 className="text-3xl md:text-5xl font-serif mb-6 text-gray-900">
              {WildlifeSafarisData.header.title}
            </h2>
            <p className="text-base md:text-lg text-gray-500 font-light leading-relaxed mb-8">
              {WildlifeSafarisData.header.description}
            </p>
            <div className="flex justify-center gap-6 text-gray-400 pt-4">
              <FaFacebook className="cursor-pointer hover:text-blue-600 transition-colors text-xl" />
              <FaInstagram className="cursor-pointer hover:text-pink-500 transition-colors text-xl" />
              <FaLink className="cursor-pointer hover:text-gray-900 transition-colors text-xl" />
            </div>
          </div>

          {/* Top 10 Wildlife Experiences */}
          <section className="mb-20">
            <h3 className="text-2xl md:text-3xl font-serif text-gray-900 mb-8 border-l-8 border-[#48abbc] pl-6">
              Top 10 Wildlife Experiences
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-12">
              {WildlifeSafarisData.topExperiences.map((exp) => (
                <div key={exp.id} className="group cursor-pointer" onClick={() => setSelectedItem(exp)}>
                  <div className="rounded-2xl overflow-hidden mb-5 aspect-video shadow-md">
                    <img src={exp.image} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" alt={exp.title} />
                  </div>
                  <h4 className="text-2xl font-serif text-gray-800 group-hover:text-[#48abbc] transition-colors">
                    {exp.title}
                  </h4>
                  <p className="text-gray-500 mt-2 text-sm leading-relaxed">{exp.description}</p>
                </div>
              ))}
            </div>
          </section>

          {/* 10 Safari Essentials */}
          <section className="mb-12">
            <h3 className="text-2xl md:text-3xl font-serif text-gray-900 mb-8 border-l-8 border-[#48abbc] pl-6">
              10 Safari Essentials
            </h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6">
              {WildlifeSafarisData.essentials.map((item) => (
                <div key={item.id} className="group cursor-pointer text-center" onClick={() => setSelectedItem(item)}>
                  <div className="rounded-xl overflow-hidden mb-3 aspect-square shadow-sm">
                    <img src={item.image} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" alt={item.title} />
                  </div>
                  <h5 className="text-xs font-bold uppercase tracking-wider text-gray-700 group-hover:text-[#48abbc] transition-colors">
                    {item.title}
                  </h5>
                </div>
              ))}
            </div>
          </section>

          {/* Back to Nature Button */}
          <div className="text-center pt-8 mt-8 border-t border-gray-100">
            <button
              onClick={handleNature}
              className="inline-flex items-center gap-2 text-gray-500 hover:text-[#48abbc] transition-colors text-sm font-medium"
            >
              <FaArrowLeft size={12} /> Back to Nature
            </button>
          </div>

        </div> {/* end white container */}
      </div> {/* end overlapping container */}

      {/* Footer (outside overlapping container, full width) */}
      <footer className="bg-black text-white pt-20 pb-12 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 md:col-span-2">
            <h4 className="text-2xl font-serif text-[#48abbc] mb-5">Tourist Guide India</h4>
            <p className="text-gray-400 leading-relaxed max-w-sm text-sm">
              Discover the untold stories of the wild. Our mission is to provide an authentic window into the incredible biodiversity and heritage of our nation.
            </p>
          </div>
          <div>
            <h5 className="font-bold text-[10px] uppercase tracking-wider mb-5 text-gray-500">Navigation</h5>
            <ul className="space-y-2 text-sm text-gray-400">
              <li className="hover:text-white transition-colors cursor-pointer">Destinations</li>
              <li className="hover:text-white transition-colors cursor-pointer">Things to Do</li>
              <li className="hover:text-white transition-colors cursor-pointer">Planning</li>
              <li className="hover:text-white transition-colors cursor-pointer">Sustainable Travel</li>
            </ul>
          </div>
          <div>
            <h5 className="font-bold text-[10px] uppercase tracking-wider mb-5 text-gray-500">Connect</h5>
            <div className="flex gap-5 text-xl text-gray-400">
              <FaInstagram className="hover:text-white transition-colors cursor-pointer" />
              <FaFacebook className="hover:text-white transition-colors cursor-pointer" />
              <FaTwitter className="hover:text-white transition-colors cursor-pointer" />
              <FaYoutube className="hover:text-white transition-colors cursor-pointer" />
            </div>
          </div>
        </div>
        <div className="max-w-7xl mx-auto border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center text-[10px] text-gray-500 uppercase tracking-wider">
          <p>© 2026 Tourist Guide India - CSE Engineering Project</p>
          <div className="flex gap-6 mt-3 md:mt-0">
            <span className="cursor-pointer hover:text-white">Privacy Policy</span>
            <span className="cursor-pointer hover:text-white">Terms of Use</span>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default WildlifeSafarisSection;