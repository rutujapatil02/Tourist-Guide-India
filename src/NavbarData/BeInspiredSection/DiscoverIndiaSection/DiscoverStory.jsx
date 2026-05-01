import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { discoverIndiaData2 } from '../../../Data/BeInspiredData/DiscoverIndiaData/DiscoverIndiaData';
import { ThumbsUp, ThumbsDown } from 'lucide-react';

const DiscoverStory = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const category = discoverIndiaData2?.find(item => 
    String(item.id).trim() === String(id).trim()
  );
  
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isFinished, setIsFinished] = useState(false);

  // Debugging: Check if data is loading and index is changing
  useEffect(() => {
    console.log("Current Page Index:", currentIndex);
    console.log("Total Stories:", category?.stories?.length);
  }, [currentIndex, category]);

  if (!category || !category.stories) {
    return (
      <div className="h-screen flex items-center justify-center bg-[#D1E9F6]">
        <div className="text-center font-sans">
          <h2 className="text-2xl font-serif text-[#004D71]">Data not found for: {id}</h2>
          <button onClick={() => navigate(-1)} className="mt-4 text-[#3c3d3d] hover:underline">Go Back</button>
        </div>
      </div>
    );
  }

  const handleChoice = (e) => {
    e.preventDefault(); // Prevent any default behavior
    console.log("Like Clicked!"); // Check your browser console (F12) for this
    
    if (currentIndex < category.stories.length - 1) {
      setCurrentIndex(prev => prev + 1);
    } else {
      setIsFinished(true);
    }
  };

  if (isFinished) {
    return (
      <div className="relative h-screen w-full bg-black overflow-hidden font-sans">
        <img src={category.finalResult.img} className="w-full h-full object-cover opacity-70 transition-opacity duration-1000" alt="Final" />
        <div className="absolute inset-0 flex flex-col justify-end p-12 md:p-20 bg-gradient-to-t from-black/90 via-black/20 to-transparent">
          <h1 className="text-white text-5xl md:text-7xl font-serif max-w-3xl leading-tight mb-8 animate-in slide-in-from-bottom-5 duration-700">
            {category.finalResult.title}
          </h1>
          <button className="bg-[#FFCD00] text-black font-bold py-4 px-10 rounded-full w-fit hover:scale-105 transition-transform uppercase tracking-widest text-sm">
            Learn more
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="relative h-screen w-full bg-[#D1E9F6] flex flex-col items-center overflow-hidden font-sans">
      
      {/* 1. Progress Bar */}
      <div className="absolute top-0 left-0 w-full px-4 pt-8 flex gap-2 z-50">
        {category.stories.map((_, index) => (
          <div key={index} className="h-1.5 flex-1 bg-black/10 rounded-full overflow-hidden">
            <div 
              className={`h-full bg-black transition-all duration-700 ease-in-out ${index <= currentIndex ? 'w-full' : 'w-0'}`}
            />
          </div>
        ))}
      </div>

      {/* 2. Header */}
      <div className="mt-28 text-center px-4 z-10">
        <h2 className="text-[#004D71] text-4xl md:text-6xl font-serif tracking-tight max-w-4xl mx-auto">
          {category.stories[currentIndex].question}
        </h2>
      </div>

      {/* 3. Interaction Area */}
      <div className="relative flex-1 flex items-center justify-center w-full max-w-6xl px-6">
        
        {/* Dislike Button */}
        <button 
          onClick={() => currentIndex > 0 ? setCurrentIndex(prev => prev - 1) : navigate(-1)} 
          className="relative z-50 p-6 bg-white rounded-full shadow-2xl hover:scale-110 active:scale-90 transition-all group"
        >
          <ThumbsDown className="text-gray-300 group-hover:text-gray-500" size={32} />
        </button>

        {/* Stacked Image Container */}
        <div className="relative mx-4 md:mx-16 w-full max-w-2xl z-10">
            {/* Background Layers */}
            <div className="absolute inset-0 bg-white border-4 border-white shadow-xl rounded-sm transform rotate-3 translate-x-2 translate-y-2 -z-10"></div>
            <div className="absolute inset-0 bg-white border-4 border-white shadow-lg rounded-sm transform -rotate-2 -translate-x-1 -translate-y-1 -z-10"></div>
            
            <div className="relative aspect-[4/3] bg-white p-3 shadow-2xl rounded-sm">
                <img 
                  key={currentIndex}
                  src={category.stories[currentIndex].img} 
                  className="w-full h-full object-cover" 
                  alt="Choice" 
                />
                
                {/* Mascot - ensure it doesn't block buttons */}
                <div className="absolute -bottom-8 -right-8 w-32 md:w-48 z-20 pointer-events-none">
                    <img src="/mascot-kangaroo.png" className="w-full h-auto drop-shadow-2xl" alt="" />
                </div>
            </div>
        </div>

        {/* Like Button - INCREASED Z-INDEX */}
        <button 
          onClick={handleChoice} 
          className="relative z-50 p-6 bg-white rounded-full shadow-2xl hover:scale-110 active:scale-90 transition-all group cursor-pointer"
        >
          <ThumbsUp className="text-[#41aab4]" size={32} />
        </button>
      </div>
    </div>
  );
};

export default DiscoverStory;