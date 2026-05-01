import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { HiX, HiChevronLeft, HiChevronRight } from "react-icons/hi";
// Importing the data to enable navigation between items
import { travelInspirationStoryData } from './TravelInspirationData';
//import { travelInspirationData } from '../Data/BeInspiredData/TravelInspirationData/TravelInspirationData';

const TravelStoryPlayer = () => {
  const { state } = useLocation();
  const navigate = useNavigate();
  
  // Find the initial index of the story passed via state
  const initialIndex = travelInspirationStoryData.findIndex(item => item.id === state?.storyData?.id);
  const [currentIndex, setCurrentIndex] = useState(initialIndex !== -1 ? initialIndex : 0);
  const [progress, setProgress] = useState(0);

  // Auto-progress simulation
  useEffect(() => {
    setProgress(0); // Reset progress whenever the story changes
    const timer = setInterval(() => {
      setProgress((old) => {
        if (old >= 100) {
          handleNext(); // Automatically go to next story when progress finishes
          return 0;
        }
        return old + 1;
      });
    }, 50);
    return () => clearInterval(timer);
  }, [currentIndex]);

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % travelInspirationStoryData.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + travelInspirationStoryData.length) % travelInspirationStoryData.length);
  };

  const currentStory = travelInspirationStoryData[currentIndex];

  if (!currentStory) return null;

  return (
    <div className="fixed inset-0 z-[200] bg-black flex items-center justify-center">
      {/* Close Button */}
      <button 
        onClick={() => navigate(-1)}
        className="absolute top-8 right-8 z-50 text-white text-4xl hover:scale-110 transition-transform"
      >
        <HiX />
      </button>

      {/* Story Container */}
      <div className="relative w-full max-w-[450px] h-[90vh] md:h-[85vh] bg-zinc-900 rounded-3xl overflow-hidden shadow-2xl border border-white/10">
        
        {/* Progress Bars (Dynamic based on data length) */}
        <div className="absolute top-4 left-0 right-0 px-4 flex gap-2 z-50">
          {travelInspirationStoryData.map((_, index) => (
            <div key={index} className="h-1 flex-1 bg-white/20 rounded-full overflow-hidden">
              <div 
                className="h-full bg-white transition-all duration-100" 
                style={{ 
                  width: index === currentIndex ? `${progress}%` : index < currentIndex ? '100%' : '0%' 
                }} 
              />
            </div>
          ))}
        </div>

        {/* Video/Image Content */}
        <video 
          key={currentStory.video} // Use key to force video reload on source change
          src={currentStory.video || "https://assets.mixkit.co/videos/preview/mixkit-curvy-road-in-the-middle-of-a-forest-34533-large.mp4"} 
          autoPlay 
          muted 
          loop
          playsInline
          className="w-full h-full object-cover"
        />

        {/* Overlay Text */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex flex-col justify-end p-10">
          <h3 className="text-white text-2xl font-bold mb-2 leading-snug">
            {currentStory.title || `Discovering the hidden gems of ${currentStory.name}`}
          </h3>
          <p className="text-white/70 text-sm mb-6 uppercase tracking-widest">
            {currentStory.location || "India"}
          </p>
        </div>

        {/* Navigation Arrows */}
        <button 
          onClick={handlePrev}
          className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 z-[60] rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center text-white hover:bg-white/20 transition-colors"
        >
          <HiChevronLeft size={24} />
        </button>
        <button 
          onClick={handleNext}
          className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 z-[60] rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center text-white hover:bg-white/20 transition-colors"
        >
          <HiChevronRight size={24} />
        </button>
      </div>
    </div>
  );
};

export default TravelStoryPlayer;