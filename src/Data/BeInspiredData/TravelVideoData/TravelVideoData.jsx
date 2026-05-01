// TravelVideoData.jsx
// Place this in: src/Data/BeInspiredData/TravelVideoData/TravelVideoData.jsx

export const travelVideoData = [
  {
    id: 1,
    title: "The Golden Temple: A Spiritual Dawn",
    img: "https://images.unsplash.com/photo-1585123334904-845d60e97b29?w=1200&auto=format&fit=crop",
    category: "Spiritual",
    location: "Amritsar, Punjab",
    duration: "0:45",
  },
  {
    id: 2,
    title: "Backwaters of Kerala: Serenity in Green",
    img: "https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?w=1200&auto=format&fit=crop",
    category: "Nature",
    location: "Alleppey, Kerala",
    duration: "1:20",
  },
  {
    id: 3,
    title: "Himalayan Highs: Spiti Valley Roads",
    img: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1200&auto=format&fit=crop",
    category: "Adventure",
    location: "Spiti, Himachal Pradesh",
    duration: "2:15",
  },
  {
    id: 4,
    title: "Colors of Rajasthan: The Blue City",
    img: "https://images.unsplash.com/photo-1477587458883-47145ed94245?w=1200&auto=format&fit=crop",
    category: "Heritage",
    location: "Jodhpur, Rajasthan",
    duration: "0:55",
  },
  {
    id: 5,
    title: "Banaras Ghats: The Eternal Flame",
    img: "https://images.unsplash.com/photo-1561361513-2d000a50f0dc?w=1200&auto=format&fit=crop",
    category: "Culture",
    location: "Varanasi, Uttar Pradesh",
    duration: "3:00",
  },
  {
    id: 6,
    title: "Meghalaya: Living Root Bridges",
    img: "https://images.unsplash.com/photo-1503516459261-40c66117780a?w=1200&auto=format&fit=crop",
    category: "Eco-Travel",
    location: "Cherrapunji, Meghalaya",
    duration: "1:45",
  },
];

// travelVideoData2 — used in TravelVideoSection & TravelVideoPlayer
// Each item has a preview image and 4 story slides (images used as placeholders for videos)
export const travelVideoData2 = [
  {
    id: 1,
    title: "Varanasi: City of Eternal Light",
    img: "https://images.unsplash.com/photo-1561361513-2d000a50f0dc?w=1400&auto=format&fit=crop",
    location: "Varanasi, Uttar Pradesh",
    tag: "Spiritual",
    featuredVideoUrl: "", // large featured video
    featuredVideoThumb: "https://images.unsplash.com/photo-1561361513-2d000a50f0dc?w=1400&auto=format&fit=crop",
    featuredVideoTitle: "Ganga Aarti: The Sacred River Ritual",
    relatedCards: [
      {
        id: "rv-1-1",
        title: "Dawn Boat Ride on the Ganges",
        img: "https://images.unsplash.com/photo-1561361513-2d000a50f0dc?w=600&auto=format&fit=crop",
      },
      {
        id: "rv-1-2",
        title: "The Ancient Ghats",
        img: "https://images.unsplash.com/photo-1567157577867-05ccb1388e66?w=600&auto=format&fit=crop",
      },
      {
        id: "rv-1-3",
        title: "Silk Weaving of Banaras",
        img: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&auto=format&fit=crop",
      },
      {
        id: "rv-1-4",
        title: "Street Food of the Oldest City",
        img: "https://images.unsplash.com/photo-1565557623262-b51c2513a641?w=600&auto=format&fit=crop",
      },
    ],
    stories: [
      {
        id: 101,
        url: "https://images.unsplash.com/photo-1561361513-2d000a50f0dc?w=900&auto=format&fit=crop",
        type: "image",
        caption: "The eternal ghats at sunrise",
      },
      {
        id: 102,
        url: "https://images.unsplash.com/photo-1567157577867-05ccb1388e66?w=900&auto=format&fit=crop",
        type: "image",
        caption: "Priests performing the Ganga Aarti",
      },
      {
        id: 103,
        url: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=900&auto=format&fit=crop",
        type: "image",
        caption: "Boats on the sacred river",
      },
      {
        id: 104,
        url: "https://images.unsplash.com/photo-1565557623262-b51c2513a641?w=900&auto=format&fit=crop",
        type: "image",
        caption: "The city that never sleeps",
      },
    ],
  },
  {
    id: 2,
    title: "Rajasthan: Kingdom of Colours",
    img: "https://images.unsplash.com/photo-1477587458883-47145ed94245?w=1400&auto=format&fit=crop",
    location: "Jaipur & Jodhpur, Rajasthan",
    tag: "Heritage",
    featuredVideoUrl: "https://www.w3schools.com/html/mov_bbb.mp4",
    featuredVideoThumb: "https://images.unsplash.com/photo-1477587458883-47145ed94245?w=1400&auto=format&fit=crop",
    featuredVideoTitle: "Desert Palaces: The Rajput Legacy",
    relatedCards: [
      {
        id: "rv-2-1",
        title: "Hawa Mahal at Golden Hour",
        img: "https://images.unsplash.com/photo-1477587458883-47145ed94245?w=600&auto=format&fit=crop",
      },
      {
        id: "rv-2-2",
        title: "Blue City Rooftop Views",
        img: "https://images.unsplash.com/photo-1524492412937-b28074a5d7da?w=600&auto=format&fit=crop",
      },
      {
        id: "rv-2-3",
        title: "Camel Safari in Thar Desert",
        img: "https://images.unsplash.com/photo-1466978913421-dad2ebd01d17?w=600&auto=format&fit=crop",
      },
      {
        id: "rv-2-4",
        title: "Pushkar Fair: Tradition Lives",
        img: "https://images.unsplash.com/photo-1519046904884-53103b34b206?w=600&auto=format&fit=crop",
      },
    ],
    stories: [
      {
        id: 201,
        url: "https://images.unsplash.com/photo-1477587458883-47145ed94245?w=900&auto=format&fit=crop",
        type: "image",
        caption: "Hawa Mahal — Palace of Winds",
      },
      {
        id: 202,
        url: "https://images.unsplash.com/photo-1524492412937-b28074a5d7da?w=900&auto=format&fit=crop",
        type: "image",
        caption: "Mehrangarh Fort, Jodhpur",
      },
      {
        id: 203,
        url: "https://images.unsplash.com/photo-1466978913421-dad2ebd01d17?w=900&auto=format&fit=crop",
        type: "image",
        caption: "The Thar Desert at dusk",
      },
      {
        id: 204,
        url: "https://images.unsplash.com/photo-1519046904884-53103b34b206?w=900&auto=format&fit=crop",
        type: "image",
        caption: "Vibrant culture of Rajputana",
      },
    ],
  },
  {
    id: 3,
    title: "Kerala: God's Own Country",
    img: "https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?w=1400&auto=format&fit=crop",
    location: "Alleppey & Munnar, Kerala",
    tag: "Nature",
    featuredVideoUrl: "https://www.w3schools.com/html/mov_bbb.mp4",
    featuredVideoThumb: "https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?w=1400&auto=format&fit=crop",
    featuredVideoTitle: "Backwater Bliss: Life on the Canals",
    relatedCards: [
      {
        id: "rv-3-1",
        title: "Houseboat Mornings",
        img: "https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?w=600&auto=format&fit=crop",
      },
      {
        id: "rv-3-2",
        title: "Munnar Tea Gardens",
        img: "https://images.unsplash.com/photo-1581791534721-e599df4417f7?w=600&auto=format&fit=crop",
      },
      {
        id: "rv-3-3",
        title: "Kathakali: The Dance Drama",
        img: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&auto=format&fit=crop",
      },
      {
        id: "rv-3-4",
        title: "Kovalam Beach Sunsets",
        img: "https://images.unsplash.com/photo-1519046904884-53103b34b206?w=600&auto=format&fit=crop",
      },
    ],
    stories: [
      {
        id: 301,
        url: "https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?w=900&auto=format&fit=crop",
        type: "image",
        caption: "Alleppey backwaters at dawn",
      },
      {
        id: 302,
        url: "https://images.unsplash.com/photo-1581791534721-e599df4417f7?w=900&auto=format&fit=crop",
        type: "image",
        caption: "Rolling tea estates of Munnar",
      },
      {
        id: 303,
        url: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=900&auto=format&fit=crop",
        type: "image",
        caption: "The Western Ghats in monsoon",
      },
      {
        id: 304,
        url: "https://images.unsplash.com/photo-1565557623262-b51c2513a641?w=900&auto=format&fit=crop",
        type: "image",
        caption: "Spice markets and local cuisine",
      },
    ],
  },
  {
    id: 4,
    title: "Himalayas: Roof of the World",
    img: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1400&auto=format&fit=crop",
    location: "Ladakh & Spiti, North India",
    tag: "Adventure",
    featuredVideoUrl: "https://www.w3schools.com/html/mov_bbb.mp4",
    featuredVideoThumb: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1400&auto=format&fit=crop",
    featuredVideoTitle: "Beyond the Clouds: Ladakh's High Passes",
    relatedCards: [
      {
        id: "rv-4-1",
        title: "Pangong Lake at Sunrise",
        img: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600&auto=format&fit=crop",
      },
      {
        id: "rv-4-2",
        title: "Monastery Life in Spiti",
        img: "https://images.unsplash.com/photo-1503516459261-40c66117780a?w=600&auto=format&fit=crop",
      },
      {
        id: "rv-4-3",
        title: "The Leh Palace",
        img: "https://images.unsplash.com/photo-1524492412937-b28074a5d7da?w=600&auto=format&fit=crop",
      },
      {
        id: "rv-4-4",
        title: "Zanskar River Rafting",
        img: "https://images.unsplash.com/photo-1466978913421-dad2ebd01d17?w=600&auto=format&fit=crop",
      },
    ],
    stories: [
      {
        id: 401,
        url: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=900&auto=format&fit=crop",
        type: "image",
        caption: "Himalayan peaks pierce the sky",
      },
      {
        id: 402,
        url: "https://images.unsplash.com/photo-1503516459261-40c66117780a?w=900&auto=format&fit=crop",
        type: "image",
        caption: "Ancient monasteries on cliffsides",
      },
      {
        id: 403,
        url: "https://images.unsplash.com/photo-1477587458883-47145ed94245?w=900&auto=format&fit=crop",
        type: "image",
        caption: "Pangong Tso — the blue jewel",
      },
      {
        id: 404,
        url: "https://images.unsplash.com/photo-1561361513-2d000a50f0dc?w=900&auto=format&fit=crop",
        type: "image",
        caption: "Stargazing in the high altitude desert",
      },
    ],
  },
  {
    id: 5,
    title: "Punjab: The Golden Heartland",
    img: "https://images.unsplash.com/photo-1585123334904-845d60e97b29?w=1400&auto=format&fit=crop",
    location: "Amritsar, Punjab",
    tag: "Spiritual",
    featuredVideoUrl: "https://www.w3schools.com/html/mov_bbb.mp4",
    featuredVideoThumb: "https://images.unsplash.com/photo-1585123334904-845d60e97b29?w=1400&auto=format&fit=crop",
    featuredVideoTitle: "Golden Temple: Where Divinity Meets Architecture",
    relatedCards: [
      {
        id: "rv-5-1",
        title: "Langar: The Sacred Community Kitchen",
        img: "https://images.unsplash.com/photo-1585123334904-845d60e97b29?w=600&auto=format&fit=crop",
      },
      {
        id: "rv-5-2",
        title: "Wagah Border Ceremony",
        img: "https://images.unsplash.com/photo-1567157577867-05ccb1388e66?w=600&auto=format&fit=crop",
      },
      {
        id: "rv-5-3",
        title: "Fields of Gold: Wheat Harvest",
        img: "https://images.unsplash.com/photo-1519046904884-53103b34b206?w=600&auto=format&fit=crop",
      },
      {
        id: "rv-5-4",
        title: "Bhangra: The Joyful Dance",
        img: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&auto=format&fit=crop",
      },
    ],
    stories: [
      {
        id: 501,
        url: "https://images.unsplash.com/photo-1585123334904-845d60e97b29?w=900&auto=format&fit=crop",
        type: "image",
        caption: "The Golden Temple shimmering at dawn",
      },
      {
        id: 502,
        url: "https://images.unsplash.com/photo-1567157577867-05ccb1388e66?w=900&auto=format&fit=crop",
        type: "image",
        caption: "Thousands gather for holy dip",
      },
      {
        id: 503,
        url: "https://images.unsplash.com/photo-1565557623262-b51c2513a641?w=900&auto=format&fit=crop",
        type: "image",
        caption: "Langar — free meals for all",
      },
      {
        id: 504,
        url: "https://images.unsplash.com/photo-1519046904884-53103b34b206?w=900&auto=format&fit=crop",
        type: "image",
        caption: "Wagah border flag ceremony at sunset",
      },
    ],
  },
  {
    id: 6,
    title: "Meghalaya: Scotland of the East",
    img: "https://images.unsplash.com/photo-1503516459261-40c66117780a?w=1400&auto=format&fit=crop",
    location: "Shillong & Cherrapunji, Meghalaya",
    tag: "Eco-Travel",
    featuredVideoUrl: "https://www.w3schools.com/html/mov_bbb.mp4",
    featuredVideoThumb: "https://images.unsplash.com/photo-1503516459261-40c66117780a?w=1400&auto=format&fit=crop",
    featuredVideoTitle: "Living Root Bridges: Nature's Architecture",
    relatedCards: [
      {
        id: "rv-6-1",
        title: "Double Decker Root Bridge Trek",
        img: "https://images.unsplash.com/photo-1503516459261-40c66117780a?w=600&auto=format&fit=crop",
      },
      {
        id: "rv-6-2",
        title: "Nohkalikai Falls: India's Tallest",
        img: "https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?w=600&auto=format&fit=crop",
      },
      {
        id: "rv-6-3",
        title: "Dawki: The Crystal Clear River",
        img: "https://images.unsplash.com/photo-1466978913421-dad2ebd01d17?w=600&auto=format&fit=crop",
      },
      {
        id: "rv-6-4",
        title: "Khasi Tribal Culture",
        img: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&auto=format&fit=crop",
      },
    ],
    stories: [
      {
        id: 601,
        url: "https://images.unsplash.com/photo-1503516459261-40c66117780a?w=900&auto=format&fit=crop",
        type: "image",
        caption: "Living root bridges — centuries old",
      },
      {
        id: 602,
        url: "https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?w=900&auto=format&fit=crop",
        type: "image",
        caption: "Monsoon waterfalls of Cherrapunji",
      },
      {
        id: 603,
        url: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=900&auto=format&fit=crop",
        type: "image",
        caption: "Misty hills of Shillong",
      },
      {
        id: 604,
        url: "https://images.unsplash.com/photo-1519046904884-53103b34b206?w=900&auto=format&fit=crop",
        type: "image",
        caption: "Crystal waters of Dawki river",
      },
    ],
  },
];