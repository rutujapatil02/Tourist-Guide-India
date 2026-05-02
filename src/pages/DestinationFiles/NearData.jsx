// NearData.js
// Expanded data for "Places Near" each destination – includes extra fields for detail pages

export const nearPlacesData = {
  // ==================== TAJ MAHAL ====================
  tajmahal: [
    {
      slug: "fatehpur-sikri",
      title: "Fatehpur Sikri",
      location: "Uttar Pradesh",
      image: "https://t3.ftcdn.net/jpg/02/02/60/78/360_F_202607822_56X4UHztDCbXM1pUSdniwjKJIX51gkfb.jpg",
      distance: "40 km from Agra",
      description: "A UNESCO World Heritage ghost city built by Emperor Akbar in the 16th century. Its perfectly preserved Mughal architecture and grand Buland Darwaza make it one of India's finest historical sites.",
      highlights: ["Buland Darwaza", "Panch Mahal", "Jama Masjid", "Tomb of Salim Chishti"],
      bestTime: "October to March",
      howToReach: "Taxi or bus from Agra (40 km). Regular buses from Idgah Bus Stand.",
      entryFee: "₹50 for Indians, ₹600 for foreigners",
      travelTips: ["Wear comfortable shoes – lots of walking", "Hire a guide for historical insights", "Visit early morning to avoid crowds"]
    },
    {
      slug: "mathura",
      title: "Mathura",
      location: "Uttar Pradesh",
      image: "https://images.unsplash.com/photo-1590050752117-238cb0fb12b1?w=800",
      distance: "58 km from Agra",
      description: "The birthplace of Lord Krishna, Mathura is one of the seven sacred cities of Hinduism. Its ghats, temples and vibrant festivals draw millions of pilgrims every year.",
      highlights: ["Krishna Janmabhoomi", "Dwarkadheesh Temple", "Vishram Ghat", "Holi Festival"],
      bestTime: "July to March (avoid summer heat)",
      howToReach: "Train, bus or taxi from Agra (58 km).",
      entryFee: "Most temples free; ISKCON temple small donation",
      travelTips: ["Visit during Janmashtami for grand celebrations", "Try local peda sweets", "Cover your head inside temples"]
    },
    {
      slug: "agra-fort",
      title: "Agra Fort",
      location: "Agra, Uttar Pradesh",
      image: "https://media.istockphoto.com/id/1169495248/photo/agra-fort-medieval-indian-fort-at-agra-india-at-sunrise.jpg?s=612x612&w=0&k=20&c=EI9BXzCutx2gRuPCFUDSirZg9Hfc7G_kGfFbmVBmSEc=",
      distance: "2.5 km from Taj Mahal",
      description: "A massive red sandstone fortress that served as the main residence of Mughal Emperors. It houses stunning palaces, halls and mosques within its towering walls.",
      highlights: ["Diwan-i-Khas", "Sheesh Mahal", "Jahangiri Mahal", "Musamman Burj"],
      bestTime: "October to March",
      howToReach: "Walk, auto-rickshaw or taxi from Taj Mahal.",
      entryFee: "₹50 for Indians, ₹600 for foreigners",
      travelTips: ["Combine with Taj Mahal visit", "Sunset views are spectacular", "Audio guide available"]
    },
    {
      slug: "vrindavan",
      title: "Vrindavan",
      location: "Uttar Pradesh",
      image: "https://images.unsplash.com/photo-1582510003544-4d00b7f74220?w=800",
      distance: "65 km from Agra",
      description: "The town where Lord Krishna spent his childhood. Vrindavan is dotted with over 5,000 temples and is especially magical during Holi and Janmashtami festivals.",
      highlights: ["Banke Bihari Temple", "ISKCON Temple", "Prem Mandir", "Nidhivan"],
      bestTime: "October to March",
      howToReach: "Taxi or bus from Agra (65 km).",
      entryFee: "Free (donations welcome)",
      travelTips: ["Evening aarti at Banke Bihari is unmissable", "Buy peacock feathers as souvenirs", "Avoid visiting in peak summer"]
    },
    {
      slug: "itmad-ud-daullah",
      title: "Itmad-ud-Daulah (Baby Taj)",
      location: "Agra, Uttar Pradesh",
      image: "https://upload.wikimedia.org/wikipedia/commons/c/c9/I%27tim%C4%81d-ud-Daulah%2C_Agra.jpg",
      distance: "3 km from Taj Mahal",
      description: "Often called the 'Baby Taj', this exquisite marble tomb was built by Nur Jahan for her parents. It is considered a draft of the Taj Mahal and features intricate pietra dura inlay work.",
      highlights: ["Intricate marble inlay", "Beautiful gardens", "Less crowded than Taj Mahal"],
      bestTime: "October to March",
      howToReach: "Auto-rickshaw or taxi from central Agra.",
      entryFee: "₹30 for Indians, ₹310 for foreigners",
      travelTips: ["Visit in late afternoon for golden light", "Great for photography"]
    },
    {
      slug: "mehtab-bagh",
      title: "Mehtab Bagh",
      location: "Agra, Uttar Pradesh",
      image: "https://images.unsplash.com/photo-1524492412937-b28074a5d7da?w=800",
      distance: "4 km from Taj Mahal",
      description: "A charbagh complex on the opposite bank of the Yamuna, offering the best sunset view of the Taj Mahal. It was the last of 11 Mughal-built gardens along the river.",
      highlights: ["Best sunset view of Taj Mahal", "Peaceful atmosphere", "Perfect for photography"],
      bestTime: "Sunset (October to March)",
      howToReach: "Taxi or auto-rickshaw (15 minutes from Taj).",
      entryFee: "₹25 for Indians, ₹200 for foreigners",
      travelTips: ["Carry water and snacks", "Go 1 hour before sunset", "Binoculars recommended"]
    }
  ],

  // ==================== JAIPUR ====================
  jaipur: [
    {
      slug: "pushkar",
      title: "Pushkar",
      location: "Rajasthan",
      image: "https://images.unsplash.com/photo-1590050752117-238cb0fb12b1?w=800",
      distance: "145 km from Jaipur",
      description: "A sacred lakeside town with one of the world's few Brahma temples. The famous Pushkar Camel Fair transforms this quiet town into one of India's most colorful spectacles each November.",
      highlights: ["Brahma Temple", "Pushkar Lake", "Camel Fair", "Sunset Point"],
      bestTime: "October to March (Camel Fair in November)",
      howToReach: "Bus or taxi from Jaipur (145 km). Regular buses from Sindhi Camp.",
      entryFee: "No entry fee for town; Brahma Temple donation optional",
      travelTips: ["Attend the camel fair if visiting in November", "Respect religious customs", "Try local malpua"]
    },
    {
      slug: "ajmer",
      title: "Ajmer",
      location: "Rajasthan",
      image: "https://images.unsplash.com/photo-1597511874400-98565a4c6a6d?w=800",
      distance: "135 km from Jaipur",
      description: "Home to the revered Dargah of Sufi saint Moinuddin Chishti, Ajmer is a major pilgrimage city. The Anasagar Lake and Ana Sagar Baradari add to its scenic charm.",
      highlights: ["Dargah Sharif", "Anasagar Lake", "Adhai Din ka Jhonpra", "Taragarh Fort"],
      bestTime: "October to March",
      howToReach: "Train or bus from Jaipur (135 km).",
      entryFee: "Dargah free; museum small fee",
      travelTips: ["Cover your head inside dargah", "Try local sohan halwa", "Visit in evening for qawwali"]
    },
    {
      slug: "bhangarh-fort",
      title: "Bhangarh Fort",
      location: "Rajasthan",
      image: "https://images.unsplash.com/photo-1509219270126-53966341f478?w=800",
      distance: "83 km from Jaipur",
      description: "India's most haunted fort, Bhangarh is a 17th-century ruined city set in the Aravalli hills. The Archaeological Survey of India prohibits entry after sunset, adding to its mystique.",
      highlights: ["Gopinath Temple", "Bhangarh Palace", "Hawa Mahal Ruins", "Someshwar Temple"],
      bestTime: "November to February (daytime only)",
      howToReach: "Taxi from Jaipur (83 km). No direct bus.",
      entryFee: "₹25 for Indians, ₹300 for foreigners",
      travelTips: ["Finish visit before sunset", "Carry water and snacks", "Be respectful – local legends say not to take anything from ruins"]
    },
    {
      slug: "abhaneri",
      title: "Abhaneri",
      location: "Rajasthan",
      image: "https://images.unsplash.com/photo-1524492412937-b28074a5d7da?w=800",
      distance: "95 km from Jaipur",
      description: "A small village housing the breathtaking Chand Baori, one of India's largest and deepest stepwells. The 9th-century geometric marvel descends 13 stories into the earth.",
      highlights: ["Chand Baori Stepwell", "Harshat Mata Temple", "Village Architecture"],
      bestTime: "October to March",
      howToReach: "Taxi from Jaipur (95 km). Can combine with Fatehpur Sikri from Agra side.",
      entryFee: "₹25 for Indians, ₹200 for foreigners",
      travelTips: ["Best for photography in early morning light", "No railings – be careful near the stepwell", "Combine with nearby villages"]
    },
    {
      slug: "samode-palace",
      title: "Samode Palace",
      location: "Rajasthan",
      image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=600",
      distance: "40 km from Jaipur",
      description: "A stunning heritage palace turned luxury hotel, set in the Aravalli hills. Known for its exquisite mirror work, frescoes, and royal ambiance.",
      highlights: ["Palace architecture", "Sheesh Mahal", "Gardens", "Camel rides"],
      bestTime: "October to March",
      howToReach: "Taxi from Jaipur (40 km).",
      entryFee: "₹400 for day visit (includes high tea)",
      travelTips: ["Book a meal experience", "Photography allowed", "Dress smartly"]
    },
    {
      slug: "galta-ji",
      title: "Galta Ji (Monkey Temple)",
      location: "Jaipur, Rajasthan",
      image: "https://images.unsplash.com/photo-1599661046289-e31897846e41?w=800",
      distance: "10 km from Jaipur city center",
      description: "An ancient Hindu pilgrimage site nestled in a gorge, with natural springs and temples. Also known as the Monkey Temple due to the large number of resident monkeys.",
      highlights: ["Natural holy kunds", "Temples carved into rock", "Monkey feeding", "Panoramic city view"],
      bestTime: "October to March, early morning",
      howToReach: "Auto-rickshaw or taxi from Jaipur.",
      entryFee: "Free",
      travelTips: ["Keep belongings secure from monkeys", "Visit at sunrise for peace", "Carry water"]
    }
  ],

  // ==================== GOA ====================
  goa: [
    {
      slug: "dudhsagar-falls",
      title: "Dudhsagar Falls",
      location: "Goa-Karnataka Border",
      image: "https://images.unsplash.com/photo-1613844838171-e649c7ed3e0d?w=800",
      distance: "60 km from Panaji",
      description: "One of India's tallest waterfalls, Dudhsagar plunges 310 meters in four cascades through dense jungle. The name means 'sea of milk', perfectly describing its milky white appearance.",
      highlights: ["Waterfall Trek", "Jungle Jeep Safari", "Railway Bridge View", "Swimming Pool"],
      bestTime: "June to September (monsoon), October to February (trekking)",
      howToReach: "Jeep safari from Kulem station or private taxi.",
      entryFee: "₹200 for jeep, plus forest fees",
      travelTips: ["Monsoon offers maximum flow but road may be closed", "Carry change of clothes", "Beware of leeches in monsoon"]
    },
    {
      slug: "gokarna",
      title: "Gokarna",
      location: "Karnataka",
      image: "https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?w=800",
      distance: "140 km from Panaji",
      description: "A quiet temple town with pristine beaches untouched by mass tourism. Gokarna offers a peaceful alternative to Goa's bustle, with Om Beach and Half Moon Beach among the best.",
      highlights: ["Om Beach", "Mahabaleshwar Temple", "Half Moon Beach", "Kudle Beach"],
      bestTime: "October to March",
      howToReach: "Bus or taxi from Panaji/Margao.",
      entryFee: "Free for temples and beaches",
      travelTips: ["Try seafood at beach shacks", "Walk from Om Beach to Paradise Beach", "Attend evening aarti at temple"]
    },
    {
      slug: "netravali-wildlife",
      title: "Netravali Wildlife Sanctuary",
      location: "South Goa",
      image: "https://images.unsplash.com/photo-1506461883276-594a12b11cf3?w=800",
      distance: "65 km from Panaji",
      description: "A biodiversity hotspot at the edge of the Western Ghats, home to gaurs, leopards and over 200 bird species. The sacred Bubble Lake and Savri waterfall are hidden gems.",
      highlights: ["Savri Waterfall", "Bubble Lake", "Wildlife Safari", "Birdwatching"],
      bestTime: "October to February",
      howToReach: "Taxi from Margao (50 km). Entry permit required.",
      entryFee: "₹50 for Indians, ₹200 for foreigners",
      travelTips: ["Hire a local guide for best sightings", "Carry insect repellent", "Wear trekking shoes"]
    },
    {
      slug: "amboli-ghat",
      title: "Amboli Ghat",
      location: "Maharashtra",
      image: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=800",
      distance: "100 km from Panaji",
      description: "A misty hill station in the Western Ghats renowned for its spectacular monsoon waterfalls and rich biodiversity. Amboli is a paradise for nature lovers and photographers.",
      highlights: ["Amboli Falls", "Sunset Point", "Hiranyakeshi Temple", "Nangartas Falls"],
      bestTime: "June to February (monsoon enhances waterfalls)",
      howToReach: "Taxi from Panaji via Belgaum.",
      entryFee: "No entry fee",
      travelTips: ["Visit during or just after monsoon", "Carry an umbrella", "Try local chai at small stalls"]
    },
    {
      slug: "butterfly-beach",
      title: "Butterfly Beach",
      location: "South Goa",
      image: "https://images.unsplash.com/photo-1590523277543-a94d2e4eb00b?w=800",
      distance: "30 km from Panaji",
      description: "A secluded, pristine beach accessible only by boat or a short trek. Known for its butterfly-shaped outline and calm, unspoiled beauty.",
      highlights: ["Secluded beach", "Kayaking", "Sunset views", "Dolphin spotting"],
      bestTime: "October to March",
      howToReach: "Boat from Palolem or trek from Agonda.",
      entryFee: "Free (boat costs ₹500–1000 per person)",
      travelTips: ["Take a boat from Palolem", "Carry snacks and water", "No shops on beach"]
    },
    {
      slug: "south-goa-churches",
      title: "Old Goa Churches",
      location: "North Goa",
      image: "https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?w=800",
      distance: "10 km from Panaji",
      description: "UNESCO World Heritage site comprising the Basilica of Bom Jesus, Se Cathedral, and other historic churches dating to the 16th century.",
      highlights: ["Basilica of Bom Jesus (holds St. Francis Xavier's remains)", "Se Cathedral", "Church of St. Francis of Assisi"],
      bestTime: "October to March",
      howToReach: "Bus or taxi from Panaji.",
      entryFee: "Free (donations accepted)",
      travelTips: ["Dress modestly (cover shoulders and knees)", "Visit on weekdays to avoid crowds", "Combine with a Museum of Christian Art visit"]
    }
  ],

  // ==================== KERALA ====================
  kerala: [
    {
      slug: "munnar",
      title: "Munnar",
      location: "Kerala",
      image: "https://images.unsplash.com/photo-1516690561799-46d8f74f9abf?w=800",
      distance: "130 km from Kochi",
      description: "A magical hill station draped in rolling tea plantations at 1,600m altitude. Munnar is Kerala's most popular hill retreat, with misty mornings, rare Neelakurinji flowers and cool year-round climate.",
      highlights: ["Tea Museum", "Eravikulam National Park", "Mattupetty Dam", "Top Station"],
      bestTime: "September to May",
      howToReach: "Bus or taxi from Kochi (130 km).",
      entryFee: "Tea Museum ₹100; National Park ₹200",
      travelTips: ["Carry warm clothing", "Book tea-tasting sessions", "Visit early to avoid fog"]
    },
    {
      slug: "alleppey",
      title: "Alleppey (Alappuzha)",
      location: "Kerala",
      image: "https://images.unsplash.com/photo-1593181629936-11c609b8db9b?w=800",
      distance: "53 km from Kochi",
      description: "Known as the 'Venice of the East', Alleppey is the gateway to Kerala's iconic backwaters. Traditional houseboats cruise through 1,500 km of interconnected canals and lagoons.",
      highlights: ["Houseboat Cruises", "Alappuzha Beach", "Nehru Trophy Race", "Coir Villages"],
      bestTime: "November to February",
      howToReach: "Train or bus from Kochi (53 km).",
      entryFee: "Houseboat: ₹6,000–15,000 per night",
      travelTips: ["Book houseboat in advance", "Ask for local seafood", "Carry mosquito repellent"]
    },
    {
      slug: "thekkady",
      title: "Thekkady",
      location: "Kerala",
      image: "https://images.unsplash.com/photo-1540555700478-4be289fbecef?w=800",
      distance: "190 km from Kochi",
      description: "Home to the Periyar Wildlife Sanctuary, Thekkady offers magical boat safaris on Periyar Lake where wild elephants and tigers come to the water's edge. It's also Kerala's spice capital.",
      highlights: ["Periyar Lake Safari", "Elephant Junction", "Spice Plantations", "Kumily Market"],
      bestTime: "October to June",
      howToReach: "Taxi or bus from Kochi (190 km).",
      entryFee: "Safari ₹300, spice plantation tours ₹500",
      travelTips: ["Boat safari is most rewarding in early morning", "Buy spices from government shops", "Wear comfortable shoes"]
    },
    {
      slug: "kanyakumari",
      title: "Kanyakumari",
      location: "Tamil Nadu",
      image: "https://images.unsplash.com/photo-1588668214407-6ea9a6d8c272?w=800",
      distance: "245 km from Kochi",
      description: "The southernmost tip of India where the Arabian Sea, Bay of Bengal and Indian Ocean converge. Witness both sunrise and sunset over the sea from this sacred land's end.",
      highlights: ["Vivekananda Rock", "Thiruvalluvar Statue", "Kumari Amman Temple", "Sunrise & Sunset"],
      bestTime: "October to March",
      howToReach: "Train or bus from Kochi (245 km).",
      entryFee: "Vivekananda Rock ferry ₹50",
      travelTips: ["Book ferry in advance", "Carry sunglasses and hat", "Visit Gandhi Mandapam"]
    },
    {
      slug: "varkala",
      title: "Varkala",
      location: "Kerala",
      image: "https://images.unsplash.com/photo-1590050752117-238cb0fb12b1?w=800",
      distance: "50 km from Trivandrum, 190 km from Kochi",
      description: "A stunning cliffside beach known for natural springs, ayurvedic treatments, and spectacular sunsets. The red cliffs contrast with the Arabian Sea.",
      highlights: ["Papanasam Beach", "Cliff walkway", "Ayurvedic massages", "Sunset views"],
      bestTime: "October to March",
      howToReach: "Taxi or train (Varkala station is 5 km away).",
      entryFee: "Free",
      travelTips: ["Try seafood at cliff-top cafes", "Visit the Janardanaswamy Temple", "Best to stay near north cliff"]
    },
    {
      slug: "wayanad",
      title: "Wayanad",
      location: "Kerala",
      image: "https://images.unsplash.com/photo-1506461883276-594a12b11cf3?w=800",
      distance: "250 km from Kochi",
      description: "A hilly district with dense forests, wildlife, and ancient caves. Known for Edakkal Caves, Chembra Peak, and Banasura Sagar Dam.",
      highlights: ["Edakkal Caves", "Chembra Peak", "Banasura Sagar Dam", "Wildlife Sanctuary"],
      bestTime: "October to May",
      howToReach: "Bus or taxi from Kozhikode (90 km) or Mysore (120 km).",
      entryFee: "Edakkal Caves ₹50, Chembra Peak ₹100",
      travelTips: ["Carry hiking shoes", "Visit early morning for wildlife", "Stay in a plantation resort"]
    }
  ],

  // ==================== LADAKH ====================
  ladakh: [
    {
      slug: "nubra-valley",
      title: "Nubra Valley",
      location: "Ladakh",
      image: "https://images.unsplash.com/photo-1581791534721-e599df4417f7?w=800",
      distance: "150 km from Leh",
      description: "A high-altitude cold desert beyond Khardung La Pass, Nubra Valley surprises with its sand dunes, Bactrian camels, and monasteries. The Shyok and Nubra rivers carve through breathtaking landscapes.",
      highlights: ["Hunder Sand Dunes", "Diskit Monastery", "Bactrian Camel Ride", "Panamik Hot Springs"],
      bestTime: "June to September",
      howToReach: "Drive from Leh via Khardung La. Permit required.",
      entryFee: "Camel ride ₹200–500",
      travelTips: ["Carry oxygen if sensitive to altitude", "Stay overnight to enjoy stargazing", "Respect local culture"]
    },
    {
      slug: "pangong-lake",
      title: "Pangong Tso",
      location: "Ladakh",
      image: "https://images.unsplash.com/photo-1590005024862-6b67679a29fb?w=800",
      distance: "160 km from Leh",
      description: "Stretching 134 km across India and China, this ethereal high-altitude lake shifts through astonishing shades of blue, green and violet. Made iconic by Bollywood, it remains Ladakh's most photographed spot.",
      highlights: ["Color-changing waters", "Camping by the lake", "3 Idiots filming location", "Bird watching"],
      bestTime: "May to September",
      howToReach: "Drive from Leh via Chang La. Permit required.",
      entryFee: "Environmental fee ₹400",
      travelTips: ["Camping is allowed only at designated sites", "No mobile network", "Carry warm clothes even in summer"]
    },
    {
      slug: "kargil",
      title: "Kargil",
      location: "Ladakh",
      image: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=800",
      distance: "230 km from Leh",
      description: "A historically significant town at a strategic crossroads, Kargil is the gateway to the Suru Valley and Zanskar. The annual Kargil Vijay Diwas commemorates India's 1999 war victory.",
      highlights: ["Kargil War Memorial", "Suru Valley", "Mulbekh Monastery", "Drass Valley"],
      bestTime: "June to September",
      howToReach: "Drive from Leh via NH1. Buses and shared taxis.",
      entryFee: "War memorial free",
      travelTips: ["Visit Drass – second coldest inhabited place", "Carry water and snacks", "Respect the war memorial silence"]
    },
    {
      slug: "zanskar",
      title: "Zanskar Valley",
      location: "Ladakh",
      image: "https://images.unsplash.com/photo-1625398407796-82650a8c135f?w=800",
      distance: "250 km from Leh",
      description: "One of India's most remote and dramatic valleys, accessible only in summer by road or in winter by the legendary frozen Chadar river trek. Zanskar offers pristine wilderness and ancient monasteries.",
      highlights: ["Chadar Trek", "Phuktal Monastery", "Zanskar River Rafting", "Padum Village"],
      bestTime: "June to September (trekking), Jan-Feb (Chadar trek)",
      howToReach: "Drive from Leh via Kargil. Permits required.",
      entryFee: "Trek permits ₹500–1000",
      travelTips: ["Only for experienced trekkers", "Hire a local guide", "Carry extreme cold gear if trekking"]
    },
    {
      slug: "hemis-monastery",
      title: "Hemis Monastery",
      location: "Ladakh",
      image: "https://discoverlehladakh.in/wp-content/uploads/2020/06/Hemis-monastery-1022x530.jpeg",
      distance: "45 km from Leh",
      description: "The wealthiest and largest monastery in Ladakh, famous for its annual Hemis Festival celebrating Guru Padmasambhava. The monastery houses a giant thangka displayed every 12 years.",
      highlights: ["Hemis Festival (June/July)", "Ancient thangkas", "Museum", "Peaceful surroundings"],
      bestTime: "May to September (Hemis Festival in June)",
      howToReach: "Taxi or bus from Leh.",
      entryFee: "Free (museum ₹50)",
      travelTips: ["Plan visit during festival for masked dances", "Cover legs and shoulders", "Photography inside not allowed"]
    },
    {
      slug: "magnetic-hill",
      title: "Magnetic Hill",
      location: "Ladakh",
      image: "https://t3.ftcdn.net/jpg/02/70/18/02/360_F_270180298_10gFreDTCjSXZ2rFGboGs5f9ubXVWs6N.jpg",
      distance: "30 km from Leh",
      description: "An optical illusion where a vehicle appears to roll uphill due to the surrounding landscape. A fun stop on the way to Kargil.",
      highlights: ["Optical illusion experience", "Scenic mountain backdrop"],
      bestTime: "May to September",
      howToReach: "Drive on Leh-Kargil highway.",
      entryFee: "Free",
      travelTips: ["Try the experiment with your own vehicle", "Stop for a photo", "Combine with Sangam Point"]
    }
  ],

  // ==================== VARANASI ====================
  varanasi: [
    {
      slug: "sarnath",
      title: "Sarnath",
      location: "Uttar Pradesh",
      image: "https://images.unsplash.com/photo-1561361058-c24cecae35ca?w=800",
      distance: "10 km from Varanasi",
      description: "The sacred spot where the Buddha gave his first sermon after attaining enlightenment. The towering Dhamekh Stupa and the Ashoka Pillar (India's national emblem) stand here as timeless witnesses.",
      highlights: ["Dhamekh Stupa", "Ashoka Pillar", "Sarnath Museum", "Mulagandha Kuti Vihar"],
      bestTime: "October to March",
      howToReach: "Taxi, auto-rickshaw, or bus from Varanasi.",
      entryFee: "Free for stupas; museum ₹20",
      travelTips: ["Visit early morning for peace", "Hire a guide for historical context", "Combine with Deer Park"]
    },
    {
      slug: "prayagraj",
      title: "Prayagraj (Allahabad)",
      location: "Uttar Pradesh",
      image: "https://images.unsplash.com/photo-1545127398-14699f92334b?w=800",
      distance: "125 km from Varanasi",
      description: "The site of the Triveni Sangam — the sacred confluence of the Ganges, Yamuna and mythical Saraswati rivers. Prayagraj hosts the Kumbh Mela, the largest human gathering on Earth.",
      highlights: ["Triveni Sangam", "Allahabad Fort", "Anand Bhavan", "Kumbh Mela Grounds"],
      bestTime: "October to March (Kumbh Mela every 12 years)",
      howToReach: "Train, bus or taxi from Varanasi.",
      entryFee: "Sangam boat ride ₹200–500",
      travelTips: ["Take a boat to the exact confluence", "Visit Anand Bhavan museum", "Avoid summer heat"]
    },
    {
      slug: "vindhyachal",
      title: "Vindhyachal",
      location: "Uttar Pradesh",
      image: "https://images.unsplash.com/photo-1571053748382-141b7de59b88?w=800",
      distance: "70 km from Varanasi",
      description: "A major Shakti Peeth temple town on the banks of the Ganges, dedicated to Goddess Vindhyavasini. The three sacred temples here are believed to form a perfect triangle.",
      highlights: ["Vindhyavasini Temple", "Kali Khoh Temple", "Ashtabhuja Devi Temple", "Ganges Ghats"],
      bestTime: "October to March",
      howToReach: "Train (Vindhyachal station) or taxi from Varanasi.",
      entryFee: "Free",
      travelTips: ["Visit all three temples", "Take a dip in Ganges", "Donate to local charities"]
    },
    {
      slug: "chunar-fort",
      title: "Chunar Fort",
      location: "Uttar Pradesh",
      image: "https://images.unsplash.com/photo-1601050690597-df056fb04791?w=800",
      distance: "45 km from Varanasi",
      description: "A historic fort perched on a rocky hill above the Ganges, with a history spanning over 2,000 years. It served as a stronghold for multiple dynasties including the Mughals and British.",
      highlights: ["Fort Ramparts", "Balmiki Ashram", "Ganges View", "Ancient Sunstone Workshops"],
      bestTime: "October to March",
      howToReach: "Taxi or bus from Varanasi.",
      entryFee: "₹25 for Indians, ₹200 for foreigners",
      travelTips: ["Sunset view is spectacular", "Hire a guide for stories", "Carry water"]
    },
    {
      slug: "ramnagar-fort",
      title: "Ramnagar Fort",
      location: "Varanasi",
      image: "https://images.unsplash.com/photo-1545127398-14699f92334b?w=800",
      distance: "14 km from Varanasi city center",
      description: "The 18th-century fort of the Maharaja of Banaras, built with red sandstone. It houses a museum displaying vintage cars, royal costumes, and rare manuscripts.",
      highlights: ["Vintage car collection", "Royal artifacts", "Clock tower", "View of Ganges"],
      bestTime: "October to March",
      howToReach: "Taxi or auto-rickshaw from Varanasi.",
      entryFee: "₹30 for Indians, ₹200 for foreigners",
      travelTips: ["Combine with a boat ride on Ganges", "Visit during Dussehra for Ramlila", "Closed on Monday"]
    },
    {
      slug: "assi-ghat",
      title: "Assi Ghat",
      location: "Varanasi",
      image: "https://images.unsplash.com/photo-1561361058-c24cecae35ca?w=800",
      distance: "5 km from main city",
      description: "One of the largest and most vibrant ghats in Varanasi, popular for its morning yoga sessions, evening aarti, and the famous Subah-e-Banaras cultural program.",
      highlights: ["Subah-e-Banaras morning ceremony", "Evening aarti", "Boat rides", "Street food"],
      bestTime: "Sunrise and sunset",
      howToReach: "Auto-rickshaw or taxi.",
      entryFee: "Free",
      travelTips: ["Arrive by 5 AM for morning show", "Enjoy lassi from famous stalls", "Be careful with your phone near water"]
    }
  ],

  // ==================== UDAIPUR ====================
  udaipur: [
    {
      slug: "kumbhalgarh",
      title: "Kumbhalgarh Fort",
      location: "Rajasthan",
      image: "https://images.unsplash.com/photo-1621360841013-c7683c659ec6?w=800",
      distance: "84 km from Udaipur",
      description: "Home to the world's second-longest wall after the Great Wall of China, Kumbhalgarh Fort is a UNESCO World Heritage Site. The mighty Aravalli hilltop fortress was birthplace of Maharana Pratap.",
      highlights: ["Kumbhalgarh Fort", "Great Wall of India", "Wildlife Sanctuary", "Badal Mahal"],
      bestTime: "October to March",
      howToReach: "Taxi or bus from Udaipur. Shared jeeps available.",
      entryFee: "₹40 for Indians, ₹600 for foreigners",
      travelTips: ["Wear good walking shoes", "Light and sound show at sunset", "Carry water"]
    },
    {
      slug: "chittorgarh",
      title: "Chittorgarh Fort",
      location: "Rajasthan",
      image: "https://images.unsplash.com/photo-1599661046289-e31897846e41?w=800",
      distance: "115 km from Udaipur",
      description: "The largest fort in India and a UNESCO World Heritage Site, Chittorgarh is a symbol of Rajput valor and sacrifice. The tales of Queen Padmini's Jauhar echo through its ancient towers.",
      highlights: ["Vijay Stambha", "Kirti Stambha", "Padmini Palace", "Rani Kumbha Palace"],
      bestTime: "October to March",
      howToReach: "Train, bus or taxi from Udaipur.",
      entryFee: "₹40 for Indians, ₹600 for foreigners",
      travelTips: ["Sound and light show is excellent", "Start early to cover the large complex", "Carry water"]
    },
    {
      slug: "mount-abu",
      title: "Mount Abu",
      location: "Rajasthan",
      image: "https://images.unsplash.com/photo-1603262110263-fb0112e7cc33?w=800",
      distance: "185 km from Udaipur",
      description: "Rajasthan's only hill station nestled in the Aravalli range, Mount Abu offers cool respite from the desert heat. The exquisitely carved Dilwara Jain Temples are considered among the finest in the world.",
      highlights: ["Dilwara Temples", "Nakki Lake", "Guru Shikhar", "Sunset Point"],
      bestTime: "February to June, September to December",
      howToReach: "Bus or taxi from Udaipur (185 km).",
      entryFee: "Dilwara Temples free (no cameras)",
      travelTips: ["Dress modestly for Jain temples", "Boat ride on Nakki Lake", "Visit Adhar Devi Temple"]
    },
    {
      slug: "ranakpur",
      title: "Ranakpur",
      location: "Rajasthan",
      image: "https://images.unsplash.com/photo-1561501900-3701fa6a0864?w=800",
      distance: "96 km from Udaipur",
      description: "Home to one of the most spectacular Jain temples in existence. The 15th-century Chaturmukha Dharana Vihara has 1,444 uniquely carved marble pillars — no two are identical.",
      highlights: ["Chaturmukha Temple", "1444 Unique Pillars", "Sun Temple", "Ranakpur Wildlife"],
      bestTime: "October to March",
      howToReach: "Taxi from Udaipur (on the way to Kumbhalgarh).",
      entryFee: "₹200 (covers temple and museum)",
      travelTips: ["No photography inside the main temple", "Hire a guide to explain the carvings", "Combine with Kumbhalgarh"]
    },
    {
      slug: "eklingji-temple",
      title: "Eklingji Temple",
      location: "Rajasthan",
      image: "https://images.unsplash.com/photo-1599661046289-e31897846e41?w=800",
      distance: "22 km from Udaipur",
      description: "A 8th-century temple dedicated to Lord Shiva, considered the ruling deity of the Mewar kingdom. The complex has 108 temples carved in sandstone.",
      highlights: ["4-faced Shiva idol", "Sandstone carvings", "Pillared halls"],
      bestTime: "October to March",
      howToReach: "Taxi or local bus from Udaipur.",
      entryFee: "Free",
      travelTips: ["Visit early morning for aarti", "Respect dress code (cover shoulders and knees)", "No shoes inside temple"]
    },
    {
      slug: "nathdwara",
      title: "Nathdwara",
      location: "Rajasthan",
      image: "https://images.unsplash.com/photo-1561501900-3701fa6a0864?w=800",
      distance: "48 km from Udaipur",
      description: "Famous for the Shrinathji Temple, a 17th-century shrine dedicated to Lord Krishna. The town is also known for its Pichwai paintings and silver jewelry.",
      highlights: ["Shrinathji Temple", "Pichwai art", "Chappals market"],
      bestTime: "October to March",
      howToReach: "Taxi or bus from Udaipur.",
      entryFee: "Free",
      travelTips: ["Buy authentic Pichwai paintings", "Try local sweet 'khurchan'", "Temple has restricted timings; check before visiting"]
    }
  ],

  // ==================== RISHIKESH ====================
  rishikesh: [
    {
      slug: "haridwar",
      title: "Haridwar",
      location: "Uttarakhand",
      image: "https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?w=800",
      distance: "24 km from Rishikesh",
      description: "One of the seven holiest cities in Hinduism, Haridwar is where the Ganges enters the plains. The evening Ganga Aarti at Har Ki Pauri is an unforgettable spiritual spectacle.",
      highlights: ["Har Ki Pauri", "Ganga Aarti", "Mansa Devi Temple", "Chandi Devi Temple"],
      bestTime: "October to March",
      howToReach: "Bus, taxi, or shared auto from Rishikesh.",
      entryFee: "Free",
      travelTips: ["Reach Har Ki Pauri at least 1 hour before aarti", "Take a boat ride", "Try local 'bhang' shops if curious (legal only in certain shops)"]
    },
    {
      slug: "mussoorie",
      title: "Mussoorie",
      location: "Uttarakhand",
      image: "https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?w=800",
      distance: "77 km from Rishikesh",
      description: "The 'Queen of Hill Stations', Mussoorie sits at 2,000m with panoramic Himalayan views. Its colonial-era charm, Mall Road and the famous Kempty Falls make it a beloved retreat.",
      highlights: ["Mall Road", "Kempty Falls", "Lal Tibba", "Company Garden"],
      bestTime: "April to June, September to November",
      howToReach: "Taxi or bus from Rishikesh (via Dehradun).",
      entryFee: "Kempty Falls ₹50",
      travelTips: ["Book a hotel with valley view", "Try local bakeries on Mall Road", "Carry warm clothes even in summer"]
    },
    {
      slug: "dehradun",
      title: "Dehradun",
      location: "Uttarakhand",
      image: "https://images.unsplash.com/photo-1601050690597-df056fb04791?w=800",
      distance: "43 km from Rishikesh",
      description: "The capital of Uttarakhand, nestled in the Doon Valley between the Ganges and Yamuna rivers. Famous for its prestigious institutions, basmati rice and the nearby Rajaji National Park.",
      highlights: ["Robber's Cave", "Tapkeshwar Temple", "Forest Research Institute", "Malsi Deer Park"],
      bestTime: "October to March",
      howToReach: "Bus, train, or taxi from Rishikesh.",
      entryFee: "Robber's Cave ₹30",
      travelTips: ["Visit Robber's Cave during light rain for best effect", "Try local bal mithai sweets", "Visit Mindrolling Monastery"]
    },
    {
      slug: "tehri-dam",
      title: "Tehri Dam",
      location: "Uttarakhand",
      image: "https://images.unsplash.com/photo-1590050752117-238cb0fb12b1?w=800",
      distance: "88 km from Rishikesh",
      description: "One of the world's highest dams, the Tehri Dam has created a massive reservoir in the Himalayas. The lake now offers thrilling adventure activities including jet skiing, parasailing and bungee jumping.",
      highlights: ["Dam Viewpoint", "Water Sports", "Tehri Lake", "New Tehri Town"],
      bestTime: "September to June",
      howToReach: "Taxi from Rishikesh.",
      entryFee: "Viewpoint ₹50, water sports extra",
      travelTips: ["Try jet skiing and boat rides", "Visit the hanging bridge near dam", "Carry sunglasses and sunscreen"]
    },
    {
      slug: "neer-garh-waterfall",
      title: "Neer Garh Waterfall",
      location: "Rishikesh",
      image: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/15/35/48/57/wanderer-gourav-bnqkjirhf1s.jpg?w=1200&h=-1&s=1",
      distance: "7 km from Rishikesh town",
      description: "A serene two-tiered waterfall located near the road to Neelkanth Mahadev. It has natural pools perfect for a cool dip after a short trek.",
      highlights: ["Trek to the falls", "Natural swimming pools", "Picnic spots"],
      bestTime: "September to March (monsoon the falls are powerful but risky)",
      howToReach: "Auto-rickshaw or taxi from Rishikesh (short trek from the road).",
      entryFee: "₹30",
      travelTips: ["Wear non-slip shoes", "Carry a change of clothes", "Avoid during heavy monsoon"]
    },
    {
      slug: "kunaprayag",
      title: "Kunaprayag",
      location: "Uttarakhand",
      image: "https://images.unsplash.com/photo-1504280390367-361c6d9f38f4?w=800",
      distance: "50 km from Rishikesh",
      description: "A sacred conﬂuence of the Mandakini and Alaknanda rivers, with a small temple and peaceful ambiance. Less crowded than other confluences.",
      highlights: ["River confluence", "Temple", "Scenic drives"],
      bestTime: "September to June",
      howToReach: "Taxi from Rishikesh (part of the Badrinath route).",
      entryFee: "Free",
      travelTips: ["Combine with a trip to Rudraprayag", "Ideal for a stopover on way to Kedarnath", "Photography at sunrise"]
    }
  ],

  // ==================== DARJEELING ====================
  darjeeling: [
    {
      slug: "gangtok",
      title: "Gangtok",
      location: "Sikkim",
      image: "https://images.unsplash.com/photo-1590005024862-6b67679a29fb?w=800",
      distance: "100 km from Darjeeling",
      description: "The capital of Sikkim perched at 1,650m, Gangtok blends modern vibrancy with Tibetan Buddhist culture. The MG Marg promenade and stunning Kanchenjunga views make it a must-visit.",
      highlights: ["Rumtek Monastery", "MG Marg", "Nathu La Pass", "Tsomgo Lake"],
      bestTime: "March to June, September to December",
      howToReach: "Shared jeep or taxi from Darjeeling (4 hours). Permits required for Nathu La.",
      entryFee: "Tsomgo Lake ₹200, Nathu La ₹500",
      travelTips: ["Obtain permits in advance", "Carry warm clothing", "MG Marg is vehicle-free – best for evening strolls"]
    },
    {
      slug: "kalimpong",
      title: "Kalimpong",
      location: "West Bengal",
      image: "https://images.unsplash.com/photo-1588668214407-6ea9a6d8c272?w=800",
      distance: "51 km from Darjeeling",
      description: "A quaint hill town at the confluence of multiple Himalayan rivers, Kalimpong is famous for its flower nurseries, Buddhist monasteries and the panoramic Deolo Hill viewpoint.",
      highlights: ["Deolo Hill", "Zong Dog Palri Temple", "Flower Nurseries", "Durpin Dara Hill"],
      bestTime: "October to March",
      howToReach: "Shared jeep or taxi from Darjeeling.",
      entryFee: "Deolo Hill free",
      travelTips: ["Buy exotic cacti and orchids", "Visit Mangal Dham Temple", "Try local beef momos (if you eat beef)"]
    },
    {
      slug: "mirik",
      title: "Mirik",
      location: "West Bengal",
      image: "https://images.unsplash.com/photo-1516690561799-46d8f74f9abf?w=800",
      distance: "49 km from Darjeeling",
      description: "A serene hill retreat known for its tranquil Sumendu Lake, orange orchards and cardamom plantations. Mirik is a lesser-known gem that offers Kanchenjunga views without the crowds.",
      highlights: ["Sumendu Lake", "Orange Gardens", "Bokar Monastery", "Ramitey Viewpoint"],
      bestTime: "March to May, October to December",
      howToReach: "Shared jeep or taxi from Darjeeling.",
      entryFee: "Boating ₹100",
      travelTips: ["Rent a boat on the lake", "Buy fresh oranges when in season", "Quiet getaway from crowded Darjeeling"]
    },
    {
      slug: "pelling",
      title: "Pelling",
      location: "Sikkim",
      image: "https://images.unsplash.com/photo-1593181629936-11c609b8db9b?w=800",
      distance: "147 km from Darjeeling",
      description: "A quiet town offering some of the finest unobstructed views of the Kanchenjunga massif. The ancient Pemayangtse Monastery and the newly-built Chenrezig statue are its crown jewels.",
      highlights: ["Pemayangtse Monastery", "Kanchenjunga Views", "Skywalk Glass Bridge", "Rabdentse Ruins"],
      bestTime: "March to May, September to December",
      howToReach: "Shared jeep from Darjeeling via Jorethang (permits required).",
      entryFee: "Pemayangtse ₹50, Skywalk ₹100",
      travelTips: ["Sikkim permit required", "Best view at sunrise", "Combine with Rabdentse Ruins"]
    },
    {
      slug: "ghoom-monastery",
      title: "Ghoom Monastery",
      location: "Darjeeling",
      image: "https://media.istockphoto.com/id/2223969191/photo/beautiful-view-of-interior-of-ghum-monastery-image-taken-with-permission-peaceful-calm-and.jpg?s=612x612&w=0&k=20&c=O58kI1GMpxKf_xSq_3lPC1EpIBfoF4geCPLXWOAXyKs=",
      distance: "8 km from Darjeeling town",
      description: "One of the oldest monasteries in the Darjeeling area, housing a 15ft statue of Maitreya Buddha. It's conveniently located near the Batasia Loop.",
      highlights: ["Maitreya Buddha statue", "Peaceful environs", "Colorful thangkas"],
      bestTime: "Year round",
      howToReach: "Taxi or shared jeep from Darjeeling.",
      entryFee: "Free (donation welcome)",
      travelTips: ["Visit early morning for prayers", "Combine with Batasia Loop", "Photography allowed inside"]
    },
    {
      slug: "tiger-hill",
      title: "Tiger Hill",
      location: "Darjeeling",
      image: "https://images.unsplash.com/photo-1590077538740-05e44d7b1560?w=800",
      distance: "11 km from Darjeeling",
      description: "Famous for its sunrise views over Mt. Kanchenjunga and on a clear day, even Mt. Everest. The view is breathtaking as the sun paints the peaks gold.",
      highlights: ["Sunrise over Kanchenjunga", "Everest view (on clear days)", "War memorial at the top"],
      bestTime: "October to December (clearest skies)",
      howToReach: "Early morning taxi or shared jeep (depart around 4 AM).",
      entryFee: "₹100 per person",
      travelTips: ["Dress very warmly (it's freezing before sunrise)", "Book jeep the previous evening", "Carry binoculars"]
    }
  ],

  // ==================== ANDAMAN ====================
  andaman: [
    {
      slug: "havelock-island",
      title: "Havelock Island (Swaraj Dweep)",
      location: "Andaman Islands",
      image: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=800",
      distance: "57 km from Port Blair",
      description: "Home to Asia's best beach, Radhanagar, and world-class scuba diving at Elephant Beach. Havelock is the jewel of the Andamans with crystal-clear turquoise waters.",
      highlights: ["Radhanagar Beach", "Elephant Beach Diving", "Kalapathar Beach", "Mangrove Kayaking"],
      bestTime: "October to May",
      howToReach: "Ferry from Port Blair (2-3 hours).",
      entryFee: "Radhanagar Beach entry ₹50",
      travelTips: ["Pre-book scuba diving", "Carry cash (no ATMs on Havelock)", "Stay near Radhanagar for sunset"]
    },
    {
      slug: "neil-island",
      title: "Neil Island (Shaheed Dweep)",
      location: "Andaman Islands",
      image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=800",
      distance: "36 km from Port Blair",
      description: "A quiet, laid-back island paradise known for its natural rock formations, pristine beaches and vibrant coral reefs. Ideal for travelers seeking solitude.",
      highlights: ["Natural Bridge Rock", "Bharatpur Beach", "Laxmanpur Beach", "Snorkeling"],
      bestTime: "October to May",
      howToReach: "Ferry from Port Blair (1.5-2 hours).",
      entryFee: "Natural Bridge ₹20",
      travelTips: ["Rent a bicycle to explore the island", "Low tide reveals the natural bridge", "Try fresh seafood at local shacks"]
    },
    {
      slug: "baratang",
      title: "Baratang Island",
      location: "Andaman Islands",
      image: "https://images.unsplash.com/photo-1510414842594-a61c69b5ae57?w=800",
      distance: "100 km from Port Blair",
      description: "An offbeat island known for its limestone caves, mud volcanoes, and dense mangrove creeks. The journey through the Jarawa tribal reserve is an adventure.",
      highlights: ["Limestone Caves", "Mud Volcanoes", "Mangrove Creek Boat Ride", "Parrot Island"],
      bestTime: "October to May",
      howToReach: "By road from Port Blair (requires permit and convoy system).",
      entryFee: "Caves entry ₹50",
      travelTips: ["Avoid carrying cameras in Jarawa reserve", "Early departure from Port Blair", "Wear comfortable footwear"]
    },
    {
      slug: "ross-island",
      title: "Ross Island",
      location: "Andaman Islands",
      image: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/10/78/a4/51/ross-castle.jpg?w=1200&h=-1&s=1",
      distance: "3 km from Port Blair",
      description: "The former British administrative headquarters, now an atmospheric ruin reclaimed by nature. Spotted deer and peacocks roam among crumbling buildings.",
      highlights: ["Colonial Ruins", "Spotted Deer", "Son et Lumière Show", "Chief Commissioner's House"],
      bestTime: "October to May",
      howToReach: "Short boat ride from Port Blair (15 minutes).",
      entryFee: "₹100 (includes boat transfer)",
      travelTips: ["Visit late afternoon to avoid heat", "The light and sound show is worth staying for", "Carry water"]
    },
    {
      slug: "cellular-jail",
      title: "Cellular Jail",
      location: "Port Blair",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRHNAm9uA-QRFYBdvTsqu0xPdWaBV4HFokNpg&s",
      distance: "Central Port Blair",
      description: "A colonial prison used to exile Indian independence activists. The sound and light show narrates the tragic history of the 'Kala Pani'.",
      highlights: ["Museum", "Sound and light show", "Martyr's Gallery", "Gallows"],
      bestTime: "Any time, but show is in evening",
      howToReach: "Walk or auto-rickshaw.",
      entryFee: "₹50 for Indians, ₹300 for foreigners, show extra",
      travelTips: ["Book show tickets in advance", "Visit the museum for deep insights", "Respectful dress"]
    },
    {
      slug: "north-bay-island",
      title: "North Bay Island",
      location: "Andaman Islands",
      image: "https://images.unsplash.com/photo-1582967788606-a171c1080cb0?w=800",
      distance: "15 min boat from Port Blair",
      description: "Famous for its coral reefs and underwater activities like sea walking, glass-bottom boat rides, and snorkeling.",
      highlights: ["Sea Walking", "Glass-bottom boat", "Snorkeling", "Light house"],
      bestTime: "October to May",
      howToReach: "Boat from Port Blair's Water Sports Complex.",
      entryFee: "Boat ₹500, sea walking ₹2000",
      travelTips: ["Try sea walking (unique experience)", "Carry swimwear and towel", "Avoid touching corals"]
    }
  ],

  // ==================== MAHABALESHWAR ====================
  mahabaleshwar: [
    {
      slug: "panchgani",
      title: "Panchgani",
      location: "Maharashtra",
      image: "https://images.unsplash.com/photo-1506461883276-594a12b11cf3?w=800",
      distance: "18 km from Mahabaleshwar",
      description: "A charming hill station famous for the vast Table Land plateau, the second-largest volcanic plateau in Asia. Its colonial-era boarding schools and strawberry farms give Panchgani a unique character.",
      highlights: ["Table Land Plateau", "Sydney Point", "Devrai Art Village", "Strawberry Farms"],
      bestTime: "October to June",
      howToReach: "Taxi or bus from Mahabaleshwar.",
      entryFee: "Table Land ₹50, horse riding extra",
      travelTips: ["Try fresh strawberries with cream", "Visit at sunset for best views", "Carry a jacket (windy)"]
    },
    {
      slug: "pratapgad-fort",
      title: "Pratapgad Fort",
      location: "Maharashtra",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSjhrD_fNF3IbBdf4Xrj0x2bLb4NPKQQKTz3g&s",
      distance: "24 km from Mahabaleshwar",
      description: "The site of one of history's most audacious battles — where Chhatrapati Shivaji Maharaj defeated Afzal Khan in 1659. The fort's two-tier structure commands magnificent valley views.",
      highlights: ["Shivaji's Monument", "Bhavani Devi Temple", "Afzal Khan's Tomb", "Valley Views"],
      bestTime: "October to February",
      howToReach: "Taxi from Mahabaleshwar.",
      entryFee: "₹30 for Indians, ₹200 for foreigners",
      travelTips: ["Good trekking shoes required", "Hire a guide for historical context", "Visit combined with other forts"]
    },
    {
      slug: "kaas-plateau",
      title: "Kaas Plateau (Valley of Flowers)",
      location: "Maharashtra",
      image: "https://images.unsplash.com/photo-1551576407-06109968430b?w=800",
      distance: "80 km from Mahabaleshwar",
      description: "A UNESCO World Heritage Site known as the 'Valley of Flowers of Maharashtra'. The plateau transforms into a carpet of rare wildflowers every monsoon season.",
      highlights: ["Wildflower Blooms", "UNESCO Heritage Walk", "Kaas Lake", "Rare Endemic Species"],
      bestTime: "August to October (peak flowering)",
      howToReach: "Taxi from Mahabaleshwar (entry restrictions - only small vehicles).",
      entryFee: "₹100 per person",
      travelTips: ["Go on a weekday to avoid crowds", "Parking is limited, arrive early", "Do not pluck flowers"]
    },
    {
      slug: "tapola",
      title: "Tapola (Mini Kashmir)",
      location: "Maharashtra",
      image: "https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?w=800",
      distance: "28 km from Mahabaleshwar",
      description: "Nicknamed 'Mini Kashmir of Maharashtra', Tapola sits on the shores of Shivsagar Lake formed by the Koyna Dam. Kayaking, boating, and camping in lush greenery make it a perfect offbeat escape.",
      highlights: ["Shivsagar Lake", "Boating & Kayaking", "Vasota Fort Trek", "Jungle Camping"],
      bestTime: "October to May",
      howToReach: "Taxi from Mahabaleshwar.",
      entryFee: "Boating ₹300-500",
      travelTips: ["Camp overnight for starry skies", "Try local fish curry", "Combine with Bamnoli for waterfall view"]
    },
    {
      slug: "lingmala-waterfall",
      title: "Lingmala Waterfall",
      location: "Mahabaleshwar",
      image: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/08/b0/12/1f/the-majestic-lingmala.jpg?w=1200&h=-1&s=1",
      distance: "5 km from Mahabaleshwar town",
      description: "A scenic waterfall plunging 600 feet into a valley. The best view is during monsoon when the falls are in full force.",
      highlights: ["Monsoon falls", "Photography spot", "Trek path"],
      bestTime: "June to September (monsoon)",
      howToReach: "Taxi or auto from Mahabaleshwar.",
      entryFee: "₹50",
      travelTips: ["Visit after rains", "Wear non-slip footwear", "Water strong – do not try to swim"]
    },
    {
      slug: "elephant-head-point",
      title: "Elephant's Head Point",
      location: "Mahabaleshwar",
      image: "https://thumbs.dreamstime.com/b/elephant-point-mahabaleshwar-closeup-view-elephant-point-mahabaleshwar-closeup-view-asia-179642206.jpg",
      distance: "6 km from main market",
      description: "A rock formation shaped like an elephant's head, with a sheer drop. Offers stunning views of the deep valley and a glimpse of the Savitri River.",
      highlights: ["Rock formation", "Sunset view", "Adventure walking"],
      bestTime: "October to February",
      howToReach: "Taxi or trek from Mahabaleshwar.",
      entryFee: "Free",
      travelTips: ["Be careful near the edge", "Sunset is spectacular", "Combine with Arthur's Seat nearby"]
    }
  ]
};