import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

const ExperienceDetails = () => {
  const { id } = useParams(); // now id = sub5
  const navigate = useNavigate();

  const [data, setData] = useState(null);

  // ✅ Fetch from backend
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch("http://localhost:8080/api/sections");
        const json = await res.json();

        // 👉 Find BE INSPIRED section
        const section = json.find(s => s.sectionId === "be_inspired");
        if (!section) return;

        // 👉 Find subsection using id (sub5)
        const subSection = section.subsections.find(
          sub => sub.id === id   // ✅ IMPORTANT CHANGE
        );

        if (!subSection) return;

        // ✅ Convert items into UI format
        const formatted = {
          title: subSection.title,
          subTitle: subSection.title,
          introText: "Explore amazing experiences across India.",
          videoHero: "",

          details: subSection.items.map(item => ({
            id: item.id,
            name: item.title,
            location: "India",
            desc: item.description || "Beautiful experience to explore.",
            img: item.image
          }))
        };

        setData(formatted);

      } catch (err) {
        console.error("Error:", err);
      }
    };

    fetchData();
  }, [id]);

  // scroll top
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  if (!data) return <div className="p-20 text-center">Loading...</div>;

  return (
    <div className="w-full bg-white">
      {/* Breadcrumb */}
      <div className="bg-[#41aab4] text-white py-2 px-6 flex items-center gap-2 text-[13px]">
        <span className="cursor-pointer hover:underline" onClick={() => navigate('/')}>Home</span>
        <span>{">"}</span>
        <span className="cursor-pointer hover:underline" onClick={() => navigate(-1)}>Experience India</span>
        <span>{">"}</span>
        <span className="font-bold underline">{data.title}</span>
      </div>

      {/* Hero */}
      <div className="relative h-[80vh] w-full overflow-hidden bg-black">
        <img
          src={data.details[0]?.img}
          className="w-full h-full object-cover opacity-70"
        />
        <div className="absolute inset-0 flex items-center justify-center text-center px-4">
          <h1 className="text-white text-6xl md:text-8xl font-bold drop-shadow-2xl max-w-4xl">
            {data.subTitle}
          </h1>
        </div>
      </div>

      {/* Intro */}
      <div className="max-w-4xl mx-auto py-16 px-6 text-center">
        <p className="text-2xl text-gray-700 leading-relaxed italic font-serif">
          "{data.introText}"
        </p>
      </div>

      {/* LIST (same UI style) */}
      <div className="max-w-6xl mx-auto pb-24 px-6">
        {data.details.map((item, index) => (
          <div 
            key={item.id} 
            className={`flex flex-col md:flex-row gap-12 mb-32 items-center ${index % 2 !== 0 ? 'md:flex-row-reverse' : ''}`}
          >
            <div className="w-full md:w-1/2 overflow-hidden rounded-2xl shadow-2xl">
              <img 
                src={item.img} 
                alt={item.name} 
                className="w-full h-[450px] object-cover hover:scale-105 transition-transform duration-500" 
              />
            </div>

            <div className="w-full md:w-1/2">
              <span className="text-8xl font-black text-gray-100 block mb-[-40px]">
                {index + 1}
              </span>

              <div className="pl-4">
                <h2 className="text-4xl font-bold mb-2 text-gray-900">{item.name}</h2>
                <p className="text-[#41aab4] font-bold mb-4 text-sm uppercase">
                  {item.location}
                </p>
                <p className="text-gray-600 text-lg leading-relaxed">
                  {item.desc}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ExperienceDetails;