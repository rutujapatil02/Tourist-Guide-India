// DiscoverData.jsx
// Each destination has 4 discover categories.
// Each category has 9-10 rich content items.

export const discoverData = {

  // ─────────────────────────────────────────────
  // TAJ MAHAL
  // ─────────────────────────────────────────────
  tajmahal: [
    {
      id: 1,
      title: "Where to stay",
      type: "stay",
      image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800",
      content: {
        heading: "Where to Stay Near Taj Mahal",
        intro: "Agra offers a range of stays — from heritage havelis with Taj views to budget guesthouses in the old city.",
        items: [
          { name: "The Oberoi Amarvilas", category: "Luxury", price: "₹40,000+/night", highlight: "Every room faces the Taj Mahal directly", image: "https://images.unsplash.com/photo-1582719508461-905c673771fd?w=600" },
          { name: "ITC Mughal", category: "Luxury", price: "₹18,000+/night", highlight: "Sprawling Mughal gardens and spa", image: "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?w=600" },
          { name: "Zostel Agra", category: "Budget", price: "₹600+/night", highlight: "Social hostel near Taj East Gate", image: "https://images.unsplash.com/photo-1555854877-bab0e564b8d5?w=600" },
          { name: "Crystal Sarovar Premiere", category: "Mid-range", price: "₹5,000+/night", highlight: "Pool & rooftop Taj views", image: "https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?w=600" },
          { name: "Trident Agra", category: "Luxury", price: "₹12,000+/night", highlight: "Lush gardens, 20 min from Taj", image: "https://images.unsplash.com/photo-1564501049412-61c2a3083791?w=600" },
          { name: "Howard Plaza The Fern", category: "Mid-range", price: "₹4,500+/night", highlight: "Eco-certified hotel, city centre", image: "https://images.unsplash.com/photo-1445019980597-93fa8acb246c?w=600" },
          { name: "Hotel Kamal", category: "Budget", price: "₹900+/night", highlight: "Rooftop with direct Taj view, backpacker favourite", image: "https://images.unsplash.com/photo-1590490360182-c33d57733427?w=600" },
          { name: "Jaypee Palace Hotel", category: "Luxury", price: "₹9,000+/night", highlight: "25 acres of Mughal-style gardens", image: "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?w=600" },
          { name: "Pingo Guesthouse", category: "Budget", price: "₹700+/night", highlight: "Family-run, authentic local experience", image: "https://images.unsplash.com/photo-1416331108676-a22ccb276e35?w=600" },
          { name: "Radisson Hotel Agra", category: "Mid-range", price: "₹6,500+/night", highlight: "Modern amenities, close to Agra Cantt", image: "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?w=600" },
        ]
      }
    },
    {
      id: 2,
      title: "Weather in Agra",
      type: "weather",
      image: "https://images.unsplash.com/photo-1561484930-974b10b12db2?w=800",
      content: {
        heading: "Weather in Agra",
        intro: "Agra has a semi-arid climate. The best time to visit is October–March for cool, clear skies perfect for photography.",
        seasons: [
          { name: "January", temp: "8°C – 21°C", icon: "❄️", tip: "Coolest month. Morning fog can make the Taj look ethereal. Carry a warm jacket." },
          { name: "February", temp: "11°C – 24°C", icon: "🌸", tip: "Ideal weather. Taj Mahotsav festival begins. Comfortable sightseeing." },
          { name: "March", temp: "16°C – 31°C", icon: "🌤️", tip: "Warming up. Still pleasant for exploration. Last of the peak season." },
          { name: "April–May", temp: "25°C – 44°C", icon: "🔥", tip: "Very hot and dry. Visit the Taj before 8 AM. Stay hydrated." },
          { name: "June", temp: "29°C – 44°C", icon: "☀️", tip: "Peak heat. Fewer tourists. Indoor attractions like Agra Fort best midday." },
          { name: "July–August", temp: "26°C – 36°C", icon: "🌧️", tip: "Monsoon arrives. The marble gleams in rain. Watch for humidity." },
          { name: "September", temp: "24°C – 34°C", icon: "🌦️", tip: "Monsoon tapering off. Green surroundings, lush gardens at Mehtab Bagh." },
          { name: "October", temp: "20°C – 33°C", icon: "🍂", tip: "Tourism picks up. Great weather begins. Dewali lights up the city." },
          { name: "November", temp: "13°C – 28°C", icon: "🌤️", tip: "Excellent visibility. Perfect for sunrise photography at the Taj." },
          { name: "December", temp: "8°C – 23°C", icon: "❄️", tip: "Cold mornings. Winter mist and Christmas events in the city." },
        ]
      }
    },
    {
      id: 3,
      title: "Find a travel agent",
      type: "agent",
      image: "https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=800",
      content: {
        heading: "Trusted Travel Agents in Agra",
        intro: "These agencies specialize in Taj Mahal tours, heritage walks, and Golden Triangle packages.",
        agents: [
          { name: "Agra Tours & Travels", specialty: "Golden Triangle packages", rating: 4.8, phone: "+91-562-222-0001", experience: "15 years", languages: "English, Hindi, French" },
          { name: "Taj Heritage Walks", specialty: "Guided Taj & monument tours", rating: 4.9, phone: "+91-562-333-0022", experience: "12 years", languages: "English, Hindi, Japanese" },
          { name: "Royal India Journey", specialty: "Luxury train & palace tours", rating: 4.7, phone: "+91-562-444-0033", experience: "20 years", languages: "English, German, Hindi" },
          { name: "Mughal Trail Expeditions", specialty: "Heritage photography tours", rating: 4.8, phone: "+91-562-555-0044", experience: "10 years", languages: "English, Hindi, Italian" },
          { name: "Sunrise Agra Tours", specialty: "Dawn Taj Mahal experiences", rating: 4.9, phone: "+91-562-666-0055", experience: "8 years", languages: "English, Hindi" },
          { name: "India Cultural Connect", specialty: "Art, craft & culinary tours", rating: 4.6, phone: "+91-562-777-0066", experience: "18 years", languages: "English, Hindi, Spanish" },
          { name: "Viator Agra Partner", specialty: "Private car & guide combos", rating: 4.7, phone: "+91-562-888-0077", experience: "11 years", languages: "English, Hindi, Chinese" },
          { name: "Gateway to Mughal India", specialty: "Multi-city Rajasthan circuits", rating: 4.8, phone: "+91-562-999-0088", experience: "22 years", languages: "English, French, Hindi" },
          { name: "Backpacker Agra", specialty: "Budget group tours", rating: 4.5, phone: "+91-562-101-0099", experience: "7 years", languages: "English, Hindi" },
          { name: "Kashi Journeys", specialty: "Varanasi–Agra–Jaipur loops", rating: 4.6, phone: "+91-562-102-0100", experience: "14 years", languages: "English, Hindi, Portuguese" },
        ]
      }
    },
    {
      id: 4,
      title: "Find tours",
      type: "tours",
      image: "https://images.unsplash.com/photo-1539635278303-d4002c07eae3?w=800",
      content: {
        heading: "Top Tours in Agra",
        intro: "Choose from sunrise walks, heritage day trips, or multi-day Golden Triangle itineraries.",
        tours: [
          { name: "Sunrise Taj Mahal Tour", duration: "4 hours", price: "₹1,500/person", includes: "Guide, entry tickets, rickshaw ride", image: "https://images.unsplash.com/photo-1564507592333-c60657eea523?w=600" },
          { name: "Golden Triangle (Delhi–Agra–Jaipur)", duration: "5 days", price: "₹18,000/person", includes: "Hotel, transport, guide", image: "https://images.unsplash.com/photo-1524492412937-b28074a5d7da?w=600" },
          { name: "Mughal Heritage Walk", duration: "3 hours", price: "₹800/person", includes: "Local guide, tea at haveli", image: "https://thetajwondertours.com/wp-content/uploads/2022/07/sa3.jpg" },
          { name: "Agra Fort & Baby Taj Combo", duration: "6 hours", price: "₹2,200/person", includes: "Entry, AC car, guide", image: "https://media.istockphoto.com/id/1169495248/photo/agra-fort-medieval-indian-fort-at-agra-india-at-sunrise.jpg?s=612x612&w=0&k=20&c=EI9BXzCutx2gRuPCFUDSirZg9Hfc7G_kGfFbmVBmSEc=" },
          { name: "Fatehpur Sikri Day Trip", duration: "7 hours", price: "₹3,500/person", includes: "Bus, guide, entry, lunch", image: "https://t3.ftcdn.net/jpg/02/02/60/78/360_F_202607822_56X4UHztDCbXM1pUSdniwjKJIX51gkfb.jpg" },
          { name: "Taj by Moonlight Tour", duration: "3 hours", price: "₹3,000/person", includes: "Permit, guide, transport (full-moon dates)", image: "https://images.unsplash.com/photo-1585135760591-23f463378374?w=600" },
          { name: "Kalakriti Cultural Show", duration: "2 hours", price: "₹1,200/person", includes: "Show ticket, dinner", image: "https://cdn.getyourguide.com/image/format=auto,fit=crop,gravity=auto,quality=60,width=450,height=450,dpr=2/tour_img/6ffd8330c85f2eb3.jpeg" },
          { name: "Mathura–Vrindavan Excursion", duration: "Full day", price: "₹4,000/person", includes: "Car, guide, temple entries", image: "https://images.unsplash.com/photo-1582510003544-4d00b7f74220?w=600" },
          { name: "Agra Street Food Walk", duration: "3 hours", price: "₹900/person", includes: "8+ food stops, guide, bottled water", image: "https://images.unsplash.com/photo-1506461883276-594a12b11cf3?w=600" },
          { name: "Taj Photography Masterclass", duration: "5 hours", price: "₹5,000/person", includes: "Pro photographer guide, dawn access", image: "https://images.unsplash.com/photo-1548013146-72479768bbaa?w=600" },
        ]
      }
    },
  ],

  // ─────────────────────────────────────────────
  // JAIPUR
  // ─────────────────────────────────────────────
  jaipur: [
    {
      id: 1,
      title: "Where to stay",
      type: "stay",
      image: "https://images.unsplash.com/photo-1605649487212-47bdab064df7?w=800",
      content: {
        heading: "Where to Stay in Jaipur",
        intro: "Jaipur's accommodation ranges from palatial heritage hotels converted from royal residences to charming boutique havelis.",
        items: [
          { name: "Rambagh Palace", category: "Luxury", price: "₹35,000+/night", highlight: "Former royal residence of the Maharaja", image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=600" },
          { name: "Samode Haveli", category: "Heritage", price: "₹12,000+/night", highlight: "200-year-old painted haveli in the old city", image: "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?w=600" },
          { name: "Zostel Jaipur", category: "Budget", price: "₹500+/night", highlight: "Rooftop hangout near Amer Fort", image: "https://images.unsplash.com/photo-1555854877-bab0e564b8d5?w=600" },
          { name: "Alsisar Haveli", category: "Mid-range", price: "₹6,000+/night", highlight: "Peaceful haveli with a lovely pool", image: "https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?w=600" },
          { name: "Taj Jai Mahal Palace", category: "Luxury", price: "₹28,000+/night", highlight: "18 acres of Mughal gardens in the heart of Jaipur", image: "https://images.unsplash.com/photo-1564501049412-61c2a3083791?w=600" },
          { name: "Pearl Palace Heritage", category: "Budget", price: "₹1,200+/night", highlight: "Award-winning budget hotel with rooftop café", image: "https://images.unsplash.com/photo-1445019980597-93fa8acb246c?w=600" },
          { name: "Narain Niwas Palace", category: "Heritage", price: "₹8,500+/night", highlight: "1928 palace surrounded by mango orchards", image: "https://images.unsplash.com/photo-1590490360182-c33d57733427?w=600" },
          { name: "Hotel Diggi Palace", category: "Mid-range", price: "₹4,500+/night", highlight: "Literary Festival venue, peaceful courtyards", image: "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?w=600" },
          { name: "Umaid Bhawan", category: "Heritage", price: "₹7,000+/night", highlight: "1930s royal bungalow with heritage character", image: "https://images.unsplash.com/photo-1416331108676-a22ccb276e35?w=600" },
          { name: "Moustache Hostel", category: "Budget", price: "₹600+/night", highlight: "Vibrant social hostel, India's best-rated", image: "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?w=600" },
        ]
      }
    },
    {
      id: 2,
      title: "Weather in Jaipur",
      type: "weather",
      image: "https://images.unsplash.com/photo-1477587458883-47145ed94245?w=800",
      content: {
        heading: "Weather in Jaipur",
        intro: "Jaipur has a hot semi-arid climate. November to February is ideal for sightseeing with mild days and cool evenings.",
        seasons: [
          { name: "January", temp: "8°C – 22°C", icon: "❄️", tip: "Peak season. Cool and dry. Perfect for fort exploration and outdoor markets." },
          { name: "February", temp: "11°C – 25°C", icon: "🌸", tip: "Jaipur Literature Festival. Lovely weather for city walks and heritage sites." },
          { name: "March", temp: "17°C – 32°C", icon: "🌤️", tip: "Holi festival transforms the Pink City with colour. Slightly warm afternoons." },
          { name: "April", temp: "23°C – 39°C", icon: "🔥", tip: "Getting hot. Visit Amber Fort at sunrise before the heat sets in." },
          { name: "May", temp: "28°C – 45°C", icon: "☀️", tip: "Intense heat. Best for indoor museums and evening bazaar strolls." },
          { name: "June", temp: "29°C – 44°C", icon: "🌡️", tip: "Pre-monsoon. Fewer tourists. Great deals on hotels and tours." },
          { name: "July–August", temp: "26°C – 36°C", icon: "🌧️", tip: "Monsoon brings relief. Jaipur's palaces look stunning washed by rain." },
          { name: "September", temp: "24°C – 35°C", icon: "🌦️", tip: "Monsoon ends. Lush green landscape around Nahargarh and Jaigarh." },
          { name: "October", temp: "19°C – 34°C", icon: "🍂", tip: "Season reopens. Diwali lights up the old city markets." },
          { name: "November–December", temp: "9°C – 25°C", icon: "❄️", tip: "Ideal weather. Carry a light jacket for evenings. Best photography conditions." },
        ]
      }
    },
    {
      id: 3,
      title: "Find a travel agent",
      type: "agent",
      image: "https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=800",
      content: {
        heading: "Trusted Travel Agents in Jaipur",
        intro: "Expert agents for Rajasthan heritage tours, camel safaris, and royal palace experiences.",
        agents: [
          { name: "Rajasthan Tourism Gateway", specialty: "Desert safaris & royal tours", rating: 4.9, phone: "+91-141-222-0001", experience: "20 years", languages: "English, Hindi, German" },
          { name: "Pink City Holidays", specialty: "Jaipur forts & bazaar walks", rating: 4.7, phone: "+91-141-333-0022", experience: "15 years", languages: "English, Hindi, French" },
          { name: "Royal Rajputana Travel", specialty: "Luxury heritage hotel packages", rating: 4.8, phone: "+91-141-444-0033", experience: "18 years", languages: "English, Hindi, Spanish" },
          { name: "Elephant Safari Jaipur", specialty: "Amer Fort elephant & jeep safaris", rating: 4.7, phone: "+91-141-555-0044", experience: "12 years", languages: "English, Hindi" },
          { name: "Mewari Journeys", specialty: "Rajasthan textile & craft tours", rating: 4.6, phone: "+91-141-666-0055", experience: "10 years", languages: "English, Hindi, Italian" },
          { name: "Desert Dunes Travel", specialty: "Jaisalmer & Jodhpur extensions", rating: 4.8, phone: "+91-141-777-0066", experience: "16 years", languages: "English, Hindi, Japanese" },
          { name: "HeritageTreks India", specialty: "Guided heritage walks & food tours", rating: 4.9, phone: "+91-141-888-0077", experience: "9 years", languages: "English, Hindi, Chinese" },
          { name: "Rajwada Rentals & Tours", specialty: "Self-drive vintage cars in Jaipur", rating: 4.5, phone: "+91-141-999-0088", experience: "7 years", languages: "English, Hindi" },
          { name: "Sacred Rajasthan Tours", specialty: "Temple and pilgrimage circuits", rating: 4.7, phone: "+91-141-101-0099", experience: "22 years", languages: "English, Hindi, Sanskrit" },
          { name: "India Unbound Jaipur", specialty: "Bespoke luxury Rajasthan itineraries", rating: 4.9, phone: "+91-141-102-0100", experience: "25 years", languages: "English, French, German" },
        ]
      }
    },
    {
      id: 4,
      title: "Find tours",
      type: "tours",
      image: "https://images.unsplash.com/photo-1524230572899-a752b3835840?w=800",
      content: {
        heading: "Top Tours in Jaipur",
        intro: "From elephant rides at Amer to tuk-tuk bazaar crawls and Rajasthani cooking classes.",
        tours: [
          { name: "Amer Fort & Sheesh Mahal Tour", duration: "5 hours", price: "₹1,200/person", includes: "Guide, entry tickets, elephant ride option", image: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/07/16/fe/87/amer-elephant-safari.jpg?w=600" },
          { name: "Pink City Heritage Walk", duration: "3 hours", price: "₹700/person", includes: "Walking tour, chai, local guide", image: "https://images.unsplash.com/photo-1603262110263-fb0112e7cc33?w=600" },
          { name: "Rajasthan 7-Day Circuit", duration: "7 days", price: "₹25,000/person", includes: "All hotels, transport, guide", image: "https://images.unsplash.com/photo-1590050752117-238cb0fb12b1?w=600" },
          { name: "Nahargarh Sunset & Dinner", duration: "4 hours", price: "₹2,500/person", includes: "Jeep, fort entry, rooftop dinner", image: "https://t3.ftcdn.net/jpg/08/03/14/06/360_F_803140668_a8hZXCNWkAIeEqO7kGSrgo4yt36BAncN.jpg" },
          { name: "Jaipur Tuk-Tuk Food Tour", duration: "3 hours", price: "₹1,100/person", includes: "Tuk-tuk, 10+ tastings, guide", image: "https://images.unsplash.com/photo-1506461883276-594a12b11cf3?w=600" },
          { name: "Blue Pottery Workshop", duration: "2 hours", price: "₹1,500/person", includes: "Materials, master craftsman, souvenir", image: "https://images.unsplash.com/photo-1524492412937-b28074a5d7da?w=600" },
          { name: "Jaigarh & Nahargarh Forts", duration: "5 hours", price: "₹1,800/person", includes: "Car, guide, all entries", image: "https://images.unsplash.com/photo-1599661046289-e31897846e41?w=600" },
          { name: "Chokhi Dhani Village Evening", duration: "4 hours", price: "₹1,400/person", includes: "Entry, cultural show, dinner", image: "https://images.unsplash.com/photo-1561501900-3701fa6a0864?w=600" },
          { name: "Gem & Jewellery Factory Tour", duration: "2 hours", price: "₹Free (custom buy)", includes: "Factory visit, artisan demo", image: "https://images.unsplash.com/photo-1506461883276-594a12b11cf3?w=600" },
          { name: "Hot Air Balloon over Jaipur", duration: "1 hour flight", price: "₹8,500/person", includes: "Balloon, pilot, breakfast, certificate", image: "https://images.unsplash.com/photo-1477587458883-47145ed94245?w=600" },
        ]
      }
    },
  ],

  // ─────────────────────────────────────────────
  // GOA
  // ─────────────────────────────────────────────
  goa: [
    {
      id: 1,
      title: "Where to stay",
      type: "stay",
      image: "https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=800",
      content: {
        heading: "Where to Stay in Goa",
        intro: "Goa has something for everyone — from ultra-luxury villas in South Goa to party-close guesthouses in North Goa.",
        items: [
          { name: "Taj Exotica Resort", category: "Luxury", price: "₹20,000+/night", highlight: "Private beach and lagoon in South Goa", image: "https://images.unsplash.com/photo-1582719508461-905c673771fd?w=600" },
          { name: "Vivenda Dos Palhacos", category: "Boutique", price: "₹8,000+/night", highlight: "Charming Portuguese villa in Majorda", image: "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?w=600" },
          { name: "The Jungle Book Hostel", category: "Budget", price: "₹700+/night", highlight: "Treehouse vibes near Calangute", image: "https://images.unsplash.com/photo-1555854877-bab0e564b8d5?w=600" },
          { name: "Alila Diwa Goa", category: "Mid-range", price: "₹9,000+/night", highlight: "Stunning pool amid rice paddies", image: "https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?w=600" },
          { name: "W Goa", category: "Luxury", price: "₹22,000+/night", highlight: "Ultra-stylish beachfront resort at Vagator", image: "https://images.unsplash.com/photo-1564501049412-61c2a3083791?w=600" },
          { name: "Pousada Tauma", category: "Boutique", price: "₹5,500+/night", highlight: "Eco-friendly themed villas in Calangute", image: "https://images.unsplash.com/photo-1445019980597-93fa8acb246c?w=600" },
          { name: "The Leela Goa", category: "Luxury", price: "₹18,000+/night", highlight: "Private lagoon, salt water pool, South Goa", image: "https://images.unsplash.com/photo-1590490360182-c33d57733427?w=600" },
          { name: "Moustache Hostel Goa", category: "Budget", price: "₹650+/night", highlight: "Pool, rooftop bar, social vibes", image: "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?w=600" },
          { name: "Siolim House", category: "Heritage", price: "₹12,000+/night", highlight: "Restored 1870 Portuguese manor house", image: "https://images.unsplash.com/photo-1416331108676-a22ccb276e35?w=600" },
          { name: "Zostel Arambol", category: "Budget", price: "₹600+/night", highlight: "Cliffside location near the hippie beach", image: "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?w=600" },
        ]
      }
    },
    {
      id: 2,
      title: "Weather in Goa",
      type: "weather",
      image: "https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?w=800",
      content: {
        heading: "Weather in Goa",
        intro: "Goa is a year-round destination but November to February is the golden season with perfect beach weather.",
        seasons: [
          { name: "January", temp: "20°C – 32°C", icon: "🌤️", tip: "Peak season. Sunburn Fest and beach parties. Book accommodation 2 months ahead." },
          { name: "February", temp: "21°C – 33°C", icon: "🌞", tip: "Goa Carnival in full swing. Portuguese-flavored street celebrations everywhere." },
          { name: "March", temp: "23°C – 34°C", icon: "🌊", tip: "Good beach weather. Holi festival is colourful and fun at Baga." },
          { name: "April", temp: "26°C – 36°C", icon: "☀️", tip: "Warm. Water sports still great. Shack prices drop significantly." },
          { name: "May", temp: "28°C – 35°C", icon: "🔥", tip: "Hot and humid before monsoon. Very few tourists — great deals." },
          { name: "June–July", temp: "24°C – 30°C", icon: "🌧️", tip: "Heavy monsoon. Most beach shacks close. Dudhsagar Falls at its peak." },
          { name: "August", temp: "24°C – 30°C", icon: "🌧️", tip: "Lush green Goa. Heritage churches and Old Goa ideal. Sao Joao festival." },
          { name: "September", temp: "25°C – 31°C", icon: "🌦️", tip: "Rains lighten. Spice plantation tours reopen. Off-season quiet." },
          { name: "October", temp: "25°C – 32°C", icon: "🍂", tip: "Season restarts. Beaches reopen. Great time before peak prices." },
          { name: "November–December", temp: "20°C – 32°C", icon: "🎉", tip: "Ideal weather. Christmas and New Year celebrations are spectacular." },
        ]
      }
    },
    {
      id: 3,
      title: "Find a travel agent",
      type: "agent",
      image: "https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=800",
      content: {
        heading: "Trusted Travel Agents in Goa",
        intro: "Local agents for water sports packages, spice plantation trips, and casino nights.",
        agents: [
          { name: "Goa Travel Experts", specialty: "Beach & water sports packages", rating: 4.8, phone: "+91-832-222-0011", experience: "15 years", languages: "English, Hindi, Konkani" },
          { name: "Heritage Goa Tours", specialty: "Old Goa churches & Portuguese history", rating: 4.7, phone: "+91-832-333-0022", experience: "18 years", languages: "English, Hindi, Portuguese" },
          { name: "Vivanta Holiday Makers", specialty: "Customized Goa itineraries", rating: 4.6, phone: "+91-832-444-0033", experience: "12 years", languages: "English, Hindi" },
          { name: "South Goa Escapes", specialty: "Luxury villa & private beach bookings", rating: 4.9, phone: "+91-832-555-0044", experience: "10 years", languages: "English, Hindi, German" },
          { name: "Dudhsagar Adventures", specialty: "Waterfall jeep & trek packages", rating: 4.8, phone: "+91-832-666-0055", experience: "9 years", languages: "English, Marathi, Hindi" },
          { name: "Spice Route Goa", specialty: "Plantation lunches & village tours", rating: 4.7, phone: "+91-832-777-0066", experience: "14 years", languages: "English, Konkani, Hindi" },
          { name: "Sunset Cruise Goa", specialty: "Evening boat tours on Mandovi River", rating: 4.6, phone: "+91-832-888-0077", experience: "11 years", languages: "English, Hindi, Russian" },
          { name: "Goa Bike Adventures", specialty: "Royal Enfield rentals and tours", rating: 4.7, phone: "+91-832-999-0088", experience: "8 years", languages: "English, Hindi" },
          { name: "Casino Goa Premium", specialty: "Casino nights & offshore packages", rating: 4.5, phone: "+91-832-101-0099", experience: "13 years", languages: "English, Hindi, Arabic" },
          { name: "Anjuna Flea Experts", specialty: "Market, beach, and nightlife tours", rating: 4.6, phone: "+91-832-102-0100", experience: "7 years", languages: "English, Hindi, French" },
        ]
      }
    },
    {
      id: 4,
      title: "Find tours",
      type: "tours",
      image: "https://images.unsplash.com/photo-1539635278303-d4002c07eae3?w=800",
      content: {
        heading: "Top Tours in Goa",
        intro: "Island hopping, heritage walks, spice plantation lunches, and high-energy nightlife tours.",
        tours: [
          { name: "Dudhsagar Waterfall Jeep Tour", duration: "Full day", price: "₹1,800/person", includes: "Jeep, guide, entry, lunch", image: "https://images.unsplash.com/photo-1613844838171-e649c7ed3e0d?w=600" },
          { name: "Old Goa Church & Fontainhas Walk", duration: "4 hours", price: "₹900/person", includes: "Walking guide, refreshments", image: "https://images.unsplash.com/photo-1614082242765-7c98ca0f3df3?w=600" },
          { name: "Goa Nightlife Pub Crawl", duration: "6 hours", price: "₹2,500/person", includes: "Pub crawl, casino entry, transport", image: "https://images.unsplash.com/photo-1596838132731-3301c3fd4317?w=600" },
          { name: "Scuba Diving at Grande Island", duration: "Full day", price: "₹4,500/person", includes: "2 dives, equipment, boat, lunch", image: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=600" },
          { name: "Spice Plantation Lunch Tour", duration: "5 hours", price: "₹1,600/person", includes: "Tour, elephant bath, Goan lunch", image: "https://images.unsplash.com/photo-1506461883276-594a12b11cf3?w=600" },
          { name: "Sunset Cruise on Mandovi", duration: "2 hours", price: "₹700/person", includes: "Boat, cultural performance, drinks", image: "https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?w=600" },
          { name: "North Goa Beach Hopping", duration: "6 hours", price: "₹1,400/person", includes: "Tuk-tuk, 6 beaches, guide", image: "https://images.unsplash.com/photo-1533900298318-6b8da08a523e?w=600" },
          { name: "Goa Portuguese History Walk", duration: "3 hours", price: "₹800/person", includes: "Heritage guide, coffee break", image: "https://images.unsplash.com/photo-1614082242765-7c98ca0f3df3?w=600" },
          { name: "Goa Cooking Class", duration: "3 hours", price: "₹2,000/person", includes: "Ingredients, recipe booklet, meal", image: "https://images.unsplash.com/photo-1533777857889-4be7c70b33f7?w=600" },
          { name: "Bioluminescent Beach Night Tour", duration: "3 hours", price: "₹1,200/person", includes: "Guide, transport, beach walk", image: "https://images.unsplash.com/photo-1590523277543-a94d2e4eb00b?w=600" },
        ]
      }
    },
  ],

  // ─────────────────────────────────────────────
  // KERALA
  // ─────────────────────────────────────────────
  kerala: [
    {
      id: 1,
      title: "Where to stay",
      type: "stay",
      image: "https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?w=800",
      content: {
        heading: "Where to Stay in Kerala",
        intro: "Kerala's stays are as unique as its landscapes — from floating houseboats on the backwaters to treetop jungle lodges in Wayanad.",
        items: [
          { name: "Kumarakom Lake Resort", category: "Luxury", price: "₹22,000+/night", highlight: "Villas on the Vembanad Lake shore", image: "https://images.unsplash.com/photo-1582719508461-905c673771fd?w=600" },
          { name: "Rice Boat Houseboat", category: "Unique", price: "₹12,000+/night", highlight: "Sleep on a traditional kettuvallam boat", image: "https://images.unsplash.com/photo-1593181629936-11c609b8db9b?w=600" },
          { name: "Windermere Estate", category: "Heritage", price: "₹8,000+/night", highlight: "Colonial estate bungalow in Munnar", image: "https://images.unsplash.com/photo-1516690561799-46d8f74f9abf?w=600" },
          { name: "Zostel Fort Kochi", category: "Budget", price: "₹600+/night", highlight: "Heritage building in Fort Kochi", image: "https://images.unsplash.com/photo-1555854877-bab0e564b8d5?w=600" },
          { name: "Coconut Lagoon CGH", category: "Unique", price: "₹16,000+/night", highlight: "Water-access only heritage villas", image: "https://images.unsplash.com/photo-1564501049412-61c2a3083791?w=600" },
          { name: "Spice Village Thekkady", category: "Eco", price: "₹9,000+/night", highlight: "Award-winning eco lodge near Periyar", image: "https://images.unsplash.com/photo-1445019980597-93fa8acb246c?w=600" },
          { name: "Fragrant Nature Munnar", category: "Mid-range", price: "₹6,500+/night", highlight: "Tea estate views, infinity pool", image: "https://images.unsplash.com/photo-1590490360182-c33d57733427?w=600" },
          { name: "Neeleshwar Hermitage", category: "Luxury", price: "₹18,000+/night", highlight: "Beachfront eco resort in Kasaragod", image: "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?w=600" },
          { name: "Marari Beach Resort", category: "Luxury", price: "₹14,000+/night", highlight: "Fishing village villas on quiet beach", image: "https://images.unsplash.com/photo-1416331108676-a22ccb276e35?w=600" },
          { name: "The Elephant Court", category: "Mid-range", price: "₹5,500+/night", highlight: "Thekkady, close to elephant sanctuary", image: "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?w=600" },
        ]
      }
    },
    {
      id: 2,
      title: "Weather in Kerala",
      type: "weather",
      image: "https://images.unsplash.com/photo-1559339352-11d035aa65de?w=800",
      content: {
        heading: "Weather in Kerala",
        intro: "Kerala has a tropical climate with two monsoon seasons. October to March is the best time for backwaters and beaches.",
        seasons: [
          { name: "January", temp: "20°C – 32°C", icon: "🌤️", tip: "Ideal season. Backwater cruises and beaches at their best. Book early." },
          { name: "February", temp: "22°C – 33°C", icon: "🌞", tip: "Perfect weather. Thrissur Pooram preparations begin. Great for Munnar." },
          { name: "March", temp: "24°C – 34°C", icon: "🌸", tip: "Vishu New Year celebrations. Slightly warm but comfortable." },
          { name: "April", temp: "26°C – 36°C", icon: "☀️", tip: "Vishu festival month. Hot afternoons. Good for hill stations." },
          { name: "May", temp: "27°C – 35°C", icon: "🔥", tip: "Pre-monsoon heat. Thrissur Pooram elephant festival." },
          { name: "June", temp: "24°C – 30°C", icon: "🌧️", tip: "Southwest monsoon arrives. Waterfalls begin. Ayurveda retreat season." },
          { name: "July–August", temp: "22°C – 29°C", icon: "🌧️", tip: "Heavy monsoon. Athirappilly Falls spectacular. Nehru Trophy boat race in Aug." },
          { name: "September", temp: "23°C – 30°C", icon: "🌦️", tip: "Onam harvest festival. Backwaters teem with boat races." },
          { name: "October", temp: "23°C – 31°C", icon: "🍂", tip: "Northeast monsoon begins. Malabar coast can be rainy — head to Munnar." },
          { name: "November–December", temp: "20°C – 30°C", icon: "🌤️", tip: "Season resumes. Christmas in Fort Kochi is magical. Perfect all round." },
        ]
      }
    },
    {
      id: 3,
      title: "Find a travel agent",
      type: "agent",
      image: "https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=800",
      content: {
        heading: "Trusted Travel Agents in Kerala",
        intro: "Specialists in houseboat bookings, Ayurvedic retreats, and wildlife safari packages.",
        agents: [
          { name: "Kerala Backwater Tours", specialty: "Houseboat & backwater packages", rating: 4.9, phone: "+91-484-222-0011", experience: "20 years", languages: "English, Hindi, Malayalam" },
          { name: "God's Own Country Travels", specialty: "Ayurveda, yoga & wellness tours", rating: 4.8, phone: "+91-484-333-0022", experience: "16 years", languages: "English, German, Malayalam" },
          { name: "Spice Route Journeys", specialty: "Wildlife & tea estate tours", rating: 4.7, phone: "+91-484-444-0033", experience: "14 years", languages: "English, French, Malayalam" },
          { name: "Fort Kochi Heritage Tours", specialty: "Colonial history & Jewish Quarter walks", rating: 4.8, phone: "+91-484-555-0044", experience: "12 years", languages: "English, Malayalam, Dutch" },
          { name: "Kerala Elephant Safaris", specialty: "Periyar & Wayanad wildlife tours", rating: 4.7, phone: "+91-484-666-0055", experience: "18 years", languages: "English, Hindi, Malayalam" },
          { name: "Kochi Cruise Club", specialty: "Chinese fishing net & lagoon cruises", rating: 4.6, phone: "+91-484-777-0066", experience: "10 years", languages: "English, Malayalam" },
          { name: "Munnar Trekkers", specialty: "Tea estate treks & peak climbs", rating: 4.8, phone: "+91-484-888-0077", experience: "11 years", languages: "English, Tamil, Malayalam" },
          { name: "Varkala Cliffs Travel", specialty: "Clifftop stays & beach packages", rating: 4.6, phone: "+91-484-999-0088", experience: "9 years", languages: "English, Hindi, Russian" },
          { name: "Kathakali Cultural Tours", specialty: "Dance, culture & arts immersion", rating: 4.9, phone: "+91-484-101-0099", experience: "22 years", languages: "English, Malayalam, Japanese" },
          { name: "Western Ghats Expeditions", specialty: "Eco-trekking and birding tours", rating: 4.7, phone: "+91-484-102-0100", experience: "15 years", languages: "English, French, Malayalam" },
        ]
      }
    },
    {
      id: 4,
      title: "Find tours",
      type: "tours",
      image: "https://images.unsplash.com/photo-1545208393-216559629b7b?w=800",
      content: {
        heading: "Top Tours in Kerala",
        intro: "From twilight houseboat cruises to elephant safari mornings in Periyar and Kathakali evenings.",
        tours: [
          { name: "Alleppey Houseboat Day Cruise", duration: "8 hours", price: "₹3,500/person", includes: "Houseboat, lunch, guide", image: "https://images.unsplash.com/photo-1593181629936-11c609b8db9b?w=600" },
          { name: "Periyar Wildlife Boat Safari", duration: "3 hours", price: "₹1,200/person", includes: "Boat, entry, guide", image: "https://images.unsplash.com/photo-1540555700478-4be289fbecef?w=600" },
          { name: "Munnar Tea & Trekking Tour", duration: "Full day", price: "₹2,000/person", includes: "Tea tasting, trek, transport", image: "https://images.unsplash.com/photo-1516690561799-46d8f74f9abf?w=600" },
          { name: "Kathakali & Kalaripayattu Evening", duration: "3 hours", price: "₹1,500/person", includes: "Show, backstage makeup visit", image: "https://thumbs.dreamstime.com/b/kathakali-performers-traditional-dance-kerala-s-state-india-major-form-classical-indian-related-to-hindu-184594216.jpg" },
          { name: "Fort Kochi Heritage Walk", duration: "3 hours", price: "₹800/person", includes: "Walking guide, chai, Jewish Quarter", image: "https://t3.ftcdn.net/jpg/07/09/09/06/360_F_709090633_ETb1OiBZ1SUeDjYhYSVhFIF9hq8MPoN5.jpg" },
          { name: "Varkala Cliff Yoga & Sunset", duration: "2 hours", price: "₹1,000/person", includes: "Yoga mat, teacher, herbal tea", image: "https://images.unsplash.com/photo-1590050752117-238cb0fb12b1?w=600" },
          { name: "Thekkady Bamboo Rafting", duration: "4 hours", price: "₹1,800/person", includes: "Raft, guide, jungle trail", image: "https://png.pngtree.com/thumb_back/fh260/background/20250615/pngtree-majestic-african-wildlife-sunset-safari-animals-image_17430211.jpg" },
          { name: "Athirappilly Falls Day Trip", duration: "Full day", price: "₹2,500/person", includes: "AC car, entry, lunch, guide", image: "https://www.shutterstock.com/shutterstock/videos/3630023285/thumb/1.jpg?ip=x480" },
          { name: "Kerala Cooking Masterclass", duration: "3 hours", price: "₹2,200/person", includes: "Ingredients, spice kit, meal", image: "https://images.unsplash.com/photo-1559339352-11d035aa65de?w=600" },
          { name: "Backwater Village Canoe Tour", duration: "3 hours", price: "₹1,200/person", includes: "Canoe, village walk, coconut water", image: "https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?w=600" },
        ]
      }
    },
  ],

  // ─────────────────────────────────────────────
  // LADAKH
  // ─────────────────────────────────────────────
  ladakh: [
    {
      id: 1,
      title: "Where to stay",
      type: "stay",
      image: "https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?w=800",
      content: {
        heading: "Where to Stay in Ladakh",
        intro: "Ladakh offers unique glamping tents by Pangong Lake, monastery guesthouses, and boutique camps in the Nubra Valley.",
        items: [
          { name: "The Grand Dragon Ladakh", category: "Luxury", price: "₹12,000+/night", highlight: "Best hotel in Leh with mountain views", image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=600" },
          { name: "Pangong Tented Camp", category: "Unique", price: "₹8,000+/night", highlight: "Sleep beside the blue Pangong Lake", image: "https://images.unsplash.com/photo-1504280390367-361c6d9f38f4?w=600" },
          { name: "Monastery Guesthouses", category: "Budget", price: "₹1,200+/night", highlight: "Rustic rooms near Hemis and Thiksey", image: "https://images.unsplash.com/photo-1555854877-bab0e564b8d5?w=600" },
          { name: "Nubra Ecolodge", category: "Mid-range", price: "₹6,000+/night", highlight: "Eco camp in the Hunder sand dunes", image: "https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?w=600" },
          { name: "The Zen Ladakh", category: "Luxury", price: "₹14,000+/night", highlight: "Solar-powered retreat in Stok Village", image: "https://images.unsplash.com/photo-1564501049412-61c2a3083791?w=600" },
          { name: "Tsermang Guest House", category: "Budget", price: "₹900+/night", highlight: "Local family homestay in Leh old town", image: "https://images.unsplash.com/photo-1445019980597-93fa8acb246c?w=600" },
          { name: "Tso Moriri Camp", category: "Unique", price: "₹9,000+/night", highlight: "Remote tented camp by the sacred lake", image: "https://images.unsplash.com/photo-1590490360182-c33d57733427?w=600" },
          { name: "Stok Palace Heritage Hotel", category: "Heritage", price: "₹10,000+/night", highlight: "Live in a 200-year-old Ladakhi palace", image: "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?w=600" },
          { name: "Hunder Sand Dunes Camp", category: "Unique", price: "₹5,500+/night", highlight: "Desert camp with stargazing dome tent", image: "https://images.unsplash.com/photo-1416331108676-a22ccb276e35?w=600" },
          { name: "Ladakh Residency Hotel", category: "Mid-range", price: "₹4,500+/night", highlight: "Well-located in Leh with rooftop cafe", image: "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?w=600" },
        ]
      }
    },
    {
      id: 2,
      title: "Weather in Ladakh",
      type: "weather",
      image: "https://images.unsplash.com/photo-1581791534721-e599df4417f7?w=800",
      content: {
        heading: "Weather in Ladakh",
        intro: "Ladakh is a high-altitude cold desert. June to September is the best time to visit when roads are open and skies are clear.",
        seasons: [
          { name: "January", temp: "-30°C – 0°C", icon: "❄️", tip: "Chadar Trek on the frozen Zanskar River. Only for seasoned trekkers." },
          { name: "February", temp: "-25°C – 2°C", icon: "❄️", tip: "Extreme cold. Losar (Ladakhi New Year) festival. Monastery winter rituals." },
          { name: "March", temp: "-15°C – 8°C", icon: "🌬️", tip: "Ice begins to melt. Chadar Trek possible till mid-March." },
          { name: "April", temp: "-5°C – 12°C", icon: "🌸", tip: "Roads begin opening. Sham Valley trekking starts. Good for birdwatching." },
          { name: "May", temp: "5°C – 20°C", icon: "🌤️", tip: "Leh accessible. Khardung La opens. Apricot trees bloom — beautiful scenery." },
          { name: "June", temp: "10°C – 26°C", icon: "☀️", tip: "Best season begins. Pangong Lake accessible. Nubra Valley open." },
          { name: "July–August", temp: "12°C – 30°C", icon: "🌞", tip: "Peak season. All passes open. Hemis Festival in July — don't miss it." },
          { name: "September", temp: "8°C – 24°C", icon: "🍂", tip: "Still excellent. Fewer crowds. Zanskar trek possible. Clear skies for stars." },
          { name: "October", temp: "0°C – 15°C", icon: "🌨️", tip: "Season ends. Dramatic winter colours. Some passes close by month end." },
          { name: "November–December", temp: "-15°C – 2°C", icon: "❄️", tip: "Most passes closed. Only Leh reachable by flight. Monastery festivals." },
        ]
      }
    },
    {
      id: 3,
      title: "Find a travel agent",
      type: "agent",
      image: "https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=800",
      content: {
        heading: "Trusted Travel Agents in Ladakh",
        intro: "Specialists in high-altitude bike trips, trekking permits, and Pangong Lake camping packages.",
        agents: [
          { name: "Leh Ladakh Riders", specialty: "Manali–Leh motorcycle expeditions", rating: 4.9, phone: "+91-1982-222-0011", experience: "18 years", languages: "English, Hindi" },
          { name: "Himalaya Trekkers", specialty: "High-altitude trekking & permits", rating: 4.8, phone: "+91-1982-333-0022", experience: "20 years", languages: "English, Hindi, French" },
          { name: "Snow Leopard Adventures", specialty: "Wildlife & monastery circuits", rating: 4.7, phone: "+91-1982-444-0033", experience: "15 years", languages: "English, Hindi, German" },
          { name: "Chadar Trek Guides", specialty: "Frozen river winter expeditions", rating: 4.9, phone: "+91-1982-555-0044", experience: "12 years", languages: "English, Hindi, Ladakhi" },
          { name: "Pangong Lake Camps", specialty: "Lake camping & stargazing", rating: 4.8, phone: "+91-1982-666-0055", experience: "10 years", languages: "English, Hindi" },
          { name: "Nubra Valley Expeditions", specialty: "Camel safari & sand dune camps", rating: 4.7, phone: "+91-1982-777-0066", experience: "14 years", languages: "English, Hindi, Tibetan" },
          { name: "Zanskar Wilderness", specialty: "Off-road SUV tours & Zanskar valley", rating: 4.8, phone: "+91-1982-888-0077", experience: "16 years", languages: "English, Hindi, Italian" },
          { name: "Buddhist Circuit Tours", specialty: "Monastery & spiritual tours", rating: 4.9, phone: "+91-1982-999-0088", experience: "25 years", languages: "English, Hindi, Tibetan" },
          { name: "Markha Valley Trekking", specialty: "Village trek & homestay circuits", rating: 4.7, phone: "+91-1982-101-0099", experience: "11 years", languages: "English, Hindi" },
          { name: "High Altitude Photo Tours", specialty: "Photography expeditions in Ladakh", rating: 4.8, phone: "+91-1982-102-0100", experience: "9 years", languages: "English, Hindi, Japanese" },
        ]
      }
    },
    {
      id: 4,
      title: "Find tours",
      type: "tours",
      image: "https://images.unsplash.com/photo-1616712134411-6b6ae89bc3ba?w=800",
      content: {
        heading: "Top Tours in Ladakh",
        intro: "Epic bike expeditions, monastery circuits, camel safaris in Nubra, and stargazing camps by Pangong.",
        tours: [
          { name: "Manali–Leh Bike Expedition", duration: "7 days", price: "₹22,000/person", includes: "Bike rental, camps, guide, permits", image: "https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?w=600" },
          { name: "Pangong & Nubra Valley Circuit", duration: "4 days", price: "₹15,000/person", includes: "Vehicle, camps, permits, meals", image: "https://images.unsplash.com/photo-1581791534721-e599df4417f7?w=600" },
          { name: "Monastery Spiritual Tour", duration: "2 days", price: "₹5,000/person", includes: "Guide, vehicle, monastery entry", image: "https://discoverlehladakh.in/wp-content/uploads/2020/06/Hemis-monastery-1022x530.jpeg" },
          { name: "Chadar Frozen River Trek", duration: "9 days", price: "₹28,000/person", includes: "Tents, food, permits, guide", image: "https://aquaterra.in/wp-content/uploads/2019/10/Zanskar-Ladakh-Leh-River-Rafting-6.jpg" },
          { name: "Nubra Camel Safari", duration: "1 day", price: "₹4,500/person", includes: "Camel, sand dune walk, lunch", image: "https://www.tourmyindia.com/states/ladakh/imagess/camel-adventure.jpg" },
          { name: "Leh City & Shanti Stupa Tour", duration: "4 hours", price: "₹1,500/person", includes: "Car, guide, all entries", image: "https://images.unsplash.com/photo-1590005024862-6b67679a29fb?w=600" },
          { name: "Markha Valley Trek", duration: "6 days", price: "₹18,000/person", includes: "Tents, meals, porter, permits", image: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=600" },
          { name: "Zanskar River Rafting", duration: "2 days", price: "₹8,000/person", includes: "Rafting gear, camp, guide", image: "https://aquaterra.in/wp-content/uploads/2019/10/Zanskar-Ladakh-Leh-River-Rafting-6.jpg" },
          { name: "Pangong Stargazing Camp", duration: "2 nights", price: "₹9,000/person", includes: "Tent, meals, telescope session", image: "https://images.unsplash.com/photo-1504280390367-361c6d9f38f4?w=600" },
          { name: "Khardung La & Diskit Monastery", duration: "Full day", price: "₹3,500/person", includes: "SUV, guide, permits, lunch", image: "https://t4.ftcdn.net/jpg/01/09/84/91/360_F_109849179_Z4ggL0DY6MoavyhOQWkNrJ3yL6c14I4T.jpg" },
        ]
      }
    },
  ],

  // ─────────────────────────────────────────────
  // VARANASI
  // ─────────────────────────────────────────────
  varanasi: [
    {
      id: 1,
      title: "Where to stay",
      type: "stay",
      image: "https://images.unsplash.com/photo-1601050690597-df056fb04791?w=800",
      content: {
        heading: "Where to Stay in Varanasi",
        intro: "Stay in a heritage guesthouse on the ghats for the most authentic experience, or in a luxury hotel near Cantonment.",
        items: [
          { name: "Taj Ganges", category: "Luxury", price: "₹12,000+/night", highlight: "Peaceful garden retreat near BHU", image: "https://images.unsplash.com/photo-1582719508461-905c673771fd?w=600" },
          { name: "Brijrama Palace", category: "Heritage", price: "₹18,000+/night", highlight: "18th-century palace on the Ganges ghat", image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=600" },
          { name: "Ganga Fuji Guesthouse", category: "Budget", price: "₹800+/night", highlight: "Ghat-view rooftop, beloved by backpackers", image: "https://images.unsplash.com/photo-1555854877-bab0e564b8d5?w=600" },
          { name: "Hotel Surya", category: "Mid-range", price: "₹4,500+/night", highlight: "Pool and Ganga views", image: "https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?w=600" },
          { name: "Alka Hotel", category: "Budget", price: "₹1,500+/night", highlight: "Prime ghat location, great rooftop", image: "https://images.unsplash.com/photo-1564501049412-61c2a3083791?w=600" },
          { name: "Ramada by Wyndham", category: "Mid-range", price: "₹5,500+/night", highlight: "Modern hotel near Cantonment station", image: "https://images.unsplash.com/photo-1445019980597-93fa8acb246c?w=600" },
          { name: "Casa Le Ganga", category: "Boutique", price: "₹8,000+/night", highlight: "Boutique riverside rooms, artistic interiors", image: "https://images.unsplash.com/photo-1590490360182-c33d57733427?w=600" },
          { name: "Sahi River View Guesthouse", category: "Budget", price: "₹700+/night", highlight: "Family-run ghat guesthouse, sunrise views", image: "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?w=600" },
          { name: "Radisson Hotel Varanasi", category: "Luxury", price: "₹9,000+/night", highlight: "Full-service hotel, airport transfers", image: "https://images.unsplash.com/photo-1416331108676-a22ccb276e35?w=600" },
          { name: "Suryauday Haveli", category: "Heritage", price: "₹6,000+/night", highlight: "Heritage haveli on Shivala Ghat", image: "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?w=600" },
        ]
      }
    },
    {
      id: 2,
      title: "Weather in Varanasi",
      type: "weather",
      image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=800",
      content: {
        heading: "Weather in Varanasi",
        intro: "Varanasi has a humid subtropical climate. October to March is ideal — cool mornings on the ghats and clear skies.",
        seasons: [
          { name: "January", temp: "5°C – 18°C", icon: "❄️", tip: "Coldest month. Misty Ganga mornings are ethereal. Carry warm clothes." },
          { name: "February", temp: "8°C – 24°C", icon: "🌸", tip: "Maha Shivaratri festival. Ghats packed with devotees. Incredible energy." },
          { name: "March", temp: "15°C – 31°C", icon: "🌤️", tip: "Holi in Varanasi is world-famous. Colours everywhere, including the ghats." },
          { name: "April", temp: "22°C – 38°C", icon: "🔥", tip: "Heating up fast. Visit ghats before 7 AM. Great for photography." },
          { name: "May", temp: "28°C – 43°C", icon: "☀️", tip: "Very hot. Morning boat rides essential. Stay near air-conditioned hotels." },
          { name: "June", temp: "29°C – 42°C", icon: "🌡️", tip: "Intense heat before monsoon. Ganges at low level. Fewer tourists." },
          { name: "July–August", temp: "25°C – 34°C", icon: "🌧️", tip: "Monsoon arrives. Ganges rises dramatically. Aarti in rain is magical." },
          { name: "September", temp: "24°C – 33°C", icon: "🌦️", tip: "Monsoon ends. Ganges full. Viswaroop Darshan festival in September." },
          { name: "October", temp: "18°C – 32°C", icon: "🍂", tip: "Diwali in Varanasi is breathtaking — 1 million earthen lamps on the ghats." },
          { name: "November–December", temp: "8°C – 26°C", icon: "❄️", tip: "Ideal weather. Dev Deepawali festival in November — must experience." },
        ]
      }
    },
    {
      id: 3,
      title: "Find a travel agent",
      type: "agent",
      image: "https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=800",
      content: {
        heading: "Trusted Travel Agents in Varanasi",
        intro: "Specialized guides for Ganga Aarti, temple circuits, silk saree shopping, and spiritual retreats.",
        agents: [
          { name: "Kashi Heritage Tours", specialty: "Ganga Aarti & ghat walks", rating: 4.9, phone: "+91-542-222-0011", experience: "22 years", languages: "English, Hindi, Sanskrit" },
          { name: "Banaras Travel House", specialty: "Silk weaving villages & temples", rating: 4.7, phone: "+91-542-333-0022", experience: "18 years", languages: "English, Hindi, Japanese" },
          { name: "Moksha Journeys", specialty: "Spiritual immersion packages", rating: 4.8, phone: "+91-542-444-0033", experience: "15 years", languages: "English, Hindi, German" },
          { name: "Ganga Sunrise Boats", specialty: "Private dawn boat tours", rating: 4.9, phone: "+91-542-555-0044", experience: "20 years", languages: "English, Hindi" },
          { name: "BHU Cultural Club", specialty: "University, temple & art tours", rating: 4.6, phone: "+91-542-666-0055", experience: "12 years", languages: "English, Hindi, French" },
          { name: "Sarnath Buddhist Tours", specialty: "Buddhist pilgrimage packages", rating: 4.8, phone: "+91-542-777-0066", experience: "16 years", languages: "English, Tibetan, Hindi" },
          { name: "Banarasi Silk Trails", specialty: "Weaver village & shopping tours", rating: 4.7, phone: "+91-542-888-0077", experience: "14 years", languages: "English, Hindi" },
          { name: "Dev Deepawali Organizers", specialty: "Festival tours & ghat ceremonies", rating: 4.9, phone: "+91-542-999-0088", experience: "10 years", languages: "English, Hindi, Italian" },
          { name: "North India Pilgrim Tours", specialty: "Char Dham & temple circuits", rating: 4.7, phone: "+91-542-101-0099", experience: "25 years", languages: "English, Hindi, Marathi" },
          { name: "Varanasi Food Walks", specialty: "Chaat, paan & street food tours", rating: 4.8, phone: "+91-542-102-0100", experience: "8 years", languages: "English, Hindi" },
        ]
      }
    },
    {
      id: 4,
      title: "Find tours",
      type: "tours",
      image: "https://images.unsplash.com/photo-1539635278303-d4002c07eae3?w=800",
      content: {
        heading: "Top Tours in Varanasi",
        intro: "Sunrise boat rides, evening Aarti ceremonies, Sarnath day trips, and Banarasi street food walks.",
        tours: [
          { name: "Sunrise Ganges Boat Ride", duration: "2 hours", price: "₹600/person", includes: "Wooden boat, guide, flower offering", image: "https://images.pexels.com/photos/28975088/pexels-photo-28975088/free-photo-of-scenic-boat-ride-at-sunrise-in-india.jpeg" },
          { name: "Evening Ganga Aarti Experience", duration: "3 hours", price: "₹800/person", includes: "Front-row seating, aarti guide", image: "https://images.unsplash.com/photo-1561361058-c24cecae35ca?w=600" },
          { name: "Sarnath Buddhist Excursion", duration: "5 hours", price: "₹1,500/person", includes: "Transport, entry, guide, tea", image: "https://www.pelago.com/img/products/IN-India/sarnath-excursion-from-varanasi/3fd53da8-7329-495c-8b95-16697ca57fe2_sarnath-excursion-from-varanasi-medium.jpg" },
          { name: "Ghat Walking & Temple Tour", duration: "3 hours", price: "₹900/person", includes: "Walking guide, temple entries", image: "https://images.unsplash.com/photo-1545127398-14699f92334b?w=600" },
          { name: "Banarasi Street Food Walk", duration: "3 hours", price: "₹700/person", includes: "8+ food stops, lassi, paan", image: "https://img.freepik.com/premium-photo/exploring-market-photo-realistic-street-food-tour-group-concept-high-resolution-image_980716-196049.jpg" },
          { name: "Silk Weaving Village Tour", duration: "4 hours", price: "₹1,200/person", includes: "Weaver family visit, loom demo", image: "https://images.unsplash.com/photo-1506461883276-594a12b11cf3?w=600" },
          { name: "Dev Deepawali Festival Tour", duration: "4 hours", price: "₹2,500/person", includes: "Boat on Ganges, front-row lamp viewing", image: "https://images.unsplash.com/photo-1561361058-c24cecae35ca?w=600" },
          { name: "Kashi Vishwanath Temple Visit", duration: "2 hours", price: "₹500/person", includes: "VIP darshan pass, guide", image: "https://images.unsplash.com/photo-1545127398-14699f92334b?w=600" },
          { name: "Yoga & Meditation on Ghats", duration: "2 hours", price: "₹1,000/person", includes: "Instructor, mat, pranayama", image: "https://static.vecteezy.com/system/resources/thumbnails/075/605/360/small/diverse-friends-doing-pilates-class-golden-hour-outdoor-field-photo.jpg" },
          { name: "Varanasi Photography Tour", duration: "4 hours", price: "₹2,000/person", includes: "Pro guide, access to hidden ghats", image: "https://images.unsplash.com/photo-1601050690597-df056fb04791?w=600" },
        ]
      }
    },
  ],

  // ─────────────────────────────────────────────
  // UDAIPUR
  // ─────────────────────────────────────────────
  udaipur: [
    {
      id: 1,
      title: "Where to stay",
      type: "stay",
      image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800",
      content: {
        heading: "Where to Stay in Udaipur",
        intro: "Udaipur is famous for its lakeside palace hotels. Staying here feels like being royalty.",
        items: [
          { name: "Taj Lake Palace", category: "Luxury", price: "₹45,000+/night", highlight: "Floating white marble palace on Lake Pichola", image: "https://images.unsplash.com/photo-1582719508461-905c673771fd?w=600" },
          { name: "Fateh Garh", category: "Heritage", price: "₹15,000+/night", highlight: "18th-century hilltop fort hotel", image: "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?w=600" },
          { name: "Zostel Udaipur", category: "Budget", price: "₹700+/night", highlight: "Lake views from the terrace", image: "https://images.unsplash.com/photo-1555854877-bab0e564b8d5?w=600" },
          { name: "Amet Haveli", category: "Mid-range", price: "₹7,000+/night", highlight: "300-year-old haveli on the lakeside", image: "https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?w=600" },
          { name: "Leela Palace Udaipur", category: "Luxury", price: "₹35,000+/night", highlight: "Lake Pichola views, royal interiors", image: "https://images.unsplash.com/photo-1564501049412-61c2a3083791?w=600" },
          { name: "Raas Devigarh", category: "Luxury", price: "₹28,000+/night", highlight: "18th-century fort palace 45km from Udaipur", image: "https://images.unsplash.com/photo-1445019980597-93fa8acb246c?w=600" },
          { name: "Hotel Mahendra Prakash", category: "Budget", price: "₹1,500+/night", highlight: "Central location, rooftop restaurant", image: "https://images.unsplash.com/photo-1590490360182-c33d57733427?w=600" },
          { name: "Trident Udaipur", category: "Mid-range", price: "₹8,000+/night", highlight: "Lakeside pool, great Pichola views", image: "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?w=600" },
          { name: "Kankarwa Haveli", category: "Heritage", price: "₹5,500+/night", highlight: "250-year-old haveli on Lake Pichola", image: "https://images.unsplash.com/photo-1416331108676-a22ccb276e35?w=600" },
          { name: "Moustache Hostel Udaipur", category: "Budget", price: "₹650+/night", highlight: "Rooftop pool, lake views, social atmosphere", image: "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?w=600" },
        ]
      }
    },
    {
      id: 2,
      title: "Weather in Udaipur",
      type: "weather",
      image: "https://thumbs.dreamstime.com/b/lake-pichola-udaipur-view-city-rajasthan-india-203501215.jpg",
      content: {
        heading: "Weather in Udaipur",
        intro: "Udaipur has a semi-arid climate. October to March is peak season with pleasant weather for lake boating and palace tours.",
        seasons: [
          { name: "January", temp: "10°C – 27°C", icon: "❄️", tip: "Perfect weather. Mewar Festival preparations. Best lake photography." },
          { name: "February", temp: "12°C – 29°C", icon: "🌸", tip: "Rose-season blooms. Romantic boat rides. Popular wedding season." },
          { name: "March", temp: "17°C – 34°C", icon: "🎉", tip: "Mewar Festival (Gangaur). Colourful processions on Lake Pichola." },
          { name: "April", temp: "23°C – 40°C", icon: "🔥", tip: "Getting hot. Explore palaces in the early morning and evenings." },
          { name: "May", temp: "28°C – 43°C", icon: "☀️", tip: "Very hot. Indoor museums and palace interiors are best bets." },
          { name: "June", temp: "29°C – 42°C", icon: "🌡️", tip: "Pre-monsoon heat. Fewer tourists. Great deals on palace hotels." },
          { name: "July–August", temp: "25°C – 34°C", icon: "🌧️", tip: "Monsoon fills the lakes. Sajjangarh Fort magical in mist. Lush green." },
          { name: "September", temp: "24°C – 33°C", icon: "🌦️", tip: "Monsoon ends. Lakes overflow. Beautiful reflections on Pichola." },
          { name: "October", temp: "19°C – 34°C", icon: "🍂", tip: "Season begins. Diwali fireworks reflecting in the lake are stunning." },
          { name: "November–December", temp: "11°C – 28°C", icon: "❄️", tip: "Ideal weather. Carry a light jacket for evenings. Best time overall." },
        ]
      }
    },
    {
      id: 3,
      title: "Find a travel agent",
      type: "agent",
      image: "https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=800",
      content: {
        heading: "Trusted Travel Agents in Udaipur",
        intro: "Specialists in boat tours, royal palace dinners, and Rajasthan multi-city circuits.",
        agents: [
          { name: "Lake City Tours", specialty: "Lake Pichola & City Palace packages", rating: 4.9, phone: "+91-294-222-0011", experience: "18 years", languages: "English, Hindi, French" },
          { name: "Royal Mewar Journeys", specialty: "Heritage hotel & fort tours", rating: 4.8, phone: "+91-294-333-0022", experience: "20 years", languages: "English, Hindi, German" },
          { name: "Rajwada Travels", specialty: "Kumbhalgarh & Ranakpur day trips", rating: 4.7, phone: "+91-294-444-0033", experience: "15 years", languages: "English, Hindi, Italian" },
          { name: "Udaipur Boat Club", specialty: "Sunset cruises & lake tours", rating: 4.9, phone: "+91-294-555-0044", experience: "12 years", languages: "English, Hindi" },
          { name: "Vintage Udaipur", specialty: "Classic car & heritage walk tours", rating: 4.7, phone: "+91-294-666-0055", experience: "10 years", languages: "English, Hindi, Spanish" },
          { name: "Mewar Cultural Tours", specialty: "Puppet shows & folk dance packages", rating: 4.8, phone: "+91-294-777-0066", experience: "16 years", languages: "English, Hindi, Marwari" },
          { name: "Chittorgarh Excursions", specialty: "Day trips to Chittorgarh fort", rating: 4.6, phone: "+91-294-888-0077", experience: "14 years", languages: "English, Hindi" },
          { name: "Bespoke Rajasthan", specialty: "Luxury customized palace circuits", rating: 4.9, phone: "+91-294-999-0088", experience: "22 years", languages: "English, French, German" },
          { name: "Shilpgram Crafts Tour", specialty: "Craft villages & artist studios", rating: 4.6, phone: "+91-294-101-0099", experience: "9 years", languages: "English, Hindi, Rajasthani" },
          { name: "Udaipur Wellness Retreats", specialty: "Ayurvedic spa & palace yoga", rating: 4.8, phone: "+91-294-102-0100", experience: "11 years", languages: "English, Hindi, Japanese" },
        ]
      }
    },
    {
      id: 4,
      title: "Find tours",
      type: "tours",
      image: "https://images.unsplash.com/photo-1539635278303-d4002c07eae3?w=800",
      content: {
        heading: "Top Tours in Udaipur",
        intro: "Sunset boat rides on Lake Pichola, folk dance evenings, and day trips to Kumbhalgarh and Ranakpur.",
        tours: [
          { name: "Lake Pichola Sunset Cruise", duration: "2 hours", price: "₹1,200/person", includes: "Boat, guide, sunset snacks", image: "https://thumbs.dreamstime.com/b/lake-pichola-udaipur-view-city-rajasthan-india-203501215.jpg" },
          { name: "City Palace & Bagore Haveli Tour", duration: "5 hours", price: "₹1,500/person", includes: "Entry, guide, folk dance show", image: "https://t4.ftcdn.net/jpg/01/86/03/91/360_F_186039131_DtzFlukfaDy0Fdsgop6HzJwGGJ1II5Ls9.jpg" },
          { name: "Kumbhalgarh Fort Day Trip", duration: "Full day", price: "₹3,000/person", includes: "Transport, entry, guide, lunch", image: "https://images.unsplash.com/photo-1621360841013-c7683c659ec6?w=600" },
          { name: "Ranakpur Jain Temple Tour", duration: "Full day", price: "₹3,500/person", includes: "Car, entry, guide, lunch", image: "https://images.unsplash.com/photo-1561501900-3701fa6a0864?w=600" },
          { name: "Udaipur Heritage Walk", duration: "3 hours", price: "₹700/person", includes: "Walking guide, chai, old bazaar", image: "https://images.unsplash.com/photo-1603262110263-fb0112e7cc33?w=600" },
          { name: "Shilpgram Craft Village Tour", duration: "3 hours", price: "₹800/person", includes: "Entry, craft demos, guide", image: "https://images.unsplash.com/photo-1506461883276-594a12b11cf3?w=600" },
          { name: "Chittorgarh Fort Excursion", duration: "Full day", price: "₹3,500/person", includes: "Transport, guide, entries", image: "https://images.unsplash.com/photo-1599661046289-e31897846e41?w=600" },
          { name: "Vintage Car Museum Visit", duration: "2 hours", price: "₹500/person", includes: "Entry, guide", image: "https://images.unsplash.com/photo-1621360841013-c7683c659ec6?w=600" },
          { name: "Sajjangarh Monsoon Palace", duration: "3 hours", price: "₹900/person", includes: "Jeep, entry, sunset views", image: "https://t4.ftcdn.net/jpg/03/58/35/27/360_F_358352741_X0EavWfHOHKXuBMY5CZrPv9SyyseQX4n.jpg" },
          { name: "Udaipur Photography Walk", duration: "4 hours", price: "₹2,000/person", includes: "Pro guide, sunrise or sunset timing", image: "https://images.unsplash.com/photo-1477587458883-47145ed94245?w=600" },
        ]
      }
    },
  ],

  // ─────────────────────────────────────────────
  // RISHIKESH
  // ─────────────────────────────────────────────
  rishikesh: [
    {
      id: 1,
      title: "Where to stay",
      type: "stay",
      image: "https://images.unsplash.com/photo-1504280390367-361c6d9f38f4?w=800",
      content: {
        heading: "Where to Stay in Rishikesh",
        intro: "From riverside ashrams to glamping camps in Shivpuri, Rishikesh has unique stays for every kind of traveller.",
        items: [
          { name: "Aloha on the Ganges", category: "Luxury", price: "₹14,000+/night", highlight: "Riverside resort with yoga deck", image: "https://images.unsplash.com/photo-1582719508461-905c673771fd?w=600" },
          { name: "Shivpuri Adventure Camp", category: "Unique", price: "₹4,500+/night", highlight: "Glamping tents by the Ganges with rafting", image: "https://images.unsplash.com/photo-1504280390367-361c6d9f38f4?w=600" },
          { name: "Parmarth Niketan Ashram", category: "Ashram", price: "₹1,500+/night", highlight: "Authentic ashram stay with yoga & Aarti", image: "https://images.unsplash.com/photo-1534422298391-e4f8c170db0a?w=600" },
          { name: "Zostel Rishikesh", category: "Budget", price: "₹600+/night", highlight: "Social hostel near Laxman Jhula", image: "https://images.unsplash.com/photo-1555854877-bab0e564b8d5?w=600" },
          { name: "Taj Rishikesh Resort", category: "Luxury", price: "₹22,000+/night", highlight: "Cliff-top luxury, spa, private Ganges access", image: "https://images.unsplash.com/photo-1564501049412-61c2a3083791?w=600" },
          { name: "Luxe Camp Rishikesh", category: "Unique", price: "₹7,000+/night", highlight: "Upscale riverside glamping, bonfire nights", image: "https://images.unsplash.com/photo-1445019980597-93fa8acb246c?w=600" },
          { name: "Divine Ganga Cottage", category: "Budget", price: "₹2,000+/night", highlight: "Peaceful cottage near Ram Jhula", image: "https://images.unsplash.com/photo-1590490360182-c33d57733427?w=600" },
          { name: "Ananda Spa Resort", category: "Luxury", price: "₹35,000+/night", highlight: "Award-winning Himalayan wellness retreat", image: "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?w=600" },
          { name: "The Corbett Tree House", category: "Unique", price: "₹6,500+/night", highlight: "Treehouse stay in the forest, near Ganges", image: "https://images.unsplash.com/photo-1416331108676-a22ccb276e35?w=600" },
          { name: "Banyan Tree Camp", category: "Mid-range", price: "₹3,500+/night", highlight: "Riverside camp, yoga in the morning", image: "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?w=600" },
        ]
      }
    },
    {
      id: 2,
      title: "Weather in Rishikesh",
      type: "weather",
      image: "https://images.unsplash.com/photo-1629248457649-b082812aea6c?w=800",
      content: {
        heading: "Weather in Rishikesh",
        intro: "Rishikesh is pleasant from September to June. Avoid July–August heavy monsoon for rafting, but great for yoga retreats.",
        seasons: [
          { name: "January", temp: "5°C – 20°C", icon: "❄️", tip: "Cold mornings but bright days. Yoga retreats are at their quietest and best." },
          { name: "February", temp: "8°C – 23°C", icon: "🌸", tip: "Shivaratri celebrations in Rishikesh are extraordinary. Mild and beautiful." },
          { name: "March", temp: "14°C – 28°C", icon: "🌤️", tip: "International Yoga Festival held here. Ideal weather. Book well in advance." },
          { name: "April", temp: "20°C – 35°C", icon: "🌊", tip: "Rafting season peaks. High Ganges water levels. Perfect adventure conditions." },
          { name: "May", temp: "25°C – 40°C", icon: "☀️", tip: "Hot. Best time for pre-dawn river walks and evening Aarti. Camp near water." },
          { name: "June", temp: "27°C – 40°C", icon: "🔥", tip: "Very hot. Last week of rafting before monsoon. Good for cliff jumping." },
          { name: "July–August", temp: "22°C – 32°C", icon: "🌧️", tip: "Heavy monsoon. Rafting suspended. Excellent for indoor yoga and meditation." },
          { name: "September", temp: "21°C – 31°C", icon: "🌦️", tip: "Rafting resumes. Lush green banks. Excellent post-monsoon conditions." },
          { name: "October", temp: "16°C – 29°C", icon: "🍂", tip: "Diwali in Rishikesh — Ganges lit with diyas. Beautiful time to visit." },
          { name: "November–December", temp: "7°C – 22°C", icon: "❄️", tip: "Cool and calm. Best for serious yoga practitioners and spiritual seekers." },
        ]
      }
    },
    {
      id: 3,
      title: "Find a travel agent",
      type: "agent",
      image: "https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=800",
      content: {
        heading: "Trusted Travel Agents in Rishikesh",
        intro: "Specialists in white water rafting packages, bungee jumping combos, and multi-day yoga retreats.",
        agents: [
          { name: "Ganga Rafting Adventures", specialty: "Rafting, camping & bungee packages", rating: 4.9, phone: "+91-135-222-0011", experience: "18 years", languages: "English, Hindi" },
          { name: "Himalayan Yoga Tours", specialty: "Certified yoga & meditation retreats", rating: 4.8, phone: "+91-135-333-0022", experience: "16 years", languages: "English, Hindi, German" },
          { name: "Dev Bhoomi Travels", specialty: "Char Dham Yatra & temple circuits", rating: 4.7, phone: "+91-135-444-0033", experience: "22 years", languages: "English, Hindi, Marathi" },
          { name: "River Rush Rishikesh", specialty: "Multi-day rafting expeditions", rating: 4.9, phone: "+91-135-555-0044", experience: "14 years", languages: "English, Hindi, French" },
          { name: "Beatles Ashram Tours", specialty: "Walking tours of Chaurasi Kutia", rating: 4.7, phone: "+91-135-666-0055", experience: "10 years", languages: "English, Hindi" },
          { name: "Shivpuri Camp Experts", specialty: "Overnight camping & trekking", rating: 4.8, phone: "+91-135-777-0066", experience: "12 years", languages: "English, Hindi, Spanish" },
          { name: "Badrinath Pilgrimage Tours", specialty: "Uttarakhand temple circuits", rating: 4.7, phone: "+91-135-888-0077", experience: "20 years", languages: "English, Hindi, Telugu" },
          { name: "Extreme Rishikesh", specialty: "Bungee, zip line & sky cycling", rating: 4.8, phone: "+91-135-999-0088", experience: "9 years", languages: "English, Hindi" },
          { name: "Yoga Veda Retreats", specialty: "Residential yoga teacher training", rating: 4.9, phone: "+91-135-101-0099", experience: "15 years", languages: "English, Hindi, Italian" },
          { name: "Mountain Trekking India", specialty: "Kedarkantha & Chopta treks", rating: 4.7, phone: "+91-135-102-0100", experience: "17 years", languages: "English, Hindi" },
        ]
      }
    },
    {
      id: 4,
      title: "Find tours",
      type: "tours",
      image: "https://images.unsplash.com/photo-1530731141654-5993c3016c77?w=800",
      content: {
        heading: "Top Tours in Rishikesh",
        intro: "Thrilling Grade III–IV rafting runs, bungee jumping, Beatles Ashram walks, and evening Ganga Aarti.",
        tours: [
          { name: "White Water Rafting (16km)", duration: "3 hours", price: "₹1,500/person", includes: "Equipment, guide, dry bag", image: "https://images.unsplash.com/photo-1629248457649-b082812aea6c?w=600" },
          { name: "Bungee + Giant Swing Combo", duration: "2 hours", price: "₹3,500/person", includes: "Safety gear, video recording", image: "https://t4.ftcdn.net/jpg/01/79/96/69/360_F_179966921_KmXAtx9s0dbuEp0t9RpK7wjgP0YFmh0w.jpg" },
          { name: "Beatles Ashram & Ganga Aarti", duration: "4 hours", price: "₹900/person", includes: "Walking guide, aarti offering", image: "https://cdn.getyourguide.com/img/tour/b2f8aa0e14b9af96c32aede7d18c595a38b935bf6e90f07bc4106e6209bc7d5e.png/68.jpg" },
          { name: "Shivpuri Overnight Camping", duration: "2 days", price: "₹3,000/person", includes: "Tent, meals, bonfire, rafting", image: "https://images.unsplash.com/photo-1504280390367-361c6d9f38f4?w=600" },
          { name: "Yoga Sunrise Retreat (3 days)", duration: "3 days", price: "₹5,500/person", includes: "Daily yoga, meditation, vegetarian meals", image: "https://static.vecteezy.com/system/resources/thumbnails/075/605/360/small/diverse-friends-doing-pilates-class-golden-hour-outdoor-field-photo.jpg" },
          { name: "Laxman Jhula & Temples Walk", duration: "3 hours", price: "₹700/person", includes: "Guide, temple entries, chai", image: "https://t3.ftcdn.net/jpg/03/74/93/04/360_F_374930485_QhvZlb4F5saU51kebDT2jRvZsuijbxms.jpg" },
          { name: "Neelkanth Mahadev Trek", duration: "Full day", price: "₹1,800/person", includes: "Guide, transport, packed lunch", image: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=600" },
          { name: "Cliff Jumping at Marine Drive", duration: "3 hours", price: "₹1,200/person", includes: "Safety gear, guide, transport", image: "https://images.unsplash.com/photo-1530731141654-5993c3016c77?w=600" },
          { name: "Rafting (35km Shivpuri–Rishikesh)", duration: "Full day", price: "₹2,200/person", includes: "All equipment, lunch, guide", image: "https://images.unsplash.com/photo-1629248457649-b082812aea6c?w=600" },
          { name: "Parmarth Aarti Evening Boat", duration: "2 hours", price: "₹1,500/person", includes: "Private boat, flowers, guide", image: "https://thumbs.dreamstime.com/b/ganga-aarti-ceremony-parmarth-niketan-ashram-sunset-rishikesh-world-capital-yoga-has-numerous-centres-also-india-175231808.jpg" },
        ]
      }
    },
  ],

  // ─────────────────────────────────────────────
  // DARJEELING
  // ─────────────────────────────────────────────
  darjeeling: [
    {
      id: 1,
      title: "Where to stay",
      type: "stay",
      image: "https://images.unsplash.com/photo-1544735716-392fe2489ffa?w=800",
      content: {
        heading: "Where to Stay in Darjeeling",
        intro: "Darjeeling's colonial heritage means charming Victorian bungalows and tea estate stays are the ultimate experience.",
        items: [
          { name: "The Elgin Darjeeling", category: "Heritage", price: "₹12,000+/night", highlight: "Colonial mansion hotel since 1887", image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=600" },
          { name: "Glenburn Tea Estate", category: "Unique", price: "₹20,000+/night", highlight: "Working tea estate bungalow with Kanchenjunga views", image: "https://images.unsplash.com/photo-1516690561799-46d8f74f9abf?w=600" },
          { name: "Dekeling Hotel", category: "Mid-range", price: "₹4,000+/night", highlight: "Family-run Tibetan boutique hotel", image: "https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?w=600" },
          { name: "Zostel Darjeeling", category: "Budget", price: "₹700+/night", highlight: "Hilltop hostel with toy train views", image: "https://images.unsplash.com/photo-1555854877-bab0e564b8d5?w=600" },
          { name: "Cedar Inn", category: "Mid-range", price: "₹5,500+/night", highlight: "Himalayan views, peaceful garden setting", image: "https://images.unsplash.com/photo-1564501049412-61c2a3083791?w=600" },
          { name: "Windamere Hotel", category: "Heritage", price: "₹9,500+/night", highlight: "1939 property, old-world English charm", image: "https://images.unsplash.com/photo-1445019980597-93fa8acb246c?w=600" },
          { name: "Mayfair Darjeeling", category: "Luxury", price: "₹14,000+/night", highlight: "Former Bengal governor's retreat, infinity views", image: "https://images.unsplash.com/photo-1590490360182-c33d57733427?w=600" },
          { name: "Tea Garden Cottages", category: "Unique", price: "₹3,500+/night", highlight: "Stay inside a working tea garden", image: "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?w=600" },
          { name: "Sinclairs Darjeeling", category: "Mid-range", price: "₹6,000+/night", highlight: "Valley views, modern amenities, central location", image: "https://images.unsplash.com/photo-1416331108676-a22ccb276e35?w=600" },
          { name: "Darjeeling Backpackers", category: "Budget", price: "₹500+/night", highlight: "Cozy dorms, fireplace, local tips", image: "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?w=600" },
        ]
      }
    },
    {
      id: 2,
      title: "Weather in Darjeeling",
      type: "weather",
      image: "https://images.unsplash.com/photo-1590077538740-05e44d7b1560?w=800",
      content: {
        heading: "Weather in Darjeeling",
        intro: "Darjeeling is cool year-round. March to May and October to November are best for clear Kanchenjunga views.",
        seasons: [
          { name: "January", temp: "2°C – 9°C", icon: "❄️", tip: "Cold and quiet. Snow possible. Magical if you enjoy solitude and snowfall." },
          { name: "February", temp: "4°C – 12°C", icon: "❄️", tip: "Still cold. Cherry blossoms begin to appear. Great for photography." },
          { name: "March", temp: "8°C – 16°C", icon: "🌸", tip: "Rhododendrons bloom. Best Kanchenjunga visibility. Tiger Hill at its finest." },
          { name: "April", temp: "12°C – 18°C", icon: "🌸", tip: "Peak spring. Entire hill covered in blossoms. Comfortable temperatures." },
          { name: "May", temp: "14°C – 20°C", icon: "🌤️", tip: "Last clear month before monsoon. Great views, fewer tourists than April." },
          { name: "June", temp: "14°C – 19°C", icon: "🌧️", tip: "Monsoon begins. Mist descends. Roads can be tricky but scenery is lush." },
          { name: "July–August", temp: "13°C – 18°C", icon: "🌧️", tip: "Tea flush season. Heavy rain and landslides possible. Lovely for tea lovers." },
          { name: "September", temp: "13°C – 19°C", icon: "🌦️", tip: "Rains lighten. Toy train rides resume. Green hillsides at their best." },
          { name: "October", temp: "9°C – 16°C", icon: "🍂", tip: "Crystal clear Himalaya views. Most popular season. Book accommodation early." },
          { name: "November", temp: "6°C – 13°C", icon: "🍂", tip: "Excellent visibility continues. Quiet, peaceful, stunning Kanchenjunga views." },
        ]
      }
    },
    {
      id: 3,
      title: "Find a travel agent",
      type: "agent",
      image: "https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=800",
      content: {
        heading: "Trusted Travel Agents in Darjeeling",
        intro: "Specialists in Toy Train packages, Sikkim circuits, and Tiger Hill sunrise tours.",
        agents: [
          { name: "Hill Cart Road Tours", specialty: "Tiger Hill, toy train & tea estates", rating: 4.8, phone: "+91-354-222-0011", experience: "20 years", languages: "English, Hindi, Nepali" },
          { name: "Eastern Himalaya Adventures", specialty: "Trekking to Singalila Ridge", rating: 4.9, phone: "+91-354-333-0022", experience: "18 years", languages: "English, Hindi, Tibetan" },
          { name: "Darjeeling Sikkim Holidays", specialty: "Combined Darjeeling & Gangtok tours", rating: 4.7, phone: "+91-354-444-0033", experience: "15 years", languages: "English, Hindi, Bengali" },
          { name: "Tea Trails India", specialty: "Tea estate tours & tasting workshops", rating: 4.9, phone: "+91-354-555-0044", experience: "12 years", languages: "English, Nepali, Hindi" },
          { name: "Kanchenjunga Treks", specialty: "Himalayan trekking & summit views", rating: 4.8, phone: "+91-354-666-0055", experience: "22 years", languages: "English, Hindi, Nepali" },
          { name: "Himalayan Toy Train Tours", specialty: "DHR toy train special packages", rating: 4.7, phone: "+91-354-777-0066", experience: "14 years", languages: "English, Hindi, Japanese" },
          { name: "Sikkimese Cultural Tours", specialty: "Buddhist monastery & culture visits", rating: 4.8, phone: "+91-354-888-0077", experience: "16 years", languages: "English, Tibetan, Hindi" },
          { name: "Phalut Peak Expeditions", specialty: "High altitude summit treks", rating: 4.7, phone: "+91-354-999-0088", experience: "20 years", languages: "English, Hindi" },
          { name: "Darjeeling Heritage Walks", specialty: "Colonial history & Raj-era walks", rating: 4.6, phone: "+91-354-101-0099", experience: "10 years", languages: "English, Hindi, Bengali" },
          { name: "Eastern Hills Travel Co.", specialty: "North Bengal & Bhutan circuits", rating: 4.8, phone: "+91-354-102-0100", experience: "17 years", languages: "English, Hindi, Dzongkha" },
        ]
      }
    },
    {
      id: 4,
      title: "Find tours",
      type: "tours",
      image: "https://images.unsplash.com/photo-1626241031267-850f368d901f?w=800",
      content: {
        heading: "Top Tours in Darjeeling",
        intro: "Sunrise at Tiger Hill, Toy Train joyrides, tea estate walks, and Singalila Ridge treks.",
        tours: [
          { name: "Tiger Hill Sunrise Tour", duration: "4 hours", price: "₹800/person", includes: "Jeep, entry, guide (4 AM pickup)", image: "https://images.unsplash.com/photo-1590077538740-05e44d7b1560?w=600" },
          { name: "Happy Valley Tea Estate Walk", duration: "2 hours", price: "₹600/person", includes: "Tea tasting, factory visit, guide", image: "https://www.kiomoi.com/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fkmadmin%2Fimage%2Fupload%2Fc_scale%2Cw_500%2Ff_auto%2Fv1618487578%2Fkiomoi%2FDarjeeling_Happy_Valley_Tea_Estate_1618487577155.jpg&w=3840&q=75" },
          { name: "Toy Train Joyride (Darjeeling–Ghoom)", duration: "2 hours", price: "₹1,500/person", includes: "Steam engine seat, scenic loop", image: "https://images.unsplash.com/photo-1544735716-392fe2489ffa?w=600" },
          { name: "Singalila Ridge Trek (4 days)", duration: "4 days", price: "₹12,000/person", includes: "Tents, meals, guide, permits", image: "https://images.unsplash.com/photo-1595123550441-d377e017de6a?w=600" },
          { name: "Darjeeling Heritage Walk", duration: "3 hours", price: "₹700/person", includes: "Colonial buildings, markets, tea", image: "https://images.unsplash.com/photo-1506461883276-594a12b11cf3?w=600" },
          { name: "Ghoom Monastery Visit", duration: "2 hours", price: "₹500/person", includes: "Guide, monastery entry, butter tea", image: "https://media.istockphoto.com/id/2223969191/photo/beautiful-view-of-interior-of-ghum-monastery-image-taken-with-permission-peaceful-calm-and.jpg?s=612x612&w=0&k=20&c=O58kI1GMpxKf_xSq_3lPC1EpIBfoF4geCPLXWOAXyKs=" },
          { name: "Rock Garden & Ganga Maya Park", duration: "3 hours", price: "₹600/person", includes: "Entry, guide, transport", image: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/09/4c/43/64/the-rock-garden-of-chandigarh.jpg?w=900&h=500&s=1" },
          { name: "Himalayan Mountaineering Institute", duration: "2 hours", price: "₹400/person", includes: "Museum entry, Tenzing exhibits", image: "https://images.unsplash.com/photo-1595123550441-d377e017de6a?w=600" },
          { name: "Mirik Lake Day Trip", duration: "Full day", price: "₹2,500/person", includes: "Car, boating, lunch, guide", image: "https://images.unsplash.com/photo-1516690561799-46d8f74f9abf?w=600" },
          { name: "Kalimpong Day Excursion", duration: "Full day", price: "₹3,000/person", includes: "Car, guide, nursery visit, lunch", image: "https://images.unsplash.com/photo-1588668214407-6ea9a6d8c272?w=600" },
        ]
      }
    },
  ],

  // ─────────────────────────────────────────────
  // ANDAMAN
  // ─────────────────────────────────────────────
  andaman: [
    {
      id: 1,
      title: "Where to stay",
      type: "stay",
      image: "https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=800",
      content: {
        heading: "Where to Stay in Andaman",
        intro: "From overwater bungalows on Neil Island to beach resorts on Havelock, Andaman has unique island stays.",
        items: [
          { name: "Havelock Island Beach Resort", category: "Luxury", price: "₹15,000+/night", highlight: "Beachfront cottages on Radhanagar", image: "https://images.unsplash.com/photo-1582719508461-905c673771fd?w=600" },
          { name: "Symphony Palms Beach Resort", category: "Mid-range", price: "₹8,000+/night", highlight: "Beach view rooms in Port Blair", image: "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?w=600" },
          { name: "Pristine Beach Resort Neil", category: "Boutique", price: "₹6,000+/night", highlight: "Secluded property on Neil Island", image: "https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?w=600" },
          { name: "Teal House Hostel", category: "Budget", price: "₹900+/night", highlight: "Cheerful hostel near Port Blair jetty", image: "https://images.unsplash.com/photo-1555854877-bab0e564b8d5?w=600" },
          { name: "Barefoot Resort Havelock", category: "Luxury", price: "₹18,000+/night", highlight: "Eco-luxury cottages on Radhanagar Beach", image: "https://images.unsplash.com/photo-1564501049412-61c2a3083791?w=600" },
          { name: "Wild Orchid Resort", category: "Mid-range", price: "₹7,000+/night", highlight: "Beachfront, great dive centre", image: "https://images.unsplash.com/photo-1445019980597-93fa8acb246c?w=600" },
          { name: "Sea Shell Port Blair", category: "Mid-range", price: "₹5,500+/night", highlight: "Pool and sea views, central Port Blair", image: "https://images.unsplash.com/photo-1590490360182-c33d57733427?w=600" },
          { name: "Coral Reef Hotel", category: "Budget", price: "₹1,500+/night", highlight: "Value for money near Aberdeen Bazaar", image: "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?w=600" },
          { name: "Munjoh Ocean Resort", category: "Luxury", price: "₹20,000+/night", highlight: "Glass-floor sea villa on Neil Island", image: "https://images.unsplash.com/photo-1416331108676-a22ccb276e35?w=600" },
          { name: "Emerald Gecko Hostel", category: "Budget", price: "₹800+/night", highlight: "Social backpacker hostel on Havelock", image: "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?w=600" },
        ]
      }
    },
    {
      id: 2,
      title: "Weather in Andaman",
      type: "weather",
      image: "https://thumbs.dreamstime.com/b/wide-angle-view-famous-radhanagar-beach-swaraj-dweep-havelock-island-andaman-nicobar-islands-scene-features-449453153.jpg",
      content: {
        heading: "Weather in Andaman",
        intro: "Andaman has a tropical climate. October to May is the best time for diving and beach activities.",
        seasons: [
          { name: "January", temp: "23°C – 29°C", icon: "🌤️", tip: "Peak season. Crystal clear water for diving. Busiest month — book ahead." },
          { name: "February", temp: "23°C – 30°C", icon: "🌊", tip: "Excellent diving visibility. Calm seas. Scuba and snorkeling at their best." },
          { name: "March", temp: "25°C – 31°C", icon: "🌞", tip: "Still perfect. Fewer tourists than Jan–Feb. Great value on accommodation." },
          { name: "April", temp: "27°C – 33°C", icon: "☀️", tip: "Warm. Beaches less crowded. Elephant Beach accessible by boat." },
          { name: "May", temp: "28°C – 34°C", icon: "🔥", tip: "Last good month before monsoon. Some operators begin closing." },
          { name: "June", temp: "26°C – 31°C", icon: "🌧️", tip: "Monsoon arrives. Rough seas. Most water sports and ferries suspended." },
          { name: "July–August", temp: "25°C – 30°C", icon: "🌧️", tip: "Heavy rain and rough seas. Cellular Jail and museums are best options." },
          { name: "September", temp: "25°C – 30°C", icon: "🌦️", tip: "Monsoon easing. Some operators reopen. Off-season quiet and affordable." },
          { name: "October", temp: "25°C – 31°C", icon: "🍂", tip: "Season starts resuming. Beaches clear up. Good time before peak prices." },
          { name: "November–December", temp: "24°C – 30°C", icon: "🌤️", tip: "Near-perfect. Christmas and New Year in Havelock is magical. Book early." },
        ]
      }
    },
    {
      id: 3,
      title: "Find a travel agent",
      type: "agent",
      image: "https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=800",
      content: {
        heading: "Trusted Travel Agents in Andaman",
        intro: "Specialists in inter-island ferry bookings, scuba diving certifications, and island-hopping packages.",
        agents: [
          { name: "Andaman Bubbles Dive School", specialty: "PADI scuba diving & snorkeling", rating: 4.9, phone: "+91-3192-222-0011", experience: "18 years", languages: "English, Hindi, Russian" },
          { name: "Island Hopper Travels", specialty: "Port Blair–Havelock–Neil circuits", rating: 4.8, phone: "+91-3192-333-0022", experience: "15 years", languages: "English, Hindi, Bengali" },
          { name: "Cellular Jail Tours", specialty: "Heritage & Kala Pani experiences", rating: 4.7, phone: "+91-3192-444-0033", experience: "20 years", languages: "English, Hindi, Tamil" },
          { name: "Radhanagar Beach Club", specialty: "Beach camps & sunset packages", rating: 4.9, phone: "+91-3192-555-0044", experience: "12 years", languages: "English, Hindi" },
          { name: "Sea Hawk Watersports", specialty: "Parasailing, jet ski & sea walking", rating: 4.8, phone: "+91-3192-666-0055", experience: "10 years", languages: "English, Hindi, German" },
          { name: "Mangrove Explorer Tours", specialty: "Kayaking & Baratang caves", rating: 4.7, phone: "+91-3192-777-0066", experience: "14 years", languages: "English, Hindi" },
          { name: "Port Blair Heritage Walks", specialty: "Ross Island & museum tours", rating: 4.6, phone: "+91-3192-888-0077", experience: "16 years", languages: "English, Hindi, Japanese" },
          { name: "Andaman Glass Bottom Boats", specialty: "Snorkeling & marine life tours", rating: 4.8, phone: "+91-3192-999-0088", experience: "9 years", languages: "English, Hindi" },
          { name: "Deep Blue Andaman", specialty: "PADI open water dive courses", rating: 4.9, phone: "+91-3192-101-0099", experience: "11 years", languages: "English, Hindi, French" },
          { name: "Island Luxe Travel", specialty: "Luxury villa & yacht rentals", rating: 4.7, phone: "+91-3192-102-0100", experience: "8 years", languages: "English, Hindi, Arabic" },
        ]
      }
    },
    {
      id: 4,
      title: "Find tours",
      type: "tours",
      image: "https://images.unsplash.com/photo-1589197331516-4d836306915c?w=800",
      content: {
        heading: "Top Tours in Andaman",
        intro: "Scuba dives at Havelock, sea walking at North Bay, mangrove kayaking, and Cellular Jail light shows.",
        tours: [
          { name: "Havelock Scuba Diving Package", duration: "Full day", price: "₹4,500/person", includes: "2 dives, equipment, guide, boat", image: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=600" },
          { name: "Cellular Jail & Light Show", duration: "4 hours", price: "₹800/person", includes: "Entry, light & sound show ticket", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRHNAm9uA-QRFYBdvTsqu0xPdWaBV4HFokNpg&s" },
          { name: "Island Hopping (Havelock + Neil)", duration: "3 days", price: "₹12,000/person", includes: "Ferries, hotels, breakfast", image: "https://images.unsplash.com/photo-1590523277543-a94d2e4eb00b?w=600" },
          { name: "Baratang Limestone Caves", duration: "Full day", price: "₹3,500/person", includes: "Speed boat, mangrove trek, guide", image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=600" },
          { name: "Sea Walking North Bay", duration: "2 hours", price: "₹3,000/person", includes: "Gear, underwater guide, photos", image: "https://images.unsplash.com/photo-1582967788606-a171c1080cb0?w=600" },
          { name: "Radhanagar Sunset & Kayak", duration: "3 hours", price: "₹2,000/person", includes: "Kayak, guide, sunset on beach", image: "https://thumbs.dreamstime.com/b/wide-angle-view-famous-radhanagar-beach-swaraj-dweep-havelock-island-andaman-nicobar-islands-scene-features-449453153.jpg" },
          { name: "Glass Bottom Boat Jolly Buoy", duration: "3 hours", price: "₹1,500/person", includes: "Boat, snorkeling equipment, coral guide", image: "https://images.unsplash.com/photo-1510414842594-a61c69b5ae57?w=600" },
          { name: "Chidiya Tapu Birding & Sunset", duration: "4 hours", price: "₹1,200/person", includes: "Car, bird guide, sunset walk", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSRppH6FAh54fXRIj0ePRuIdgIkhEpoDHY_9A&s" },
          { name: "Ross Island Historical Tour", duration: "3 hours", price: "₹900/person", includes: "Ferry, entry, heritage guide", image: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/10/78/a4/51/ross-castle.jpg?w=1200&h=-1&s=1" },
          { name: "PADI Open Water Course (4 days)", duration: "4 days", price: "₹22,000/person", includes: "Full certification, equipment, dives", image: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=600" },
        ]
      }
    },
  ],

  // ─────────────────────────────────────────────
  // MAHABALESHWAR
  // ─────────────────────────────────────────────
  mahabaleshwar: [
    {
      id: 1,
      title: "Where to stay",
      type: "stay",
      image: "https://images.unsplash.com/photo-1599147500104-ff2044837a61?w=800",
      content: {
        heading: "Where to Stay in Mahabaleshwar",
        intro: "From colonial-era bungalows to cozy cottages surrounded by strawberry farms, Mahabaleshwar has charming stays.",
        items: [
          { name: "Brightland Resort & Spa", category: "Luxury", price: "₹9,000+/night", highlight: "Valley views, pool and wellness spa", image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=600" },
          { name: "The Windermere Hotel", category: "Heritage", price: "₹7,000+/night", highlight: "1830s colonial bungalow on a hill", image: "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?w=600" },
          { name: "Strawberry Farm Cottage", category: "Unique", price: "₹5,000+/night", highlight: "Wake up and pick your own strawberries", image: "https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?w=600" },
          { name: "MTDC Holiday Resort", category: "Budget", price: "₹2,500+/night", highlight: "Government resort with great location", image: "https://images.unsplash.com/photo-1555854877-bab0e564b8d5?w=600" },
          { name: "Bella Vista Resort", category: "Mid-range", price: "₹5,500+/night", highlight: "Panoramic valley views from all rooms", image: "https://images.unsplash.com/photo-1564501049412-61c2a3083791?w=600" },
          { name: "The Verandah in the Forest", category: "Heritage", price: "₹12,000+/night", highlight: "1860s colonial property by Neater Jungle", image: "https://images.unsplash.com/photo-1445019980597-93fa8acb246c?w=600" },
          { name: "Anand Sagar Resort", category: "Mid-range", price: "₹4,000+/night", highlight: "Pool, lawns and strawberry farm nearby", image: "https://images.unsplash.com/photo-1590490360182-c33d57733427?w=600" },
          { name: "Mapro Garden Cottages", category: "Unique", price: "₹3,500+/night", highlight: "Stay inside Mapro's famous garden estate", image: "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?w=600" },
          { name: "Summit Eco Resort", category: "Eco", price: "₹4,500+/night", highlight: "Solar-powered eco resort with forest walks", image: "https://images.unsplash.com/photo-1416331108676-a22ccb276e35?w=600" },
          { name: "Hotel Dreamland", category: "Budget", price: "₹1,800+/night", highlight: "Central market location, clean and friendly", image: "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?w=600" },
        ]
      }
    },
    {
      id: 2,
      title: "Weather in Mahabaleshwar",
      type: "weather",
      image: "https://images.unsplash.com/photo-1501785888041-af3ef285b470?w=800",
      content: {
        heading: "Weather in Mahabaleshwar",
        intro: "Mahabaleshwar is pleasant almost year-round. November to June is best for sightseeing, while the monsoon transforms it into a lush green paradise.",
        seasons: [
          { name: "January", temp: "10°C – 25°C", icon: "❄️", tip: "Strawberry season in full swing. Cool and crisp. Perfect for long viewpoint walks." },
          { name: "February", temp: "11°C – 26°C", icon: "🌸", tip: "Lovely weather. Venna Lake boating is delightful. Good for cycling." },
          { name: "March", temp: "14°C – 29°C", icon: "🌤️", tip: "Mapro Garden busy. Comfortable temperatures. Good for Pratapgad trekking." },
          { name: "April", temp: "17°C – 32°C", icon: "☀️", tip: "Warm and sunny. Best time for viewpoints and photography." },
          { name: "May", temp: "18°C – 32°C", icon: "☀️", tip: "Busy school holiday season. Crowds at all viewpoints. Book in advance." },
          { name: "June", temp: "17°C – 28°C", icon: "🌧️", tip: "Early monsoon. Waterfalls start. Tourist rush reduces significantly." },
          { name: "July–August", temp: "15°C – 24°C", icon: "🌧️", tip: "Heavy rain. Lingmala Falls at its spectacular best. Entire valley turns emerald." },
          { name: "September", temp: "16°C – 25°C", icon: "🌦️", tip: "Rains reduce. Lush greenery everywhere. Fewer tourists — great time." },
          { name: "October", temp: "15°C – 27°C", icon: "🍂", tip: "Season restarts. Clear skies, waterfalls still active. Diwali in the hills." },
          { name: "November–December", temp: "10°C – 23°C", icon: "❄️", tip: "Peak strawberry season. Cool, pleasant. Christmas in Mahabaleshwar is magical." },
        ]
      }
    },
    {
      id: 3,
      title: "Find a travel agent",
      type: "agent",
      image: "https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=800",
      content: {
        heading: "Trusted Travel Agents in Mahabaleshwar",
        intro: "Specialists in Panchgani day trips, Pratapgad Fort tours, and Kaas Plateau flower season visits.",
        agents: [
          { name: "Sahyadri Tours", specialty: "Western Ghats & waterfall trips", rating: 4.8, phone: "+91-2168-222-0011", experience: "18 years", languages: "English, Marathi, Hindi" },
          { name: "Maharashtra Hill Holidays", specialty: "Mahabaleshwar & Panchgani packages", rating: 4.7, phone: "+91-2168-333-0022", experience: "15 years", languages: "English, Marathi, Hindi" },
          { name: "Shivaji Trail Travels", specialty: "Pratapgad & Rajgad Fort treks", rating: 4.9, phone: "+91-2168-444-0033", experience: "22 years", languages: "English, Marathi, Hindi" },
          { name: "Strawberry Valley Tours", specialty: "Farm tours & scenic drives", rating: 4.7, phone: "+91-2168-555-0044", experience: "10 years", languages: "English, Marathi, Hindi" },
          { name: "Kaas Plateau Experts", specialty: "UNESCO plateau flower season tours", rating: 4.8, phone: "+91-2168-666-0055", experience: "12 years", languages: "English, Marathi, Hindi" },
          { name: "Deccan Trekkers", specialty: "Trek & camping packages in Sahyadri", rating: 4.7, phone: "+91-2168-777-0066", experience: "16 years", languages: "English, Marathi, Hindi" },
          { name: "Pune Weekend Escapes", specialty: "Mumbai & Pune weekend trip packages", rating: 4.6, phone: "+91-2168-888-0077", experience: "14 years", languages: "English, Marathi, Gujarati" },
          { name: "Panchgani Day Trips", specialty: "Table Land & Devil's Kitchen tours", rating: 4.8, phone: "+91-2168-999-0088", experience: "11 years", languages: "English, Marathi, Hindi" },
          { name: "Vasota Fort Adventures", specialty: "Forest treks to Vasota Fort", rating: 4.9, phone: "+91-2168-101-0099", experience: "9 years", languages: "English, Marathi" },
          { name: "Konkan Trails", specialty: "Coastal Konkan & hill station combo", rating: 4.7, phone: "+91-2168-102-0100", experience: "13 years", languages: "English, Marathi, Konkani" },
        ]
      }
    },
    {
      id: 4,
      title: "Find tours",
      type: "tours",
      image: "https://images.unsplash.com/photo-1626435640237-775b0586e398?w=800",
      content: {
        heading: "Top Tours in Mahabaleshwar",
        intro: "Strawberry farm visits, viewpoint hops, Pratapgad Fort treks, and Panchgani Table Land excursions.",
        tours: [
          { name: "Mapro Garden & Strawberry Farm Tour", duration: "3 hours", price: "₹600/person", includes: "Farm visit, tasting, Mapro products", image: "https://thumbs.dreamstime.com/b/families-picking-fresh-strawberries-strawberry-farm-rows-red-ripe-very-appetising-ready-to-be-picked-photo-taken-156448665.jpg" },
          { name: "Pratapgad Fort Trek", duration: "Full day", price: "₹1,800/person", includes: "Guide, transport, entry, lunch", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSjhrD_fNF3IbBdf4Xrj0x2bLb4NPKQQKTz3g&s" },
          { name: "7 Viewpoints Road Trip", duration: "4 hours", price: "₹1,200/person", includes: "Cab, guide, photography stops", image: "https://media-cdn.tripadvisor.com/media/attractions-splice-spp-674x446/12/ee/48/fb.jpg" },
          { name: "Lingmala Waterfall Trek", duration: "3 hours", price: "₹800/person", includes: "Guide, forest walk, entry", image: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/08/b0/12/1f/the-majestic-lingmala.jpg?w=1200&h=-1&s=1" },
          { name: "Venna Lake Boating & Cycling", duration: "2 hours", price: "₹700/person", includes: "Rowboat, cycle, entry", image: "https://images.unsplash.com/photo-1510414842594-a61c69b5ae57?w=600" },
          { name: "Panchgani Table Land Tour", duration: "5 hours", price: "₹1,500/person", includes: "Car, guide, Table Land entry", image: "https://images.unsplash.com/photo-1501785888041-af3ef285b470?w=600" },
          { name: "Kaas Plateau Flower Tour", duration: "Full day", price: "₹2,500/person", includes: "Transport, guide, permit, lunch", image: "https://images.unsplash.com/photo-1626435640237-775b0586e398?w=600" },
          { name: "Arthur's Seat Viewpoint Drive", duration: "3 hours", price: "₹900/person", includes: "Cab, guide, all viewpoints", image: "https://media-cdn.tripadvisor.com/media/attractions-splice-spp-674x446/12/ee/48/fb.jpg" },
          { name: "Old Mahabaleshwar Temple Walk", duration: "2 hours", price: "₹500/person", includes: "Guide, Panchganga temple visit", image: "https://t4.ftcdn.net/jpg/19/34/43/39/360_F_1934433944_9VAUZxxKy5zBE0eIt0FOo3p37PBY5ItR.jpg" },
          { name: "Vasota Fort Jungle Trek", duration: "Full day", price: "₹3,000/person", includes: "Boat, forest trek, guide, lunch", image: "https://images.unsplash.com/photo-1501785888041-af3ef285b470?w=600" },
        ]
      }
    },
  ],
};