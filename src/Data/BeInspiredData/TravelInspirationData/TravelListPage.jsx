import React, { useEffect } from 'react';
import { HiX } from "react-icons/hi"; 
import { useNavigate } from 'react-router-dom';
import { indiaVideoListData } from './TravelInspirationData';

const TravelListPage = () => {
  const navigate = useNavigate();

  // Scroll to top on load
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-white font-serif text-gray-900 animate-in fade-in duration-700">
      {/* 1. Header with Overlay Text */}
      <header className="relative w-full h-[60vh] md:h-[70vh] overflow-hidden">
        <button 
          onClick={() => navigate(-1)} 
          className="absolute top-8 right-8 z-50 bg-white/20 backdrop-blur-md p-3 rounded-full text-white hover:bg-white hover:text-black transition-all"
        >
          <HiX className="text-2xl" />
        </button>

        <img
          src="https://images.travelandleisureasia.com/wp-content/uploads/sites/2/2025/09/12095346/India-UNESCO-sites-FI.jpg?tr=w-1200,q-60" 
          alt="India Heritage Hero"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/20 flex flex-col justify-end p-10 md:p-24">
          <h1 className="text-3xl md:text-6xl text-white font-bold max-w-5xl leading-tight">
            A guide to India’s World <br /> Heritage sites
          </h1>
        </div>
      </header>

      {/* 2. Intro Description */}
      <main className="max-w-7xl mx-auto px-6 py-20">
        <div className="max-w-4xl mb-24">
            <p className="text-[0.5rem] md:text-2xl text-gray-700 font-light leading-relaxed">
                India is a magnificent tapestry of ancient history, spiritual depth, and stunning natural landscapes. In this collection, we showcase {indiaVideoListData.length} incredible destinations that are essential cultural pillars.
            </p>
        </div>

        {/* 3. Alternating List Sections */}
        <div className="space-y-40">
          {indiaVideoListData.slice(0, 10).map((site, index) => {
            const isEven = index % 2 === 0;

            return (
              <section key={site.id} className="border-t border-gray-100 pt-20">
                <div className={`flex flex-col md:flex-row gap-12 md:gap-24 items-center ${isEven ? '' : 'md:flex-row-reverse'}`}>
                  
                  {/* Image Column */}
                  <div className="flex-1 w-full">
                    <div className="relative overflow-hidden rounded-2xl shadow-lg">
                      <img
                        src={site.imageUrl}
                        alt={site.title}
                        className="w-full aspect-[4/3] object-cover transition-transform duration-1000 hover:scale-105"
                      />
                    </div>
                    
                    {/* Minimal Guide Card under Image */}
                    <div className="mt-8 p-6 bg-gray-50 rounded-2xl border border-gray-100 flex items-center gap-5 group cursor-pointer hover:bg-white hover:shadow-xl transition-all">
                      <img src={site.imageUrl} className="w-16 h-16 rounded-lg object-cover shadow-sm" alt="thumbnail" />
                      <div>
                        <h4 className="font-bold font-sans text-sm text-orange-700 transition-colors">Guide to {site.title}</h4>
                        <p className="text-xs text-gray-400 font-sans mt-1">Read time • {site.readTime || '5 min'}</p>
                      </div>
                    </div>
                  </div>

                  {/* Information Column */}
                  <div className="flex-1 flex flex-col justify-start w-full">
                    {/* Large index number and Title */}
                    <div className="flex items-start gap-6 mb-8">
                      <span className="text-7xl md:text-9xl font-bold text-orange-100 leading-none select-none">
                        {String(index + 1).padStart(2, '0')}
                      </span>
                      <div className="pt-4 md:pt-6">
                        <h2 className="text-4xl md:text-6xl font-bold mb-4 tracking-tight leading-tight">
                          {site.title}
                        </h2>
                        <p className="text-sm uppercase tracking-[0.2em] font-sans font-bold text-gray-400">
                          Where: <span className="text-gray-900 ml-2">{site.location}</span>
                        </p>
                      </div>
                    </div>

                    {/* Description Text with responsive padding to match numbering */}
                    <div className={`${isEven ? 'md:pl-24' : 'md:pr-24'}`}>
                      <p className="text-xl text-gray-600 leading-relaxed font-light">
                        {site.description}
                      </p>
                    </div>
                  </div>

                </div>
              </section>
            );
          })}
        </div>
      </main>
    </div>
  );
};

export default TravelListPage;