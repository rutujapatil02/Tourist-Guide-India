import React from 'react';
import { useNavigate } from 'react-router-dom';
// Ensure this path is correct: Up 3 levels to src, then Data/BeInspiredData/...
import { dealsOffersData } from '../../../Data/BeInspiredData/DealsOffersData/DealsOffersData';

const DealsOffersSection = ({ onBack }) => {
  const navigate = useNavigate();

  return (
    <div className="w-full bg-white min-h-screen animate-in fade-in duration-500">
      {/* Navigation Header */}
      <div className="bg-[#41aab4] text-white py-2 px-6 flex items-center gap-2 text-[13px] font-light">
        <span className="cursor-pointer hover:underline" onClick={() => navigate('/')}>Home</span> 
        <span>{">"}</span>
        <span className="cursor-pointer hover:underline" onClick={onBack}>Inspiration</span> 
        <span>{">"}</span>
        <span className="font-normal underline">Deals and offers</span>
      </div>

      {/* Hero */}
      <div className="relative h-[50vh] w-full overflow-hidden">
        <img 
          src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=1200" 
          alt="Deals Hero"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/30 flex items-center justify-center text-white">
          <h1 className="text-5xl md:text-7xl font-serif text-center">Exclusive Deals</h1>
        </div>
      </div>

      {/* Content Grid */}
      <div className="max-w-7xl mx-auto py-16 px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {dealsOffersData && dealsOffersData.map((deal) => (
            <div key={deal.id} className="bg-white rounded-2xl overflow-hidden shadow-lg border border-gray-100 group">
              <div className="relative aspect-video overflow-hidden">
                <img 
                  src={deal.img} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
                  alt={deal.title} 
                />
                <div className="absolute top-4 left-4 bg-orange-500 text-white px-3 py-1 rounded-full text-sm font-bold">
                  Limited Offer
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">{deal.title}</h3>
                <p className="text-gray-600 text-sm mb-4">{deal.description}</p>
                <button className="w-full bg-gray-900 text-white py-2 rounded-lg hover:bg-orange-600 transition-colors">
                  View Detail
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default DealsOffersSection;