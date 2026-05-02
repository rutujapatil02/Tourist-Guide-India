// TripSection.jsx
// Scrollable "Trips and Itineraries" section — matches the style shown in the screenshot.
// Clicking a trip card navigates to /destination/:slug/trip/:tripSlug

import React, { useRef } from "react";
import { useNavigate } from "react-router-dom";
import { generateTripSlug } from "./TripsData"; // adjust path as needed

const TripSection = ({ destinationId, cityName, trips = [] }) => {
  const navigate = useNavigate();
  const tripsRef = useRef(null);

  if (!trips || trips.length === 0) return null;

  const handleTripClick = (trip) => {
    const tripSlug = generateTripSlug(trip.title);
    navigate(`/destination/${destinationId}/trip/${tripSlug}`);
  };

  return (
    <div className="border-t border-gray-100 pt-16 pb-24 relative">
      {/* Section Header */}
      <div className="flex items-end justify-between mb-12">
        <h2 className="text-4xl font-serif font-medium text-[#1a1a1a]">
          Trips and Itineraries
        </h2>
      </div>

      {/* Horizontal Scroll Container */}
      <div
        ref={tripsRef}
        className="flex overflow-x-auto space-x-4 pb-8 scrollbar-hide snap-x"
      >
        {trips.map((trip, idx) => (
          <div
            key={idx}
            onClick={() => handleTripClick(trip)}
            className="flex-none w-[320px] snap-start group/trip cursor-pointer"
          >
            <div className="relative h-[460px] w-full overflow-hidden rounded-2xl shadow-md">
              {/* Trip Image */}
              <img
                src={trip.image || "https://via.placeholder.com/400x600"}
                alt={trip.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover/trip:scale-110"
              />

              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent" />

              {/* Trip Title */}
              <div className="absolute bottom-10 left-0 right-0 px-6 text-center">
                <h3 className="text-white text-2xl font-serif font-medium leading-tight">
                  {trip.title}
                </h3>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TripSection;