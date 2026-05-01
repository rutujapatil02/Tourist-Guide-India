import React, { useState, useRef } from "react";
import { subBackpackingData } from "../../../Data/ThingsToDo/Bagpacking/SubBagpackingData";

const SubBagpackingSection = ({ category, onBack }) => {
  const categoryData = subBackpackingData[category];
  const tipsScrollRef = useRef(null);
  const thingsScrollRef = useRef(null);

  const scroll = (ref, dir) => {
    if (ref.current) {
      ref.current.scrollBy({ left: dir * 340, behavior: "smooth" });
    }
  };

  if (!categoryData) return null;

  return (
    <div className="w-full">

      {/* ── Hero ── */}
      <div className="relative w-full h-[70vh] min-h-[400px] overflow-hidden">
        <img
          src={categoryData.heroImage}
          alt={categoryData.heroTitle}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />

        {/* Breadcrumb bar */}
        <div className="absolute top-0 left-0 right-0 bg-teal-500/85 backdrop-blur-sm px-6 py-3">
          <nav className="flex items-center gap-1 text-sm text-white/90 flex-wrap">
            <button onClick={onBack} className="hover:text-white hover:underline font-medium transition-colors">
              Home
            </button>
            <span className="text-white/60 mx-1">›</span>
            <button onClick={onBack} className="hover:text-white hover:underline transition-colors">
              Things to do
            </button>
            <span className="text-white/60 mx-1">›</span>
            <button onClick={onBack} className="hover:text-white hover:underline transition-colors">
              Backpacking
            </button>
            <span className="text-white/60 mx-1">›</span>
            <span className="text-white font-medium">{categoryData.heroTitle}</span>
          </nav>
        </div>
      </div>

      {/* ── Overlapping White Content Card ── */}
      <div className="relative z-10 -mt-12 mx-4 md:mx-8 lg:mx-16 bg-white rounded-2xl shadow-2xl overflow-hidden">

        {/* ── Title + Intro ── */}
        <div className="text-center px-6 md:px-20 pt-14 pb-10">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-5 leading-tight">
            {categoryData.heroTitle}
          </h1>
          <p className="text-gray-500 text-base md:text-lg max-w-2xl mx-auto mb-6 leading-relaxed">
            {categoryData.subtitle}
          </p>

          {/* Share icons */}
          <div className="flex justify-center gap-3 mb-8">
            <button className="w-10 h-10 rounded-full bg-blue-600 flex items-center justify-center text-white hover:bg-blue-700 transition-colors">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />
              </svg>
            </button>
            <button className="w-10 h-10 rounded-full bg-green-500 flex items-center justify-center text-white hover:bg-green-600 transition-colors">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
                <path d="M11.5 2C6.262 2 2 6.262 2 11.5c0 1.985.59 3.83 1.604 5.371L2 22l5.26-1.584A9.455 9.455 0 0011.5 21C16.738 21 21 16.738 21 11.5S16.738 2 11.5 2z" />
              </svg>
            </button>
            <button className="w-10 h-10 rounded-full bg-gray-700 flex items-center justify-center text-white hover:bg-gray-800 transition-colors">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
              </svg>
            </button>
          </div>

          <p className="text-gray-600 text-base leading-relaxed max-w-3xl mx-auto">
            {categoryData.intro}
          </p>
        </div>

        <div className="px-6 md:px-12 pb-16 flex flex-col gap-14">

          {/* ── Travel Tips Horizontal Scroll ── */}
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              Backpacker travel tips
            </h2>
            <div className="relative">
              {/* Scroll Left */}
              <button
                onClick={() => scroll(tipsScrollRef, -1)}
                className="hidden md:flex absolute -left-4 top-1/2 -translate-y-1/2 z-10 w-9 h-9 bg-white rounded-full shadow-lg items-center justify-center hover:bg-gray-50 transition-all"
              >
                <svg className="h-4 w-4 text-gray-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>

              <div
                ref={tipsScrollRef}
                className="flex gap-5 overflow-x-auto scrollbar-hide pb-2"
                style={{ scrollbarWidth: "none" }}
              >
                {categoryData.travelTips.map((tip) => (
                  <div
                    key={tip.id}
                    className="flex-shrink-0 w-72 rounded-2xl overflow-hidden cursor-pointer group relative"
                  >
                    <div className="relative h-52 overflow-hidden">
                      <img
                        src={tip.image}
                        alt={tip.title}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                      <div className="absolute bottom-4 left-4 right-4">
                        <p className="text-white font-semibold text-base leading-snug">
                          {tip.title}
                        </p>
                        <p className="text-white/70 text-xs mt-1">Read time • {tip.readTime}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Scroll Right */}
              <button
                onClick={() => scroll(tipsScrollRef, 1)}
                className="hidden md:flex absolute -right-4 top-1/2 -translate-y-1/2 z-10 w-9 h-9 bg-white rounded-full shadow-lg items-center justify-center hover:bg-gray-50 transition-all"
              >
                <svg className="h-4 w-4 text-gray-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>
          </div>

          {/* ── Explore Incredible Things to Do Scroll ── */}
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              Explore incredible things to do
            </h2>
            <div className="relative">
              <button
                onClick={() => scroll(thingsScrollRef, -1)}
                className="hidden md:flex absolute -left-4 top-1/2 -translate-y-1/2 z-10 w-9 h-9 bg-white rounded-full shadow-lg items-center justify-center hover:bg-gray-50 transition-all"
              >
                <svg className="h-4 w-4 text-gray-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>

              <div
                ref={thingsScrollRef}
                className="flex gap-5 overflow-x-auto scrollbar-hide pb-2"
                style={{ scrollbarWidth: "none" }}
              >
                {categoryData.thingsToDo.map((thing) => (
                  <div
                    key={thing.id}
                    className="flex-shrink-0 w-72 rounded-2xl overflow-hidden cursor-pointer group relative"
                  >
                    <div className="relative h-52 overflow-hidden">
                      <img
                        src={thing.image}
                        alt={thing.title}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                      <div className="absolute bottom-4 left-4 right-4">
                        <p className="text-white font-semibold text-base leading-snug">
                          {thing.title}
                        </p>
                        <p className="text-white/70 text-xs mt-1">{thing.label}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <button
                onClick={() => scroll(thingsScrollRef, 1)}
                className="hidden md:flex absolute -right-4 top-1/2 -translate-y-1/2 z-10 w-9 h-9 bg-white rounded-full shadow-lg items-center justify-center hover:bg-gray-50 transition-all"
              >
                <svg className="h-4 w-4 text-gray-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>
          </div>

          {/* ── Popular Destinations 3-col grid ── */}
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              Popular backpacker destinations
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
              {categoryData.popularDestinations.map((dest) => (
                <div key={dest.id} className="group cursor-pointer rounded-2xl overflow-hidden">
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <img
                      src={dest.image}
                      alt={dest.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                  <p className="mt-3 font-semibold text-gray-900 text-base group-hover:text-orange-500 transition-colors">
                    {dest.title}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* ── Travellers' Stories Instagram-style grid ── */}
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              Travellers' stories
            </h2>
            <div className="grid grid-cols-3 gap-3">
              {/* Large left image spanning 2 rows */}
              <div className="col-span-1 row-span-2 rounded-2xl overflow-hidden" style={{ gridRow: "span 2" }}>
                <img
                  src={categoryData.stories[0]}
                  alt="traveller story"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500 cursor-pointer"
                  style={{ minHeight: "320px" }}
                />
              </div>
              {/* 4 smaller images on right */}
              {categoryData.stories.slice(1).map((src, i) => (
                <div key={i} className="rounded-2xl overflow-hidden aspect-square relative">
                  <img
                    src={src}
                    alt={`story ${i + 2}`}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500 cursor-pointer"
                  />
                  {/* Instagram icon */}
                  <div className="absolute bottom-2 right-2 bg-black/40 rounded-full p-1">
                    <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                    </svg>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default SubBagpackingSection;