import React, { useEffect, useState } from "react";
import axios from "axios";

function DashboardSummary() {
  const [summary, setSummary] = useState(null);

  useEffect(() => {
    axios.get("http://localhost:8000/dashboard/summary")
      .then(res => setSummary(res.data))
      .catch(err => console.error("Error loading summary:", err));
  }, []);

  if (!summary) return <p>Loading...</p>;

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
      <div className="bg-white shadow rounded-xl p-4 border-l-4 border-blue-500">
        <h2 className="text-sm text-gray-500">Top AI-Ranked Stock</h2>
        <p className="text-lg font-bold text-gray-700">{summary.topStock}</p>
      </div>
      <div className="bg-white shadow rounded-xl p-4 border-l-4 border-green-500">
        <h2 className="text-sm text-gray-500">Best Signal Score</h2>
        <p className="text-lg font-bold text-gray-700">{summary.signalScore}</p>
      </div>
      <div className="bg-white shadow rounded-xl p-4 border-l-4 border-indigo-500">
        <h2 className="text-sm text-gray-500">Portfolio Value</h2>
        <p className="text-lg font-bold text-gray-700">₹{summary.portfolioValue.toLocaleString()}</p>
      </div>
      <div className="bg-white shadow rounded-xl p-4 border-l-4 border-yellow-500">
        <h2 className="text-sm text-gray-500">Market Sentiment</h2>
        <p className="text-lg font-bold text-gray-700">{summary.marketSentiment}</p>
      </div>
    </div>
  );
}

export default DashboardSummary;
