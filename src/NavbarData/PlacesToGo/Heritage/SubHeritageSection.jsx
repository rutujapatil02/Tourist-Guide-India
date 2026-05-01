// src/Components/PlacesToGo/Heritage/SubHeritageSection.jsx

import { useState, useRef } from "react";

// ─── Constants ────────────────────────────────────────────────────────────────

const NAV_TABS = ["Welcome", "Aboriginal", "Getting There", "When to Visit", "Accessibility"];

const PLANNING_TABS = ["Accommodation", "Events", "Experiences", "Eat and Drink", "Transport"];

const PLANNING_KEY_MAP = {
  Accommodation: "accommodation",
  Events: "events",
  Experiences: "experiences",
  "Eat and Drink": "eatAndDrink",
  Transport: "transport",
};

// ─── Tab content generator ────────────────────────────────────────────────────

const TAB_CONTENT = {
  Welcome: (place) => ({
    bold: `The ancient wonders of ${place.name} rise from ${place.location} to make an incredible sight. Immerse yourself in the stories of this special place, centuries in the making.`,
    body: place.description,
  }),
  Aboriginal: (place) => ({
    bold: `${place.name} holds profound spiritual significance for the indigenous communities who have called this land home for thousands of years.`,
    body: `Long before it became a UNESCO World Heritage Site, ${place.name} was a living cultural landscape. Local custodians continue to practise ancient traditions, art forms, and ceremonies that connect the present to a deep and unbroken past.`,
  }),
  "Getting There": (place) => ({
    bold: `Reaching ${place.name} in ${place.location} is straightforward with several comfortable transport options available year-round.`,
    body: `The nearest major city provides the best gateway by air, train, or road. From there, local buses, shared taxis, and private cabs cover the remaining distance to the site.`,
  }),
  "When to Visit": (place) => ({
    bold: `${place.name} is a year-round destination, but certain months offer the most comfortable conditions and a full calendar of events.`,
    body: `Early mornings deliver the most magical light for photography and the smallest crowds. Monsoon season can bring seasonal closures to some areas but also a dramatic, lush landscape.`,
  }),
  Accessibility: (place) => ({
    bold: `${place.name} is committed to providing an inclusive experience for all visitors, with a range of accessibility facilities available on-site.`,
    body: `Wheelchair-accessible pathways connect key viewing areas and facilities. Audio guides and tactile exhibits are available on request.`,
  }),
};

// ─── Arrow Icon ───────────────────────────────────────────────────────────────

function ArrowIcon({ dir }) {
  return (
    <svg
      width="18" height="18" viewBox="0 0 24 24"
      fill="none" stroke="currentColor"
      strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"
    >
      {dir === "left"
        ? <polyline points="15 18 9 12 15 6" />
        : <polyline points="9 18 15 12 9 6" />}
    </svg>
  );
}

// ─── Breadcrumb Link ──────────────────────────────────────────────────────────

function BreadcrumbLink({ onClick, children, active }) {
  const [hov, setHov] = useState(false);
  return (
    <span
      onClick={!active ? onClick : undefined}
      onMouseEnter={() => !active && setHov(true)}
      onMouseLeave={() => setHov(false)}
      style={{
        cursor: active ? "default" : "pointer",
        fontWeight: active ? 700 : 400,
        opacity: active ? 1 : hov ? 1 : 0.85,
        textDecoration: !active && hov ? "underline" : "none",
        transition: "opacity 0.15s",
      }}
    >
      {children}
    </span>
  );
}

// ─── Horizontal Scroll Row ────────────────────────────────────────────────────

function ScrollRow({ children }) {
  const ref = useRef(null);
  const [leftHov, setLeftHov] = useState(false);
  const [rightHov, setRightHov] = useState(false);
  const scroll = (dir) => ref.current?.scrollBy({ left: dir * 340, behavior: "smooth" });

  const btnBase = {
    position: "absolute",
    top: "50%", transform: "translateY(-50%)",
    zIndex: 10, width: 44, height: 44,
    borderRadius: "50%", border: "2px solid #111",
    cursor: "pointer",
    display: "flex", alignItems: "center", justifyContent: "center",
    boxShadow: "0 2px 10px rgba(0,0,0,0.13)",
    transition: "background 0.18s, color 0.18s",
  };

  return (
    <div style={{ position: "relative" }}>
      <button
        onClick={() => scroll(-1)}
        onMouseEnter={() => setLeftHov(true)}
        onMouseLeave={() => setLeftHov(false)}
        style={{ ...btnBase, left: -22, background: leftHov ? "#111" : "#fff", color: leftHov ? "#fff" : "#111" }}
      >
        <ArrowIcon dir="left" />
      </button>

      <div
        ref={ref}
        style={{
          display: "flex", gap: 20,
          overflowX: "auto", scrollbarWidth: "none",
          msOverflowStyle: "none", paddingBottom: 6,
        }}
      >
        {children}
      </div>

      <button
        onClick={() => scroll(1)}
        onMouseEnter={() => setRightHov(true)}
        onMouseLeave={() => setRightHov(false)}
        style={{ ...btnBase, right: -22, background: rightHov ? "#111" : "#fff", color: rightHov ? "#fff" : "#111" }}
      >
        <ArrowIcon dir="right" />
      </button>
    </div>
  );
}

// ─── Things To Do Card ────────────────────────────────────────────────────────

function ThingsCard({ item }) {
  const [hov, setHov] = useState(false);
  return (
    <div
      onMouseEnter={() => setHov(true)}
      onMouseLeave={() => setHov(false)}
      style={{
        minWidth: 300, maxWidth: 300, flexShrink: 0,
        borderRadius: 14, overflow: "hidden", background: "#fff",
        boxShadow: hov ? "0 10px 28px rgba(0,0,0,0.15)" : "0 2px 12px rgba(0,0,0,0.08)",
        transform: hov ? "translateY(-4px)" : "none",
        transition: "all 0.22s ease", cursor: "pointer",
      }}
    >
      <div style={{ height: 196, overflow: "hidden" }}>
        <img
          src={item.image} alt={item.title}
          style={{
            width: "100%", height: "100%", objectFit: "cover",
            transform: hov ? "scale(1.06)" : "scale(1)",
            transition: "transform 0.4s ease",
          }}
        />
      </div>
      <div style={{ padding: "16px 18px 20px" }}>
        <p style={{ margin: "0 0 8px", fontFamily: "'Georgia', serif", fontWeight: 700, fontSize: 15, color: "#111" }}>
          {item.title}
        </p>
        <p style={{ margin: 0, fontSize: 13, color: "#555", lineHeight: 1.6 }}>
          {item.description}
        </p>
      </div>
    </div>
  );
}

// ─── Itinerary Card ───────────────────────────────────────────────────────────

function ItineraryCard({ item }) {
  const [hov, setHov] = useState(false);
  return (
    <div
      onMouseEnter={() => setHov(true)}
      onMouseLeave={() => setHov(false)}
      style={{
        minWidth: 230, maxWidth: 230, flexShrink: 0,
        height: 280, borderRadius: 14, overflow: "hidden",
        position: "relative", cursor: "pointer",
        boxShadow: hov ? "0 10px 28px rgba(0,0,0,0.18)" : "0 2px 10px rgba(0,0,0,0.1)",
        transform: hov ? "translateY(-4px)" : "none",
        transition: "all 0.22s ease",
      }}
    >
      <img
        src={item.image} alt={item.title}
        style={{
          width: "100%", height: "100%", objectFit: "cover",
          transform: hov ? "scale(1.06)" : "scale(1)",
          transition: "transform 0.4s ease",
        }}
      />
      <div style={{
        position: "absolute", inset: 0,
        background: "linear-gradient(to top, rgba(0,0,0,0.72) 40%, rgba(0,0,0,0.04) 85%)",
        display: "flex", alignItems: "flex-end", padding: "20px 16px",
      }}>
        <span style={{ color: "#fff", fontFamily: "'Georgia', serif", fontWeight: 700, fontSize: 15, lineHeight: 1.35 }}>
          {item.title}
        </span>
      </div>
    </div>
  );
}

// ─── Planning Card ────────────────────────────────────────────────────────────

function PlanningCard({ item }) {
  const [hov, setHov] = useState(false);
  return (
    <div
      onMouseEnter={() => setHov(true)}
      onMouseLeave={() => setHov(false)}
      style={{
        minWidth: 240, maxWidth: 240, flexShrink: 0,
        borderRadius: 14, overflow: "hidden", background: "#fff",
        boxShadow: hov ? "0 10px 28px rgba(0,0,0,0.15)" : "0 2px 12px rgba(0,0,0,0.08)",
        transform: hov ? "translateY(-4px)" : "none",
        transition: "all 0.22s ease", cursor: "pointer",
      }}
    >
      <div style={{ height: 155, overflow: "hidden" }}>
        <img
          src={item.image} alt={item.name}
          style={{
            width: "100%", height: "100%", objectFit: "cover",
            transform: hov ? "scale(1.06)" : "scale(1)",
            transition: "transform 0.4s ease",
          }}
        />
      </div>
      <div style={{ padding: "14px 16px 18px" }}>
        <p style={{ margin: "0 0 4px", fontWeight: 700, fontSize: 14, color: "#111" }}>{item.name}</p>
        <p style={{ margin: "0 0 8px", fontSize: 12, color: "#777" }}>{item.type}</p>
        {item.price && (
          <p style={{ margin: 0, fontSize: 13, color: "#222", fontWeight: 600 }}>{item.price}</p>
        )}
      </div>
    </div>
  );
}

// ─── Nearby Card ─────────────────────────────────────────────────────────────

function NearbyCard({ item }) {
  const [hov, setHov] = useState(false);
  return (
    <div
      onMouseEnter={() => setHov(true)}
      onMouseLeave={() => setHov(false)}
      style={{
        flex: "1 1 0", minWidth: 200,
        height: 240, borderRadius: 14, overflow: "hidden",
        position: "relative", cursor: "pointer",
        boxShadow: hov ? "0 10px 28px rgba(0,0,0,0.18)" : "0 2px 10px rgba(0,0,0,0.1)",
        transition: "box-shadow 0.22s ease",
      }}
    >
      <img
        src={item.image} alt={item.name}
        style={{
          width: "100%", height: "100%", objectFit: "cover",
          transform: hov ? "scale(1.07)" : "scale(1)",
          transition: "transform 0.4s ease",
        }}
      />
      <div style={{
        position: "absolute", inset: 0,
        background: "linear-gradient(to top, rgba(0,0,0,0.62) 35%, transparent 70%)",
        display: "flex", alignItems: "flex-end", padding: "20px 18px",
      }}>
        <span style={{ color: "#fff", fontFamily: "'Georgia', serif", fontWeight: 700, fontSize: 18 }}>
          {item.name}
        </span>
      </div>
    </div>
  );
}

// ─── Traveller Story Card ─────────────────────────────────────────────────────

function StoryCard({ item, large }) {
  const [hov, setHov] = useState(false);
  return (
    <div
      onMouseEnter={() => setHov(true)}
      onMouseLeave={() => setHov(false)}
      style={{
        position: "relative",
        borderRadius: 16,
        overflow: "hidden",
        cursor: "pointer",
        gridRow: large ? "span 2" : "span 1",
        boxShadow: hov ? "0 12px 32px rgba(0,0,0,0.2)" : "0 2px 12px rgba(0,0,0,0.1)",
        transition: "box-shadow 0.22s ease",
        minHeight: large ? 480 : 220,
      }}
    >
      <img
        src={item.image}
        alt={item.title}
        style={{
          width: "100%", height: "100%", objectFit: "cover",
          transform: hov ? "scale(1.05)" : "scale(1)",
          transition: "transform 0.5s ease",
          position: "absolute", inset: 0,
        }}
      />
      <div style={{
        position: "absolute", inset: 0,
        background: "linear-gradient(to top, rgba(0,0,0,0.78) 45%, rgba(0,0,0,0.02) 80%)",
        display: "flex", flexDirection: "column",
        justifyContent: "flex-end", padding: "20px 18px",
      }}>
        <p style={{
          margin: "0 0 6px",
          fontFamily: "'Georgia', serif",
          fontWeight: 700, fontSize: large ? 17 : 14,
          color: "#fff", lineHeight: 1.3,
        }}>
          {item.title}
        </p>
        {large && (
          <p style={{
            margin: "0 0 10px",
            fontSize: 13, color: "rgba(255,255,255,0.82)",
            lineHeight: 1.55,
          }}>
            {item.text}
          </p>
        )}
        <p style={{ margin: 0, fontSize: 12, color: "rgba(255,255,255,0.6)", fontWeight: 600 }}>
          — {item.author}
        </p>
      </div>
    </div>
  );
}

// ─── Section Heading ──────────────────────────────────────────────────────────

function SectionHeading({ children }) {
  return (
    <h2 style={{
      fontFamily: "'Georgia', serif",
      fontSize: "clamp(24px, 3vw, 34px)",
      fontWeight: 700, color: "#111",
      margin: "0 0 28px", letterSpacing: "-0.5px",
    }}>
      {children}
    </h2>
  );
}

// ─── Main Component ───────────────────────────────────────────────────────────

export default function SubHeritageSection({ place, onNavigate }) {
  const [activeNavTab, setActiveNavTab] = useState("Welcome");
  const [activePlanningTab, setActivePlanningTab] = useState("Accommodation");
  const [mapHov, setMapHov] = useState(false);

  if (!place) return null;

  const tabContent = TAB_CONTENT[activeNavTab]?.(place) ?? TAB_CONTENT["Welcome"](place);
  const planningKey = PLANNING_KEY_MAP[activePlanningTab];
  const planningItems = place.startPlanning?.[planningKey] ?? [];
  const stories = place.travellerStories ?? [];
  const topThingsToDo = place.topThingsToDo ?? [];
  const tripsAndItineraries = place.tripsAndItineraries ?? [];
  const placesNearby = place.placesNearby ?? [];

  return (
    <div style={{ fontFamily: "'Helvetica Neue', Helvetica, Arial, sans-serif", background: "#f5f5f5", color: "#111" }}>

      {/* ══ HERO IMAGE ════════════════════════════════════════════════════════ */}
      <div style={{ position: "relative", height: "clamp(420px, 55vw, 580px)", overflow: "hidden" }}>
        <img
          src={place.heroImage}
          alt={place.name}
          style={{ width: "100%", height: "100%", objectFit: "cover" }}
        />

        <div style={{
          position: "absolute", inset: 0,
          background: "linear-gradient(160deg, rgba(0,0,0,0.06) 0%, rgba(0,0,0,0.62) 100%)",
        }} />

        {/* Breadcrumb bar overlaid on hero */}
        <div style={{
          position: "absolute", top: 0, left: 0, right: 0,
          background: "rgba(0,175,155,0.88)",
          backdropFilter: "blur(4px)",
          padding: "11px 40px",
          display: "flex", alignItems: "center", gap: 8,
          fontSize: 13, color: "#fff",
        }}>
          <BreadcrumbLink onClick={() => onNavigate?.("home")}>Home</BreadcrumbLink>
          <span style={{ opacity: 0.55 }}>›</span>
          <BreadcrumbLink onClick={() => onNavigate?.("placesToGo")}>Places to go</BreadcrumbLink>
          <span style={{ opacity: 0.55 }}>›</span>
          <BreadcrumbLink active>Guide to {place.name}</BreadcrumbLink>
        </div>

        {/* Hero title + location */}
        <div style={{
          position: "absolute", bottom: 80, left: 0, right: 0,
          padding: "0 60px",
        }}>
          <h1 style={{
            fontFamily: "'Georgia', serif",
            fontSize: "clamp(32px, 5vw, 60px)",
            color: "#fff", margin: 0,
            fontWeight: 700, letterSpacing: "-1px",
            textShadow: "0 2px 12px rgba(0,0,0,0.3)",
          }}>
            Guide to {place.name}
          </h1>
          <p style={{ margin: "10px 0 0", color: "rgba(255,255,255,0.82)", fontSize: 15, display: "flex", alignItems: "center", gap: 6 }}>
             {place.location}
          </p>
        </div>
      </div>

      {/* ══ CONTENT CARD ═════════════════════════════════════════════════════ */}
      {/* CHANGES: borderRadius: 0 and max-width / margin for width control */}
      <div style={{
        background: "#fff",
        borderRadius: 0, // Removed curve
        marginTop: -60,
        position: "relative",
        zIndex: 10,
        boxShadow: "0 -4px 24px rgba(0,0,0,0.10)",
        minHeight: "100vh",
        maxWidth: "1280px", // Less than screen width
        margin: "-60px auto 0", // Center the card
      }}>

        {/* ══ STICKY NAV TABS ═════════════════════════════════════════════════ */}
        <div style={{
          position: "sticky", top: 0, zIndex: 100,
          background: "#fff",
          borderBottom: "1.5px solid #e8e8e8",
          boxShadow: "0 2px 10px rgba(0,0,0,0.06)",
        }}>
          <div style={{
            maxWidth: 1120, margin: "0 auto",
            display: "flex", padding: "0 40px",
            overflowX: "auto", scrollbarWidth: "none",
          }}>
            {NAV_TABS.map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveNavTab(tab)}
                style={{
                  padding: "17px 22px",
                  border: "none",
                  borderBottom: activeNavTab === tab ? "3px solid #111" : "3px solid transparent",
                  background: "none", cursor: "pointer",
                  fontWeight: activeNavTab === tab ? 700 : 400,
                  fontSize: 14,
                  color: activeNavTab === tab ? "#111" : "#666",
                  transition: "color 0.18s",
                }}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>

        {/* TAB CONTENT + MAP */}
        <div style={{ maxWidth: 1120, margin: "0 auto", padding: "52px 40px 0" }}>
          <div style={{ display: "flex", gap: 64, alignItems: "flex-start", flexWrap: "wrap" }}>
            <div style={{ flex: "1 1 420px", minWidth: 0 }}>
              <p style={{ fontFamily: "'Georgia', serif", fontSize: 19, fontWeight: 700, lineHeight: 1.55, margin: "0 0 18px" }}>
                {tabContent.bold}
              </p>
              <p style={{ fontSize: 15, color: "#444", lineHeight: 1.8, margin: 0 }}>
                {tabContent.body}
              </p>
            </div>

            <div style={{ width: 260, borderRadius: 14, overflow: "hidden", border: "1px solid #e5e5e5" }}>
              <div style={{ height: 175, background: "#cfe3ec", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center" }}>
                <span style={{ fontWeight: 600 }}>{place.location}</span>
              </div>
              <div style={{ padding: "14px 16px" }}>
                <button
                  onMouseEnter={() => setMapHov(true)}
                  onMouseLeave={() => setMapHov(false)}
                  style={{ width: "100%", padding: "10px 0", border: "2px solid #111", borderRadius: 30, background: mapHov ? "#111" : "transparent", color: mapHov ? "#fff" : "#111", cursor: "pointer", fontWeight: 700, fontSize: 13, transition: "background 0.18s, color 0.18s" }}
                >
                  View full map
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* TOP THINGS TO DO */}
        <section style={{ maxWidth: 1120, margin: "72px auto 0", padding: "0 40px" }}>
          <SectionHeading>Top things to do in {place.name}</SectionHeading>
          <ScrollRow>
            {topThingsToDo.map((item) => <ThingsCard key={item.id} item={item} />)}
          </ScrollRow>
        </section>

        {/* TRIPS & ITINERARIES */}
        <section style={{ maxWidth: 1120, margin: "72px auto 0", padding: "0 40px" }}>
          <SectionHeading>{place.name} trips and itineraries</SectionHeading>
          <ScrollRow>
            {tripsAndItineraries.map((item) => <ItineraryCard key={item.id} item={item} />)}
          </ScrollRow>
        </section>

        {/* START PLANNING */}
        <section style={{ maxWidth: 1120, margin: "72px auto 0", padding: "0 40px" }}>
          <SectionHeading>Start planning</SectionHeading>
          <div style={{ display: "flex", gap: 10, flexWrap: "wrap", marginBottom: 32 }}>
            {PLANNING_TABS.map((tab) => (
              <button
                key={tab}
                onClick={() => setActivePlanningTab(tab)}
                style={{ padding: "10px 22px", borderRadius: 30, border: activePlanningTab === tab ? "2px solid #111" : "2px solid #ccc", background: activePlanningTab === tab ? "#111" : "#fff", color: activePlanningTab === tab ? "#fff" : "#333", cursor: "pointer", fontWeight: activePlanningTab === tab ? 700 : 400 }}
              >
                {tab}
              </button>
            ))}
          </div>
          <ScrollRow>
            {planningItems.map((item) => <PlanningCard key={item.id} item={item} />)}
          </ScrollRow>
        </section>

        {/* PLACES NEARBY */}
        <section style={{ maxWidth: 1120, margin: "72px auto 0", padding: "0 40px" }}>
          <SectionHeading>Places to visit near {place.name}</SectionHeading>
          <div style={{ display: "flex", gap: 20, flexWrap: "wrap" }}>
            {placesNearby.map((item) => <NearbyCard key={item.id} item={item} />)}
          </div>
        </section>

        {/* TRAVELLERS' STORIES */}
        {stories.length > 0 && (
          <section style={{ maxWidth: 1120, margin: "72px auto 0", padding: "0 40px" }}>
            <SectionHeading>Travellers' stories</SectionHeading>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))", gridAutoRows: "220px", gap: 16 }}>
              {stories.map((story, idx) => (
                <StoryCard key={story.id} item={story} large={idx === 0} />
              ))}
            </div>
          </section>
        )}

        <div style={{ height: 100 }} />
      </div>

    </div>
  );
}