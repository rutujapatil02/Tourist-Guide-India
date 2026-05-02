// TripsData.jsx
// Detailed trip itinerary data for each destination
// Each trip slug matches the index in destinationDetails[key].tripsAndItineraries

export const tripsData = {
  tajmahal: [
    {
      slug: "golden-triangle-3-days-in-agra",
      title: "Golden Triangle: 3 days in Agra",
      image: "https://images.unsplash.com/photo-1548013146-72479768bbaa",
      duration: "3 Days",
      bestTime: "October – March",
      groupSize: "2–10 people",
      difficulty: "Easy",
      overview:
        "Explore the iconic Golden Triangle circuit with Agra as your base. This 3-day trip covers the Taj Mahal at sunrise, the grand Agra Fort, and a day trip to Fatehpur Sikri — one of the best-preserved Mughal ghost cities in India.",
      itinerary: [
        {
          day: 1,
          title: "Arrival & Sunset at Taj Mahal",
          activities: [
            "Check in to your heritage hotel in Agra",
            "Evening visit to the Taj Mahal for golden-hour photography",
            "Walk along the Yamuna riverside promenade",
            "Dinner at a rooftop restaurant with Taj views",
          ],
          image: "https://images.unsplash.com/photo-1564507592333-c60657eea523?w=800",
        },
        {
          day: 2,
          title: "Sunrise Taj & Agra Fort",
          activities: [
            "Pre-dawn entry to the Taj Mahal for sunrise (4:30 AM)",
            "Breakfast at a local chai stall",
            "Guided tour of Agra Fort and Diwan-i-Khas",
            "Visit Itmad-ud-Daula (Baby Taj) in the afternoon",
            "Evening Kinari Bazaar shopping walk",
          ],
          image: "https://media.istockphoto.com/id/1169495248/photo/agra-fort-medieval-indian-fort-at-agra-india-at-sunrise.jpg?s=612x612",
        },
        {
          day: 3,
          title: "Fatehpur Sikri & Departure",
          activities: [
            "Morning drive to Fatehpur Sikri (40 km)",
            "Explore Buland Darwaza, Panch Mahal, and royal courtyards",
            "Lunch at a local dhaba",
            "Return to Agra and departure",
          ],
          image: "https://t3.ftcdn.net/jpg/02/02/60/78/360_F_202607822_56X4UHztDCbXM1pUSdniwjKJIX51gkfb.jpg",
        },
      ],
      highlights: [
        "Taj Mahal at sunrise",
        "Agra Fort guided tour",
        "Fatehpur Sikri ghost city",
        "Baby Taj (Itmad-ud-Daula)",
        "Kinari Bazaar shopping",
      ],
      tips: "Book your Taj Mahal tickets online in advance to avoid long queues. Carry a scarf for the mosque areas.",
    },
    {
      slug: "sunrise-photography-heritage-tour",
      title: "Sunrise Photography & Heritage Tour",
      image: "https://images.unsplash.com/photo-1564507592333-c60657eea523",
      duration: "2 Days",
      bestTime: "November – February",
      groupSize: "1–6 people",
      difficulty: "Easy",
      overview:
        "A dedicated photography trip for those who want to capture the Taj Mahal and Agra's Mughal heritage in the best possible light. From misty dawns to golden evenings, this itinerary is curated for photography enthusiasts.",
      itinerary: [
        {
          day: 1,
          title: "Taj at Dawn & Mehtab Bagh",
          activities: [
            "4:30 AM entry for sunrise shoot at the Taj Mahal",
            "Shoot the reflection pool and garden symmetry",
            "Breakfast and rest",
            "Afternoon visit to Mehtab Bagh for mirror-view shots across Yamuna",
            "Blue-hour photography session",
          ],
          image: "https://images.unsplash.com/photo-1524492412937-b28074a5d7da?w=800",
        },
        {
          day: 2,
          title: "Agra Fort & Baby Taj",
          activities: [
            "Golden hour at Agra Fort's ramparts",
            "Photograph the red sandstone interiors",
            "Visit Itmad-ud-Daula — ideal for macro and detail shots",
            "Kalakriti dance show in the evening",
          ],
          image: "https://upload.wikimedia.org/wikipedia/commons/c/c9/I%27tim%C4%81d-ud-Daulah%2C_Agra.jpg",
        },
      ],
      highlights: [
        "Sunrise Taj Mahal shoot",
        "Mehtab Bagh reflection view",
        "Agra Fort architecture",
        "Baby Taj symmetry shots",
      ],
      tips: "Use a tripod for sunrise shots. The best fog conditions are in December and January.",
    },
    {
      slug: "mughal-architecture-history-walk",
      title: "Mughal Architecture & History Walk",
      image: "https://images.unsplash.com/photo-1524492707947-28a0df2894b7",
      duration: "1 Day",
      bestTime: "October – March",
      groupSize: "2–15 people",
      difficulty: "Easy",
      overview:
        "A deep-dive walking tour of Agra's Mughal architectural gems. With a certified guide, trace the history from Akbar to Aurangzeb through red sandstone and white marble masterpieces.",
      itinerary: [
        {
          day: 1,
          title: "Full Day Mughal Heritage Walk",
          activities: [
            "Start at Agra Fort — Jahangiri Mahal, Khas Mahal, and Sheesh Mahal",
            "Walk to Itmad-ud-Daula through backstreets",
            "Lunch at Pinch of Spice (famous Mughlai restaurant)",
            "Afternoon at the Taj Mahal with guided history session",
            "Fatehpur Sikri architecture overview (optional drive)",
          ],
          image: "https://images.unsplash.com/photo-1548013146-72479768bbaa?w=800",
        },
      ],
      highlights: [
        "Expert-guided architecture tour",
        "Agra Fort interior rooms",
        "Mughlai lunch experience",
        "Taj Mahal history deep-dive",
      ],
      tips: "Hire a government-certified guide from the Taj Mahal gate. Wear comfortable shoes — there is a lot of walking on uneven stone.",
    },
    {
      slug: "24-hours-in-the-city-of-love",
      title: "24 Hours in the City of Love",
      image: "https://images.unsplash.com/photo-1585135760591-23f463378374",
      duration: "1 Day",
      bestTime: "Year-round",
      groupSize: "2 people (ideal for couples)",
      difficulty: "Easy",
      overview:
        "Make the most of a single day in Agra with this perfectly timed itinerary. See the Taj at sunrise, explore the fort, taste local delicacies, and end with a rooftop dinner under the moonlit dome.",
      itinerary: [
        {
          day: 1,
          title: "Dawn to Dusk in Agra",
          activities: [
            "5:00 AM – Taj Mahal sunrise entry",
            "8:00 AM – Breakfast with Taj view at Saniya Palace Hotel",
            "10:00 AM – Agra Fort guided tour",
            "1:00 PM – Lunch at Pinch of Spice",
            "3:00 PM – Kinari Bazaar for Petha and souvenirs",
            "5:30 PM – Mehtab Bagh sunset view",
            "8:00 PM – Rooftop dinner at Esphahan (Oberoi Amarvilas)",
          ],
          image: "https://images.unsplash.com/photo-1564507592333-c60657eea523?w=800",
        },
      ],
      highlights: [
        "Sunrise Taj Mahal",
        "Rooftop dinner with Taj view",
        "Banarasi Petha tasting",
        "Sunset at Mehtab Bagh",
      ],
      tips: "Book the rooftop dinner restaurant in advance. Carry cash for bazaar shopping.",
    },
  ],

  jaipur: [
    {
      slug: "4-days-in-the-pink-city",
      title: "4 days in the Pink City",
      image: "https://images.unsplash.com/photo-1599661046289-e31897846e41",
      duration: "4 Days",
      bestTime: "November – February",
      groupSize: "2–12 people",
      difficulty: "Easy",
      overview:
        "A comprehensive 4-day exploration of Jaipur covering the city's most iconic forts, palaces, bazaars, and cultural experiences. From elephant rides at Amer Fort to folk dance evenings at Chokhi Dhani.",
      itinerary: [
        {
          day: 1,
          title: "Arrival & Old City Exploration",
          activities: [
            "Check in to a heritage haveli hotel",
            "Visit Hawa Mahal in the golden hour",
            "Walk through Johari Bazaar for gemstone jewelry",
            "Evening at Albert Hall Museum",
          ],
          image: "https://images.unsplash.com/photo-1603262110263-fb0112e7cc33?w=800",
        },
        {
          day: 2,
          title: "Amer Fort & Jaigarh",
          activities: [
            "Morning elephant ride up to Amer Fort",
            "Explore Sheesh Mahal and Ganesh Pol gateway",
            "Visit Jaigarh Fort and see Jaivana cannon",
            "Afternoon Nahargarh Fort sunset",
          ],
          image: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/07/16/fe/87/amer-elephant-safari.jpg?w=1200&h=1200&s=1",
        },
        {
          day: 3,
          title: "City Palace & Jantar Mantar",
          activities: [
            "Royal guided tour of City Palace",
            "Visit Jantar Mantar astronomical observatory",
            "Jal Mahal photography stop",
            "Shopping at Bapu Bazaar for block-print textiles",
          ],
          image: "https://images.unsplash.com/photo-1599661046289-e31897846e41?w=800",
        },
        {
          day: 4,
          title: "Chokhi Dhani & Departure",
          activities: [
            "Morning visit to Samode Palace (optional day trip)",
            "Lunch at Laxmi Misthan Bhandar for Dal Baati Churma",
            "Evening at Chokhi Dhani cultural village",
            "Folk dance, camel ride, and Rajasthani thali dinner",
          ],
          image: "https://images.unsplash.com/photo-1561501900-3701fa6a0864?w=800",
        },
      ],
      highlights: [
        "Amer Fort elephant ride",
        "Sheesh Mahal mirror palace",
        "Jantar Mantar UNESCO site",
        "Chokhi Dhani folk evening",
        "Gemstone jewelry shopping",
      ],
      tips: "Pre-book elephant rides at Amer Fort. Avoid visiting during the Diwali season unless you enjoy large crowds.",
    },
    {
      slug: "royal-forts-palaces-expedition",
      title: "Royal Forts & Palaces Expedition",
      image: "https://images.unsplash.com/photo-1477587458883-47145ed94245",
      duration: "3 Days",
      bestTime: "October – March",
      groupSize: "2–8 people",
      difficulty: "Moderate",
      overview:
        "A heritage-focused expedition across Jaipur's grandest fortifications. Walk the ramparts of Nahargarh, explore the hilltop Jaigarh, and descend into the royal quarters of Amer.",
      itinerary: [
        {
          day: 1,
          title: "Amer & Jaigarh Forts",
          activities: [
            "Early morning Amer Fort tour before crowds arrive",
            "Walk the secret tunnel connecting Amer to Jaigarh",
            "See the world's largest wheeled cannon at Jaigarh",
            "Lunch at fort-view café",
          ],
          image: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/07/16/fe/87/amer-elephant-safari.jpg?w=1200",
        },
        {
          day: 2,
          title: "Nahargarh & City Palace",
          activities: [
            "Morning hike or drive up to Nahargarh Fort",
            "Explore the royal suites of Madhavendra Bhavan",
            "Afternoon City Palace guided tour",
            "Sunset rooftop view of the Pink City",
          ],
          image: "https://t3.ftcdn.net/jpg/08/03/14/06/360_F_803140668_a8hZXCNWkAIeEqO7kGSrgo4yt36BAncN.jpg",
        },
        {
          day: 3,
          title: "Ranthambore Fort (Day Trip)",
          activities: [
            "Drive to Ranthambore National Park (3 hrs)",
            "Explore the UNESCO-listed Ranthambore Fort",
            "Optional tiger safari in the afternoon",
            "Return to Jaipur",
          ],
          image: "https://images.unsplash.com/photo-1524230572899-a752b3835840?w=800",
        },
      ],
      highlights: [
        "Amer Fort secret tunnel",
        "Jaivana cannon at Jaigarh",
        "Nahargarh sunset panorama",
        "Optional Ranthambore tiger safari",
      ],
      tips: "Wear sturdy shoes for the fort walks. Carry water and sunscreen — the fort paths are exposed to full sun.",
    },
    {
      slug: "rajasthani-art-culture-trail",
      title: "Rajasthani Art & Culture Trail",
      image: "https://images.unsplash.com/photo-1524230572899-a752b3835840",
      duration: "2 Days",
      bestTime: "January – March",
      groupSize: "2–20 people",
      difficulty: "Easy",
      overview:
        "Dive into Jaipur's vibrant art scene — from block printing workshops to miniature painting studios. A culturally immersive experience for art lovers.",
      itinerary: [
        {
          day: 1,
          title: "Craft Workshops & Museums",
          activities: [
            "Morning block-printing workshop at Anokhi Museum",
            "Visit Albert Hall Museum's textile collection",
            "Lunch at a heritage haveli",
            "Afternoon miniature painting class at a local studio",
            "Evening Rajasthani puppet show",
          ],
          image: "https://images.unsplash.com/photo-1477587458883-47145ed94245?w=800",
        },
        {
          day: 2,
          title: "Bazaars & Jaipur Literature Festival",
          activities: [
            "Morning at Johari Bazaar for silver jewelry",
            "Visit Tripolia Bazaar for lac bangles",
            "Afternoon Jaipur Literature Festival (seasonal – January)",
            "Sunset at Nahargarh Fort Sculpture Park",
          ],
          image: "https://images.unsplash.com/photo-1506461883276-594a12b11cf3?w=800",
        },
      ],
      highlights: [
        "Block printing workshop",
        "Miniature painting class",
        "Anokhi Museum",
        "Rajasthani puppet show",
        "Johari Bazaar silver jewelry",
      ],
      tips: "The Jaipur Literature Festival is held every January. Book accommodation well in advance if you plan to attend.",
    },
    {
      slug: "the-ultimate-rajasthan-road-trip",
      title: "The Ultimate Rajasthan Road Trip",
      image: "https://images.unsplash.com/photo-1590050752117-238cb0fb12b1",
      duration: "7 Days",
      bestTime: "October – February",
      groupSize: "2–6 people",
      difficulty: "Moderate",
      overview:
        "Start in Jaipur and drive through Pushkar, Jodhpur, Jaisalmer, and Udaipur. This is the classic Rajasthan circuit through its most iconic Pink, Blue, and White cities.",
      itinerary: [
        {
          day: 1,
          title: "Jaipur – Amer Fort & City Palace",
          activities: ["Amer Fort", "City Palace", "Hawa Mahal evening"],
          image: "https://images.unsplash.com/photo-1599661046289-e31897846e41?w=800",
        },
        {
          day: 2,
          title: "Drive to Pushkar",
          activities: ["Brahma Temple", "Pushkar Lake ghats", "Camel Fair (seasonal)"],
          image: "https://images.unsplash.com/photo-1590050752117-238cb0fb12b1?w=800",
        },
        {
          day: 3,
          title: "Pushkar to Jodhpur",
          activities: ["Mehrangarh Fort", "Jaswant Thada", "Clock Tower Market"],
          image: "https://images.unsplash.com/photo-1477587458883-47145ed94245?w=800",
        },
        {
          day: 4,
          title: "Jodhpur to Jaisalmer",
          activities: ["Desert drive", "Sonar Fort", "Sam sand dunes camel ride"],
          image: "https://images.unsplash.com/photo-1524230572899-a752b3835840?w=800",
        },
        {
          day: 5,
          title: "Jaisalmer Desert Camp",
          activities: ["Desert camp overnight", "Folk music under stars", "Sunrise dunes walk"],
          image: "https://images.unsplash.com/photo-1590050752117-238cb0fb12b1?w=800",
        },
        {
          day: 6,
          title: "Drive to Udaipur",
          activities: ["Ranakpur Jain Temple en route", "Lake Pichola boat ride", "City Palace"],
          image: "https://images.unsplash.com/photo-1603262110263-fb0112e7cc33?w=800",
        },
        {
          day: 7,
          title: "Udaipur Exploration & Departure",
          activities: ["Sajjangarh Fort", "Bagore Ki Haveli dance show", "Departure"],
          image: "https://images.unsplash.com/photo-1599661046289-e31897846e41?w=800",
        },
      ],
      highlights: [
        "Amer & Mehrangarh forts",
        "Jaisalmer desert camp",
        "Pushkar Brahma Temple",
        "Lake Pichola boat ride",
        "Ranakpur Jain Temple",
      ],
      tips: "Rent a self-drive car or hire a driver for the full circuit. Book desert camp stays in advance during peak season (Nov–Jan).",
    },
  ],

  goa: [
    {
      slug: "4-days-in-north-goa-beaches",
      title: "4 days in North Goa Beaches",
      image: "https://images.unsplash.com/photo-1512753362246-760fa09ebdb3",
      duration: "4 Days",
      bestTime: "November – February",
      groupSize: "2–10 people",
      difficulty: "Easy",
      overview:
        "Party, relax, and explore the finest stretch of North Goa beaches — from the lively Baga and Calangute to the bohemian Anjuna and the hidden gem Vagator.",
      itinerary: [
        {
          day: 1,
          title: "Arrival & Baga Beach",
          activities: ["Check in at beachside resort", "Sunset at Baga Beach", "Dinner at Britto's", "Tito's Street nightlife"],
          image: "https://www.treebo.com/blog/wp-content/uploads/2018/04/Best-Beach-Shacks-in-North-Goa.jpg",
        },
        {
          day: 2,
          title: "Calangute & Water Sports",
          activities: ["Parasailing at Calangute", "Jet skiing", "Lunch at a beach shack", "Evening casino cruise on Mandovi River"],
          image: "https://images.unsplash.com/photo-1590523277543-a94d2e4eb00b?w=800",
        },
        {
          day: 3,
          title: "Anjuna Flea Market & Vagator",
          activities: ["Anjuna Wednesday Flea Market", "Shop for boho clothing and jewelry", "Afternoon at Vagator beach", "Sunset at Chapora Fort"],
          image: "https://images.unsplash.com/photo-1533900298318-6b8da08a523e?w=800",
        },
        {
          day: 4,
          title: "Grande Island Scuba & Departure",
          activities: ["Morning scuba diving at Grande Island", "Visit Aguada Fort", "Final beach lunch", "Departure"],
          image: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=800",
        },
      ],
      highlights: ["Baga & Calangute beaches", "Anjuna Flea Market", "Scuba diving", "Casino night cruise", "Chapora Fort sunset"],
      tips: "Rent a scooter for the most convenient beach-hopping experience. Always carry cash at beach shacks.",
    },
    {
      slug: "old-goa-heritage-church-tour",
      title: "Old Goa Heritage & Church Tour",
      image: "https://images.unsplash.com/photo-1614082242765-7c98ca0f3df3",
      duration: "1 Day",
      bestTime: "October – March",
      groupSize: "2–20 people",
      difficulty: "Easy",
      overview:
        "Explore Goa's rich Portuguese colonial legacy through its stunning UNESCO-listed churches, the Latin Quarter of Fontainhas, and the spice markets of Panjim.",
      itinerary: [
        {
          day: 1,
          title: "Old Goa & Fontainhas Walk",
          activities: [
            "Basilica of Bom Jesus — St. Francis Xavier's relics",
            "Se Cathedral — largest church in Asia",
            "Church of St. Francis of Assisi",
            "Afternoon Fontainhas Latin Quarter walk",
            "Spice market visit in Mapusa",
            "Sunset at Panjim waterfront",
          ],
          image: "https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?w=800",
        },
      ],
      highlights: ["Basilica of Bom Jesus", "Se Cathedral", "Fontainhas colourful streets", "Panjim waterfront"],
      tips: "Wear modest clothing when visiting churches. The best time to visit Fontainhas is in the morning light for photography.",
    },
    {
      slug: "south-goa-peaceful-retreat",
      title: "South Goa: Peaceful Retreat",
      image: "https://images.unsplash.com/photo-1544735745-b89b7e3e488d",
      duration: "3 Days",
      bestTime: "November – March",
      groupSize: "2–8 people",
      difficulty: "Easy",
      overview:
        "Escape the crowds of North Goa and unwind in South Goa's pristine beaches — Palolem, Agonda, and Colva — with a spice plantation tour and wildlife excursion.",
      itinerary: [
        {
          day: 1,
          title: "Palolem Beach & Sunset Cruise",
          activities: ["Arrive at Palolem Beach", "Kayaking in calm lagoon", "Dolphin-watching sunset cruise", "Seafood dinner on the beach"],
          image: "https://images.unsplash.com/photo-1512753362246-760fa09ebdb3?w=800",
        },
        {
          day: 2,
          title: "Spice Plantation & Dudhsagar Falls",
          activities: ["Morning spice plantation tour with Goan lunch", "Afternoon Dudhsagar Falls trek", "Swim in the waterfall pool", "Return to resort"],
          image: "https://images.unsplash.com/photo-1613844838171-e649c7ed3e0d?w=800",
        },
        {
          day: 3,
          title: "Agonda Beach & Departure",
          activities: ["Quiet morning at Agonda Beach", "Yoga session at beachside studio", "Lunch at a café", "Departure"],
          image: "https://images.unsplash.com/photo-1544735745-b89b7e3e488d?w=800",
        },
      ],
      highlights: ["Palolem Beach kayaking", "Dudhsagar Falls swim", "Dolphin-watching cruise", "Spice plantation tour"],
      tips: "South Goa is much quieter than North Goa. Perfect for couples and families seeking a peaceful retreat.",
    },
    {
      slug: "party-water-sports-sunsets",
      title: "Party, Water Sports & Sunsets",
      image: "https://images.unsplash.com/photo-1603212613170-6da0833ed7f5",
      duration: "3 Days",
      bestTime: "December – January",
      groupSize: "4–15 people",
      difficulty: "Easy",
      overview:
        "The ultimate high-energy Goa trip combining extreme water sports, rooftop parties, beach clubs, and the iconic Goa sunset experience.",
      itinerary: [
        {
          day: 1,
          title: "Water Sports Extravaganza",
          activities: ["Scuba diving at Grande Island", "Banana boat ride", "Jet skiing", "Evening at Curlies beach club, Anjuna"],
          image: "https://images.unsplash.com/photo-1590523277543-a94d2e4eb00b?w=800",
        },
        {
          day: 2,
          title: "Casino Night & Nightlife",
          activities: ["Afternoon beach relaxation", "Casino cruise on Mandovi River", "Tito's Lane bar crawl", "Late night beachside bonfire"],
          image: "https://images.unsplash.com/photo-1596838132731-3301c3fd4317?w=800",
        },
        {
          day: 3,
          title: "Sunset Cruise & Departure",
          activities: ["Morning at leisure", "Luxury sunset cruise with music and drinks", "Farewell seafood dinner", "Departure"],
          image: "https://images.unsplash.com/photo-1603212613170-6da0833ed7f5?w=800",
        },
      ],
      highlights: ["Scuba diving", "Casino cruise", "Tito's nightlife", "Luxury sunset cruise", "Anjuna beach club"],
      tips: "New Year's Eve in Goa is legendary. Book accommodation at least 2 months in advance for the December peak season.",
    },
  ],

  kerala: [
    {
      slug: "7-days-in-gods-own-country",
      title: "7 days in God's Own Country",
      image: "https://images.unsplash.com/photo-1602216056096-3b40cc0c9944",
      duration: "7 Days",
      bestTime: "September – March",
      groupSize: "2–10 people",
      difficulty: "Easy",
      overview:
        "The definitive Kerala experience — from the backwaters of Alleppey to the tea hills of Munnar, the wildlife of Thekkady, and the colonial charm of Fort Kochi.",
      itinerary: [
        { day: 1, title: "Arrive Kochi & Fort Kochi Walk", activities: ["Chinese fishing nets", "St. Francis Church", "Mattancherry spice market", "Kathakali performance evening"], image: "https://t3.ftcdn.net/jpg/07/09/09/06/360_F_709090633_ETb1OiBZ1SUeDjYhYSVhFIF9hq8MPoN5.jpg" },
        { day: 2, title: "Kochi to Munnar", activities: ["Drive through spice plantations", "Cheeyappara waterfalls stop", "Check in at Munnar tea estate resort"], image: "https://images.unsplash.com/photo-1516690561799-46d8f74f9abf?w=800" },
        { day: 3, title: "Munnar Tea Gardens", activities: ["Happy Valley Tea Estate tour", "Eravikulam National Park", "Sunset at Top Station"], image: "https://images.unsplash.com/photo-1516690561799-46d8f74f9abf?w=800" },
        { day: 4, title: "Munnar to Thekkady", activities: ["Periyar Lake boat safari", "Spice plantation walk", "Kalarippayattu martial arts show"], image: "https://png.pngtree.com/thumb_back/fh260/background/20250615/pngtree-majestic-african-wildlife-sunset-safari-animals-image_17430211.jpg" },
        { day: 5, title: "Thekkady to Alleppey", activities: ["Morning spice market", "Afternoon arrival Alleppey", "Board houseboat", "Sunset on the backwaters"], image: "https://images.unsplash.com/photo-1593181629936-11c609b8db9b?w=800" },
        { day: 6, title: "Houseboat Day", activities: ["Full day backwater cruise", "Village visits by canoe", "Kerala sadya lunch on boat", "Overnight houseboat stay"], image: "https://images.unsplash.com/photo-1593681411515-c202e9742464?w=800" },
        { day: 7, title: "Varkala & Departure", activities: ["Varkala cliff walk", "Final Kerala seafood lunch", "Departure from Thiruvananthapuram"], image: "https://images.unsplash.com/photo-1590050752117-238cb0fb12b1?w=800" },
      ],
      highlights: ["Alleppey houseboat cruise", "Munnar tea estates", "Periyar wildlife safari", "Fort Kochi heritage walk", "Kathakali performance"],
      tips: "Book houseboats at least 2 weeks in advance during peak season (Dec–Jan). Opt for a premium houseboat for AC rooms.",
    },
    {
      slug: "backwater-houseboat-experience",
      title: "Backwater Houseboat Experience",
      image: "https://images.unsplash.com/photo-1593693411515-c202e9742464",
      duration: "2 Days",
      bestTime: "September – February",
      groupSize: "2–6 people",
      difficulty: "Easy",
      overview:
        "An intimate 2-day houseboat journey through Kerala's legendary network of canals, lakes, and lagoons — with fresh fish meals, village stopovers, and a night under the stars.",
      itinerary: [
        { day: 1, title: "Board at Alleppey & Cruise", activities: ["Board houseboat at Alleppey jetty", "Cruise through Punnamada Lake", "Coir-making village visit", "Kerala sadya lunch on board", "Sunset cocktails on the deck"], image: "https://images.unsplash.com/photo-1593181629936-11c609b8db9b?w=800" },
        { day: 2, title: "Morning Canoe & Disembark", activities: ["Early morning canoe through narrow village canals", "Breakfast of appam and stew", "Disembark at Kumarakom", "Optional Kumarakom Bird Sanctuary visit"], image: "https://images.unsplash.com/photo-1593693397690-362cb9666ec2?w=800" },
      ],
      highlights: ["Houseboat overnight stay", "Kerala sadya lunch", "Village canoe tour", "Punnamada Lake cruise"],
      tips: "Choose a houseboat with a certified cook. Ask for vegetarian or seafood Kerala meals cooked fresh on board.",
    },
    {
      slug: "munnar-tea-gardens-escape",
      title: "Munnar Tea Gardens Escape",
      image: "https://images.unsplash.com/photo-1593693397690-362cb9666ec2",
      duration: "3 Days",
      bestTime: "September – April",
      groupSize: "2–8 people",
      difficulty: "Easy to Moderate",
      overview:
        "Spend 3 days in the misty highlands of Munnar — walking through emerald tea carpets, visiting colonial-era tea factories, and trekking to mountain viewpoints.",
      itinerary: [
        { day: 1, title: "Arrive Munnar & Tea Estate", activities: ["Arrive and check in to plantation resort", "Guided tea garden walk", "Tea tasting session", "Sunset at Echo Point"], image: "https://images.unsplash.com/photo-1516690561799-46d8f74f9abf?w=800" },
        { day: 2, title: "Eravikulam & Top Station", activities: ["Eravikulam Nilgiri Tahr sanctuary", "Trek to Top Station (highest point)", "Kundala Lake boating", "Dinner at resort with bonfire"], image: "https://images.unsplash.com/photo-1516690561799-46d8f74f9abf?w=800" },
        { day: 3, title: "Mattupetty Dam & Departure", activities: ["Morning at Mattupetty Lake", "Indo-Swiss Farm visit", "Blossom Hydel Park", "Departure to Kochi"], image: "https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?w=800" },
      ],
      highlights: ["Tea tasting sessions", "Top Station panoramic views", "Eravikulam wildlife trek", "Kundala Lake boating"],
      tips: "Carry a light jacket even in winter — Munnar nights are cold. The Neelakurinji flowers bloom every 12 years (next: 2030).",
    },
    {
      slug: "kerala-wellness-ayurveda-tour",
      title: "Kerala Wellness & Ayurveda Tour",
      image: "https://images.unsplash.com/photo-1545208393-216559629b7b",
      duration: "5 Days",
      bestTime: "June – September (Monsoon — best for Ayurveda)",
      groupSize: "1–4 people",
      difficulty: "Easy",
      overview:
        "Rejuvenate with authentic Kerala Ayurvedic treatments, yoga sessions, and a detox diet at a certified wellness resort. The monsoon season is considered the most effective time for Panchakarma therapy.",
      itinerary: [
        { day: 1, title: "Arrive & Initial Consultation", activities: ["Arrive at Ayurveda resort", "Doctor consultation and Prakriti assessment", "Gentle introductory oil massage", "Sattvic dinner"], image: "https://images.unsplash.com/photo-1540555700478-4be289fbecef?w=800" },
        { day: 2, title: "Panchakarma Day 1", activities: ["Abhyanga full-body oil massage", "Shirodhara — warm oil pouring therapy", "Yoga and pranayama session", "Herbal bath"], image: "https://images.unsplash.com/photo-1540555700478-4be289fbecef?w=800" },
        { day: 3, title: "Njavara Kizhi & Meditation", activities: ["Njavara rice bolus treatment", "Guided meditation at sunrise", "Herbal steam bath", "Afternoon at leisure by the garden"], image: "https://images.unsplash.com/photo-1545208393-216559629b7b?w=800" },
        { day: 4, title: "Backwater Excursion", activities: ["Morning boat ride through calm backwaters", "Afternoon herbal consultation", "Pizhichil royal oil bath", "Evening Kathakali performance"], image: "https://images.unsplash.com/photo-1593181629936-11c609b8db9b?w=800" },
        { day: 5, title: "Final Session & Departure", activities: ["Final consultation with doctor", "Takradhara (buttermilk therapy)", "Sattvic farewell breakfast", "Departure with personalized wellness kit"], image: "https://images.unsplash.com/photo-1540555700478-4be289fbecef?w=800" },
      ],
      highlights: ["Panchakarma therapy", "Shirodhara treatment", "Backwater Ayurveda retreat", "Personalised wellness plan"],
      tips: "Choose only Kerala Government-certified Ayurveda centres. The monsoon (June–August) is scientifically the best time for treatment.",
    },
  ],

  ladakh: [
    {
      slug: "7-days-in-the-land-of-high-passes",
      title: "7 days in the Land of High Passes",
      image: "https://images.unsplash.com/photo-1581793745862-99fde7fa73d2",
      duration: "7 Days",
      bestTime: "June – September",
      groupSize: "2–10 people",
      difficulty: "Moderate to Challenging",
      overview:
        "The complete Ladakh experience — from Leh's monasteries and markets to the remote Nubra Valley, the surreal Pangong Tso, and the highest motorable road at Khardung La.",
      itinerary: [
        { day: 1, title: "Arrive Leh & Acclimatize", activities: ["Arrive Leh (3,500m)", "Rest — strictly no physical exertion", "Evening Leh Palace stroll", "Light Thukpa dinner"], image: "https://images.unsplash.com/photo-1590005024862-6b67679a29fb?w=800" },
        { day: 2, title: "Local Leh Sightseeing", activities: ["Shanti Stupa at sunrise", "Leh Market handicrafts", "Hemis Monastery", "Thiksey Monastery"], image: "https://images.unsplash.com/photo-1590005024862-6b67679a29fb?w=800" },
        { day: 3, title: "Magnetic Hill & Confluence", activities: ["Magnetic Hill", "Sangam — Indus-Zanskar river confluence", "Gurudwara Patthar Sahib", "Rafting on Zanskar (optional)"], image: "https://t3.ftcdn.net/jpg/02/70/18/02/360_F_270180298_10gFreDTCjSXZ2rFGboGs5f9ubXVWs6N.jpg" },
        { day: 4, title: "Nubra Valley via Khardung La", activities: ["Cross Khardung La (5,359m)", "Arrive Hunder — Nubra Valley", "Bactrian camel safari on sand dunes", "Overnight in Nubra camp"], image: "https://www.tourmyindia.com/states/ladakh/imagess/camel-adventure.jpg" },
        { day: 5, title: "Diskit Monastery & Back to Leh", activities: ["Diskit Monastery — giant Maitreya Buddha", "Sumur Monastery", "Return to Leh via Khardung La"], image: "https://discoverlehladakh.in/wp-content/uploads/2020/06/Hemis-monastery-1022x530.jpeg" },
        { day: 6, title: "Pangong Tso Lake", activities: ["Drive to Pangong Tso (5 hrs)", "Arrive at the lake (4,350m)", "Photography on the blue-green shores", "Overnight in lakeside camp"], image: "https://images.unsplash.com/photo-1581791534721-e599df4417f7?w=800" },
        { day: 7, title: "Pangong Sunrise & Departure", activities: ["Sunrise at Pangong Lake", "Drive back to Leh", "Departure"], image: "https://images.unsplash.com/photo-1581791534721-e599df4417f7?w=800" },
      ],
      highlights: ["Pangong Tso camping", "Khardung La pass", "Nubra camel safari", "Hemis Monastery", "Sangam river confluence"],
      tips: "Spend at least 2 days acclimatizing in Leh before any high-altitude excursion. Carry altitude sickness medication (Diamox). Inner Line Permit required for Pangong and Nubra.",
    },
    {
      slug: "the-ultimate-bike-trip-to-leh",
      title: "The Ultimate Bike Trip to Leh",
      image: "https://images.unsplash.com/photo-1626621341517-bbf3d9990a23",
      duration: "10 Days",
      bestTime: "June – August",
      groupSize: "2–15 bikers",
      difficulty: "Challenging",
      overview:
        "India's most legendary road trip — ride from Manali through high-altitude deserts, glacial passes, and remote monasteries to reach Leh. A bucket-list experience for bikers.",
      itinerary: [
        { day: 1, title: "Start Manali — Rohtang Pass", activities: ["Depart Manali at dawn", "Cross Rohtang Pass (3,978m)", "Camp at Sissu"], image: "https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?w=800" },
        { day: 2, title: "Keylong to Jispa", activities: ["Ride through Lahaul Valley", "Visit Kardang Monastery", "Camp at Jispa"], image: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=800" },
        { day: 3, title: "Baralacha La Pass", activities: ["Cross Baralacha La (4,890m)", "Sarchu plains — highest campsite"], image: "https://images.unsplash.com/photo-1581791534721-e599df4417f7?w=800" },
        { day: 4, title: "Lachulung La & Tanglang La", activities: ["Cross two more high passes", "Arrive Upshi", "First view of Indus Valley"], image: "https://images.unsplash.com/photo-1625398407796-82650a8c135f?w=800" },
        { day: 5, title: "Arrive Leh", activities: ["Enter Leh town", "Bike cleaning and rest", "Evening Leh market walk"], image: "https://images.unsplash.com/photo-1590005024862-6b67679a29fb?w=800" },
        { day: 6, title: "Leh Rest & Local Sightseeing", activities: ["Shanti Stupa", "Hemis Monastery", "Leh Palace"], image: "https://images.unsplash.com/photo-1616712134411-6b6ae89bc3ba?w=800" },
        { day: 7, title: "Khardung La & Nubra", activities: ["Cross Khardung La on bike", "Nubra Valley arrival", "Camel safari"], image: "https://t4.ftcdn.net/jpg/01/09/84/91/360_F_109849179_Z4ggL0DY6MoavyhOQWkNrJ3yL6c14I4T.jpg" },
        { day: 8, title: "Nubra to Pangong", activities: ["Cross Shyok Valley", "Arrive Pangong Tso", "Overnight camp"], image: "https://images.unsplash.com/photo-1581791534721-e599df4417f7?w=800" },
        { day: 9, title: "Pangong to Leh", activities: ["Sunrise shoot", "Ride back to Leh via Changla Pass"], image: "https://images.unsplash.com/photo-1581791534721-e599df4417f7?w=800" },
        { day: 10, title: "Departure", activities: ["Final breakfast in Leh", "Fly out or ride toward Srinagar"], image: "https://images.unsplash.com/photo-1590005024862-6b67679a29fb?w=800" },
      ],
      highlights: ["Manali–Leh highway", "Rohtang, Baralacha La, Tanglang La passes", "Khardung La bike crossing", "Pangong Tso sunrise", "Nubra camel safari"],
      tips: "Rent a Royal Enfield in Manali. Carry a puncture kit, extra fuel can, and warm riding gear. Mobile signals are almost nonexistent on the route.",
    },
    {
      slug: "monastery-spirituality-tour",
      title: "Monastery & Spirituality Tour",
      image: "https://images.unsplash.com/photo-1616712134411-6b6ae89bc3ba",
      duration: "4 Days",
      bestTime: "June – October",
      groupSize: "2–15 people",
      difficulty: "Easy to Moderate",
      overview:
        "A peaceful and introspective tour of Ladakh's most revered Buddhist monasteries — Hemis, Thiksey, Diskit, and Lamayuru — set against dramatic mountain backdrops.",
      itinerary: [
        { day: 1, title: "Leh Monasteries Circuit", activities: ["Shanti Stupa morning prayer", "Namgyal Tsemo Monastery", "Leh Palace", "Sankar Monastery walk"], image: "https://images.unsplash.com/photo-1590005024862-6b67679a29fb?w=800" },
        { day: 2, title: "Hemis & Thiksey", activities: ["Hemis Monastery — richest in Ladakh", "Hemis Festival (June/July)", "Thiksey — the Potala of Ladakh", "Shey Palace"], image: "https://discoverlehladakh.in/wp-content/uploads/2020/06/Hemis-monastery-1022x530.jpeg" },
        { day: 3, title: "Alchi & Lamayuru", activities: ["Alchi Monastery — 10th century Kashmiri murals", "Rizong Monastery and nunnery", "Lamayuru — moonland landscape"], image: "https://images.unsplash.com/photo-1616712134411-6b6ae89bc3ba?w=800" },
        { day: 4, title: "Diskit Monastery & Departure", activities: ["Diskit Monastery — giant 32m Maitreya Buddha", "Nubra Valley prayers", "Return Leh and departure"], image: "https://discoverlehladakh.in/wp-content/uploads/2020/06/Hemis-monastery-1022x530.jpeg" },
      ],
      highlights: ["Hemis Festival attendance", "Lamayuru moonland", "Alchi 10th-century murals", "Diskit giant Buddha"],
      tips: "Remove shoes and do not photograph monks without permission. Many monasteries have early morning and evening prayer sessions open to visitors.",
    },
    {
      slug: "nubra-valley-pangong-adventure",
      title: "Nubra Valley & Pangong Adventure",
      image: "https://images.unsplash.com/photo-1597033501655-66774e17815d",
      duration: "4 Days",
      bestTime: "June – September",
      groupSize: "2–8 people",
      difficulty: "Moderate",
      overview:
        "A focused adventure through Ladakh's two most dramatic landscapes — the cold desert of Nubra Valley and the alien-blue waters of Pangong Tso.",
      itinerary: [
        { day: 1, title: "Leh to Nubra via Khardung La", activities: ["Cross Khardung La (world's highest motorable road)", "Stop at summit for photos", "Arrive Hunder village", "Bactrian camel safari at sunset"], image: "https://t4.ftcdn.net/jpg/01/09/84/91/360_F_109849179_Z4ggL0DY6MoavyhOQWkNrJ3yL6c14I4T.jpg" },
        { day: 2, title: "Nubra Valley Exploration", activities: ["Diskit Monastery morning visit", "Panamik hot springs", "Village walk in Sumur", "Overnight in luxury camp"], image: "https://images.unsplash.com/photo-1581791534721-e599df4417f7?w=800" },
        { day: 3, title: "Nubra to Pangong Tso", activities: ["Drive via Shyok road", "Arrive Pangong Lake", "Settle at lakeside camp", "Stargazing — zero light pollution"], image: "https://images.unsplash.com/photo-1581791534721-e599df4417f7?w=800" },
        { day: 4, title: "Pangong Sunrise & Return Leh", activities: ["4:30 AM sunrise at Pangong", "Photography on the blue shore", "Drive back to Leh via Changla Pass (5,360m)"], image: "https://images.unsplash.com/photo-1597033501655-66774e17815d?w=800" },
      ],
      highlights: ["Khardung La crossing", "Nubra camel safari", "Pangong Tso camping", "Panamik hot springs", "Shyok Valley drive"],
      tips: "Get Inner Line Permits for both Nubra and Pangong from Leh DC office. The Shyok route to Pangong requires a 4WD vehicle.",
    },
  ],

  varanasi: [
    {
      slug: "3-days-of-spiritual-awakening",
      title: "3 days of Spiritual Awakening",
      image: "https://images.unsplash.com/photo-1561361513-2d000a50f0dc",
      duration: "3 Days",
      bestTime: "October – March",
      groupSize: "1–10 people",
      difficulty: "Easy",
      overview:
        "An immersive spiritual journey through India's holiest city — early morning boat rides on the Ganges, the thundering Ganga Aarti, meditation at ancient temples, and encounters with sadhus and priests.",
      itinerary: [
        { day: 1, title: "Arrive & Evening Ganga Aarti", activities: ["Arrive Varanasi, check in to ghat-side guesthouse", "Afternoon walk through narrow galis", "Visit Kashi Vishwanath Temple", "Evening Ganga Aarti at Dashashwamedh Ghat (7:00 PM)"], image: "https://images.unsplash.com/photo-1561361058-c24cecae35ca?w=800" },
        { day: 2, title: "Sunrise Boat Ride & Sarnath", activities: ["4:30 AM rowing boat ride at sunrise", "Watch cremations at Manikarnika Ghat (respectfully)", "Morning chai and Blue Lassi at Kashi Chat Bhandar", "Afternoon Sarnath — Dhamekh Stupa, where Buddha preached", "Evening Assi Ghat concert"], image: "https://images.pexels.com/photos/28975088/pexels-photo-28975088/free-photo-of-scenic-boat-ride-at-sunrise-in-india.jpeg" },
        { day: 3, title: "Temples & Silk Weaving Village", activities: ["Tulsi Manas Temple", "Durga Temple (Monkey Temple)", "Visit Peeli Kothi silk weaving village", "Ramnagar Fort across the river", "Final evening aarti and departure"], image: "https://images.unsplash.com/photo-1545127398-14699f92334b?w=800" },
      ],
      highlights: ["Ganga Aarti ceremony", "Sunrise boat ride", "Sarnath Buddhist site", "Manikarnika Ghat", "Blue Lassi tasting"],
      tips: "Hire a local guide for the Kashi Vishwanath area — the lanes are labyrinthine. Women should cover their heads in the temple complex.",
    },
    {
      slug: "ganges-boat-tour-evening-aarti",
      title: "Ganges Boat Tour & Evening Aarti",
      image: "https://images.unsplash.com/photo-1597080407783-99710364f9f7",
      duration: "1 Day",
      bestTime: "Year-round",
      groupSize: "2–12 people",
      difficulty: "Easy",
      overview:
        "Experience the two most iconic moments in Varanasi — the mystical sunrise on the Ganges and the thunderous evening Ganga Aarti — in one perfectly curated day.",
      itinerary: [
        { day: 1, title: "Dawn to Dusk on the Ganges", activities: ["4:30 AM private rowing boat at Dashashwamedh Ghat", "Watch pilgrims bathing in the holy river", "Sunrise photography on the water", "Breakfast at Aum Café (riverside)", "Afternoon temple walk and ghats exploration", "7:00 PM Ganga Aarti with front-row boat viewing position"], image: "https://images.unsplash.com/photo-1561361058-c24cecae35ca?w=800" },
      ],
      highlights: ["Private sunrise boat", "Front-row Aarti boat seat", "Pilgrims bathing ritual", "Riverside breakfast"],
      tips: "Book a private motorboat for the Aarti — it gives you the best elevated viewing angle of the ceremony.",
    },
    {
      slug: "ancient-temples-narrow-lanes",
      title: "Ancient Temples & Narrow Lanes",
      image: "https://images.unsplash.com/photo-1627894483216-2138af692e32",
      duration: "1 Day",
      bestTime: "October – February",
      groupSize: "2–8 people",
      difficulty: "Easy",
      overview:
        "A deep dive into Varanasi's sacred heart — the Vishwanath Gali, ancient temples, the Annapoorna Temple, and the chaotic beauty of its narrow laneways.",
      itinerary: [
        { day: 1, title: "Temple Walk & Gali Exploration", activities: ["Kashi Vishwanath Temple (Golden Temple)", "Annapoorna Temple nearby", "Bhairav Temple", "Walk through Vishwanath Gali", "Kedar Ghat — South Indian temple styles", "Chet Singh Ghat ruins"], image: "https://images.unsplash.com/photo-1545127398-14699f92334b?w=800" },
      ],
      highlights: ["Kashi Vishwanath Golden Temple", "Annapoorna Temple", "Vishwanath Gali maze walk", "Kedar Ghat architecture"],
      tips: "Leave your shoes in the guesthouse when temple-walking. The lanes are too narrow for footwear bags.",
    },
    {
      slug: "kashi-heritage-food-walk",
      title: "Kashi Heritage & Food Walk",
      image: "https://images.unsplash.com/photo-1605309605703-e69d9822a16d",
      duration: "1 Day",
      bestTime: "October – March",
      groupSize: "2–10 people",
      difficulty: "Easy",
      overview:
        "An immersive culinary and cultural walk through Varanasi's most famous food streets — from Tamatar Chaat and Blue Lassi to the legendary Banarasi Paan.",
      itinerary: [
        { day: 1, title: "Full Day Food & Heritage Trail", activities: ["Morning — Rajendra Prasad Ghat chai and kachori", "Visit Dalmandi spice market", "Tamatar Chaat at Kashi Chat Bhandar", "Blue Lassi at the famous Blue Lassi Shop, Godaulia", "Silk weaving village — watch Banarasi saree creation", "Evening — Banarasi Paan at Chowk market", "Final Ganga Aarti viewing from Dashashwamedh"], image: "https://img.freepik.com/premium-photo/exploring-market-photo-realistic-street-food-tour-group-concept-high-resolution-image_980716-196049.jpg" },
      ],
      highlights: ["Tamatar Chaat", "Blue Lassi", "Banarasi Paan", "Silk saree weaving demo", "Dalmandi spice market"],
      tips: "Eat only at established stalls. Avoid drinking tap water. Carry hand sanitizer for the food walk.",
    },
  ],

  udaipur: [
    {
      slug: "4-days-venice-of-the-east",
      title: "4 Days: Venice of the East",
      image: "https://thumbs.dreamstime.com/b/lake-pichola-udaipur-view-city-rajasthan-india-203501215.jpg",
      duration: "4 Days",
      bestTime: "October – March",
      groupSize: "2–10 people",
      difficulty: "Easy",
      overview:
        "Explore the romantic city of Udaipur — its shimmering lakes, majestic palaces, and vibrant folk culture over 4 magical days.",
      itinerary: [
        { day: 1, title: "Arrival & Lake Pichola Cruise", activities: ["Check in to lake-view hotel", "Lake Pichola sunset boat ride", "View of Lake Palace from the water", "Dinner at Ambrai Ghat restaurant"], image: "https://thumbs.dreamstime.com/b/lake-pichola-udaipur-view-city-rajasthan-india-203501215.jpg" },
        { day: 2, title: "City Palace & Folk Dance", activities: ["City Palace guided tour", "Sheesh Mahal and Dilkusha Mahal", "Jagdish Temple afternoon visit", "Dharohar folk dance show at Bagore Ki Haveli (evening)"], image: "https://t4.ftcdn.net/jpg/01/86/03/91/360_F_186039131_DtzFlukfaDy0Fdsgq6HzJwGGJ1II5Ls9.jpg" },
        { day: 3, title: "Sajjangarh & Fateh Sagar", activities: ["Morning cable car to Karni Mata Temple", "Sajjangarh Monsoon Palace", "Afternoon walk at Fateh Sagar Lake promenade", "Nehru Island Garden boat ride", "Evening Saheliyon-ki-Bari fountains"], image: "https://t4.ftcdn.net/jpg/03/58/35/27/360_F_358352741_X0EavWfHOHKXuBMY5CZrPv9SyyseQX4n.jpg" },
        { day: 4, title: "Vintage Cars & Departure", activities: ["Vintage Car Museum — Rolls Royce collection", "Shilpgram village crafts market", "Lunch at Upré lakeside restaurant", "Departure"], image: "https://images.unsplash.com/photo-1621360841013-c7683c659ec6?w=800" },
      ],
      highlights: ["Lake Pichola sunset cruise", "City Palace tour", "Dharohar folk dance", "Sajjangarh Palace views", "Vintage car museum"],
      tips: "The lake boat ride at sunset gives you the best view of the City Palace and Lake Palace. Book in advance during December–January.",
    },
  ],

  rishikesh: [
    {
      slug: "yoga-meditation-retreat",
      title: "Yoga & Meditation Retreat",
      image: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b",
      duration: "5 Days",
      bestTime: "February – April, September – November",
      groupSize: "1–20 people",
      difficulty: "Easy",
      overview:
        "A transformative 5-day yoga and meditation retreat in the Yoga Capital of the World — combining Hatha Yoga, Pranayama, meditation, and a healing sattvic diet.",
      itinerary: [
        { day: 1, title: "Arrival & Orientation", activities: ["Arrive Rishikesh", "Ashram orientation and room settling", "Evening Ganga Aarti at Parmarth Niketan", "Sattvic dinner and early bed"], image: "https://thumbs.dreamstime.com/b/ganga-aarti-ceremony-parmarth-niketan-ashram-sunset-rishikesh-world-capital-yoga-has-numerous-centres-also-india-175231808.jpg" },
        { day: 2, title: "Yoga Begins", activities: ["5:30 AM Pranayama session", "7:00 AM Hatha Yoga class", "Breakfast", "10:00 AM Philosophy lecture", "4:00 PM Yin Yoga", "Evening meditation by the Ganges"], image: "https://static.vecteezy.com/system/resources/thumbnails/075/605/360/small/diverse-friends-doing-pilates-class-golden-hour-outdoor-field-photo.jpg" },
        { day: 3, title: "Deep Dive & Laxman Jhula", activities: ["Morning Ashtanga practice", "Afternoon walk to Laxman Jhula and temples", "Evening group meditation session"], image: "https://t3.ftcdn.net/jpg/03/74/93/04/360_F_374930485_QhvZlb4F5saU51kebDT2jRvZsuijbxms.jpg" },
        { day: 4, title: "Nature & Neer Garh Trek", activities: ["Morning yoga session", "Neer Garh Waterfall trek", "Afternoon restorative yoga", "Evening kirtan and chanting"], image: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/15/35/48/57/wanderer-gourav-bnqkjirhf1s.jpg?w=1200" },
        { day: 5, title: "Closing Ceremony & Departure", activities: ["Final sunrise yoga", "Closing meditation and gratitude circle", "Sattvic farewell breakfast", "Departure with yoga certificate"], image: "https://images.unsplash.com/photo-1504280390367-361c6d9f38f4?w=800" },
      ],
      highlights: ["Daily Hatha & Ashtanga yoga", "Ganga Aarti participation", "Neer Garh trek", "Sattvic meals", "Yoga certification"],
      tips: "Rishikesh is alcohol-free and vegetarian. International Yoga Festival (March) is the best time for a retreat.",
    },
    {
      slug: "ganga-rafting-adventure",
      title: "Ganga Rafting Adventure",
      image: "https://images.unsplash.com/photo-1530731141654-5993c3016c77",
      duration: "2 Days",
      bestTime: "September – June",
      groupSize: "4–20 people",
      difficulty: "Moderate to Challenging",
      overview:
        "An adrenaline-packed 2-day rafting adventure on the Ganges — from gentle Grade II rapids to the thundering Grade IV 'Golf Course' and 'Three Blind Mice' rapids.",
      itinerary: [
        { day: 1, title: "Marine Drive to Shivpuri Rafting", activities: ["Safety briefing and gear up", "16km Marine Drive to Shivpuri stretch", "Grade II–III rapids", "Beach camp arrival at Shivpuri", "Bonfire, music, and riverside dinner"], image: "https://images.unsplash.com/photo-1629248457649-b082812aea6c?w=800" },
        { day: 2, title: "Shivpuri to Rishikesh (35km)", activities: ["Full 35km stretch with Grade III–IV rapids", "Golf Course, Three Blind Mice, Double Trouble rapids", "Cliff jumping at 25-foot Natural Waterfall", "Reach Rishikesh and debrief"], image: "https://images.unsplash.com/photo-1530731141654-5993c3016c77?w=800" },
      ],
      highlights: ["Grade IV rapids", "Riverside beach camping", "Cliff jumping", "35km Ganges stretch"],
      tips: "Best rafting season is September–November and February–May. July–August monsoon stretches are closed due to high water levels.",
    },
    {
      slug: "spiritual-ghats-laxman-jhula",
      title: "Spiritual Ghats & Laxman Jhula",
      image: "https://images.unsplash.com/photo-1598977123418-45455531d10e",
      duration: "1 Day",
      bestTime: "Year-round",
      groupSize: "1–15 people",
      difficulty: "Easy",
      overview:
        "A peaceful day exploring Rishikesh's most sacred ghats, the iconic suspension bridge at Laxman Jhula, and the Beatles' legendary Chaurasi Kutia ashram.",
      itinerary: [
        { day: 1, title: "Full Day Spiritual Walk", activities: ["Sunrise at Triveni Ghat — holy dip", "Breakfast at Little Buddha Café", "Walk to Ram Jhula — suspension bridge", "Visit 13-storey Trimbakeshwar Temple", "Beatles Ashram (Chaurasi Kutia) exploration", "Laxman Jhula crossing and Gita Bhavan Temple", "Evening Parmarth Niketan Ganga Aarti"], image: "https://t3.ftcdn.net/jpg/03/74/93/04/360_F_374930485_QhvZlb4F5saU51kebDT2jRvZsuijbxms.jpg" },
      ],
      highlights: ["Triveni Ghat holy dip", "Beatles Ashram graffiti walls", "Laxman Jhula bridge", "Parmarth Niketan Aarti"],
      tips: "The Beatles Ashram has a small entry fee. Carry your camera — the graffiti murals are stunning.",
    },
    {
      slug: "himalayan-foothills-trek",
      title: "Himalayan Foothills Trek",
      image: "https://images.unsplash.com/photo-1544198365-f5d60b6d8190",
      duration: "3 Days",
      bestTime: "March – June, September – November",
      groupSize: "4–15 people",
      difficulty: "Moderate",
      overview:
        "Trek through the scenic Himalayan foothills surrounding Rishikesh — from the Rajaji National Park buffalo trails to the misty peaks above Neelkanth Mahadev Temple.",
      itinerary: [
        { day: 1, title: "Rishikesh to Neelkanth Mahadev Trek", activities: ["Depart Rishikesh early morning", "14km trek through dense forest", "Reach Neelkanth Mahadev Temple (1,330m)", "Overnight stay at forest guesthouse"], image: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=800" },
        { day: 2, title: "Ridge Walk & Kunjapuri Temple", activities: ["Morning ridge hike for Himalayan panorama", "Kunjapuri Devi Temple — Garhwal peak views", "Sunset over the Garhwal ranges", "Camp overnight"], image: "https://images.unsplash.com/photo-1544198365-f5d60b6d8190?w=800" },
        { day: 3, title: "Descent & River Dip", activities: ["Morning descent through pine forest", "Refreshing dip in mountain stream", "Return Rishikesh by afternoon"], image: "https://images.unsplash.com/photo-1504280390367-361c6d9f38f4?w=800" },
      ],
      highlights: ["Neelkanth Mahadev Temple trek", "Kunjapuri sunrise panorama", "Rajaji forest walk", "Mountain stream swim"],
      tips: "Carry trekking poles and rainproof jacket. Leeches are common in monsoon — wear full socks and apply salt.",
    },
  ],

  darjeeling: [
    {
      slug: "3-days-in-the-queen-of-hills",
      title: "3 days in the Queen of Hills",
      image: "https://images.unsplash.com/photo-1544281679-53571bc887bc",
      duration: "3 Days",
      bestTime: "March – May, September – November",
      groupSize: "2–10 people",
      difficulty: "Easy",
      overview:
        "A complete 3-day exploration of Darjeeling — from pre-dawn Tiger Hill to the UNESCO Toy Train, tea gardens, and the nostalgic charm of the Mall Road.",
      itinerary: [
        { day: 1, title: "Arrive & Toy Train Ride", activities: ["Arrive Darjeeling (NJP or Bagdogra)", "Check in and settle", "Afternoon Toy Train joy ride (Darjeeling to Ghoom)", "Visit Batasia Loop War Memorial", "Evening Mall Road walk and woolens shopping"], image: "https://images.unsplash.com/photo-1544735716-392fe2489ffa?w=800" },
        { day: 2, title: "Tiger Hill Sunrise & Tea Estate", activities: ["3:30 AM taxi to Tiger Hill", "Sunrise over Kanchenjunga and Everest silhouette", "Happy Valley Tea Estate tour and tasting", "Ghoom Monastery — 15ft Maitreya Buddha", "Japanese Peace Pagoda afternoon visit"], image: "https://images.unsplash.com/photo-1590077538740-05e44d7b1560?w=800" },
        { day: 3, title: "Zoo, Museum & Departure", activities: ["Himalayan Zoological Park — Red Panda and Snow Leopard", "Himalayan Mountaineering Institute Museum — Tenzing Norgay's gear", "Chowrasta Square final breakfast", "Departure"], image: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/32/d6/c6/b5/caption.jpg?w=900&h=500&s=1" },
      ],
      highlights: ["Tiger Hill Kanchenjunga sunrise", "UNESCO Toy Train ride", "Happy Valley Tea tasting", "Red Panda at the Zoo", "Batasia Loop"],
      tips: "Pre-book Tiger Hill sunrise taxis the evening before. Carry a thick jacket — Darjeeling mornings are cold year-round.",
    },
    {
      slug: "toy-train-tea-estate-tour",
      title: "Toy Train & Tea Estate Tour",
      image: "https://images.unsplash.com/photo-1626241031267-850f368d901f",
      duration: "2 Days",
      bestTime: "March – May, October – December",
      groupSize: "2–8 people",
      difficulty: "Easy",
      overview:
        "A charming 2-day tour focused on Darjeeling's two most iconic experiences — riding the UNESCO Darjeeling Himalayan Railway and exploring its world-famous tea estates.",
      itinerary: [
        { day: 1, title: "Toy Train Full Journey & Batasia", activities: ["Full Darjeeling to Kurseong Toy Train ride (5 hours)", "Kurseong town walk and Eagle's Craig viewpoint", "Return by road", "Batasia Loop evening visit"], image: "https://images.unsplash.com/photo-1544735716-392fe2489ffa?w=800" },
        { day: 2, title: "Tea Estates Deep Dive", activities: ["Happy Valley Tea Estate tour and processing unit", "Glenburn Tea Estate private tour (advance booking needed)", "Tea tasting session — first flush vs second flush", "Castleton Tea Estate visit"], image: "https://www.kiomoi.com/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fkmadmin%2Fimage%2Fupload%2Fc_scale%2Cw_500%2Ff_auto%2Fv1618487578%2Fkiomoi%2FDarjeeling_Happy_Valley_Tea_Estate_1618487577155.jpg&w=3840&q=75" },
      ],
      highlights: ["Full Toy Train Darjeeling-Kurseong", "Glenburn private tea estate", "First flush vs second flush tasting", "Batasia Loop War Memorial"],
      tips: "Book the Toy Train well in advance online through Indian Railways (Darjeeling Himalayan Railway). First-flush tea (March–April) is the most prized.",
    },
    {
      slug: "sunrise-at-tiger-hill",
      title: "Sunrise at Tiger Hill",
      image: "https://images.unsplash.com/photo-1597843796321-230ff2379f2c",
      duration: "1 Day",
      bestTime: "October – December, March – April",
      groupSize: "1–20 people",
      difficulty: "Easy",
      overview:
        "Wake before dawn and drive to Tiger Hill — at 2,590 metres — to witness one of the world's most breathtaking natural spectacles: the Kanchenjunga and Everest peaks glowing gold in the first light of day.",
      itinerary: [
        { day: 1, title: "Pre-Dawn Tiger Hill Experience", activities: ["3:30 AM departure from hotel", "4:15 AM arrive Tiger Hill", "Sunrise over Kanchenjunga, Everest, and Makalu peaks", "Hot chai and pakoras at summit kiosks", "Return via Ghoom Monastery", "Breakfast at hotel", "Rest of day at leisure — Mall Road, shopping"], image: "https://images.unsplash.com/photo-1590077538740-05e44d7b1560?w=800" },
      ],
      highlights: ["Kanchenjunga sunrise", "Everest silhouette view", "Ghoom Monastery en route", "Summit chai experience"],
      tips: "Visibility is best October–November and March–April. Cloudy or monsoon days (June–August) offer zero visibility at Tiger Hill.",
    },
    {
      slug: "sikkim-darjeeling-loop",
      title: "Sikkim & Darjeeling Loop",
      image: "https://images.unsplash.com/photo-1589136142558-9dec88424a1e",
      duration: "6 Days",
      bestTime: "March – May, October – December",
      groupSize: "2–10 people",
      difficulty: "Moderate",
      overview:
        "Combine the best of Darjeeling with a loop through Gangtok (Sikkim) — a perfectly balanced itinerary of mountain sunrises, Buddhist monasteries, and stunning Himalayan scenery.",
      itinerary: [
        { day: 1, title: "Arrive Darjeeling & Tiger Hill", activities: ["Arrive Darjeeling", "Tiger Hill sunset viewpoint", "Mall Road evening walk"], image: "https://images.unsplash.com/photo-1544281679-53571bc887bc?w=800" },
        { day: 2, title: "Tiger Hill Sunrise & Toy Train", activities: ["Pre-dawn Tiger Hill sunrise", "Toy Train joy ride", "Happy Valley Tea Estate tour"], image: "https://images.unsplash.com/photo-1590077538740-05e44d7b1560?w=800" },
        { day: 3, title: "Drive to Gangtok, Sikkim", activities: ["2.5 hour drive to Gangtok", "Rumtek Monastery — largest in Sikkim", "MG Marg evening walk", "Sikkimese dinner"], image: "https://images.unsplash.com/photo-1590005024862-6b67679a29fb?w=800" },
        { day: 4, title: "Tsomgo Lake & Nathula", activities: ["Drive to Tsomgo (Changu) Lake at 3,753m", "Nathula Pass — India-China border (permit needed)", "Return Gangtok"], image: "https://images.unsplash.com/photo-1590077538740-05e44d7b1560?w=800" },
        { day: 5, title: "Pelling — Kanchenjunga Views", activities: ["Drive to Pelling", "Rabdentse Ruins", "Pemayangtse Monastery", "Sunset view of Kanchenjunga from Pelling"], image: "https://images.unsplash.com/photo-1588668214407-6ea9a6d8c272?w=800" },
        { day: 6, title: "Return Darjeeling & Departure", activities: ["Morning drive back via Kalimpong", "Kalimpong flower nurseries", "Return to NJP or Bagdogra for departure"], image: "https://images.unsplash.com/photo-1544281679-53571bc887bc?w=800" },
      ],
      highlights: ["Tiger Hill Kanchenjunga sunrise", "Nathula Indo-China border", "Tsomgo Lake", "Pemayangtse Monastery", "Rumtek Monastery"],
      tips: "Nathula Pass requires a Protected Area Permit (PAP) obtainable in Gangtok. Only Indian nationals are allowed at Nathula.",
    },
  ],

  andaman: [
    {
      slug: "5-days-in-tropical-paradise",
      title: "5 days in Tropical Paradise",
      image: "https://images.unsplash.com/photo-1589197331516-4d836306915c",
      duration: "5 Days",
      bestTime: "November – April",
      groupSize: "2–10 people",
      difficulty: "Easy",
      overview:
        "The definitive Andaman experience — from Port Blair's colonial history and the Cellular Jail to Havelock's pristine Radhanagar Beach and world-class scuba diving.",
      itinerary: [
        { day: 1, title: "Arrive Port Blair & Cellular Jail", activities: ["Arrive Port Blair", "Cellular Jail guided tour", "Light & Sound Show in the evening", "Dinner at a local seafood restaurant"], image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRHNAm9uA-QRFYBdvTsqu0xPdWaBV4HFokNpg&s" },
        { day: 2, title: "Port Blair Local & Ferry to Havelock", activities: ["Morning Ross Island walk", "Corbyn's Cove Beach swim", "Afternoon ferry to Havelock Island (Swaraj Dweep)", "Check in and evening at leisure"], image: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/10/78/a4/51/ross-castle.jpg?w=1200" },
        { day: 3, title: "Radhanagar Beach & Scuba Diving", activities: ["Morning scuba diving at Elephant Beach", "See coral reefs and tropical fish", "Afternoon at Radhanagar Beach (Beach 7)", "Sunset from the beach"], image: "https://thumbs.dreamstime.com/b/wide-angle-view-famous-radhanagar-beach-swaraj-dweep-havelock-island-andaman-nicobar-islands-scene-features-449453153.jpg" },
        { day: 4, title: "Kayaking & Neil Island", activities: ["Morning kayaking through Havelock mangroves", "Ferry to Neil Island (Shaheed Dweep)", "Bharatpur Beach snorkeling", "Laxmanpur Beach sunset"], image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRN7JHPs4GnB0t3Ln63gPzQP1ZcizDrctS0Dw&s" },
        { day: 5, title: "Baratang & Departure", activities: ["Return to Port Blair", "Baratang Limestone Caves (if time permits)", "Shopping at Aberdeen Bazaar", "Departure flight"], image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=800" },
      ],
      highlights: ["Cellular Jail Light & Sound Show", "Radhanagar Beach", "Scuba diving at Elephant Beach", "Havelock kayaking", "Ross Island ruins"],
      tips: "Book ferry tickets between islands well in advance (especially Dec–Jan). Carry reef-safe sunscreen for diving and snorkeling.",
    },
    {
      slug: "havelock-island-scuba-diving",
      title: "Havelock Island Scuba Diving",
      image: "https://images.unsplash.com/photo-1544551763-47a0159f9234",
      duration: "3 Days",
      bestTime: "November – April",
      groupSize: "2–8 divers",
      difficulty: "Moderate (Beginners welcome)",
      overview:
        "Three days of world-class scuba diving around Havelock Island — from beginner-friendly coral gardens to advanced drift dives through fish-filled channels.",
      itinerary: [
        { day: 1, title: "Discover Scuba Diving", activities: ["Theory and pool session", "First open water dive at Elephant Beach", "Coral garden exploration", "Evening dive briefing and seafood dinner"], image: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=800" },
        { day: 2, title: "Advanced Dive Sites", activities: ["Nemo Reef dive (clownfish, moray eels)", "The Wall — dramatic vertical coral drop-off", "Aquarium site — over 200 fish species", "Snorkeling at Kalapathar Beach in afternoon"], image: "https://images.unsplash.com/photo-1582967788606-a171c1080cb0?w=800" },
        { day: 3, title: "Drift Dive & Departure", activities: ["Dixon's Pinnacle drift dive", "Underwater photography session", "Farewell Radhanagar Beach walk", "Departure ferry to Port Blair"], image: "https://images.unsplash.com/photo-1544551763-47a0159f9234?w=800" },
      ],
      highlights: ["Elephant Beach coral reefs", "The Wall vertical dive", "Drift dive at Dixon's Pinnacle", "Nemo Reef clownfish", "Kalapathar Beach snorkeling"],
      tips: "PADI Open Water certification required for advanced dives. Barefoot Scuba and Dive India are well-reviewed operators in Havelock.",
    },
    {
      slug: "cellular-jail-port-blair-history",
      title: "Cellular Jail & Port Blair History",
      image: "https://images.unsplash.com/photo-1625235881434-6c701777000c",
      duration: "1 Day",
      bestTime: "Year-round",
      groupSize: "2–20 people",
      difficulty: "Easy",
      overview:
        "A poignant historical tour of Port Blair — the Cellular Jail, Ross Island's colonial ruins, and the Samudrika Naval Marine Museum.",
      itinerary: [
        { day: 1, title: "Port Blair Colonial History Tour", activities: ["9:00 AM Cellular Jail guided tour — solitary cells and gallows", "Samudrika Naval Marine Museum — sea life and Andaman ecology", "Lunch at New Lighthouse Restaurant", "Ross Island afternoon tour — British HQ now reclaimed by deer and nature", "Chidiya Tapu sunset — Bird Island", "Evening Cellular Jail Light & Sound Show (7:00 PM)"], image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRHNAm9uA-QRFYBdvTsqu0xPdWaBV4HFokNpg&s" },
      ],
      highlights: ["Cellular Jail solitary cells", "Light & Sound Show", "Ross Island deer and ruins", "Chidiya Tapu bird sanctuary sunset"],
      tips: "The Light & Sound Show is in Hindi. The English show runs on alternate days — check the schedule at the Jail entrance.",
    },
    {
      slug: "neil-island-beach-hopping",
      title: "Neil Island Beach Hopping",
      image: "https://images.unsplash.com/photo-1590523277543-a94d2e4eb00b",
      duration: "2 Days",
      bestTime: "November – March",
      groupSize: "2–8 people",
      difficulty: "Easy",
      overview:
        "Escape to the quieter, less-touristy Neil Island (Shaheed Dweep) — a small paradise of empty beaches, clear snorkeling waters, and natural rock formations.",
      itinerary: [
        { day: 1, title: "Arrive Neil & Bharatpur Beach", activities: ["Ferry from Port Blair to Neil Island", "Bharatpur Beach snorkeling with rented gear", "Natural Bridge (Howrah Bridge) rock formation visit", "Sunset at Laxmanpur Beach 2"], image: "https://images.unsplash.com/photo-1510414842594-a61c69b5ae57?w=800" },
        { day: 2, title: "Sitapur Beach & Return", activities: ["Pre-dawn Sitapur Beach sunrise", "Morning swim in crystal waters", "Local village walk", "Return ferry to Port Blair"], image: "https://images.unsplash.com/photo-1590523277543-a94d2e4eb00b?w=800" },
      ],
      highlights: ["Bharatpur snorkeling", "Natural rock bridge", "Laxmanpur sunset beach", "Sitapur sunrise", "Peaceful village atmosphere"],
      tips: "Neil Island has limited ATMs — carry sufficient cash. Accommodation is simpler than Havelock but the beaches are more secluded.",
    },
  ],

  mahabaleshwar: [
    {
      slug: "weekend-hill-station-getaway",
      title: "Weekend Hill Station Getaway",
      image: "https://images.unsplash.com/photo-1599147500104-ff2044837a61",
      duration: "2 Days",
      bestTime: "October – June",
      groupSize: "2–10 people",
      difficulty: "Easy",
      overview:
        "A perfect weekend escape to Mahabaleshwar — the most popular hill station of Maharashtra — with viewpoints, boating, strawberry picking, and a drive through misty Western Ghats.",
      itinerary: [
        { day: 1, title: "Arrive & Viewpoints Tour", activities: ["Arrive Mahabaleshwar, check in to hill resort", "Arthur's Seat — highest point, panoramic valley views", "Echo Point and Wilson Point", "Afternoon Venna Lake boating", "Strawberry picking at Mapro Garden", "Evening Mapro Garden café for fresh strawberry drinks"], image: "https://media-cdn.tripadvisor.com/media/attractions-splice-spp-674x446/12/ee/48/fb.jpg" },
        { day: 2, title: "Panchgani & Pratapgad", activities: ["Drive to Panchgani Table Land (largest volcanic plateau)", "Devil's Kitchen and Sydney Point", "Afternoon Pratapgad Fort — Shivaji Maharaj battlefield", "Return via Lingmala Waterfall", "Departure"], image: "https://images.unsplash.com/photo-1501785888041-af3ef285b470?w=800" },
      ],
      highlights: ["Arthur's Seat panoramic view", "Strawberry picking", "Venna Lake boating", "Pratapgad Fort", "Panchgani Table Land"],
      tips: "Mahabaleshwar is extremely crowded on weekends in summer. Visit on weekdays for a peaceful experience.",
    },
    {
      slug: "strawberry-farm-lake-tour",
      title: "Strawberry Farm & Lake Tour",
      image: "https://images.unsplash.com/photo-1615485240388-121896796398",
      duration: "1 Day",
      bestTime: "December – March (Strawberry Season)",
      groupSize: "2–15 people",
      difficulty: "Easy",
      overview:
        "A fun-filled day dedicated to Mahabaleshwar's most famous produce — fresh strawberries — combined with a relaxing boat ride on Venna Lake and a visit to the iconic Mapro Garden.",
      itinerary: [
        { day: 1, title: "Strawberries, Lakes & Viewpoints", activities: ["9:00 AM Arrive Mapro Garden — strawberry farm walk", "Hand-pick fresh strawberries", "Strawberry products tasting — jams, crushes, chocolates", "Venna Lake — horse riding and boat ride", "Parsi Point valley views", "Lingmala Waterfall visit", "Return with strawberry produce shopping"], image: "https://thumbs.dreamstime.com/b/families-picking-fresh-strawberries-strawberry-farm-rows-red-ripe-very-appetising-ready-to-be-picked-photo-taken-156448665.jpg" },
      ],
      highlights: ["Strawberry picking experience", "Mapro Garden tasting", "Venna Lake boating", "Lingmala Waterfall", "Parsi Point valley view"],
      tips: "Peak strawberry season is January–March. The Mapro Garden café serves the freshest strawberry products in Maharashtra.",
    },
    {
      slug: "western-ghats-monsoon-drive",
      title: "Western Ghats Monsoon Drive",
      image: "https://images.unsplash.com/photo-1506461883276-594a12b11cf3",
      duration: "2 Days",
      bestTime: "July – September (Monsoon)",
      groupSize: "2–8 people",
      difficulty: "Easy",
      overview:
        "Experience the magical transformation of the Western Ghats in full monsoon — gushing waterfalls, misty valleys, and emerald green forests at their absolute best.",
      itinerary: [
        { day: 1, title: "Monsoon Drive & Lingmala Falls", activities: ["Drive up from Pune through ghats in the rain", "Lingmala Waterfall at peak monsoon flow", "Dhobi Waterfall stop", "Check in and warm soup dinner"], image: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/08/b0/12/1f/the-majestic-lingmala.jpg?w=1200" },
        { day: 2, title: "Mist Walks & Departure", activities: ["Morning misty walk to Elephant's Head Point", "Old Mahabaleshwar Panchganga Temple", "Arthur's Seat in monsoon mist", "Drive back through ghats"], image: "https://thumbs.dreamstime.com/b/elephant-point-mahabaleshwar-closeup-view-elephant-point-mahabaleshwar-closeup-view-asia-179642206.jpg" },
      ],
      highlights: ["Lingmala Falls at peak flow", "Misty Elephant's Head Point", "Western Ghats rain drive", "Panchganga Temple"],
      tips: "Roads can be slippery in heavy monsoon. Use a 4WD if possible. The waterfalls are at their most dramatic in July–August.",
    },
    {
      slug: "panchgani-pratapgad-trek",
      title: "Panchgani & Pratapgad Trek",
      image: "https://images.unsplash.com/photo-1626435640237-775b0586e398",
      duration: "2 Days",
      bestTime: "October – February",
      groupSize: "4–15 people",
      difficulty: "Moderate",
      overview:
        "A trekker's weekend combining the volcanic plateau of Panchgani with a hill fort trek to the historic Pratapgad — site of the famous battle between Shivaji and Afzal Khan.",
      itinerary: [
        { day: 1, title: "Panchgani Table Land", activities: ["Drive to Panchgani from Mahabaleshwar (20 min)", "Table Land plateau walk — 95 acres of flat volcanic terrain", "Devil's Kitchen canyon viewpoint", "Sydney Point and Parsi Point", "Overnight in Panchgani"], image: "https://images.unsplash.com/photo-1501785888041-af3ef285b470?w=800" },
        { day: 2, title: "Pratapgad Fort Trek", activities: ["Drive to Pratapgad Fort base (1.5 hrs from Mahabaleshwar)", "1.5 km trek up to the fort", "Explore Bhawani Temple and battle grounds", "Panoramic Sahyadri valley views", "Return to Mahabaleshwar and departure"], image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSjhrD_fNF3IbBdf4Xrj0x2bLb4NPKQQKTz3g&s" },
      ],
      highlights: ["Table Land volcanic plateau", "Devil's Kitchen canyon", "Pratapgad Shivaji battlefield", "Sahyadri mountain views"],
      tips: "Wear trekking shoes for Pratapgad — the stone steps are steep. Hire a local guide at the base to hear the history of Shivaji's battle.",
    },
  ],
};

// Helper function to get trip data by destination and trip slug
export const getTripBySlug = (destinationKey, tripSlug) => {
  const destinationTrips = tripsData[destinationKey];
  if (!destinationTrips) return null;
  return destinationTrips.find((trip) => trip.slug === tripSlug) || null;
};

// Helper to generate slug from title (same logic used in Destinations.jsx)
export const generateTripSlug = (title) =>
  title.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");