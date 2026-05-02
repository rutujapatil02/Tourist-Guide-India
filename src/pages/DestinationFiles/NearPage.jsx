import React, { useEffect, useState, useRef } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { nearPlacesData } from './NearData';
import { destinationDetails } from '../../Data/DestinationData';
import DestinationHeader from '../../components/Header/DestinationHeader';
import { FaHeart, FaShareAlt, FaChevronLeft, FaChevronRight } from 'react-icons/fa';

const TABS = ['Welcome', 'Getting there', 'When to visit'];

const NearPage = () => {
  const { slug, placeSlug } = useParams();
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState(0);
  const [liked, setLiked] = useState(false);
  const sliderRef = useRef(null);
  const [cardIndex, setCardIndex] = useState(0);

  useEffect(() => {
    window.scrollTo(0, 0);
    setActiveTab(0);
    setCardIndex(0);
  }, [placeSlug]);

  const lookupKey = slug ? slug.toLowerCase().replace(/[\s-]/g, '') : '';
  const placesForDestination = nearPlacesData[lookupKey] || [];
  const parentData = destinationDetails[lookupKey];

  const place = placesForDestination.find(
    (p) =>
      p.slug === placeSlug ||
      p.title.toLowerCase().replace(/[^a-z0-9]+/g, '-') === placeSlug
  );

  if (!place) {
    return (
      <div className="w-full h-screen flex flex-col items-center justify-center bg-white">
        <h1 className="text-3xl font-bold mb-4 text-gray-900">Place not found.</h1>
        <Link
          to={`/destination/${slug}`}
          className="bg-black text-white px-8 py-3 rounded-full text-sm font-bold hover:bg-gray-800 transition-all"
        >
          Back to destination
        </Link>
      </div>
    );
  }

  const otherPlaces = placesForDestination.filter(
    (p) => p.title.toLowerCase() !== place.title.toLowerCase()
  );

  const CARD_W = 406; // card width + gap
  const maxIndex = Math.max(0, otherPlaces.length - 2);

  const scrollCards = (dir) => {
    const next = Math.max(0, Math.min(maxIndex, cardIndex + dir));
    setCardIndex(next);
    if (sliderRef.current) {
      sliderRef.current.scrollTo({ left: next * CARD_W, behavior: 'smooth' });
    }
  };

  return (
    <div className="w-full bg-white font-sans overflow-x-hidden">

      {/* ── HERO ── */}
      <div className="relative w-full bg-black" style={{ height: '68vh', minHeight: 400 }}>
        <DestinationHeader showActions={false} />

        <img
          src={place.image}
          alt={place.title}
          className="absolute inset-0 w-full h-full object-cover"
          style={{ opacity: 0.85 }}
          onError={(e) => {
            e.target.onerror = null;
            e.target.src = 'https://images.unsplash.com/photo-1506461883276-594a12b11cf3?w=1200';
          }}
        />

        {/* Bottom gradient */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-black/5 to-transparent" />

        {/* Bottom: title left, icons right */}
        <div className="absolute bottom-0 left-0 right-0 px-8 md:px-14 pb-8 flex items-end justify-between z-10">
          <div>
            <h1
              className="text-white font-serif leading-none"
              style={{ fontSize: 'clamp(2.2rem, 5.5vw, 4.5rem)', fontWeight: 400 }}
            >
              {place.title}
            </h1>
          </div>
          <div className="flex items-center gap-2 mb-1">
            <button
              onClick={() => setLiked(!liked)}
              className="w-10 h-10 flex items-center justify-center rounded-full hover:bg-white/20 transition-all"
              style={{ color: liked ? '#e63946' : 'white' }}
            >
              <FaHeart size={19} />
            </button>
            <button className="w-10 h-10 flex items-center justify-center rounded-full hover:bg-white/20 transition-all text-white">
              <FaShareAlt size={19} />
            </button>
          </div>
        </div>
      </div>

      {/* ── MAIN CONTENT ── */}
      <div className="w-full bg-white">
        <div className="max-w-5xl mx-auto px-6 md:px-10 lg:px-14">

          {/* Tab nav */}
          <div className="flex items-center gap-1 border-b border-gray-200 mt-8 overflow-x-auto">
            {TABS.map((tab, i) => (
              <button
                key={tab}
                onClick={() => setActiveTab(i)}
                className={`whitespace-nowrap px-5 py-2.5 text-sm font-semibold rounded-t-lg transition-all flex-shrink-0 ${
                  activeTab === i
                    ? 'bg-[#1a1a1a] text-white'
                    : 'text-[#555] hover:text-[#1a1a1a] hover:bg-gray-50'
                }`}
              >
                {tab}
              </button>
            ))}
          </div>

          {/* ── TAB: WELCOME ── */}
          {activeTab === 0 && (
            <div className="py-10 flex flex-col lg:flex-row gap-12">

              {/* Left column */}
              <div className="flex-1 min-w-0">
                {/* Bold opening sentence */}
                <p className="text-[#1a1a1a] text-xl font-semibold leading-snug mb-5">
                  {place.description.split('.')[0]}.
                </p>
                {/* Full description */}
                <p className="text-[#4a4a4a] text-[15px] leading-[1.85] font-light mb-10">
                  {place.description}
                </p>

                {/* Info rows */}
                <div className="space-y-0 divide-y divide-gray-100 mb-10">
                  {place.bestTime && (
                    <InfoRow label="Best time to visit" value={place.bestTime} />
                  )}
                  {place.howToReach && (
                    <InfoRow label="How to get there" value={place.howToReach} />
                  )}
                  {place.entryFee && (
                    <InfoRow label="Entry fee" value={place.entryFee} />
                  )}
                </div>

                {/* Travel tips */}
                {place.travelTips && place.travelTips.length > 0 && (
                  <div>
                    <h3 className="text-xs font-bold text-[#1a1a1a] uppercase tracking-widest mb-5">
                      Travel tips
                    </h3>
                    <ul className="space-y-3">
                      {place.travelTips.map((tip, i) => (
                        <li key={i} className="flex items-start gap-3">
                          <span className="mt-2 w-1.5 h-1.5 rounded-full bg-[#333] flex-shrink-0" />
                          <span className="text-[#4a4a4a] text-sm leading-relaxed">{tip}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>

              {/* Right column: map + highlights */}
              <div className="lg:w-72 flex-shrink-0 space-y-5">
                {/* Map */}
                <div className="relative w-full overflow-hidden rounded-xl bg-[#e0e0e0]" style={{ height: 220 }}>
                  <iframe
                    title={`Map of ${place.title}`}
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    loading="lazy"
                    src={`https://maps.google.com/maps?q=${encodeURIComponent(
                      (place.title || '') + ' ' + (place.location || '')
                    )}&output=embed&z=10`}
                  />
                  <a
                    href={`https://maps.google.com/?q=${encodeURIComponent(
                      (place.title || '') + ' ' + (place.location || '')
                    )}`}
                    target="_blank"
                    rel="noreferrer"
                    className="absolute bottom-3 right-3 bg-white text-[#1a1a1a] text-xs font-semibold px-3 py-1.5 rounded-full shadow-md hover:shadow-lg transition-all flex items-center gap-1"
                  >
                    View full map ↗
                  </a>
                </div>

                {/* Highlights */}
                {place.highlights && place.highlights.length > 0 && (
                  <div className="bg-[#f6f6f6] rounded-xl p-6">
                    <h4 className="text-[10px] font-bold uppercase tracking-widest text-[#1a1a1a] mb-5">
                      Highlights
                    </h4>
                    <ul className="space-y-3">
                      {place.highlights.map((h, i) => (
                        <li key={i} className="flex items-start gap-3">
                          <span className="mt-2 w-1.5 h-1.5 rounded-full bg-[#555] flex-shrink-0" />
                          <span className="text-[#444] text-sm leading-snug">{h}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            </div>
          )}

          {/* ── TAB: GETTING THERE ── */}
          {activeTab === 1 && (
            <div className="py-10 max-w-2xl">
              <h2 className="text-2xl font-serif text-[#1a1a1a] mb-5">
                Getting to {place.title}
              </h2>
              <p className="text-[#4a4a4a] text-[15px] leading-[1.85]">
                {place.howToReach || 'Travel information coming soon.'}
              </p>
              {place.distance && (
                <p className="mt-5 text-sm text-[#888] font-medium">📍 {place.distance}</p>
              )}
            </div>
          )}

          {/* ── TAB: WHEN TO VISIT ── */}
          {activeTab === 2 && (
            <div className="py-10 max-w-2xl">
              <h2 className="text-2xl font-serif text-[#1a1a1a] mb-5">
                Best time to visit {place.title}
              </h2>
              <p className="text-[#4a4a4a] text-[15px] leading-[1.85]">
                {place.bestTime || 'Season information coming soon.'}
              </p>
            </div>
          )}

          {/* ── MORE PLACES NEAR ── */}
          {otherPlaces.length > 0 && (
            <div className="border-t border-gray-100 pt-12 pb-16">
              <div className="flex items-center justify-between mb-8">
                <h2
                  className="font-serif text-[#1a1a1a]"
                  style={{ fontSize: 'clamp(1.5rem, 3vw, 2.2rem)', fontWeight: 400 }}
                >
                  More places near {parentData?.title || slug}
                </h2>
                <div className="flex items-center gap-2">
                  <button
                    onClick={() => scrollCards(-1)}
                    disabled={cardIndex === 0}
                    className="w-10 h-10 rounded-full border border-gray-300 flex items-center justify-center text-gray-500 hover:border-gray-500 hover:text-gray-800 disabled:opacity-25 transition-all"
                  >
                    <FaChevronLeft size={12} />
                  </button>
                  <button
                    onClick={() => scrollCards(1)}
                    disabled={cardIndex >= maxIndex}
                    className="w-10 h-10 rounded-full border border-gray-300 flex items-center justify-center text-gray-500 hover:border-gray-500 hover:text-gray-800 disabled:opacity-25 transition-all"
                  >
                    <FaChevronRight size={12} />
                  </button>
                </div>
              </div>

              {/* Card slider */}
              <div
                ref={sliderRef}
                className="flex gap-6 overflow-x-auto"
                style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
              >
                {otherPlaces.map((p, idx) => (
                  <NearCard
                    key={idx}
                    place={p}
                    onClick={() => {
                      const ps = p.slug || p.title.toLowerCase().replace(/[^a-z0-9]+/g, '-');
                      navigate(`/destination/${slug}/near/${ps}`);
                    }}
                  />
                ))}
              </div>
            </div>
          )}

        </div>
      </div>
    </div>
  );
};

/* ─────────────────────────────────────────────────────────────
   InfoRow
───────────────────────────────────────────────────────────── */
const InfoRow = ({ label, value }) => (
  <div className="flex flex-col sm:flex-row sm:gap-8 py-4">
    <span className="text-[11px] font-bold uppercase tracking-widest text-[#999] sm:w-40 flex-shrink-0 mb-1 sm:mb-0 pt-px">
      {label}
    </span>
    <span className="text-[14px] text-[#333] leading-relaxed">{value}</span>
  </div>
);

/* ─────────────────────────────────────────────────────────────
   NearCard  — australia.com style: image on top, text below
───────────────────────────────────────────────────────────── */
const NearCard = ({ place, onClick }) => {
  const [hovered, setHovered] = useState(false);
  return (
    <div
      onClick={onClick}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="flex-none cursor-pointer group"
      style={{ width: 380 }}
    >
      {/* Image */}
      <div
        className="relative overflow-hidden rounded-lg mb-4"
        style={{
          height: 248,
          transition: 'box-shadow 0.3s ease',
          boxShadow: hovered ? '0 8px 28px rgba(0,0,0,0.18)' : '0 1px 6px rgba(0,0,0,0.08)',
        }}
      >
        <img
          src={place.image}
          alt={place.title}
          className="w-full h-full object-cover"
          style={{
            transform: hovered ? 'scale(1.05)' : 'scale(1)',
            transition: 'transform 0.6s ease',
          }}
          onError={(e) => {
            e.target.onerror = null;
            e.target.src = 'https://images.unsplash.com/photo-1506461883276-594a12b11cf3?w=600';
          }}
        />
        {place.distance && (
          <span className="absolute top-3 left-3 bg-white/90 backdrop-blur-sm text-[#1a1a1a] text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full">
            {place.distance}
          </span>
        )}
      </div>

      {/* Text below — australia.com: small location label, title, short desc */}
      {place.location && (
        <p className="text-[#999] text-[11px] font-semibold uppercase tracking-widest mb-1">
          {place.location}
        </p>
      )}
      <h3
        className="font-serif text-[#1a1a1a] leading-snug mb-2"
        style={{
          fontSize: '1.1rem',
          fontWeight: 400,
          textDecoration: hovered ? 'underline' : 'none',
          textUnderlineOffset: '3px',
        }}
      >
        {place.title}
      </h3>
      {place.description && (
        <p className="text-[#555] text-sm leading-relaxed line-clamp-2 font-light">
          {place.description}
        </p>
      )}
    </div>
  );
};

export default NearPage;