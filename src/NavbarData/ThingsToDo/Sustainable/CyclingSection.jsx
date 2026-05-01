import React, { useState, useRef } from "react";
import Footer from "../../../components/Footer";
import {
  cyclingHeroData,
  cyclingIntroData,
  cyclingPrinciplesData,
  cyclingPlanData,
  cyclingSnapsData,
} from "../../../Data/ThingsToDo/Sustainable/CyclingData";

/* ─────────────────────────────────────────
   SLIDESHOW SUB-COMPONENT
───────────────────────────────────────── */
const DetailSlideshow = ({ principle }) => {
  const [idx, setIdx] = useState(0);
  const total = principle.detailImages.length;
  return (
    <div className="detail-img-side">
      <div className="detail-img-frame">
        <img src={principle.detailImages[idx]} alt={principle.title} className="detail-main-img" />
        <button className="detail-arrow left" onClick={() => setIdx((i) => (i - 1 + total) % total)}>‹</button>
        <button className="detail-arrow right" onClick={() => setIdx((i) => (i + 1) % total)}>›</button>
        <div className="detail-progress-bar">
          {principle.detailImages.map((_, i) => (
            <span key={i} className={`detail-dot ${i === idx ? "active" : ""}`} onClick={() => setIdx(i)} />
          ))}
        </div>
      </div>
      <p className="detail-caption">{principle.caption}</p>
    </div>
  );
};

/* ─────────────────────────────────────────
   DETAIL PAGE  (full page shown on card click)
───────────────────────────────────────── */
const PrincipleDetailPage = ({ item, allItems, onBack }) => (
  <div className="cycling-page-wrapper">

    {/* Breadcrumb */}
    <nav className="cycling-breadcrumb">
      <div className="cycling-container">
        <span onClick={onBack} style={{ cursor: "pointer" }}>
          Home &gt; Things to do &gt; Cycling and Walking Tours
        </span>
        <span className="breadcrumb-sep"> &gt; </span>
        <span>{item.title}</span>
      </div>
    </nav>

    {/* Back button */}
    <div className="cycling-container" style={{ paddingTop: 26 }}>
      <button className="back-btn" onClick={onBack}>← Back to Sustainable Travel</button>
    </div>

    {/* Author line */}
    <div className="cycling-container detail-author">
      By <strong>India Tourism</strong>
    </div>

    {/* All principles listed like Australia scroll page */}
    {allItems.map((principle, pIdx) => (
      <section key={principle.id} className={`detail-section ${principle.id === item.id ? "detail-section--active" : ""}`}>
        <div className="cycling-container">
          <div className={`detail-layout ${pIdx % 2 === 0 ? "img-left" : "img-right"}`}>
            <DetailSlideshow principle={principle} />
            <div className="detail-text-side">
              <div className="detail-number-title">
                <span className="detail-number">{principle.id}</span>
                <h2 className="detail-title">{principle.title}</h2>
              </div>
              <p className="detail-description">{principle.description}</p>
              <div className="learn-more-card">
                <img src={principle.learnMore.thumbnail} alt={principle.learnMore.name} />
                <div className="learn-more-info">
                  <p className="learn-more-name">{principle.learnMore.name}</p>
                  <p className="learn-more-tags">{principle.learnMore.tags}</p>
                </div>
                <a href="#" className="learn-more-link">
                  Learn more&nbsp;
                  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                    <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6"/>
                    <polyline points="15 3 21 3 21 9"/>
                    <line x1="10" y1="14" x2="21" y2="3"/>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    ))}

    <Footer />
    <DetailStyles />
  </div>
);

/* ─────────────────────────────────────────
   MAIN CYCLING PAGE
───────────────────────────────────────── */
const CyclingSection = () => {
  const principlesRef = useRef(null);
  const planRef = useRef(null);
  const [activePrinciple, setActivePrinciple] = useState(null);

  const scrollCarousel = (ref, direction) => {
    if (ref.current) ref.current.scrollBy({ left: direction * 560, behavior: "smooth" });
  };

  const handleCardClick = (item) => {
    setActivePrinciple(item);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleBack = () => {
    setActivePrinciple(null);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  /* ── Render detail page if a card was clicked ── */
  if (activePrinciple) {
    return (
      <PrincipleDetailPage
        item={activePrinciple}
        allItems={cyclingPrinciplesData.items}
        onBack={handleBack}
      />
    );
  }

  /* ── Main page ── */
  return (
    <div className="cycling-page-wrapper">

      {/* 1. Breadcrumb */}
      <nav className="cycling-breadcrumb">
        <div className="cycling-container">
          {cyclingHeroData.breadcrumb.map((crumb, index) => (
            <span key={index}>
              {crumb}
              {index < cyclingHeroData.breadcrumb.length - 1 && <span className="breadcrumb-sep"> &gt; </span>}
            </span>
          ))}
        </div>
      </nav>

      {/* 2. Hero Image */}
      <div className="cycling-hero">
        <img
          src={cyclingHeroData.heroImage}
          alt="Cycling and Walking Tours in India"
          onError={(e) => { e.target.src = "https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=1400&q=80"; }}
        />
      </div>

      {/* 3. Title + Share + Intro */}
      <div className="cycling-container cycling-intro-section">
        <h1 className="cycling-main-title">{cyclingHeroData.title}</h1>
        <p className="cycling-main-subtitle">{cyclingHeroData.subtitle}</p>
        <div className="share-icons">
          <a href="#" className="share-btn facebook">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="white"><path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"/></svg>
          </a>
          <a href="#" className="share-btn whatsapp">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="white"><path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"/></svg>
          </a>
          <a href="#" className="share-btn link">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2"><path d="M10 13a5 5 0 007.54.54l3-3a5 5 0 00-7.07-7.07l-1.72 1.71"/><path d="M14 11a5 5 0 00-7.54-.54l-3 3a5 5 0 007.07 7.07l1.71-1.71"/></svg>
          </a>
        </div>
        <div className="intro-box">
          <div className="intro-text-side">
            <h2 className="intro-box-title">{cyclingIntroData.heading}</h2>
            <p className="intro-box-body">{cyclingIntroData.body}</p>
          </div>
          <div className="intro-img-side">
            <img src={cyclingIntroData.image} alt="Green is our Gold" />
          </div>
        </div>
      </div>

      {/* 4. Principles Carousel — clicking goes to full detail page */}
      <section className="principles-section">
        <div className="cycling-container">
          <h2 className="section-heading">{cyclingPrinciplesData.heading}</h2>
        </div>
        <div className="carousel-wrapper">
          <div className="carousel-track" ref={principlesRef}>
            {cyclingPrinciplesData.items.map((item) => (
              <div key={item.id} className="principle-card" onClick={() => handleCardClick(item)}>
                <img src={item.image} alt={item.title} />
                <div className="principle-card-body">
                  <h3 className="principle-title">{item.title}</h3>
                  <p className="principle-desc">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
          <button className="carousel-nav-btn right" onClick={() => scrollCarousel(principlesRef, 1)}>›</button>
        </div>
      </section>

      {/* 5. Plan */}
      <section className="plan-section">
        <div className="cycling-container">
          <h2 className="section-heading">{cyclingPlanData.heading}</h2>
        </div>
        <div className="carousel-wrapper">
          <div className="carousel-track" ref={planRef}>
            {cyclingPlanData.items.map((item) => (
              <a href="#" key={item.id} className="plan-card">
                <img src={item.image} alt={item.title} />
                <div className="plan-card-overlay">
                  <span className="plan-card-title">{item.title}</span>
                </div>
              </a>
            ))}
          </div>
          <button className="carousel-nav-btn right" onClick={() => scrollCarousel(planRef, 1)}>›</button>
        </div>
      </section>

      {/* 6. Sustainable Snaps */}
      <section className="snaps-section">
        <div className="cycling-container">
          <h2 className="section-heading">{cyclingSnapsData.heading}</h2>
          <div className="snaps-grid">
            <div className="snap-large">
              <img src={cyclingSnapsData.images[0].src} alt="snap" />
              <span className="snap-icon"><svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2"><rect x="3" y="3" width="18" height="18" rx="5"/><circle cx="12" cy="13" r="4"/></svg></span>
            </div>
            <div className="snaps-small-grid">
              {cyclingSnapsData.images.slice(1).map((img) => (
                <div key={img.id} className="snap-small">
                  <img src={img.src} alt="snap" />
                  <span className="snap-icon"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2"><rect x="3" y="3" width="18" height="18" rx="5"/><circle cx="12" cy="13" r="4"/></svg></span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <Footer />
      <MainStyles />
    </div>
  );
};

/* ─────────────────────────────────────────
   STYLES
───────────────────────────────────────── */
const MainStyles = () => (
  <style>{`
    .cycling-page-wrapper { font-family: 'Georgia', serif; color: #1a1a1a; background: #fff; }
    .cycling-container { max-width: 1200px; margin: 0 auto; padding: 0 40px; }
    .cycling-breadcrumb { background: #00a3b4; color: white; padding: 11px 0; font-size: 13px; font-family: 'Arial', sans-serif; }
    .breadcrumb-sep { opacity: 0.7; margin: 0 4px; }
    .cycling-hero { width: 100%; height: 520px; overflow: hidden; line-height: 0; }
    .cycling-hero img { width: 100%; height: 100%; object-fit: cover; display: block; }
    .cycling-intro-section { padding: 60px 40px 0; text-align: center; }
    .cycling-main-title { font-size: 3.6rem; font-weight: 700; line-height: 1.15; margin-bottom: 18px; color: #111; }
    .cycling-main-subtitle { font-size: 1.15rem; color: #555; max-width: 680px; margin: 0 auto 28px; line-height: 1.65; font-family: 'Arial', sans-serif; }
    .share-icons { display: flex; gap: 12px; justify-content: center; margin-bottom: 52px; }
    .share-btn { width: 44px; height: 44px; border-radius: 50%; display: flex; align-items: center; justify-content: center; text-decoration: none; }
    .share-btn.facebook { background: #1877f2; } .share-btn.whatsapp { background: #25d366; } .share-btn.link { background: #333; }
    .intro-box { display: grid; grid-template-columns: 1fr 1fr; margin-bottom: 70px; text-align: left; background: #e8f7f9; }
    .intro-text-side { padding: 50px 48px; }
    .intro-box-title { font-size: 1.6rem; font-weight: 700; margin-bottom: 18px; color: #111; }
    .intro-box-body { font-size: 0.97rem; line-height: 1.75; color: #444; font-family: 'Arial', sans-serif; }
    .intro-img-side img { width: 100%; height: 100%; object-fit: cover; display: block; }
    .section-heading { font-size: 2.1rem; font-weight: 700; color: #111; margin-bottom: 30px; line-height: 1.25; }
    .carousel-wrapper { position: relative; padding: 0 40px; max-width: 1280px; margin: 0 auto; }
    .carousel-track { display: flex; gap: 20px; overflow-x: auto; scroll-behavior: smooth; padding-bottom: 12px; scrollbar-width: none; }
    .carousel-track::-webkit-scrollbar { display: none; }
    .carousel-nav-btn { position: absolute; top: 38%; transform: translateY(-50%); background: white; border: 1px solid #ddd; border-radius: 50%; width: 48px; height: 48px; font-size: 28px; display: flex; align-items: center; justify-content: center; cursor: pointer; box-shadow: 0 2px 8px rgba(0,0,0,0.15); z-index: 10; color: #333; }
    .carousel-nav-btn.right { right: -10px; }
    .principles-section { padding: 60px 0 70px; }
    .principle-card { flex: 0 0 460px; background: white; cursor: pointer; transition: transform 0.2s, box-shadow 0.2s; }
    .principle-card:hover { transform: translateY(-4px); box-shadow: 0 8px 24px rgba(0,0,0,0.1); }
    .principle-card img { width: 100%; height: 320px; object-fit: cover; display: block; }
    .principle-card-body { padding: 20px 4px; }
    .principle-title { font-size: 1.25rem; font-weight: 700; margin-bottom: 8px; color: #111; }
    .principle-desc { font-size: 0.92rem; color: #555; line-height: 1.65; font-family: 'Arial', sans-serif; }
    .plan-section { padding: 60px 0 70px; background: #fafafa; }
    .plan-card { flex: 0 0 270px; position: relative; border-radius: 8px; overflow: hidden; display: block; text-decoration: none; cursor: pointer; }
    .plan-card img { width: 100%; height: 340px; object-fit: cover; display: block; transition: transform 0.3s; }
    .plan-card:hover img { transform: scale(1.04); }
    .plan-card-overlay { position: absolute; bottom: 0; left: 0; right: 0; background: linear-gradient(to top, rgba(0,0,0,0.72), transparent); padding: 60px 18px 22px; }
    .plan-card-title { color: white; font-size: 1.05rem; font-weight: 700; line-height: 1.3; display: block; }
    .snaps-section { padding: 60px 0 80px; }
    .snaps-grid { display: grid; grid-template-columns: 1.15fr 1fr; gap: 14px; }
    .snap-large { position: relative; border-radius: 6px; overflow: hidden; }
    .snap-large img { width: 100%; min-height: 580px; object-fit: cover; display: block; }
    .snaps-small-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 14px; }
    .snap-small { position: relative; border-radius: 6px; overflow: hidden; }
    .snap-small img { width: 100%; min-height: 270px; object-fit: cover; display: block; }
    .snap-icon { position: absolute; bottom: 12px; right: 12px; opacity: 0.85; }
    @media (max-width: 900px) {
      .cycling-main-title { font-size: 2.4rem; }
      .intro-box { grid-template-columns: 1fr; }
      .snaps-grid { grid-template-columns: 1fr; }
      .cycling-hero { height: 320px; }
      .principle-card { flex: 0 0 300px; }
    }
    @media (max-width: 600px) {
      .cycling-container { padding: 0 18px; }
      .carousel-wrapper { padding: 0 18px; }
      .cycling-main-title { font-size: 1.9rem; }
    }
  `}</style>
);

const DetailStyles = () => (
  <style>{`
    .cycling-page-wrapper { font-family: 'Georgia', serif; color: #1a1a1a; background: #fff; }
    .cycling-container { max-width: 1200px; margin: 0 auto; padding: 0 40px; }
    .cycling-breadcrumb { background: #00a3b4; color: white; padding: 11px 0; font-size: 13px; font-family: 'Arial', sans-serif; }
    .breadcrumb-sep { opacity: 0.7; margin: 0 4px; }
    .back-btn { background: none; border: none; color: #00a3b4; font-size: 0.95rem; font-weight: 600; cursor: pointer; font-family: 'Arial', sans-serif; padding: 0; margin-bottom: 4px; }
    .back-btn:hover { text-decoration: underline; }
    .detail-author { font-size: 0.95rem; color: #555; font-family: 'Arial', sans-serif; padding: 12px 40px 0; }
    .detail-section { padding: 60px 0 70px; border-bottom: 1px solid #eee; }
    .detail-section--active { background: #fff9f6; }
    .detail-layout { display: grid; grid-template-columns: 1fr 1fr; gap: 60px; align-items: start; }
    .detail-layout.img-right .detail-img-side { order: 2; }
    .detail-layout.img-right .detail-text-side { order: 1; }
    .detail-img-side { position: relative; }
    .detail-img-frame { position: relative; border-radius: 6px; overflow: hidden; line-height: 0; }
    .detail-main-img { width: 100%; height: 460px; object-fit: cover; display: block; }
    .detail-arrow { position: absolute; top: 50%; transform: translateY(-50%); background: rgba(255,255,255,0.82); border: none; border-radius: 50%; width: 46px; height: 46px; font-size: 26px; display: flex; align-items: center; justify-content: center; cursor: pointer; box-shadow: 0 2px 8px rgba(0,0,0,0.18); z-index: 5; color: #222; transition: background 0.15s; }
    .detail-arrow:hover { background: white; }
    .detail-arrow.left { left: 14px; }
    .detail-arrow.right { right: 14px; }
    .detail-progress-bar { position: absolute; bottom: 0; left: 0; right: 0; display: flex; height: 4px; }
    .detail-dot { flex: 1; height: 4px; background: rgba(255,255,255,0.35); cursor: pointer; transition: background 0.2s; }
    .detail-dot.active { background: white; }
    .detail-caption { font-size: 0.78rem; color: #999; margin-top: 10px; font-family: 'Arial', sans-serif; font-style: italic; }
    .detail-text-side { padding-top: 10px; }
    .detail-number-title { display: flex; align-items: flex-start; gap: 12px; margin-bottom: 28px; }
    .detail-number { font-size: 5.5rem; font-weight: 900; color: #e85d26; line-height: 0.85; flex-shrink: 0; }
    .detail-title { font-size: 2.4rem; font-weight: 700; color: #111; line-height: 1.15; margin: 0; }
    .detail-description { font-size: 1rem; color: #444; line-height: 1.8; font-family: 'Arial', sans-serif; margin-bottom: 36px; }
    .learn-more-card { display: flex; align-items: center; gap: 16px; border: 1px solid #e0e0e0; border-radius: 8px; padding: 14px 18px; background: #fff; box-shadow: 0 1px 4px rgba(0,0,0,0.06); }
    .learn-more-card img { width: 72px; height: 72px; border-radius: 6px; object-fit: cover; flex-shrink: 0; }
    .learn-more-info { flex: 1; }
    .learn-more-name { font-weight: 700; font-size: 0.97rem; color: #111; margin: 0 0 4px; }
    .learn-more-tags { font-size: 0.82rem; color: #888; margin: 0; font-family: 'Arial', sans-serif; }
    .learn-more-link { display: flex; align-items: center; color: #00a3b4; font-weight: 600; font-size: 0.9rem; text-decoration: none; white-space: nowrap; font-family: 'Arial', sans-serif; }
    .learn-more-link:hover { text-decoration: underline; }
    @media (max-width: 900px) {
      .detail-layout { grid-template-columns: 1fr; gap: 30px; }
      .detail-layout.img-right .detail-img-side { order: 1; }
      .detail-layout.img-right .detail-text-side { order: 2; }
      .detail-number { font-size: 3.8rem; }
      .detail-title { font-size: 1.8rem; }
    }
    @media (max-width: 600px) {
      .cycling-container { padding: 0 18px; }
      .detail-main-img { height: 260px; }
    }
  `}</style>
);

export default CyclingSection;