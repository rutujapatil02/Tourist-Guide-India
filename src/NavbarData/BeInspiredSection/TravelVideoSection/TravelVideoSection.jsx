import React, { useState, useRef, useEffect } from 'react';
import { travelVideoData2 } from '../../../Data/BeInspiredData/TravelVideoData/TravelVideoData';
import { X, Play, ChevronRight, ChevronLeft, MapPin, Volume2, VolumeX } from 'lucide-react';

/* ─── tiny helpers ─────────────────────────────────────── */
const Tag = ({ label }) => (
  <span className="inline-block bg-[#FF6B35]/20 border border-[#FF6B35]/40 text-[#FF6B35] text-[10px] font-black uppercase tracking-[0.2em] px-3 py-1 rounded-full">
    {label}
  </span>
);

/* ═══════════════════════════════════════════════════════
   INSTAGRAM-STYLE STORY PLAYER OVERLAY
══════════════════════════════════════════════════════════ */
const StoryPlayer = ({ video, onClose }) => {
  const [currentStoryIndex, setCurrentStoryIndex] = useState(0);
  const [progress, setProgress] = useState(0);
  const timerRef = useRef(null);
  const STORY_DURATION = 4000;

  const currentVideo = video;
  const story = currentVideo?.stories?.[currentStoryIndex];

  const goToNext = () => {
    if (currentStoryIndex < currentVideo.stories.length - 1) {
      setCurrentStoryIndex(prev => prev + 1);
      setProgress(0);
    } else {
      onClose();
    }
  };

  const goToPrev = () => {
    if (currentStoryIndex > 0) {
      setCurrentStoryIndex(prev => prev - 1);
      setProgress(0);
    }
  };

  useEffect(() => {
    setProgress(0);
    if (story?.type === 'image') {
      let start = null;
      const step = (ts) => {
        if (!start) start = ts;
        const elapsed = ts - start;
        const pct = Math.min((elapsed / STORY_DURATION) * 100, 100);
        setProgress(pct);
        if (pct < 100) {
          timerRef.current = requestAnimationFrame(step);
        } else {
          goToNext();
        }
      };
      timerRef.current = requestAnimationFrame(step);
    }
    return () => cancelAnimationFrame(timerRef.current);
  }, [currentStoryIndex, currentVideo]);

  if (!currentVideo) return null;

  return (
    <div className="fixed inset-0 z-[200] bg-black flex items-center justify-center">
      <div className="relative w-full max-w-sm h-full md:h-[90vh] md:max-h-[700px] md:rounded-3xl overflow-hidden shadow-2xl">
        {story?.type === 'video' ? (
          <video
            key={story.url}
            src={story.url}
            className="absolute inset-0 w-full h-full object-cover"
            autoPlay muted playsInline
            onEnded={goToNext}
          />
        ) : (
          <img
            key={story?.url}
            src={story?.url}
            alt="story"
            className="absolute inset-0 w-full h-full object-cover"
          />
        )}
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-black/80" />
        <div className="absolute top-0 left-0 w-full px-4 pt-4 z-50">
          <div className="flex gap-1.5 mb-4">
            {currentVideo.stories.map((_, i) => (
              <div key={i} className="h-[3px] flex-1 bg-white/30 rounded-full overflow-hidden">
                <div
                  className="h-full bg-white rounded-full transition-none"
                  style={{
                    width: i < currentStoryIndex ? '100%' : i === currentStoryIndex ? `${progress}%` : '0%',
                  }}
                />
              </div>
            ))}
          </div>
          <button onClick={onClose} className="w-9 h-9 bg-white/20 hover:bg-white/40 backdrop-blur-md rounded-full flex items-center justify-center text-white"><X size={18} /></button>
        </div>
        <div className="absolute inset-0 flex z-40">
          <div className="w-1/3 h-full cursor-pointer" onClick={goToPrev} />
          <div className="w-1/3 h-full" />
          <div className="w-1/3 h-full cursor-pointer" onClick={goToNext} />
        </div>
        <div className="absolute bottom-0 left-0 w-full p-6 z-50">
          <Tag label={currentVideo.tag} />
          <h2 className="text-white text-3xl font-serif italic leading-tight mt-2 mb-1">{currentVideo.title}</h2>
          <p className="text-white/70 text-sm mb-4">{story?.caption}</p>
        </div>
      </div>
    </div>
  );
};

/* ═══════════════════════════════════════════════════════
   FEATURED VIDEO + RELATED CARDS SECTION
══════════════════════════════════════════════════════════ */
const FeaturedVideoBlock = ({ video }) => {
  // State to track which video is currently "Active" in the big player
  const [activeVideo, setActiveVideo] = useState({
    title: video.featuredVideoTitle,
    url: video.featuredVideoUrl,
    thumb: video.featuredVideoThumb
  });
  
  const [playing, setPlaying] = useState(false);
  const [muted, setMuted] = useState(true);
  const videoRef = useRef(null);

  // Sync state if the video prop changes from parent
  useEffect(() => {
    setActiveVideo({
      title: video.featuredVideoTitle,
      url: video.featuredVideoUrl,
      thumb: video.featuredVideoThumb
    });
    setPlaying(false);
  }, [video]);

  // Reset play state and update video when a card is clicked
  const handleCardClick = (card) => {
    setPlaying(false);
    setActiveVideo({
      title: card.title,
      url: card.videoUrl || video.featuredVideoUrl, 
      thumb: card.img
    });
    // Optional: auto-play upon click
    setPlaying(true);
    setTimeout(() => videoRef.current?.play(), 50);
  };

  const handlePlay = () => {
    setPlaying(true);
    setTimeout(() => videoRef.current?.play(), 50);
  };

  return (
    <div className="w-full max-w-[1600px] mx-auto px-6 md:px-16 py-20 border-t border-gray-100">
      <div className="mb-10">
        <p className="text-[#FF6B35] font-black text-xs tracking-[0.4em] uppercase mb-3">Epic Experiences</p>
        <h2 className="text-4xl md:text-5xl font-serif italic text-gray-900">{activeVideo.title}</h2>
      </div>

      <div className="relative rounded-3xl overflow-hidden aspect-video bg-black shadow-2xl mb-6 group">
        {!playing ? (
          <>
            <img src={activeVideo.thumb} alt={activeVideo.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
            <div className="absolute inset-0 bg-black/30" />
            <button onClick={handlePlay} className="absolute inset-0 flex items-center justify-center">
              <div className="w-20 h-20 bg-white/90 hover:bg-[#FFCD00] rounded-full flex items-center justify-center shadow-2xl transition-all hover:scale-110 group-hover:scale-105">
                <Play className="fill-black text-black ml-1" size={32} />
              </div>
            </button>
            <div className="absolute bottom-6 left-6">
              <Tag label={video.tag} />
              <h3 className="text-white text-2xl font-serif italic mt-2 drop-shadow-lg">{activeVideo.title}</h3>
            </div>
          </>
        ) : (
          <>
            <video
              ref={videoRef}
              key={activeVideo.url} // Key forces re-render when URL changes
              src={activeVideo.url}
              className="w-full h-full object-cover"
              muted={muted}
              controls={false}
              playsInline
              autoPlay
              loop
            />
            <div className="absolute bottom-4 right-4 flex gap-2">
              <button onClick={() => setMuted(m => !m)} className="w-10 h-10 bg-black/50 hover:bg-black/80 rounded-full flex items-center justify-center text-white backdrop-blur-md transition-all">
                {muted ? <VolumeX size={18} /> : <Volume2 size={18} />}
              </button>
            </div>
          </>
        )}
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {video.relatedCards.map((card) => (
          <div
            key={card.id}
            onClick={() => handleCardClick(card)}
            className={`relative rounded-2xl overflow-hidden aspect-video cursor-pointer group shadow-lg transition-all duration-300 ${activeVideo.title === card.title ? 'ring-4 ring-[#FF6B35]' : ''}`}
          >
            <img src={card.img} alt={card.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent" />
            <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
              <div className="w-10 h-10 bg-white/80 rounded-full flex items-center justify-center">
                <Play className="fill-black ml-0.5" size={16} />
              </div>
            </div>
            <p className="absolute bottom-3 left-3 right-3 text-white text-xs font-bold leading-tight drop-shadow-md">{card.title}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

/* ═══════════════════════════════════════════════════════
   MAIN COMPONENT
══════════════════════════════════════════════════════════ */
const TravelVideoSection = ({ onBack }) => {
  const [storyVideo, setStoryVideo] = useState(null);
  const scrollRef = useRef(null);
  const travelVideos = travelVideoData2 || [];
  const featuredVideo = travelVideos[0];

  const scroll = (direction) => {
    const { current } = scrollRef;
    if (current) {
      current.scrollBy({ left: direction === 'left' ? -460 : 460, behavior: 'smooth' });
    }
  };

  const openStories = (video) => {
    setStoryVideo(video);
    document.body.style.overflow = 'hidden';
  };

  const closeStories = () => {
    setStoryVideo(null);
    document.body.style.overflow = 'auto';
  };

  if (!featuredVideo) return null;

  return (
    <div className="relative w-full bg-white overflow-x-hidden font-sans">
      
      {/* HERO SECTION */}
      <div className="relative h-screen w-full bg-white overflow-hidden">
        <div className="absolute top-0 left-0 w-full z-30">
          <div className="bg-[#4DB8D1] py-1.5 px-8 md:px-16 flex items-center gap-2 text-[10px] text-white/90 uppercase tracking-widest font-bold">
             <span>Home</span> <span>{'>'}</span> <span>Inspiration for your India trip</span> <span>{'>'}</span> <span className="text-white">Video inspiration</span>
          </div>
        </div>
        <div className="absolute inset-0">
          <img src={featuredVideo.img} className="w-full h-full object-cover" alt="Hero India" />
        </div>
        <div className="absolute inset-0 flex flex-col justify-center px-8 md:px-24 z-10 mt-20">
          <div className="max-w-4xl">
            <h1 className="text-white font-serif italic leading-[1.1] mb-4 text-6xl md:text-[100px] drop-shadow-2xl">{featuredVideo.title}</h1>
            <div className="flex items-center gap-2 text-white/90 mb-10"><span className="text-sm font-bold tracking-widest uppercase">{featuredVideo.location}</span></div>
            <div className="flex gap-4">
              <button onClick={() => document.getElementById('be-inspired-cards')?.scrollIntoView({ behavior: 'smooth' })} className="flex items-center gap-3 border border-white/40 hover:bg-white/10 text-white px-12 py-4 rounded-full transition-all font-bold uppercase tracking-widest text-[11px] backdrop-blur-sm">Explore All</button>
            </div>
          </div>
        </div>
        <div className="absolute bottom-12 right-12 z-20 flex flex-col items-end">
           <div className="w-4 h-4 bg-[#FFCD00] rounded-full shadow-lg mb-2 animate-pulse" />
        </div>
      </div>

      {/* BE INSPIRED CARDS */}
      <div id="be-inspired-cards" className="max-w-[1600px] mx-auto px-6 md:px-16 py-24">
        <div className="flex justify-between items-end mb-14">
          <div>
            <p className="text-[#FF6B35] font-black text-xs tracking-[0.4em] uppercase mb-3">Be Immersed</p>
            <h2 className="text-5xl md:text-7xl font-serif italic text-gray-900 leading-none">Be Inspired</h2>
            <div className="mt-4 h-[3px] w-20 bg-gradient-to-r from-[#FF6B35] to-[#FFCD00] rounded-full" />
          </div>
          <div className="flex gap-3">
            <button onClick={() => scroll('left')} className="w-14 h-14 border border-gray-200 rounded-full flex items-center justify-center hover:bg-black hover:text-white transition-all"><ChevronLeft size={24} /></button>
            <button onClick={() => scroll('right')} className="w-14 h-14 border border-gray-200 rounded-full flex items-center justify-center hover:bg-black hover:text-white transition-all"><ChevronRight size={24} /></button>
          </div>
        </div>

        <div ref={scrollRef} className="flex overflow-x-auto gap-6 no-scrollbar snap-x snap-mandatory pb-4">
          {travelVideos.map((video) => (
            <div key={video.id} onClick={() => openStories(video)} className="min-w-[280px] md:min-w-[360px] group cursor-pointer snap-start flex-shrink-0">
              <div className="relative aspect-[3/4] rounded-3xl overflow-hidden shadow-xl">
                <img src={video.img} alt={video.title} className="w-[500px] h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/10 to-transparent" />
                <div className="absolute top-4 right-4"><Tag label={video.tag} /></div>
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <h3 className="text-white font-serif italic text-2xl leading-tight group-hover:text-[#FFCD00]">{video.title}</h3>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* RENDER ONLY 2 UI BLOCKS */}
      {travelVideos.slice(0, 2).map((video, idx) => (
        <div key={video.id} className={idx % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
          <FeaturedVideoBlock video={video} />
        </div>
      ))}

      {storyVideo && <StoryPlayer video={storyVideo} onClose={closeStories} />}

      <style>{`
        .no-scrollbar::-webkit-scrollbar { display: none; }
        .no-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
      `}</style>
    </div>
  );
};

export default TravelVideoSection;