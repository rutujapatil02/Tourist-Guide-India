// --- HELPER ARRAYS FOR VARIETY ---
const transportTypes = ["Luxury Train", "Private Chauffeur", "Domestic Flight", "Ferry & Cruise", "Intercity Bus", "Metro & Rail"];
const cities = ["New Delhi", "Mumbai", "Bangalore", "Kochi", "Goa", "Kolkata", "Udaipur", "Amritsar", "Chennai", "Hyderabad"];
const transportImages = [
  "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?w=800", // Modern Bus
  "https://images.unsplash.com/photo-1474487548417-781cb71495f3?w=800", // Indian Railway
  "https://images.unsplash.com/photo-1559136555-9303baea8ebd?w=800", // Airplane
  "https://images.unsplash.com/photo-1569154941061-e231b4725ef1?w=800", // Luxury Car
  "https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?w=800", // Rickshaw/Auto
];

const generateTransport = (count) => {
  const transport = [];
  for (let i = 1; i <= count; i++) {
    const type = transportTypes[i % transportTypes.length];
    const city = cities[i % cities.length];
    transport.push({
      id: i,
      name: `${type} - ${city} Express`,
      location: `${city}, India`,
      category: type,
      image: transportImages[i % transportImages.length],
    });
  }
  return transport;
};

export const transportData = {
  title: "Find transport",
  subtitle: "Seamlessly navigate the vibrant landscapes of India.",
  description: "From iconic heritage trains to modern private jets, choose from our 200+ curated transport options designed for comfort and efficiency.",
  
  // 🔹 HERO IMAGE URL
  heroImg: "https://images.unsplash.com/photo-1501785888041-af3ef285b470?q=80&w=1600", 

  categories: ["All", ...transportTypes],
  
  // Generates exactly 205 items
  transportList: generateTransport(205)
};