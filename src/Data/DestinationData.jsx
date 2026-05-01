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
      { id: 2, title: "Best rooftop bars", image: "https://images.unsplash.com/photo-1551576407-06109968430b?w=800" },
      { id: 3, title: "Top coffee shops", image: "https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?w=800" },
      {id: 4, title: "Local Favorites", image: "https://images.unsplash.com/photo-1599488615731-7e5c2823ff28?w=800"}
    ],
    discoverCategories: [
      { id: 1, title: "Where to stay", image: "https://thumbs.dreamstime.com/b/city-street-view-car-window-high-rise-buildings-mountain-background-high-quality-city-street-view-car-window-433329600.jpg" },
      { id: 2, title: "Weather in Varanasi", image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=800" },
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
  { title: "Golden Triangle: 3 days in Agra", image: "https://images.unsplash.com/photo-1548013146-72479768bbaa" },
  { title: "Sunrise Photography & Heritage Tour", image: "https://images.unsplash.com/photo-1564507592333-c60657eea523" },
  { title: "Mughal Architecture & History Walk", image: "https://images.unsplash.com/photo-1524492707947-28a0df2894b7" },
  { title: "24 Hours in the City of Love", image: "https://images.unsplash.com/photo-1585135760591-23f463378374" }
]
  },
  jaipur: {
    title: "Jaipur",
    location: "Rajasthan",
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
  { title: "4 days in North Goa Beaches", image: "https://images.unsplash.com/photo-1512753362246-760fa09ebdb3" },
  { title: "Old Goa Heritage & Church Tour", image: "https://images.unsplash.com/photo-1614082242765-7c98ca0f3df3" },
  { title: "South Goa: Peaceful Retreat", image: "https://images.unsplash.com/photo-1544735745-b89b7e3e488d" },
  { title: "Party, Water Sports & Sunsets", image: "https://images.unsplash.com/photo-1603212613170-6da0833ed7f5" }
]
  },
  kerala: {
    title: "Kerala",
    location: "South India",
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
      { id: 4, title: "Find tours", image: "https://images.unsplash.com/photo-1539635278303-d4002c07eae3?w=800" }
    ],
  nearPlaces: [
      { id: 1, title: "Munnar", image: "https://images.unsplash.com/photo-1516690561799-46d8f74f9abf?w=800" },
      { id: 2, title: "Alleppey", image: "https://images.unsplash.com/photo-1593181629936-11c609b8db9b?w=800" },
      { id: 3, title: "Thekkady", image: "https://images.unsplash.com/photo-1540555700478-4be289fbecef?w=800" },
      { id: 4, title: "Kanyakumari", image: "https://images.unsplash.com/photo-1588668214407-6ea9a6d8c272?w=800" }
    ],
    tripsAndItineraries: [
  { title: "7 days in God's Own Country", image: "https://images.unsplash.com/photo-1602216056096-3b40cc0c9944" },
  { title: "Backwater Houseboat Experience", image: "https://images.unsplash.com/photo-1593693411515-c202e9742464" },
  { title: "Munnar Tea Gardens Escape", image: "https://images.unsplash.com/photo-1593693397690-362cb9666ec2" },
  { title: "Kerala Wellness & Ayurveda Tour", image: "https://images.unsplash.com/photo-1545208393-216559629b7b" }
]
  },
  ladakh: {
    title: "Ladakh",
    location: "Himalayan Region",
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
      { id: 3, title: "Top coffee shops", image: "https://images.unsplash.com/photo-1534422298391-e4f8c170db0a?w=800" },
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
  { title: "Nubra Valley & Pangong Adventure", image: "https://images.unsplash.com/photo-1597033501655-66774e17815d" }
]
  },
  varanasi: {
    title: "Varanasi",
    location: "Uttar Pradesh",
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
      { id: 2, title: "Best riverside cafes", image: "https://images.unsplash.com/photo-1601050690597-df056fb04791?w=800" },
      { id: 3, title: "Top coffee shops", image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=800" },
      {id: 4, title: "Local Favorites", image: "https://images.unsplash.com/photo-1599488615731-7e5c2823ff28?w=800"}
    ],
    discoverCategories: [
      { id: 1, title: "Where to stay", image: "https://thumbs.dreamstime.com/b/city-street-view-car-window-high-rise-buildings-mountain-background-high-quality-city-street-view-car-window-433329600.jpg" },
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
  { title: "Ganges Boat Tour & Evening Aarti", image: "https://images.unsplash.com/photo-1597080407783-99710364f9f7" },
  { title: "Ancient Temples & Narrow Lanes", image: "https://images.unsplash.com/photo-1627894483216-2138af692e32" },
  { title: "Kashi Heritage & Food Walk", image: "https://images.unsplash.com/photo-1605309605703-e69d9822a16d" }
]
  },
  udaipur: {
    title: "Udaipur",
    location: "Rajasthan",
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
  { title: "Spiritual Ghats & Laxman Jhula", image: "https://images.unsplash.com/photo-1598977123418-45455531d10e" },
  { title: "Himalayan Foothills Trek", image: "https://images.unsplash.com/photo-1544198365-f5d60b6d8190" }
]
  },
  darjeeling: {
    title: "Darjeeling",
    location: "West Bengal",
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
      { id: 4, title: "Find tours", image: "https://images.unsplash.com/photo-1539635278303-d4002c07eae3?w=800" }
    ],
    nearPlaces: [
      { id: 1, title: "Gangtok", image: "https://images.unsplash.com/photo-1590005024862-6b67679a29fb?w=800" },
      { id: 2, title: "Kalimpong", image: "https://images.unsplash.com/photo-1588668214407-6ea9a6d8c272?w=800" },
      { id: 3, title: "Mirik", image: "https://images.unsplash.com/photo-1516690561799-46d8f74f9abf?w=800" },
      { id: 4, title: "Pelling", image: "https://images.unsplash.com/photo-1593181629936-11c609b8db9b?w=800" }
    ],
    tripsAndItineraries: [
  { title: "3 days in the Queen of Hills", image: "https://images.unsplash.com/photo-1544281679-53571bc887bc" },
  { title: "Toy Train & Tea Estate Tour", image: "https://images.unsplash.com/photo-1626241031267-850f368d901f" },
  { title: "Sunrise at Tiger Hill", image: "https://images.unsplash.com/photo-1597843796321-230ff2379f2c" },
  { title: "Sikkim & Darjeeling Loop", image: "https://images.unsplash.com/photo-1589136142558-9dec88424a1e" }
]
  },
  andaman: {
    title: "Andaman",
    location: "Bay of Bengal",
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
      { id: 2, title: "Best beach bars", image: "https://images.unsplash.com/photo-1550966841-3ee7adac166e?w=800" },
      { id: 3, title: "Top coffee shops", image: "https://images.unsplash.com/photo-1559339352-11d035aa65de?w=800" },
      {id: 4, title: "Local Favorites", image: "https://images.unsplash.com/photo-1599488615731-7e5c2823ff28?w=800"}
    ],
    discoverCategories: [
      { id: 1, title: "Where to stay", image: "https://thumbs.dreamstime.com/b/city-street-view-car-window-high-rise-buildings-mountain-background-high-quality-city-street-view-car-window-433329600.jpg" },
      { id: 2, title: "Weather in Varanasi", image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=800" },
      { id: 3, title: "Find a travel agent", image: "https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=800" },
      { id: 4, title: "Find tours", image: "https://images.unsplash.com/photo-1539635278303-d4002c07eae3?w=800" }
    ],
  nearPlaces: [
      { id: 1, title: "Gangtok", image: "https://images.unsplash.com/photo-1590005024862-6b67679a29fb?w=800" },
      { id: 2, title: "Kalimpong", image: "https://images.unsplash.com/photo-1588668214407-6ea9a6d8c272?w=800" },
      { id: 3, title: "Mirik", image: "https://images.unsplash.com/photo-1516690561799-46d8f74f9abf?w=800" },
      { id: 4, title: "Pelling", image: "https://images.unsplash.com/photo-1593181629936-11c609b8db9b?w=800" }
    ],
    tripsAndItineraries: [
  { title: "5 days in Tropical Paradise", image: "https://images.unsplash.com/photo-1589197331516-4d836306915c" },
  { title: "Havelock Island Scuba Diving", image: "https://images.unsplash.com/photo-1544551763-47a0159f9234" },
  { title: "Cellular Jail & Port Blair History", image: "https://images.unsplash.com/photo-1625235881434-6c701777000c" },
  { title: "Neil Island Beach Hopping", image: "https://images.unsplash.com/photo-1590523277543-a94d2e4eb00b" }
]
  },
  mahabaleshwar: {
    title: "Mahabaleshwar",
    location: "Maharashtra",
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
     { id: 1, title: "Where to stay", image: "https://thumbs.dreamstime.com/b/city-street-view-car-window-high-rise-buildings-mountain-background-high-quality-city-street-view-car-window-433329600.jpg" },
      { id: 2, title: "Weather in Varanasi", image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=800" },
      { id: 3, title: "Find a travel agent", image: "https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=800" },
      { id: 4, title: "Find tours", image: "https://images.unsplash.com/photo-1539635278303-d4002c07eae3?w=800" }
    ],
    nearPlaces: [
      { id: 1, title: "Panchgani", image: "https://images.unsplash.com/photo-1506461883276-594a12b11cf3?w=800" },
      { id: 2, title: "Pratapgad Fort", image: "https://images.unsplash.com/photo-1614082242765-7c98ca0f3df3?w=800" },
      { id: 3, title: "Kaas Plateau", image: "https://images.unsplash.com/photo-1551576407-06109968430b?w=800" },
      { id: 4, title: "Tapola", image: "https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?w=800" }
    ],
    tripsAndItineraries: [
  { title: "Weekend Hill Station Getaway", image: "https://images.unsplash.com/photo-1599147500104-ff2044837a61" },
  { title: "Strawberry Farm & Lake Tour", image: "https://images.unsplash.com/photo-1615485240388-121896796398" },
  { title: "Western Ghats Monsoon Drive", image: "https://images.unsplash.com/photo-1506461883276-594a12b11cf3" },
  { title: "Panchgani & Pratapgad Trek", image: "https://images.unsplash.com/photo-1626435640237-775b0586e398" }
]
  }
};