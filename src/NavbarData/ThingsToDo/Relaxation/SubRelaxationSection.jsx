// src/NavbarData/ThingsToDo/Relaxation/SubRelaxationSection.jsx

import React, { useRef, useState } from 'react';
import { subRelaxationData } from '../../../Data/ThingsToDo/Relaxation/SubRelaxationData';

// ─── Video Card with play/pause toggle ───────────────────────────────────────
const VideoCard = ({ item }) => {
  const videoRef = useRef(null);
  const [playing, setPlaying] = useState(false);

  const togglePlay = () => {
    if (!videoRef.current) return;
    if (playing) {
      videoRef.current.pause();
      setPlaying(false);
    } else {
      videoRef.current.play();
      setPlaying(true);
    }
  };

  return (
    <div
      className="relative flex-shrink-0 w-72 h-80 rounded-xl overflow-hidden cursor-pointer"
      onClick={togglePlay}
    >
      <video
        ref={videoRef}
        src={item.videoUrl}
        className="w-full h-full object-cover"
        loop
        playsInline
        poster={item.image}
      />
      <div className="absolute inset-0 bg-black/30" />

      {/* Play icon when paused */}
      {!playing && (
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-14 h-14 rounded-full bg-white/30 backdrop-blur-sm flex items-center justify-center">
            <svg className="w-6 h-6 text-white ml-1" fill="currentColor" viewBox="0 0 24 24">
              <path d="M8 5v14l11-7z" />
            </svg>
          </div>
        </div>
      )}

      {/* Pause icon when playing */}
      {playing && (
        <div className="absolute top-3 right-3 w-9 h-9 rounded-full bg-black/40 flex items-center justify-center">
          <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
            <path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z" />
          </svg>
        </div>
      )}

      <div className="absolute bottom-0 left-0 right-0 p-4">
        <p className="text-white font-semibold text-base leading-tight">{item.name}</p>
      </div>
    </div>
  );
};

// ─── Horizontal scroll with arrow buttons ────────────────────────────────────
const HorizontalScroll = ({ children }) => {
  const ref = useRef(null);

  const scroll = (dir) => {
    if (ref.current) {
      ref.current.scrollBy({ left: dir * 340, behavior: 'smooth' });
    }
  };

  return (
    <div className="relative">
      <button
        onClick={() => scroll(-1)}
        className="absolute left-0 top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full bg-white shadow-lg flex items-center justify-center hover:bg-gray-50 transition-colors border border-gray-200 -translate-x-5"
      >
        <svg className="w-5 h-5 text-gray-700" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
        </svg>
      </button>

      <div
        ref={ref}
        className="flex gap-5 overflow-x-auto scroll-smooth pb-3"
        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
      >
        {children}
      </div>

      <button
        onClick={() => scroll(1)}
        className="absolute right-0 top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full bg-white shadow-lg flex items-center justify-center hover:bg-gray-50 transition-colors border border-gray-200 translate-x-5"
      >
        <svg className="w-5 h-5 text-gray-700" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
        </svg>
      </button>
    </div>
  );
};

// ─── Guide Banner ─────────────────────────────────────────────────────────────
const GuideBanner = ({ guideBanner }) => (
  <div className="relative w-full h-72 md:h-80 overflow-hidden rounded-2xl">
    <img
      src={guideBanner.image}
      alt={guideBanner.title}
      className="w-full h-full object-cover"
    />
    <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-black/20 to-transparent" />
    <div className="absolute bottom-6 left-6 right-6 flex items-end justify-between gap-4 flex-wrap">
      <div>
        <h3 className="text-white text-xl font-bold leading-snug">{guideBanner.title}</h3>
        <p className="text-white/80 text-sm mt-1 max-w-sm">{guideBanner.subtitle}</p>
      </div>
      <button
        onClick={() => window.open('#guide', '_blank')}
        className="flex-shrink-0 bg-yellow-400 hover:bg-yellow-300 text-gray-900 font-bold text-sm px-5 py-2.5 rounded-full transition-colors shadow-md"
      >
        {guideBanner.buttonText}
      </button>
    </div>
  </div>
);

// ─── Main component ───────────────────────────────────────────────────────────
// onBack: called when user clicks "Home" or "Things to do" in breadcrumb
const SubRelaxationSection = ({ selectedCategory, onBack }) => {
  const data = subRelaxationData[selectedCategory];
  if (!data) return null;

  return (
    <div className="w-full overflow-x-hidden bg-gray-100">

      {/* ══ TEAL BREADCRUMB BAR — fully functional ══ */}
      <div className="w-full bg-[#3dbfcf] px-6 py-3">
        <nav className="flex items-center gap-2 text-sm text-white font-medium">
          {/* "Home" — clicks back to the relaxation grid */}
          <span
            className="hover:underline cursor-pointer opacity-90 hover:opacity-100 transition-opacity"
            onClick={onBack}
          >
            Home
          </span>
          <span className="opacity-50">&gt;</span>

          {/* "Things to do" — also navigates back */}
          <span
            className="hover:underline cursor-pointer opacity-90 hover:opacity-100 transition-opacity"
            onClick={onBack}
          >
            Things to do
          </span>
          <span className="opacity-50">&gt;</span>

          {/* Current page — not clickable */}
          <span className="font-semibold">{data.name} in India</span>
        </nav>
      </div>

      {/* ══ HERO IMAGE — full width ══ */}
      <div className="w-full h-[82vh] min-h-[480px] overflow-hidden">
        <img
          src={data.heroImage}
          alt={data.name}
          className="w-full h-full object-cover"
        />
      </div>

      {/* ══ OVERLAPPING WHITE CARD — 3% narrower than hero on each side ══ */}
      <div
        className="relative z-10 bg-white rounded-t-3xl shadow-2xl overflow-hidden"
        style={{ marginLeft: '3%', marginRight: '3%', marginTop: '-56px' }}
      >

        {/* ── 1. Title + Description + Social Share ── */}
        <div className="max-w-3xl mx-auto text-center px-8 pt-12 pb-10">
          <h1
            className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight mb-5"
            style={{ fontFamily: 'Georgia, serif' }}
          >
            {data.title}
          </h1>
          <p className="text-base md:text-lg text-gray-600 leading-relaxed mb-7">
            {data.description}
          </p>

          {/* Social share buttons */}
          <div className="flex items-center justify-center gap-3">
            {/* Facebook */}
            <button className="w-11 h-11 rounded-full bg-[#1877F2] flex items-center justify-center hover:opacity-90 transition-opacity">
              <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />
              </svg>
            </button>
            {/* WhatsApp */}
            <button className="w-11 h-11 rounded-full bg-[#25D366] flex items-center justify-center hover:opacity-90 transition-opacity">
              <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
                <path d="M11.999 2C6.478 2 2 6.478 2 12c0 1.82.487 3.53 1.338 5.008L2 22l5.132-1.322A9.954 9.954 0 0012 22c5.522 0 10-4.477 10-10S17.522 2 11.999 2z" />
              </svg>
            </button>
            {/* Copy link */}
            <button
              onClick={() => navigator.clipboard.writeText(window.location.href)}
              className="w-11 h-11 rounded-full bg-gray-800 flex items-center justify-center hover:bg-gray-700 transition-colors"
            >
              <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
              </svg>
            </button>
          </div>
        </div>

        {/* ── 2. Top Experiences carousel ── */}
        <div className="px-10 md:px-16 pb-12">
          <h2
            className="text-2xl md:text-3xl font-bold text-gray-900 mb-6"
            style={{ fontFamily: 'Georgia, serif' }}
          >
            Top {data.name} experiences
          </h2>
          <HorizontalScroll>
            {data.topExperiences.map((item) => (
              <div key={item.id} className="flex-shrink-0 w-80 cursor-pointer group">
                <div className="w-full h-56 overflow-hidden rounded-xl bg-gray-100">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="pt-3 pb-2">
                  <h3 className="text-base font-bold text-gray-900 mb-1">{item.name}</h3>
                  <p className="text-sm text-gray-500 leading-relaxed">{item.description}</p>
                </div>
              </div>
            ))}
          </HorizontalScroll>
        </div>

        {/* ── 3. Discover section — light blue bg ── */}
        <div className="bg-[#dff3fb] px-10 md:px-16 py-12">
          <h2
            className="text-2xl md:text-3xl font-bold text-[#1a6a8a] mb-8"
            style={{ fontFamily: 'Georgia, serif' }}
          >
            {data.discoverSection.title}
          </h2>
          <HorizontalScroll>
            {data.discoverSection.items.map((item) =>
              item.isVideo ? (
                <VideoCard key={item.id} item={item} />
              ) : (
                <div
                  key={item.id}
                  className="relative flex-shrink-0 w-72 h-80 rounded-xl overflow-hidden cursor-pointer group"
                >
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-black/10 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-4">
                    <p className="text-white font-semibold text-base leading-tight">{item.name}</p>
                  </div>
                </div>
              )
            )}
          </HorizontalScroll>
        </div>

        {/* ── 4. Guide banner ── */}
        <div className="px-10 md:px-16 py-12">
          <GuideBanner guideBanner={data.guideBanner} />
        </div>

        {/* ── 5. Explore other interests ── */}
        <div className="px-10 md:px-16 pb-12">
          <h2
            className="text-2xl md:text-3xl font-bold text-gray-900 mb-6"
            style={{ fontFamily: 'Georgia, serif' }}
          >
            Explore other interests
          </h2>
          <HorizontalScroll>
            {data.exploreOtherInterests.map((item) => (
              <div
                key={item.id}
                className="relative flex-shrink-0 w-60 h-60 rounded-xl overflow-hidden cursor-pointer group"
              >
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <p className="text-white font-bold text-sm leading-tight">{item.name}</p>
                </div>
              </div>
            ))}
          </HorizontalScroll>
        </div>

        {/* ── 6. Instagram masonry grid ── */}
        <div className="px-10 md:px-16 pb-16">
          <h2
            className="text-2xl md:text-3xl font-bold text-gray-900 mb-6"
            style={{ fontFamily: 'Georgia, serif' }}
          >
            Soak up {data.name} in India
          </h2>
          <div
            className="grid gap-3"
            style={{
              gridTemplateColumns: '2fr 1fr 1fr',
              gridTemplateRows: '240px 240px',
            }}
          >
            {data.instagramGrid.map((item, index) => (
              <div
                key={item.id}
                className="relative overflow-hidden rounded-xl cursor-pointer group"
                style={item.isLarge ? { gridRow: '1 / span 2' } : {}}
              >
                <img
                  src={item.image}
                  alt={`Experience ${index + 1}`}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute bottom-3 right-3 w-8 h-8 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center">
                  <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
                  </svg>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>{/* ══ END overlapping white card ══ */}

    </div>
  );
};

export default SubRelaxationSection;