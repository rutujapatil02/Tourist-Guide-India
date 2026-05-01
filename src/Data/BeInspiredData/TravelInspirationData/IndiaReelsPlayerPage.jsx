// src/Data/BeInspiredData/TravelInspirationData/IndiaReelsPlayerPage.jsx
import React, { useState, useRef, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { HiX, HiChevronRight } from "react-icons/hi"; // Close and right nav icons

import { indiaVideoData } from './TravelInspirationData'; 
const IndiaReelsPlayerPage = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const videoRef = useRef(null);
  
  // Find initial video from navigation state
  const initialVideo = location.state?.videoData;
  const initialIndex = indiaVideoListData.findIndex(v => v.id === initialVideo?.id);
  
  // State from the provided code
  const [currentIndex, setCurrentIndex] = useState(initialIndex !== -1 ? initialIndex : 0);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(false);
  const [progress, setProgress] = useState(0);

  const currentVideo = indiaVideoListData[currentIndex];

  // Side-by-side stack logic based on imge 1 structure
  const nextVideo = indiaVideoListData[(currentIndex + 1) % indiaVideoListData.length];
  const nextNextVideo = indiaVideoListData[(currentIndex + 2) % indiaVideoListData.length];

  // Logic to handle next video click
  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % indiaVideoListData.length);
    setIsPlaying(true);
  };

  // Error handling from provided code
  if (!currentVideo) return <div className="bg-black h-screen flex items-center justify-center text-white">Video not found</div>;

  return (
    // Base layout from provided code
    <div className="fixed inset-0 z-[200] bg-black flex items-center justify-center overflow-hidden font-sans text-white">
      
      {/* --- Close X in Top Right (cite: image 1) --- */}
      <button 
        onClick={() => navigate(-1)} // Assuming navigate to previous list view
        className="absolute top-10 right-10 text-white text-4xl z-[250] transition-transform hover:scale-110"
      >
        <HiX />
      </button>

      {/* --- Left focused description block (cite: image 1) --- */}
      <div className="absolute left-[8%] max-w-sm z-30">
        <h2 className="text-xl text-gray-400 font-light tracking-widest uppercase mb-1">India's epic World Heritage sites</h2>
        <p className="text-gray-600 text-base leading-relaxed">Discover a collection of stories told through the lens of adventure.</p>
      </div>

      {/* --- Main Active Video (cite: provided VideoPlayerPage.jsx aspect ratio) --- */}
      <div className="relative h-[80vh] aspect-[9/16] bg-zinc-900 rounded-2xl overflow-hidden shadow-[0_0_60px_rgba(0,0,0,0.8)] border border-white/10 z-[210]">
        
        {/* Poster from new data */}
        <video
          ref={videoRef}
          src={currentVideo.video}
          poster={currentVideo.poster} // Use poster as a placeholder/backup
          autoPlay
          muted={isMuted} // Keep provided mute state
          onEnded={handleNext} // Auto-advance from provided code
          className="w-full h-full object-cover"
        />

        {/* Info overlay on video (cite: provided VideoPlayerPage.jsx logic for CC etc) */}
        <div className="absolute bottom-10 left-8 z-30 flex items-end gap-3">
          <button className="text-xl p-2 hover:bg-black/40 rounded">CC</button>
          <button className="text-xl p-2 hover:bg-black/40 rounded">⛶</button>
        </div>
      </div>

      {/* --- Stacked Previews on the Right (cite: image 1) --- */}
      <div className="absolute right-[8%] z-10 flex gap-4">
        {/* Next Video Preview */}
        <div className="opacity-50 blur-[2px] transition-all duration-700 aspect-[9/16] h-[60vh] rounded-2xl overflow-hidden border border-white/10">
          <img src={nextVideo.poster} className="w-full h-full object-cover" alt="Next preview" />
        </div>
        
        {/* Next-Next Video Preview (more obscured) */}
        <div className="opacity-30 blur-[4px] aspect-[9/16] h-[60vh] rounded-2xl overflow-hidden border border-white/10">
          <img src={nextNextVideo.poster} className="w-full h-full object-cover" alt="Next-Next preview" />
        </div>
      </div>

      {/* --- Right Navigation Icon (cite: image 1) --- */}
      <button 
        onClick={handleNext}
        className="absolute right-[22%] bg-black/50 p-4 rounded-full text-white text-3xl z-[230] transition-all hover:bg-black/80 hover:scale-110"
      >
        <HiChevronRight />
      </button>

    </div>
  );
};

export default IndiaReelsPlayerPage;