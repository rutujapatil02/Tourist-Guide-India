// TripDetailPage.jsx
// Renders the full detail view for a specific trip itinerary.
// Route: /destination/:slug/trip/:tripSlug

import React, { useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { getTripBySlug } from "./TripData"; // adjust path as needed
import DestinationHeader from "../../components/Header/DestinationHeader"; // adjust path as needed
import { FaArrowLeft, FaClock, FaCalendarAlt, FaUsers, FaMountain } from "react-icons/fa";

const TripDetailPage = () => {
  const { slug, tripSlug } = useParams();
  const navigate = useNavigate();

  // Normalize slug to match TripsData keys (e.g. "tajmahal", "goa", "kerala")
  const lookupKey = slug ? slug.toLowerCase().replace(/[\s-]/g, "") : "";
  const trip = getTripBySlug(lookupKey, tripSlug);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [tripSlug]);

  if (!trip) {
    return (
      <div className="w-full h-screen flex flex-col items-center justify-center bg-white font-sans">
        <h1 className="text-3xl font-bold mb-4">Trip not found.</h1>
        <button
          onClick={() => navigate(`/destination/${slug}`)}
          className="bg-black text-white px-8 py-3 rounded-full hover:bg-gray-800 transition-all"
        >
          Back to Destination
        </button>
      </div>
    );
  }

  return (
    <div className="w-full bg-white font-sans overflow-x-hidden">
      {/* Header */}
      <DestinationHeader name={trip.title} showActions={false} />

      {/* Hero Image */}
      <div className="relative h-[100vh] w-full overflow-hidden bg-black">
        <img
          src={trip.image || "https://via.placeholder.com/1400x800"}
          alt={trip.title}
          className="w-full h-full object-cover opacity-80"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />

        {/* Back Button */}
        <button
          onClick={() => navigate(`/destination/${slug}`)}
          className="absolute top-28 left-8 md:left-16 z-30 flex items-center gap-2 text-white bg-white/10 backdrop-blur-md px-5 py-3 rounded-full border border-white/20 hover:bg-white/25 transition-all text-sm font-semibold"
        >
          <FaArrowLeft size={12} />
          Back
        </button>

        {/* Hero Title */}
        <div className="absolute bottom-10 left-8 md:left-16 right-8 md:right-16 z-20">
          <h1 className="text-white text-4xl md:text-6xl font-serif font-medium leading-tight drop-shadow-lg">
            {trip.title}
          </h1>
        </div>
      </div>

      {/* Content */}
      <div className="w-full flex justify-center">
        <div className="w-full max-w-6xl mx-4 md:mx-6 lg:mx-8 py-12 md:py-16">

          {/* Quick Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-14 p-6 md:p-8 bg-[#f8f8f8] rounded-2xl">
            <div className="flex items-center gap-3">
              <FaClock className="text-[#1a1a1a] text-xl flex-shrink-0" />
              <div>
                <p className="text-[10px] uppercase tracking-widest text-[#999] font-bold">Duration</p>
                <p className="text-[#1a1a1a] font-semibold text-sm mt-0.5">{trip.duration}</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <FaCalendarAlt className="text-[#1a1a1a] text-xl flex-shrink-0" />
              <div>
                <p className="text-[10px] uppercase tracking-widest text-[#999] font-bold">Best Time</p>
                <p className="text-[#1a1a1a] font-semibold text-sm mt-0.5">{trip.bestTime}</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <FaUsers className="text-[#1a1a1a] text-xl flex-shrink-0" />
              <div>
                <p className="text-[10px] uppercase tracking-widest text-[#999] font-bold">Group Size</p>
                <p className="text-[#1a1a1a] font-semibold text-sm mt-0.5">{trip.groupSize}</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <FaMountain className="text-[#1a1a1a] text-xl flex-shrink-0" />
              <div>
                <p className="text-[10px] uppercase tracking-widest text-[#999] font-bold">Difficulty</p>
                <p className="text-[#1a1a1a] font-semibold text-sm mt-0.5">{trip.difficulty}</p>
              </div>
            </div>
          </div>

          {/* Overview & Highlights */}
          <div className="flex flex-col lg:flex-row gap-12 mb-16">
            <div className="flex-1">
              <h2 className="text-3xl font-serif font-medium text-[#1a1a1a] mb-5">Overview</h2>
              <p className="text-[#4d4d4d] text-lg leading-relaxed font-light">{trip.overview}</p>
            </div>
            <div className="w-full lg:w-[340px]">
              <h2 className="text-2xl font-serif font-medium text-[#1a1a1a] mb-5">Highlights</h2>
              <ul className="space-y-3">
                {trip.highlights?.map((hl, i) => (
                  <li key={i} className="flex items-start gap-3 text-[#4d4d4d]">
                    <span className="mt-1.5 w-2 h-2 rounded-full bg-black flex-shrink-0" />
                    <span className="text-base font-light">{hl}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Day-by-Day Itinerary */}
          <div className="border-t border-gray-100 pt-14 mb-16">
            <h2 className="text-3xl font-serif font-medium text-[#1a1a1a] mb-12">
              Day-by-Day Itinerary
            </h2>
            <div className="space-y-10">
              {trip.itinerary?.map((day, idx) => (
                <div key={idx} className="flex flex-col md:flex-row gap-6 md:gap-10">
                  {/* Day Image */}
                  <div className="w-full md:w-[300px] flex-shrink-0">
                    <div className="relative h-52 md:h-64 w-full overflow-hidden rounded-2xl shadow-sm">
                      <img
                        src={day.image || "https://via.placeholder.com/400x300"}
                        alt={day.title}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute top-4 left-4 bg-black text-white text-xs font-bold uppercase tracking-widest px-3 py-1.5 rounded-full">
                        Day {day.day}
                      </div>
                    </div>
                  </div>

                  {/* Day Content */}
                  <div className="flex-1 pt-1">
                    <h3 className="text-xl font-bold text-[#1a1a1a] mb-4">{day.title}</h3>
                    <ul className="space-y-2">
                      {day.activities?.map((activity, aIdx) => (
                        <li key={aIdx} className="flex items-start gap-3 text-[#555]">
                          <span className="mt-2 w-1.5 h-1.5 rounded-full bg-gray-400 flex-shrink-0" />
                          <span className="text-[15px] font-light leading-relaxed">{activity}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Tips Section */}
          {trip.tips && (
            <div className="border-t border-gray-100 pt-12 pb-8">
              <div className="bg-[#f8f8f8] rounded-2xl p-8 md:p-10">
                <h2 className="text-2xl font-serif font-medium text-[#1a1a1a] mb-4">
                  Travel Tips
                </h2>
                <p className="text-[#4d4d4d] text-base leading-relaxed font-light">{trip.tips}</p>
              </div>
            </div>
          )}

          {/* Back Button */}
          <div className="pt-8 pb-4">
            <button
              onClick={() => navigate(`/destination/${slug}`)}
              className="flex items-center gap-2 text-black font-bold text-[11px] uppercase tracking-widest border-b-2 border-black pb-1 hover:text-gray-500 hover:border-gray-500 transition-all"
            >
              <FaArrowLeft size={10} />
              Back to {slug?.charAt(0).toUpperCase() + slug?.slice(1)}
            </button>
          </div>

        </div>
      </div>
    </div>
  );
};

export default TripDetailPage;