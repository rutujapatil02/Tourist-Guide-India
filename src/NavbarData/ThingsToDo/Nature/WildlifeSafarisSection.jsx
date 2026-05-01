import React, { useState, useEffect } from 'react';
import { WildlifeSafarisData } from '../../../Data/ThingsToDo/Nature/WildlifeSafarisData';
import { FaArrowLeft, FaFacebook, FaInstagram, FaTwitter, FaYoutube, FaLink } from "react-icons/fa";

const WildlifeSafarisSection = ({ onBack }) => {
  const [selectedItem, setSelectedItem] = useState(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [selectedItem]);

  // Detail View Component
  if (selectedItem) {
    return (
      <div className="bg-white min-h-screen animate-in fade-in duration-500 pb-20">
        <div className="max-w-7xl mx-auto px-6 py-12">
          <button onClick={() => setSelectedItem(null)} className="flex items-center gap-2 font-bold uppercase tracking-widest text-[10px] mb-12 hover:text-green-700 transition-colors">
            <FaArrowLeft /> Back to Safari Guide
          </button>
          <div className="flex flex-col lg:flex-row gap-16">
            <div className="w-full lg:w-1/2">
              <img src={selectedItem.image} className="w-full h-[600px] object-cover rounded-[3rem] shadow-2xl" alt="" />
            </div>
            <div className="w-full lg:w-1/2 flex flex-col justify-center">
              <h1 className="text-5xl md:text-7xl font-serif mb-8 text-gray-900 leading-tight">{selectedItem.title}</h1>
              <p className="text-xl text-gray-500 leading-relaxed font-light">{selectedItem.details || selectedItem.content}</p>
              <button className="mt-10 bg-black text-white px-10 py-4 rounded-full font-bold uppercase tracking-widest text-xs self-start hover:bg-green-700 transition-colors">Book this experience</button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white min-h-screen flex flex-col">
      {/* 1. HERO VIDEO */}
      <div className="relative h-[70vh] w-full bg-black overflow-hidden">
        <video autoPlay loop muted playsInline className="w-full h-full object-cover opacity-70">
          <source src={WildlifeSafarisData.header.videoSrc} type="video/mp4" />
        </video>
        <div className="absolute top-10 left-10 z-20">
          <button onClick={onBack} className="text-white flex items-center gap-2 font-bold uppercase tracking-widest text-xs drop-shadow-lg hover:bg-white/10 p-2 rounded-lg">
            <FaArrowLeft /> Things to Do / Nature
          </button>
        </div>
        <div className="absolute inset-0 flex items-center justify-center text-center">
          <h1 className="text-white text-6xl md:text-9xl font-serif px-4 drop-shadow-2xl">Indian Wildlife</h1>
        </div>
      </div>

      {/* 2. INTRO SECTION */}
      <div className="max-w-4xl mx-auto text-center py-24 px-6">
        <h2 className="text-5xl md:text-6xl font-serif mb-8 text-gray-900">{WildlifeSafarisData.header.title}</h2>
        <p className="text-xl text-gray-400 font-light mb-12">{WildlifeSafarisData.header.description}</p>
        <div className="flex justify-center gap-8 text-gray-300 border-t pt-8">
          <FaFacebook className="cursor-pointer hover:text-blue-600 transition-colors" />
          <FaInstagram className="cursor-pointer hover:text-pink-500 transition-colors" />
          <FaLink className="cursor-pointer hover:text-black transition-colors" />
        </div>
      </div>

      {/* 3. EXPERIENCE GRID (10 Items) */}
      <div className="max-w-7xl mx-auto px-6 mb-32">
        <h3 className="text-3xl font-serif mb-12 border-b pb-4">Top 10 Wildlife Experiences</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-16">
          {WildlifeSafarisData.topExperiences.map((exp) => (
            <div key={exp.id} className="cursor-pointer group" onClick={() => setSelectedItem(exp)}>
              <div className="rounded-[2.5rem] overflow-hidden mb-6 aspect-video shadow-lg">
                <img src={exp.image} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000" alt="" />
              </div>
              <h4 className="text-3xl font-serif group-hover:text-green-700 transition-colors">{exp.title}</h4>
              <p className="text-gray-400 mt-2 font-light tracking-wide italic">{exp.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* 4. ESSENTIALS GRID (10 Items) */}
      <div className="bg-gray-50 py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <h3 className="text-3xl font-serif mb-12 border-b border-gray-200 pb-4 text-gray-800">10 Safari Essentials</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8">
            {WildlifeSafarisData.essentials.map((item) => (
              <div key={item.id} className="cursor-pointer group" onClick={() => setSelectedItem(item)}>
                <div className="rounded-2xl overflow-hidden mb-4 aspect-square shadow-sm">
                  <img src={item.image} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" alt="" />
                </div>
                <h5 className="text-sm font-bold uppercase tracking-widest text-gray-900 leading-tight group-hover:text-green-700">{item.title}</h5>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* 5. PROJECT FOOTER */}
      <footer className="bg-black text-white pt-24 pb-12 px-6 mt-auto">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-16 mb-20">
          <div className="col-span-1 md:col-span-2">
            <h4 className="text-3xl font-serif text-green-500 mb-8">Tourist Guide India</h4>
            <p className="text-gray-500 leading-relaxed max-w-sm">Discover the untold stories of the wild. Our mission is to provide an authentic window into the incredible biodiversity and heritage of our nation.</p>
          </div>
          <div>
            <h5 className="font-bold text-[10px] uppercase tracking-[0.2em] mb-8 text-gray-400">Navigation</h5>
            <ul className="space-y-4 text-sm text-gray-500 font-light">
              <li className="hover:text-white transition-colors cursor-pointer">Destinations</li>
              <li className="hover:text-white transition-colors cursor-pointer">Things to Do</li>
              <li className="hover:text-white transition-colors cursor-pointer">Planning</li>
              <li className="hover:text-white transition-colors cursor-pointer">Sustainable Travel</li>
            </ul>
          </div>
          <div>
            <h5 className="font-bold text-[10px] uppercase tracking-[0.2em] mb-8 text-gray-400">Connect</h5>
            <div className="flex gap-6 text-2xl text-gray-500">
              <FaInstagram className="hover:text-white transition-colors cursor-pointer" />
              <FaFacebook className="hover:text-white transition-colors cursor-pointer" />
              <FaTwitter className="hover:text-white transition-colors cursor-pointer" />
              <FaYoutube className="hover:text-white transition-colors cursor-pointer" />
            </div>
          </div>
        </div>
        <div className="max-w-7xl mx-auto border-t border-gray-900 pt-10 flex flex-col md:row justify-between items-center text-[10px] text-gray-700 uppercase tracking-widest">
          <p>© 2026 Tourist Guide India - CSE Engineering Project</p>
          <div className="flex gap-8 mt-4 md:mt-0">
            <span>Privacy Policy</span>
            <span>Terms of Use</span>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default WildlifeSafarisSection;