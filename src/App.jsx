import React, { useState, useEffect } from "react"; 
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom"; 
import 'leaflet/dist/leaflet.css';
import Footer from "./components/Footer";
import Header from "./components/Header/Header";
import Home from './pages/Home';
import Destinations from "./pages/Destinations";
import PlacesSection from "./NavbarData/PlacesSection";
import Thingssection from "./NavbarData/Thingssection"; 
import PlanSection from "./NavbarData/PlanSection"; 
import InspiredSection from "./NavbarData/InspiredSection";
import ExperienceDetails from "./Data/BeInspiredData/ExperienceDetails"; 
import VideoPlayerPage from "./Data/BeInspiredData/TravelInspirationData/VideoPlayerPage";
import TravelListPage from "./Data/BeInspiredData/TravelInspirationData/TravelListPage";
import IndiaReelsPlayerPage from './Data/BeInspiredData/TravelInspirationData/IndiaReelsPlayerPage';
import TravelStoryPlayer from "./Data/BeInspiredData/TravelInspirationData/TravelStoryPlayer";
import DiscoverStory from "./NavbarData/BeInspiredSection/DiscoverIndiaSection/DiscoverStory";
import TravelVideoPlayer from "./NavbarData/BeInspiredSection/TravelVideoSection/TravelVideoPlayer";
import TravelInspirationSection from "./NavbarData/BeInspiredSection/TravelInspirationSection/TravelInspirationSection";
import TopSection from "./pages/DestinationFiles/TopSection";
import RestaurantSection from "./pages/DestinationFiles/RestaurantSection";
import DiscoverSection from "./pages/DestinationFiles/DiscoverSection";
import NearPage from "./pages/DestinationFiles/NearPage";
import TripDetailPage from "./pages/DestinationFiles/TripDetailPage"; // 👈 NEW IMPORT

function AppContent() {
  const [activeMenu, setActiveMenu] = useState(null);
  const location = useLocation();

  useEffect(() => {
    setActiveMenu(null);
  }, [location.pathname]);

  const handleMenuToggle = (menuName) => {
    setActiveMenu(menuName);
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Header onToggleMenu={handleMenuToggle} />
      
      <main className="flex-grow relative">
        
        {/* MEGA MENU LOGIC */}
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

        {/* MAIN PAGE CONTENT */}
        {!activeMenu ? (
          <div className="transition-opacity duration-300">
            <Routes>
              <Route path="/" element={<Home />} />

              {/* Restaurant route – specific, above generic :slug */}
              <Route
                path="/destination/:slug/restaurants/:category"
                element={<RestaurantSection />}
              />

              {/* Discover routes – most specific first */}
              <Route
                path="/destination/:destinationId/discover/:category/:itemId"
                element={<DiscoverSection />}
              />
              <Route
                path="/destination/:destinationId/discover/:category"
                element={<DiscoverSection />}
              />
              <Route
                path="/destination/:destinationId/discover"
                element={<DiscoverSection />}
              />

              {/* Near Places Detail Route */}
              <Route
                path="/destination/:slug/near/:placeSlug"
                element={<NearPage />}
              />

              {/* Top things to do */}
              <Route
                path="/destination/:slug/top-things-to-do"
                element={<TopSection />}
              />

              {/* 👇 TRIP DETAIL ROUTE — must be above generic :slug */}
              <Route
                path="/destination/:slug/trip/:tripSlug"
                element={<TripDetailPage />}
              />

              {/* Destination home – LAST among /destination/* */}
              <Route path="/destination/:slug" element={<Destinations />} />

              {/* Other routes */}
              <Route path="/experience/:id" element={<ExperienceDetails />} />
              <Route path="/travel-inspiration" element={<TravelInspirationSection />} />
              <Route path="/video-player" element={<VideoPlayerPage />} />
              <Route path="/Travel-List-Page" element={<TravelListPage />} />
              <Route path="/reel-player" element={<IndiaReelsPlayerPage />} />
              <Route path="/travel-stories" element={<TravelStoryPlayer />} />
              <Route path="/travel-video/:id" element={<TravelVideoPlayer />} />
            </Routes>
          </div>
        ) : (
          <div className="h-screen bg-white" />
        )}
      </main>
      
      {!activeMenu && <Footer />}
    </div>
  );
}

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

export default App;