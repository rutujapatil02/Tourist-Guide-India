import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';

const Destinations = () => {
  const { slug } = useParams();
  const navigate = useNavigate();

  // Expanded data to match the 11 places in your Home.jsx
  const destinationDetails = {
    tajmahal: {
      title: "Taj Mahal",
      location: "Agra, Uttar Pradesh",
      fullDesc: "The Taj Mahal is an ivory-white marble mausoleum on the right bank of the river Yamuna. A UNESCO World Heritage site, it stands as the ultimate symbol of love and Mughal architectural brilliance. Built by Emperor Shah Jahan in memory of his wife Mumtaz Mahal, it attracts millions of visitors who come to see its perfect symmetry and intricate floral stone inlays.",
      when: "October to March offers the most comfortable weather. Sunrise is the magical hour when the marble glows in soft pink hues.",
      event: "Taj Mahotsav (February) - A 10-day cultural festival showcasing Indian crafts and classical arts."
    },
    jaipur: {
      title: "Jaipur",
      location: "Rajasthan",
      fullDesc: "Known as the 'Pink City', Jaipur is a captivating blend of royal history and vibrant street life. From the honeycomb windows of Hawa Mahal to the massive ramparts of Amer Fort, the city is a living museum of Rajput architecture. It forms the famous Golden Triangle along with Delhi and Agra.",
      when: "November to February. The winter months are perfect for exploring the palaces without the intense desert heat.",
      event: "Jaipur Literature Festival (January) - The world's largest free literary festival."
    },
    goa: {
      title: "Goa",
      location: "West Coast of India",
      fullDesc: "Goa is India's pocket-sized paradise, famous for its blend of Indian and Portuguese cultures. Whether you are looking for the vibrant nightlife of North Goa or the serene, untouched beaches of the South, Goa offers a unique laid-back 'Susegad' lifestyle.",
      when: "Mid-November to Mid-February. This is when the weather is perfect and all the beach shacks are fully operational.",
      event: "Goa Carnival (February) - A colorful street parade with music, dancing, and floats."
    },
    kerla: {
      title: "Kerala",
      location: "South India",
      fullDesc: "Often referred to as 'God's Own Country', Kerala is a tropical land of palm-lined beaches, lush tea plantations, and the famous backwaters. Exploring the emerald green waters on a traditional wooden houseboat is a bucket-list experience for any traveler.",
      when: "September to March. Post-monsoon, the landscape is incredibly lush and the humidity is lower.",
      event: "Onam (August/September) - The harvest festival featuring spectacular snake boat races."
    },
    ladakh: {
      title: "Ladakh",
      location: "Himalayan Region",
      fullDesc: "Ladakh is a high-altitude desert known for its dramatic mountain landscapes, crystal clear lakes like Pangong Tso, and ancient Buddhist monasteries perched on rocky cliffs. It is a haven for adventure seekers and those looking for spiritual peace.",
      when: "April to July. This is the only time the mountain passes are clear of snow and the weather is pleasant for trekking.",
      event: "Hemis Festival (June) - A colorful masked dance festival held at the Hemis Monastery."
    },
    varanasi: {
      title: "Varanasi",
      location: "Uttar Pradesh",
      fullDesc: "Varanasi is one of the world's oldest continually inhabited cities. It is the spiritual heart of India, where pilgrims flock to the holy Ganges River to perform rituals. The evening Ganga Aarti at Dashashwamedh Ghat is a soul-stirring experience of fire and chants.",
      when: "November to February. The cool breeze from the river makes walking the ancient narrow alleys much more enjoyable.",
      event: "Dev Deepawali (November) - When the entire riverfront is lit with millions of earthen lamps."
    },
    udaypur: {
      title: "Udaipur",
      location: "Rajasthan",
      fullDesc: "The 'City of Lakes', Udaipur is often called the Venice of the East. With its romantic palaces rising out of Lake Pichola and the rugged Aravalli hills as a backdrop, it is arguably India's most beautiful city.",
      when: "September to March. The weather is cool, and the lake levels are usually high after the monsoon.",
      event: "Mewar Festival (March/April) - A festival welcoming spring with traditional music and dance."
    },
    rishikesh: {
      title: "Rishikesh",
      location: "Uttarakhand",
      fullDesc: "Nestled in the foothills of the Himalayas along the Ganges, Rishikesh is the 'Yoga Capital of the World'. It gained global fame after the Beatles visited in the 60s and remains a hub for meditation, white-water rafting, and trekking.",
      when: "March to May and late September to November. Avoid the monsoon if you plan on river rafting.",
      event: "International Yoga Festival (March) - A week-long celebration of yogic sciences."
    },
    darjeeling: {
      title: "Darjeeling",
      location: "West Bengal",
      fullDesc: "Famous for its world-class tea and the historic 'Toy Train' railway, Darjeeling offers spectacular views of Kanchenjunga, the world's third-highest peak. The colonial-era architecture and Buddhist monasteries add to its unique charm.",
      when: "April to June and October to December. These months provide the clearest views of the Himalayan peaks.",
      event: "Teesta Tea & Tourism Festival - A celebration of the region's famous tea culture."
    },
    andmannikobar: {
      title: "Andaman & Nicobar",
      location: "Bay of Bengal",
      fullDesc: "This archipelago is a tropical dream, featuring turquoise waters, white sand beaches, and world-class scuba diving spots. Radhanagar Beach on Havelock Island is consistently ranked among the best beaches in Asia.",
      when: "October to May. The sea is calm during this period, making it ideal for water sports and island hopping.",
      event: "Island Tourism Festival (January) - A 10-day festival highlighting the local tribal culture and food."
    },
    mahabaleshwar: {
      title: "Mahabaleshwar",
      location: "Maharashtra",
      fullDesc: "A hill station in the Western Ghats, Mahabaleshwar is famous for its strawberries, ancient temples, and numerous viewpoints overlooking deep valleys. It was once the summer capital of the Bombay Presidency during the British Raj.",
      when: "December to February is the peak season, though the monsoon (June-September) makes the region incredibly green with many waterfalls.",
      event: "Strawberry Festival (March/April) - Held at Mapro Garden, celebrating the harvest with fresh fruit and cream."
    }
  };

  const current = destinationDetails[slug];

  if (!current) {
    return (
      <div className="max-w-4xl mx-auto py-20 text-center font-serif">
        <h2 className="text-3xl font-bold">Destination Not Found</h2>
        <button onClick={() => navigate('/')} className="mt-4 text-teal-600 underline">Return Home</button>
      </div>
    );
  }

  return (
    <div className="bg-white font-serif text-gray-800">
      {/* Editorial Breadcrumb */}
      <nav className="bg-[#41aab4] text-white text-[11px] py-3 px-6 uppercase tracking-wider">
        <div className="max-w-4xl mx-auto">
          Home &nbsp; &gt; &nbsp; Destinations &nbsp; &gt; &nbsp; {current.title}
        </div>
      </nav>

      <div className="max-w-3xl mx-auto py-16 px-6">
        {/* Back Button */}
        <button 
          onClick={() => navigate('/')}
          className="mb-10 text-sm font-bold text-[#41aab4] uppercase tracking-widest hover:opacity-70 transition"
        >
          ← Back to Top 10 List
        </button>

        {/* Heading Section */}
        <h1 className="text-[54px] leading-tight font-bold mb-4 text-gray-900">{current.title}</h1>
        <p className="text-[#41aab4] font-bold text-sm uppercase tracking-widest mb-10 italic">
          📍 {current.location}
        </p>

        {/* Content Section */}
        <div className="text-lg leading-relaxed text-gray-700 space-y-8 mb-12">
          <p className="first-letter:text-5xl first-letter:font-bold first-letter:float-left first-letter:mr-3">
            {current.fullDesc}
          </p>
        </div>

        {/* Event Section */}
        <div className="mb-12 border-l-4 border-orange-400 pl-6 py-2">
          <h3 className="text-xl font-bold text-gray-900 mb-2">Major Event</h3>
          <p className="text-gray-700 italic">{current.event}</p>
        </div>

        {/* Blue "When to visit" Box (Matching your screenshot) */}
        <div className="bg-[#dcf3f9] p-8 rounded-2xl mb-12">
          <h4 className="font-bold text-[#1e5c6e] text-lg mb-2">When to visit:</h4>
          <p className="text-[#1e5c6e] leading-relaxed">
            {current.when}
          </p>
        </div>

        {/* Footer of Article */}
        <div className="border-t pt-10 text-center">
          <p className="text-gray-500 text-sm italic">
            Ready to explore? Book your local guide or check transportation options for {current.title}.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Destinations;