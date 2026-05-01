// src/NavbarData/ThingsToDo/Sustainable/LocalCraftSection.jsx
import React, { useRef } from "react";
import { useNavigate } from "react-router-dom";
import { LocalCraftData } from "../../../Data/ThingsToDo/Sustainable/LocalCraftData";

const LocalCraftSection = () => {
  const scrollRef = useRef(null);
  const navigate = useNavigate();

  return (
    <section style={{ padding: "60px 60px" }}>
      <h2 style={{ fontFamily: "serif", fontSize: "2rem" }}>Shop local, support local craft</h2>
      <div style={{ display: "flex", gap: "24px", overflowX: "auto", padding: "20px 0" }} ref={scrollRef}>
        {LocalCraftData.map((item) => (
          <div 
            key={item.id} 
            onClick={() => navigate(item.link)} // Dynamically goes to /textiles-of-india
            style={{ minWidth: "340px", cursor: "pointer", border: "1px solid #eee", borderRadius: "10px" }}
          >
            <img src={item.image} alt={item.title} style={{ width: "100%", height: "220px", objectFit: "cover" }} />
            <div style={{ padding: "15px" }}>
              <span style={{ color: "#e07b39", fontWeight: "bold" }}>{item.category}</span>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
export default LocalCraftSection;