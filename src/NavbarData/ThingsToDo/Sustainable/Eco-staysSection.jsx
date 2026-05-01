// src/NavbarData/ThingsToDo/Sustainable/Eco-staysSection.jsx

import React, { useState } from "react";
import {
  ecoStaysHero,
  ecoStaysIntro,
  ecoStaysPrinciples,
  featuredEcoStays,
  planYourStay,
  sustainableSnaps,
} from "../../../Data/ThingsToDo/Sustainable/Eco-staysData";

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
  <section className="eco-hero">
    <div className="eco-hero__overlay" />
    <div className="eco-hero__content">
      <Breadcrumb items={data.breadcrumb} />
      <h1 className="eco-hero__title">{data.title}</h1>
      <p className="eco-hero__subtitle">{data.subtitle}</p>
      <div className="eco-hero__share">
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
  <section className="eco-intro">
    <div className="eco-intro__card">
      <h2 className="eco-intro__heading">{data.heading}</h2>
      <p className="eco-intro__body">{data.body}</p>
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
    <section className="eco-principles">
      <h2 className="eco-principles__heading">{data.heading}</h2>
      <div className="eco-principles__carousel">
        <button className="carousel-btn carousel-btn--prev" onClick={prev} aria-label="Previous">
          &#8249;
        </button>

        <div className="eco-principles__slides">
          {data.items.map((item, i) => (
            <div
              key={item.id}
              className={`eco-principles__slide ${i === active ? "eco-principles__slide--active" : ""}`}
            >
              <div className="eco-principles__img-wrap">
                <img src={item.image} alt={item.alt} className="eco-principles__img" />
              </div>
              <div className="eco-principles__text">
                <h3 className="eco-principles__title">{item.title}</h3>
                <p className="eco-principles__desc">{item.description}</p>
              </div>
            </div>
          ))}
        </div>

        <button className="carousel-btn carousel-btn--next" onClick={next} aria-label="Next">
          &#8250;
        </button>
      </div>

      {/* Dots */}
      <div className="eco-principles__dots">
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
   Featured Stay Card
───────────────────────────────────────────── */
const FeaturedStayCard = ({ stay, reverse }) => (
  <article className={`featured-stay ${reverse ? "featured-stay--reverse" : ""}`}>
    <div className="featured-stay__media">
      <img src={stay.image} alt={stay.alt} className="featured-stay__img" />
    </div>
    <div className="featured-stay__content">
      <div className="featured-stay__number">{stay.id}</div>
      <h2 className="featured-stay__name">{stay.name}</h2>
      <h3 className="featured-stay__tagline">{stay.tagline}</h3>
      <p className="featured-stay__desc">{stay.description}</p>

      {/* Read More card */}
      <div className="read-more-card">
        <img
          src={stay.readMore.image}
          alt={stay.readMore.title}
          className="read-more-card__img"
        />
        <div className="read-more-card__body">
          <strong className="read-more-card__title">{stay.readMore.title}</strong>
          <p className="read-more-card__desc">{stay.readMore.description}</p>
          <span className="read-more-card__time">
            Read time &bull; {stay.readMore.readTime}
          </span>
        </div>
      </div>
    </div>
  </article>
);

/* ─────────────────────────────────────────────
   Plan Your Stay Section
───────────────────────────────────────────── */
const PlanYourStay = ({ data }) => (
  <section className="plan-stay">
    <h2 className="plan-stay__heading">{data.heading}</h2>
    <div className="plan-stay__grid">
      {data.cards.map((card, i) => (
        <div key={i} className="plan-stay__card">
          <img src={card.image} alt={card.alt} className="plan-stay__img" />
          <span className="plan-stay__label">{card.title}</span>
        </div>
      ))}
    </div>
  </section>
);

/* ─────────────────────────────────────────────
   Sustainable Snaps
───────────────────────────────────────────── */
const SustainableSnaps = ({ data }) => (
  <section className="snaps">
    <h2 className="snaps__heading">{data.heading}</h2>
    <div className="snaps__grid">
      {data.images.map((img, i) => (
        <div key={i} className={`snaps__item snaps__item--${i === 0 ? "large" : "small"}`}>
          <img src={img.src} alt={img.alt} className="snaps__img" />
          <div className="snaps__insta">
            {/* Instagram icon */}
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
const EcoStaysSection = () => {
  return (
    <main className="eco-stays-page">
      <style>{`
        /* ── Reset & base ── */
        .eco-stays-page {
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
        .eco-hero {
          position: relative;
          min-height: 480px;
          background: url('https://images.unsplash.com/photo-1596402184320-417e7178b2cd?w=1400&q=80') center/cover no-repeat;
          display: flex;
          align-items: flex-end;
          padding: 0;
        }
        .eco-hero__overlay {
          position: absolute; inset: 0;
          background: linear-gradient(to top, rgba(0,0,0,0.72) 40%, rgba(0,0,0,0.15) 100%);
        }
        .eco-hero__content {
          position: relative; z-index: 2;
          padding: 48px 60px;
          max-width: 760px;
          color: #fff;
        }
        .eco-hero__title {
          font-size: clamp(28px, 4vw, 52px);
          font-weight: 700;
          line-height: 1.15;
          margin: 0 0 16px;
        }
        .eco-hero__subtitle {
          font-size: clamp(14px, 1.5vw, 18px);
          line-height: 1.6;
          margin: 0 0 24px;
          opacity: 0.95;
        }
        .eco-hero__share { display: flex; gap: 12px; }
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
        .eco-intro {
          padding: 60px 60px 40px;
          display: flex;
          gap: 48px;
          align-items: flex-start;
        }
        .eco-intro__card {
          background: #e8f4f1;
          border-radius: 12px;
          padding: 40px 48px;
          max-width: 560px;
        }
        .eco-intro__heading {
          font-size: clamp(18px, 2vw, 24px);
          font-weight: 700;
          margin: 0 0 16px;
          color: #1a5c43;
        }
        .eco-intro__body {
          font-size: 15px;
          line-height: 1.75;
          color: #333;
          margin: 0;
        }

        /* ── Principles ── */
        .eco-principles { padding: 40px 60px 60px; }
        .eco-principles__heading {
          font-size: clamp(20px, 2.5vw, 32px);
          font-weight: 700;
          margin: 0 0 32px;
        }
        .eco-principles__carousel {
          position: relative;
          display: flex;
          align-items: center;
          gap: 16px;
        }
        .eco-principles__slides {
          flex: 1;
          overflow: hidden;
          border-radius: 12px;
        }
        .eco-principles__slide {
          display: none;
          gap: 0;
        }
        .eco-principles__slide--active {
          display: flex;
        }
        @media (max-width: 700px) {
          .eco-principles__slide--active { flex-direction: column; }
        }
        .eco-principles__img-wrap {
          flex: 0 0 55%;
          max-height: 420px;
          overflow: hidden;
        }
        .eco-principles__img {
          width: 100%; height: 100%;
          object-fit: cover;
          display: block;
        }
        .eco-principles__text {
          flex: 1;
          background: #f7f7f7;
          padding: 40px 36px;
          display: flex;
          flex-direction: column;
          justify-content: center;
        }
        .eco-principles__title {
          font-size: 22px;
          font-weight: 700;
          margin: 0 0 16px;
          color: #1a5c43;
        }
        .eco-principles__desc {
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
          z-index: 2;
        }
        .carousel-btn:hover { background: #e8f4f1; }
        .eco-principles__dots {
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
          transition: background 0.2s;
          padding: 0;
        }
        .dot--active { background: #1a5c43; }

        /* ── Featured Stays ── */
        .featured-stay {
          display: flex;
          gap: 0;
          margin: 0 60px 60px;
          border-radius: 16px;
          overflow: hidden;
          box-shadow: 0 4px 24px rgba(0,0,0,0.1);
        }
        .featured-stay--reverse { flex-direction: row-reverse; }
        .featured-stay__media { flex: 0 0 48%; max-height: 500px; overflow: hidden; }
        .featured-stay__img { width: 100%; height: 100%; object-fit: cover; display: block; }
        .featured-stay__content {
          flex: 1;
          padding: 48px 44px;
          background: #fff;
          position: relative;
        }
        .featured-stay__number {
          font-size: 56px;
          font-weight: 900;
          color: #e05c00;
          line-height: 1;
          margin-bottom: 8px;
        }
        .featured-stay__name {
          font-size: clamp(20px, 2vw, 28px);
          font-weight: 700;
          margin: 0 0 8px;
        }
        .featured-stay__tagline {
          font-size: 15px;
          font-weight: 700;
          color: #333;
          margin: 0 0 20px;
        }
        .featured-stay__desc {
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

        /* ── Plan Your Stay ── */
        .plan-stay { padding: 40px 60px 60px; }
        .plan-stay__heading {
          font-size: clamp(20px, 2.5vw, 32px);
          font-weight: 700;
          margin: 0 0 28px;
        }
        .plan-stay__grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 16px;
        }
        @media (max-width: 900px) {
          .plan-stay__grid { grid-template-columns: repeat(2, 1fr); }
        }
        .plan-stay__card {
          position: relative;
          border-radius: 12px;
          overflow: hidden;
          cursor: pointer;
          aspect-ratio: 3/4;
        }
        .plan-stay__card:hover .plan-stay__img { transform: scale(1.05); }
        .plan-stay__img {
          width: 100%; height: 100%;
          object-fit: cover;
          display: block;
          transition: transform 0.4s ease;
        }
        .plan-stay__label {
          position: absolute;
          bottom: 0; left: 0; right: 0;
          background: linear-gradient(to top, rgba(0,0,0,0.72), transparent);
          color: #fff;
          font-size: 15px;
          font-weight: 700;
          padding: 32px 16px 16px;
        }

        /* ── Sustainable Snaps ── */
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
          .eco-hero__content { padding: 32px 24px; }
          .eco-intro { padding: 32px 24px; flex-direction: column; }
          .eco-principles { padding: 24px 16px 40px; }
          .featured-stay { flex-direction: column !important; margin: 0 16px 40px; }
          .featured-stay__media { max-height: 280px; }
          .featured-stay__content { padding: 28px 20px; }
          .plan-stay { padding: 24px 16px 40px; }
          .snaps { padding: 24px 16px 60px; }
          .snaps__grid { grid-template-columns: repeat(2, 1fr); }
          .snaps__item--large { grid-row: auto; grid-column: 1 / 3; }
        }
      `}</style>

      {/* Hero */}
      <HeroSection data={ecoStaysHero} />

      {/* Intro */}
      <IntroBlock data={ecoStaysIntro} />

      {/* Principles */}
      <PrinciplesSection data={ecoStaysPrinciples} />

      {/* Featured Eco-Stays */}
      <section className="featured-stays-section">
        {featuredEcoStays.map((stay, i) => (
          <FeaturedStayCard key={stay.id} stay={stay} reverse={i % 2 !== 0} />
        ))}
      </section>

      {/* Plan Your Stay */}
      <PlanYourStay data={planYourStay} />

      {/* Sustainable Snaps */}
      <SustainableSnaps data={sustainableSnaps} />
    </main>
  );
};

export default EcoStaysSection;