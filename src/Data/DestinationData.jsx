// 1. IMPORT ALL VIDEOS AT THE STARTING
import tajVideo from '../assets/videos/StateVideos/Tajmahal.mp4';
import jaipurVideo from '../assets/videos/StateVideos/Jaipure.mp4';
import goaVideo from '../assets/videos/StateVideos/Goa.mp4';
import keralaVideo from '../assets/videos/StateVideos/Kerala.mp4';
import ladakhVideo from '../assets/videos/StateVideos/Ladakh.mp4';
import varanasiVideo from '../assets/videos/StateVideos/Varanasi.mp4';
import udaipurVideo from '../assets/videos/StateVideos/Udaipure.mp4';
import rishikeshVideo from '../assets/videos/StateVideos/Rishikesh.mp4';
import darjeelingVideo from '../assets/videos/StateVideos/Dargiling.mp4';
import andamanVideo from '../assets/videos/StateVideos/Andaman nikobar.mp4';
import mahabaleshwarVideo from '../assets/videos/StateVideos/Mahabaleshvar.mp4';

export const destinationDetails = {
  tajmahal: {
    title: "Taj Mahal",
    location: "Agra, Uttar Pradesh",
    coordinates: [27.1751, 78.0421],
    video: tajVideo,
    fullDesc: "The Taj Mahal is an ivory-white marble mausoleum on the right bank of the river Yamuna. A UNESCO World Heritage site, it stands as the ultimate symbol of love and Mughal architectural brilliance, attracting millions of visitors with its perfect symmetry.",
    when: "October to March offers the most comfortable weather.",
    event: "Taj Mahotsav (February) - A 10-day cultural festival showcasing Indian crafts.",
    thingsToDo: [
      { title: "Sunrise at Taj Mahal", description: "Witness the marble glow in soft pink hues at dawn.", image: "https://images.unsplash.com/photo-1564507592333-c60657eea523?w=800" },
      { title: "Agra Fort Tour", description: "Explore the massive red sandstone palace of the Mughal Emperors.", image: "https://media.istockphoto.com/id/1169495248/photo/agra-fort-medieval-indian-fort-at-agra-india-at-sunrise.jpg?s=612x612&w=0&k=20&c=EI9BXzCutx2gRuPCFUDSirZg9Hfc7G_kGfFbmVBmSEc=" },
      { title: "Sunset at Mehtab Bagh", description: "Get a mirror-view of the Taj from across the Yamuna River.", image: "https://images.unsplash.com/photo-1524492412937-b28074a5d7da?w=800" },
      { title: "Itmad-ud-Daula", description: "Visit the 'Baby Taj', the first Mughal structure built with marble.", image: "https://upload.wikimedia.org/wikipedia/commons/c/c9/I%27tim%C4%81d-ud-Daulah%2C_Agra.jpg" },
      { title: "Fatehpur Sikri Trip", description: "Visit the ghost city built by Emperor Akbar, 40km from Agra.", image: "https://t3.ftcdn.net/jpg/02/02/60/78/360_F_202607822_56X4UHztDCbXM1pUSdniwjKJIX51gkfb.jpg" },
      { title: "Kinari Bazar Walk", description: "Experience the bustling narrow lanes filled with jewelry and fabrics.", image: "https://images.unsplash.com/photo-1506461883276-594a12b11cf3?w=800" },
      { title: "Savor Agra Petha", description: "Taste the world-famous ash gourd candy at Panchhi Petha.", image: "https://travelxamp.com/wp-content/uploads/2021/02/Petha-1024x1024.jpeg" },
      { title: "Mughal Heritage Walk", description: "An offbeat walk through the Kachhpura village for hidden views.", image: "https://thetajwondertours.com/wp-content/uploads/2022/07/sa3.jpg" },
      { title: "Kalakriti Dance Show", description: "Watch 'Mohabbat-the-Taj', a musical play depicting the history of the Taj.", image: "https://cdn.getyourguide.com/image/format=auto,fit=crop,gravity=auto,quality=60,width=450,height=450,dpr=2/tour_img/6ffd8330c85f2eb3.jpeg" },
      { title: "Jama Masjid Agra", description: "Explore one of the largest mosques in India built by Jahanara Begum.", image: "https://cdn.prod.rexby.com/image/86b50e59a0de40ed8b81cb7c0a8de6e3?format=webp&width=1080&height=1350" }
    ],
    foodCategories: [
      { id: 1, title: "Best restaurants", image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=800" },
      { id: 2, title: "Best rooftop bars", image: "https://plus.unsplash.com/premium_photo-1661879028525-978a222c0cc8?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8d2F0ZXJmcm9udCUyMGJhcnN8ZW58MHx8MHx8fDA%3D" },
      { id: 3, title: "Top coffee shops", image: "https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?w=800" },
      {id: 4, title: "Local Favorites", image: "https://images.unsplash.com/photo-1599488615731-7e5c2823ff28?w=800"}
    ],
    discoverCategories: [
      { id: 1, title: "Where to stay", image: "https://thumbs.dreamstime.com/b/city-street-view-car-window-high-rise-buildings-mountain-background-high-quality-city-street-view-car-window-433329600.jpg" },
      { id: 2, title: "Weather in Varanasi", image: "https://media.istockphoto.com/id/1321422853/photo/wheather.webp?a=1&b=1&s=612x612&w=0&k=20&c=HDVDnNqhAC80InOl9zid6pni2MontfrwNjOKlcW9iR8=" },
      { id: 3, title: "Find a travel agent", image: "https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=800" },
      { id: 4, title: "Find tours", image: "https://images.unsplash.com/photo-1539635278303-d4002c07eae3?w=800" }
    ],
    nearPlaces: [
      { id: 1, title: "Fatehpur Sikri", image: "https://t3.ftcdn.net/jpg/02/02/60/78/360_F_202607822_56X4UHztDCbXM1pUSdniwjKJIX51gkfb.jpg" },
      { id: 2, title: "Mathura", image: "https://images.unsplash.com/photo-1590050752117-238cb0fb12b1?w=800" },
      { id: 3, title: "Agra Fort", image: "https://images.unsplash.com/photo-1544924129-b28074a5d7da?w=800" },
      { id: 4, title: "Vrindavan", image: "https://images.unsplash.com/photo-1582510003544-4d00b7f74220?w=800" }
    ],
    tripsAndItineraries: [
      { title: "Golden Triangle: 3 days in Agra", image: "https://images.unsplash.com/photo-1548013146-72479768bada?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8YWdyYXxlbnwwfHwwfHx8MA%3D%3D" },
      { title: "Sunrise Photography & Heritage Tour", image: "https://images.unsplash.com/photo-1564507592333-c60657eea523" },
      { title: "Mughal Architecture & History Walk", image: "https://www.responsibletravel.com/ImagesClient/dtg-cr3897-rajasthan-humayuns-tomb.jpg" },
      { title: "24 Hours in the City of Love", image: "https://img.freepik.com/premium-photo/stylized-cityscape-with-famous-landmarks-adorned-valentines-day-decor-generated-by-ai_950002-619539.jpg?semt=ais_hybrid&w=740&q=80" }
    ]
  },
  jaipur: {
    title: "Jaipur",
    location: "Rajasthan",
    coordinates: [26.9124, 75.7873],
    video: jaipurVideo,
    fullDesc: "Known as the 'Pink City', Jaipur is a captivating blend of royal history and vibrant street life. From the intricate facade of Hawa Mahal to the grand hilltop Amer Fort, it offers a window into the opulent lifestyle of Rajasthan's Rajput rulers.",
    when: "November to February is the peak season.",
    event: "Jaipur Literature Festival (January).",
    thingsToDo: [
      { title: "Amer Fort Ride", description: "Ascend the hilltop fort and see the stunning Sheesh Mahal.", image: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/07/16/fe/87/amer-elephant-safari.jpg?w=1200&h=1200&s=1" },
      { title: "Hawa Mahal", description: "Photograph the iconic honeycombed pink sandstone palace.", image: "https://images.unsplash.com/photo-1603262110263-fb0112e7cc33?w=800" },
      { title: "City Palace", description: "Explore the royal residence and its museum of ancient textiles.", image: "https://images.unsplash.com/photo-1599661046289-e31897846e41?w=800" },
      { title: "Jantar Mantar", description: "Visit the world's largest stone astronomical observatory.", image: "https://images.unsplash.com/photo-1477587458883-47145ed94245?w=800" },
      { title: "Nahargarh Fort Sunset", description: "Best panoramic view of the Jaipur skyline at dusk.", image: "https://t3.ftcdn.net/jpg/08/03/14/06/360_F_803140668_a8hZXCNWkAIeEqO7kGSrgo4yt36BAncN.jpg" },
      { title: "Chokhi Dhani Dinner", description: "Experience Rajasthani culture with folk dance and traditional food.", image: "https://images.unsplash.com/photo-1561501900-3701fa6a0864?w=800" },
      { title: "Jaigarh Fort", description: "See 'Jaivana', the world's largest cannon on wheels.", image: "https://images.unsplash.com/photo-1599661046289-e31897846e41?w=800" },
      { title: "Johari Bazar Shopping", description: "Buy authentic gemstone jewelry and traditional Rajasthani quilts.", image: "https://images.unsplash.com/photo-1506461883276-594a12b11cf3?w=800" },
      { title: "Jal Mahal", description: "View the beautiful Water Palace situated in the middle of Man Sagar Lake.", image: "https://images.unsplash.com/photo-1603262110263-fb0112e7cc33?w=800" },
      { title: "Albert Hall Museum", description: "Explore Indo-Saracenic architecture and a huge collection of artifacts.", image: "https://t4.ftcdn.net/jpg/03/23/24/61/360_F_323246117_x7zTlG2fDU6KbTgrqWUNPoYb3ggAPtTC.jpg" }
    ],
    foodCategories: [
      { id: 1, title: "Best restaurants", image: "https://images.unsplash.com/photo-1585937421612-70a008356fbe?w=800" },
      { id: 2, title: "Best heritage bars", image: "https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?w=800" },
      { id: 3, title: "Top coffee shops", image: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=800" },
      {id: 4, title: "Local Favorites", image: "https://images.unsplash.com/photo-1599488615731-7e5c2823ff28?w=800"}
    ],
    discoverCategories: [
      { id: 1, title: "Where to stay", image: "https://thumbs.dreamstime.com/b/city-street-view-car-window-high-rise-buildings-mountain-background-high-quality-city-street-view-car-window-433329600.jpg" },      
      { id: 2, title: "Weather in Varanasi", image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=800" },
      { id: 3, title: "Find a travel agent", image: "https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=800" },
      { id: 4, title: "Find tours", image: "https://images.unsplash.com/photo-1539635278303-d4002c07eae3?w=800" }
    ],
    nearPlaces: [
      { id: 1, title: "Pushkar", image: "https://images.unsplash.com/photo-1590050752117-238cb0fb12b1?w=800" },
      { id: 2, title: "Ajmer", image: "https://images.unsplash.com/photo-1597511874400-98565a4c6a6d?w=800" },
      { id: 3, title: "Bhangarh Fort", image: "https://images.unsplash.com/photo-1509219270126-53966341f478?w=800" },
      { id: 4, title: "Abhaneri", image: "https://images.unsplash.com/photo-1524492412937-b28074a5d7da?w=800" }
    ],
    tripsAndItineraries: [
      { title: "4 days in the Pink City", image: "https://images.unsplash.com/photo-1599661046289-e31897846e41" },
      { title: "Royal Forts & Palaces Expedition", image: "https://images.unsplash.com/photo-1477587458883-47145ed94245" },
      { title: "Rajasthani Art & Culture Trail", image: "https://images.unsplash.com/photo-1524230572899-a752b3835840" },
      { title: "The Ultimate Rajasthan Road Trip", image: "https://images.unsplash.com/photo-1590050752117-238cb0fb12b1" }
    ]
  },
  goa: {
    title: "Goa",
    location: "West Coast of India",
    coordinates: [15.2993, 74.1240],
    video: goaVideo,
    fullDesc: "India's pocket-sized paradise, Goa is famous for its kaleidoscopic blend of Portuguese-Indian heritage, golden palm-fringed beaches, and a laid-back 'Susegad' vibe. It is a premier destination for both relaxation and high-energy nightlife.",
    thingsToDo: [
      { title: "Scuba Diving", description: "Dive at Grande Island to see shipwrecks and coral life.", image: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=800" },
      { title: "Dudhsagar Falls", description: "A thrilling trek to the majestic four-tiered waterfall.", image: "https://images.unsplash.com/photo-1613844838171-e649c7ed3e0d?fm=jpg&q=60&w=3000&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8ZHVkaHNhZ2FyJTIwZmFsbHN8ZW58MHx8MHx8fDA%3D" },
      { title: "Basilica of Bom Jesus", description: "Visit the UNESCO World Heritage site holding St. Francis Xavier's remains.", image: "https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?w=800" },
      { title: "Baga Beach Shacks", description: "Experience Goa's famous nightlife at Britto's and Tito's.", image: "https://www.treebo.com/blog/wp-content/uploads/2018/04/Best-Beach-Shacks-in-North-Goa.jpg" },
      { title: "Fontainhas Walk", description: "Stroll through the colorful Portuguese Latin Quarter in Panjim.", image: "https://images.unsplash.com/photo-1614082242765-7c98ca0f3df3?w=800" },
      { title: "Parasailing at Calangute", description: "Soar high above the Arabian Sea with thrilling water sports.", image: "https://images.unsplash.com/photo-1590523277543-a94d2e4eb00b?w=800" },
      { title: "Anjuna Flea Market", description: "Shop for boho clothing, jewelry, and handmade souvenirs.", image: "https://images.unsplash.com/photo-1533900298318-6b8da08a523e?w=800" },
      { title: "Casino Nights", description: "Try your luck on luxury offshore casinos on the Mandovi River.", image: "https://images.unsplash.com/photo-1596838132731-3301c3fd4317?w=800" },
      { title: "Spice Plantation Tour", description: "Learn about tropical spices and enjoy a traditional Goan lunch.", image: "https://images.unsplash.com/photo-1506461883276-594a12b11cf3?w=800" },
      { title: "Aguada Fort", description: "Visit the 17th-century lighthouse and fort with stunning sea views.", image: "https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?w=800" }
    ],
    foodCategories: [
      { id: 1, title: "Best seafood", image: "https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?w=800" },
      { id: 2, title: "Best beach shacks", image: "https://images.unsplash.com/photo-1533777857889-4be7c70b33f7?w=800" },
      { id: 3, title: "Top coffee shops", image: "https://images.unsplash.com/photo-1445116572660-236099ec97a0?w=800" },
      {id: 4, title: "Local Favorites", image: "https://images.unsplash.com/photo-1599488615731-7e5c2823ff28?w=800"}
    ],
    discoverCategories: [
      { id: 1, title: "Where to stay", image: "https://thumbs.dreamstime.com/b/city-street-view-car-window-high-rise-buildings-mountain-background-high-quality-city-street-view-car-window-433329600.jpg" },
      { id: 2, title: "Weather in Varanasi", image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=800" },
      { id: 3, title: "Find a travel agent", image: "https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=800" },
      { id: 4, title: "Find tours", image: "https://images.unsplash.com/photo-1539635278303-d4002c07eae3?w=800" }
    ],
    nearPlaces: [
      { id: 1, title: "Dudhsagar Falls", image: "https://images.unsplash.com/photo-1613844838171-e649c7ed3e0d?w=800" },
      { id: 2, title: "Gokarna", image: "https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?w=800" },
      { id: 3, title: "Netravali Wildlife", image: "https://images.unsplash.com/photo-1506461883276-594a12b11cf3?w=800" },
      { id: 4, title: "Amboli Ghat", image: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=800" }
    ],
    tripsAndItineraries: [
      { title: "4 days in North Goa Beaches", image: "https://plus.unsplash.com/premium_photo-1697729594707-0fc9e51c8eed?fm=jpg&q=60&w=3000&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Z29hJTIwaW5kaWF8ZW58MHx8MHx8fDA%3D" },
      { title: "Old Goa Heritage & Church Tour", image: "https://images.unsplash.com/photo-1614082242765-7c98ca0f3df3" },
      { title: "South Goa: Peaceful Retreat", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSoGEoq91avNnFZ4h5lifeeIBUXo0ngoU8cpQ&s" },
      { title: "Party, Water Sports & Sunsets", image: "https://t3.ftcdn.net/jpg/04/05/79/12/360_F_405791238_jfKjgLri8AC0ihAfzJkbGYyyu7kd92Yj.jpg" }
    ]
  },
  kerala: {
    title: "Kerala",
    location: "South India",
    coordinates: [10.8505, 76.2711],
    video: keralaVideo,
    fullDesc: "Rightly called 'God's Own Country', Kerala is a tropical symphony of emerald backwaters, spice-scented hill stations, and ancient Ayurvedic traditions. It offers a soul-soothing experience amidst dense greenery and serene coastal stretches.",
    thingsToDo: [
      { title: "Houseboat Stay", description: "Cruise the Alleppey backwaters on a traditional wooden boat.", image: "https://images.unsplash.com/photo-1593181629936-11c609b8db9b?w=800" },
      { title: "Tea Tasting in Munnar", description: "Walk through green hills and taste fresh highland tea.", image: "https://images.unsplash.com/photo-1516690561799-46d8f74f9abf?w=800" },
      { title: "Kathakali Performance", description: "Watch the ancient dance-drama with elaborate makeup.", image: "https://thumbs.dreamstime.com/b/kathakali-performers-traditional-dance-kerala-s-state-india-major-form-classical-indian-related-to-hindu-184594216.jpg" },
      { title: "Periyar Wildlife Safari", description: "Spot elephants during a boat safari on Periyar Lake.", image: "https://png.pngtree.com/thumb_back/fh260/background/20250615/pngtree-majestic-african-wildlife-sunset-safari-animals-image_17430211.jpg" },
      { title: "Varkala Cliff Dining", description: "Enjoy fresh seafood on a cliff overlooking the ocean.", image: "https://images.unsplash.com/photo-1590050752117-238cb0fb12b1?w=800" },
      { title: "Ayurvedic Massage", description: "Rejuvenate with a traditional Kerala oil therapy session.", image: "https://images.unsplash.com/photo-1540555700478-4be289fbecef?w=800" },
      { title: "Fort Kochi Stroll", description: "See Chinese fishing nets and colonial Jewish architecture.", image: "https://t3.ftcdn.net/jpg/07/09/09/06/360_F_709090633_ETb1OiBZ1SUeDjYhYSVhFIF9hq8MPoN5.jpg" },
      { title: "Athirappilly Falls", description: "Visit the 'Niagara of India' in the middle of dense forests.", image: "https://www.shutterstock.com/shutterstock/videos/3630023285/thumb/1.jpg?ip=x480" },
      { title: "Snake Boat Race", description: "Watch the thrilling Nehru Trophy race (seasonal - August).", image: "https://images.unsplash.com/photo-1593181629936-11c609b8db9b?w=800" },
      { title: "Spice Market Tour", description: "Visit the spice godowns of Mattancherry for black pepper and cardamom.", image: "https://images.unsplash.com/photo-1506461883276-594a12b11cf3?w=800" }
    ],
    foodCategories: [
      { id: 1, title: "Best restaurants", image: "https://images.unsplash.com/photo-1559339352-11d035aa65de?w=800" },
      { id: 2, title: "Best waterfront bars", image: "https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?w=800" },
      { id: 3, title: "Top coffee shops", image: "https://images.unsplash.com/photo-1540555700478-4be289fbecef?w=800" },
      {id: 4, title: "Local Favorites", image: "https://images.unsplash.com/photo-1599488615731-7e5c2823ff28?w=800"}
    ],
    discoverCategories: [
      { id: 1, title: "Where to stay", image: "https://thumbs.dreamstime.com/b/city-street-view-car-window-high-rise-buildings-mountain-background-high-quality-city-street-view-car-window-433329600.jpg" },
      { id: 2, title: "Weather in Varanasi", image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=800" },
      { id: 3, title: "Find a travel agent", image: "https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=800" },
      { id: 4, title: "Find tours", image: "https://images.unsplash.com/photo-1655272427422-498f985c8998?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dG91cnN8ZW58MHx8MHx8fDA%3D" }
    ],
    nearPlaces: [
      { id: 1, title: "Munnar", image: "https://images.unsplash.com/photo-1516690561799-46d8f74f9abf?w=800" },
      { id: 2, title: "Alleppey", image: "https://images.unsplash.com/photo-1593181629936-11c609b8db9b?w=800" },
      { id: 3, title: "Thekkady", image: "https://images.unsplash.com/photo-1540555700478-4be289fbecef?w=800" },
      { id: 4, title: "Kanyakumari", image: "https://images.unsplash.com/photo-1588668214407-6ea9a6d8c272?w=800" }
    ],
    tripsAndItineraries: [
      { title: "7 days in God's Own Country", image: "https://images.unsplash.com/photo-1602216056096-3b40cc0c9944" },
      { title: "Backwater Houseboat Experience", image: "https://media.istockphoto.com/id/1266651692/photo/houseboat-in-alappuzha-backwaters-kerala.jpg?s=612x612&w=0&k=20&c=G432lmdUz9qrW6D4sZYxLe6K-Km85OEmZg0qpcGyRCI=" },
      { title: "Munnar Tea Gardens Escape", image: "https://media.istockphoto.com/id/1468862074/photo/mughal-garden-delhi-or-amrit-udyan-rashtrapati-bhawan-presidents-estate-new-delhi-delhi.jpg?s=612x612&w=0&k=20&c=GBch-8nynfQEispOkJ0qOubBqcXx1-eLVOfODvBER50=" },
      { title: "Kerala Wellness & Ayurveda Tour", image: "data:image/jpeg;base64,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" }
    ]
  },
  ladakh: {
    title: "Ladakh",
    location: "Himalayan Region",
    coordinates: [34.1526, 77.5771],
    video: ladakhVideo,
    fullDesc: "A high-altitude desert framed by jagged peaks, Ladakh is a land of dramatic landscapes and deep Tibetan Buddhist culture. It is a haven for adventure seekers and those looking for spiritual solitude in the Himalayas.",
    thingsToDo: [
      { title: "Pangong Tso Camping", description: "Stay overnight by the lake that changes its color from blue to green.", image: "https://images.unsplash.com/photo-1581791534721-e599df4417f7?w=800" },
      { title: "Camel Safari Nubra", description: "Ride double-humped Bactrian camels in the Hunder sand dunes.", image: "https://www.tourmyindia.com/states/ladakh/imagess/camel-adventure.jpg" },
      { title: "Magnetic Hill", description: "See your car defy gravity on this mysterious hilly slope.", image: "https://t3.ftcdn.net/jpg/02/70/18/02/360_F_270180298_10gFreDTCjSXZ2rFGboGs5f9ubXVWs6N.jpg" },
      { title: "Khardung La Pass", description: "Click a photo at one of the highest motorable roads in the world.", image: "https://t4.ftcdn.net/jpg/01/09/84/91/360_F_109849179_Z4ggL0DY6MoavyhOQWkNrJ3yL6c14I4T.jpg" },
      { title: "Shanti Stupa", description: "Visit the white-domed stupa for a breathtaking view of Leh.", image: "https://images.unsplash.com/photo-1590005024862-6b67679a29fb?w=800" },
      { title: "Hemis Monastery", description: "Explore the wealthiest and most famous monastery in Ladakh.", image: "https://discoverlehladakh.in/wp-content/uploads/2020/06/Hemis-monastery-1022x530.jpeg" },
      { title: "River Rafting Zanskar", description: "Adrenaline-filled rafting in the freezing waters of Zanskar.", image: "https://aquaterra.in/wp-content/uploads/2019/10/Zanskar-Ladakh-Leh-River-Rafting-6.jpg" },
      { title: "Zanskar Valley Trek", description: "A paradise for hikers with dramatic rocky mountain landscapes.", image: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=800" },
      { title: "Local Ladakhi Meal", description: "Try authentic Thukpa and Momos in the Leh main market.", image: "https://www.swantour.com/blogs/wp-content/uploads/2019/05/foods-of-ladakh.jpg" },
      { title: "Tso Moriri Lake", description: "Visit the offbeat and serene high-altitude wetlands.", image: "https://images.unsplash.com/photo-1581791534721-e599df4417f7?w=800" }
    ],
    foodCategories: [
      { id: 1, title: "Best restaurants", image: "https://images.unsplash.com/photo-1625398407796-82650a8c135f?w=800" },
      { id: 2, title: "Best high-altitude bars", image: "https://images.unsplash.com/photo-1509042239860-f550ce710b93?w=800" },
      { id: 3, title: "Top coffee shops", image: "https://plus.unsplash.com/premium_photo-1663932464735-e0946d833749?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
      {id: 4, title: "Local Favorites", image: "https://images.unsplash.com/photo-1599488615731-7e5c2823ff28?w=800"}
    ],
    discoverCategories: [
      { id: 1, title: "Where to stay", image: "https://thumbs.dreamstime.com/b/city-street-view-car-window-high-rise-buildings-mountain-background-high-quality-city-street-view-car-window-433329600.jpg" },
      { id: 2, title: "Weather in Varanasi", image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=800" },
      { id: 3, title: "Find a travel agent", image: "https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=800" },
      { id: 4, title: "Find tours", image: "https://images.unsplash.com/photo-1539635278303-d4002c07eae3?w=800" }
    ],
    nearPlaces: [
      { id: 1, title: "Nubra Valley", image: "https://images.unsplash.com/photo-1581791534721-e599df4417f7?w=800" },
      { id: 2, title: "Pangong Lake", image: "https://images.unsplash.com/photo-1590005024862-6b67679a29fb?w=800" },
      { id: 3, title: "Kargil", image: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=800" },
      { id: 4, title: "Zanskar", image: "https://images.unsplash.com/photo-1625398407796-82650a8c135f?w=800" }
    ],
    tripsAndItineraries: [
      { title: "7 days in the Land of High Passes", image: "https://images.unsplash.com/photo-1581793745862-99fde7fa73d2" },
      { title: "The Ultimate Bike Trip to Leh", image: "https://images.unsplash.com/photo-1626621341517-bbf3d9990a23" },
      { title: "Monastery & Spirituality Tour", image: "https://images.unsplash.com/photo-1616712134411-6b6ae89bc3ba" },
      { title: "Nubra Valley & Pangong Adventure", image: "https://images.unsplash.com/photo-1617159156637-dfb8655c9f95?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8bnVicmElMjB2YWxsZXl8ZW58MHx8MHx8fDA%3D" }
    ]
  },
  varanasi: {
    title: "Varanasi",
    location: "Uttar Pradesh",
    coordinates: [25.3176, 82.9739],
    video: varanasiVideo,
    fullDesc: "One of the oldest continually inhabited cities in the world, Varanasi is the spiritual heart of India. It offers a profound cultural experience where ancient traditions, religion, and daily life converge on the banks of the sacred Ganges River.",
    thingsToDo: [
      { title: "Ganga Aarti", description: "Witness the spectacular evening prayer ritual at Dashashwamedh Ghat.", image: "https://images.unsplash.com/photo-1561361058-c24cecae35ca?w=800" },
      { title: "Sunrise Boat Ride", description: "See the city come alive at dawn from a rowing boat on the Ganges.", image: "https://images.pexels.com/photos/28975088/pexels-photo-28975088/free-photo-of-scenic-boat-ride-at-sunrise-in-india.jpeg" },
      { title: "Kashi Vishwanath Temple", description: "Visit the holy Golden Temple dedicated to Lord Shiva.", image: "https://images.unsplash.com/photo-1545127398-14699f92334b?w=800" },
      { title: "Sarnath Excursion", description: "Explore where Buddha gave his first sermon at the Dhamekh Stupa.", image: "https://www.pelago.com/img/products/IN-India/sarnath-excursion-from-varanasi/3fd53da8-7329-495c-8b95-16697ca57fe2_sarnath-excursion-from-varanasi-medium.jpg" },
      { title: "Street Food Crawl", description: "Taste Tamatar Chaat, Blue Lassi, and the famous Banarasi Paan.", image: "https://img.freepik.com/premium-photo/exploring-market-photo-realistic-street-food-tour-group-concept-high-resolution-image_980716-196049.jpg" },
      { title: "Silk Weaving Village", description: "Watch craftsmen create world-famous Banarasi Silk sarees.", image: "https://images.unsplash.com/photo-1506461883276-594a12b11cf3?w=800" },
      { title: "Assi Ghat Evening", description: "Relax at the ghat and enjoy the Morning-e-Banaras concerts.", image: "https://images.unsplash.com/photo-1561361058-c24cecae35ca?w=800" },
      { title: "Manikarnika Ghat", description: "Understand the circle of life at Varanasi's main cremation ghat.", image: "https://images.unsplash.com/photo-1706186924707-d2acc3bd979a?fm=jpg&q=60&w=3000&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8bWFuaWthcm5pa2ElMjBnaGF0fGVufDB8fDB8fHww" },
      { title: "Ramnagar Fort", description: "Visit the ancestral home of the Maharaja of Banaras across the river.", image: "https://images.unsplash.com/photo-1545127398-14699f92334b?w=800" },
      { title: "Chunar Fort Trip", description: "A half-day trip to the historic sandstone fort on the hill.", image: "https://www.tataneu.com/pages/travel/_next/image?url=https%3A%2F%2Fd1msew97rp2nin.cloudfront.net%2Fprodin%2Ftntravel%2Fblogimages%2FGwalior-7a9a5e3f-5422-4289-a121-6dc7261c00ee.webp&w=3840&q=75" }
    ],
    foodCategories: [
      { id: 1, title: "Best restaurants", image: "https://images.unsplash.com/photo-1571053748382-141b7de59b88?w=800" },
      { id: 2, title: "Best riverside cafes", image: "https://images.unsplash.com/photo-1759276858203-3de4d14f3546?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fHdhdGVyZnJvbnQlMjBiYXJzfGVufDB8fDB8fHww" },
      { id: 3, title: "Top coffee shops", image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=800" },
      {id: 4, title: "Local Favorites", image: "https://images.unsplash.com/photo-1599488615731-7e5c2823ff28?w=800"}
    ],
    discoverCategories: [
      { id: 1, title: "Where to stay", image: "https://images.unsplash.com/photo-1775866914943-ba1415a35afc?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fGhvdGVscyUyMGJpZ3xlbnwwfHwwfHx8MA%3D%3D" },
      { id: 2, title: "Weather in Varanasi", image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=800" },
      { id: 3, title: "Find a travel agent", image: "https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=800" },
      { id: 4, title: "Find tours", image: "https://images.unsplash.com/photo-1539635278303-d4002c07eae3?w=800" }
    ],
    nearPlaces: [
      { id: 1, title: "Sarnath", image: "https://images.unsplash.com/photo-1561361058-c24cecae35ca?w=800" },
      { id: 2, title: "Prayagraj", image: "https://images.unsplash.com/photo-1545127398-14699f92334b?w=800" },
      { id: 3, title: "Vindhyachal", image: "https://images.unsplash.com/photo-1571053748382-141b7de59b88?w=800" },
      { id: 4, title: "Chunar Fort", image: "https://images.unsplash.com/photo-1601050690597-df056fb04791?w=800" }
    ],
    tripsAndItineraries: [
      { title: "3 days of Spiritual Awakening", image: "https://images.unsplash.com/photo-1561361513-2d000a50f0dc" },
      { title: "Ganges Boat Tour & Evening Aarti", image: "https://images.unsplash.com/photo-1763046198598-fc3a0892261a?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Z2FuZ2VzJTIwYm9hdCUyMHRvdXJ8ZW58MHx8MHx8fDA%3D" },
      { title: "Ancient Temples & Narrow Lanes", image: "https://images.unsplash.com/photo-1627894483216-2138af692e32" },
      { title: "Kashi Heritage & Food Walk", image: "https://images.unsplash.com/photo-1646288744226-a2e3a06bfb10?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8a2FzaGklMjBoZXJpdGFnZXxlbnwwfHwwfHx8MA%3D%3D" }
    ]
  },
  udaipur: {
    title: "Udaipur",
    location: "Rajasthan",
    coordinates: [24.5854, 73.7125],
    video: udaipurVideo,
    fullDesc: "Often referred to as the 'Venice of the East', Udaipur is defined by its shimmering lakes and the massive City Palace complex. The city's romantic architecture and boat-filled waters make it Rajasthan's most enchanting destination.",
    thingsToDo: [
      { title: "Lake Pichola Boating", description: "Ride a boat past the floating Lake Palace at sunset.", image: "https://thumbs.dreamstime.com/b/lake-pichola-udaipur-view-city-rajasthan-india-203501215.jpg" },
      { title: "City Palace Tour", description: "Explore the massive palace complex and its mirror-work rooms.", image: "https://t4.ftcdn.net/jpg/01/86/03/91/360_F_186039131_DtzFlukfaDy0Fdsgq6HzJwGGJ1II5Ls9.jpg" },
      { title: "Dharohar Folk Dance", description: "Watch the Bagore Ki Haveli puppet and folk dance show.", image: "https://thumbs.dreamstime.com/b/india-rajasthan-udaipur-traditional-indian-dance-lok-dharohar-haveli-dancers-carry-flaming-brass-pots-their-heads-india-359204446.jpg" },
      { title: "Jagdish Temple", description: "Visit the stunning 1651 Indo-Aryan temple in the city center.", image: "https://t4.ftcdn.net/jpg/04/97/96/23/360_F_497962304_7KXUejdjUfhx4Y5zni0ooLuer7GlVlom.jpg" },
      { title: "Sajjangarh Fort", description: "Visit the 'Monsoon Palace' for high-altitude valley views.", image: "https://t4.ftcdn.net/jpg/03/58/35/27/360_F_358352741_X0EavWfHOHKXuBMY5CZrPv9SyyseQX4n.jpg" },
      { title: "Saheliyon-ki-Bari", description: "Walk through the historic 'Garden of the Maidens' and its fountains.", image: "https://t4.ftcdn.net/jpg/02/96/24/15/360_F_296241588_SUyJcotha6hH0iZHMqP9tqrd1V36DrdW.jpg" },
      { title: "Vintage Car Museum", description: "See the Maharajas' collection of classic Rolls Royce and Cadillacs.", image: "https://images.unsplash.com/photo-1621360841013-c7683c659ec6?w=800" },
      { title: "Fateh Sagar Lake", description: "Stroll along the 'Mumbai Chowpatty' of Udaipur for local snacks.", image: "https://t4.ftcdn.net/jpg/02/95/28/01/360_F_295280115_i6BXg0q5vA2dpFRhVf51Ldr2PbqZRkhz.jpg" },
      { title: "Shilpgram Village", description: "Explore the rural arts and crafts complex near Udaipur.", image: "https://images.unsplash.com/photo-1506461883276-594a12b11cf3?w=800" },
      { title: "Ropeway to Karni Mata", description: "Take the cable car for the best sunset photography spot.", image: "https://images.unsplash.com/photo-1621360841013-c7683c659ec6?w=800" }
    ],
    foodCategories: [
      { id: 1, title: "Best restaurants", image: "https://images.unsplash.com/photo-1559339352-11d035aa65de?w=800" },
      { id: 2, title: "Best lakeside bars", image: "https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?w=800" },
      { id: 3, title: "Top coffee shops", image: "https://images.unsplash.com/photo-1445116572660-236099ec97a0?w=800" },
      {id: 4, title: "Local Favorites", image: "https://images.unsplash.com/photo-1599488615731-7e5c2823ff28?w=800"}
    ],
    discoverCategories: [
      { id: 1, title: "Where to stay", image: "https://thumbs.dreamstime.com/b/city-street-view-car-window-high-rise-buildings-mountain-background-high-quality-city-street-view-car-window-433329600.jpg" },
      { id: 2, title: "Weather in Varanasi", image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=800" },
      { id: 3, title: "Find a travel agent", image: "https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=800" },
      { id: 4, title: "Find tours", image: "https://images.unsplash.com/photo-1539635278303-d4002c07eae3?w=800" }
    ],
    nearPlaces: [
      { id: 1, title: "Kumbhalgarh", image: "https://images.unsplash.com/photo-1621360841013-c7683c659ec6?w=800" },
      { id: 2, title: "Chittorgarh", image: "https://images.unsplash.com/photo-1599661046289-e31897846e41?w=800" },
      { id: 3, title: "Mount Abu", image: "https://images.unsplash.com/photo-1603262110263-fb0112e7cc33?w=800" },
      { id: 4, title: "Ranakpur", image: "https://images.unsplash.com/photo-1561501900-3701fa6a0864?w=800" }
    ]
  },
  rishikesh: {
    title: "Rishikesh",
    location: "Uttarakhand",
    coordinates: [30.0869, 78.2676],
    video: rishikeshVideo,
    fullDesc: "Nestled in the foothills of the Himalayas, Rishikesh is known as the 'Yoga Capital of the World'. It is a unique hub where spiritual seekers and adventure enthusiasts meet on the banks of the emerald Ganges River.",
    thingsToDo: [
      { title: "White Water Rafting", description: "Conquer the Grade III rapids of the Ganges River.", image: "https://images.unsplash.com/photo-1629248457649-b082812aea6c?fm=jpg&q=60&w=3000&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cmFmdGluZ3xlbnwwfHwwfHx8MA%3D%3D" },
      { title: "Bungee Jumping", description: "Leap from 83 meters at Jumping Heights in Mohan Chatti.", image: "https://t4.ftcdn.net/jpg/01/79/96/69/360_F_179966921_KmXAtx9s0dbuEp0t9RpK7wjgP0YFmh0w.jpg" },
      { title: "Beatles Ashram", description: "Explore the graffiti-covered ruins where the Beatles stayed in 1968.", image: "https://cdn.getyourguide.com/img/tour/b2f8aa0e14b9af96c32aede7d18c595a38b935bf6e90f07bc4106e6209bc7d5e.png/68.jpg" },
      { title: "Ganga Aarti Parmarth", description: "Attend the serene sunset prayer ceremony at the riverbank.", image: "https://thumbs.dreamstime.com/b/ganga-aarti-ceremony-parmarth-niketan-ashram-sunset-rishikesh-world-capital-yoga-has-numerous-centres-also-india-175231808.jpg" },
      { title: "Laxman Jhula Walk", description: "Cross the iconic suspension bridge and visit the temples nearby.", image: "https://t3.ftcdn.net/jpg/03/74/93/04/360_F_374930485_QhvZlb4F5saU51kebDT2jRvZsuijbxms.jpg" },
      { title: "Riverside Camping", description: "Sleep under the stars in Shivpuri with bonfire and music.", image: "https://images.unsplash.com/photo-1504280390367-361c6d9f38f4?w=800" },
      { title: "Triveni Ghat Dip", description: "Take a holy dip where the three rivers supposedly meet.", image: "https://thumbs.dreamstime.com/b/triveni-ghat-walking-street-rishikesh-holy-dip-ganga-sacred-famous-aarti-words-comes-join-two-tri-x-189921434.jpg" },
      { title: "Yoga Retreat", description: "Join a 3-day detox yoga and meditation session.", image: "https://static.vecteezy.com/system/resources/thumbnails/075/605/360/small/diverse-friends-doing-pilates-class-golden-hour-outdoor-field-photo.jpg" },
      { title: "Neer Garh Waterfall", description: "A short trek to the beautiful natural limestone pools.", image: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/15/35/48/57/wanderer-gourav-bnqkjirhf1s.jpg?w=1200&h=-1&s=1" },
      { title: "Café Hopping", description: "Visit the famous Little Buddha Café for great views and food.", image: "https://www.shutterstock.com/image-photo/group-positive-pretty-asian-female-600nw-2405844319.jpg" }
    ],
    foodCategories: [
      { id: 1, title: "Best restaurants", image: "https://images.unsplash.com/photo-1554118811-1e0d58224f24?w=800" },
      { id: 2, title: "Best wellness bars", image: "https://images.unsplash.com/photo-1589302168068-964664d93dc0?w=800" },
      { id: 3, title: "Top coffee shops", image: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=800" },
      {id: 4, title: "Local Favorites", image: "https://images.unsplash.com/photo-1599488615731-7e5c2823ff28?w=800"}
    ],
    discoverCategories: [
      { id: 1, title: "Where to stay", image: "https://thumbs.dreamstime.com/b/city-street-view-car-window-high-rise-buildings-mountain-background-high-quality-city-street-view-car-window-433329600.jpg" },
      { id: 2, title: "Weather in Varanasi", image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=800" },
      { id: 3, title: "Find a travel agent", image: "https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=800" },
      { id: 4, title: "Find tours", image: "https://images.unsplash.com/photo-1539635278303-d4002c07eae3?w=800" }
    ],
    nearPlaces: [
      { id: 1, title: "Haridwar", image: "https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?w=800" },
      { id: 2, title: "Mussoorie", image: "https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?w=800" },
      { id: 3, title: "Dehradun", image: "https://images.unsplash.com/photo-1601050690597-df056fb04791?w=800" },
      { id: 4, title: "Tehri Dam", image: "https://images.unsplash.com/photo-1590050752117-238cb0fb12b1?w=800" }
    ],
    tripsAndItineraries: [
      { title: "Yoga & Meditation Retreat", image: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b" },
      { title: "Ganga Rafting Adventure", image: "https://images.unsplash.com/photo-1530731141654-5993c3016c77" },
      { title: "Spiritual Ghats & Laxman Jhula", image: "https://images.unsplash.com/photo-1767278593942-b0116721291b?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8c3ByaXR1YWwlMjBnaGF0c3xlbnwwfHwwfHx8MA%3D%3D" },
      { title: "Himalayan Foothills Trek", image: "https://images.unsplash.com/photo-1544198365-f5d60b6d8190" }
    ]
  },
  darjeeling: {
    title: "Darjeeling",
    location: "West Bengal",
    coordinates: [27.0410, 88.2663],
    video: darjeelingVideo,
    fullDesc: "Perched in the Lesser Himalayas, Darjeeling is world-famous for its aromatic tea gardens and the majestic view of Mt. Kanchenjunga. Its nostalgic UNESCO Toy Train and colonial charm make it a quintessential Indian hill station.",
    thingsToDo: [
      { title: "Toy Train Ride", description: "A nostalgic ride on the UNESCO steam-engine Himalayan Railway.", image: "https://images.unsplash.com/photo-1544735716-392fe2489ffa?w=800" },
      { title: "Tiger Hill Sunrise", description: "Witness the golden peaks of Kanchenjunga at 4:00 AM.", image: "https://images.unsplash.com/photo-1590077538740-05e44d7b1560?fm=jpg&q=60&w=3000&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dGlnZXIlMjBoaWxsfGVufDB8fDB8fHww" },
      { title: "Happy Valley Tea Estate", description: "Walk through tea bushes and learn how tea is processed.", image: "https://www.kiomoi.com/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fkmadmin%2Fimage%2Fupload%2Fc_scale%2Cw_500%2Ff_auto%2Fv1618487578%2Fkiomoi%2FDarjeeling_Happy_Valley_Tea_Estate_1618487577155.jpg&w=3840&q=75" },
      { title: "Batasia Loop", description: "See the spirals of the railway track and the War Memorial.", image: "https://darjeelingadventuretourism.com/images/batasia-loop-780.jpg" },
      { title: "Japanese Peace Pagoda", description: "Visit the white Buddhist stupa for tranquility and views.", image: "https://helpthetourists.in/destination/img/darjeeling/japanese-peace-pagoda/5.webp" },
      { title: "Himalayan Zoo", description: "See the Red Panda and Snow Leopards in their natural habitat.", image: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/32/d6/c6/b5/caption.jpg?w=900&h=500&s=1" },
      { title: "Ghoom Monastery", description: "Visit the oldest monastery in the region with the 15ft Maitreya Buddha.", image: "https://media.istockphoto.com/id/2223969191/photo/beautiful-view-of-interior-of-ghum-monastery-image-taken-with-permission-peaceful-calm-and.jpg?s=612x612&w=0&k=20&c=O58kI1GMpxKf_xSq_3lPC1EpIBfoF4geCPLXWOAXyKs=" },
      { title: "Mall Road Shopping", description: "Buy woolens, tea packets, and local Tibetan handicrafts.", image: "https://images.unsplash.com/photo-1506461883276-594a12b11cf3?w=800" },
      { title: "Rock Garden Visit", description: "A multi-level garden made by cutting rocks beside a waterfall.", image: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/09/4c/43/64/the-rock-garden-of-chandigarh.jpg?w=900&h=500&s=1" },
      { title: "Mountaineering Institute", description: "See Tenzing Norgay's climbing gear at the HMI Museum.", image: "https://images.unsplash.com/photo-1595123550441-d377e017de6a?w=800" }
    ],
    foodCategories: [
      { id: 1, title: "Best restaurants", image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=800" },
      { id: 2, title: "Best mountain bars", image: "https://images.unsplash.com/photo-1533089860892-a7c6f0a88666?w=800" },
      { id: 3, title: "Top coffee shops", image: "https://images.unsplash.com/photo-1525755662778-989d0524087e?w=800" },
      {id: 4, title: "Local Favorites", image: "https://images.unsplash.com/photo-1599488615731-7e5c2823ff28?w=800"}
    ],
    discoverCategories: [
      { id: 1, title: "Where to stay", image: "https://thumbs.dreamstime.com/b/city-street-view-car-window-high-rise-buildings-mountain-background-high-quality-city-street-view-car-window-433329600.jpg" },
      { id: 2, title: "Weather in Varanasi", image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=800" },
      { id: 3, title: "Find a travel agent", image: "https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=800" },
      { id: 4, title: "Find tours", image: "https://plus.unsplash.com/premium_photo-1716999430033-82bfa6136013?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8ZmluZCUyMHRvdXJzfGVufDB8fDB8fHww" }
    ],
    nearPlaces: [
      { id: 1, title: "Gangtok", image: "https://images.unsplash.com/photo-1590005024862-6b67679a29fb?w=800" },
      { id: 2, title: "Kalimpong", image: "https://images.unsplash.com/photo-1588668214407-6ea9a6d8c272?w=800" },
      { id: 3, title: "Mirik", image: "https://images.unsplash.com/photo-1516690561799-46d8f74f9abf?w=800" },
      { id: 4, title: "Pelling", image: "https://images.unsplash.com/photo-1593181629936-11c609b8db9b?w=800" }
    ],
    tripsAndItineraries: [
      { title: "3 days in the Queen of Hills", image: "https://images.unsplash.com/photo-1700219799598-e9b55f4bee5c?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cXVlZW4lMjBoaWxsc3xlbnwwfHwwfHx8MA%3D%3D" },
      { title: "Toy Train & Tea Estate Tour", image: "https://images.unsplash.com/photo-1574707669373-7bce91803505?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8dG95JTIwdHJhaW58ZW58MHx8MHx8fDA%3D" },
      { title: "Sunrise at Tiger Hill", image: "https://media.istockphoto.com/id/964432168/photo/a-dawn-at-tiger-hill-darjeeling.webp?a=1&b=1&s=612x612&w=0&k=20&c=UxsZkCiB1u1R8gGA8l2v96BEMJxODOKGuPz6vdP5Ok0=" },
      { title: "Sikkim & Darjeeling Loop", image: "https://images.unsplash.com/photo-1652792595182-427510e8644f?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8c2lra2ltJTIwYW5kJTIwZGFyamlsaW5nJTIwbG9vcHxlbnwwfHwwfHx8MA%3D%3D" }
    ]
  },
  andaman: {
    title: "Andaman",
    location: "Bay of Bengal",
    coordinates: [11.7401, 92.6586],
    video: andamanVideo,
    fullDesc: "The Andaman Islands are an archipelago of turquoise waters and lush mangroves. From the haunting colonial history of the Cellular Jail to the pristine white sands of Radhanagar Beach, it is India’s premier tropical island escape.",
    thingsToDo: [
      { title: "Scuba Diving Havelock", description: "Explore the world-famous reefs at Elephant Beach.", image: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=800" },
      { title: "Cellular Jail Tour", description: "Visit the historic 'Kala Pani' prison and see the light show.", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRHNAm9uA-QRFYBdvTsqu0xPdWaBV4HFokNpg&s" },
      { title: "Radhanagar Beach", description: "Sunbathe at Asia's best beach with pristine white sands.", image: "https://thumbs.dreamstime.com/b/wide-angle-view-famous-radhanagar-beach-swaraj-dweep-havelock-island-andaman-nicobar-islands-scene-features-449453153.jpg" },
      { title: "Sea Walking North Bay", description: "Walk on the ocean floor and touch the coral reefs.", image: "https://images.unsplash.com/photo-1582967788606-a171c1080cb0?w=800" },
      { title: "Baratang Limestone Caves", description: "Trek through mangroves to see ancient rock formations.", image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=800" },
      { title: "Ross Island Walk", description: "See the ruins of the British headquarters taken over by nature.", image: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/10/78/a4/51/ross-castle.jpg?w=1200&h=-1&s=1" },
      { title: "Glass Bottom Boat", description: "See marine life without getting wet at Jolly Buoy Island.", image: "https://images.unsplash.com/photo-1510414842594-a61c69b5ae57?w=800" },
      { title: "Chidiya Tapu Sunset", description: "Visit the 'Bird Island' for a peaceful and scenic sunset view.", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSRppH6FAh54fXRIj0ePRuIdgIkhEpoDHY_9A&s" },
      { title: "Mount Harriet Trek", description: "Highest point in South Andaman for panoramic views.", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRNJqynIzlIOzoX0HbG03wYPhiZByVgVqmcWA&s" },
      { title: "Kayaking in Mangroves", description: "Paddle through the calm and silent forest of Havelock.", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRN7JHPs4GnB0t3Ln63gPzQP1ZcizDrctS0Dw&s" }
    ],
    foodCategories: [
      { id: 1, title: "Best seafood", image: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=800" },
      { id: 2, title: "Best beach bars", image: "https://images.unsplash.com/photo-1774808241419-0caf5164301c?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fHdhdGVyZnJvbnQlMjBiYXJzfGVufDB8fDB8fHww" },
      { id: 3, title: "Top coffee shops", image: "https://images.unsplash.com/photo-1559339352-11d035aa65de?w=800" },
      {id: 4, title: "Local Favorites", image: "https://images.unsplash.com/photo-1599488615731-7e5c2823ff28?w=800"}
    ],
    discoverCategories: [
      { id: 1, title: "Where to stay", image: "https://thumbs.dreamstime.com/b/city-street-view-car-window-high-rise-buildings-mountain-background-high-quality-city-street-view-car-window-433329600.jpg" },
      { id: 2, title: "Weather in Varanasi", image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=800" },
      { id: 3, title: "Find a travel agent", image: "https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=800" },
      { id: 4, title: "Find tours", image: "https://images.unsplash.com/photo-1776111791183-c3286acf6de4?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" }
    ],
    nearPlaces: [
      { id: 1, title: "Gangtok", image: "https://images.unsplash.com/photo-1590005024862-6b67679a29fb?w=800" },
      { id: 2, title: "Kalimpong", image: "https://images.unsplash.com/photo-1588668214407-6ea9a6d8c272?w=800" },
      { id: 3, title: "Mirik", image: "https://images.unsplash.com/photo-1516690561799-46d8f74f9abf?w=800" },
      { id: 4, title: "Pelling", image: "https://images.unsplash.com/photo-1593181629936-11c609b8db9b?w=800" }
    ],
    tripsAndItineraries: [
      { title: "5 days in Tropical Paradise", image: "https://media.istockphoto.com/id/172202869/photo/birds-2.webp?a=1&b=1&s=612x612&w=0&k=20&c=30FfvE0YVlEuqy3jWPo17ec6tCxK4TJLK4xMoSFknPI=" },
      { title: "Havelock Island Scuba Diving", image: "https://media.istockphoto.com/id/2198545846/photo/girl-doing-scuba-adventurous-deep-sea-dive-with-dive-master-underwater-and-stingray-close-up.jpg?s=612x612&w=0&k=20&c=0ZpDrjZJXZhQv0wL6YyAqogLIJ9o8D0AuZkgzoWHJe0=" },
      { title: "Cellular Jail & Port Blair History", image: "https://media.istockphoto.com/id/1481379847/photo/selective-focus-of-cellular-jail-which-is-also-known-as-kalapani-jail-or-andaman-jail-is-one.jpg?s=612x612&w=0&k=20&c=zCcJigstIk7c_WKZ_QMK7fpA_-DhnjWT2D2fiyWUU5w=" },
      { title: "Neil Island Beach Hopping", image: "https://images.unsplash.com/photo-1590523277543-a94d2e4eb00b" }
    ]
  },
  mahabaleshwar: {
    title: "Mahabaleshwar",
    location: "Maharashtra",
    coordinates: [17.9300, 73.6478],
    video: mahabaleshwarVideo,
    fullDesc: "Set in the Western Ghats, Mahabaleshwar is a vast plateau famous for its strawberry farms, misty peaks, and cascading waterfalls. It remains a favorite hilltop retreat for its pleasant year-round climate and stunning valley views.",
    thingsToDo: [
      { title: "Strawberry Picking", description: "Hand-pick fresh strawberries at Mapro Garden farms.", image: "https://thumbs.dreamstime.com/b/families-picking-fresh-strawberries-strawberry-farm-rows-red-ripe-very-appetising-ready-to-be-picked-photo-taken-156448665.jpg" },
      { title: "Arthur's Seat", description: "Visit the highest point for a breathtaking view of the Savitri River.", image: "https://media-cdn.tripadvisor.com/media/attractions-splice-spp-674x446/12/ee/48/fb.jpg" },
      { title: "Venna Lake Boating", description: "Enjoy a rowboat ride surrounded by lush green trees.", image: "https://images.unsplash.com/photo-1510414842594-a61c69b5ae57?w=800" },
      { title: "Pratapgad Fort", description: "Visit the historic battleground of Shivaji Maharaj.", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSjhrD_fNF3IbBdf4Xrj0x2bLb4NPKQQKTz3g&s" },
      { title: "Panchgani Table Land", description: "Explore the second largest volcanic plateau in Asia.", image: "https://images.unsplash.com/photo-1501785888041-af3ef285b470?w=800" },
      { title: "Elephant's Head Point", description: "A rock formation that looks like the head of an elephant.", image: "https://thumbs.dreamstime.com/b/elephant-point-mahabaleshwar-closeup-view-elephant-point-mahabaleshwar-closeup-view-asia-179642206.jpg" },
      { title: "Parsi Point", description: "Beautiful view of the Dhom Dam backwaters and Krishna Valley.", image: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/14/d9/ab/25/lrm-export-134359847325165.jpg?w=300&h=300&s=1" },
      { title: "Old Mahabaleshwar", description: "Visit the 500-year-old Panchganga Temple and Shiva Temple.", image: "https://t4.ftcdn.net/jpg/19/34/43/39/360_F_1934433944_9VAUZxxKy5zBE0eIt0FOo3p37PBY5ItR.jpg" },
      { title: "Lingmala Waterfall", description: "A scenic waterfall that plunges 600 feet from a cliff.", image: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/08/b0/12/1f/the-majestic-lingmala.jpg?w=1200&h=-1&s=1" },
      { title: "Sydney Point", description: "Perfect spot for photography overlooking the Wai valley.", image: "https://images.unsplash.com/photo-1510414842594-a61c69b5ae57?w=800" }
    ],
    foodCategories: [
      { id: 1, title: "Best restaurants", image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=800" },
      { id: 2, title: "Best valley view bars", image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=800" },
      { id: 3, title: "Top coffee shops", image: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=800" },
      {id: 4, title: "Local Favorites", image: "https://images.unsplash.com/photo-1599488615731-7e5c2823ff28?w=800"}
    ],
    discoverCategories: [
      { id: 1, title: "Where to stay", image: "https://images.unsplash.com/photo-1700004060538-cb750e9a2992?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
      { id: 2, title: "Weather in Varanasi", image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=800" },
      { id: 3, title: "Find a travel agent", image: "https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=800" },
      { id: 4, title: "Find tours", image: "https://plus.unsplash.com/premium_photo-1661670468082-a2c8c28122d7?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fGZpbmQlMjB0b3Vyc3xlbnwwfHwwfHx8MA%3D%3D" }
    ],
    nearPlaces: [
      { id: 1, title: "Panchgani", image: "https://images.unsplash.com/photo-1506461883276-594a12b11cf3?w=800" },
      { id: 2, title: "Pratapgad Fort", image: "https://images.unsplash.com/photo-1614082242765-7c98ca0f3df3?w=800" },
      { id: 3, title: "Kaas Plateau", image: "https://images.unsplash.com/photo-1551576407-06109968430b?w=800" },
      { id: 4, title: "Tapola", image: "https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?w=800" }
    ],
    tripsAndItineraries: [
      { title: "Weekend Hill Station Getaway", image: "https://media.istockphoto.com/id/1206473179/photo/mount-abu-hill-station-india.jpg?s=2048x2048&w=is&k=20&c=kD4LbbkMsZkXzdhQDsKfPEQKRyra9aRTD3yO1NljPBo=" },
      { title: "Strawberry Farm & Lake Tour", image: "https://media.istockphoto.com/id/1318348032/photo/young-farmer-men-a-basket-filled-with-strawberries.jpg?s=2048x2048&w=is&k=20&c=AbyRyyjp5L7aGDWt-Oc9mDJYg7TENOKtotxnusxReEU=" },
      { title: "Western Ghats Monsoon Drive", image: "https://images.unsplash.com/photo-1506461883276-594a12b11cf3" },
      { title: "Panchgani & Pratapgad Trek", image: "https://images.unsplash.com/photo-1707848392989-5455a08ee4df?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8cHJhdGFwZ2FkJTIwdHJla3xlbnwwfHwwfHx8MA%3D%3D" }
    ]
  }
};