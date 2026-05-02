import React, { useState, useRef } from 'react';
import { FaArrowLeft, FaChevronLeft, FaChevronRight, FaFacebook, FaWhatsapp, FaLink, FaCheckCircle, FaHome } from 'react-icons/fa';
import { munnarGardensData } from '../../../Data/ThingsToDo/Nature/MunnarGardensData';
import Footer from '../../../components/Footer';

const MunnarGardensSection = ({ 
  onBack,                    // back to Nature main grid
  onBackToThingsToDo,        // optional: back to Things to Do main
  onGoHome                   // optional: go to homepage
}) => {
  const [activeItem, setActiveItem] = useState(null);
  
  const experienceScrollRef = useRef(null);
  const attractionScrollRef = useRef(null);

  const { 
    experiences, 
    spectacularNature, 
    naturalAttractions, 
    title, 
    description, 
    heroImage 
  } = munnarGardensData;

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

  const handleScroll = (ref, direction) => {
    const { current } = ref;
    const scrollAmount = 450;
    if (direction === 'left') current.scrollLeft -= scrollAmount;
    else current.scrollLeft += scrollAmount;
  };

  // --- Breadcrumb Component ---
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
          <span className="hover:text-gray-200 transition-colors">Munnar Gardens</span>
          <span className="text-white/60 text-xs">›</span>
          <span className="opacity-95 font-semibold truncate">{currentPage}</span>
        </>
      ) : (
        <span className="opacity-95 font-semibold">Munnar Gardens</span>
      )}
    </div>
  );

  // --- DETAIL VIEW ---
  if (activeItem) {
    return (
      <div className="bg-white min-h-screen">
        <Breadcrumb currentPage={activeItem.details?.title || activeItem.title} />
        <div className="max-w-6xl mx-auto py-12 px-6">
          <button 
            onClick={() => { setActiveItem(null); window.scrollTo(0,0); }} 
            className="flex items-center gap-2 text-[#48abbc] font-bold mb-8 hover:gap-3 transition-all group"
          >
            <FaArrowLeft className="group-hover:-translate-x-1 transition-transform" />
            <span className="text-sm uppercase tracking-wider">Back to Exploration</span>
          </button>
          <div className="flex flex-col lg:flex-row gap-12">
            <div className="w-full lg:w-1/2">
              <div className="rounded-2xl overflow-hidden shadow-xl mb-6">
                <img src={activeItem.image} alt={activeItem.title} className="w-full h-[400px] lg:h-[500px] object-cover" />
              </div>
              {activeItem.details?.gallery && activeItem.details.gallery.length > 0 && (
                <>
                  <h3 className="text-xl font-serif mb-4 text-gray-800">Gallery</h3>
                  <div className="grid grid-cols-2 gap-3">
                    {activeItem.details.gallery.map((img, i) => (
                      <div key={i} className="overflow-hidden rounded-xl shadow-sm">
                        <img src={img} className="h-40 w-full object-cover hover:scale-105 transition-transform" alt="gallery" />
                      </div>
                    ))}
                  </div>
                </>
              )}
            </div>
            <div className="w-full lg:w-1/2">
              <h1 className="text-3xl md:text-5xl font-serif text-gray-900 mb-5 leading-tight">
                {activeItem.details?.title || activeItem.title}
              </h1>
              <p className="text-lg text-gray-600 leading-relaxed mb-8 font-light">
                {activeItem.details?.fullDesc || activeItem.desc}
              </p>
              {activeItem.details?.highlights && (
                <div className="bg-gray-50 p-6 rounded-2xl border border-gray-100">
                  <h3 className="text-sm font-black mb-5 text-[#48abbc] uppercase tracking-wider">Highlights</h3>
                  <ul className="space-y-3">
                    {activeItem.details.highlights.map((item, index) => (
                      <li key={index} className="flex items-start gap-3 text-gray-700 font-medium">
                        <FaCheckCircle className="text-[#48abbc] mt-0.5 shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  // --- MAIN VIEW (with overlapping container - reduced negative margin) ---
  return (
    <div className="bg-white min-h-screen">
      <Breadcrumb />

      {/* Hero Section - reduced height, text moved up */}
      <div className="relative h-[60vh] md:h-[70vh] w-full overflow-hidden">
        <img 
          src={heroImage} 
          alt="Munnar" 
          className="w-full h-full object-cover" 
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
        {/* Text container positioned higher */}
        <div className="absolute bottom-1/4 left-0 right-0 p-8 md:p-12 text-white">
          <div className="max-w-7xl mx-auto">
            <span className="text-white/80 uppercase tracking-wider text-xs font-bold mb-2 block">Destination Guide</span>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif drop-shadow-2xl">{title}</h1>
          </div>
        </div>
      </div>

      {/* Overlapping Container - much smaller negative margin */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 -mt-6 md:-mt-10 pb-20">
        <div className="bg-white rounded-3xl shadow-2xl p-6 md:p-10">

          {/* Intro Section */}
          <div className="text-center max-w-4xl mx-auto py-8 px-4">
            <p className="text-xl md:text-2xl text-gray-600 leading-relaxed font-serif italic mb-10">
              "{description}"
            </p>
            <div className="flex justify-center gap-5">
              <button className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center hover:bg-[#3B5998] hover:text-white transition-all text-[#3B5998]"><FaFacebook size={18}/></button>
              <button className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center hover:bg-[#25D366] hover:text-white transition-all text-[#25D366]"><FaWhatsapp size={18}/></button>
              <button className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center hover:bg-gray-800 hover:text-white transition-all text-gray-600"><FaLink size={16}/></button>
            </div>
          </div>

          {/* Top Nature Experiences (Horizontal Scroller) */}
          <section className="mb-20">
            <div className="flex flex-wrap justify-between items-end mb-10 gap-4">
              <div>
                <h2 className="text-3xl md:text-5xl font-serif text-gray-900 border-l-8 border-[#48abbc] pl-6">
                  Top nature experiences
                </h2>
                <p className="text-[#48abbc] uppercase tracking-wider text-xs font-bold mt-2 pl-6">Unforgettable Munnar Moments</p>
              </div>
              <div className="flex gap-3">
                <button onClick={() => handleScroll(experienceScrollRef, 'left')} className="w-12 h-12 rounded-full border border-gray-300 flex items-center justify-center hover:bg-[#48abbc] hover:text-white transition-all">
                  <FaChevronLeft />
                </button>
                <button onClick={() => handleScroll(experienceScrollRef, 'right')} className="w-12 h-12 rounded-full border border-gray-300 flex items-center justify-center hover:bg-[#48abbc] hover:text-white transition-all">
                  <FaChevronRight />
                </button>
              </div>
            </div>
            <div ref={experienceScrollRef} className="flex gap-8 overflow-x-auto no-scrollbar scroll-smooth snap-x pb-8">
              {experiences.map((exp) => (
                <div 
                  key={exp.id} 
                  className="min-w-[280px] md:min-w-[380px] group cursor-pointer snap-start transition-transform hover:-translate-y-1 duration-300"
                  onClick={() => { setActiveItem(exp); window.scrollTo(0,0); }}
                >
                  <div className="aspect-[4/5] rounded-2xl overflow-hidden shadow-lg relative">
                    <img src={exp.image} alt={exp.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                    <div className="absolute bottom-6 left-6 right-6 text-white">
                      <h3 className="text-xl md:text-2xl font-bold leading-tight">{exp.title}</h3>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Natural Attractions (Second Horizontal Scroller) */}
          <section className="mb-20">
            <div className="flex flex-wrap justify-between items-end mb-10 gap-4">
              <div>
                <h2 className="text-3xl md:text-5xl font-serif text-gray-900 border-l-8 border-[#48abbc] pl-6">
                  Natural attractions
                </h2>
                <p className="text-[#48abbc] uppercase tracking-wider text-xs font-bold mt-2 pl-6">Explore the Peaks & Sanctuaries</p>
              </div>
              <div className="flex gap-3">
                <button onClick={() => handleScroll(attractionScrollRef, 'left')} className="w-12 h-12 rounded-full border border-gray-300 flex items-center justify-center hover:bg-[#48abbc] hover:text-white transition-all">
                  <FaChevronLeft />
                </button>
                <button onClick={() => handleScroll(attractionScrollRef, 'right')} className="w-12 h-12 rounded-full border border-gray-300 flex items-center justify-center hover:bg-[#48abbc] hover:text-white transition-all">
                  <FaChevronRight />
                </button>
              </div>
            </div>
            <div ref={attractionScrollRef} className="flex gap-6 overflow-x-auto no-scrollbar scroll-smooth snap-x pb-8">
              {naturalAttractions.map((attraction) => (
                <div 
                  key={attraction.id} 
                  className="min-w-[240px] md:min-w-[280px] group cursor-pointer snap-start transition-transform hover:-translate-y-1 duration-300"
                  onClick={() => { setActiveItem(attraction); window.scrollTo(0,0); }}
                >
                  <div className="aspect-[3/4] rounded-xl overflow-hidden shadow-md relative">
                    <img src={attraction.image} alt={attraction.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                    <div className="absolute inset-0 bg-black/30 group-hover:bg-black/10 transition-colors" />
                    <div className="absolute bottom-5 left-5 right-5">
                      <h4 className="text-white font-bold text-lg drop-shadow">{attraction.title}</h4>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Spectacular Vistas (Mosaic) */}
          <section className="mb-12">
            <div className="mb-8">
              <h2 className="text-3xl md:text-5xl font-serif text-gray-900 border-l-8 border-[#48abbc] pl-6">
                Spectacular Vistas
              </h2>
              <p className="text-[#48abbc] uppercase tracking-wider text-xs font-bold mt-2 pl-6">Captured through the lens</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-12 gap-4 h-auto md:h-[550px]">
              <div className="md:col-span-7 rounded-2xl overflow-hidden shadow-md relative group">
                <img src={spectacularNature[0].img} alt="Landscape" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
              </div>
              <div className="md:col-span-5 grid grid-cols-2 gap-4">
                {spectacularNature.slice(1, 5).map((item) => (
                  <div key={item.id} className="overflow-hidden rounded-xl shadow-md group">
                    <img src={item.img} alt="Munnar nature" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                  </div>
                ))}
              </div>
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

      <Footer />
    </div>
  );
};

export default MunnarGardensSection;