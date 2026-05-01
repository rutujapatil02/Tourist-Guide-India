// Path: src/Data/ThingsToDo/Adventure/SurfingData.js

export const SurfingData = {
  hero: {
    title: "Surfing and Water Sports in India",
    subtitle: "From the pristine swells of the Andaman Islands to the vibrant surf culture of Varkala.",
    bannerImg: "https://images.unsplash.com/photo-1502680390469-be75c86b636f?q=80&w=1600",
  },
  // Generates 25 unique records for the slider
  records: Array.from({ length: 25 }, (_, i) => ({
    id: i + 1,
    title: i % 2 === 0 ? "Varkala Cliff Surf" : "Manapad Point Break",
    location: i % 2 === 0 ? "Kerala" : "Tamil Nadu",
    img: `https://picsum.photos/seed/surf${i}/800/600`, 
    description: "Experience the ultimate thrill of Indian waters. Perfect for both beginners and seasoned surfers looking for consistent swells.",
    tags: ["Top Rated", "Coastal India", "Adventure"]
  })),
  stories: [
    { id: 1, img: "https://images.unsplash.com/photo-1528150177508-7cc0c36cda5c?q=80&w=600" },
    { id: 2, img: "https://images.unsplash.com/photo-1505673542670-a5e3ff5b14a3?q=80&w=600" },
    { id: 3, img: "https://images.unsplash.com/photo-1502933691298-84fa1463cf82?q=80&w=600" },
    { id: 4, img: "https://images.unsplash.com/photo-1469395262402-89736f865063?q=80&w=600" }
  ]
};