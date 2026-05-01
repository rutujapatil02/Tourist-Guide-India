import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FiHeart, FiShare2 } from 'react-icons/fi'; 
import { FaHeart } from 'react-icons/fa'; 

const DestinationHeader = ({ name, showActions = true }) => {
  const [isLiked, setIsLiked] = useState(false);

  return (
    <div className="w-full absolute top-0 left-0 z-[100]">
      
      {/* 1. STICKY NAV BAR */}
      <nav className="bg-[#41aab4] text-white text-[11px] h-11 px-6 uppercase tracking-[0.2em] font-bold flex items-center shadow-md font-sans">
        <div className="max-w-7xl mx-auto w-full flex items-center">
          <Link to="/" className="hover:opacity-70">Home</Link>
          <span className="mx-3 opacity-60 text-[14px]">&gt;</span>
          <span className="opacity-60">Places to go</span>
          <span className="mx-3 opacity-60 text-[14px]">&gt;</span>
          <span className="text-white border-b border-white pb-0.5 tracking-widest">
            Guide to {name}
          </span>
        </div>
      </nav>

      {/* 2. ICONS (CONTROLLED) */}
      {showActions && (
        <div className="absolute top-[450px] right-12 md:right-24 flex gap-4 z-[110]">
          
          <button 
            onClick={() => setIsLiked(!isLiked)}
            className={`group p-4 rounded-full backdrop-blur-md transition-all duration-300 shadow-xl border border-white/20 flex items-center justify-center ${
              isLiked ? "bg-white" : "bg-black/30 hover:bg-white"
            }`}
          >
            {isLiked ? (
              <FaHeart className="text-black scale-110" size={20} />
            ) : (
              <FiHeart className="text-white group-hover:text-black" size={20} />
            )}
          </button>
          
          <button className="group bg-black/30 hover:bg-white p-4 rounded-full backdrop-blur-md transition-all duration-300 shadow-xl border border-white/20 flex items-center justify-center">
            <FiShare2 className="text-white group-hover:text-black" size={20} />
          </button>

        </div>
      )}

    </div>
  );
};

export default DestinationHeader;