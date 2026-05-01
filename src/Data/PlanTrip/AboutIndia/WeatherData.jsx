export const weatherData = {
  hero: {
    title: "Weather in India",
    subtitle: "A guide to the seasonal climates across 10 major Indian states.",
    backgroundImage: "https://images.unsplash.com/photo-1519944159858-806d435dc86b?q=80&w=2070",
  },
  cities: [
    {
      name: "Delhi (North)",
      maxTemp: [21, 24, 30, 36, 40, 38, 35, 34, 34, 33, 28, 23],
      minTemp: [7, 10, 15, 21, 26, 28, 27, 26, 24, 18, 12, 8],
      rainfall: [20, 22, 15, 12, 25, 75, 210, 230, 120, 15, 5, 10]
    },
    {
      name: "Maharashtra (Mumbai)",
      maxTemp: [31, 31, 33, 33, 34, 32, 30, 30, 31, 33, 34, 32],
      minTemp: [17, 18, 21, 24, 27, 26, 25, 25, 25, 24, 21, 18],
      rainfall: [0, 0, 0, 0, 12, 520, 800, 540, 320, 90, 10, 1]
    },
    {
      name: "Karnataka (Bangalore)",
      maxTemp: [28, 31, 33, 34, 33, 30, 28, 28, 28, 28, 27, 26],
      minTemp: [16, 18, 20, 22, 21, 20, 19, 19, 19, 19, 18, 15],
      rainfall: [2, 5, 18, 45, 110, 80, 110, 140, 210, 170, 60, 15]
    },
    {
      name: "Tamil Nadu (Chennai)",
      maxTemp: [29, 31, 33, 35, 38, 37, 35, 35, 34, 32, 30, 29],
      minTemp: [21, 22, 23, 26, 28, 28, 26, 25, 25, 24, 23, 22],
      rainfall: [25, 10, 15, 15, 25, 50, 90, 140, 150, 280, 350, 180]
    },
    {
      name: "West Bengal (Kolkata)",
      maxTemp: [26, 30, 34, 36, 36, 34, 32, 32, 32, 32, 31, 27],
      minTemp: [13, 17, 21, 25, 26, 27, 26, 26, 26, 24, 19, 14],
      rainfall: [12, 25, 35, 60, 110, 280, 380, 350, 300, 160, 30, 5]
    },
    {
      name: "Rajasthan (Jaipur)",
      maxTemp: [22, 25, 32, 37, 41, 40, 36, 33, 33, 34, 29, 24],
      minTemp: [8, 11, 16, 22, 27, 29, 27, 25, 24, 19, 13, 9],
      rainfall: [10, 12, 8, 5, 15, 65, 220, 200, 80, 20, 5, 5]
    },
    {
      name: "Kerala (Kochi)",
      maxTemp: [31, 32, 32, 33, 32, 30, 29, 29, 29, 30, 30, 31],
      minTemp: [23, 24, 25, 26, 25, 24, 24, 24, 24, 24, 23, 23],
      rainfall: [20, 25, 40, 110, 320, 700, 580, 380, 300, 200, 150, 40]
    },
    {
      name: "Gujarat (Ahmedabad)",
      maxTemp: [28, 31, 36, 40, 42, 39, 34, 32, 33, 35, 33, 30],
      minTemp: [12, 14, 19, 24, 27, 27, 26, 25, 25, 21, 17, 13],
      rainfall: [2, 1, 1, 2, 10, 100, 300, 250, 150, 40, 10, 5]
    },
    {
      name: "Assam (Guwahati)",
      maxTemp: [23, 26, 30, 32, 32, 32, 32, 32, 32, 31, 28, 25],
      minTemp: [10, 12, 16, 20, 22, 24, 25, 25, 25, 21, 16, 11],
      rainfall: [15, 25, 60, 180, 290, 450, 520, 420, 350, 180, 25, 10]
    },
    {
      name: "Punjab (Amritsar)",
      maxTemp: [18, 21, 27, 34, 39, 41, 36, 33, 33, 32, 27, 21],
      minTemp: [4, 7, 12, 17, 22, 26, 26, 25, 23, 16, 10, 5],
      rainfall: [25, 35, 25, 20, 15, 40, 180, 190, 90, 20, 10, 15]
    }
  ],
  months: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
  
  seasons: [
    {
      id: "summer",
      title: "Summer: April - June",
      description: "Retreat to the Himalayan hill stations or enjoy cool ocean breezes in the south.",
      image: "https://images.unsplash.com/photo-1504512485060-75b414bb9995?q=80&w=1000",
      content: "While the plains experience intense heat, the Himalayan regions like Shimla and Manali become major attractions. It's the perfect time for wildlife safaris and mountain trekking."
    },
    {
      id: "monsoon",
      title: "Monsoon: June - September",
      description: "Transforming the sub-continent into a lush green oasis starting from Kerala.",
      image: "https://images.unsplash.com/photo-1477039181047-efb4357d01bd?q=80&w=1000",
      content: "The monsoon brings life to the Western Ghats and the Northeast. Experience the magical rain of Meghalaya or the backwaters of Kerala in their full verdant glory."
    },
    {
      id: "autumn",
      title: "Autumn: October - November",
      description: "Pleasant transition period with comfortable temperatures and clear blue skies.",
      image: "https://images.unsplash.com/photo-1507782633654-20615567561d?q=80&w=1000",
      content: "This is the festival season. The weather is ideal for exploring the Golden Triangle (Delhi, Agra, Jaipur) and attending grand celebrations like Diwali and Dussehra."
    },
    {
      id: "winter",
      title: "Winter: December - February",
      description: "Crisp sunshine in the north and mild, sunny days across the southern states.",
      image: "https://images.unsplash.com/photo-1548263514-a2388102f5fc?q=80&w=1000",
      content: "The peak travel season. From skiing in Gulmarg to sunbathing on the beaches of Goa, winter offers the most comfortable sightseeing weather for all travelers."
    }
  ]

  
};