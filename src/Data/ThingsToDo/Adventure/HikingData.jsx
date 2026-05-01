export const HikingData = {
  hero: {
    bannerImg: "https://images.unsplash.com/photo-1501555088652-021faa106b9b?q=80&w=1600",
    title: "Hiking and trekking journeys",
    description: "Dreaming of the open trail? From the expansive Himalayan peaks to dramatic Western Ghats routes and lush green valleys, there’s no better place to traverse on foot than India."
  },
  
  categories: [
    { id: 1, title: "Iconic mountain treks", img: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?q=80&w=800" },
    { id: 2, title: "Wildflower valley walks", img: "https://images.unsplash.com/photo-1472712739516-7ad2b786e1f7?q=80&w=800" },
    { id: 3, title: "Cultural village trails", img: "https://images.unsplash.com/photo-1582234372481-47acc7114940?q=80&w=800" },
    { id: 4, title: "High altitude passes", img: "https://images.unsplash.com/photo-1527668752968-14dc70a27c95?q=80&w=800" }
  ],

  itineraries: [
    // --- CATEGORY 1: Iconic mountain treks (6 Treks) ---
    {
      id: 1,
      categoryTitle: "Iconic mountain treks",
      title: "3-day Hampta Pass Trek",
      location: "Himachal Pradesh",
      img: "https://picsum.photos/seed/hike1/800/600",
      tags: "Mountain Treks • Weekend",
      description: "A breathtaking crossover trek from the lush green Kullu valley to the desert landscape of Lahaul.",
      plan: [
        { day: 1, title: "Drive to Jobra & Trek to Chika", detail: "Experience pine forests and the first glimpse of mountains." },
        { day: 2, title: "Chika to Balu ka Ghera", detail: "A gradual ascent alongside the river with wildflower meadows." },
        { day: 3, title: "Pass Crossing & Descent", detail: "Cross the Hampta Pass at 14,000ft before descending to Chatru." }
      ]
    },
    { id: 2, categoryTitle: "Iconic mountain treks", title: "Kedar Kantha Trek", location: "Uttarakhand", tags: "Winter • 6 Days", img: "https://picsum.photos/seed/hike2/800/600", description: "The most popular winter trek in India.", plan: [] },
    { id: 3, categoryTitle: "Iconic mountain treks", title: "Beas Kund Trek", location: "Himachal", tags: "Beginner • 3 Days", img: "https://picsum.photos/seed/hike3/800/600", description: "Trek to the source of the Beas River.", plan: [] },
    { id: 4, categoryTitle: "Iconic mountain treks", title: "Sandakphu Trek", location: "West Bengal", tags: "Classic • 7 Days", img: "https://picsum.photos/seed/hike4/800/600", description: "The only trek to see four of the world's five highest peaks.", plan: [] },
    { id: 5, categoryTitle: "Iconic mountain treks", title: "Triund Hill", location: "Dharamshala", tags: "Weekend • 2 Days", img: "https://picsum.photos/seed/hike5/800/600", description: "A beautiful trek overlooking the Dhauladhar range.", plan: [] },
    { id: 6, categoryTitle: "Iconic mountain treks", title: "Brahmatal", location: "Uttarakhand", tags: "Snow • 6 Days", img: "https://picsum.photos/seed/hike6/800/600", description: "Trek to a high-altitude frozen lake.", plan: [] },

    // --- CATEGORY 2: Wildflower valley walks (6 Treks) ---
    {
      id: 7,
      categoryTitle: "Wildflower valley walks",
      title: "5-day Valley of Flowers",
      location: "Uttarakhand",
      img: "https://picsum.photos/seed/hike7/800/600",
      tags: "Nature • UNESCO Heritage",
      description: "Walk through a vibrant carpet of flowers in this world-famous glacial valley.",
      plan: [
        { day: 1, title: "Govindghat Arrival", detail: "Base camp preparation." },
        { day: 2, title: "Trek to Ghangaria", detail: "Ascend along the Pushpawati River." },
        { day: 3, title: "Valley Exploration", detail: "Surrounded by rare Himalayan flora." },
        { day: 4, title: "Hemkund Sahib", detail: "Steep trek to the sacred lake." },
        { day: 5, title: "Return Descent", detail: "Trek back to base." }
      ]
    },
    { id: 8, categoryTitle: "Wildflower valley walks", title: "Dzukou Valley", location: "Nagaland", tags: "Scenic • 4 Days", img: "https://picsum.photos/seed/hike8/800/600", description: "Known for its endemic Dzukou Lily.", plan: [] },
    { id: 9, categoryTitle: "Wildflower valley walks", title: "Yumthang Valley", location: "Sikkim", tags: "Spring • 3 Days", img: "https://picsum.photos/seed/hike9/800/600", description: "The Rhododendron sanctuary of the East.", plan: [] },
    { id: 10, categoryTitle: "Wildflower valley walks", title: "Kaas Plateau", location: "Maharashtra", tags: "One Day • Flora", img: "https://picsum.photos/seed/hike10/800/600", description: "Maharashtra's UNESCO heritage flower site.", plan: [] },
    { id: 11, categoryTitle: "Wildflower valley walks", title: "Har Ki Dun", location: "Uttarakhand", tags: "Cradle • 7 Days", img: "https://picsum.photos/seed/hike11/800/600", description: "The ancient valley of the gods.", plan: [] },
    { id: 12, categoryTitle: "Wildflower valley walks", title: "Bhrigu Lake", location: "Himachal", tags: "Meadows • 4 Days", img: "https://picsum.photos/seed/hike12/800/600", description: "High altitude alpine meadows.", plan: [] },

    // --- CATEGORY 3: Cultural village trails (6 Treks) ---
    { id: 13, categoryTitle: "Cultural village trails", title: "Malana Village Trek", location: "Himachal", tags: "History • 2 Days", img: "https://picsum.photos/seed/hike13/800/600", description: "Visit the world's oldest democracy.", plan: [] },
    { id: 14, categoryTitle: "Cultural village trails", title: "Spiti Homestay Trail", location: "Spiti", tags: "Remote • 10 Days", img: "https://picsum.photos/seed/hike14/800/600", description: "Immerse in Tibetan Buddhist culture.", plan: [] },
    { id: 15, categoryTitle: "Cultural village trails", title: "Kumaon Village Walk", location: "Uttarakhand", tags: "Rural • 5 Days", img: "https://picsum.photos/seed/hike15/800/600", description: "Traditional stone architecture and local cuisine.", plan: [] },
    { id: 16, categoryTitle: "Cultural village trails", title: "Ziro Valley Trail", location: "Arunachal", tags: "Tribal • 4 Days", img: "https://picsum.photos/seed/hike16/800/600", description: "Land of the Apatani tribes.", plan: [] },
    { id: 17, categoryTitle: "Cultural village trails", title: "Chembra Peak", location: "Kerala", tags: "Tea • 1 Day", img: "https://picsum.photos/seed/hike17/800/600", description: "Through coffee and tea estates in Wayanad.", plan: [] },
    { id: 18, categoryTitle: "Cultural village trails", title: "Tirthan Valley Trail", location: "Himachal", tags: "Nature • 4 Days", img: "https://picsum.photos/seed/hike18/800/600", description: "A UNESCO Heritage National Park village trail.", plan: [] },

    // --- CATEGORY 4: High altitude passes (7 Treks) ---
    { id: 19, categoryTitle: "High altitude passes", title: "Pin Parvati Pass", location: "Himachal", tags: "Epic • 11 Days", img: "https://picsum.photos/seed/hike19/800/600", description: "A massive pass crossover between two valleys.", plan: [] },
    { id: 20, categoryTitle: "High altitude passes", title: "Rupin Pass", location: "Uttarakhand", tags: "Waterfall • 8 Days", img: "https://picsum.photos/seed/hike20/800/600", description: "Dramatic changes in landscape every hour.", plan: [] },
    { id: 21, categoryTitle: "High altitude passes", title: "Buran Ghati", location: "Himachal", tags: "Thrilling • 7 Days", img: "https://picsum.photos/seed/hike21/800/600", description: "Features an ice-wall rappel.", plan: [] },
    { id: 22, categoryTitle: "High altitude passes", title: "Bali Pass", location: "Uttarakhand", tags: "Summit • 8 Days", img: "https://picsum.photos/seed/hike22/800/600", description: "Connects Yamunotri to Har Ki Dun.", plan: [] },
    { id: 23, categoryTitle: "High altitude passes", title: "Indrahar Pass", location: "Himachal", tags: "Dhauladhar • 4 Days", img: "https://picsum.photos/seed/hike23/800/600", description: "Overlooks the entire Kangra Valley.", plan: [] },
    { id: 24, categoryTitle: "High altitude passes", title: "Goecha La", location: "Sikkim", tags: "Hard • 10 Days", img: "https://picsum.photos/seed/hike24/800/600", description: "Trek to the base of Kanchenjunga.", plan: [] },
    { 
      id: 25, 
      categoryTitle: "High altitude passes", 
      title: "Trans-Himalayan Traverse", 
      location: "Ladakh", 
      tags: "Professional • 25 Days", 
      img: "https://picsum.photos/seed/hike25/800/600", 
      description: "The ultimate survival and endurance journey across the Himalayas.",
      plan: Array.from({ length: 25 }, (_, i) => ({
        day: i + 1,
        title: `Stage ${i + 1}`,
        detail: "Traversing glaciers, moraines, and high-altitude plateaus."
      }))
    }
  ]
};