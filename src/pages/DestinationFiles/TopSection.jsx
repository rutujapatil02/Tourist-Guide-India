// src/pages/DestinationFiles/TopSection.jsx
import React, { useEffect, useRef, useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { topThingsData } from './TopData';

const TopSection = () => {
  const { slug } = useParams();
  const navigate = useNavigate();
  const [activeId, setActiveId] = useState(1);
  const sectionRefs = useRef({});

  const lookupKey = slug ? slug.toLowerCase().replace(/[\s-]/g, '') : '';
  const data = topThingsData[lookupKey];

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  // Scroll spy — highlight nav item as user scrolls
  useEffect(() => {
    const handleScroll = () => {
      if (!data) return;
      let current = data.experiences[0].id;
      data.experiences.forEach((exp) => {
        const el = sectionRefs.current[exp.id];
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 160) current = exp.id;
        }
      });
      setActiveId(current);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [data]);

  if (!data) {
    return (
      <div className="w-full h-screen flex flex-col items-center justify-center bg-white font-sans">
        <h1 className="text-3xl font-bold mb-4">No experiences found.</h1>
        <button
          onClick={() => navigate(-1)}
          className="bg-black text-white px-8 py-3 rounded-full hover:bg-gray-800 transition-all"
        >
          Go Back
        </button>
      </div>
    );
  }

  const scrollToExperience = (id) => {
    const el = sectionRefs.current[id];
    if (el) {
      const offset = 100;
      const top = el.getBoundingClientRect().top + window.scrollY - offset;
      window.scrollTo({ top, behavior: 'smooth' });
    }
  };

  return (
    <div className="w-full bg-white font-sans overflow-x-hidden">
      
      {/* HERO SECTION */}
      <div className="relative h-[70vh] w-full overflow-hidden">
        <img
          src={data.heroImage}
          alt={data.destinationTitle}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

        {/* Breadcrumb navbar on top of hero image */}
        <div className="absolute top-0 left-0 right-0 z-20 px-6 md:px-12 lg:px-24 py-5 bg-gradient-to-b from-black/60 to-transparent">
          <div className="flex items-center gap-2 text-white/80 text-sm font-medium">
            <Link to="/" className="hover:text-white transition-colors">Home</Link>
            <span className="text-white/40">/</span>
            <Link to="/destinations" className="hover:text-white transition-colors">Destinations</Link>
            <span className="text-white/40">/</span>
            <span className="text-white">{data.destinationTitle}</span>
          </div>
        </div>

        {/* Hero text at bottom of hero */}
        <div className="absolute bottom-12 left-0 right-0 px-8 md:px-16 lg:px-24">
          <p className="text-white/70 text-sm uppercase tracking-widest font-medium mb-3">
            {data.destinationLocation}
          </p>
          <h1 className="text-white text-4xl md:text-6xl lg:text-7xl font-serif font-medium leading-none mb-6">
            Must-do experiences<br />in {data.destinationTitle}
          </h1>
          <p className="text-white/80 text-lg max-w-2xl font-light leading-relaxed">
            {data.intro}
          </p>
        </div>
      </div>

      {/* Main layout: sticky sidebar + content */}
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 lg:px-16 py-16 flex gap-16 relative">
        
        {/* Sticky sidebar navigation (desktop only) */}
        <aside className="hidden lg:block w-64 flex-shrink-0">
          <div className="sticky top-24">
            <p className="text-xs uppercase tracking-widest text-[#999] font-bold mb-5">
              {data.experiences.length} experiences
            </p>
            <nav className="space-y-1">
              {data.experiences.map((exp) => (
                <button
                  key={exp.id}
                  onClick={() => scrollToExperience(exp.id)}
                  className={`w-full text-left px-4 py-3 rounded-xl text-sm transition-all duration-200 flex items-start gap-3 group ${
                    activeId === exp.id
                      ? 'bg-[#f4f4f4] text-[#1a1a1a] font-semibold'
                      : 'text-[#888] hover:text-[#1a1a1a] hover:bg-[#f9f9f9]'
                  }`}
                >
                  <span className={`mt-0.5 flex-shrink-0 w-5 h-5 rounded-full text-[10px] font-bold flex items-center justify-center transition-colors ${
                    activeId === exp.id ? 'bg-black text-white' : 'bg-[#e8e8e8] text-[#999] group-hover:bg-[#e0e0e0]'
                  }`}>
                    {exp.id}
                  </span>
                  <span className="leading-tight">{exp.title}</span>
                </button>
              ))}
            </nav>

            {/* Back button */}
            <div className="mt-10 pt-8 border-t border-gray-100">
              <button
                onClick={() => navigate(-1)}
                className="text-sm font-bold uppercase tracking-widest text-black border-b-2 border-black pb-1 hover:text-gray-500 hover:border-gray-500 transition-all"
              >
                ← Back to {data.destinationTitle}
              </button>
            </div>
          </div>
        </aside>

        {/* Main content area */}
        <main className="flex-1 min-w-0">
          
          {/* Mobile experience count */}
          <p className="lg:hidden text-xs uppercase tracking-widest text-[#999] font-bold mb-10">
            {data.experiences.length} must-do experiences
          </p>

          <div className="space-y-0">
            {data.experiences.map((exp, index) => (
              <article
                key={exp.id}
                ref={(el) => (sectionRefs.current[exp.id] = el)}
                className={`pb-20 ${index !== data.experiences.length - 1 ? 'border-b border-gray-100 mb-20' : ''}`}
              >
                {/* Experience number + title */}
                <div className="flex items-start gap-4 mb-8">
                  <span className="flex-shrink-0 w-12 h-12 rounded-full bg-black text-white text-lg font-bold flex items-center justify-center mt-1">
                    {exp.id}
                  </span>
                  <div>
                    <h2 className="text-3xl md:text-4xl font-serif font-medium text-[#1a1a1a] leading-tight">
                      {exp.title}
                    </h2>
                    <p className="text-[#888] text-base mt-1 font-light italic">{exp.subtitle}</p>
                  </div>
                </div>

                {/* Main image for this experience */}
                <div className="relative w-full h-[420px] md:h-[540px] overflow-hidden rounded-2xl mb-8 shadow-md">
                  <img
                    src={exp.image}
                    alt={exp.title}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                  />
                </div>

                {/* Metadata row: where, duration, best time */}
                <div className="flex flex-wrap gap-4 mb-8">
                  <div className="flex items-start gap-2 bg-[#f7f7f7] rounded-xl px-4 py-3 flex-1 min-w-[200px]">
                    <svg className="mt-0.5 flex-shrink-0 text-[#999]" width="14" height="14" viewBox="0 0 14 14" fill="none">
                      <path d="M7 1C4.79 1 3 2.79 3 5C3 8.5 7 13 7 13C7 13 11 8.5 11 5C11 2.79 9.21 1 7 1ZM7 6.5C6.17 6.5 5.5 5.83 5.5 5C5.5 4.17 6.17 3.5 7 3.5C7.83 3.5 8.5 4.17 8.5 5C8.5 5.83 7.83 6.5 7 6.5Z" fill="currentColor"/>
                    </svg>
                    <div>
                      <p className="text-[10px] uppercase tracking-widest text-[#bbb] font-bold mb-0.5">Where</p>
                      <p className="text-[#444] text-sm font-medium leading-snug">{exp.where}</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-2 bg-[#f7f7f7] rounded-xl px-4 py-3">
                    <svg className="mt-0.5 flex-shrink-0 text-[#999]" width="14" height="14" viewBox="0 0 14 14" fill="none">
                      <circle cx="7" cy="7" r="5.5" stroke="currentColor" strokeWidth="1.2"/>
                      <path d="M7 4.5V7L8.5 8.5" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round"/>
                    </svg>
                    <div>
                      <p className="text-[10px] uppercase tracking-widest text-[#bbb] font-bold mb-0.5">Duration</p>
                      <p className="text-[#444] text-sm font-medium">{exp.duration}</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-2 bg-[#f7f7f7] rounded-xl px-4 py-3">
                    <svg className="mt-0.5 flex-shrink-0 text-[#999]" width="14" height="14" viewBox="0 0 14 14" fill="none">
                      <path d="M7 1.5L8.5 5H12L9 7.5L10 11L7 9L4 11L5 7.5L2 5H5.5L7 1.5Z" stroke="currentColor" strokeWidth="1.2" strokeLinejoin="round"/>
                    </svg>
                    <div>
                      <p className="text-[10px] uppercase tracking-widest text-[#bbb] font-bold mb-0.5">Best time</p>
                      <p className="text-[#444] text-sm font-medium">{exp.bestTime}</p>
                    </div>
                  </div>
                </div>

                {/* Description */}
                <p className="text-[#4d4d4d] text-lg leading-relaxed font-light mb-8 max-w-3xl">
                  {exp.description}
                </p>

                {/* Insider tips box */}
                <div className="bg-[#fffbf0] border border-[#f0e8cc] rounded-2xl px-6 py-5 max-w-3xl">
                  <div className="flex items-start gap-3">
                    <span className="text-xl mt-0.5">💡</span>
                    <div>
                      <p className="text-[10px] uppercase tracking-widest text-[#c9a84c] font-bold mb-2">Insider tip</p>
                      <p className="text-[#555] text-sm leading-relaxed">{exp.tips}</p>
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>

          {/* Bottom CTA */}
          <div className="pt-12 border-t border-gray-100 flex flex-col sm:flex-row gap-4 items-start sm:items-center justify-between">
            <div>
              <h3 className="text-2xl font-serif font-medium text-[#1a1a1a]">Ready to go?</h3>
              <p className="text-[#888] text-sm mt-1 font-light">Plan your full trip to {data.destinationTitle}.</p>
            </div>
            <button
              onClick={() => navigate(-1)}
              className="bg-black text-white px-8 py-4 rounded-full font-bold text-xs uppercase tracking-widest hover:bg-gray-800 transition-all shadow-lg"
            >
              Back to {data.destinationTitle} Guide
            </button>
          </div>
        </main>
      </div>
    </div>
  );
};

export default TopSection;