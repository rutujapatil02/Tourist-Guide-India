import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { SundarbansData } from '../../../Data/ThingsToDo/Nature/SundarbansData';
import Footer from '../../../components/Footer';

const SundarbansSection = ({ onBack }) => {
  const navigate = useNavigate();
  const { hero, details } = SundarbansData;

  useEffect(() => { window.scrollTo(0, 0); }, []);

  return (
    <div className="fixed inset-0 z-[150] bg-white w-screen h-screen overflow-y-auto overflow-x-hidden">
      <div className="absolute top-0 left-0 w-full z-50 bg-gradient-to-b from-black/70 to-transparent">
        <div className="max-w-7xl mx-auto py-6 px-10 flex items-center gap-2 text-[12px] text-white font-bold uppercase tracking-widest">
          <button onClick={() => navigate('/')} className="hover:text-[#3BB0C1]">Home</button>
          <span className="opacity-40">/</span>
          <button onClick={onBack} className="hover:text-[#3BB0C1]">Things To Do</button>
          <span className="opacity-40">/</span>
          <span className="text-[#3BB0C1]">Sundarbans</span>
        </div>
      </div>

      <div className="relative h-[75vh] w-full">
        <img src={hero.backgroundImage} className="w-full h-full object-cover" alt="Sundarbans" />
        <div className="absolute inset-0 bg-black/40 flex flex-col justify-center items-center text-center px-4">
          <h1 className="text-white text-6xl md:text-9xl font-serif font-bold uppercase tracking-tighter">{hero.title}</h1>
          <p className="text-white/90 max-w-2xl mt-8 text-lg md:text-xl font-light italic">"{hero.description}"</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 -mt-32 relative z-10 pb-32">
        <div className="bg-white shadow-[0_20px_50px_rgba(0,0,0,0.2)] p-8 md:p-20 rounded-xl border-t-[10px] border-[#3BB0C1]">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-20">
            {details.map((item) => (
              <div key={item.id} className="group space-y-8 text-left">
                <div className="overflow-hidden rounded-xl shadow-xl aspect-video bg-gray-100">
                  <img src={item.image} className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" alt={item.title} />
                </div>
                <div className="space-y-4">
                  <h3 className="text-3xl font-serif font-bold text-gray-900 border-l-4 border-[#3BB0C1] pl-4">{item.title}</h3>
                  <p className="text-gray-600 leading-relaxed text-lg italic">{item.info}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-24 text-center">
             <button onClick={onBack} className="bg-gray-900 text-white px-16 py-5 rounded-full font-bold text-[11px] tracking-[0.5em] uppercase hover:bg-[#3BB0C1] transition-all duration-300">Return to Nature Explorer</button>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default SundarbansSection;