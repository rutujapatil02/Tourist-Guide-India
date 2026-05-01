export const insuranceHeroData = {
  backgroundImage: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?q=80&w=2000",
};

export const insuranceContent = {
  introTitle: "Travel Insurance FAQs",
  description: "Protect your journey to India. Learn about the importance of coverage for medical emergencies and trip cancellations.",
  sections: [
    {
      id: "why-insurance",
      title: "Why buy travel insurance?",
      faqs: [
        { id: "i1", q: "Is travel insurance mandatory for India?", a: "It is not mandatory for most visas, but highly recommended for health emergencies." }
      ]
    },
    {
      id: "medical",
      title: "Medical Coverage",
      faqs: [
        { id: "m1", q: "Does insurance cover pre-existing conditions?", a: "Usually no, unless you buy a specific rider for it." }
      ]
    },
    {
      id: "claims",
      title: "Making a Claim",
      content: "Required documents:",
      items: ["Original boarding passes", "Medical certificates", "Payment receipts"]
    }
  ]
};