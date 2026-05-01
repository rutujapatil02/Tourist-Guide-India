// src/NavbarData/ThingsToDo/Sustainable/OrganicSection.jsx

import React, { useState } from "react";
import {
  organicHero,
  organicIntro,
  organicPrinciples,
  featuredOrganicTours,
  planYourTour,
  organicSnaps,
} from "../../../Data/ThingsToDo/Sustainable/OrganicData";

/* ─────────────────────────────────────────────
   Breadcrumb
───────────────────────────────────────────── */
const Breadcrumb = ({ items }) => (
  <nav className="breadcrumb" aria-label="breadcrumb">
    {items.map((item, i) => (
      <span key={i}>
        {i > 0 && <span className="breadcrumb-sep"> &gt; </span>}
        <span className={i === items.length - 1 ? "breadcrumb-active" : "breadcrumb-link"}>
          {item}
        </span>
      </span>
    ))}
  </nav>
);

/* ─────────────────────────────────────────────
   Hero Section
───────────────────────────────────────────── */
const HeroSection = ({ data }) => (
  <section className="org-hero">
    <div className="org-hero__overlay" />
    <div className="org-hero__content">
      <Breadcrumb items={data.breadcrumb} />
      <h1 className="org-hero__title">{data.title}</h1>
      <p className="org-hero__subtitle">{data.subtitle}</p>
      <div className="org-hero__share">
        <button className="share-btn share-btn--fb" aria-label="Share on Facebook">
          <svg viewBox="0 0 24 24" fill="currentColor" width="20" height="20">
            <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />
          </svg>
        </button>
        <button className="share-btn share-btn--wa" aria-label="Share on WhatsApp">
          <svg viewBox="0 0 24 24" fill="currentColor" width="20" height="20">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
            <path d="M12 0C5.373 0 0 5.373 0 12c0 2.123.555 4.116 1.529 5.845L.057 23.547a.5.5 0 00.609.61l5.703-1.473A11.955 11.955 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-1.891 0-3.667-.524-5.188-1.437l-.372-.22-3.386.875.892-3.255-.242-.389A9.956 9.956 0 012 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z" />
          </svg>
        </button>
        <button className="share-btn share-btn--link" aria-label="Copy link">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="20" height="20">
            <path d="M10 13a5 5 0 007.54.54l3-3a5 5 0 00-7.07-7.07l-1.72 1.71" />
            <path d="M14 11a5 5 0 00-7.54-.54l-3 3a5 5 0 007.07 7.07l1.71-1.71" />
          </svg>
        </button>
      </div>
    </div>
  </section>
);

/* ─────────────────────────────────────────────
   Intro Block
───────────────────────────────────────────── */
const IntroBlock = ({ data }) => (
  <section className="org-intro">
    <div className="org-intro__card">
      <h2 className="org-intro__heading">{data.heading}</h2>
      <p className="org-intro__body">{data.body}</p>
    </div>
  </section>
);

/* ─────────────────────────────────────────────
   Principles Carousel
───────────────────────────────────────────── */
const PrinciplesSection = ({ data }) => {
  const [active, setActive] = useState(0);
  const total = data.items.length;

  const prev = () => setActive((a) => (a - 1 + total) % total);
  const next = () => setActive((a) => (a + 1) % total);

  return (
    <section className="org-principles">
      <h2 className="org-principles__heading">{data.heading}</h2>
      <div className="org-principles__carousel">
        <button className="carousel-btn carousel-btn--prev" onClick={prev} aria-label="Previous">
          &#8249;
        </button>
        <div className="org-principles__slides">
          {data.items.map((item, i) => (
            <div
              key={item.id}
              className={`org-principles__slide ${i === active ? "org-principles__slide--active" : ""}`}
            >
              <div className="org-principles__img-wrap">
                <img src={item.image} alt={item.alt} className="org-principles__img" />
              </div>
              <div className="org-principles__text">
                <h3 className="org-principles__title">{item.title}</h3>
                <p className="org-principles__desc">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
        <button className="carousel-btn carousel-btn--next" onClick={next} aria-label="Next">
          &#8250;
        </button>
      </div>
      <div className="org-principles__dots">
        {data.items.map((_, i) => (
          <button
            key={i}
            className={`dot ${i === active ? "dot--active" : ""}`}
            onClick={() => setActive(i)}
            aria-label={`Go to slide ${i + 1}`}
          />
        ))}
      </div>
    </section>
  );
};

/* ─────────────────────────────────────────────
   Featured Tour Card
───────────────────────────────────────────── */
const FeaturedTourCard = ({ tour, reverse }) => (
  <article className={`featured-tour ${reverse ? "featured-tour--reverse" : ""}`}>
    <div className="featured-tour__media">
      <img src={tour.image} alt={tour.alt} className="featured-tour__img" />
    </div>
    <div className="featured-tour__content">
      <div className="featured-tour__number">{tour.id}</div>
      <h2 className="featured-tour__name">{tour.name}</h2>
      <h3 className="featured-tour__tagline">{tour.tagline}</h3>
      <p className="featured-tour__desc">{tour.description}</p>
      <div className="read-more-card">
        <img
          src={tour.readMore.image}
          alt={tour.readMore.title}
          className="read-more-card__img"
        />
        <div className="read-more-card__body">
          <strong className="read-more-card__title">{tour.readMore.title}</strong>
          <p className="read-more-card__desc">{tour.readMore.description}</p>
          <span className="read-more-card__time">
            Read time &bull; {tour.readMore.readTime}
          </span>
        </div>
      </div>
    </div>
  </article>
);

/* ─────────────────────────────────────────────
   Plan Your Tour Section
───────────────────────────────────────────── */
const PlanYourTour = ({ data }) => (
  <section className="plan-tour">
    <h2 className="plan-tour__heading">{data.heading}</h2>
    <div className="plan-tour__grid">
      {data.cards.map((card, i) => (
        <div key={i} className="plan-tour__card">
          <img src={card.image} alt={card.alt} className="plan-tour__img" />
          <span className="plan-tour__label">{card.title}</span>
        </div>
      ))}
    </div>
  </section>
);

/* ─────────────────────────────────────────────
   Farm Snaps Section
───────────────────────────────────────────── */
const FarmSnaps = ({ data }) => (
  <section className="snaps">
    <h2 className="snaps__heading">{data.heading}</h2>
    <div className="snaps__grid">
      {data.images.map((img, i) => (
        <div key={i} className={`snaps__item snaps__item--${i === 0 ? "large" : "small"}`}>
          <img src={img.src} alt={img.alt} className="snaps__img" />
          <div className="snaps__insta">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="18" height="18">
              <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
              <circle cx="12" cy="12" r="4" />
              <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
            </svg>
          </div>
        </div>
      ))}
    </div>
  </section>
);

/* ─────────────────────────────────────────────
   Main Page Component
───────────────────────────────────────────── */
const OrganicSection = () => {
  return (
    <main className="organic-page">
      <style>{`
        /* ── Base ── */
        .organic-page {
          font-family: 'Segoe UI', Arial, sans-serif;
          color: #1a1a1a;
          background: #fff;
          max-width: 1440px;
          margin: 0 auto;
        }

        /* ── Breadcrumb ── */
        .breadcrumb {
          font-size: 13px;
          color: rgba(255,255,255,0.85);
          margin-bottom: 16px;
        }
        .breadcrumb-sep { margin: 0 6px; }
        .breadcrumb-link { cursor: pointer; text-decoration: underline; }
        .breadcrumb-active { font-weight: 600; }

        /* ── Hero ── */
        .org-hero {
          position: relative;
          min-height: 480px;
          background: url('https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=1400&q=80') center/cover no-repeat;
          display: flex;
          align-items: flex-end;
        }
        .org-hero__overlay {
          position: absolute; inset: 0;
          background: linear-gradient(to top, rgba(0,0,0,0.72) 40%, rgba(0,0,0,0.15) 100%);
        }
        .org-hero__content {
          position: relative; z-index: 2;
          padding: 48px 60px;
          max-width: 760px;
          color: #fff;
        }
        .org-hero__title {
          font-size: clamp(28px, 4vw, 52px);
          font-weight: 700;
          line-height: 1.15;
          margin: 0 0 16px;
        }
        .org-hero__subtitle {
          font-size: clamp(14px, 1.5vw, 18px);
          line-height: 1.6;
          margin: 0 0 24px;
          opacity: 0.95;
        }
        .org-hero__share { display: flex; gap: 12px; }
        .share-btn {
          width: 40px; height: 40px;
          border-radius: 50%;
          border: none;
          cursor: pointer;
          display: flex; align-items: center; justify-content: center;
          color: #fff;
        }
        .share-btn--fb { background: #1877f2; }
        .share-btn--wa { background: #25d366; }
        .share-btn--link { background: #555; }

        /* ── Intro ── */
        .org-intro {
          padding: 60px 60px 40px;
        }
        .org-intro__card {
          background: #f0f7ee;
          border-radius: 12px;
          padding: 40px 48px;
          max-width: 760px;
        }
        .org-intro__heading {
          font-size: clamp(18px, 2vw, 24px);
          font-weight: 700;
          margin: 0 0 16px;
          color: #2d5a1b;
        }
        .org-intro__body {
          font-size: 15px;
          line-height: 1.75;
          color: #333;
          margin: 0;
        }

        /* ── Principles ── */
        .org-principles { padding: 40px 60px 60px; }
        .org-principles__heading {
          font-size: clamp(20px, 2.5vw, 32px);
          font-weight: 700;
          margin: 0 0 32px;
        }
        .org-principles__carousel {
          position: relative;
          display: flex;
          align-items: center;
          gap: 16px;
        }
        .org-principles__slides {
          flex: 1;
          overflow: hidden;
          border-radius: 12px;
        }
        .org-principles__slide { display: none; }
        .org-principles__slide--active {
          display: flex;
        }
        .org-principles__img-wrap {
          flex: 0 0 55%;
          max-height: 420px;
          overflow: hidden;
        }
        .org-principles__img {
          width: 100%; height: 100%;
          object-fit: cover;
          display: block;
        }
        .org-principles__text {
          flex: 1;
          background: #f7f7f0;
          padding: 40px 36px;
          display: flex;
          flex-direction: column;
          justify-content: center;
        }
        .org-principles__title {
          font-size: 22px;
          font-weight: 700;
          margin: 0 0 16px;
          color: #2d5a1b;
        }
        .org-principles__desc {
          font-size: 15px;
          line-height: 1.75;
          color: #444;
          margin: 0;
        }
        .carousel-btn {
          background: #fff;
          border: 2px solid #ddd;
          border-radius: 50%;
          width: 44px; height: 44px;
          font-size: 24px;
          cursor: pointer;
          display: flex; align-items: center; justify-content: center;
          flex-shrink: 0;
          transition: background 0.2s;
        }
        .carousel-btn:hover { background: #f0f7ee; }
        .org-principles__dots {
          display: flex;
          justify-content: center;
          gap: 8px;
          margin-top: 20px;
        }
        .dot {
          width: 10px; height: 10px;
          border-radius: 50%;
          border: none;
          background: #ccc;
          cursor: pointer;
          padding: 0;
          transition: background 0.2s;
        }
        .dot--active { background: #2d5a1b; }

        /* ── Featured Tours ── */
        .featured-tour {
          display: flex;
          margin: 0 60px 60px;
          border-radius: 16px;
          overflow: hidden;
          box-shadow: 0 4px 24px rgba(0,0,0,0.1);
        }
        .featured-tour--reverse { flex-direction: row-reverse; }
        .featured-tour__media { flex: 0 0 48%; max-height: 500px; overflow: hidden; }
        .featured-tour__img { width: 100%; height: 100%; object-fit: cover; display: block; }
        .featured-tour__content {
          flex: 1;
          padding: 48px 44px;
          background: #fff;
        }
        .featured-tour__number {
          font-size: 56px;
          font-weight: 900;
          color: #e05c00;
          line-height: 1;
          margin-bottom: 8px;
        }
        .featured-tour__name {
          font-size: clamp(20px, 2vw, 28px);
          font-weight: 700;
          margin: 0 0 8px;
        }
        .featured-tour__tagline {
          font-size: 15px;
          font-weight: 700;
          color: #333;
          margin: 0 0 20px;
        }
        .featured-tour__desc {
          font-size: 14px;
          line-height: 1.75;
          color: #555;
          margin: 0 0 28px;
        }

        /* Read More Card */
        .read-more-card {
          display: flex;
          gap: 16px;
          background: #f5f5f5;
          border-radius: 10px;
          padding: 16px;
          align-items: center;
        }
        .read-more-card__img {
          width: 72px; height: 72px;
          border-radius: 8px;
          object-fit: cover;
          flex-shrink: 0;
        }
        .read-more-card__body { flex: 1; }
        .read-more-card__title { font-size: 14px; font-weight: 700; display: block; margin-bottom: 4px; }
        .read-more-card__desc { font-size: 13px; color: #555; margin: 0 0 4px; }
        .read-more-card__time { font-size: 12px; color: #888; }

        /* ── Plan Your Tour ── */
        .plan-tour { padding: 40px 60px 60px; }
        .plan-tour__heading {
          font-size: clamp(20px, 2.5vw, 32px);
          font-weight: 700;
          margin: 0 0 28px;
        }
        .plan-tour__grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 16px;
        }
        .plan-tour__card {
          position: relative;
          border-radius: 12px;
          overflow: hidden;
          cursor: pointer;
          aspect-ratio: 3/4;
        }
        .plan-tour__card:hover .plan-tour__img { transform: scale(1.05); }
        .plan-tour__img {
          width: 100%; height: 100%;
          object-fit: cover;
          display: block;
          transition: transform 0.4s ease;
        }
        .plan-tour__label {
          position: absolute;
          bottom: 0; left: 0; right: 0;
          background: linear-gradient(to top, rgba(0,0,0,0.72), transparent);
          color: #fff;
          font-size: 15px;
          font-weight: 700;
          padding: 32px 16px 16px;
        }

        /* ── Farm Snaps ── */
        .snaps { padding: 40px 60px 80px; }
        .snaps__heading {
          font-size: clamp(20px, 2.5vw, 32px);
          font-weight: 700;
          margin: 0 0 24px;
        }
        .snaps__grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          grid-template-rows: auto auto;
          gap: 12px;
        }
        .snaps__item {
          position: relative;
          border-radius: 10px;
          overflow: hidden;
          cursor: pointer;
        }
        .snaps__item--large {
          grid-row: 1 / 3;
          grid-column: 1 / 2;
        }
        .snaps__img {
          width: 100%; height: 100%;
          object-fit: cover;
          display: block;
          min-height: 200px;
        }
        .snaps__insta {
          position: absolute;
          bottom: 10px; right: 10px;
          background: rgba(0,0,0,0.5);
          border-radius: 50%;
          width: 32px; height: 32px;
          display: flex; align-items: center; justify-content: center;
          color: #fff;
        }

        /* ── Responsive ── */
        @media (max-width: 900px) {
          .org-hero__content { padding: 32px 24px; }
          .org-intro { padding: 32px 24px; }
          .org-principles { padding: 24px 16px 40px; }
          .org-principles__slide--active { flex-direction: column; }
          .featured-tour { flex-direction: column !important; margin: 0 16px 40px; }
          .featured-tour__media { max-height: 280px; }
          .featured-tour__content { padding: 28px 20px; }
          .plan-tour { padding: 24px 16px 40px; }
          .plan-tour__grid { grid-template-columns: repeat(2, 1fr); }
          .snaps { padding: 24px 16px 60px; }
          .snaps__grid { grid-template-columns: repeat(2, 1fr); }
          .snaps__item--large { grid-row: auto; grid-column: 1 / 3; }
        }
      `}</style>

      {/* Hero */}
      <HeroSection data={organicHero} />

      {/* Intro */}
      <IntroBlock data={organicIntro} />

      {/* Principles Carousel */}
      <PrinciplesSection data={organicPrinciples} />

      {/* Featured Organic Tours */}
      <section className="featured-tours-section">
        {featuredOrganicTours.map((tour, i) => (
          <FeaturedTourCard key={tour.id} tour={tour} reverse={i % 2 !== 0} />
        ))}
      </section>

      {/* Plan Your Tour */}
      <PlanYourTour data={planYourTour} />

      {/* Farm Snaps */}
      <FarmSnaps data={organicSnaps} />
    </main>
  );
};

export default OrganicSection;