import React, { useState, useRef, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { HiX, HiChevronLeft, HiChevronRight, HiOutlineVolumeUp, HiOutlineVolumeOff } from "react-icons/hi";
import { FaPlay, FaPause } from "react-icons/fa";
import { indiaVideoData } from './TravelInspirationData'; 

const VideoPlayerPage = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const videoRef = useRef(null);
  
  const getInitialIndex = () => {
    const videoDataFromState = location.state?.videoData;
    if (!videoDataFromState || !indiaVideoData) return 0;
    const index = indiaVideoData.findIndex(v => v.id === videoDataFromState.id);
    return index !== -1 ? index : 0;
  };

  const [currentIndex, setCurrentIndex] = useState(getInitialIndex());
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(false);
  const [progress, setProgress] = useState(0);

  const currentVideo = indiaVideoData[currentIndex];

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.muted = isMuted;
      videoRef.current.play().catch((err) => console.log("Autoplay prevented", err));
      setIsPlaying(true);
    }
  }, [currentIndex, isMuted]);

  const togglePlay = () => {
    if (videoRef.current.paused) {
      videoRef.current.play();
      setIsPlaying(true);
    } else {
      videoRef.current.pause();
      setIsPlaying(false);
    }
  };

  const handleTimeUpdate = () => {
    if (videoRef.current) {
      setProgress((videoRef.current.currentTime / videoRef.current.duration) * 100);
    }
  };

  const handleNext = () => setCurrentIndex((prev) => (prev + 1) % indiaVideoData.length);
  const handlePrev = () => setCurrentIndex((prev) => (prev - 1 + indiaVideoData.length) % indiaVideoData.length);

  /**
   * UPDATED: Navigation logic
   * If you have a specific route for the travel page, use that string.
   * If it's a section on the home page, you can use state to tell the home 
   * page to scroll back to that section.
   */
  const handleClose = () => {
    // Replace '/' with the actual route of your travel inspiration page
    // e.g., navigate('/travel-inspiration');
    // If it's on the main page, we stay with navigate(-1) but ensure it's reliable
    navigate('/travel-inspiration'); 
  };

  const nextVideo = indiaVideoData[(currentIndex + 1) % indiaVideoData.length];
  const prevVideo = indiaVideoData[(currentIndex - 1 + indiaVideoData.length) % indiaVideoData.length];

  return (
    <div className="fixed inset-0 z-[250] bg-black flex items-center justify-center overflow-hidden font-sans">
      
      {/* Updated Close Button */}
      <button 
        onClick={handleClose} 
        className="absolute top-8 right-8 text-white/60 hover:text-white hover:rotate-90 text-4xl z-[300] transition-all duration-300 cursor-pointer"
        aria-label="Close and return to travel inspiration"
      >
        <HiX />
      </button>

      {/* Side Video: Previous (Left Side) */}
      <div className="absolute left-[2%] lg:left-[8%] opacity-20 scale-[0.75] blur-[2px] hidden md:block pointer-events-none transition-all duration-500">
         <div className="h-[60vh] aspect-[9/16] bg-zinc-900 rounded-2xl overflow-hidden border border-white/10">
            <video key={`prev-${prevVideo.id}`} src={prevVideo.video} className="w-full h-full object-cover" muted loop autoPlay />
         </div>
         <p className="text-white/40 text-center mt-4 text-xs">{prevVideo.name}</p>
      </div>

      {/* Side Video: Next (Right Side) */}
      <div className="absolute right-[2%] lg:right-[8%] opacity-20 scale-[0.75] blur-[2px] hidden md:block pointer-events-none transition-all duration-500">
         <div className="h-[60vh] aspect-[9/16] bg-zinc-900 rounded-2xl overflow-hidden border border-white/10">
            <video key={`next-${nextVideo.id}`} src={nextVideo.video} className="w-full h-full object-cover" muted loop autoPlay />
         </div>
         <p className="text-white/40 text-center mt-4 text-xs">{nextVideo.name}</p>
      </div>

      {/* Navigation Controls */}
      <button onClick={handlePrev} className="absolute left-[18%] lg:left-[24%] bg-white/10 hover:bg-white/20 p-3 rounded-full text-white text-2xl z-[260] transition-all">
        <HiChevronLeft />
      </button>

      <button onClick={handleNext} className="absolute right-[18%] lg:right-[24%] bg-white/10 hover:bg-white/20 p-3 rounded-full text-white text-2xl z-[260] transition-all">
        <HiChevronRight />
      </button>

      {/* MAIN ACTIVE VIDEO CONTAINER */}
      <div className="relative h-[85vh] aspect-[9/16] bg-black rounded-3xl overflow-hidden shadow-2xl border border-white/10 z-[255]">
        <video
          key={currentVideo.id}
          ref={videoRef}
          src={currentVideo.video}
          muted={isMuted}
          onTimeUpdate={handleTimeUpdate}
          onEnded={handleNext}
          autoPlay
          playsInline
          className="w-full h-full object-cover cursor-pointer"
          onClick={togglePlay}
        />

        {/* Info Overlay */}
        <div className="absolute top-8 left-8 text-white z-20">
            <p className="text-[10px] uppercase tracking-[4px] font-semibold opacity-70">The highlights</p>
        </div>

        {/* Controls Overlay */}
        <div className="absolute bottom-0 left-0 right-0 p-8 bg-gradient-to-t from-black/90 via-black/20 to-transparent">
          <div className="mb-6">
               <h3 className="text-2xl font-bold text-white tracking-tight">{currentVideo.name}</h3>
               <p className="text-sm text-white/50 font-medium mt-1">Incredible India</p>
          </div>

          <div className="w-full h-[1.5px] bg-white/20 rounded-full mb-6">
            <div className="h-full bg-white transition-all duration-100" style={{ width: `${progress}%` }} />
          </div>

          <div className="flex items-center justify-between text-white">
            <div className="flex items-center gap-8">
                <button onClick={togglePlay} className="text-xl">{isPlaying ? <FaPause /> : <FaPlay />}</button>
                <button onClick={() => setIsMuted(!isMuted)} className="text-2xl">
                    {isMuted ? <HiOutlineVolumeOff /> : <HiOutlineVolumeUp />}
                </button>
            </div>
            <div className="flex items-center gap-5 opacity-70 text-[11px] font-bold">
                <span>HD</span> 
                <button className="border border-white/30 px-1 rounded-sm text-[8px]">CC</button>
                <button className="text-lg">⛶</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideoPlayerPage;