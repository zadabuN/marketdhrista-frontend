import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const StockDetail = () => {
  const { symbol } = useParams();
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchAnalysis = async () => {
      try {
        const res = await axios.get(`http://localhost:8000/analysis/${symbol}`);
        setData(res.data);
        setLoading(false);
      } catch (err) {
        console.error("Failed to fetch analysis:", err);
        setLoading(false);
      }
    };

    fetchAnalysis();
  }, [symbol]);

  if (loading) return <div className="p-4 text-xl">⏳ Loading {symbol} analysis...</div>;

  if (!data) return <div className="p-4 text-red-500">❌ Error loading data</div>;

  return (
    <div className="p-6 max-w-5xl mx-auto bg-white shadow rounded-xl">
      <h2 className="text-2xl font-semibold mb-4">{data.symbol} — Full Analysis</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
        <div>
          <h3 className="text-lg font-medium">📈 Technical Indicators</h3>
          <ul className="list-disc list-inside text-sm">
            <li>RSI: {data.technical.rsi}</li>
            <li>ADX: {data.technical.adx}</li>
            <li>MACD: {data.technical.macd}</li>
            <li>Volume Spike: {data.technical.volume_spike ? "✅ Yes" : "❌ No"}</li>
            <li>EMA Stack: {data.technical.ema_stack}</li>
            <li>Donchian Breakout: {data.technical.donchian_breakout ? "✅ Yes" : "❌ No"}</li>
            <li>RPI: {data.technical.rpi}</li>
          </ul>
        </div>

        <div>
          <h3 className="text-lg font-medium">💼 Fundamentals</h3>
          <ul className="list-disc list-inside text-sm">
            <li>PE Ratio: {data.fundamentals.pe_ratio}</li>
            <li>ROE: {data.fundamentals.roe}%</li>
            <li>Market Cap: ₹{data.fundamentals.market_cap_cr} Cr</li>
          </ul>
        </div>
      </div>

      <div className="mb-4">
        <h3 className="text-lg font-medium">🔍 Patterns Identified</h3>
        <p className="text-sm">{data.patterns.join(", ")}</p>
      </div>

      <div className="mb-4">
        <h3 className="text-lg font-medium">🧠 AI Signal Insights</h3>
        <p className="text-sm">AI Score: {data.ai_score} | Quality: {data.signal_quality}</p>
      </div>

      <div>
        <h3 className="text-lg font-medium">💡 Commentary</h3>
        <ul className="list-disc list-inside text-sm text-gray-700">
          {data.commentary.map((point, idx) => (
            <li key={idx}>{point}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default StockDetail;
