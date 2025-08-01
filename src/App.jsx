import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import Header from "./components/Header";
import Home from "./pages/Home";
import Signals from "./pages/Signals";
import AIAnalysis from "./pages/AIAnalysis";
import Portfolio from "./pages/Portfolio";
import Fundamentals from "./pages/Fundamentals";
import Settings from "./pages/Settings"; // ✅ Don't forget this!

function App() {
  return (
    <Router>
      <div className="flex h-screen">
        <Sidebar />
        <div className="flex flex-col flex-1">
          <Header />
          <div className="p-4 overflow-y-auto">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/signals" element={<Signals />} />
              <Route path="/ai-analysis" element={<AIAnalysis />} />
              <Route path="/portfolio" element={<Portfolio />} />
              <Route path="/fundamentals" element={<Fundamentals />} />
              <Route path="/settings" element={<Settings />} />
            </Routes>
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;
