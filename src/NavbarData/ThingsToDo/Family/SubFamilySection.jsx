import React, { useState } from "react";
import { subFamilyData } from "../../../Data/ThingsToDo/Family/SubFamilyData";

const SubFamilySection = ({ category, onBack }) => {
  const categoryData = subFamilyData[category];
  const items = categoryData?.items || [];

  const [currentImages, setCurrentImages] = useState(
    items.reduce((acc, item) => ({ ...acc, [item.id]: 0 }), {})
  );

  const handlePrev = (id, total) => {
    setCurrentImages((prev) => ({
      ...prev,
      [id]: (prev[id] - 1 + total) % total,
    }));
  };

  const handleNext = (id, total) => {
    setCurrentImages((prev) => ({
      ...prev,
      [id]: (prev[id] + 1) % total,
    }));
  };

  return (
    <div className="w-full">

      {/* ── Hero Section ── */}
      <div className="relative w-full">

        {/* Hero Image */}
        <div className="relative w-full h-[70vh] min-h-[400px] overflow-hidden">
          <img
            src={categoryData?.heroImage}
            alt={categoryData?.heroTitle}
            className="w-full h-full object-cover"
          />
          {/* Dark gradient overlay — stronger at bottom so title is readable */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

          {/* ── Breadcrumb — top left over hero ── */}
          <div className="absolute top-0 left-0 right-0 bg-teal-500/80 backdrop-blur-sm px-6 py-3">
            <nav className="flex items-center gap-1 text-sm text-white/90 flex-wrap">
              <button
                onClick={onBack}
                className="hover:text-white hover:underline transition-colors font-medium"
              >
                Home
              </button>
              <span className="text-white/60 mx-1">›</span>
              <button
                onClick={onBack}
                className="hover:text-white hover:underline transition-colors"
              >
                Things to do
              </button>
              <span className="text-white/60 mx-1">›</span>
              <button
                onClick={onBack}
                className="hover:text-white hover:underline transition-colors"
              >
                Family
              </button>
              <span className="text-white/60 mx-1">›</span>
              <span className="text-white font-medium">{categoryData?.heroTitle}</span>
            </nav>
          </div>

          {/* Hero Title — bottom left */}
          <div className="absolute bottom-0 left-0 right-0 px-8 pb-8">
            <h1 className="text-white text-4xl md:text-5xl lg:text-6xl font-bold leading-tight drop-shadow-lg max-w-3xl">
              {categoryData?.heroTitle}
            </h1>
          </div>
        </div>

        {/* ── Overlapping Content Card ── */}
        <div className="relative z-10 -mt-12 mx-4 md:mx-8 lg:mx-16 bg-white rounded-2xl shadow-2xl px-6 md:px-12 pt-10 pb-16">

          {/* Items List */}
          <div className="flex flex-col gap-20">
            {items.map((item, index) => (
              <div
                key={item.id}
                className={`flex flex-col lg:flex-row gap-10 items-start ${
                  index % 2 !== 0 ? "lg:flex-row-reverse" : ""
                }`}
              >
                {/* Image Slider */}
                <div className="relative w-full lg:w-1/2 aspect-[4/3] rounded-2xl overflow-hidden bg-gray-100 flex-shrink-0 shadow-lg">
                  <img
                    src={item.images[currentImages[item.id]]}
                    alt={item.title}
                    className="w-full h-full object-cover transition-opacity duration-500"
                  />

                  {/* Prev */}
                  <button
                    onClick={() => handlePrev(item.id, item.images.length)}
                    className="absolute left-3 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white rounded-full p-2 shadow-md transition-all"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                    </svg>
                  </button>

                  {/* Next */}
                  <button
                    onClick={() => handleNext(item.id, item.images.length)}
                    className="absolute right-3 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white rounded-full p-2 shadow-md transition-all"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </button>

                  {/* Dots */}
                  <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-1.5">
                    {item.images.map((_, i) => (
                      <button
                        key={i}
                        onClick={() =>
                          setCurrentImages((prev) => ({ ...prev, [item.id]: i }))
                        }
                        className={`h-1.5 rounded-full transition-all duration-300 ${
                          currentImages[item.id] === i
                            ? "w-6 bg-white"
                            : "w-1.5 bg-white/50"
                        }`}
                      />
                    ))}
                  </div>
                </div>

                {/* Text Content */}
                <div className="flex flex-col justify-center gap-4 lg:w-1/2">
                  {/* Number + Title */}
                  <div className="flex items-start gap-3">
                    <span className="text-5xl font-black text-orange-500 leading-none">
                      {index + 1}
                    </span>
                    <h3 className="text-2xl font-bold text-gray-900 leading-tight">
                      {item.title}
                    </h3>
                  </div>

                  {/* Tag */}
                  <p className="text-sm font-semibold text-gray-700">
                    <span className="font-bold">Great for:</span>{" "}
                    {item.tag.replace("Great for: ", "")}
                  </p>

                  {/* Description */}
                  <p className="text-gray-600 leading-relaxed">{item.description}</p>

                  {/* Read More Card */}
                  <div className="mt-2 flex items-center gap-4 bg-white border border-gray-200 rounded-xl p-4 shadow-sm hover:shadow-md transition-shadow cursor-pointer group">
                    <img
                      src={item.readMoreCard.image}
                      alt={item.readMoreCard.title}
                      className="w-16 h-16 rounded-lg object-cover flex-shrink-0"
                    />
                    <div className="flex flex-col gap-1 min-w-0">
                      <p className="font-semibold text-gray-900 text-sm leading-snug group-hover:text-orange-500 transition-colors line-clamp-2">
                        {item.readMoreCard.title}
                      </p>
                      <p className="text-xs text-gray-500 line-clamp-2">
                        {item.readMoreCard.snippet}
                      </p>
                      <p className="text-xs text-gray-400 mt-0.5">
                        Read time • {item.readMoreCard.readTime}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SubFamilySection;