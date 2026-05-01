import React, { useState } from 'react';
import { FaArrowLeft, FaMapMarkerAlt, FaUtensils, FaLandmark, FaCalendarAlt, FaCamera, FaStar, FaHotel } from 'react-icons/fa';
import { MdExplore } from 'react-icons/md';
import { statesInfo, getFallbackData } from '../../../Data/PlacesToGo/States/DestinationData';

/* ─────────────────────────────────────────────
   Injected CSS
───────────────────────────────────────────── */
const styles = `
  @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,700;0,900;1,700&family=DM+Sans:wght@300;400;500;600&display=swap');

  .dest-root * { box-sizing: border-box; margin: 0; padding: 0; }
  .dest-root { font-family: 'DM Sans', sans-serif; background: #f8fafc; min-height: 100vh; }
  .dest-title { font-family: 'Playfair Display', serif; }

  /* HERO */
  .dest-hero {
    position: relative;
    height: 92vh;
    min-height: 560px;
    overflow: hidden;
  }
  .dest-hero-img {
    width: 100%; height: 100%;
    object-fit: cover; object-position: center;
    animation: heroZoom 8s ease-out forwards;
  }
  @keyframes heroZoom {
    from { transform: scale(1.08); }
    to   { transform: scale(1.00); }
  }
  .dest-hero-overlay {
    position: absolute; inset: 0;
    background: linear-gradient(
      to bottom,
      rgba(0,0,0,0.10) 0%,
      rgba(0,0,0,0.05) 35%,
      rgba(0,0,0,0.70) 70%,
      rgba(0,0,0,0.92) 100%
    );
  }
  .dest-hero-content {
    position: absolute; bottom: 0; left: 0; right: 0;
    padding: 0 40px 90px;
    animation: slideUp 0.9s cubic-bezier(.22,1,.36,1) both;
  }
  @keyframes slideUp {
    from { opacity: 0; transform: translateY(40px); }
    to   { opacity: 1; transform: translateY(0); }
  }

  /* BACK BUTTON */
  .back-btn {
    position: absolute; top: 24px; left: 24px; z-index: 50;
    display: flex; align-items: center; gap: 8px;
    background: rgba(255,255,255,0.15);
    backdrop-filter: blur(14px);
    border: 1px solid rgba(255,255,255,0.30);
    color: white; font-weight: 600; font-size: 14px;
    padding: 10px 22px; border-radius: 50px;
    cursor: pointer; transition: all 0.22s;
    font-family: 'DM Sans', sans-serif;
  }
  .back-btn:hover { background: rgba(255,255,255,0.28); transform: translateX(-4px); }

  /* STAT CHIP */
  .stat-chip {
    display: inline-flex; flex-direction: column;
    background: rgba(255,255,255,0.13);
    backdrop-filter: blur(12px);
    border: 1px solid rgba(255,255,255,0.22);
    border-radius: 14px; padding: 12px 20px;
    color: white; min-width: 120px;
  }
  .stat-chip-label { font-size: 10px; font-weight: 700; opacity: 0.6; text-transform: uppercase; letter-spacing: 0.12em; }
  .stat-chip-value { font-size: 14px; font-weight: 700; margin-top: 4px; }

  /* OVERLAP CARD */
  .dest-overlap {
    position: relative; z-index: 20;
    margin: -80px auto 0;
    max-width: 1100px;
    background: #fff;
    border-radius: 28px 28px 20px 20px;
    box-shadow: 0 -2px 40px rgba(0,0,0,0.10), 0 24px 60px rgba(0,0,0,0.07);
    overflow: hidden;
  }

  /* TABS */
  .dest-tabs { display: flex; border-bottom: 1px solid #f1f5f9; overflow-x: auto; scrollbar-width: none; }
  .dest-tabs::-webkit-scrollbar { display: none; }
  .dest-tab {
    display: flex; align-items: center; gap: 8px;
    padding: 18px 28px;
    font-size: 13.5px; font-weight: 600;
    color: #94a3b8; border: none; background: none;
    border-bottom: 3px solid transparent;
    cursor: pointer; white-space: nowrap;
    transition: color 0.22s, border-color 0.22s;
    font-family: 'DM Sans', sans-serif;
  }
  .dest-tab:hover { color: #334155; }
  .dest-tab.active { color: var(--hero); border-bottom-color: var(--hero); }

  /* SECTION PADDING */
  .s-pad { padding: 40px 36px; }
  @media (max-width: 640px) {
    .s-pad { padding: 28px 20px; }
    .dest-hero-content { padding: 0 20px 80px; }
    .dest-overlap { margin-top: -60px; border-radius: 20px 20px 16px 16px; }
  }

  /* PLACE CARDS */
  .place-grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(250px, 1fr)); gap: 20px; }
  .place-card {
    position: relative; border-radius: 18px; overflow: hidden;
    box-shadow: 0 4px 20px rgba(0,0,0,0.09);
    transition: transform 0.35s cubic-bezier(.22,1,.36,1), box-shadow 0.35s;
    cursor: pointer;
  }
  .place-card:hover { transform: translateY(-7px); box-shadow: 0 16px 40px rgba(0,0,0,0.16); }
  .place-card-img { width: 100%; height: 200px; object-fit: cover; display: block; transition: transform 0.5s; }
  .place-card:hover .place-card-img { transform: scale(1.07); }
  .place-card-overlay {
    position: absolute; bottom: 0; left: 0; right: 0;
    background: linear-gradient(to top, rgba(0,0,0,0.86) 0%, transparent 100%);
    padding: 48px 16px 16px;
    color: white;
  }
  .place-num {
    position: absolute; top: 12px; left: 12px;
    width: 30px; height: 30px; border-radius: 50%;
    display: flex; align-items: center; justify-content: center;
    font-size: 12px; font-weight: 800; color: white;
    background: var(--accent);
  }

  /* FOOD */
  .food-pill {
    display: inline-flex; align-items: center; gap: 10px;
    background: #f8fafc; border: 1.5px solid #e2e8f0;
    border-radius: 50px; padding: 12px 20px;
    font-weight: 500; font-size: 14px; color: #334155;
    cursor: default; transition: all 0.22s;
  }
  .food-pill:hover { background: var(--hero); color: white; border-color: var(--hero); transform: scale(1.04); }
  .food-num {
    width: 30px; height: 30px; border-radius: 50%;
    display: flex; align-items: center; justify-content: center;
    font-size: 12px; font-weight: 800; color: white; flex-shrink: 0;
    background: linear-gradient(135deg, var(--hero), var(--accent));
  }

  /* FESTIVAL */
  .fest-grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(220px, 1fr)); gap: 18px; }
  .fest-card {
    border-radius: 18px; padding: 22px;
    background: var(--hero-light);
    border: 1px solid var(--hero-light2);
    transition: transform 0.22s, box-shadow 0.22s;
  }
  .fest-card:hover { transform: translateY(-4px); box-shadow: 0 8px 28px rgba(0,0,0,0.09); }
  .fest-bar { height: 3px; border-radius: 10px; width: 38%; margin-top: 16px; background: linear-gradient(to right, var(--hero), var(--accent)); }

  /* INFO */
  .info-grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(190px, 1fr)); gap: 16px; margin-bottom: 20px; }
  .info-card { border-radius: 16px; padding: 22px; background: #fff; border: 1px solid #e2e8f0; box-shadow: 0 2px 12px rgba(0,0,0,0.04); }

  /* BANNER */
  .img-banner { border-radius: 20px; overflow: hidden; height: 190px; position: relative; margin-top: 32px; }
  .img-banner img { width: 100%; height: 100%; object-fit: cover; }
  .img-banner-overlay {
    position: absolute; inset: 0;
    display: flex; align-items: center; padding: 32px;
  }

  /* ── HOTEL CARDS ── */
  .hotel-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
    gap: 24px;
  }
  .hotel-card {
    border-radius: 22px;
    overflow: hidden;
    background: #fff;
    border: 1px solid #e8eef5;
    box-shadow: 0 4px 20px rgba(0,0,0,0.06);
    transition: transform 0.35s cubic-bezier(.22,1,.36,1), box-shadow 0.35s;
    cursor: default;
  }
  .hotel-card:hover { transform: translateY(-8px); box-shadow: 0 20px 50px rgba(0,0,0,0.13); }
  .hotel-card-img-wrap { position: relative; height: 200px; overflow: hidden; }
  .hotel-card-img { width: 100%; height: 100%; object-fit: cover; display: block; transition: transform 0.5s; }
  .hotel-card:hover .hotel-card-img { transform: scale(1.06); }
  .hotel-tag {
    position: absolute; top: 12px; right: 12px;
    font-size: 10px; font-weight: 800; letter-spacing: 0.1em; text-transform: uppercase;
    padding: 5px 12px; border-radius: 50px;
    background: rgba(255,255,255,0.92); backdrop-filter: blur(8px);
    color: var(--hero);
    border: 1px solid rgba(255,255,255,0.6);
  }
  .hotel-card-body { padding: 20px 22px 22px; }
  .hotel-stars { display: flex; gap: 3px; margin-bottom: 10px; }
  .hotel-name { font-family: 'Playfair Display', serif; font-size: 18px; color: #1e293b; margin-bottom: 4px; line-height: 1.3; }
  .hotel-location { font-size: 12px; color: #94a3b8; font-weight: 500; margin-bottom: 10px; display: flex; align-items: center; gap: 5px; }
  .hotel-desc { font-size: 13.5px; color: #475569; line-height: 1.65; margin-bottom: 16px; }
  .hotel-footer { display: flex; align-items: center; justify-content: space-between; }
  .hotel-price {
    font-size: 17px; font-weight: 800;
    color: var(--hero);
  }
  .hotel-price-label { font-size: 11px; color: #94a3b8; font-weight: 500; margin-top: 1px; }
  .hotel-book-btn {
    font-family: 'DM Sans', sans-serif;
    font-size: 12px; font-weight: 700;
    padding: 9px 20px; border-radius: 50px;
    border: none; cursor: pointer;
    color: white;
    background: linear-gradient(135deg, var(--hero), var(--accent));
    transition: opacity 0.2s, transform 0.2s;
    letter-spacing: 0.04em;
  }
  .hotel-book-btn:hover { opacity: 0.88; transform: scale(1.04); }

  /* HOTEL HEADER BANNER */
  .hotel-header-banner {
    border-radius: 20px; overflow: hidden;
    background: linear-gradient(135deg, var(--hero-light) 0%, var(--hero-light2) 100%);
    border: 1px solid var(--hero-light2);
    padding: 28px 30px;
    display: flex; align-items: center; gap: 20px;
    margin-bottom: 32px;
  }
  .hotel-header-icon {
    width: 56px; height: 56px; border-radius: 16px; flex-shrink: 0;
    display: flex; align-items: center; justify-content: center;
    background: linear-gradient(135deg, var(--hero), var(--accent));
    font-size: 24px;
  }

  /* FOOTER */
  .dest-footer {
    padding: 18px 36px;
    border-top: 1px solid #f1f5f9;
    display: flex; justify-content: space-between; align-items: center;
    flex-wrap: wrap; gap: 12px;
    background: #fafafa;
  }
  .outline-btn {
    display: flex; align-items: center; gap: 6px;
    background: none; padding: 8px 20px;
    border-radius: 50px; font-size: 13px; font-weight: 600;
    cursor: pointer; transition: all 0.2s;
    font-family: 'DM Sans', sans-serif;
  }
`;

/* ─────────────────────────────────────────────
   Star Renderer
───────────────────────────────────────────── */
const StarRating = ({ count, color }) => (
  <div className="hotel-stars">
    {Array.from({ length: 5 }).map((_, i) => (
      <FaStar key={i} size={11} color={i < count ? color : '#e2e8f0'} />
    ))}
  </div>
);

/* ─────────────────────────────────────────────
   Main Component
───────────────────────────────────────────── */
const Destinations = ({ stateKey, onBack }) => {
  const [activeSection, setActiveSection] = useState('places');

  const data = statesInfo[stateKey] || getFallbackData(
    stateKey.charAt(0).toUpperCase() + stateKey.slice(1)
  );

  const cssVars = {
    '--hero': data.heroColor,
    '--accent': data.accentColor,
    '--hero-light': data.heroColor + '12',
    '--hero-light2': data.heroColor + '35',
  };

  const tabs = [
    { id: 'places',    label: 'Top Places',  icon: <FaMapMarkerAlt size={13}/> },
    { id: 'food',      label: 'Cuisine',     icon: <FaUtensils size={13}/> },
    { id: 'festivals', label: 'Festivals',   icon: <FaLandmark size={13}/> },
    { id: 'hotels',    label: 'Hotels',      icon: <FaHotel size={13}/> },
    { id: 'info',      label: 'Travel Info', icon: <FaCalendarAlt size={13}/> },
  ];

  const festEmojis = ['🎊', '🪔', '🥁', '🎭', '🎶', '🌺'];

  return (
    <div className="dest-root" style={cssVars}>
      <style>{styles}</style>

      {/* ─── HERO IMAGE ─── */}
      <div className="dest-hero">
        <img className="dest-hero-img" src={data.heroImage} alt={data.name} />
        <div className="dest-hero-overlay" />

        <button className="back-btn" onClick={onBack}>
          <FaArrowLeft size={12} /> Back
        </button>

        <div className="dest-hero-content">
          <div style={{
            display: 'inline-block', marginBottom: 16,
            background: data.accentColor, color: 'white',
            fontSize: 11, fontWeight: 700, letterSpacing: '0.14em',
            textTransform: 'uppercase', padding: '5px 16px', borderRadius: 50,
          }}>
            ✦ Incredible India
          </div>

          <h1 className="dest-title" style={{
            fontSize: 'clamp(3.2rem, 9vw, 7rem)',
            color: 'white', lineHeight: 0.95, marginBottom: 12,
            textShadow: '0 4px 40px rgba(0,0,0,0.5)',
          }}>
            {data.name}
          </h1>
          <p style={{
            fontStyle: 'italic', fontWeight: 300,
            fontSize: 'clamp(1rem, 2.5vw, 1.4rem)',
            color: 'rgba(255,255,255,0.78)', marginBottom: 28,
          }}>
            {data.tagline}
          </p>

          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 10 }}>
            {[
              { label: 'Capital', value: data.capital },
              { label: 'Best Time', value: data.bestTime },
              { label: 'Language', value: data.language },
            ].map(s => (
              <div key={s.label} className="stat-chip">
                <span className="stat-chip-label">{s.label}</span>
                <span className="stat-chip-value">{s.value}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ─── OVERLAPPING CONTENT CARD ─── */}
      <div className="dest-overlap" style={cssVars}>

        {/* Description ribbon */}
        <div style={{
          background: `linear-gradient(135deg, ${data.heroColor} 0%, ${data.accentColor} 100%)`,
          padding: '22px 36px',
        }}>
          <p style={{ color: 'rgba(255,255,255,0.90)', fontSize: 15, lineHeight: 1.75, maxWidth: 820, fontWeight: 300 }}>
            <MdExplore style={{ display: 'inline', marginRight: 8, verticalAlign: 'middle', fontSize: 20, opacity: 0.8 }} />
            {data.description}
          </p>
        </div>

        {/* Tabs */}
        <div className="dest-tabs" style={cssVars}>
          {tabs.map(t => (
            <button key={t.id} className={`dest-tab ${activeSection === t.id ? 'active' : ''}`}
              style={cssVars} onClick={() => setActiveSection(t.id)}>
              {t.icon} {t.label}
            </button>
          ))}
        </div>

        {/* ── PLACES TAB ── */}
        {activeSection === 'places' && (
          <div className="s-pad">
            <h2 className="dest-title" style={{ fontSize: 28, color: '#1e293b', marginBottom: 6 }}>
              Must-Visit Places
            </h2>
            <p style={{ color: '#64748b', fontSize: 14, marginBottom: 28 }}>
              Hand-picked destinations that define {data.name}
            </p>
            <div className="place-grid">
              {data.topPlaces.map((place, i) => (
                <div key={i} className="place-card" style={cssVars}>
                  <img className="place-card-img" src={place.image} alt={place.name} loading="lazy" />
                  <div className="place-card-overlay">
                    <div style={{ fontWeight: 700, fontSize: 15, marginBottom: 4 }}>{place.name}</div>
                    <div style={{ fontSize: 12, opacity: 0.78 }}>{place.desc}</div>
                  </div>
                  <div className="place-num" style={cssVars}>{i + 1}</div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* ── FOOD TAB ── */}
        {activeSection === 'food' && (
          <div className="s-pad">
            <h2 className="dest-title" style={{ fontSize: 28, color: '#1e293b', marginBottom: 6 }}>
              Famous Cuisine
            </h2>
            <p style={{ color: '#64748b', fontSize: 14, marginBottom: 32 }}>
              Flavours that define the soul of {data.name}
            </p>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 14 }}>
              {data.food.map((item, i) => (
                <div key={i} className="food-pill" style={cssVars}>
                  <span className="food-num" style={cssVars}>{i + 1}</span>
                  {item}
                </div>
              ))}
            </div>
            <div className="img-banner">
              <img src="https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?w=1200&q=80" alt="Indian cuisine" />
              <div className="img-banner-overlay"
                style={{ background: `linear-gradient(to right, ${data.heroColor}d0 0%, transparent 55%)` }}>
                <div>
                  <div className="dest-title" style={{ color: 'white', fontSize: 22, marginBottom: 6 }}>
                    Experience the Flavours
                  </div>
                  <div style={{ color: 'rgba(255,255,255,0.78)', fontSize: 13 }}>
                    Every dish tells a story of culture and tradition
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* ── FESTIVALS TAB ── */}
        {activeSection === 'festivals' && (
          <div className="s-pad">
            <h2 className="dest-title" style={{ fontSize: 28, color: '#1e293b', marginBottom: 6 }}>
              Festivals & Celebrations
            </h2>
            <p style={{ color: '#64748b', fontSize: 14, marginBottom: 28 }}>
              Vibrant events that bring {data.name} to life
            </p>
            <div className="fest-grid" style={cssVars}>
              {data.festivals.map((fest, i) => (
                <div key={i} className="fest-card" style={cssVars}>
                  <div style={{ fontSize: 34, marginBottom: 12 }}>{festEmojis[i % festEmojis.length]}</div>
                  <div style={{ fontWeight: 700, color: '#1e293b', fontSize: 16, marginBottom: 4 }}>{fest}</div>
                  <div style={{ fontSize: 12, color: '#64748b' }}>Cultural Celebration</div>
                  <div className="fest-bar" style={cssVars} />
                </div>
              ))}
            </div>
            <div className="img-banner">
              <img src="https://images.unsplash.com/photo-1612277795421-9bc7706a4a34?w=1200&q=80" alt="Indian festival" />
              <div className="img-banner-overlay"
                style={{ background: 'linear-gradient(to right, rgba(0,0,0,0.72) 0%, transparent 55%)' }}>
                <div>
                  <div className="dest-title" style={{ color: 'white', fontSize: 20, marginBottom: 5 }}>
                    Celebrate with Locals
                  </div>
                  <div style={{ color: 'rgba(255,255,255,0.78)', fontSize: 13 }}>
                    Time your visit around a festival for an unforgettable experience
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* ── HOTELS TAB ── */}
        {activeSection === 'hotels' && (
          <div className="s-pad">
            {/* Header banner */}
            <div className="hotel-header-banner" style={cssVars}>
              <div className="hotel-header-icon">🏨</div>
              <div>
                <h2 className="dest-title" style={{ fontSize: 24, color: '#1e293b', marginBottom: 4 }}>
                  Where to Stay in {data.name}
                </h2>
                <p style={{ color: '#64748b', fontSize: 13.5 }}>
                  Curated picks from heritage palaces to boutique retreats — for every kind of traveller
                </p>
              </div>
            </div>

            <div className="hotel-grid">
              {data.hotels.map((hotel, i) => (
                <div key={i} className="hotel-card" style={cssVars}>
                  {/* Image */}
                  <div className="hotel-card-img-wrap">
                    <img className="hotel-card-img" src={hotel.image} alt={hotel.name} loading="lazy" />
                    <div className="hotel-tag" style={cssVars}>{hotel.tag}</div>
                  </div>

                  {/* Body */}
                  <div className="hotel-card-body">
                    <StarRating count={hotel.stars} color={data.accentColor} />
                    <div className="hotel-name">{hotel.name}</div>
                    <div className="hotel-location">
                      <FaMapMarkerAlt size={10} color={data.accentColor} />
                      {hotel.location}
                    </div>
                    <div className="hotel-desc">{hotel.desc}</div>

                    <div className="hotel-footer">
                      <div>
                        <div className="hotel-price" style={{ color: data.heroColor }}>{hotel.price}</div>
                        <div className="hotel-price-label">avg. per night</div>
                      </div>
                      <button className="hotel-book-btn" style={cssVars}
                        onClick={() => window.open(`https://www.google.com/search?q=${encodeURIComponent(hotel.name + ' ' + hotel.location + ' booking')}`, '_blank')}>
                        Book Now ↗
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Tip note */}
            <div style={{
              marginTop: 32,
              borderRadius: 16,
              background: '#f8fafc',
              border: '1px solid #e2e8f0',
              padding: '16px 22px',
              display: 'flex', alignItems: 'center', gap: 12,
              fontSize: 13, color: '#64748b',
            }}>
              <span style={{ fontSize: 20 }}>💡</span>
              <span>Prices are indicative and may vary by season. Always book directly or via trusted platforms for best rates. Heritage hotels often sell out during peak season — book early!</span>
            </div>
          </div>
        )}

        {/* ── INFO TAB ── */}
        {activeSection === 'info' && (
          <div className="s-pad">
            <h2 className="dest-title" style={{ fontSize: 28, color: '#1e293b', marginBottom: 6 }}>
              Travel Info & Tips
            </h2>
            <p style={{ color: '#64748b', fontSize: 14, marginBottom: 28 }}>
              Everything you need to plan your perfect trip
            </p>
            <div className="info-grid">
              {[
                { label: 'Capital City', value: data.capital, emoji: '🏙️' },
                { label: 'Best Time to Visit', value: data.bestTime, emoji: '📅' },
                { label: 'Primary Language', value: data.language, emoji: '🗣️' },
              ].map(info => (
                <div key={info.label} className="info-card">
                  <div style={{ fontSize: 30, marginBottom: 12 }}>{info.emoji}</div>
                  <div style={{ fontSize: 11, color: '#94a3b8', textTransform: 'uppercase', letterSpacing: '0.1em', fontWeight: 600 }}>
                    {info.label}
                  </div>
                  <div style={{ fontWeight: 700, color: '#1e293b', fontSize: 15, marginTop: 4 }}>{info.value}</div>
                </div>
              ))}
            </div>

            <div style={{
              borderRadius: 20, marginBottom: 24,
              background: `linear-gradient(135deg, ${data.heroColor}12 0%, ${data.accentColor}0a 100%)`,
              border: `1.5px solid ${data.heroColor}30`,
              padding: '22px 26px',
              display: 'flex', gap: 16, alignItems: 'flex-start',
            }}>
              <div style={{
                width: 44, height: 44, borderRadius: 12, flexShrink: 0,
                background: `linear-gradient(135deg, ${data.heroColor}, ${data.accentColor})`,
                display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 20,
              }}>
                💡
              </div>
              <div>
                <div style={{ fontWeight: 700, color: '#1e293b', marginBottom: 6 }}>Insider Tip</div>
                <div style={{ color: '#475569', fontSize: 14, lineHeight: 1.75 }}>{data.tips}</div>
              </div>
            </div>

            <div className="img-banner" style={{ marginTop: 0 }}>
              <img src={data.heroImage} alt={data.name} />
              <div className="img-banner-overlay"
                style={{ background: 'linear-gradient(to top, rgba(0,0,0,0.75) 0%, transparent 55%)', alignItems: 'flex-end', paddingBottom: 24 }}>
                <div className="dest-title" style={{ color: 'white', fontSize: 22 }}>
                  {data.name} awaits you ✨
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Card Footer */}
        <div className="dest-footer">
          <span style={{ fontSize: 13, color: '#94a3b8' }}>
            <FaCamera style={{ marginRight: 6, verticalAlign: 'middle' }} />
            Photos via Unsplash · Curated for travellers
          </span>
          <button
            className="outline-btn"
            onClick={onBack}
            style={{ border: `1.5px solid ${data.heroColor}`, color: data.heroColor }}
            onMouseEnter={e => { e.currentTarget.style.background = data.heroColor; e.currentTarget.style.color = '#fff'; }}
            onMouseLeave={e => { e.currentTarget.style.background = 'transparent'; e.currentTarget.style.color = data.heroColor; }}
          >
            <FaArrowLeft size={11}/> Explore other states
          </button>
        </div>
      </div>

      <div style={{ height: 60 }} />
    </div>
  );
};

export default Destinations;
