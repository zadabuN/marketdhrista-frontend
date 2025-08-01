// File: src/main.jsx
import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import {
  Home,
  Signals,
  AIAnalysis,
  Portfolio,
  Fundamentals,
  Settings,
} from "./pages";

import { Menu, Moon, Sun, User } from "lucide-react";
import "./index.css";

function App() {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [darkMode, setDarkMode] = useState(false);

  const toggleSidebar = () => setSidebarOpen(!sidebarOpen);
  const toggleTheme = () => setDarkMode(!darkMode);

  return (
    <div className={darkMode ? "dark bg-gray-900 text-white" : "bg-white text-gray-900"}>
      <Router>
        {/* Header */}
        <header className="flex items-center justify-between px-4 py-2 shadow-md sticky top-0 bg-inherit z-50">
          <div className="flex items-center gap-4">
            <button
              onClick={toggleSidebar}
              className="p-2 rounded hover:bg-gray-200 dark:hover:bg-gray-700"
            >
              <Menu size={20} />
            </button>
            <h1 className="text-xl font-bold">📊 MarketDhrista</h1>
          </div>
          <div className="flex items-center gap-4">
            <button
              onClick={toggleTheme}
              className="p-2 rounded hover:bg-gray-200 dark:hover:bg-gray-700"
            >
              {darkMode ? <Sun size={18} /> : <Moon size={18} />}
            </button>
            <div className="bg-indigo-500 w-8 h-8 flex items-center justify-center rounded-full text-white text-sm font-semibold">
              ND
            </div>
          </div>
        </header>

        {/* Layout */}
        <div className="flex min-h-screen">
          {sidebarOpen && (
            <aside className="w-48 bg-gray-100 dark:bg-gray-800 p-4 space-y-2 text-sm font-medium">
              <nav className="flex flex-col gap-2">
                <Link to="/" className="hover:underline">🏠 Home</Link>
                <Link to="/signals" className="hover:underline">📈 Signals</Link>
                <Link to="/aianalysis" className="hover:underline">🧠 AI Analysis</Link>
                <Link to="/portfolio" className="hover:underline">💼 Portfolio</Link>
                <Link to="/fundamentals" className="hover:underline">📊 Fundamentals</Link>
                <Link to="/settings" className="hover:underline">⚙️ Settings</Link>
              </nav>
            </aside>
          )}

          <main className="flex-1 p-6">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/signals" element={<Signals />} />
              <Route path="/aianalysis" element={<AIAnalysis />} />
              <Route path="/portfolio" element={<Portfolio />} />
              <Route path="/fundamentals" element={<Fundamentals />} />
              <Route path="/settings" element={<Settings />} />
              <Route path="*" element={<div className="text-red-500">404 – Page Not Found</div>} />
            </Routes>
          </main>
        </div>
      </Router>
    </div>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
