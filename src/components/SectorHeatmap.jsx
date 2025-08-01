// File: src/components/SectorHeatmap.jsx
import React, { useEffect, useState } from "react";
import axios from "axios";

function SectorHeatmap() {
  const [sectors, setSectors] = useState({});

  useEffect(() => {
    axios.get("http://localhost:8000/dashboard/sector-heatmap")
      .then(res => setSectors(res.data))
      .catch(err => console.error("Error fetching heatmap:", err));
  }, []);

  return (
    <div className="mt-6">
      <h2 className="text-lg font-semibold mb-2">📊 Sector Heatmap</h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
        {Object.entries(sectors).map(([sector, change]) => (
          <div key={sector} className={`rounded p-3 text-center shadow-md ${change.startsWith("+") ? "bg-green-100 text-green-800" : "bg-red-100 text-red-800"}`}>
            <h3 className="text-sm font-medium">{sector}</h3>
            <p className="text-md font-bold">{change}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default SectorHeatmap;


// File: src/pages/Home.jsx
import React from "react";
import DashboardSummary from "../components/DashboardSummary";
import TopGainers from "../components/TopGainers";
import SectorHeatmap from "../components/SectorHeatmap";

function Home() {
  return (
    <div className="text-gray-800">
      <h1 className="text-2xl font-bold mb-4">Welcome to MarketDhrista</h1>
      <p className="mb-6">This is your personalized AI-driven trading and investing dashboard.</p>
      <DashboardSummary />
      <TopGainers />
      <SectorHeatmap />
    </div>
  );
}

export default Home;


// File: src/pages/Signals.jsx
import React from "react";

function Signals() {
  return (
    <div className="text-gray-800">
      <h1 className="text-2xl font-bold mb-4">Signals</h1>
      <p>View daily breakout signals and watchlist based on our AI engine.</p>
    </div>
  );
}

export default Signals;


// File: src/pages/AIAnalysis.jsx
import React from "react";

function AIAnalysis() {
  return (
    <div className="text-gray-800">
      <h1 className="text-2xl font-bold mb-4">AI Analysis</h1>
      <p>Explore deep AI-powered rankings and stock quality scores here.</p>
    </div>
  );
}

export default AIAnalysis;


// File: src/pages/Portfolio.jsx
import React from "react";

function Portfolio() {
  return (
    <div className="text-gray-800">
      <h1 className="text-2xl font-bold mb-4">Portfolio</h1>
      <p>Track and manage your current trades, returns, and performance metrics.</p>
    </div>
  );
}

export default Portfolio;


// File: src/pages/Fundamentals.jsx
import React from "react";

function Fundamentals() {
  return (
    <div className="text-gray-800">
      <h1 className="text-2xl font-bold mb-4">Fundamental Insights</h1>
      <p>Analyze key ratios, Screener.in metrics, Tijori data, and stock quality here.</p>
    </div>
  );
}

export default Fundamentals;


// File: src/pages/Settings.jsx
import React from "react";

function Settings() {
  return (
    <div className="text-gray-800">
      <h1 className="text-2xl font-bold mb-4">Settings</h1>
      <p>Configure preferences, token access, alerts, and automation settings.</p>
    </div>
  );
}

export default Settings;
