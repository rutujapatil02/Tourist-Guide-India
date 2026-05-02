import React, { useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

/**
 * NearSection
 * Renders a "Top destinations near X" horizontal card section
 * in the australia.com style: image on top, title + description below,
 * with prev/next arrow navigation.
 *
 * Props:
 *   places          — array of place objects from nearPlacesData
 *   cityName        — display name of the parent destination (e.g. "Taj Mahal")
 *   destinationSlug — URL slug for the parent destination (e.g. "tajmahal")
 *   onPlaceClick    — optional custom click handler (overrides default navigation)
 */
const NearSection = ({ places, cityName, destinationSlug, onPlaceClick }) => {
  const navigate = useNavigate();
  const sliderRef = useRef(null);
  const [cardIndex, setCardIndex] = useState(0);

  if (!places || places.length === 0) return null;

  const CARD_W = 406; // card width (390) + gap (16)
  const maxIndex = Math.max(0, places.length - 2);

  const scrollCards = (dir) => {
    const next = Math.max(0, Math.min(maxIndex, cardIndex + dir));
    setCardIndex(next);
    if (sliderRef.current) {
      sliderRef.current.scrollTo({ left: next * CARD_W, behavior: 'smooth' });
    }
  };

  const handleClick = (place) => {
    if (onPlaceClick) {
      onPlaceClick(place);
    } else if (destinationSlug) {
      const ps = place.slug || place.title.toLowerCase().replace(/[^a-z0-9]+/g, '-');
      navigate(`/destination/${destinationSlug}/near/${ps}`);
    }
  };

  return (
    <div className="border-t border-gray-100 pt-12 pb-16">

      {/* Header row */}
      <div className="flex items-center justify-between mb-8">
        <h2
          className="font-serif text-[#1a1a1a]"
          style={{ fontSize: 'clamp(1.5rem, 3vw, 2.2rem)', fontWeight: 400 }}
        >
          Destinations near {cityName}
        </h2>

        {/* Arrow buttons */}
        <div className="flex items-center gap-2">
          <button
            onClick={() => scrollCards(-1)}
            disabled={cardIndex === 0}
            aria-label="Previous"
            className="w-10 h-10 rounded-full border border-gray-300 flex items-center justify-center text-gray-500 hover:border-gray-600 hover:text-gray-800 disabled:opacity-25 transition-all"
          >
            <FaChevronLeft size={12} />
          </button>
          <button
            onClick={() => scrollCards(1)}
            disabled={cardIndex >= maxIndex}
            aria-label="Next"
            className="w-10 h-10 rounded-full border border-gray-300 flex items-center justify-center text-gray-500 hover:border-gray-600 hover:text-gray-800 disabled:opacity-25 transition-all"
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
        {places.map((place, idx) => (
          <NearCard key={place.slug || idx} place={place} onClick={() => handleClick(place)} />
        ))}
      </div>
    </div>
  );
};

/* ─────────────────────────────────────────────────────────────
   NearCard — image on top, location label + title + snippet below
───────────────────────────────────────────────────────────── */
const NearCard = ({ place, onClick }) => {
  const [hovered, setHovered] = useState(false);
  return (
    <div
      onClick={onClick}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="flex-none cursor-pointer group"
      style={{ width: 390 }}
    >
      {/* Image box */}
      <div
        className="relative overflow-hidden rounded-lg mb-4"
        style={{
          height: 248,
          transition: 'box-shadow 0.3s ease',
          boxShadow: hovered
            ? '0 8px 28px rgba(0,0,0,0.18)'
            : '0 1px 6px rgba(0,0,0,0.08)',
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
        {/* Distance badge */}
        {place.distance && (
          <span className="absolute top-3 left-3 bg-white/90 backdrop-blur-sm text-[#1a1a1a] text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full">
            {place.distance}
          </span>
        )}
      </div>

      {/* Text — australia.com style */}
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

export default NearSection;