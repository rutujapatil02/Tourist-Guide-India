import React, { useState } from 'react';
import { weatherData } from '../../../Data/PlanTrip/AboutIndia/WeatherData';
import { useNavigate } from 'react-router-dom';

const WeatherSection = ({ onNavigateBack }) => {
  const { hero, cities, months, seasons } = weatherData;
  const navigate = useNavigate();
  const [selectedCity, setSelectedCity] = useState(cities[0]);
  const [unit, setUnit] = useState('C');
  const [activeSeason, setActiveSeason] = useState(null);

  const convertToF = (c) => Math.round((c * 9) / 5 + 32);

  // REUSABLE BREADCRUMB COMPONENT
  const Breadcrumb = ({ currentPath }) => (
    <div className="w-full bg-[#3BB0C1] text-white py-2 px-6 flex items-center gap-2 text-[13px] font-medium sticky top-0 z-50">
      <button onClick={() => navigate('/')} className="hover:underline">Home</button>
      <span className="text-white/70">{">"}</span>
      <button onClick={onNavigateBack} className="hover:underline">Plan your trip</button>
      <span className="text-white/70">{">"}</span>
      <span className="text-white capitalize">{currentPath}</span>
    </div>
  );

  // VIEW 1: Detail page for a specific season
  if (activeSeason) {
    return (
      <div className="fixed inset-0 z-[110] bg-white w-screen h-screen overflow-y-auto">
        <Breadcrumb currentPath={activeSeason.id.toLowerCase().replace('_', ' ')} />
        
        <div className="relative h-[80vh]"> {/* Adjusted height to be more standard like the reference */}
          <img src={activeSeason.image} className="w-full h-full object-cover" alt="" />
          <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
            <h1 className="text-white text-7xl font-serif font-bold uppercase tracking-tight">{activeSeason.id}</h1>
          </div>
        </div>

        <div className="max-w-4xl mx-auto py-20 px-6">
          <h2 className="text-4xl font-serif font-bold mb-6">{activeSeason.title}</h2>
          <p className="text-xl text-gray-600 leading-relaxed italic mb-8">"{activeSeason.description}"</p>
          <p className="text-lg text-gray-700 leading-relaxed">{activeSeason.content}</p>
          <button 
            onClick={() => setActiveSeason(null)}
            className="mt-12 px-8 py-3 bg-gray-900 text-white rounded-full text-xs font-bold tracking-widest hover:bg-gray-700 transition-colors"
          >
            ← BACK TO WEATHER
          </button>
        </div>
      </div>
    );
  }

  // VIEW 2: Main Weather List & Table
  return (
    <div className="fixed inset-0 z-[100] bg-white w-screen h-screen overflow-y-auto overflow-x-hidden">
      {/* UPDATED BREADCRUMB */}
      <Breadcrumb currentPath="Weather and seasons" />

      {/* HERO */}
      <div className="relative h-[90vh]"> 
        <img src={hero.backgroundImage} className="w-full h-full object-cover" alt="" />
        <div className="absolute inset-0 bg-black/20 flex items-end p-20">
          <h1 className="text-white text-7xl font-serif font-bold drop-shadow-lg">{hero.title}</h1>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 -mt-20 relative z-10 pb-20">
        <div className="bg-white shadow-2xl p-12 border-t-8 border-[#3BB0C1]">
          
          {/* CLIMATE TABLE */}
          <div className="mb-20">
            <h2 className="text-center text-gray-400 font-bold tracking-[0.2em] mb-10 text-xs uppercase">Regional Statistics</h2>
            <div className="flex overflow-x-auto gap-2 mb-10 no-scrollbar justify-center">
              {cities.map((city) => (
                <button 
                  key={city.name}
                  onClick={() => setSelectedCity(city)}
                  className={`px-6 py-2 rounded-full border text-[11px] font-bold transition-all ${selectedCity.name === city.name ? "bg-[#3BB0C1] border-[#3BB0C1] text-white" : "text-gray-500 hover:bg-gray-100"}`}
                >
                  {city.name}
                </button>
              ))}
            </div>
            
            <div className="overflow-x-auto border border-gray-100 rounded-xl">
              <table className="w-full text-left min-w-[800px]">
                <thead className="bg-gray-50 text-[10px] font-bold text-gray-400">
                  <tr>
                    <th className="p-4 uppercase">Month</th>
                    {months.map(m => <th key={m} className="p-4 text-center">{m}</th>)}
                  </tr>
                </thead>
                <tbody className="text-sm">
                  <tr className="border-b border-gray-50">
                    <td className="p-4 font-bold text-gray-700">Max Temp (°{unit})</td>
                    {selectedCity.maxTemp.map((v, i) => <td key={i} className="p-4 text-center">{unit === 'C' ? v : convertToF(v)}</td>)}
                  </tr>
                  <tr className="border-b border-gray-50">
                    <td className="p-4 font-bold text-gray-700">Min Temp (°{unit})</td>
                    {selectedCity.minTemp.map((v, i) => <td key={i} className="p-4 text-center">{unit === 'C' ? v : convertToF(v)}</td>)}
                  </tr>
                  <tr>
                    <td className="p-4 font-bold text-gray-700">Rainfall (mm)</td>
                    {selectedCity.rainfall.map((v, i) => <td key={i} className="p-4 text-center">{v}</td>)}
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* SEASONS LISTING */}
          <div className="space-y-32 mt-32">
            {seasons.map((s, idx) => (
              <div key={s.id} className={`flex flex-col lg:flex-row gap-16 items-center ${idx % 2 !== 0 ? 'lg:flex-row-reverse' : ''}`}>
                <div className="lg:w-1/2 cursor-pointer group" onClick={() => setActiveSeason(s)}>
                  <div className="overflow-hidden rounded-sm shadow-2xl">
                    <img src={s.image} className="w-full aspect-video object-cover group-hover:scale-105 transition-transform duration-1000" alt="" />
                  </div>
                </div>
                <div className="lg:w-1/2 space-y-6">
                  <h3 className="text-4xl font-serif font-bold text-gray-800">{s.title}</h3>
                  <p className="text-gray-600 leading-relaxed text-lg">{s.description}</p>
                  <button 
                    onClick={() => setActiveSeason(s)}
                    className="text-[#3BB0C1] font-bold border-b-2 border-[#3BB0C1] pb-1 text-xs tracking-widest hover:text-[#2a8d9b] hover:border-[#2a8d9b] transition-all"
                  >
                    EXPLORE {s.id.toUpperCase()}
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default WeatherSection;