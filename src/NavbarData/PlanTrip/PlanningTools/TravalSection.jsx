import React, { useState } from "react";
import { FaSearch, FaFacebookF, FaWhatsapp, FaLink } from "react-icons/fa";
import { travelData } from "../../../Data/PlanTrip/PlanningTools/TravalData";

const getRandomImage = (index) => {
  const images = [
    "https://randomuser.me/api/portraits/men/32.jpg",
    "https://randomuser.me/api/portraits/women/45.jpg",
    "https://randomuser.me/api/portraits/men/76.jpg",
    "https://randomuser.me/api/portraits/women/12.jpg",
    "https://randomuser.me/api/portraits/men/55.jpg",
  ];
  return images[index % images.length];
};

const TravelSection = ({ onHomeClick }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedAgent, setSelectedAgent] = useState(null);

  // Filter logic for searching states
  const filteredStates = travelData.states.filter((s) =>
    s.state.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="w-full bg-white min-h-screen pb-20">
      {/* 🔹 TEAL BREADCRUMB HEADER */}
      <div className="w-full bg-[#3296a8] py-3 px-10 flex gap-2 text-white text-xs uppercase tracking-widest">
        <span onClick={onHomeClick} className="cursor-pointer hover:underline">Home</span>
        <span>&gt;</span>
        <span>Plan your trip</span>
        <span>&gt;</span>
        <span className="font-bold">Find a travel agent</span>
      </div>

      {/* 🔹 HERO IMAGE */}
      <div className="w-full h-[120vh] relative">
        <img
          src={travelData.heroImg}
          alt="Hero"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/10"></div>
      </div>

      {/* 🔹 OVERLAPPING WHITE CARD */}
      <div className="max-w-9xl mx-auto px-6 -mt-32 relative z-10">
        <div className="bg-white rounded-t-[3.5rem] p-12 shadow-sm border-b border-gray-100">
          
          {/* Main Title Section */}
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-7xl font-serif italic font-bold text-gray-900 mb-6">
              {travelData.title}
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              {travelData.subtitle}
            </p>

            {/* Social Sharing Icons */}
            <div className="flex justify-center gap-4 mt-8">
              <div className="bg-[#3b5998] text-white p-3 rounded-full cursor-pointer hover:scale-110 transition-transform">
                <FaFacebookF />
              </div>
              <div className="bg-[#25D366] text-white p-3 rounded-full cursor-pointer hover:scale-110 transition-transform">
                <FaWhatsapp />
              </div>
              <div className="bg-gray-800 text-white p-3 rounded-full cursor-pointer hover:scale-110 transition-transform">
                <FaLink />
              </div>
            </div>
          </div>

          {/* Descriptive Text Blocks */}
          <div className="grid md:grid-cols-2 gap-10 text-gray-600 max-w-4xl mx-auto mb-20 text-center md:text-left">
            <p className="leading-relaxed font-light">
              There are thousands of great Indian travel experiences to choose from. 
              Chances are, your travel expert has experienced or planned them before.
            </p>
            <p className="leading-relaxed font-light">
              Experts on everything India, these specialists receive extensive training 
              and have deep knowledge to help you plan your perfect trip.
            </p>
          </div>

          {/* 🔹 SEARCH BAR SECTION (Styled like your image) */}
          <div className="max-w-4xl mx-auto mb-16">
            <h2 className="text-3xl font-serif italic font-bold mb-6 text-gray-800">
              Search for a travel specialist
            </h2>
            <div className="relative group">
              <input
                type="text"
                placeholder="Search state..."
                className="w-full pl-14 pr-6 py-5 bg-gray-50 border border-gray-100 rounded-2xl text-lg outline-none focus:bg-white focus:ring-2 focus:ring-[#3296a8]/20 transition-all shadow-inner"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
              <FaSearch className="absolute left-6 top-6 text-gray-400 text-xl group-focus-within:text-[#3296a8]" />
            </div>
          </div>

          {/* 🔹 AGENT LISTINGS */}
          <div className="max-w-4xl mx-auto space-y-12">
            {filteredStates.length > 0 ? (
              filteredStates.map((state) => (
                <div key={state.id} className="animate-in fade-in slide-in-from-bottom-4 duration-500">
                  <h3 className="text-sm font-bold uppercase tracking-[0.3em] text-[#3296a8] mb-6 border-l-4 border-[#3296a8] pl-4">
                    {state.state}
                  </h3>

                  <div className="space-y-4">
                    {state.guides.map((agent, i) => (
                      <div
                        key={i}
                        className="flex flex-col md:flex-row justify-between items-center bg-white border border-gray-100 p-8 rounded-3xl hover:shadow-xl transition-all group"
                      >
                        <div className="flex gap-6 items-center mb-6 md:mb-0">
                          <div className="relative">
                            <img
                              src={getRandomImage(i + state.id)}
                              className="w-20 h-20 rounded-full object-cover border-4 border-gray-50 group-hover:border-[#3296a8]/20 transition-colors"
                              alt={agent.name}
                            />
                            <div className="absolute bottom-1 right-1 w-4 h-4 bg-green-500 border-2 border-white rounded-full"></div>
                          </div>

                          <div>
                            <h4 className="font-bold text-xl text-gray-900 group-hover:text-[#3296a8] transition-colors">{agent.name}</h4>
                            <p className="text-gray-500 font-medium italic">{agent.specialty}</p>
                            <p className="text-xs text-gray-400 mt-1 uppercase tracking-tighter">Verified Agent</p>
                          </div>
                        </div>

                        <button
                          onClick={() => setSelectedAgent(agent)}
                          className="bg-[#FFD700] hover:bg-[#ffc400] text-black px-10 py-3 rounded-full font-bold transition-all transform active:scale-95 shadow-md"
                        >
                          Contact agent
                        </button>
                      </div>
                    ))}
                  </div>
                </div>
              ))
            ) : (
              <div className="text-center py-20">
                <p className="text-gray-400 text-lg">No agents found for "{searchTerm}"</p>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* 🔹 CONTACT MODAL */}
      {selectedAgent && (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex justify-center items-center z-50 p-4">
          <div className="bg-white p-10 rounded-[2.5rem] w-full max-w-md relative animate-in zoom-in duration-300">
            <button
              onClick={() => setSelectedAgent(null)}
              className="absolute right-6 top-6 text-gray-400 hover:text-black transition-colors"
            >
              ✕
            </button>

            <div className="text-center mb-8">
              <h2 className="text-2xl font-bold text-gray-900">Contact Agent</h2>
              <p className="text-[#3296a8] font-medium mt-1">{selectedAgent.name}</p>
            </div>

            <form
              onSubmit={(e) => {
                e.preventDefault();
                alert(`Message sent to ${selectedAgent.name}!`);
                setSelectedAgent(null);
              }}
              className="space-y-4"
            >
              <input type="text" placeholder="Your Full Name" className="w-full p-4 bg-gray-50 rounded-xl outline-none focus:ring-2 focus:ring-[#3296a8]/20" required />
              <input type="email" placeholder="Email Address" className="w-full p-4 bg-gray-50 rounded-xl outline-none focus:ring-2 focus:ring-[#3296a8]/20" required />
              <textarea placeholder="Tell us about your trip plans..." rows="4" className="w-full p-4 bg-gray-50 rounded-xl outline-none focus:ring-2 focus:ring-[#3296a8]/20 resize-none" required></textarea>

              <button className="w-full bg-black text-white py-4 rounded-xl font-bold hover:bg-gray-800 transition-all shadow-lg">
                Send Enquiry
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default TravelSection;