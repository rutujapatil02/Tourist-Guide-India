import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Home from "./pages/Home";
import Destinations from "./pages/Destinations"; 

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Header />
        
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            {/* The routes handle displaying the content */}
            <Route path="/destination/:slug" element={<Destinations />} />
          </Routes>
        </main>

        <Footer />
        {/* REMOVED <Destinations/> from here! */}
      </div>
    </Router>
  );
}

export default App;