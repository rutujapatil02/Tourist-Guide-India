import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { HiArrowRight, HiPlay, HiMenuAlt4 } from "react-icons/hi"; 
//import Footer from '../../components/Footer';
import Footer from '../../../components/Footer';
// Data Imports
//import { travelInspirationData } from '../../Data/BeInspiredData/TravelInspirationData/TravelInspirationData';

//import { travelVideoData } from '../../Data/BeInspiredData/TravelInspirationData/TravelVideoData/TravelVideoData';

import { travelInspirationData } from '../../../Data/BeInspiredData/TravelInspirationData/TravelInspirationData';
import { travelVideoData } from '../../../Data/BeInspiredData/TravelVideoData/TravelVideoData';
const TravelInspirationSection = ({ onBack }) => {
  const navigate = useNavigate();
  const [videoIndex, setVideoIndex] = useState(0);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const nextVideo = () => {
    if (travelVideoData && travelVideoData.length > 0) {
      setVideoIndex((prev) => (prev + 1) % travelVideoData.length);
    }
  };

  const handleVideoClick = (videoItem) => {
    navigate('/video-player', { state: { videoData: videoItem } });
  };

  // Fixed Navigation: Added e.preventDefault() just in case
  const handleSeeList = (e) => {
    e.stopPropagation();
    navigate('/travel-list-page'); 
  };

  const handleCardClick = (item) => {
    navigate('/travel-stories', { state: { storyData: item } });
  };

  return (
    <div className="absolute inset-0 z-[100] w-full min-h-screen bg-white overflow-y-auto animate-in fade-in slide-in-from-right duration-500 no-scrollbar">
      
      {/* 1. Breadcrumb Navbar */}
      <div className="bg-[#41aab4] text-white py-3 px-8 flex items-center gap-2 text-[13px] font-light sticky top-0 z-50">
        <span className="cursor-pointer hover:underline opacity-80" onClick={() => navigate('/')}>Home</span> 
        <span className="text-[10px] opacity-60">{">"}</span>
        <span className="cursor-pointer hover:underline" onClick={onBack}>Inspiration for your India trip</span> 
        <span className="text-[10px] opacity-60">{">"}</span>
        <span className="font-normal underline underline-offset-4 decoration-1">Experience Incredible India</span>
      </div>

      {/* 2. Hero Section */}
      <div className="relative h-[80vh] w-full overflow-hidden">
        <img 
          src="https://images.unsplash.com/photo-1506973035872-a4ec16b8e8d9?w=1600" 
          alt="Inspiration Hero"
          className="w-full h-full object-cover shadow-inner"
        />
        <div className="absolute inset-0 bg-black/30 flex flex-col items-start justify-end text-white text-left px-16 pb-32">
          <h1 className="text-5xl md:text-8xl font-serif leading-tight drop-shadow-2xl max-w-4xl">
            Inspiration for your <br/> Indian holiday
          </h1>
        </div>
      </div>

      {/* 3. Content Body */}
      <div className="relative z-10 -mt-10 ml-10 mr-10 bg-white pt-20 rounded-t-[40px]">
        
        <div className="max-w-7xl mx-10 mb-5">
          <p className="text-xl md:text-2xl text-gray-800 font-light leading-snug">
            India is a tapestry of ancient temples, sun-kissed coasts, bustling markets, and timeless monuments – <span className="font-medium">discover a world where every corner reveals a new, vibrant story.</span>
          </p>
        </div>

        {/* --- STACKED VIDEO SECTION --- */}
        <div className="bg-[#f8fbff] py-20 relative">
          <div className="max-w-7xl mx-auto px-10 flex flex-col md:flex-row items-center gap-16">
            <div className="flex-1 md:pr-12">
              <p className="text-orange-500 uppercase tracking-widest text-sm font-bold mb-3">Explore Incredible India</p>
              <h1 className="text-5xl md:text-7xl font-serif text-gray-900 leading-tight mb-6">
                Explore the Heart <br/> of India
              </h1>
              <p className="text-lg text-gray-600 leading-relaxed max-w-2xl">
                Discover a collection of stories told through the lens of adventure.
              </p>
            </div>

            <div className="w-full md:w-[420px] relative h-[600px] flex items-center justify-center">
              {travelVideoData?.map((item, index) => {
                const position = (index - videoIndex + travelVideoData.length) % travelVideoData.length;
                const isCurrent = position === 0;

                let styles = "opacity-0 scale-90 translate-x-12 z-0 pointer-events-none"; 
                if (position === 0) styles = "opacity-100 scale-100 translate-x-0 z-30 shadow-2xl cursor-pointer";
                if (position === 1) styles = "opacity-70 scale-95 translate-x-6 z-20";
                if (position === 2) styles = "opacity-40 scale-90 translate-x-12 z-10";

                return (
                  <div
                    key={item.id}
                    onClick={() => isCurrent && handleVideoClick(item)}
                    className={`absolute inset-0 transition-all duration-700 ease-in-out transform ${styles}`}
                  >
                    <div className="relative w-full h-full bg-white rounded-[32px] overflow-hidden border border-gray-100">
                      <video 
                        src={item.video} 
                        poster={item.img}
                        muted 
                        playsInline 
                        className="w-full h-full object-cover" 
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent z-10" />
                      
                      {isCurrent && (
                        <div className="absolute inset-0 flex items-center justify-center z-20">
                          <div className="w-20 h-20 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center hover:scale-110 transition-transform border border-white/30">
                            <HiPlay className="text-white text-5xl" />
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                );
              })}

              <button 
                onClick={nextVideo}
                className="absolute -right-6 bottom-12 z-50 bg-white text-black p-5 rounded-full shadow-2xl hover:scale-110 transition-transform flex items-center justify-center group"
              >
                <HiArrowRight className="text-2xl group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>
        </div>

        {/* --- SEE LIST SECTION --- */}
        <div 
          className="relative w-full h-[500px] mt-20 group overflow-hidden cursor-pointer" 
          onClick={handleSeeList}
        >
            <img 
                src="https://images.unsplash.com/photo-1524492412937-b28074a5d7da?q=80&w=2071" 
                alt="See all destinations"
                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-black/30 group-hover:bg-black/50 transition-colors duration-500" />
            
            <div className="absolute bottom-12 right-16 z-[60]">
                {/* Applied handleSeeList specifically to the button as well */}
                <button 
                  onClick={handleSeeList}
                  className="flex items-center gap-3 text-white px-10 py-5 rounded-full font-bold tracking-[2px] bg-black hover:bg-orange-600 transition-all shadow-2xl"
                >
                  <HiMenuAlt4 className="text-2xl" />
                  <span className="text-sm">SEE LIST</span>
                  <HiArrowRight className="text-lg ml-2" />
                </button>
            </div>
            
            <div className="absolute bottom-12 left-16 text-white">
                <p className="text-xs uppercase tracking-[4px] font-bold opacity-80">Full Directory</p>
                <h2 className="text-4xl font-serif mt-2">All Destinations</h2>
            </div>
        </div>

        {/* --- HORIZONTAL DESTINATION CARDS --- */}
        <div className="bg-white py-24">
          <div className="max-w-7xl mx-auto px-10 mb-12">
            <h2 className="text-4xl md:text-5xl font-serif text-gray-900 mb-4 border-l-8 border-orange-500 pl-6">
              Explore the best of India
            </h2>
          </div>

          <div className="flex overflow-x-auto gap-6 px-10 pb-12 no-scrollbar snap-x">
            {travelInspirationData?.map((item) => (
              <div 
                key={item.id} 
                onClick={() => handleCardClick(item)}
                className="relative min-w-[300px] md:min-w-[400px] h-[500px] rounded-2xl overflow-hidden cursor-pointer group snap-start shadow-xl"
              >
                <img 
                  src={item.img} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
                  alt={item.name} 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent" />
                
                <div className="absolute inset-0 p-8 flex flex-col justify-end">
                  <p className="text-white text-2xl font-bold leading-tight drop-shadow-lg">
                    {item.title || `Experience the beauty of ${item.name}`}
                  </p>
                  <div className="mt-4 flex items-center gap-2 text-white/80 text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity">
                    <span>Watch Story</span>
                    <HiArrowRight />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div> 

      <Footer />
    </div>
  );
};

export default TravelInspirationSection;