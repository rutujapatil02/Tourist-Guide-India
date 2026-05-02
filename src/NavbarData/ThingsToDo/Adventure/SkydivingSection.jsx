import React, { useState, useRef } from 'react';
import { SkydivingData } from '../../../Data/ThingsToDo/Adventure/SkydivingData'; 
import { 
  FaFacebookF, FaInstagram, FaYoutube, FaPinterestP, 
  FaChevronDown, FaChevronLeft, FaChevronRight, FaHome
} from "react-icons/fa";
import { HiOutlineArrowUp } from "react-icons/hi";

// Assets
import BluePeacock from "../../../assets/images/BluePeacock.png";
import foot from "../../../assets/images/foot.png";

const SkydivingSection = ({ 
  onBack,                    // required: back to Adventure main grid
  onBackToThingsToDo,        // optional: back to Things to Do main
  onGoHome                   // optional: go to homepage
}) => {
  const [selectedItem, setSelectedItem] = useState(null);
  const [region, setRegion] = useState("India (English)");
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const scrollRef = useRef(null);

  const countries = ["India (English)", "Australia (English)", "UK (English)", "USA (English)"];

  const scroll = (direction) => {
    if (scrollRef.current) {
      const scrollAmount = 500;
      scrollRef.current.scrollBy({ 
        left: direction === 'left' ? -scrollAmount : scrollAmount, 
        behavior: 'smooth' 
      });
    }
  };

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

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

  const handleAdventure = () => {
    if (onBack) onBack();
    else window.history.back();
  };

  // --- Breadcrumb Component ---
  const Breadcrumb = ({ currentPage }) => (
    <div className="w-full bg-gradient-to-r from-[#3BB0C1] to-[#48abbc] text-white py-3 px-6 md:px-10 flex items-center gap-2 text-sm font-medium sticky top-0 z-50 shadow-lg">
      <button onClick={handleHome} className="flex items-center gap-1 hover:text-gray-200 transition-colors">
        <FaHome className="w-4 h-4" />
        <span>Home</span>
      </button>
      <span className="text-white/60 text-xs">›</span>
      <button onClick={handleThingsToDo} className="hover:text-gray-200 transition-colors">
        Things to Do
      </button>
      <span className="text-white/60 text-xs">›</span>
      <button onClick={handleAdventure} className="hover:text-gray-200 transition-colors">
        Adventure
      </button>
      <span className="text-white/60 text-xs">›</span>
      {currentPage ? (
        <>
          <span className="hover:text-gray-200 transition-colors">Skydiving</span>
          <span className="text-white/60 text-xs">›</span>
          <span className="opacity-95 font-semibold truncate">{currentPage}</span>
        </>
      ) : (
        <span className="opacity-95 font-semibold">Skydiving</span>
      )}
    </div>
  );

  // --- DETAIL VIEW (when a location is clicked) ---
  if (selectedItem) {
    return (
      <div className="bg-white min-h-screen animate-in fade-in duration-500">
        <Breadcrumb currentPage={selectedItem.title} />
        <div className="max-w-6xl mx-auto py-12 px-6">
          <button 
            onClick={() => setSelectedItem(null)} 
            className="flex items-center gap-2 text-[#48abbc] font-bold mb-8 hover:gap-3 transition-all group"
          >
            <FaChevronLeft className="group-hover:-translate-x-1 transition-transform" />
            <span className="text-sm uppercase tracking-wider">Back to Experiences</span>
          </button>
          <div className="flex flex-col lg:flex-row gap-12 items-start">
            <div className="w-full lg:w-1/2 rounded-3xl overflow-hidden shadow-2xl">
              <img src={selectedItem.img} className="w-full h-[450px] lg:h-[550px] object-cover" alt={selectedItem.title} />
            </div>
            <div className="flex-1 pt-6">
              <p className="text-[#48abbc] font-black tracking-[0.3em] uppercase text-xs mb-4">{selectedItem.location}</p>
              <h1 className="text-4xl md:text-6xl font-serif mb-6 leading-tight">{selectedItem.title}</h1>
              <p className="text-lg text-gray-600 leading-relaxed mb-8">{selectedItem.description}</p>
              <div className="flex flex-wrap gap-3">
                {selectedItem.tags?.map(tag => (
                  <span key={tag} className="px-4 py-2 bg-gray-100 rounded-full text-xs font-bold uppercase tracking-wider text-gray-500">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // --- MAIN VIEW (Skydiving landing) ---
  return (
    <div className="bg-white min-h-screen">
      <Breadcrumb />

      {/* Hero Section */}
      <section className="relative h-[70vh] md:h-[80vh] w-full overflow-hidden">
        <img src={SkydivingData.hero.bannerImg} className="w-full h-full object-cover" alt="Hero" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-transparent flex items-center justify-center text-center text-white px-4">
          <div className="max-w-4xl animate-fade-in-up">
            <h1 className="text-5xl md:text-8xl lg:text-9xl font-serif mb-6 italic drop-shadow-2xl">
              {SkydivingData.hero.title}
            </h1>
            <div className="w-24 h-1 bg-[#FFC107] mx-auto mb-6 rounded-full"></div>
            <p className="text-lg md:text-2xl font-light opacity-90 max-w-2xl mx-auto">
              {SkydivingData.hero.subtitle}
            </p>
          </div>
        </div>
      </section>

      {/* Horizontal Slider with Arrows */}
      <section className="py-20 px-6 md:py-28 md:px-10 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-wrap justify-between items-end mb-12 gap-4">
            <h2 className="text-3xl md:text-5xl font-serif text-gray-900 border-l-8 border-[#48abbc] pl-6">
              Explore Activities
            </h2>
            <div className="flex gap-4">
              <button onClick={() => scroll('left')} className="w-12 h-12 md:w-14 md:h-14 border-2 border-gray-300 rounded-full flex items-center justify-center hover:bg-[#FFC107] hover:border-[#FFC107] transition-all shadow-md">
                <FaChevronLeft className="text-lg" />
              </button>
              <button onClick={() => scroll('right')} className="w-12 h-12 md:w-14 md:h-14 border-2 border-gray-300 rounded-full flex items-center justify-center hover:bg-[#FFC107] hover:border-[#FFC107] transition-all shadow-md">
                <FaChevronRight className="text-lg" />
              </button>
            </div>
          </div>

          <div ref={scrollRef} className="flex gap-6 md:gap-8 overflow-x-auto no-scrollbar scroll-smooth snap-x pb-8">
            {SkydivingData.records.map((item) => (
              <div 
                key={item.id} 
                onClick={() => setSelectedItem(item)} 
                className="min-w-[280px] md:min-w-[380px] group cursor-pointer snap-start transition-transform hover:-translate-y-2 duration-300"
              >
                <div className="h-[280px] md:h-[320px] rounded-2xl md:rounded-3xl overflow-hidden shadow-lg relative">
                  <img src={item.img} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" alt="card" />
                  <div className="absolute top-4 left-4 bg-white/90 backdrop-blur px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider shadow-sm">
                    ADVENTURE
                  </div>
                </div>
                <h3 className="text-xl md:text-2xl font-serif text-gray-800 group-hover:text-[#48abbc] transition-colors mt-4 mb-1">
                  {item.title}
                </h3>
                <p className="text-[#48abbc] text-[11px] font-black uppercase tracking-wider">{item.location}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Travellers' Stories */}
      <section className="py-20 px-6 md:py-28 md:px-10 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-serif mb-12 text-center italic">Travellers' Stories</h2>
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 h-auto lg:h-[600px]">
            {/* Featured story (large left block) */}
            <div className="lg:col-span-2 relative rounded-2xl md:rounded-3xl overflow-hidden shadow-xl group cursor-pointer h-[300px] lg:h-full">
              <img src={SkydivingData.stories[0].img} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" alt="Story" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
              <div className="absolute bottom-6 left-6 right-6 text-white">
                <p className="text-xs font-bold tracking-wider uppercase mb-1">Pondicherry</p>
                <h4 className="text-xl md:text-2xl font-serif">"The best tandem jump of my life!"</h4>
              </div>
            </div>
            
            {/* Right column with 2 small images + hashtag box */}
            <div className="lg:col-span-2 grid grid-rows-2 gap-6">
              <div className="grid grid-cols-2 gap-6 h-full">
                <div className="rounded-2xl overflow-hidden shadow-md">
                  <img src={SkydivingData.stories[1].img} className="w-full h-full object-cover" alt="S1" />
                </div>
                <div className="rounded-2xl overflow-hidden shadow-md">
                  <img src={SkydivingData.stories[2].img} className="w-full h-full object-cover" alt="S2" />
                </div>
              </div>
              <div className="bg-[#48abbc]/10 rounded-2xl flex items-center justify-center p-8 text-center border-2 border-dashed border-[#48abbc]/30 h-full">
                <p className="text-base md:text-xl font-serif italic text-gray-700">
                  Share your adrenaline moments with <br/>
                  <span className="text-[#48abbc] font-bold not-italic text-lg">#JumpIndia</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Professional Footer */}
      <footer className="relative text-white pt-24 pb-12 overflow-visible" style={{ backgroundColor: "#3AA8C1" }}>
        <button onClick={scrollToTop} className="absolute -top-10 right-6 md:right-12 bg-[#FFC107] p-5 rounded-full shadow-2xl hover:bg-[#ffb300] transition-all z-20 group">
          <HiOutlineArrowUp className="text-black text-2xl group-hover:scale-110 transition-transform" />
        </button>

        <div className="max-w-7xl mx-auto px-6 md:px-10">
          <div className="flex flex-col items-center mb-16 border-b border-white/10 pb-10">
            <div className="flex items-center gap-4">
              <span className="text-2xl md:text-3xl font-bold tracking-tighter uppercase">Incredible India</span>
              <img src={BluePeacock} alt="Logo" className="h-14 w-auto brightness-0 invert" />
            </div>
          </div>

          <div className="mb-20 bg-white/5 p-8 md:p-10 rounded-2xl border border-white/10 flex flex-col md:flex-row items-center gap-8 text-center md:text-left">
            <img src={foot} alt="Icon" className="w-24 opacity-80" />
            <div>
              <h2 className="text-xl md:text-2xl font-bold mb-3">Acknowledgement of Heritage</h2>
              <p className="text-base font-light opacity-80 leading-relaxed">
                We celebrate the diverse cultures and ancient wisdom of the Indian subcontinent, 
                recognizing over 5,000 years of civilization and custodianship of this sacred land.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
            {/* Region */}
            <div>
              <h3 className="text-xs font-black uppercase mb-6 tracking-wider text-[#FFC107]">Region</h3>
              <div className="border border-white/20 p-3 rounded-xl flex justify-between items-center cursor-pointer hover:bg-white/10 transition" onClick={() => setIsDropdownOpen(!isDropdownOpen)}>
                <span className="text-sm">{region}</span>
                <FaChevronDown size={12} />
              </div>
              {isDropdownOpen && (
                <div className="absolute bg-white text-gray-800 rounded-lg mt-2 shadow-lg z-10 w-48">
                  {countries.map(c => (
                    <div key={c} className="px-4 py-2 hover:bg-gray-100 cursor-pointer text-sm" onClick={() => { setRegion(c); setIsDropdownOpen(false); }}>
                      {c}
                    </div>
                  ))}
                </div>
              )}
            </div>
            {/* Socials */}
            <div>
              <h3 className="text-xs font-black uppercase mb-6 tracking-wider text-[#FFC107]">Follow Us</h3>
              <div className="flex flex-col gap-3">
                <a href="#" className="flex items-center gap-3 text-sm hover:text-[#FFC107] transition"><FaFacebookF /> Facebook</a>
                <a href="#" className="flex items-center gap-3 text-sm hover:text-[#FFC107] transition"><FaInstagram /> Instagram</a>
                <a href="#" className="flex items-center gap-3 text-sm hover:text-[#FFC107] transition"><FaYoutube /> YouTube</a>
              </div>
            </div>
            {/* Explore Links */}
            <div>
              <h3 className="text-xs font-black uppercase mb-6 tracking-wider text-[#FFC107]">Explore</h3>
              <ul className="space-y-2 text-sm opacity-80">
                <li className="hover:opacity-100 cursor-pointer">Sitemap</li>
                <li className="hover:opacity-100 cursor-pointer">Privacy Policy</li>
                <li className="hover:opacity-100 cursor-pointer">Terms of Use</li>
              </ul>
            </div>
            {/* Corporate */}
            <div>
              <h3 className="text-xs font-black uppercase mb-6 tracking-wider text-[#FFC107]">Corporate</h3>
              <ul className="space-y-2 text-sm opacity-80">
                <li className="hover:opacity-100 cursor-pointer">Media Center</li>
                <li className="hover:opacity-100 cursor-pointer">Tourism Investment</li>
                <li className="hover:opacity-100 cursor-pointer">Contact</li>
              </ul>
            </div>
          </div>

          <div className="border-t border-white/10 pt-8 text-center text-xs opacity-50">
            © Tourist Guide India 2026 | Government of India Tourism
          </div>
        </div>
      </footer>
    </div>
  );
};

export default SkydivingSection;