import React, { useState, useRef, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { travelVideoData2 } from '../../../Data/BeInspiredData/TravelVideoData/TravelVideoData';
import { X, ChevronLeft, ChevronRight, MapPin, Play, Volume2, VolumeX } from 'lucide-react';

/* ─── Progress bar duration for image stories (ms) ─── */
const IMAGE_STORY_DURATION = 5000;

const TravelVideoPlayer = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [currentStoryIndex, setCurrentStoryIndex] = useState(0);
  const [progress, setProgress] = useState(0);
  const [paused, setPaused] = useState(false);
  const rafRef = useRef(null);
  const startRef = useRef(null);
  const pausedAtRef = useRef(0);

  const videoData = travelVideoData2.find(item => item.id.toString() === id);

  const currentStory = videoData?.stories?.[currentStoryIndex];

  const goToNext = () => {
    if (!videoData) return;
    if (currentStoryIndex < videoData.stories.length - 1) {
      setCurrentStoryIndex(p => p + 1);
      setProgress(0);
    } else {
      // Move to next destination
      const idx = travelVideoData2.findIndex(v => v.id.toString() === id);
      const nextIdx = (idx + 1) % travelVideoData2.length;
      navigate(`/travel-video/${travelVideoData2[nextIdx].id}`, { replace: true });
      setCurrentStoryIndex(0);
      setProgress(0);
    }
  };

  const goToPrev = () => {
    if (currentStoryIndex > 0) {
      setCurrentStoryIndex(p => p - 1);
      setProgress(0);
    } else {
      const idx = travelVideoData2.findIndex(v => v.id.toString() === id);
      if (idx > 0) {
        const prev = travelVideoData2[idx - 1];
        navigate(`/travel-video/${prev.id}`, { replace: true });
        setCurrentStoryIndex(prev.stories.length - 1);
        setProgress(0);
      }
    }
  };

  /* Auto-advance timer for image stories */
  useEffect(() => {
    cancelAnimationFrame(rafRef.current);
    setProgress(0);
    startRef.current = null;
    pausedAtRef.current = 0;

    if (currentStory?.type !== 'image') return;

    const tick = (ts) => {
      if (!startRef.current) startRef.current = ts;
      const elapsed = ts - startRef.current + pausedAtRef.current;
      const pct = Math.min((elapsed / IMAGE_STORY_DURATION) * 100, 100);
      setProgress(pct);
      if (pct < 100) {
        rafRef.current = requestAnimationFrame(tick);
      } else {
        goToNext();
      }
    };
    rafRef.current = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(rafRef.current);
  }, [currentStoryIndex, id]);

  if (!videoData) {
    return (
      <div className="h-screen bg-black flex flex-col items-center justify-center gap-6">
        <p className="text-white text-2xl font-serif italic">Destination not found</p>
        <button onClick={() => navigate(-1)} className="text-[#FFCD00] font-black uppercase tracking-widest text-xs border border-[#FFCD00] px-8 py-3 rounded-full hover:bg-[#FFCD00] hover:text-black transition-all">
          Go Back
        </button>
      </div>
    );
  }

  const currentDestIdx = travelVideoData2.findIndex(v => v.id.toString() === id);

  return (
    <div className="fixed inset-0 z-[100] bg-black flex items-center justify-center">

      {/* ── Destination pill navigation (top) ── */}
      <div className="absolute top-4 left-1/2 -translate-x-1/2 z-[60] hidden md:flex gap-2">
        {travelVideoData2.map((dest, i) => (
          <button
            key={dest.id}
            onClick={() => { navigate(`/travel-video/${dest.id}`, { replace: true }); setCurrentStoryIndex(0); setProgress(0); }}
            className={`px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-widest transition-all ${
              i === currentDestIdx
                ? 'bg-[#FFCD00] text-black'
                : 'bg-white/10 text-white/60 hover:bg-white/20'
            }`}
          >
            {dest.title.split(':')[0]}
          </button>
        ))}
      </div>

      {/* ── Main story frame ── */}
      <div className="relative w-full max-w-sm h-full md:h-[90vh] md:max-h-[750px] md:rounded-[2.5rem] overflow-hidden shadow-2xl">

        {/* Background */}
        {currentStory?.type === 'video' ? (
          <video
            key={currentStory.url}
            src={currentStory.url}
            className="absolute inset-0 w-full h-full object-cover"
            autoPlay muted playsInline
            onEnded={goToNext}
          />
        ) : (
          <img
            key={currentStory?.url}
            src={currentStory?.url}
            alt=""
            className="absolute inset-0 w-full h-full object-cover"
          />
        )}

        {/* Overlays */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-transparent to-black/90" />

        {/* ── Progress bars ── */}
        <div className="absolute top-0 left-0 w-full px-4 pt-4 z-50">
          <div className="flex gap-1.5 mb-5">
            {videoData.stories.map((_, i) => (
              <div key={i} className="h-[3px] flex-1 bg-white/25 rounded-full overflow-hidden">
                <div
                  className="h-full bg-white rounded-full"
                  style={{
                    width: i < currentStoryIndex ? '100%' : i === currentStoryIndex ? `${progress}%` : '0%',
                    transition: i === currentStoryIndex && currentStory?.type === 'video' ? 'none' : undefined,
                  }}
                />
              </div>
            ))}
          </div>

          {/* Header row */}
          <div className="flex justify-between items-center px-1">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#FF6B35] to-[#FFCD00] flex items-center justify-center font-black text-black text-base italic shadow-lg ring-2 ring-white/30">
                I
              </div>
              <div>
                <p className="text-white font-black text-xs tracking-[0.25em] uppercase leading-none">Incredible !ndia</p>
                <div className="flex items-center gap-1 mt-0.5">
                  <MapPin size={9} className="text-[#FFCD00]" />
                  <p className="text-white/50 text-[10px] tracking-wide">{videoData.location}</p>
                </div>
              </div>
            </div>
            <button
              onClick={() => navigate(-1)}
              className="w-9 h-9 bg-white/15 hover:bg-white/30 backdrop-blur-md rounded-full flex items-center justify-center text-white transition-all"
            >
              <X size={18} />
            </button>
          </div>
        </div>

        {/* ── Tap navigation zones ── */}
        <div className="absolute inset-0 flex z-40">
          <div className="w-1/3 h-full cursor-pointer" onClick={goToPrev} />
          <div className="w-1/3 h-full" />
          <div className="w-1/3 h-full cursor-pointer" onClick={goToNext} />
        </div>

        {/* ── Bottom overlay ── */}
        <div className="absolute bottom-0 left-0 w-full px-7 pb-8 pt-20 z-50"
          style={{ background: 'linear-gradient(to top, rgba(0,0,0,0.85) 0%, transparent 100%)' }}
        >
          <span className="inline-block bg-[#FF6B35]/25 border border-[#FF6B35]/50 text-[#FF6B35] text-[9px] font-black uppercase tracking-[0.3em] px-3 py-1 rounded-full mb-3">
            {videoData.tag}
          </span>
          <h2 className="text-white text-4xl font-serif italic leading-tight mb-1 drop-shadow-xl">
            {videoData.title}
          </h2>
          {currentStory?.caption && (
            <p className="text-white/60 text-sm mb-5">{currentStory.caption}</p>
          )}

          {/* Story dots + CTA */}
          <div className="flex items-center justify-between">
            <div className="flex gap-1.5">
              {videoData.stories.map((_, i) => (
                <button
                  key={i}
                  onClick={() => { setCurrentStoryIndex(i); setProgress(0); }}
                  className={`rounded-full transition-all ${
                    i === currentStoryIndex
                      ? 'w-5 h-2 bg-[#FFCD00]'
                      : 'w-2 h-2 bg-white/30 hover:bg-white/60'
                  }`}
                />
              ))}
            </div>
            <button
              onClick={goToNext}
              className="flex items-center gap-2 bg-[#FFCD00] text-black font-black text-[10px] uppercase tracking-widest px-6 py-3 rounded-full hover:scale-105 active:scale-95 transition-transform shadow-2xl"
            >
              {currentStoryIndex < videoData.stories.length - 1 ? (
                <>Next <ChevronRight size={14} /></>
              ) : (
                <>Next Destination <ChevronRight size={14} /></>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* ── Side arrows (desktop) ── */}
      <button
        onClick={goToPrev}
        className="hidden md:flex absolute left-4 lg:left-12 top-1/2 -translate-y-1/2 w-14 h-14 bg-white/10 hover:bg-[#FFCD00] hover:text-black rounded-full items-center justify-center text-white backdrop-blur-md border border-white/10 transition-all z-50"
      >
        <ChevronLeft size={28} />
      </button>
      <button
        onClick={goToNext}
        className="hidden md:flex absolute right-4 lg:right-12 top-1/2 -translate-y-1/2 w-14 h-14 bg-white/10 hover:bg-[#FFCD00] hover:text-black rounded-full items-center justify-center text-white backdrop-blur-md border border-white/10 transition-all z-50"
      >
        <ChevronRight size={28} />
      </button>

      {/* ── Destination thumbnails strip (desktop, bottom) ── */}
      <div className="hidden md:flex absolute bottom-6 left-1/2 -translate-x-1/2 gap-3 z-50">
        {travelVideoData2.map((dest, i) => (
          <button
            key={dest.id}
            onClick={() => { navigate(`/travel-video/${dest.id}`, { replace: true }); setCurrentStoryIndex(0); setProgress(0); }}
            className={`relative w-14 h-14 rounded-2xl overflow-hidden border-2 transition-all ${
              i === currentDestIdx ? 'border-[#FFCD00] scale-110 shadow-lg' : 'border-transparent opacity-50 hover:opacity-80'
            }`}
          >
            <img src={dest.img} alt={dest.title} className="w-full h-full object-cover" />
          </button>
        ))}
      </div>
    </div>
  );
};

export default TravelVideoPlayer;