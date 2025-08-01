import React from "react";
import DashboardSummary from "../components/DashboardSummary";

function Home() {
  return (
    <div className="text-gray-800">
      <h1 className="text-2xl font-bold mb-4">Welcome to MarketDhrista</h1>
      <p className="mb-6">This is your personalized AI-driven trading and investing dashboard.</p>
      <DashboardSummary />
    </div>
  );
}

export default Home;
