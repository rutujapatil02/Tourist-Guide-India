import React, { useEffect, useState, useRef } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { destinationDetails } from '../Data/DestinationData';
import DestinationHeader from '../components/Header/DestinationHeader';
import TripSection from '../NavbarData/TripSection';
import NearSection from '../pages/DestinationFiles/NearSection';
import { FaHeart, FaShareAlt, FaPlus } from 'react-icons/fa';
import MapPage from "./MapPage";
import { discoverData } from '../pages/DestinationFiles/DiscoverData';

// Helper to generate slug from trip title
const generateTripSlug = (title) => {
  return title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');
};

const Destinations = () => {
  const { slug } = useParams();
  const navigate = useNavigate();
  const scrollContainerRef = useRef(null);
  const tripsRef = useRef(null);

  const lookupKey = slug ? slug.toLowerCase().replace(/[\s-]/g, '') : '';
  const data = destinationDetails[lookupKey];

  const [activeTab, setActiveTab] = useState('welcome');

  useEffect(() => {
    window.scrollTo(0, 0);
    setActiveTab('welcome');
  }, [slug, lookupKey]);

  if (!data) {
    return (
      <div className="w-full h-screen flex flex-col items-center justify-center bg-white font-sans">
        <h1 className="text-3xl font-bold mb-4">Destination not found.</h1>
        <Link to="/" className="bg-black text-white px-8 py-3 rounded-full transition-all hover:bg-gray-800">
          Return Home
        </Link>
      </div>
    );
  }

  const restaurantCategories = [
    { title: "Best restaurants",     image: data.foodCategories?.[0]?.image, categoryParam: "best-restaurants" },
    { title: "Best waterfront bars", image: data.foodCategories?.[1]?.image, categoryParam: "waterfront-bars" },
    { title: "Top coffee shops",     image: data.foodCategories?.[2]?.image, categoryParam: "coffee-shops" },
    { title: "Local Favorites",      image: data.foodCategories?.[3]?.image, categoryParam: "local-favorites" },
  ];

  const tabs = [
    { id: 'welcome',       label: 'Welcome' },
    { id: 'aboriginal',    label: 'Aboriginal' },
    { id: 'getting-there', label: `Getting to ${data.title}` },
    { id: 'when-to-visit', label: 'When to visit' },
    { id: 'accessibility', label: 'Accessibility' },
  ];

  const handleExploreThingsToDo = () => navigate(`/destination/${slug}/top-things-to-do`);

  const handleRestaurantCategoryClick = (categoryParam) =>
    navigate(`/destination/${slug}/restaurants/${categoryParam}`);

  const handleDiscoverCategoryClick = (item) => {
    if (item.type) { navigate(`/destination/${slug}/discover/${item.type}`); return; }
    const discoverCategories = discoverData[lookupKey];
    if (discoverCategories) {
      const match = discoverCategories.find((d) => d.id === item.id);
      if (match?.type) { navigate(`/destination/${slug}/discover/${match.type}`); return; }
    }
    const lower = (item.title || '').toLowerCase();
    let category = 'stay';
    if (lower.includes('weather') || lower.includes('climate') || lower.includes('season')) category = 'weather';
    else if (lower.includes('agent')) category = 'agent';
    else if (lower.includes('tour')) category = 'tours';
    else if (lower.includes('stay') || lower.includes('hotel') || lower.includes('accommodation')) category = 'stay';
    navigate(`/destination/${slug}/discover/${category}`);
  };

  const handleNearPlaceClick = (place) => {
    const placeSlug = place.title.toLowerCase().replace(/[^a-z0-9]+/g, '-');
    navigate(`/destination/${slug}/near/${placeSlug}`);
  };

  // ✅ NEW: Handle click on a trip card
  const handleTripClick = (trip) => {
    const tripSlug = generateTripSlug(trip.title);
    navigate(`/destination/${slug}/trip/${tripSlug}`);
  };

  return (
    <div className="w-full bg-white font-sans overflow-x-hidden">

      {/* Hero Section */}
      <div className="relative h-screen w-full overflow-hidden bg-black">
        <DestinationHeader name={data.title} showActions={false} />
        <video key={data.video} autoPlay muted loop playsInline className="absolute inset-0 w-full h-full object-cover opacity-80">
          <source src={data.video} type="video/mp4" />
        </video>
        <div className="absolute bottom-32 left-12 md:left-24 right-12 md:right-24 z-20 flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-white/10 pb-4">
          <h1 className="text-white text-5xl md:text-8xl font-medium tracking-tight drop-shadow-lg leading-none">
            Guide to {data.title}
          </h1>
          <div className="flex gap-4 items-center mb-1 md:mb-2">
            <button className="bg-white/10 backdrop-blur-md p-4 rounded-full text-white hover:bg-white/30 transition-all border border-white/20 shadow-xl"><FaHeart size={18} /></button>
            <button className="bg-white/10 backdrop-blur-md p-4 rounded-full text-white hover:bg-white/30 transition-all border border-white/20 shadow-xl"><FaPlus size={18} /></button>
            <button className="bg-white/10 backdrop-blur-md p-4 rounded-full text-white hover:bg-white/30 transition-all border border-white/20 shadow-xl"><FaShareAlt size={18} /></button>
          </div>
        </div>
      </div>

      {/* Overlapping White Container */}
      <div className="w-full relative z-30 -mt-20 flex justify-center">
        <div className="bg-white w-full max-w-6xl mx-4 md:mx-6 lg:mx-8 p-4 md:p-8 lg:p-10 shadow-xl">

          {/* Welcome & Tabs & Map */}
          <div className="flex flex-col lg:flex-row gap-12 mb-20">
            <div className="flex-1">
              <div className="flex flex-wrap gap-3 mb-10">
                {tabs.map((tab) => (
                  <button key={tab.id} onClick={() => setActiveTab(tab.id)}
                    className={`px-6 py-2 rounded-full text-[11px] font-bold transition-all border ${
                      activeTab === tab.id
                        ? 'bg-[#1a1a1a] text-white border-black'
                        : 'bg-[#f4f4f4] text-[#757575] border-transparent hover:bg-gray-200'
                    }`}>
                    {tab.label}
                  </button>
                ))}
              </div>
              <div className="min-h-[180px]">
                <h2 className="text-[#1a1a1a] text-4xl font-serif font-medium mb-6">
                  {data.welcomeTitle || `Welcome to ${data.title}`}
                </h2>
                <p className="text-[#4d4d4d] text-lg leading-relaxed font-light max-w-3xl">{data.fullDesc}</p>
              </div>
            </div>

            {/* Map */}
            <div className="w-full lg:w-[400px]">
              <div className="rounded-2xl overflow-hidden relative border border-gray-100 h-80 shadow-md">
                <MapPage position={data.coordinates || [20.5937, 78.9629]} name={data.title} zoom={12} />
                <div className="absolute bottom-6 left-0 right-0 px-8 z-10">
                  <button
                    onClick={() => window.open(`https://www.google.com/maps/place/${encodeURIComponent(data.title + ', ' + data.location)}`)}
                    className="w-full py-4 bg-white text-black rounded-full font-bold text-xs shadow-xl hover:bg-gray-50 transition-all uppercase tracking-widest">
                    View full map in Google Maps
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Top things to do */}
          <div className="border-t border-gray-100 pt-16 relative mb-24">
            <div className="flex items-end justify-between mb-12">
              <h2 className="text-4xl font-serif font-medium text-[#1a1a1a]">Top things to do in {data.title}</h2>
              <button onClick={handleExploreThingsToDo} className="hidden md:flex items-center gap-2 text-black font-bold text-[11px] uppercase tracking-widest border-b-2 border-black pb-1 hover:text-gray-500 hover:border-gray-500 transition-all mb-1">
                See all experiences
                <svg width="12" height="12" viewBox="0 0 12 12" fill="none"><path d="M2.5 6H9.5M6.5 3L9.5 6L6.5 9" stroke="currentColor" strokeWidth="1.5"/></svg>
              </button>
            </div>
            <div ref={scrollContainerRef} className="flex overflow-x-auto space-x-6 pb-8 scrollbar-hide snap-x">
              {data.thingsToDo?.map((item, index) => (
                <div key={index} onClick={handleExploreThingsToDo} className="min-w-[300px] md:min-w-[420px] flex-shrink-0 snap-start cursor-pointer group/card">
                  <div className="relative h-[280px] md:h-[320px] w-full overflow-hidden rounded-2xl mb-5 shadow-sm">
                    <img src={item.image} alt={item.title} className="w-full h-full object-cover transition-transform duration-700 group-hover/card:scale-110" />
                  </div>
                  <h3 className="text-xl font-bold text-[#1a1a1a] mb-2 group-hover/card:text-gray-600 transition-colors">{item.title}</h3>
                  <p className="text-[#666] text-sm leading-relaxed line-clamp-2 font-light mb-4">{item.description}</p>
                  <span className="text-black font-bold text-[10px] uppercase tracking-widest border-b-2 border-black pb-1 group-hover/card:text-gray-500 group-hover/card:border-gray-500 transition-all">Explore</span>
                </div>
              ))}
            </div>
          </div>

          {/* Best restaurants */}
          <div className="border-t border-gray-100 pt-16 pb-20">
            <h2 className="text-4xl font-serif font-medium text-[#1a1a1a] mb-12">Best restaurants in {data.title}</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {restaurantCategories.map((item, idx) => (
                <div key={idx} onClick={() => handleRestaurantCategoryClick(item.categoryParam)} className="group cursor-pointer">
                  <div className="relative h-[500px] w-full overflow-hidden rounded-3xl shadow-xl">
                    <img src={item.image || "https://via.placeholder.com/400x600"} alt={item.title} className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent group-hover:from-black/90 transition-all flex items-end p-8">
                      <div className="w-full">
                        <h3 className="text-white text-3xl font-medium mb-3">{item.title}</h3>
                        <span className="flex items-center gap-2 text-white/80 text-[11px] font-bold uppercase opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all">Explore →</span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Discover Section */}
          <div className="border-t border-gray-100 pt-16 pb-20">
            <h2 className="text-4xl font-serif font-medium text-[#1a1a1a] mb-12">Discover {data.title}</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {(discoverData[lookupKey] || data.discoverCategories || []).map((item) => (
                <div key={item.id} onClick={() => handleDiscoverCategoryClick(item)} className="group cursor-pointer">
                  <div className="relative h-[450px] w-full overflow-hidden rounded-2xl shadow-sm">
                    <img src={item.image} alt={item.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                    <div className="absolute bottom-0 left-0 p-8 w-full">
                      <h3 className="text-white text-2xl font-bold leading-tight">{item.title}</h3>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Trip Planner Section (this is a separate component, left as is) */}
          <div className="border-t border-gray-100 pb-20">
            <TripSection destinationId={lookupKey} cityName={data.title} />
          </div>

          {/* Near Section */}
          {data.nearPlaces && data.nearPlaces.length > 0 && (
            <NearSection
              places={data.nearPlaces}
              cityName={data.title}
              onPlaceClick={handleNearPlaceClick}
            />
          )}

          {/* Trips and Itineraries – NOW WITH ONCLICK */}
          {data.tripsAndItineraries && (
            <div className="border-t border-gray-100 pt-16 pb-24 relative">
              <h2 className="text-4xl font-serif font-medium text-[#1a1a1a] mb-12">Trips and Itineraries</h2>
              <div ref={tripsRef} className="flex overflow-x-auto space-x-4 pb-8 scrollbar-hide snap-x">
                {data.tripsAndItineraries.map((trip, idx) => (
                  <div
                    key={idx}
                    onClick={() => handleTripClick(trip)}
                    className="flex-none w-[320px] snap-start group/trip cursor-pointer"
                  >
                    <div className="relative h-[460px] w-full overflow-hidden rounded-2xl shadow-md">
                      <img
                        src={trip.image || "https://via.placeholder.com/400x600"}
                        alt={trip.title}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover/trip:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                      <div className="absolute bottom-10 left-0 right-0 px-6 text-center">
                        <h3 className="text-white text-2xl font-serif font-medium leading-tight">{trip.title}</h3>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

        </div>
      </div>
    </div>
  );
};

export default Destinations;