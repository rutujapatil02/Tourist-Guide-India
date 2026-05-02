import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { SpitiValleyData } from '../../../Data/ThingsToDo/Nature/SpitiValleyData';
import { FaHome, FaArrowLeft } from 'react-icons/fa';
import Footer from '../../../components/Footer';

const SpitiValleySection = ({ 
  onBack,                    // back to Nature main grid
  onBackToThingsToDo,        // optional
  onGoHome                   // optional
}) => {
  const navigate = useNavigate();
  const { hero, details } = SpitiValleyData;

  useEffect(() => { window.scrollTo(0, 0); }, []);

  // Navigation handlers
  const handleHome = () => {
    if (onGoHome) onGoHome();
    else navigate('/');
  };

  const handleThingsToDo = () => {
    if (onBackToThingsToDo) onBackToThingsToDo();
    else if (onBack) onBack();
    else navigate(-1);
  };

  const handleNature = () => {
    if (onBack) onBack();
    else navigate(-1);
  };

  // Breadcrumb Component (non‑sticky, gradient)
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
      <button onClick={handleNature} className="hover:text-gray-200 transition-colors">
        Nature
      </button>
      <span className="text-white/60 text-xs">›</span>
      <span className="opacity-95 font-semibold">Spiti Valley</span>
    </div>
  );

  return (
    <div className="bg-white min-h-screen">
      <Breadcrumb />

      {/* Hero Section – reduced height for better balance */}
      <div className="relative h-[65vh] md:h-[75vh] w-full overflow-hidden">
        <img 
          src={hero.backgroundImage} 
          className="w-full h-full object-cover" 
          alt="Spiti Valley" 
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/20 to-transparent" />
        <div className="absolute inset-0 flex flex-col justify-center items-center text-center px-4">
          <h1 className="text-white text-5xl md:text-8xl lg:text-9xl font-serif font-bold drop-shadow-2xl">
            {hero.title}
          </h1>
          <p className="text-white/90 max-w-2xl mt-6 text-lg md:text-xl font-light italic">
            "{hero.description}"
          </p>
        </div>
      </div>

      {/* Overlapping Container (same as other sections) */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 -mt-16 md:-mt-24 pb-20">
        <div className="bg-white rounded-3xl shadow-2xl p-6 md:p-10 border-t-4 border-[#48abbc]">

          {/* Details Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16">
            {details.map((item) => (
              <div key={item.id} className="group space-y-5">
                <div className="rounded-2xl overflow-hidden shadow-md aspect-video bg-gray-100">
                  <img 
                    src={item.image} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" 
                    alt={item.title} 
                  />
                </div>
                <div>
                  <h3 className="text-2xl md:text-3xl font-serif font-bold text-gray-900 border-l-4 border-[#48abbc] pl-4 mb-3">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed text-base md:text-lg italic">
                    {item.info}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Back to Nature Button */}
          <div className="mt-16 text-center pt-6 border-t border-gray-100">
            <button
              onClick={handleNature}
              className="inline-flex items-center gap-2 text-gray-500 hover:text-[#48abbc] transition-colors text-sm font-medium"
            >
              <FaArrowLeft size={12} /> Back to Nature
            </button>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default SpitiValleySection;