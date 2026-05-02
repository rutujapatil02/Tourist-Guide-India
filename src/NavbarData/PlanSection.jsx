import React, { useState } from 'react';
import { FaArrowRight } from "react-icons/fa";

import { planData } from '../Data/PlanData'; 

import BeginnerSection from './PlanTrip/PlanningTools/BeginnerSection'; 
import VisasAndEntrySection from './VisasAndEntrySection';
import AboutIndiaSection from './AboutIndiaSection';
import WhenToGoSection from './WhenToGoSection';
import GettingHereSection from './GettingHereSection';
import GettingAroundSection from './GettingAroundSection';
import AccessibleSection from '../NavbarData/PlanTrip/PlanningTools/AccessibleSection';
import TipsSection from './PlanTrip/PlanningTools/TipsSection';
import PlannerSection from './PlanTrip/PlanningTools/PlannerSection';
import BudgetSection from './PlanTrip/PlanningTools/BudgetSection'; 
import ItinerarySection from './PlanTrip/PlanningTools/IntinerarySection';
import TravelSection from './PlanTrip/PlanningTools/TravalSection'; 
import AccomodationSection from './PlanTrip/PlanningTools/AccomodationSection';
import ToursSection from './PlanTrip/PlanningTools/ToursSection'; 
import TransportSection from './PlanTrip/PlanningTools/TransportSection';
import InformationCenterSection from './PlanTrip/PlanningTools/InformationCenterSection';

const PlanSection = ({ onClose }) => {
  const [activeTab, setActiveTab] = useState("Planning tools");
  
  const [showBeginnerGuide, setShowBeginnerGuide] = useState(false);
  const [showAccessibleSection, setShowAccessibleSection] = useState(false);
  const [showTipsSection, setShowTipsSection] = useState(false);
  const [showPlannerSection, setShowPlannerSection] = useState(false);
  const [showBudgetSection, setShowBudgetSection] = useState(false); 
  const [showItinerarySection, setShowItinerarySection] = useState(false);
  const [showTravelSection, setShowTravelSection] = useState(false); 
  const [showAccomodationSection, setShowAccomodationSection] = useState(false);
  const [showToursSection, setShowToursSection] = useState(false);
  const [showTransportSection, setShowTransportSection] = useState(false);
  const [showInfoSection, setShowInfoSection] = useState(false);
  const [infoType, setInfoType] = useState("history");

  const [whenToGoInDetail, setWhenToGoInDetail] = useState(false);
  const [gettingHereInDetail, setGettingHereInDetail] = useState(false);
  const [gettingAroundInDetail, setGettingAroundInDetail] = useState(false);

  const filteredItems = planData?.activities?.filter(
    (item) => item.category === activeTab
  ) || [];

  const handleTabChange = (cat) => {
    setActiveTab(cat);
    setShowBeginnerGuide(false); 
    setShowAccessibleSection(false);
    setShowTipsSection(false);
    setShowPlannerSection(false);
    setShowBudgetSection(false); 
    setShowItinerarySection(false);
    setShowTravelSection(false); 
    setShowAccomodationSection(false);
    setShowToursSection(false); 
    setShowTransportSection(false);
    setShowInfoSection(false);
    setWhenToGoInDetail(false);
    setGettingHereInDetail(false);
    setGettingAroundInDetail(false);
  };

  const isOverlayActive = 
    showBeginnerGuide || showAccessibleSection || showTipsSection || 
    showPlannerSection || showBudgetSection || showItinerarySection || 
    showTravelSection || showAccomodationSection || showToursSection || 
    showTransportSection || showInfoSection ||
    whenToGoInDetail ||
    gettingHereInDetail ||
    gettingAroundInDetail;

  return (
    <div className="bg-white min-h-screen">
      <div className={`${isOverlayActive ? 'w-full' : 'max-w-7xl mx-auto py-10 px-6'}`}>

        {/* Tabs – hide when overlay active */}
        {!isOverlayActive && (
          <div className="flex flex-wrap justify-center gap-3 mb-10">
            {planData?.categories?.map((cat) => (
              <button
                key={cat}
                onClick={() => handleTabChange(cat)}
                className={`px-6 py-2 rounded-full text-sm font-bold transition-all border ${
                  activeTab === cat ? 'bg-black text-white' : 'bg-gray-100 text-gray-500'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        )}

        {/* Sections */}
        {showBeginnerGuide ? (
          <BeginnerSection onHomeClick={() => setShowBeginnerGuide(false)} /> 
        ) : showAccessibleSection ? (
          <AccessibleSection onHomeClick={() => setShowAccessibleSection(false)} />
        ) : showTipsSection ? (
          <TipsSection onHomeClick={() => setShowTipsSection(false)} />
        ) : showPlannerSection ? (
          <PlannerSection onHomeClick={() => setShowPlannerSection(false)} />
        ) : showBudgetSection ? (
          <BudgetSection onHomeClick={() => setShowBudgetSection(false)} /> 
        ) : showItinerarySection ? (
          <ItinerarySection onHomeClick={() => setShowItinerarySection(false)} />
        ) : showTravelSection ? (
          <TravelSection onHomeClick={() => setShowTravelSection(false)} /> 
        ) : showAccomodationSection ? (
          <AccomodationSection onHomeClick={() => setShowAccomodationSection(false)} /> 
        ) : showToursSection ? (
          <ToursSection onHomeClick={() => setShowToursSection(false)} />
        ) : showTransportSection ? (
          <TransportSection onHomeClick={() => setShowTransportSection(false)} />
        ) : showInfoSection ? (
          <InformationCenterSection type={infoType} onHomeClick={() => setShowInfoSection(false)} />
        ) : (
          <>
            {activeTab === "Visas and entry" ? <VisasAndEntrySection /> 
            : activeTab === "About India" ? <AboutIndiaSection /> 
            : activeTab === "When to go" ? (
              <WhenToGoSection onViewChange={setWhenToGoInDetail} />
            )
            : activeTab === "Getting here" ? (
              <GettingHereSection onViewChange={setGettingHereInDetail} />
            )
            : activeTab === "Getting around" ? (
              <GettingAroundSection onViewChange={setGettingAroundInDetail} />
            )
            : (
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
                {filteredItems.map((item) => (
                  <div 
                    key={item.id} 
                    className="group cursor-pointer"
                    onClick={() => {
                      const itemName = item.name.toLowerCase().trim();

                      if (itemName.includes("beginner")) setShowBeginnerGuide(true);
                      else if (itemName.includes("accessible")) setShowAccessibleSection(true);
                      else if (itemName.includes("tips")) setShowTipsSection(true);
                      else if (itemName === "itinerary planner") setShowItinerarySection(true); 
                      else if (itemName === "trip planner") setShowPlannerSection(true); 
                      else if (itemName.includes("budget")) setShowBudgetSection(true); 
                      else if (itemName.includes("agent")) setShowTravelSection(true);
                      else if (itemName.includes("accommodation") || itemName.includes("stay")) setShowAccomodationSection(true);
                      else if (itemName.includes("tour")) setShowToursSection(true);
                      else if (itemName.includes("transport")) setShowTransportSection(true);
                      else if (itemName.includes("information") || itemName.includes("history") || itemName.includes("heritage")) {
                        setInfoType("history");
                        setShowInfoSection(true);
                      }
                      else if (itemName.includes("deals")) {
                        setInfoType("deals");
                        setShowInfoSection(true);
                      }
                      else if (itemName.includes("updates") || itemName.includes("daily")) {
                        setInfoType("updates");
                        setShowInfoSection(true);
                      }
                    }}
                  >
                    <div className="relative aspect-[3/2] w-full overflow-hidden rounded-xl bg-gray-100">
                      <img src={item.img} alt={item.name} className="w-full h-full object-cover transition-transform group-hover:scale-110" />
                    </div>
                    <div className="mt-2 text-center py-4 bg-gray-50 rounded-b-xl">
                      <span className="font-bold text-gray-900">{item.name}</span>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </>
        )}

      </div>
    </div>
  );
};

export default PlanSection;