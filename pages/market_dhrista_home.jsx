import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function MarketDhristaHome() {
  return (
    <div className="min-h-screen bg-gray-100 p-4">
      <header className="bg-white shadow-md rounded-2xl p-6 mb-4">
        <h1 className="text-3xl font-bold text-gray-800">📊 MarketDhrista</h1>
        <p className="text-gray-500">Your AI-powered trading and investing assistant</p>
      </header>

      <main className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <Card>
          <CardContent>
            <h2 className="text-xl font-semibold">💹 Technical Signals</h2>
            <p className="text-gray-600">AI-analyzed signals based on Donchian, RSI, ADX, Volume Spike</p>
            <Button className="mt-2">View Signals</Button>
          </CardContent>
        </Card>

        <Card>
          <CardContent>
            <h2 className="text-xl font-semibold">📈 Portfolio Overview</h2>
            <p className="text-gray-600">Current Holdings, P&L, Allocation, Risk</p>
            <Button className="mt-2">View Portfolio</Button>
          </CardContent>
        </Card>

        <Card>
          <CardContent>
            <h2 className="text-xl font-semibold">📊 Fundamental Snapshot</h2>
            <p className="text-gray-600">Metrics from Screener.in, Tijori, Market Cap, PE, ROE</p>
            <Button className="mt-2">Analyze Fundamentals</Button>
          </CardContent>
        </Card>

        <Card>
          <CardContent>
            <h2 className="text-xl font-semibold">🤖 AI Ranker</h2>
            <p className="text-gray-600">Stocks ranked by ML models (XGBoost, RandomForest)</p>
            <Button className="mt-2">View Rankings</Button>
          </CardContent>
        </Card>

        <Card>
          <CardContent>
            <h2 className="text-xl font-semibold">🧠 Auto Trader</h2>
            <p className="text-gray-600">Signal-triggered buy/sell, risk-managed execution</p>
            <Button className="mt-2">Launch Auto Trade</Button>
          </CardContent>
        </Card>

        <Card>
          <CardContent>
            <h2 className="text-xl font-semibold">⚙️ Settings</h2>
            <p className="text-gray-600">Capital per trade, daily limit, Zerodha integration</p>
            <Button className="mt-2">Configure</Button>
          </CardContent>
        </Card>
      </main>
    </div>
  );
}
