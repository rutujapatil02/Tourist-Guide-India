// SubBeaches.jsx
import { useState, useRef, useEffect } from "react";
import beachesData from "../../../Data/PlacesToGo/Beaches/SubBeachesData";

// ─── Scrollable Horizontal List with Arrows ───────────────────────────────────
function ScrollRow({ children, className = "" }) {
  const rowRef = useRef(null);

  const scroll = (dir) => {
    if (rowRef.current) {
      rowRef.current.scrollBy({ left: dir * 320, behavior: "smooth" });
    }
  };

  return (
    <div className={`scroll-row-wrapper ${className}`}>
      <button className="scroll-arrow left" onClick={() => scroll(-1)} aria-label="Scroll left">
        ‹
      </button>
      <div className="scroll-row" ref={rowRef}>
        {children}
      </div>
      <button className="scroll-arrow right" onClick={() => scroll(1)} aria-label="Scroll right">
        ›
      </button>
    </div>
  );
}

// ─── Hotels / Attraction Cards with tabbed filter ────────────────────────────
function AttractionSection({ beach }) {
  const [activeAttrTab, setActiveAttrTab] = useState("Accommodation");

  const attractionContent = {
    Accommodation: beach.hotels,
    ...(beach.attractionData || {}),
  };

  const currentItems = attractionContent[activeAttrTab] || [];

  return (
    <section className="section">
      <h2 className="section-title">{beach.name} hotels and attractions</h2>
      <div className="tab-bar">
        {beach.attractionTabs.map((tab) => (
          <button
            key={tab}
            className={`tab-pill ${activeAttrTab === tab ? "active" : ""}`}
            onClick={() => setActiveAttrTab(tab)}
          >
            {tab}
          </button>
        ))}
        <button className="tab-pill view-all">View all →</button>
      </div>
      <ScrollRow>
        {currentItems.map((item, i) => (
          <div key={i} className="attraction-card">
            <div className="attraction-img-wrap">
              <img src={item.image} alt={item.name} loading="lazy" />
            </div>
            <div className="attraction-info">
              <h4>{item.name}</h4>
              <p className="attraction-type">{item.type}</p>
              {item.priceFrom && (
                <p className="attraction-price">
                  From <strong>{item.priceFrom}</strong>
                  {item.priceTo && ` to ${item.priceTo}`}
                  {activeAttrTab === "Accommodation" && (
                    <span className="ext-link"> ↗</span>
                  )}
                </p>
              )}
            </div>
          </div>
        ))}
      </ScrollRow>
    </section>
  );
}

// ─── Main SubBeaches Component ────────────────────────────────────────────────
export default function SubBeaches({ beachId, onBack, onGoHome }) {
  const beach = beachesData.find((b) => b.id === beachId) || beachesData[0];
  const [activeTab, setActiveTab] = useState(beach.tabs[0].id);

  // Reset tab when beach changes so each beach shows its own content
  useEffect(() => {
    setActiveTab(beach.tabs[0].id);
  }, [beachId]);

  const activeTabContent = beach.tabs.find((t) => t.id === activeTab)?.content;

  return (
    <div className="sub-beaches-page">
      <style>{`
        /* ── Reset & Base ──────────────────────────────────── */
        *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
        .sub-beaches-page {
          font-family: 'Georgia', 'Times New Roman', serif;
          color: #1a1a1a;
          background: #f9f9f9; /* Subtle background for contrast */
          min-height: 100vh;
        }

        /* ── Hero wrapper (positions nav over hero) ─────────── */
        .hero-wrapper {
          position: relative;
        }

        /* ── Top Navbar (overlays hero) ────────────────────── */
        .top-navbar {
          width: 100%;
          padding: 18px 48px;
          display: flex;
          align-items: center;
          gap: 8px;
          font-family: 'Arial', sans-serif;
          font-size: 14px;
          color: rgba(255,255,255,0.9);
          position: absolute;
          top: 0;
          left: 0;
          z-index: 40;
          background: linear-gradient(to bottom, rgba(0,0,0,0.55), transparent);
        }
        .top-navbar a, .top-navbar .nav-link {
          color: rgba(255,255,255,0.9);
          text-decoration: none;
          cursor: pointer;
          font-weight: 600;
          transition: color 0.15s;
        }
        .top-navbar a:hover, .top-navbar .nav-link:hover { text-decoration: underline; color: #fff; }
        .top-navbar .nav-sep { color: rgba(255,255,255,0.55); font-size: 16px; }
        .top-navbar .nav-current { color: #fff; font-weight: 700; }

        /* ── Back Button ───────────────────────────────────── */
        .back-btn {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          padding: 10px 20px;
          background: none;
          border: none;
          color: #fff; /* Changed to white to sit on Hero */
          font-size: 14px;
          cursor: pointer;
          font-family: 'Arial', sans-serif;
          position: absolute;
          top: 60px; /* offset below navbar */
          left: 16px;
          z-index: 30;
        }
        .back-btn:hover { text-decoration: underline; }

        /* ── Hero ──────────────────────────────────────────── */
        .hero {
          position: relative;
          width: 100%;
          height: 520px; /* Adjusted height */
          overflow: hidden;
        }
        .hero img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
        }
        .hero-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(to bottom, rgba(0,0,0,0.2) 0%, rgba(0,0,0,0.6) 100%);
        }
        .hero-text {
          position: absolute;
          bottom: 100px; /* Pushed up slightly to avoid content overlap */
          left: 0;
          padding: 40px 48px;
          color: #fff;
        }
        .hero-text h1 {
          font-size: clamp(2.2rem, 5vw, 3.5rem);
          font-weight: 800;
          letter-spacing: -0.5px;
          line-height: 1.1;
          margin-bottom: 8px;
        }
        .hero-text .aboriginal {
          font-family: 'Arial', sans-serif;
          font-size: 13px;
          opacity: 0.85;
          font-style: italic;
        }
        .hero-actions {
          position: absolute;
          bottom: 120px;
          right: 48px;
          display: flex;
          gap: 10px;
        }
        .hero-action-btn {
          width: 42px; height: 42px;
          border-radius: 50%;
          border: 2px solid rgba(255,255,255,0.7);
          background: rgba(0,0,0,0.3);
          color: #fff;
          font-size: 18px;
          cursor: pointer;
          display: flex; align-items: center; justify-content: center;
          transition: background 0.2s;
        }
        .hero-action-btn:hover { background: rgba(0,0,0,0.6); }

        /* ── Content Wrapper (THE OVERLAP) ─────────────────── */
        .content-wrap {
          max-width: 1320px;
          margin: -80px auto 0; /* This creates the overlap effect */
          padding: 0 48px;
          position: relative;
          z-index: 20;
        }

        /* ── Breadcrumb ────────────────────────────────────── */
        .breadcrumb {
          display: flex;
          align-items: center;
          gap: 8px;
          padding: 12px 0;
          font-family: 'Arial', sans-serif;
          font-size: 13px;
          color: #fff; /* White to match image nav */
          margin-bottom: 10px;
        }
        .breadcrumb a {
          color: #fff;
          text-decoration: none;
          cursor: pointer;
          opacity: 0.9;
        }
        .breadcrumb a:hover { text-decoration: underline; }
        .breadcrumb span { color: rgba(255,255,255,0.6); }

        /* ── Welcome / Tab Section ─────────────────────────── */
        .welcome-section {
          display: grid;
          grid-template-columns: 1fr 340px;
          gap: 48px;
          padding: 48px;
          background: #fff;
          border-radius: 8px 8px 0 0;
          box-shadow: 0 -10px 30px rgba(0,0,0,0.1);
        }
        .tab-bar {
          display: flex;
          flex-wrap: wrap;
          gap: 8px;
          margin-bottom: 28px;
        }
        .tab-pill {
          padding: 10px 20px;
          border-radius: 999px;
          border: 1.5px solid #ccc;
          background: #fff;
          font-family: 'Arial', sans-serif;
          font-size: 14px;
          cursor: pointer;
          transition: all 0.2s;
          color: #333;
        }
        .tab-pill:hover { border-color: #333; background: #f5f5f5; }
        .tab-pill.active {
          background: #1a1a1a;
          color: #fff;
          border-color: #1a1a1a;
        }
        .tab-pill.view-all {
          border-color: #ccc;
          color: #007b5e;
          font-weight: 600;
        }
        .tab-pill.view-all:hover { background: #f0faf6; }

        .tagline {
          font-size: 18px;
          font-weight: 700;
          color: #1a1a1a;
          line-height: 1.5;
          margin-bottom: 18px;
        }
        .tab-content-text {
          font-family: 'Arial', sans-serif;
          font-size: 15px;
          line-height: 1.75;
          color: #444;
        }

        /* ── Map Sidebar ───────────────────────────────────── */
        .map-sidebar {
          background: #e8f4f1;
          border-radius: 12px;
          overflow: hidden;
          height: 280px;
          position: relative;
          display: flex;
          flex-direction: column;
        }
        .map-placeholder {
          flex: 1;
          background: linear-gradient(135deg, #b2dfdb 0%, #80cbc4 50%, #4db6ac 100%);
          display: flex;
          align-items: center;
          justify-content: center;
          color: #fff;
          font-size: 40px;
        }
        .map-btn {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 6px;
          padding: 12px;
          background: #fff;
          border: none;
          font-family: 'Arial', sans-serif;
          font-size: 14px;
          font-weight: 600;
          cursor: pointer;
          border-top: 1px solid #ddd;
          transition: background 0.2s;
        }
        .map-btn:hover { background: #f5f5f5; }

        /* ── Section Generic ───────────────────────────────── */
        .section {
          padding: 48px;
          background: #fff;
          border-bottom: 1px solid #e5e5e5;
        }
        .section-title {
          font-size: clamp(1.6rem, 3vw, 2.2rem);
          font-weight: 800;
          margin-bottom: 32px;
          letter-spacing: -0.3px;
        }

        /* ── Top Things To Do (UPDATED FOR SCROLL) ────────── */
        .thing-card {
          min-width: 320px; /* Fixed width for scroll consistency */
          scroll-snap-align: start;
          border-radius: 12px;
          overflow: hidden;
          box-shadow: 0 2px 12px rgba(0,0,0,0.08);
          transition: transform 0.2s, box-shadow 0.2s;
          cursor: pointer;
          background: #fff;
          flex-shrink: 0;
        }
        .thing-card:hover {
          transform: translateY(-4px);
          box-shadow: 0 8px 28px rgba(0,0,0,0.14);
        }
        .thing-img {
          width: 100%;
          height: 200px;
          object-fit: cover;
          display: block;
        }
        .thing-info {
          padding: 18px 20px;
        }
        .thing-info h3 {
          font-size: 17px;
          margin-bottom: 8px;
          font-weight: 600;
          font-family: 'Arial', sans-serif;
        }
        .thing-info p {
          font-family: 'Arial', sans-serif;
          font-size: 13.5px;
          line-height: 1.65;
          color: #555;
        }

        /* ── Scrollable Row ────────────────────────────────── */
        .scroll-row-wrapper {
          position: relative;
          display: flex;
          align-items: center;
        }
        .scroll-row {
          display: flex;
          gap: 20px;
          overflow-x: auto;
          scroll-snap-type: x mandatory;
          padding: 8px 0 16px;
          scrollbar-width: none;
          flex: 1;
        }
        .scroll-row::-webkit-scrollbar { display: none; }
        .scroll-arrow {
          position: absolute; /* Changed to absolute to float over cards */
          z-index: 25;
          width: 44px; height: 44px;
          border-radius: 50%;
          border: 1.5px solid #ccc;
          background: #fff;
          font-size: 24px;
          cursor: pointer;
          display: flex; align-items: center; justify-content: center;
          box-shadow: 0 4px 12px rgba(0,0,0,0.15);
          transition: all 0.2s;
          color: #333;
          line-height: 1;
        }
        .scroll-arrow:hover { background: #1a1a1a; color: #fff; border-color: #1a1a1a; }
        .scroll-arrow.left { left: -22px; }
        .scroll-arrow.right { right: -22px; }

        /* ── Itinerary Cards ───────────────────────────────── */
        .itinerary-card {
          min-width: 260px;
          scroll-snap-align: start;
          border-radius: 12px;
          overflow: hidden;
          position: relative;
          cursor: pointer;
          flex-shrink: 0;
        }
        .itinerary-card img {
          width: 100%;
          height: 200px;
          object-fit: cover;
          display: block;
          transition: transform 0.3s;
        }
        .itinerary-card:hover img { transform: scale(1.04); }
        .itinerary-label {
          position: absolute;
          bottom: 0; left: 0; right: 0;
          padding: 40px 18px 18px;
          background: linear-gradient(to top, rgba(0,0,0,0.75), transparent);
          color: #fff;
          font-family: 'Arial', sans-serif;
          font-size: 15px;
          font-weight: 600;
          line-height: 1.4;
        }

        /* ── Attraction Cards ──────────────────────────────── */
        .attraction-card {
          min-width: 240px;
          scroll-snap-align: start;
          border-radius: 12px;
          overflow: hidden;
          box-shadow: 0 2px 10px rgba(0,0,0,0.08);
          background: #fff;
          flex-shrink: 0;
          cursor: pointer;
          transition: transform 0.2s, box-shadow 0.2s;
        }
        .attraction-card:hover {
          transform: translateY(-3px);
          box-shadow: 0 6px 20px rgba(0,0,0,0.12);
        }
        .attraction-img-wrap {
          height: 160px;
          overflow: hidden;
          background: #eee;
        }
        .attraction-img-wrap img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
        }
        .attraction-info {
          padding: 14px 16px;
        }
        .attraction-info h4 {
          font-family: 'Arial', sans-serif;
          font-size: 14px;
          font-weight: 700;
          margin-bottom: 4px;
          color: #1a1a1a;
        }
        .attraction-type {
          font-family: 'Arial', sans-serif;
          font-size: 12px;
          color: #666;
          margin-bottom: 8px;
          line-height: 1.4;
        }
        .attraction-price {
          font-family: 'Arial', sans-serif;
          font-size: 13px;
          color: #333;
        }
        .attraction-price strong { font-weight: 700; }
        .ext-link { color: #007b5e; }

        /* ── Nearby Destinations ───────────────────────────── */
        .nearby-card {
          min-width: 300px;
          scroll-snap-align: start;
          border-radius: 12px;
          overflow: hidden;
          position: relative;
          cursor: pointer;
          flex-shrink: 0;
          height: 220px;
        }
        .nearby-card img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
          transition: transform 0.3s;
        }
        .nearby-card:hover img { transform: scale(1.05); }
        .nearby-label {
          position: absolute;
          bottom: 0; left: 0; right: 0;
          padding: 48px 20px 20px;
          background: linear-gradient(to top, rgba(0,0,0,0.7), transparent);
          color: #fff;
          font-family: 'Arial', sans-serif;
          font-size: 18px;
          font-weight: 700;
        }

        /* ── Experience Photo Grid ─────────────────────────── */
        .experience-grid {
          display: grid;
          grid-template-columns: 2fr 1fr 1fr;
          grid-template-rows: 240px 240px;
          gap: 8px;
          border-radius: 12px;
          overflow: hidden;
        }
        .exp-photo {
          overflow: hidden;
          cursor: pointer;
        }
        .exp-photo:first-child {
          grid-row: 1 / 3;
        }
        .exp-photo img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
          transition: transform 0.3s;
        }
        .exp-photo:hover img { transform: scale(1.05); }

        /* ── Responsive ────────────────────────────────────── */
        @media (max-width: 900px) {
          .content-wrap { padding: 0 20px; margin-top: -40px; }
          .welcome-section { grid-template-columns: 1fr; padding: 24px; }
          .map-sidebar { display: none; }
          .hero { height: 350px; }
          .hero-text { padding: 24px; bottom: 60px; }
          .section { padding: 24px; }
          .scroll-arrow { display: none; } /* Hide arrows on mobile for touch swipe */
          .experience-grid {
            grid-template-columns: 1fr 1fr;
            grid-template-rows: repeat(3, 180px);
          }
          .exp-photo:first-child { grid-row: 1 / 2; }
        }
      `}</style>

      {/* Hero wrapper — nav overlays the hero image */}
      <div className="hero-wrapper">
        <nav className="top-navbar">
          <span className="nav-link" onClick={onGoHome || onBack}>Home</span>
          <span className="nav-sep">›</span>
          <span className="nav-link" onClick={onBack}>Places to go</span>
          <span className="nav-sep">›</span>
          <span className="nav-current">{beach.name}</span>
        </nav>

        <div className="hero">
          <img src={beach.heroImage} alt={beach.name} />
          <div className="hero-overlay" />
          <div className="hero-text">
            <h1>{beach.name}</h1>
            {beach.aboriginalName && (
              <p className="aboriginal">Local name: {beach.aboriginalName}</p>
            )}
          </div>
          <div className="hero-actions">
            <button className="hero-action-btn" title="Save">♡</button>
            <button className="hero-action-btn" title="Share">⤴</button>
          </div>
        </div>
      </div>

      {/* Content overlapping hero */}
      <div className="content-wrap">
        {/* Welcome / Tab Section */}
        <div className="welcome-section">
          <div className="welcome-left">
            <div className="tab-bar">
              {beach.tabs.map((tab) => (
                <button
                  key={tab.id}
                  className={`tab-pill ${activeTab === tab.id ? "active" : ""}`}
                  onClick={() => setActiveTab(tab.id)}
                >
                  {tab.label}
                </button>
              ))}
            </div>
            <p className="tagline">{beach.tagline}</p>
            <p className="tab-content-text">{activeTabContent}</p>
          </div>

          {/* Map Sidebar */}
          <aside className="map-sidebar">
            <div className="map-placeholder">🗺</div>
            <button className="map-btn">View full map ↗</button>
          </aside>
        </div>

        {/* Top Things To Do (Now Scrollable) */}
        {/* Top Things To Do */}
        <section className="section">
          <h2 className="section-title">Top things to do in {beach.name}</h2>
          {/* scrollDistance updated to 220px to match the new card width */}
          <ScrollRow scrollDistance={220}> 
            {beach.topThingsToDo.map((thing, i) => (
              <div key={i} className="thing-card" style={{ 
                minWidth: '250px', 
                width: '250px', 
                flexShrink: 0 
              }}>
                <img 
                  className="thing-img" 
                  src={thing.image} 
                  alt={thing.title} 
                  loading="lazy" 
                  style={{ height: '140px' }} 
                />
                <div className="thing-info" style={{ padding: '12px' }}>
                  <h3 style={{ fontSize: '15px' }}>{thing.title}</h3>
                  <p style={{ fontSize: '12.5px', lineHeight: '1.4' }}>{thing.description}</p>
                </div>
              </div>
            ))}
          </ScrollRow>
        </section>

        {/* Trips and Itineraries */}
        <section className="section">
          <h2 className="section-title">Trips and Itineraries</h2>
          <ScrollRow>
            {beach.itineraries.map((item, i) => (
              <div key={i} className="itinerary-card">
                <img src={item.image} alt={item.title} loading="lazy" />
                <div className="itinerary-label">{item.title}</div>
              </div>
            ))}
          </ScrollRow>
        </section>

        {/* Hotels and Attractions (with sub-tabs) */}
        <AttractionSection beach={beach} />

        {/* Destinations Nearby */}
        <section className="section">
          <h2 className="section-title">Destinations near {beach.name}</h2>
          <ScrollRow>
            {beach.nearbyDestinations.map((dest, i) => (
              <div key={i} className="nearby-card">
                <img src={dest.image} alt={dest.name} loading="lazy" />
                <div className="nearby-label">{dest.name}</div>
              </div>
            ))}
          </ScrollRow>
        </section>

        {/* Experience Photo Grid */}
        <section className="section">
          <h2 className="section-title">{beach.name} travel experiences</h2>
          <div className="experience-grid">
            {beach.experienceImages.slice(0, 5).map((src, i) => (
              <div key={i} className="exp-photo">
                <img src={src} alt={`Experience ${i + 1}`} loading="lazy" />
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}