import React, { useState, useRef } from 'react';
import { SkydivingData } from '../../../Data/ThingsToDo/Adventure/SkydivingData'; 
import { 
  FaFacebookF, FaInstagram, FaYoutube, FaPinterestP, 
  FaChevronDown, FaChevronLeft, FaChevronRight 
} from "react-icons/fa";
import { HiOutlineArrowUp } from "react-icons/hi";

// Assets
import BluePeacock from "../../../assets/images/BluePeacock.png";
import foot from "../../../assets/images/foot.png";

const SkydivingSection = ({ onBack }) => {
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

  // --- DETAIL VIEW (Next Page Information) ---
  if (selectedItem) {
    return (
      <div className="bg-white min-h-screen animate-in fade-in duration-500">
        <header className="bg-[#41abbc] py-4 px-8 text-white flex justify-between items-center sticky top-0 z-50 shadow-lg">
          <button onClick={() => setSelectedItem(null)} className="text-xs font-bold tracking-widest uppercase border border-white/30 px-4 py-2 rounded-full hover:bg-white hover:text-[#41abbc] transition-all">
            ← Back to Experiences
          </button>
          <span className="text-xs font-bold uppercase tracking-widest">{selectedItem.title}</span>
        </header>
        <main className="max-w-6xl mx-auto py-24 px-6">
          <div className="flex flex-col md:flex-row gap-16 items-start">
            <img src={selectedItem.img} className="w-full md:w-1/2 h-[600px] object-cover rounded-[3rem] shadow-2xl" alt="Skydiving" />
            <div className="flex-1 pt-10">
              <p className="text-[#41abbc] font-black tracking-[0.3em] uppercase mb-4">{selectedItem.location}</p>
              <h1 className="text-7xl font-serif mb-10 leading-tight">{selectedItem.title}</h1>
              <p className="text-2xl text-gray-600 font-light leading-relaxed mb-8">{selectedItem.description}</p>
              <div className="flex gap-4">
                {selectedItem.tags.map(tag => (
                   <span key={tag} className="px-6 py-2 border border-gray-200 rounded-full text-xs font-bold uppercase tracking-widest text-gray-400">{tag}</span>
                ))}
              </div>
            </div>
          </div>
        </main>
      </div>
    );
  }

  return (
    <div className="bg-white min-h-screen font-sans">
      {/* 1. HERO */}
      <section className="relative h-[75vh] w-full overflow-hidden">
        <img src={SkydivingData.hero.bannerImg} className="w-full h-full object-cover" alt="Hero" />
        <div className="absolute inset-0 bg-black/40 flex items-center justify-center text-center text-white px-4">
          <div className="max-w-4xl">
            <h1 className="text-6xl md:text-9xl font-serif mb-6 italic">{SkydivingData.hero.title}</h1>
            <p className="text-xl md:text-2xl font-light opacity-90">{SkydivingData.hero.subtitle}</p>
          </div>
        </div>
      </section>

      {/* 2. HORIZONTAL SLIDER WITH ARROWS */}
      <section className="py-32 px-10 bg-[#f9f9f9]">
        <div className="max-w-[1440px] mx-auto">
          <div className="flex justify-between items-end mb-16">
            <h2 className="text-6xl font-serif italic text-gray-900 border-l-8 border-[#41abbc] pl-8">Explore Activities</h2>
            <div className="flex gap-6">
              <button onClick={() => scroll('left')} className="w-16 h-16 border-2 border-gray-200 rounded-full flex items-center justify-center hover:bg-[#FFC107] hover:border-[#FFC107] transition-all shadow-md">
                <FaChevronLeft className="text-xl" />
              </button>
              <button onClick={() => scroll('right')} className="w-16 h-16 border-2 border-gray-200 rounded-full flex items-center justify-center hover:bg-[#FFC107] hover:border-[#FFC107] transition-all shadow-md">
                <FaChevronRight className="text-xl" />
              </button>
            </div>
          </div>

          <div ref={scrollRef} className="flex gap-10 overflow-x-auto no-scrollbar scroll-smooth snap-x pb-10">
            {SkydivingData.records.map((item) => (
              <div key={item.id} onClick={() => setSelectedItem(item)} className="min-w-[450px] group cursor-pointer snap-start">
                <div className="h-[320px] rounded-[2.5rem] overflow-hidden mb-8 shadow-xl relative">
                  <img src={item.img} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000" alt="card" />
                  <div className="absolute top-6 left-6 bg-white/90 backdrop-blur px-4 py-1 rounded-full text-[10px] font-bold tracking-widest uppercase">ADVENTURE</div>
                </div>
                <h3 className="text-3xl font-serif text-gray-900 group-hover:text-[#41abbc] transition-colors mb-2">{item.title}</h3>
                <p className="text-[#41abbc] text-xs font-black uppercase tracking-[0.2em]">{item.location}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. TRAVELLERS' STORIES (Large Blocks) */}
      <section className="py-32 px-10 bg-white">
        <h2 className="text-6xl font-serif mb-16 text-center italic">Travellers' Stories</h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 max-w-[1440px] mx-auto h-[700px]">
           <div className="md:col-span-2 relative rounded-[3rem] overflow-hidden shadow-2xl group cursor-pointer">
              <img src={SkydivingData.stories[0].img} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000" alt="Story" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              <div className="absolute bottom-10 left-10 text-white">
                <p className="text-xs font-bold tracking-widest uppercase mb-2">Pondicherry</p>
                <h4 className="text-3xl font-serif">"The best tandem jump of my life!"</h4>
              </div>
           </div>
           <div className="md:col-span-2 grid grid-rows-2 gap-8">
              <div className="grid grid-cols-2 gap-8">
                <img src={SkydivingData.stories[1].img} className="w-full h-full object-cover rounded-[2rem] shadow-lg" alt="S1" />
                <img src={SkydivingData.stories[2].img} className="w-full h-full object-cover rounded-[2rem] shadow-lg" alt="S2" />
              </div>
              <div className="bg-[#41abbc]/10 rounded-[2rem] flex items-center justify-center p-12 text-center border-4 border-dashed border-[#41abbc]/20">
                <p className="text-2xl font-serif italic text-gray-600">Share your adrenaline moments with <br/><span className="text-[#41abbc] font-bold not-italic">#JumpIndia</span></p>
              </div>
           </div>
        </div>
      </section>

      {/* 4. PROFESSIONAL FOOTER */}
      <footer className="relative text-white pt-24 pb-12 overflow-visible" style={{ backgroundColor: "#3AA8C1" }}>
        <button onClick={scrollToTop} className="absolute -top-10 right-10 md:right-24 bg-[#FFC107] p-6 rounded-full shadow-2xl hover:bg-[#ffb300] transition-all z-20 group">
          <HiOutlineArrowUp className="text-black text-3xl group-hover:scale-125 transition-transform" />
        </button>

        <div className="max-w-[1440px] mx-auto px-10">
          <div className="flex flex-col items-center mb-20 border-b border-white/10 pb-12">
            <div className="flex items-center gap-6">
              <span className="text-4xl font-bold tracking-tighter uppercase">Incredible India</span>
              <img src={BluePeacock} alt="Logo" className="h-20 w-auto brightness-0 invert" />
            </div>
          </div>

          <div className="mb-24 bg-white/5 p-12 rounded-[3rem] border border-white/10 flex flex-col md:flex-row items-center gap-16">
            <img src={foot} alt="Icon" className="w-32 opacity-80" />
            <div>
              <h2 className="text-2xl font-bold mb-4">Acknowledgement of Heritage</h2>
              <p className="text-xl font-light opacity-80 leading-relaxed">
                We celebrate the diverse cultures and ancient wisdom of the Indian subcontinent, 
                recognizing over 5,000 years of civilization and custodianship of this sacred land.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-20 mb-20">
            {/* Change Region */}
            <div>
               <h3 className="text-xs font-black uppercase mb-8 tracking-widest text-[#FFC107]">Region</h3>
               <div className="border border-white/20 p-4 rounded-xl flex justify-between items-center cursor-pointer hover:bg-white/10 transition-all" onClick={() => setIsDropdownOpen(!isDropdownOpen)}>
                 <span>{region}</span>
                 <FaChevronDown />
               </div>
            </div>
            {/* Socials */}
            <div>
               <h3 className="text-xs font-black uppercase mb-8 tracking-widest text-[#FFC107]">Follow Us</h3>
               <div className="flex flex-col gap-4">
                 <a href="#" className="flex items-center gap-3 hover:text-orange-300 transition-colors"><FaFacebookF /> Facebook</a>
                 <a href="#" className="flex items-center gap-3 hover:text-orange-300 transition-colors"><FaInstagram /> Instagram</a>
                 <a href="#" className="flex items-center gap-3 hover:text-orange-300 transition-colors"><FaYoutube /> YouTube</a>
               </div>
            </div>
            {/* Links */}
            <div>
               <h3 className="text-xs font-black uppercase mb-8 tracking-widest text-[#FFC107]">Explore</h3>
               <ul className="space-y-4 opacity-80">
                 <li>Sitemap</li>
                 <li>Privacy Policy</li>
                 <li>Terms of Use</li>
               </ul>
            </div>
            {/* Corporate */}
            <div>
               <h3 className="text-xs font-black uppercase mb-8 tracking-widest text-[#FFC107]">Corporate</h3>
               <ul className="space-y-4 opacity-80">
                 <li>Media Center</li>
                 <li>Tourism Investment</li>
                 <li>Contact</li>
               </ul>
            </div>
          </div>

          <div className="border-t border-white/10 pt-10 text-center opacity-50 text-sm">
            © Tourist Guide India 2026 | Government of India Tourism
          </div>
        </div>
      </footer>
    </div>
  );
};

export default SkydivingSection;