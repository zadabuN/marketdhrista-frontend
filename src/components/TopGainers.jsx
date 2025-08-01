// File: src/components/TopGainers.jsx
import React, { useEffect, useState } from "react";
import axios from "axios";

function TopGainers() {
  const [gainers, setGainers] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:8000/dashboard/top-gainers")
      .then(res => setGainers(res.data))
      .catch(err => console.error("Failed to fetch top gainers", err));
  }, []);

  return (
    <div className="bg-white shadow rounded-xl p-4 mt-6">
      <h2 className="text-lg font-semibold text-gray-700 mb-4">Top Gainers</h2>
      <ul className="divide-y divide-gray-200">
        {gainers.map((stock, index) => (
          <li key={index} className="py-2 flex justify-between">
            <span className="font-medium text-gray-800">{stock.symbol}</span>
            <span className="text-green-600 font-semibold">{stock.change}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TopGainers;


// File: src/pages/Home.jsx
import React from "react";
import DashboardSummary from "../components/DashboardSummary";
import TopGainers from "../components/TopGainers";

function Home() {
  return (
    <div className="text-gray-800">
      <h1 className="text-2xl font-bold mb-4">Welcome to MarketDhrista</h1>
      <p className="mb-6">This is your personalized AI-driven trading and investing dashboard.</p>
      <DashboardSummary />
      <TopGainers />
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
