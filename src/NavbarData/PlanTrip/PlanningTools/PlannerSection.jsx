import React, { useState } from 'react';
import { FaThumbsUp, FaThumbsDown } from 'react-icons/fa';
import { plannerData } from '../../../Data/PlanTrip/PlanningTools/PlannerData';

const PlannerSection = () => {
  const [selectedBook, setSelectedBook] = useState(null);
  const [isJumping, setIsJumping] = useState(false);
  const [view, setView] = useState('selection'); 
  const [currentAdventureImages, setCurrentAdventureImages] = useState([]);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Animation states
  const [isAnimating, setIsAnimating] = useState(false);
  const [swipeDir, setSwipeDir] = useState('');

  const handleBookClick = (guideId) => {
    setSelectedBook(guideId);
    setIsJumping(true);
    const chosenGuide = plannerData.guides.find(guide => guide.id === guideId);
    if (chosenGuide) {
      setCurrentAdventureImages(chosenGuide.adventureImages);
      setCurrentImageIndex(0);
    }
    setTimeout(() => {
      setIsJumping(false);
      setView('adventure');
    }, 800); 
  };

  const handleAction = (direction) => {
    if (isAnimating) return; 
    
    setIsAnimating(true);
    setSwipeDir(direction);

    // Timing synced with the CSS transition
    setTimeout(() => {
      if (currentImageIndex < currentAdventureImages.length - 1) {
        setCurrentImageIndex(prev => prev + 1);
      } else {
        setView('selection');
        setSelectedBook(null);
      }
      setIsAnimating(false);
      setSwipeDir('');
    }, 500);
  };

  return (
    <div className="w-full min-h-screen bg-[#b9e7ff] font-sans overflow-hidden relative flex flex-col">
      
      <style>{`
        /* The exit animation for the top image */
        .image-swipe-right { transform: translateX(250%) rotate(30deg); opacity: 0; }
        .image-swipe-left { transform: translateX(-250%) rotate(-30deg); opacity: 0; }
        
        /* The kangaroo's quick swipe pull */
        .kangaroo-pull { transform: translateX(-50px) translateY(10px); }
      `}</style>

      <div className="flex-1 flex flex-col items-center justify-center max-w-7xl mx-auto px-6 py-10 w-full relative">
        
        <h1 className="text-5xl md:text-7xl font-serif text-[#005e7e] mb-10 text-center z-10 font-bold tracking-tight">
          {view === 'selection' ? plannerData.title : plannerData.adventureTitle}
        </h1>

        {view === 'selection' ? (
          /* --- SELECTION SCREEN --- */
          <div className="flex flex-col md:flex-row justify-center gap-6 relative z-10 perspective-[2000px]">
            {plannerData.guides.map((guide) => (
              <div key={guide.id} onClick={() => handleBookClick(guide.id)} className="cursor-pointer transition-all duration-500 group transform-style-3d">
                <div className="relative aspect-[1/1.45] w-[280px] overflow-hidden shadow-2xl rounded-lg group-hover:-translate-y-10 transition-all">
                  <img src={guide.img} alt={guide.title} className="w-full h-full object-cover" />
                  <div className="absolute inset-0 flex flex-col items-center justify-center">
                    <h2 className="text-[#FFD700] text-7xl italic font-bold" style={{ fontFamily: '"Brush Script MT", cursive' }}>{guide.textTitle}</h2>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          /* --- ADVENTURE STACK SCREEN --- */
          <div className="flex flex-row items-center justify-center gap-10 md:gap-16 relative z-10">
            
            <button onClick={() => handleAction('left')} className="w-16 h-16 rounded-full bg-white flex items-center justify-center shadow-xl hover:bg-red-50 z-50">
              <FaThumbsDown className="text-gray-700 text-2xl" />
            </button>

            {/* The Image Stack */}
            <div className="relative w-[320px] md:w-[600px] aspect-video">
              {currentAdventureImages.slice(currentImageIndex, currentImageIndex + 3).reverse().map((img, idx, arr) => {
                const isTop = idx === arr.length - 1;
                return (
                  <div 
                    key={img}
                    style={{ 
                        // Creates the "Bunch" effect with slight offsets
                        transform: !isTop ? `translate(${idx * 6}px, ${idx * 6}px) rotate(${idx * 2}deg)` : '',
                        zIndex: idx 
                    }}
                    className={`absolute inset-0 bg-white p-3 shadow-2xl rounded-sm border border-gray-100 transition-all duration-500 ease-in
                    ${isTop && isAnimating && swipeDir === 'right' ? 'image-swipe-right' : ''}
                    ${isTop && isAnimating && swipeDir === 'left' ? 'image-swipe-left' : ''}
                    `}
                  >
                    <img src={img} alt="Adventure" className="w-full h-full object-cover" />
                  </div>
                );
              })}
            </div>

            <button onClick={() => handleAction('right')} className="w-16 h-16 rounded-full bg-white flex items-center justify-center shadow-xl hover:bg-green-50 z-50">
              <FaThumbsUp className="text-gray-700 text-2xl" />
            </button>
          </div>
        )}
        
        {/* KANGAROO: Remains in selection position, swiping without flipping */}
        <div 
          className={`absolute bottom-[-10px] left-[55%] md:left-[60%] z-40 h-[250px] md:h-[320px] pointer-events-none transition-all duration-300
            ${isAnimating ? 'kangaroo-pull' : ''}
            ${isJumping ? '-translate-y-32' : ''}
          `}
        >
          <img 
            src={plannerData.kangarooImg} 
            alt="Kangaroo" 
            className="w-full h-full object-contain drop-shadow-2xl" 
          />
        </div>

      </div>
    </div>
  );
};

export default PlannerSection;