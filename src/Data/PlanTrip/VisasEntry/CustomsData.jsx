export const customsHeroData = {
  title: "India Customs and Biosecurity FAQs",
  backgroundImage: "https://images.unsplash.com/photo-1524492412937-b28074a5d7da?q=80&w=2000", 
};

export const customsContent = {
  introTitle: "Customs and Biosecurity FAQs",
  description: "Comprehensive guide to Indian customs regulations, biosecurity protocols, and airport assistance for international travelers.",
  sections: [
    {
      id: "travelling",
      title: "Travelling to India",
      faqs: [
        { id: "t1", q: "What documents are mandatory for entry?", a: "A valid passport with 6 months validity and a printed e-Visa or regular visa are mandatory. Some travelers may also need a Yellow Fever vaccination certificate if coming from high-risk countries." },
        { id: "t2", q: "How much Indian currency can I carry?", a: "Non-residents are generally not allowed to bring in or take out Indian Rupees. However, you can bring unlimited foreign currency, provided you declare amounts over USD 5,000 in cash." },
        { id: "t3", q: "Is travel insurance required?", a: "While not strictly mandatory for all visas, it is highly recommended to cover medical emergencies and travel disruptions." }
      ]
    },
    {
      id: "customs",
      title: "Customs and biosecurity",
      faqs: [
        { id: "c1", q: "What are the biosecurity rules for food items?", a: "India has strict biosecurity to protect its agriculture. Fresh fruits, vegetables, seeds, and animal products like meat or honey must be declared and are often prohibited." },
        { id: "c2", q: "Can I bring my pet to India?", a: "Yes, but it requires a No Objection Certificate (NOC) from the Animal Quarantine and Certification Services (AQCS) in India and specific health certificates." },
        { id: "c3", q: "Are there restrictions on electronics?", a: "Standard personal electronics like laptops and phones are fine. However, high-end professional equipment or multiple units of the same item may attract duty." }
      ]
    },
    {
      id: "declaring",
      title: "Declaring your goods",
      content: "You must use the 'Red Channel' and declare the following items to Customs:",
      items: [
        "Currency exceeding USD 5,000 (cash) or USD 10,000 (total value)",
        "Gold and silver bullion or coins",
        "Drones, Satellite phones (Thuraya/Iridium), and powerful transmitters",
        "Plants, seeds, flowers, and soil-attached equipment",
        "Alcohol exceeding 2 liters or Tobacco exceeding 100 cigarettes",
        "Commercial goods or samples meant for business use"
      ]
    },
    {
      id: "assistance",
      title: "Assistance and accessibility",
      faqs: [
        { id: "a1", q: "Is wheelchair assistance available?", a: "Yes, all major Indian international airports provide wheelchair assistance. It is best to request this through your airline at least 48 hours before departure." },
        { id: "a2", q: "What is the 'Namaste World' or 'Meet and Greet' service?", a: "Many airports offer premium services where a dedicated staff member assists you with luggage, customs, and navigation through the terminal." }
      ]
    }
  ]
};