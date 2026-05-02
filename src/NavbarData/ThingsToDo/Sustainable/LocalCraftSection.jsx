import React, { useRef, useState } from "react";
import { FaHome, FaArrowLeft, FaChevronLeft, FaChevronRight, FaFacebook, FaWhatsapp, FaLink, FaInstagram } from "react-icons/fa";
import { LocalCraftData } from "../../../Data/ThingsToDo/Sustainable/LocalCraftData";

// Sample hero data – you can move this to a separate data file if needed
const localCraftHero = {
  backgroundImage: "https://images.unsplash.com/photo-1561020634-11c9d0f1b8a3?w=1400&q=80",
  title: "Shop local, support local craft",
  subtitle: "Discover authentic Indian handicrafts directly from the artisans – sustainable, ethical, and beautifully made.",
};

const localCraftIntro = {
  heading: "Celebrating India's Artisan Heritage",
  body: "From intricate handlooms to terracotta pottery, every piece tells a story of tradition and skill. By choosing local crafts, you're not just buying a product – you're preserving a legacy and supporting rural livelihoods across India.",
};

const LocalCraftSection = ({ 
  onBack,                    // back to Sustainable travel main grid
  onBackToThingsToDo,        // optional
  onGoHome                   // optional
}) => {
  const scrollRef = useRef(null);
  const [selectedCraft, setSelectedCraft] = useState(null);

  // Navigation handlers
  const handleHome = () => {
    if (onGoHome) onGoHome();
    else window.location.href = '/';
  };

  const handleThingsToDo = () => {
    if (onBackToThingsToDo) onBackToThingsToDo();
    else if (onBack) onBack();
    else window.history.back();
  };

  const handleSustainable = () => {
    if (onBack) onBack();
    else window.history.back();
  };

  // Breadcrumb Component
  const Breadcrumb = () => (
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
      <button onClick={handleSustainable} className="hover:text-gray-200 transition-colors">
        Sustainable travel
      </button>
      <span className="text-white/60 text-xs">›</span>
      <span className="opacity-95 font-semibold">Local Craft Workshops</span>
    </div>
  );

  // Horizontal scroll handler
  const scroll = (direction) => {
    if (scrollRef.current) {
      const scrollAmount = 400;
      scrollRef.current.scrollBy({ 
        left: direction === 'left' ? -scrollAmount : scrollAmount, 
        behavior: 'smooth' 
      });
    }
  };

  // Detail view when a craft is clicked (optional – can be expanded)
  if (selectedCraft) {
    return (
      <div className="bg-white min-h-screen">
        <Breadcrumb />
        <div className="max-w-6xl mx-auto py-12 px-6">
          <button 
            onClick={() => setSelectedCraft(null)} 
            className="flex items-center gap-2 text-[#48abbc] font-bold mb-8 hover:gap-3 transition-all group"
          >
            <FaArrowLeft className="group-hover:-translate-x-1 transition-transform" />
            <span className="text-sm uppercase tracking-wider">Back to Crafts</span>
          </button>
          <div className="flex flex-col md:flex-row gap-10">
            <div className="md:w-1/2 rounded-2xl overflow-hidden shadow-xl">
              <img src={selectedCraft.image} alt={selectedCraft.title} className="w-full h-[400px] object-cover" />
            </div>
            <div className="md:w-1/2">
              <span className="text-[#48abbc] text-sm font-bold uppercase tracking-wider">{selectedCraft.category}</span>
              <h1 className="text-4xl md:text-5xl font-serif text-gray-900 mt-2 mb-4">{selectedCraft.title}</h1>
              <p className="text-gray-600 leading-relaxed text-lg">{selectedCraft.description}</p>
              <button className="mt-8 bg-black text-white px-6 py-3 rounded-full text-sm font-bold hover:bg-[#48abbc] transition-colors">
                Find workshops near you
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white min-h-screen">
      <Breadcrumb />

      {/* Hero Section */}
      <div className="relative h-[65vh] md:h-[75vh] w-full overflow-hidden">
        <img 
          src={localCraftHero.backgroundImage} 
          className="w-full h-full object-cover" 
          alt="Local Crafts" 
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 p-8 md:p-12 text-white">
          <div className="max-w-7xl mx-auto">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif font-bold drop-shadow-2xl leading-tight">
              {localCraftHero.title}
            </h1>
            <p className="text-base md:text-lg font-light mt-4 max-w-2xl opacity-95">
              {localCraftHero.subtitle}
            </p>
            <div className="flex gap-3 mt-6">
              <button className="w-8 h-8 rounded-full bg-white/20 backdrop-blur flex items-center justify-center hover:bg-[#1877f2] transition-colors">
                <FaFacebook size={14} />
              </button>
              <button className="w-8 h-8 rounded-full bg-white/20 backdrop-blur flex items-center justify-center hover:bg-[#25d366] transition-colors">
                <FaWhatsapp size={14} />
              </button>
              <button className="w-8 h-8 rounded-full bg-white/20 backdrop-blur flex items-center justify-center hover:bg-gray-700 transition-colors">
                <FaLink size={14} />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Overlapping Container */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 -mt-16 md:-mt-24 pb-20">
        <div className="bg-white rounded-3xl shadow-2xl p-6 md:p-10 border-t-4 border-[#48abbc]">

          {/* Intro Block */}
          <div className="mb-16 text-center max-w-4xl mx-auto">
            <h2 className="text-2xl md:text-4xl font-serif font-bold text-gray-800 mb-5">
              {localCraftIntro.heading}
            </h2>
            <p className="text-gray-600 leading-relaxed text-base md:text-lg">
              {localCraftIntro.body}
            </p>
          </div>

          {/* Craft Categories – static examples (you can replace with data from a separate file) */}
          <section className="mb-20">
            <h2 className="text-2xl md:text-3xl font-serif font-bold text-gray-800 mb-8 border-l-8 border-[#48abbc] pl-6">
              Explore Craft Categories
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                { name: "Handloom Textiles", img: "https://images.unsplash.com/photo-1584308972272-4e0a0ce5a6c6?w=400&q=80" },
                { name: "Pottery & Terracotta", img: "https://images.unsplash.com/photo-1565193285892-2671c9c1b8f7?w=400&q=80" },
                { name: "Wood Carving", img: "https://images.unsplash.com/photo-1562582316-0e5c8b7c1ca1?w=400&q=80" },
                { name: "Metal Crafts", img: "https://images.unsplash.com/photo-1518622335993-1e19d5fa0fe9?w=400&q=80" }
              ].map((cat, idx) => (
                <div key={idx} className="relative rounded-xl overflow-hidden shadow-md group cursor-pointer aspect-[3/4]">
                  <img src={cat.img} alt={cat.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <span className="absolute bottom-3 left-3 text-white text-sm font-bold">{cat.name}</span>
                </div>
              ))}
            </div>
          </section>

          {/* Featured Local Crafts – Horizontal Scroller */}
          <section className="mb-20">
            <div className="flex flex-wrap justify-between items-end mb-8 gap-4">
              <h2 className="text-2xl md:text-3xl font-serif font-bold text-gray-800 border-l-8 border-[#48abbc] pl-6">
                Featured Crafts
              </h2>
              <div className="flex gap-3">
                <button onClick={() => scroll('left')} className="w-10 h-10 rounded-full border border-gray-300 flex items-center justify-center hover:bg-[#48abbc] hover:text-white transition-all">
                  <FaChevronLeft />
                </button>
                <button onClick={() => scroll('right')} className="w-10 h-10 rounded-full border border-gray-300 flex items-center justify-center hover:bg-[#48abbc] hover:text-white transition-all">
                  <FaChevronRight />
                </button>
              </div>
            </div>
            <div ref={scrollRef} className="flex gap-6 overflow-x-auto no-scrollbar scroll-smooth snap-x pb-4">
              {LocalCraftData.map((item) => (
                <div 
                  key={item.id} 
                  onClick={() => setSelectedCraft(item)}
                  className="min-w-[280px] md:min-w-[320px] group cursor-pointer snap-start transition-transform hover:-translate-y-1 duration-300 bg-white rounded-xl shadow-md overflow-hidden border border-gray-100"
                >
                  <div className="h-56 overflow-hidden">
                    <img src={item.image} alt={item.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                  </div>
                  <div className="p-4">
                    <span className="text-[#48abbc] text-xs font-bold uppercase tracking-wider">{item.category}</span>
                    <h3 className="text-lg font-serif font-bold text-gray-800 mt-1 mb-2">{item.title}</h3>
                    <p className="text-gray-500 text-sm line-clamp-2">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Instagram Snaps (matching other sections) */}
          <section className="mb-8">
            <h2 className="text-2xl md:text-3xl font-serif font-bold text-gray-800 mb-8 border-l-8 border-[#48abbc] pl-6">
              #CraftsofIndia on Instagram
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
              {[
                "https://images.unsplash.com/photo-1565193285892-2671c9c1b8f7?w=400&q=80",
                "https://images.unsplash.com/photo-1584308972272-4e0a0ce5a6c6?w=400&q=80",
                "https://images.unsplash.com/photo-1518622335993-1e19d5fa0fe9?w=400&q=80",
                "https://images.unsplash.com/photo-1562582316-0e5c8b7c1ca1?w=400&q=80"
              ].map((url, idx) => (
                <div key={idx} className="relative aspect-square rounded-xl overflow-hidden shadow-md group cursor-pointer">
                  <img src={url} alt="Craft snap" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                  <div className="absolute bottom-2 right-2 bg-black/50 rounded-full p-1.5">
                    <FaInstagram className="text-white text-xs" />
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Back Button */}
          <div className="text-center pt-8 mt-6 border-t border-gray-100">
            <button
              onClick={handleSustainable}
              className="inline-flex items-center gap-2 text-gray-500 hover:text-[#48abbc] transition-colors text-sm font-medium"
            >
              <FaArrowLeft size={12} /> Back to Sustainable travel
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LocalCraftSection;