// Import the local kangaroo image
import kangarooImg from "../../../assets/images/Kangaroo.png"; 

export const plannerData = {
  title: "Choose a type of holiday",
  adventureTitle: "After an adventure?",
  
  // Guides Array: Contains all information for the initial selection screen
  guides: [
    {
      id: 1,
      title: "BEACH & ISLANDS GUIDE",
      img: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&q=80&w=800",
      textTitle: "G'day",
      // 10 UNIQUE IMAGES for Beach/Island Adventure
      adventureImages: [
        "https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&q=80&w=800", // Kayaking
        "https://images.unsplash.com/photo-1581691404172-52a129486c9d?auto=format&fit=crop&q=80&w=800", // Surfing
        "https://images.unsplash.com/photo-1506929562872-bb421503ef21?auto=format&fit=crop&q=80&w=800", // Beach Cave
        "https://images.unsplash.com/photo-1473496169904-658ba7c44d8a?auto=format&fit=crop&q=80&w=800", // Coral Reef
        "https://images.unsplash.com/photo-1510414842594-a61c69b5ae57?auto=format&fit=crop&q=80&w=800", // Paddleboarding
        "https://images.unsplash.com/photo-1533105079780-92b9be482077?auto=format&fit=crop&q=80&w=800", // Sailing
        "https://images.unsplash.com/photo-1493246507139-91e8bef99c02?auto=format&fit=crop&q=80&w=800", // Snorkeling
        "https://images.unsplash.com/photo-1447752875215-b2761acb3c5d?auto=format&fit=crop&q=80&w=800", // Island View
        "https://images.unsplash.com/photo-1512100356136-bd14ce6387a9?auto=format&fit=crop&q=80&w=800", // Shells/Sand
        "https://images.unsplash.com/photo-1517059224940-d4af9eec41b7?auto=format&fit=crop&q=80&w=800"  // Beach Volleyball
      ]
    },
    {
      id: 2,
      title: "CITY ESCAPES GUIDE",
      img: "https://images.unsplash.com/photo-1506973035872-a4ec16b8e8d9?auto=format&fit=crop&q=80&w=800",
      textTitle: "G'day",
      // 10 UNIQUE IMAGES for City Adventure
      adventureImages: [
        "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?auto=format&fit=crop&q=80&w=800", // Paris Skyline
        "https://images.unsplash.com/photo-1517109724104-d4af9eec41b7?auto=format&fit=crop&q=80&w=800", // City Street Life
        "https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?auto=format&fit=crop&q=80&w=800", // Rooftop View
        "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&q=80&w=800", // Modern Architecture
        "https://images.unsplash.com/photo-1531971512-bc78809e5b22?auto=format&fit=crop&q=80&w=800", // London Eye
        "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&q=80&w=800", // Cafe Culture
        "https://images.unsplash.com/photo-1513364776144-60967b0f800f?auto=format&fit=crop&q=80&w=800", // Museum Interior
        "https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?auto=format&fit=crop&q=80&w=800", // Art Gallery
        "https://images.unsplash.com/photo-1533105079780-92b9be482077?auto=format&fit=crop&q=80&w=800", // City Lights Night
        "https://images.unsplash.com/photo-1502784444187-359ac186c5bb?auto=format&fit=crop&q=80&w=800"  // Urban Kayaking
      ]
    },
    {
      id: 3,
      title: "NATURE GUIDE",
      img: "https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&q=80&w=800",
      textTitle: "G'day",
      // 10 UNIQUE IMAGES for Nature Adventure
      adventureImages: [
        "https://images.unsplash.com/photo-1501555088652-021faa106b9b?auto=format&fit=crop&q=80&w=800", // Hiking Trail
        "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&q=80&w=800", // Mountains/Forest
        "https://images.unsplash.com/photo-1472214103451-9374bd1c798e?auto=format&fit=crop&q=80&w=800", // Green Field
        "https://images.unsplash.com/photo-1433086966358-54859d0ed716?auto=format&fit=crop&q=80&w=800", // Stream in Forest
        "https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&q=80&w=800", // Majestic Waterfall
        "https://images.unsplash.com/photo-1518118012659-197e88029b3c?auto=format&fit=crop&q=80&w=800", // Desert Landscape
        "https://images.unsplash.com/photo-1502784444187-359ac186c5bb?auto=format&fit=crop&q=80&w=800", // Grand Canyon
        "https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?auto=format&fit=crop&q=80&w=800", // Red Woods
        "https://images.unsplash.com/photo-1501555088652-021faa106b9b?auto=format&fit=crop&q=80&w=800", // Glacier/Ice
        "https://images.unsplash.com/photo-1506973035872-a4ec16b8e8d9?auto=format&fit=crop&q=80&w=800"  // Rocky Cliffs
      ]
    }
  ],
  // Persistent Kangaroo image
  kangarooImg: kangarooImg 
};