import React from "react";
import { useNavigate } from "react-router-dom";
import { FaMapMarkerAlt } from "react-icons/fa";

// Image Imports
import HomePageFirst from "../assets/images/HomeImages/HomePageFirst.jpg";
import Tajmahal from "../assets/images/HomeImages/Tajmahal.jpg";
import Jaypur from "../assets/images/HomeImages/Jaypur.jpg";
import Goa from "../assets/images/HomeImages/goa.jpg";
import Kerla from "../assets/images/HomeImages/Kerla.jpg";
import Ladakh from "../assets/images/HomeImages/Ladakh.jpg";
import Varanasi from "../assets/images/HomeImages/Varanasi.jpg";
import Udaypur from "../assets/images/HomeImages/Udaypur.jpg";
import Rishikesh from "../assets/images/HomeImages/Rishikesh.jpg";
import DARJEELING from "../assets/images/HomeImages/DARJEELING.jpg";
import AndmanNikobar from "../assets/images/HomeImages/AndmanNikobar.jpg";
import Mahableshwar from "../assets/images/HomeImages/Mahableshwar.jpg";

const destinations = [
  { 
    id: 1, name: "Agra", img: Tajmahal, loc: "Agra, Uttar Pradesh", 
    when: "The best time to visit the Taj Mahal is between October and March, when the weather is cool and pleasant. Sunrise visits are highly recommended to witness the changing hues of the marble.",
    desc: "The Taj Mahal is an ivory-white marble mausoleum on the right bank of the river Yamuna. A UNESCO World Heritage site, it stands as the ultimate symbol of love and Mughal architectural brilliance.",
    guideLink: "tajmahal"
  },
  { 
    id: 2, name: "Rajsthan", img: Jaypur, loc: "Jaipur, Rajasthan", 
    when: "Between November and February is ideal for Jaipur. The winter sun is perfect for exploring hilltop forts like Amer and Nahargarh without the intense desert heat.",
    desc: "In the royal heart of Rajasthan, the 'Pink City' meets the modern world. Jaipur is a tapestry of majestic forts, intricate palaces, and vibrant bazaars. From the honeycomb facade of Hawa Mahal to the astronomical wonders of Jantar Mantar, every corner tells a story of Rajput bravery and artistic flair.",
    guideLink: "jaipur"
  },
  { 
    id: 3, name: "Goa", img: Goa, loc: "Goa Coast", 
    when: "Mid-November to Mid-February is the peak season, offering perfect beach weather and full operation of all coastal shacks and water sports.",
    desc: "Goa is India's pocket-sized paradise, famous for its unique blend of Indian and Portuguese cultures. Whether you seek the vibrant nightlife of the north or the serene, untouched beaches of the south, Goa offers an unmatched laid-back lifestyle.",
    guideLink: "goa"
  },
  { 
    id: 4, name: "Kerala", img: Kerla, loc: "Munnar & Alleppey", 
    when: "September to March is the best time to visit. Post-monsoon, the landscape is incredibly lush, and the humidity remains lower, making it ideal for backwater cruising.",
    desc: "Often referred to as 'God's Own Country', Kerala is a tropical land of palm-lined beaches, lush tea plantations, and famous backwaters. Exploring the emerald green canals on a traditional wooden houseboat is a bucket-list experience for every traveler.",
    guideLink: "kerala"
  },
  { 
    id: 5, name: "Jammu-Kashmir", img: Ladakh, loc: "Leh, Ladakh", 
    when: "April to July is the primary window for visitors, as this is when the mountain passes are clear of snow and the weather is pleasant for trekking and sightseeing.",
    desc: "Ladakh is a high-altitude desert known for its dramatic mountain landscapes, crystal clear lakes like Pangong Tso, and ancient Buddhist monasteries perched on rocky cliffs. It is a haven for adventure seekers and those searching for spiritual tranquility.",
    guideLink: "ladakh"
  },
  { 
    id: 6, name: "Uttar-Pradesh", img: Varanasi, loc: "Ghats of Ganges", 
    when: "November to February offers a cool breeze from the river, making walking the ancient, narrow alleys of this spiritual city much more enjoyable.",
    desc: "Varanasi is one of the world's oldest continually inhabited cities. It is the spiritual heart of India, where pilgrims flock to the holy Ganges River. The evening Ganga Aarti at Dashashwamedh Ghat is a soul-stirring experience of fire, chants, and devotion.",
    guideLink: "varanasi"
  },
  { 
    id: 7, name: "Rajsthan", img: Udaypur, loc: "Udaipur, Rajasthan", 
    when: "September to March provides the most pleasant weather, and lake levels are typically high following the monsoon season.",
    desc: "The 'City of Lakes', Udaipur is often called the Venice of the East. With its romantic palaces rising out of Lake Pichola and the rugged Aravalli hills as a backdrop, it remains one of the most beautiful and scenic cities in India.",
    guideLink: "udaipur"
  },
  { 
    id: 8, name: "UttaraKhand", img: Rishikesh, loc: "Uttarakhand", 
    when: "March to May and late September to November are ideal. These months offer the perfect balance for river rafting and outdoor yoga retreats.",
    desc: "Nestled in the foothills of the Himalayas along the banks of the Ganges, Rishikesh is the 'Yoga Capital of the World'. It offers a perfect blend of spirituality, meditation, and high-adrenaline white-water adventure.",
    guideLink: "rishikesh"
  },
  { 
    id: 9, name: "West-Bengol", img: DARJEELING, loc: "West Bengal", 
    when: "April to June and October to December are the best times to visit, providing the clearest views of the majestic Himalayan peaks.",
    desc: "Famous for its world-class tea plantations and the historic 'Toy Train', Darjeeling offers breathtaking panoramic views of Kanchenjunga, the world's third-highest peak. Its colonial-era charm and Buddhist monasteries make it a unique mountain retreat.",
    guideLink: "darjeeling"
  },
  { 
    id: 10, name: "Andaman and Nicobar", img: AndmanNikobar, loc: "Havelock Island", 
    when: "October to May is the best time to visit, as the sea is calm, making it perfect for island hopping and water sports like scuba diving.",
    desc: "This archipelago is a tropical dream, featuring turquoise waters, pristine white sand beaches, and world-class coral reefs. Radhanagar Beach on Havelock Island is widely considered one of the best beaches in all of Asia.",
    guideLink: "andaman"
  },
  { 
    id: 11, name: "Maharashtra", img: Mahableshwar, loc: "Maharashtra", 
    when: "December to February is the peak season, though the monsoon months (June-September) transform the region into a lush green paradise filled with waterfalls.",
    desc: "A charming hill station in the Western Ghats, Mahabaleshwar is famous for its rolling strawberry farms, ancient temples, and numerous viewpoints that overlook deep, evergreen valleys.",
    guideLink: "mahabaleshwar"
  }
];

const Home = () => {
  const navigate = useNavigate();

  return (
    <div className="bg-white font-serif text-gray-800">
      
      {/* 1. Top Breadcrumb Bar */}
      <nav className="bg-[#41aab4] text-white text-[11px] py-3 px-6 uppercase tracking-wider relative z-20">
        <div className="max-w-6xl mx-auto">
          Home &nbsp; &gt; &nbsp; Inspiration for your trip &nbsp; &gt; &nbsp; 10 Indian destinations you simply can't miss
        </div>
      </nav>

      {/* 2. Hero Image Section */}
      <div className="w-full h-[110vh] relative z-10">
        <img src={HomePageFirst} alt="Main" className="w-full h-full object-cover" />
        
        {/* Marker Icon */}
        <div className="absolute top-8 right-10 group">
          <div className="bg-yellow-400 p-2 rounded-full shadow-lg cursor-pointer">
            <FaMapMarkerAlt size={20} className="text-black" />
          </div>
          <div className="absolute right-0 mt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black text-white text-xs px-3 py-1 rounded-md whitespace-nowrap shadow-lg">
            Mumbai, Maharashtra
          </div>
        </div>
      </div>

      {/* 3. Overlapping Content Wrapper */}
      <div className="relative z-30 -mt-24 sm:-mt-32 md:-mt-40">
        <div className="max-w-6xl mx-auto bg-white rounded-t-[40px] shadow-[0_-15px_30px_-15px_rgba(0,0,0,0.1)]">
          
          {/* Main Header Section */}
          <div className="max-w-3xl mx-auto pt-16 pb-12 px-6 text-center">
            <h1 className="text-3xl md:text-[54px] leading-tight font-bold mt-6">
              10 Indian destinations you simply can't miss
            </h1>
            <p className="text-lg mb-6 leading-relaxed">
              As a first-time visitor to India, you'll be tempted to see it all – from our 
              iconic cities to the spiritual wilderness. If you need to refine your 
              agenda, here's our list of the 10 most iconic places in India.
            </p>
            <p className="text-[#41aab4] font-bold text-sm uppercase tracking-widest">
              By Your Guide Name
            </p>
          </div>

          {/* Destinations List */}
          <div className="max-w-3xl mx-auto px-6 pb-20">
            <p className="text-gray-600 mb-12">
              India is a vast country with no shortage of incredible destinations and experiences. 
              Our diverse states stretch across a subcontinent, so exploring them all in one trip isn't always possible. 
              Find out what destinations should be high on your bucket list with our list of iconic places.
            </p>

            {destinations.map((place) => (
              <div key={place.id} className="mb-24">
                {/* Title */}
                <h2 className="text-2xl md:text-[42px] leading-tight font-bold mb-8">
                  {place.name}
                </h2>

                {/* Image Container */}
                <div className="relative mb-6">
                  <img src={place.img} alt={place.name} className="w-full rounded-xl shadow-sm" />
                  <p className="text-[11px] text-gray-500 mt-2 italic flex items-center">
                    📷 {place.name}, {place.loc} © Travel India Photography
                  </p>
                </div>

                {/* Description Text */}
                <div className="text-lg leading-relaxed text-gray-700 space-y-6 mb-8">
                  <p>{place.desc}</p>
                </div>

                {/* Blue "When to visit" Box */}
                <div className="bg-[#dcf3f9] p-8 rounded-2xl mb-8">
                  <h4 className="font-bold text-[#1e5c6e] text-lg mb-2">When to visit:</h4>
                  <p className="text-[#1e5c6e] leading-relaxed">
                    {place.when}
                  </p>
                </div>

                {/* "Read our Guide" Link */}
                <div className="border-b pb-12">
                   <button 
                      onClick={() => navigate(`/destination/${place.guideLink}`)}
                      className="text-lg font-bold text-gray-800 hover:text-[#41aab4] transition-colors"
                   >
                      Read our <span className="text-[#41aab4] underline">{place.name} travel guide</span>
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

export default Home;