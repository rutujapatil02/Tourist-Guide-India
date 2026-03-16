import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Footer from "./components/Footer";
import Header from "./components/Header/Header";
import Home from "./pages/Home";
import Destinations from "./pages/Destinations";
import PlacesSection from "./places/PlacesSection";

function App() {
  const [showPlaces, setShowPlaces] = useState(false);

  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        {/* Pass the function to toggle the grid */}
        <Header onTogglePlaces={() => setShowPlaces(!showPlaces)} />
        
        <main className="flex-grow">
          {showPlaces ? (
            <div className="py-10">
              <PlacesSection />
            </div>
          ) : (
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/destination/:slug" element={<Destinations />} />
            </Routes>
          )}
        </main>
        <Footer />
      </div>
    </Router>
  );
}
export default App;