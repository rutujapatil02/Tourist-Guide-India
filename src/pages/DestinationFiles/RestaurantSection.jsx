// src/pages/DestinationFiles/RestaurantSection.jsx
// Full-page restaurant detail view (like australia.com/best-restaurants)
// Route: /destination/:slug/restaurants/:category

import React, { useEffect } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import { restaurantData } from "./RestaurantData";
import DestinationHeader from "../../components/Header/DestinationHeader";

// Helper to fetch the correct array based on slug and category
const getCategoryData = (slug, category) => {
  const slugKey = slug?.toLowerCase().replace(/[\s-]/g, "");
  const destination = restaurantData[slugKey];
  if (!destination) return null;

  switch (category) {
    case "best-restaurants":
      return { items: destination.bestRestaurants, title: "Best Restaurants" };
    case "waterfront-bars":
      return { items: destination.bestBars, title: "Best Bars & Pubs" };
    case "coffee-shops":
      return { items: destination.topCoffeeShops, title: "Top Coffee Shops" };
    case "local-favorites":
      return { items: destination.localFavorites, title: "Local Favorites" };
    default:
      return null;
  }
};

// Breadcrumb component
const Breadcrumb = ({ destinationTitle, slug, categoryTitle }) => (
  <nav className="flex items-center gap-2 text-sm text-gray-500 mb-8 flex-wrap">
    <Link to="/" className="hover:text-black transition-colors">Home</Link>
    <span className="text-gray-300">›</span>
    <Link to={`/destination/${slug}`} className="hover:text-black transition-colors">
      Destination Guide
    </Link>
    <span className="text-gray-300">›</span>
    <span className="text-gray-800 font-medium">{categoryTitle}</span>
  </nav>
);

// Generic card for any category – adapts fields based on item type
const RestaurantCard = ({ item, index, category }) => {
  // Common fields
  const name = item.name;
  const description = item.description;
  const image = item.image;
  const priceRange = item.priceRange;

  // Category‑specific fields
  const cuisine = item.cuisine;
  const rating = item.rating;
  const specialty = item.specialty;
  const mustTry = item.mustTry;

  // Build a subtitle string
  let subtitle = "";
  if (category === "best-restaurants" && cuisine) subtitle = cuisine;
  else if (category === "best-bars" && specialty) subtitle = specialty;
  else if (category === "coffee-shops" && specialty) subtitle = specialty;
  else if (category === "local-favorites" && mustTry) subtitle = mustTry;

  // Build a small metadata line
  let meta = "";
  if (rating) meta = `★ ${rating} • ${priceRange}`;
  else if (priceRange) meta = `${priceRange}`;

  return (
    <article className="mb-20">
      {/* Name + index */}
      <div className="flex items-baseline gap-3 mb-6">
        <h2 className="text-3xl md:text-4xl font-serif font-semibold text-[#1a1a1a]">
          {name}
        </h2>
        {subtitle && (
          <p className="text-sm text-gray-500 uppercase tracking-wide">{subtitle}</p>
        )}
      </div>

      {/* Hero Image */}
      <div className="w-full h-[320px] md:h-[480px] overflow-hidden rounded-xl mb-4 shadow-sm">
        <img
          src={image}
          alt={name}
          className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
        />
      </div>

      {/* Meta info (rating/price) */}
      {meta && (
        <p className="text-sm text-gray-600 mb-4 flex items-center gap-2">
          {rating && <span className="font-bold">{rating} ⭐</span>}
          {priceRange && <span>{priceRange}</span>}
        </p>
      )}

      {/* Description */}
      <p className="text-[#4d4d4d] text-base md:text-lg leading-relaxed font-light max-w-3xl mb-5">
        {description}
      </p>

      {/* Special highlight for local favourites */}
      {mustTry && category === "local-favorites" && (
        <div className="bg-[#fffbf0] border border-[#f0e8cc] rounded-xl px-4 py-3 mb-6 max-w-md">
          <p className="text-xs uppercase font-bold text-[#c9a84c]">Must try</p>
          <p className="text-sm text-[#555]">{mustTry}</p>
        </div>
      )}

      {/* Learn More CTA */}
      <div className="border border-gray-200 rounded-xl p-4 flex items-center justify-between group cursor-pointer hover:border-gray-400 transition-all max-w-md">
        <div className="flex items-center gap-4">
          <div className="w-14 h-14 rounded-lg overflow-hidden flex-shrink-0">
            <img src={image} alt={name} className="w-full h-full object-cover" />
          </div>
          <div>
            <p className="font-bold text-sm text-[#1a1a1a]">{name}</p>
            <p className="text-xs text-gray-500">
              {category === "best-restaurants" && "Restaurant"}
              {category === "waterfront-bars" && "Bar & Pub"}
              {category === "coffee-shops" && "Coffee Shop"}
              {category === "local-favorites" && "Local Specialty"}
            </p>
          </div>
        </div>
        <span className="flex items-center gap-1 text-xs font-bold text-[#1a1a1a] group-hover:gap-2 transition-all">
          Learn more
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
            <path d="M7 17L17 7M17 7H7M17 7v10"/>
          </svg>
        </span>
      </div>

      {/* Divider */}
      <div className="mt-16 border-b border-gray-100" />
    </article>
  );
};

// Main Component
const RestaurantSection = () => {
  const { slug, category } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug, category]);

  const categoryInfo = getCategoryData(slug, category);
  if (!categoryInfo || !categoryInfo.items || categoryInfo.items.length === 0) {
    return (
      <div className="w-full min-h-screen flex flex-col items-center justify-center bg-white">
        <h1 className="text-3xl font-bold mb-4">No restaurants found for this category.</h1>
        <button
          onClick={() => navigate(`/destination/${slug}`)}
          className="bg-black text-white px-8 py-3 rounded-full hover:bg-gray-800 transition-all"
        >
          Back to Destination
        </button>
      </div>
    );
  }

  const { items, title } = categoryInfo;

  // Format destination title from slug
  const destinationTitle = slug
    ? slug.replace(/-/g, " ").replace(/\b\w/g, (c) => c.toUpperCase())
    : "";

  // Hero image – we can use the first item's image or a default
  const heroImage = items.length > 0 ? items[0].image : "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=1600";

  // Intro text based on category
  const introText = {
    "best-restaurants": "From fine dining to hidden gems, discover the finest culinary spots in the city. Whether you crave authentic local flavours or international cuisine, these restaurants promise an unforgettable meal.",
    "waterfront-bars": "Looking for a place to unwind? These bars offer stunning views, creative cocktails, and a vibe that’s perfect for sunset drinks or a late‑night party.",
    "coffee-shops": "Where to get your caffeine fix? Cosy corners, artisanal roasts, and the best brews in town – find your perfect coffee spot.",
    "local-favorites": "The heart of the city’s food scene – beloved street stalls, sweet shops, and hidden eateries that locals swear by. Don’t leave without trying these!"
  }[category] || "Explore the best places to eat and drink in this destination.";

  return (
    <div className="w-full bg-white font-sans overflow-x-hidden">
      <DestinationHeader name={destinationTitle} showActions={false} />

      {/* Hero Image */}
      <div className="w-full h-[50vh] md:h-[65vh] relative overflow-hidden">
        <img
          src={heroImage}
          alt={title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/10 to-black/40" />
      </div>

      {/* Main Content */}
      <div className="max-w-3xl mx-auto px-6 md:px-8 py-12 md:py-16">
        <Breadcrumb
          destinationTitle={destinationTitle}
          slug={slug}
          categoryTitle={title}
        />

        <h1 className="text-4xl md:text-6xl font-serif font-semibold text-[#1a1a1a] leading-tight mb-6">
          {title} in {destinationTitle}
        </h1>

        <p className="text-center text-lg md:text-xl text-[#4d4d4d] font-light leading-relaxed mb-4 border-t border-b border-gray-100 py-6">
          {introText}
        </p>

        <p className="text-[#4d4d4d] text-base md:text-lg leading-relaxed font-light mb-16 border-b border-gray-100 pb-16">
          We’ve curated the very best places to eat, drink, and savour. From iconic restaurants to hidden alleyway gems, here’s where to go for an authentic taste of {destinationTitle}.
        </p>

        {/* List of items */}
        <div>
          {items.map((item, idx) => (
            <RestaurantCard key={idx} item={item} index={idx} category={category} />
          ))}
        </div>

        {/* Back to Destination */}
        <div className="mt-12 pt-8 border-t border-gray-100 flex justify-center">
          <button
            onClick={() => navigate(`/destination/${slug}`)}
            className="flex items-center gap-2 text-black font-bold text-[11px] uppercase tracking-widest border-b-2 border-black pb-1 hover:text-gray-500 hover:border-gray-500 transition-all"
          >
            <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
              <path d="M9.5 6H2.5M5.5 3L2.5 6L5.5 9" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            Back to {destinationTitle}
          </button>
        </div>
      </div>
    </div>
  );
};

export default RestaurantSection;