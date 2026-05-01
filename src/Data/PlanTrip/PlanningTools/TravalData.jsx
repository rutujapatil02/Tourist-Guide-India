export const travelData = {
  title: "Find a travel agent",
  subtitle: "Our travel agents are experts at building the perfect itinerary across India.",
  heroImg: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=1600",
  states: [
    "Andhra Pradesh", "Arunachal Pradesh", "Assam", "Bihar", "Chhattisgarh",
    "Goa", "Gujarat", "Haryana", "Himachal Pradesh", "Jharkhand",
    "Karnataka", "Kerala", "Madhya Pradesh", "Maharashtra", "Manipur",
    "Meghalaya", "Mizoram", "Nagaland", "Odisha", "Punjab",
    "Rajasthan", "Sikkim", "Tamil Nadu", "Telangana", "Tripura",
    "Uttar Pradesh", "Uttarakhand", "West Bengal"
  ].map((state, index) => ({
    id: index + 1,
    state,
    image: `https://images.unsplash.com/photo-1506461883276-594a12b11cf3?q=80&w=800&auto=format&fit=crop`, // Default India-themed image
    guides: [
      {
        name: `${state} Travel Expert`,
        contact: "+91 90000 11111",
        specialty: "Cultural Tours",
      },
      {
        name: `${state} Adventure Guide`,
        contact: "+91 90000 22222",
        specialty: "Adventure Trips",
      },
    ],
  })),
};