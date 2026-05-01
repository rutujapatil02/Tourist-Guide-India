export const SkydivingData = {
  hero: {
    title: "Adventure Activities and Sports in India",
    subtitle: "From coastal drops in Pondicherry to Himalayan views in Bir Billing, feel the ultimate adrenaline rush.",
    bannerImg: "https://images.unsplash.com/photo-1521017432531-fbd92d768814?q=80&w=1600",
  },
  // 25 records for the horizontal slider
  records: Array.from({ length: 25 }, (_, i) => ({
    id: i + 1,
    title: ["Tandem Jump", "Sky High Dive", "Blue Water Leap", "Himalayan Drop", "Coastal Freefall"][i % 5] + ` ${Math.floor(i/5 + 1)}`,
    location: ["Pondicherry", "Bir Billing", "Dhana", "Mysuru", "Hyderabad"][i % 5],
    img: `https://picsum.photos/seed/sky${i}/800/600`,
    description: "Experience the thrill of a lifetime with certified instructors and world-class equipment.",
    tags: ["Adrenaline", "Must Try"]
  })),
  // Data for the Travellers' Stories grid
  stories: [
    { id: 1, img: "https://images.unsplash.com/photo-1520116468816-95b69f847357?q=80&w=600" },
    { id: 2, img: "https://images.unsplash.com/photo-1506701063544-7744b97483ee?q=80&w=600" },
    { id: 3, img: "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?q=80&w=600" },
    { id: 4, img: "https://images.unsplash.com/photo-1533387558662-ee203940131d?q=80&w=600" }
  ]
};