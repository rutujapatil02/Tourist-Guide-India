import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Footer from "./components/Footer";
import Header from "./components/Header/Header";
import Home from "./pages/Home";
import Destinations from "./pages/Destinations";
import PlacesSection from "./NavbarData/PlacesSection";
import Thingssection from "./NavbarData/Thingssection"; 
import PlanSection from "./NavbarData/PlanSection"; 
import InspiredSection from "./NavbarData/InspiredSection"; // Import the new section

function App() {
  const [activeMenu, setActiveMenu] = useState(null);

  const handleMenuToggle = (menuName) => {
    setActiveMenu(menuName);
  };

  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Header onToggleMenu={handleMenuToggle} />
        
        <main className="flex-grow relative">
          
          {/* 1. MEGA MENU LOGIC - All menus now use absolute positioning and bg-white */}
          {activeMenu === "Be inspired" && (
            <div className="absolute top-0 left-0 w-full min-h-screen bg-white z-50">
              <InspiredSection />
            </div>
          )}

          {activeMenu === "Places to go" && (
            <div className="absolute top-0 left-0 w-full min-h-screen bg-white z-50">
              <PlacesSection />
            </div>
          )}

          {activeMenu === "Things to do" && (
            <div className="absolute top-0 left-0 w-full min-h-screen bg-white z-50">
              <Thingssection />
            </div>
          )}

          {activeMenu === "Plan your trip" && (
            <div className="absolute top-0 left-0 w-full min-h-screen bg-white z-50">
              <PlanSection />
            </div>
          )}

          {/* 2. MAIN PAGE CONTENT Logic
              We hide the Routes when activeMenu is NOT null to prevent the Home data 
              from appearing at the bottom of your dropdowns.
          */}
          {!activeMenu ? (
            <div className="transition-opacity duration-300">
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/destination/:slug" element={<Destinations />} />
              </Routes>
            </div>
          ) : (
            /* Placeholder to maintain scroll height while menu is open */
            <div className="h-screen bg-white" />
          )}
        </main>
        
        {/* 3. Hide Footer when a menu is open for a professional look */}
        {!activeMenu && <Footer />}
      </div>
    </Router>
  );
}

export default App;