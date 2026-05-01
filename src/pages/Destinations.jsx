import React, { useEffect, useState, useRef } from 'react';
import { useParams, Link } from 'react-router-dom';
import { destinationDetails } from '../Data/DestinationData';
import DestinationHeader from '../components/Header/DestinationHeader';
import TripSection from '../NavbarData/TripSection'; 
import { FaHeart, FaShareAlt, FaPlus } from 'react-icons/fa';

const Destinations = () => {
  const { slug } = useParams();
  const scrollContainerRef = useRef(null);
  const nearPlacesRef = useRef(null);
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
    { title: "Best restaurants", image: data.foodCategories?.[0]?.image },
    { title: "Best waterfront bars", image: data.foodCategories?.[1]?.image },
    { title: "Top coffee shops", image: data.foodCategories?.[2]?.image },
    { title: "Local Favorites", image: data.foodCategories?.[3]?.image }
  ];

  const tabs = [
    { id: 'welcome', label: 'Welcome' },
    { id: 'aboriginal', label: 'Aboriginal' },
    { id: 'getting-there', label: `Getting to ${data.title}` },
    { id: 'when-to-visit', label: 'When to visit' },
    { id: 'accessibility', label: 'Accessibility' },
  ];

  return (
    <div className="w-full bg-white font-sans overflow-x-hidden">
      
      {/* 1. HERO SECTION */}
      <div className="relative h-screen w-full overflow-hidden bg-black">
        {/* FIX: We pass a prop (e.g., showActions={false}) to the Header.
           This tells the DestinationHeader to NOT show its own heart/share icons. 
           (Note: Make sure your DestinationHeader component supports this prop). */}
        <DestinationHeader name={data.title} showActions={false} /> 
        
        <video key={data.video} autoPlay muted loop playsInline className="absolute inset-0 w-full h-full object-cover opacity-80">
          <source src={data.video} type="video/mp4" />
        </video>
        
        {/* Title and Icons aligned perfectly on the bottom baseline */}
        <div className="absolute bottom-32 left-12 md:left-24 right-12 md:right-24 z-20 flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-white/10 pb-4">
          <h1 className="text-white text-5xl md:text-8xl font-medium tracking-tight drop-shadow-lg leading-none">
            Guide to {data.title}
          </h1>
          
          <div className="flex gap-4 items-center mb-1 md:mb-2">
            <button className="bg-white/10 backdrop-blur-md p-4 rounded-full text-white hover:bg-white/30 transition-all border border-white/20 shadow-xl">
              <FaHeart size={18} />
            </button>
            <button className="bg-white/10 backdrop-blur-md p-4 rounded-full text-white hover:bg-white/30 transition-all border border-white/20 shadow-xl">
              <FaPlus size={18} />
            </button>
            <button className="bg-white/10 backdrop-blur-md p-4 rounded-full text-white hover:bg-white/30 transition-all border border-white/20 shadow-xl">
              <FaShareAlt size={18} />
            </button>
          </div>
        </div>
      </div>

      <div className="w-full relative z-30 -mt-20">
        <div className="bg-white rounded-t-[40px] p-6 md:p-12 lg:p-16">
          
          {/* 2. WELCOME & TABS SECTION */}
          <div className="flex flex-col lg:flex-row gap-12 mb-20 max-w-[1440px] mx-auto">
            <div className="flex-1">
              <div className="flex flex-wrap gap-3 mb-10">
                {tabs.map((tab) => (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`px-6 py-2 rounded-full text-[11px] font-bold transition-all border ${
                      activeTab === tab.id ? 'bg-[#1a1a1a] text-white border-black' : 'bg-[#f4f4f4] text-[#757575] border-transparent hover:bg-gray-200'
                    }`}
                  >
                    {tab.label}
                  </button>
                ))}
              </div>

              <div className="min-h-[180px]">
                <h2 className="text-[#1a1a1a] text-4xl font-serif font-medium mb-6">{data.welcomeTitle || `Welcome to ${data.title}`}</h2>
                <p className="text-[#4d4d4d] text-lg leading-relaxed font-light max-w-3xl">{data.fullDesc}</p>
              </div>
            </div>

            <div className="w-full lg:w-[400px]">
              <div className="rounded-2xl overflow-hidden relative border border-gray-100 h-80 shadow-md">
                <img 
                  src={data.mapImage || "https://images.unsplash.com/photo-1526772662000-3f88f10405ff?w=800"} 
                  alt="Location Map" 
                  className="w-full h-full object-cover grayscale opacity-70"
                />
                <div className="absolute bottom-6 left-0 right-0 px-8">
                  <button className="w-full py-4 bg-white text-black rounded-full font-bold text-xs shadow-xl hover:bg-gray-50 transition-all uppercase tracking-widest">
                    View full map 
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* 3. TOP THINGS TO DO SECTION - No arrows */}
          <div className="max-w-[1440px] mx-auto border-t border-gray-100 pt-16 relative mb-24">
            <h2 className="text-4xl font-serif font-medium text-[#1a1a1a] mb-12">
              Top things to do in {data.title}
            </h2>
            <div 
              ref={scrollContainerRef}
              className="flex overflow-x-auto space-x-6 pb-8 scrollbar-hide snap-x touch-pan-x"
            >
              {data.thingsToDo?.map((item, index) => (
                <div key={index} className="min-w-[300px] md:min-w-[420px] flex-shrink-0 snap-start">
                  <div className="relative h-[280px] md:h-[320px] w-full overflow-hidden rounded-2xl mb-5 shadow-sm group/card">
                    <img 
                      src={item.image} 
                      alt={item.title} 
                      className="w-full h-full object-cover transition-transform duration-700 group-hover/card:scale-110" 
                    />
                  </div>
                  <h3 className="text-xl font-bold text-[#1a1a1a] mb-2">{item.title}</h3>
                  <p className="text-[#666] text-sm leading-relaxed line-clamp-2 font-light mb-4">{item.description}</p>
                  <button className="text-black font-bold text-[10px] uppercase tracking-widest border-b-2 border-black pb-1 hover:text-gray-500 hover:border-gray-500 transition-all">
                    Explore
                  </button>
                </div>
              ))}
            </div>
          </div>

          {/* 4. BEST RESTAURANTS SECTION */}
          <div className="max-w-[1440px] mx-auto border-t border-gray-100 pt-16 pb-20">
            <h2 className="text-4xl font-serif font-medium text-[#1a1a1a] mb-12">
              Best restaurants in {data.title}
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 w-full">
              {restaurantCategories.map((item, index) => (
                <div key={index} className="group cursor-pointer w-full">
                  <div className="relative h-[500px] w-full overflow-hidden rounded-3xl shadow-xl">
                    <img 
                      src={item.image || "https://via.placeholder.com/400x600"} 
                      alt={item.title} 
                      className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" 
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex items-end p-8">
                      <h3 className="text-white text-3xl font-medium tracking-tight">
                        {item.title}
                      </h3>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* 5. DISCOVER SECTION */}
          <div className="max-w-[1440px] mx-auto border-t border-gray-100 pt-16 pb-20">
            <h2 className="text-4xl font-serif font-medium text-[#1a1a1a] mb-12">
              Discover {data.title}
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {data.discoverCategories?.map((item) => (
                <div key={item.id} className="group cursor-pointer">
                  <div className="relative h-[450px] w-full overflow-hidden rounded-2xl shadow-sm">
                    <img 
                      src={item.image} 
                      alt={item.title} 
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" 
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                    <div className="absolute bottom-0 left-0 p-8 w-full">
                      <h3 className="text-white text-2xl font-bold leading-tight tracking-tight">
                        {item.title}
                      </h3>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* 6. TRIP PLANNER SECTION */}
          <div className="border-t border-gray-100 pb-20">
             <TripSection destinationId={lookupKey} cityName={data.title} />
          </div>

          {/* 7. PLACES NEAR SECTION - No arrows */}
          {data.nearPlaces && (
            <div className="max-w-[1440px] mx-auto border-t border-gray-100 pt-16 pb-24 relative">
              <h2 className="text-4xl font-serif font-medium text-[#1a1a1a] mb-12">
                Places near {data.title}
              </h2>
              <div 
                ref={nearPlacesRef}
                className="flex overflow-x-auto space-x-4 pb-8 scrollbar-hide snap-x touch-pan-x"
              >
                {data.nearPlaces.map((place, index) => (
                  <div key={index} className="flex-none w-[320px] snap-start group/place cursor-pointer">
                    <div className="relative h-[460px] w-full overflow-hidden rounded-2xl shadow-md">
                      <img 
                        src={place.image || "https://via.placeholder.com/400x600"}
                        alt={place.title} 
                        className="w-full h-full object-cover transition-transform duration-700 group-hover/place:scale-110" 
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                      <div className="absolute bottom-10 left-0 right-0 px-6 text-center">
                        <h3 className="text-white text-2xl font-serif font-medium leading-tight">
                          {place.title}
                        </h3>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* 8. TRIPS AND ITINERARIES SECTION - Added at the bottom */}
          {data.tripsAndItineraries && (
            <div className="max-w-[1440px] mx-auto border-t border-gray-100 pt-16 pb-24 relative">
              <h2 className="text-4xl font-serif font-medium text-[#1a1a1a] mb-12">
                Trips and Itineraries
              </h2>
              <div 
                ref={tripsRef}
                className="flex overflow-x-auto space-x-4 pb-8 scrollbar-hide snap-x touch-pan-x"
              >
                {data.tripsAndItineraries.map((trip, index) => (
                  <div key={index} className="flex-none w-[320px] snap-start group/trip cursor-pointer">
                    <div className="relative h-[460px] w-full overflow-hidden rounded-2xl shadow-md">
                      <img 
                        src={trip.image || "https://via.placeholder.com/400x600"}
                        alt={trip.title} 
                        className="w-full h-full object-cover transition-transform duration-700 group-hover/trip:scale-110" 
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
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
          )}
        </div>
      </div>
    </div>
  );
};

export default Destinations;