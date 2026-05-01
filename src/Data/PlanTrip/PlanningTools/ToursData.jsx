// --- HELPER ARRAYS FOR RANDOM GENERATION ---
const categories = ["Cultural", "Adventure", "Wildlife", "Spiritual", "Luxury", "Food & Culinary", "Photography"];
const cities = [
  "Jaipur", "Udaipur", "Leh", "Rishikesh", "Varanasi", "Munnar", "Alleppey", "Kochi", "Hampi", 
  "Mysore", "Amritsar", "Darjeeling", "Gangtok", "Shillong", "Kaziranga", "Jaisalmer", 
  "Shimla", "Manali", "Agra", "Khajuraho", "Madurai", "Pondicherry", "Gokarna"
];
const tourPrefixes = ["Royal", "Ancient", "Hidden", "Mystical", "Ultimate", "Classic", "Serene", "Wild", "Grand"];
const tourSuffixes = ["Expedition", "Heritage Walk", "Retreat", "Safari", "Voyage", "Journey", "Escape", "Trail"];

const images = [
  "https://images.unsplash.com/photo-1548013146-72479768bbaa?w=600", // Agra
  "https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?w=600", // Kerala
  "https://images.unsplash.com/photo-1581791534721-e599df4417f7?w=600", // Mountains
  "https://images.unsplash.com/photo-1516426122078-c23e76319801?w=600", // Safari
  "https://images.unsplash.com/photo-1524492707947-2f85a64a6bb8?w=600", // Taj
  "https://images.unsplash.com/photo-1561359313-0639acd4dbcc?w=600", // Varanasi
  "https://images.unsplash.com/photo-1506461883276-594a12b11cf3?w=600", // Tea Gardens
  "https://images.unsplash.com/photo-1599661046289-e31897846e41?w=600", // Jaipur
  "https://images.unsplash.com/photo-1512789172734-8b09f9d300c9?w=600", // Goa
];

// --- THE GENERATOR ---
const generateTours = (count) => {
  const tours = [];
  for (let i = 1; i <= count; i++) {
    const city = cities[i % cities.length];
    const category = categories[i % categories.length];
    const prefix = tourPrefixes[i % tourPrefixes.length];
    const suffix = tourSuffixes[i % tourSuffixes.length];
    
    tours.push({
      id: i,
      name: `${prefix} ${city} ${suffix}`,
      location: `${city}, India`,
      category: category,
      image: images[i % images.length],
    });
  }
  return tours;
};

// --- FINAL DATA EXPORT ---
export const toursData = {
  title: "Find tours",
  subtitle: "Experience the best of India with curated tours.",
  description:
    "Explore over 2,000+ hand-picked experiences across the subcontinent. From the golden sands of Rajasthan to the emerald backwaters of the South, find a journey that speaks to your soul.",
  heroImg: "https://media.istockphoto.com/id/603858864/photo/walk-in-breathtaking-light-of-the-autumn-forest.jpg?s=612x612&w=0&k=20&c=tUACkE8zBU3qrL-Z-kMEPbAGcllira0mHpj11vtJDM0=",

  categories: [
    "All", "Cultural", "Adventure", "Wildlife", "Spiritual", "Luxury", "Food & Culinary", "Photography"
  ],

  // This automatically fills with 2,000 unique objects
  tourList: generateTours(2000)
};