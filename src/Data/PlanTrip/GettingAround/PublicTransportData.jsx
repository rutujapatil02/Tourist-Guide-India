export const PublicTransportData = {
  hero: {
    image: "https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?q=80&w=2144",
    title: "Public Transport in India",
    subtitle: "India's vast public transport network is one of the largest in the world. From metro rails to auto-rickshaws, getting around Indian cities is affordable, colourful, and full of character."
  },
  categories: [
    {
      id: "metro",
      icon: "🚇",
      color: "bg-blue-500",
      lightColor: "bg-blue-50",
      textColor: "text-blue-600",
      name: "Metro Rail",
      tagline: "Fast, clean & affordable",
      image: "https://images.unsplash.com/photo-1596701062351-be5f6a21021d?q=80&w=2070",
      overview: "India has one of the world's fastest growing metro rail networks. Over 20 cities now have operational metro systems with more under construction. Metro is the safest, fastest, and most comfortable way to navigate Indian cities.",
      cities: ["Delhi (390 km, 9 lines)", "Mumbai (80 km)", "Bengaluru (56 km)", "Chennai (54 km)", "Hyderabad (69 km)", "Kolkata (45 km)", "Kochi (25 km)", "Jaipur (12 km)"],
      tips: [
        "Buy a metro smart card to avoid queuing for tokens every trip",
        "Women-only coaches are available on all metro systems",
        "Metro apps show real-time schedules and fare calculators",
        "Airport express lines exist in Delhi, Bengaluru, and Kolkata"
      ]
    },
    {
      id: "bus",
      icon: "🚌",
      color: "bg-green-500",
      lightColor: "bg-green-50",
      textColor: "text-green-600",
      name: "City Buses",
      tagline: "The cheapest way around",
      image: "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?q=80&w=2069",
      overview: "Government-operated bus services run in every Indian city and town. They are the cheapest form of transport but can be crowded during peak hours. Air-conditioned Volvo buses operate on major city routes and are comfortable alternatives.",
      cities: ["BEST buses in Mumbai", "DTC buses in Delhi", "BMTC in Bengaluru", "MTC in Chennai", "KSRTC across Karnataka & Kerala", "MSRTC across Maharashtra"],
      tips: [
        "AC Volvo buses cost more but are worth it in hot weather",
        "Carry exact change as conductors rarely have change for large notes",
        "Google Maps works well for bus routes in major Indian cities",
        "Inter-city buses are a great budget option between nearby cities"
      ]
    },
    {
      id: "auto",
      icon: "🛺",
      color: "bg-yellow-500",
      lightColor: "bg-yellow-50",
      textColor: "text-yellow-600",
      name: "Auto-Rickshaw",
      tagline: "India's iconic three-wheeler",
      image: "https://images.unsplash.com/photo-1529253355930-ddbe423a2ac7?q=80&w=2070",
      overview: "The auto-rickshaw (or 'auto') is one of India's most iconic modes of transport. These three-wheeled vehicles are found in virtually every Indian city and town. They are faster than buses, cheaper than taxis, and perfect for short distances.",
      cities: ["Available in every Indian city", "CNG autos in Delhi & Mumbai", "Metered autos in Bengaluru", "App-based autos via Ola & Rapido", "Shared autos on fixed routes", "Electric autos in newer cities"],
      tips: [
        "Always insist on the meter or agree on a price before getting in",
        "Use Ola or Rapido app to book autos at fixed prices",
        "Shared autos on fixed routes are very cheap — ask locals",
        "Night fares are typically 1.5x the day meter rate"
      ]
    },
    {
      id: "taxi",
      icon: "🚕",
      color: "bg-orange-500",
      lightColor: "bg-orange-50",
      textColor: "text-orange-600",
      name: "Taxis & Cab Apps",
      tagline: "Convenient door-to-door travel",
      image: "https://images.unsplash.com/photo-1587474260584-136574528ed5?q=80&w=2070",
      overview: "App-based cab services have transformed urban transport in India. Ola and Uber operate in most major cities offering reliable, metered, and cashless rides. Traditional taxis still operate at airports, railway stations, and tourist areas.",
      cities: ["Uber — available in 100+ Indian cities", "Ola — India's largest cab app", "Meru Cabs — airport specialist", "InDrive — price negotiation model", "Rapido — bike taxis in metro cities", "Jugnoo — smaller city coverage"],
      tips: [
        "Ola and Uber are the most reliable options in major cities",
        "Book airport taxis in advance during peak hours",
        "Rapido bike taxis are the fastest option in congested cities",
        "Always share your ride details with someone when travelling alone"
      ]
    },
    {
      id: "ferry",
      icon: "⛴️",
      color: "bg-cyan-500",
      lightColor: "bg-cyan-50",
      textColor: "text-cyan-600",
      name: "Ferries & Boats",
      tagline: "Travel by water",
      image: "https://images.unsplash.com/photo-1593179241557-bce03199b1b1?q=80&w=2070",
      overview: "Water transport plays an important role in several Indian states. Kerala's backwaters, Mumbai's harbour, and the Andaman Islands all rely heavily on ferry and boat services. These are often scenic and uniquely Indian experiences.",
      cities: ["Mumbai to Alibaug ferry", "Kochi harbour ferries", "Kerala backwater boats", "Goa river ferries", "Andaman inter-island ferries", "Varanasi Ganga river boats"],
      tips: [
        "Kerala's KSWTD ferries are the cheapest way through the backwaters",
        "Mumbai's Gateway of India ferries run to Elephanta Island",
        "Andaman ferry tickets should be booked days in advance",
        "Varanasi sunrise boat rides on the Ganga are unmissable"
      ]
    }
  ]
};