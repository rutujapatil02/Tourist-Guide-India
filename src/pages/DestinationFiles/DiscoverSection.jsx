// DiscoverSection.jsx
// This is a FULL PAGE component — not embedded inside Destinations.
// Routes needed in App.jsx:
//   <Route path="/destination/:destinationId/discover/:category/:itemId" element={<DiscoverSection />} />
//   <Route path="/destination/:destinationId/discover/:category" element={<DiscoverSection />} />
//   <Route path="/destination/:destinationId/discover" element={<DiscoverSection />} />

import React, { useState, useEffect } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { discoverData } from './DiscoverData'; // adjust path if needed

const capitalize = (s) =>
  s ? s.replace(/([A-Z])/g, ' $1').replace(/^./, (c) => c.toUpperCase()) : '';

const TAB_META = [
  { key: 'stay',    label: '🏨 Where to Stay'  },
  { key: 'weather', label: '☁️ Weather'         },
  { key: 'agent',   label: '🤝 Travel Agents'   },
  { key: 'tours',   label: '🗺️ Find Tours'      },
];

// ─── BREADCRUMB ──────────────────────────────────────────────────────────────
const Breadcrumb = ({ destinationId, activeTab }) => {
  const destName = capitalize(destinationId);
  const tabLabel = TAB_META.find((t) => t.key === activeTab)?.label?.replace(/^.{1,3}\s/, '') || '';
  return (
    <nav className="flex items-center flex-wrap gap-2 text-xs text-white/70 font-medium tracking-wide uppercase">
      <Link to="/" className="hover:text-white transition-colors">Home</Link>
      <span className="text-white/40">›</span>
      <Link to={`/destination/${destinationId}`} className="hover:text-white transition-colors">
        {destName}
      </Link>
      <span className="text-white/40">›</span>
      <span className="text-white">Discover</span>
      {tabLabel && (
        <>
          <span className="text-white/40">›</span>
          <span className="text-amber-300">{tabLabel}</span>
        </>
      )}
    </nav>
  );
};

// ─── SHARED SECTION HEADER ───────────────────────────────────────────────────
const SectionHeader = ({ heading, intro }) => (
  <div className="border-b border-gray-100 pb-6">
    <h2 className="text-3xl md:text-4xl font-serif font-medium text-gray-900 leading-tight">
      {heading}
    </h2>
    {intro && (
      <p className="text-gray-500 mt-3 text-base leading-relaxed max-w-3xl font-light">
        {intro}
      </p>
    )}
  </div>
);

// ─── STAY SECTION ────────────────────────────────────────────────────────────
const StaySection = ({ data }) => (
  <div>
    <SectionHeader heading={data.heading} intro={data.intro} />
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
      {data.items.map((item, idx) => (
        <div
          key={idx}
          className="group border border-gray-100 rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 cursor-pointer"
        >
          <div className="relative h-48 overflow-hidden">
            <img
              src={item.image}
              alt={item.name}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
            />
            <span className="absolute top-3 right-3 text-xs font-bold bg-white/90 backdrop-blur-sm text-amber-700 px-3 py-1 rounded-full shadow-sm">
              {item.category}
            </span>
          </div>
          <div className="p-5">
            <h3 className="text-lg font-bold text-gray-900 leading-tight">{item.name}</h3>
            <p className="text-amber-600 font-bold text-sm mt-1">{item.price}</p>
            <p className="text-gray-500 text-sm mt-2 leading-relaxed">{item.highlight}</p>
          </div>
        </div>
      ))}
    </div>
  </div>
);

// ─── WEATHER SECTION ─────────────────────────────────────────────────────────
const WeatherSection = ({ data }) => (
  <div>
    <SectionHeader heading={data.heading} intro={data.intro} />
    <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
      {data.seasons.map((s, idx) => (
        <div
          key={idx}
          className="flex items-start gap-4 p-5 rounded-2xl border border-gray-100 hover:border-amber-200 hover:bg-amber-50/40 transition-all"
        >
          <span className="text-3xl leading-none mt-0.5">{s.icon}</span>
          <div className="flex-1 min-w-0">
            <div className="flex items-baseline justify-between gap-2 flex-wrap">
              <h4 className="font-bold text-gray-900 text-base">{s.name}</h4>
              <span className="text-xs font-semibold text-amber-600 bg-amber-100 px-2 py-0.5 rounded-full whitespace-nowrap">
                {s.temp}
              </span>
            </div>
            <p className="text-gray-500 text-sm mt-1 leading-relaxed">{s.tip}</p>
          </div>
        </div>
      ))}
    </div>
  </div>
);

// ─── AGENT SECTION ───────────────────────────────────────────────────────────
const AgentSection = ({ data }) => (
  <div>
    <SectionHeader heading={data.heading} intro={data.intro} />
    <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-4">
      {data.agents.map((agent, idx) => (
        <div
          key={idx}
          className="group flex items-start justify-between gap-4 p-5 rounded-2xl border border-gray-100 hover:border-amber-200 hover:shadow-md transition-all cursor-pointer bg-gray-50 hover:bg-white"
        >
          <div className="flex-1 min-w-0">
            <h3 className="font-bold text-gray-900 text-base leading-tight">{agent.name}</h3>
            <p className="text-gray-500 text-sm mt-1">{agent.specialty}</p>
            <div className="flex flex-wrap items-center gap-x-3 gap-y-1 mt-2">
              <span className="text-xs font-semibold text-amber-600">⭐ {agent.rating}</span>
              <span className="text-gray-300">·</span>
              <span className="text-xs text-gray-400">{agent.experience}</span>
              <span className="text-gray-300">·</span>
              <span className="text-xs text-gray-400">🗣 {agent.languages}</span>
            </div>
            <a
              href={`tel:${agent.phone}`}
              onClick={(e) => e.stopPropagation()}
              className="inline-block mt-3 text-xs font-semibold text-amber-700 hover:text-amber-900 transition-colors"
            >
              📞 {agent.phone}
            </a>
          </div>
          <span className="text-amber-500 text-lg mt-1 group-hover:translate-x-1 transition-transform">→</span>
        </div>
      ))}
    </div>
  </div>
);

// ─── TOURS SECTION ───────────────────────────────────────────────────────────
const ToursSection = ({ data }) => (
  <div>
    <SectionHeader heading={data.heading} intro={data.intro} />
    <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {data.tours.map((tour, idx) => (
        <div
          key={idx}
          className="group border border-gray-100 rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 cursor-pointer"
        >
          <div className="relative h-44 overflow-hidden">
            <img
              src={tour.image}
              alt={tour.name}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
            <span className="absolute bottom-3 right-3 text-xs font-semibold bg-white/90 backdrop-blur-sm text-gray-700 px-2 py-1 rounded-full">
              ⏱ {tour.duration}
            </span>
          </div>
          <div className="p-5">
            <h3 className="font-bold text-gray-900 text-base leading-tight">{tour.name}</h3>
            <p className="text-amber-600 font-bold text-sm mt-2">{tour.price}</p>
            <p className="text-gray-500 text-xs mt-2 leading-relaxed">{tour.includes}</p>
            <span className="inline-block mt-4 text-[10px] font-bold uppercase tracking-widest text-black border-b border-black pb-0.5 group-hover:text-amber-600 group-hover:border-amber-600 transition-colors">
              Book Now →
            </span>
          </div>
        </div>
      ))}
    </div>
  </div>
);

// ─── MAIN EXPORT ─────────────────────────────────────────────────────────────
const DiscoverSection = () => {
  const { destinationId, category } = useParams();
  const navigate = useNavigate();

  const validTab = (cat) => TAB_META.some((t) => t.key === cat);

  const [activeTab, setActiveTab] = useState(validTab(category) ? category : 'stay');

  useEffect(() => {
    if (validTab(category)) setActiveTab(category);
  }, [category]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [destinationId]);

  const destination = discoverData[destinationId];

  if (!destination) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen bg-white font-sans">
        <h1 className="text-3xl font-bold mb-4">Destination not found.</h1>
        <Link to="/" className="bg-black text-white px-8 py-3 rounded-full hover:bg-gray-800 transition-all">
          Return Home
        </Link>
      </div>
    );
  }

  const stayData    = destination.find((c) => c.type === 'stay');
  const weatherData = destination.find((c) => c.type === 'weather');
  const agentData   = destination.find((c) => c.type === 'agent');
  const toursData   = destination.find((c) => c.type === 'tours');

  const heroImage =
    { stay: stayData?.image, weather: weatherData?.image, agent: agentData?.image, tours: toursData?.image }[activeTab]
    || stayData?.image
    || 'https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?w=1600';

  const destName = capitalize(destinationId);

  const handleTabChange = (tab) => {
    setActiveTab(tab);
    navigate(`/destination/${destinationId}/discover/${tab}`, { replace: true });
  };

  return (
    <div className="w-full bg-white font-sans overflow-x-hidden">

      {/* ── HERO ─────────────────────────────────────────────────────────── */}
      <div className="relative w-full overflow-hidden" style={{ height: '72vh', minHeight: '420px' }}>
        <div
          key={heroImage}
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${heroImage})`, animation: 'heroFadeIn 0.6s ease' }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/55 via-black/25 to-black/75" />
        <div className="relative z-10 h-full flex flex-col justify-between px-6 md:px-16 pt-6 pb-20">
          <Breadcrumb destinationId={destinationId} activeTab={activeTab} />
          <div>
            <p className="text-amber-300 text-xs uppercase tracking-[0.25em] font-semibold mb-3">Discover</p>
            <h1 className="text-white text-5xl md:text-7xl font-serif font-medium tracking-tight leading-none drop-shadow-xl">
              {destName}
            </h1>
            <p className="text-white/80 mt-4 text-base md:text-lg max-w-xl font-light leading-relaxed">
              {stayData?.content?.intro ||
                `Explore the very best of ${destName} — handpicked stays, expert agents, guided tours, and seasonal insights.`}
            </p>
          </div>
        </div>
      </div>

      {/* ── OVERLAPPING CARD ─────────────────────────────────────────────── */}
      <div className="relative z-20 -mt-14 flex justify-center px-4 md:px-8 pb-24">
        <div className="bg-white w-full max-w-6xl shadow-2xl rounded-2xl overflow-hidden">

          {/* TAB BAR */}
          <div className="flex overflow-x-auto scrollbar-hide border-b border-gray-100">
            {TAB_META.map((tab) => (
              <button
                key={tab.key}
                onClick={() => handleTabChange(tab.key)}
                className={`flex-shrink-0 px-6 md:px-10 py-5 text-sm font-semibold tracking-wide transition-all border-b-[3px] whitespace-nowrap ${
                  activeTab === tab.key
                    ? 'border-amber-500 text-amber-600 bg-amber-50/60'
                    : 'border-transparent text-gray-500 hover:text-gray-800 hover:bg-gray-50'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* TAB CONTENT */}
          <div className="p-6 md:p-10">
            {activeTab === 'stay'    && stayData    && <StaySection    data={stayData.content}    />}
            {activeTab === 'weather' && weatherData && <WeatherSection  data={weatherData.content} />}
            {activeTab === 'agent'   && agentData   && <AgentSection   data={agentData.content}   />}
            {activeTab === 'tours'   && toursData   && <ToursSection   data={toursData.content}   />}
          </div>
        </div>
      </div>

      <style>{`
        @keyframes heroFadeIn {
          from { opacity: 0; transform: scale(1.03); }
          to   { opacity: 1; transform: scale(1); }
        }
        .scrollbar-hide::-webkit-scrollbar { display: none; }
        .scrollbar-hide { -ms-overflow-style: none; scrollbar-width: none; }
      `}</style>
    </div>
  );
};

export default DiscoverSection;