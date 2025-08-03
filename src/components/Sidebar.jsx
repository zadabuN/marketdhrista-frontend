import { SidebarData } from "../utils/SidebarData";
import { useSidebar } from "../context/SidebarContext";
import logo from "@/assets/logo_v2.png"; // ✅ Updated logo
import { Sun, Moon } from "lucide-react";
import { useTheme } from "@/components/theme-provider";

const Sidebar = () => {
  const { isSidebarOpen } = useSidebar();
  const { theme, setTheme } = useTheme();

  return (
    <div className={`sidebar ${isSidebarOpen ? "open" : ""}`}>
      <div className="logo-section">
        <img src={logo} alt="MarketDhrista" className="logo" />
        <h2>MarketDhrista</h2>
      </div>
      <button
        onClick={() => setTheme(theme === "light" ? "dark" : "light")}
        className="theme-toggle"
      >
        {theme === "light" ? <Moon size={18} /> : <Sun size={18} />}
      </button>
      <ul className="sidebar-menu">
        {SidebarData.map((item, index) => (
          <li key={index}>
            {item.icon}
            {item.title}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;
