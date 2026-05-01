import React, { useRef, useState, useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { FaChevronLeft, FaChevronRight, FaPlay } from "react-icons/fa";

const indiaDestinationsData = [
  { id: 1, title: "Varanasi Ghats", img: "https://images.unsplash.com/photo-1561361513-2d000a50f0dc?w=800" },
  { id: 2, title: "Kerala Backwaters", img: "https://images.unsplash.com/photo-1593693397690-362cb9666fc2?w=800" },
  { id: 3, title: "Ladakh Mountains", img: "https://images.unsplash.com/photo-1581791534721-e599df4417f7?w=800" },
];

const GdaySection = ({ onBack }) => {
  const scrollRef = useRef(null);
  const navigate = useNavigate();

  // ✅ Backend state (same variable names as your UI)
  const [indiaExperienceData, setIndiaExperienceData] = useState([]);
  const [startPlanningData, setStartPlanningData] = useState([]);

  const [showLeftArrow, setShowLeftArrow] = useState(false);
  const [showRightArrow, setShowRightArrow] = useState(true);

  // ✅ FETCH BACKEND DATA
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch("http://localhost:8080/api/sections");
        const data = await res.json();

        const section = data.find(s => s.sectionId === "be_inspired");
        if (!section) return;

        const experienceSection = section.subsections.find(
          sub => sub.title === "India Experiences"
        );

        const planningSection = section.subsections.find(
          sub => sub.title === "Start Planning"
        );

        // ✅ IMPORTANT FIX (id mapping)
        const formattedExperience = experienceSection?.items.map(item => ({
          id: item._id || item.id,
          title: item.title,
          img: item.image
        })) || [];

        const formattedPlanning = planningSection?.items.map(item => ({
          id: item._id || item.id,
          title: item.title,
          desc: item.description,
          img: item.image,
          large: false
        })) || [];

        setIndiaExperienceData(formattedExperience);
        setStartPlanningData(formattedPlanning);

      } catch (err) {
        console.error("Error fetching data:", err);
      }
    };

    fetchData();
  }, []);

  const checkScrollPosition = () => {
    if (scrollRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
      setShowLeftArrow(scrollLeft > 5);
      setShowRightArrow(scrollLeft + clientWidth < scrollWidth - 5);
    }
  };

  useEffect(() => {
    const currentRef = scrollRef.current;
    if (currentRef) {
      checkScrollPosition();
      currentRef.addEventListener('scroll', checkScrollPosition);
    }
    return () => {
      if (currentRef) currentRef.removeEventListener('scroll', checkScrollPosition);
    };
  }, [indiaExperienceData]);

  const scroll = (direction) => {
    const { current } = scrollRef;
    const scrollAmount = direction === 'left' ? -400 : 400;
    current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
  };

  return (
    <div className="w-full bg-white animate-in fade-in duration-700 font-sans overflow-x-hidden">
      
      {/* Sub-Navigation Bar */}
      <div className="bg-[#41aab4] text-white py-2 px-6 flex items-center gap-2 text-[13px] font-light">
        <Link to="/" className="cursor-pointer hover:underline font-medium">Home</Link> 
        <span className="text-xs opacity-80">{">"}</span>
        <span className="cursor-pointer hover:underline">Inspiration for your India trip</span> 
        <span className="text-xs opacity-80">{">"}</span>
        <span className="font-normal underline underline-offset-4">Experience Incredible India</span>
      </div>

      {/* Hero Section */}
      <div className="relative h-[85vh] w-full overflow-hidden">
        <img 
          src="https://images.unsplash.com/photo-1524492412937-b28074a5d7da?w=1600" 
          className="w-full h-full object-cover object-center"
          alt="Incredible India Taj Mahal"
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center bg-black/10">
          <div className="relative mb-20">
            <h2 className="text-white text-5xl md:text-7xl font-serif italic mb-2 tracking-tight drop-shadow-lg">Incredible</h2>
            <h1 className="text-[10rem] md:text-[14rem] font-bold text-[#FFCC33] leading-[0.8] drop-shadow-2xl">!ndia</h1>
          </div>
        </div>
      </div>

      {/* Main Wrapper */}
      <div className="relative z-10 -mt-10 ml-10 mr-10 bg-white pt-20">
        
        {/* Experience India Intro */}
        <div className="max-w-[1400px] mx-auto px-10 pb-10">
          <div className="flex flex-col text-left space-y-8">
            <p className="text-gray-800 text-xl md:text-2xl font-light max-w-3xl leading-relaxed">
              From snow-capped peaks to sun-soaked beaches, every moment in India is a memory in the making.
            </p>
            <div className="pt-10">
                <h3 className="text-5xl md:text-7xl font-serif text-gray-900 leading-tight">
                  Experience India
               </h3>
            </div>
          </div>
        </div>

        {/* Sliding Cards */}
        <div className="relative group max-w-[1400px] mx-auto px-10 pb-24">
          {showLeftArrow && (
            <button onClick={() => scroll('left')} className="absolute left-2 top-1/2 -translate-y-1/2 z-30 bg-white shadow-xl rounded-full p-4">
              <FaChevronLeft />
            </button>
          )}

          <div ref={scrollRef} className="flex gap-6 overflow-x-auto scroll-smooth no-scrollbar px-4">
            {indiaExperienceData.map((item) => (
              <div 
                key={item.id} 
                onClick={() => navigate(`/experience/${item.id}`)} 
                className="min-w-[320px] md:min-w-[400px] cursor-pointer relative"
              >
                <div className="aspect-[4/5] overflow-hidden rounded-[2rem] bg-gray-200 shadow-lg">
                  <img src={item.img} alt={item.title} className="w-full h-full object-cover" />
                </div>
                <div className="absolute bottom-10 left-0 right-0 text-center px-6">
                  <h4 className="text-white text-3xl font-bold">{item.title}</h4>
                </div>
              </div>
            ))}
          </div>

          {showRightArrow && (
            <button onClick={() => scroll('right')} className="absolute right-2 top-1/2 -translate-y-1/2 z-30 bg-white shadow-xl rounded-full p-4">
              <FaChevronRight />
            </button>
          )}
        </div>

        {/* ✅ VIDEO SECTION (UNCHANGED) */}
        <div className="max-w-[1400px] mx-auto px-10 pb-24">
          <h3 className="text-4xl md:text-5xl font-serif text-gray-900 mb-8">A holiday that lasts a lifetime</h3>
          <div className="relative w-full aspect-video rounded-[1rem] overflow-hidden group cursor-pointer shadow-xl">
            <video autoPlay muted loop className="w-full h-full object-cover">
              <source src="https://v.ftcdn.net/05/52/15/23/700_F_552152344_4kO7YwY4E5E6U8F8R8y1u8S8G8k8L8M8_ST.mp4" type="video/mp4" />
            </video>
            <div className="absolute bottom-8 left-8 flex items-center gap-4 text-white">
              <div className="bg-white rounded-full p-3">
                <FaPlay className="text-black ml-1" />
              </div>
              <span className="text-2xl">Come and say G'day</span>
            </div>
          </div>
        </div>

        {/* Start Planning */}
        <div className="max-w-[1400px] mx-auto px-10 pb-32">
          <h3 className="text-4xl md:text-5xl font-serif text-gray-900 mb-12 text-left">Start planning</h3>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {startPlanningData.map((plan) => (
              <div key={plan.id} className="flex flex-col space-y-4 cursor-pointer group">
                <div className="overflow-hidden rounded-[1rem] h-64 shadow-sm">
                  <img src={plan.img} alt={plan.title} className="w-full h-full object-cover" />
                </div>
                <div>
                  <h4 className="text-2xl font-bold">{plan.title}</h4>
                  <p>{plan.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
};

export default GdaySection;