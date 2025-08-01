// File: src/components/Sidebar.jsx
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import {
  HomeIcon,
  BarChart2Icon,
  CpuIcon,
  BriefcaseIcon,
  FileTextIcon,
  SettingsIcon
} from 'lucide-react';

const menuItems = [
  { name: 'Home', path: '/', icon: <HomeIcon size={20} /> },
  { name: 'Signals', path: '/signals', icon: <BarChart2Icon size={20} /> },
  { name: 'AI Analysis', path: '/ai-analysis', icon: <CpuIcon size={20} /> },
  { name: 'Portfolio', path: '/portfolio', icon: <BriefcaseIcon size={20} /> },
  { name: 'Fundamentals', path: '/fundamentals', icon: <FileTextIcon size={20} /> },
  { name: 'Settings', path: '/settings', icon: <SettingsIcon size={20} /> },
];

const Sidebar = () => {
  const location = useLocation();

  return (
    <div className="w-64 bg-white text-blue-900 border-r border-gray-200 shadow-sm">
      <div className="text-2xl font-extrabold p-6 tracking-wide">
        Market<span className="text-blue-500">Dhrista</span>
      </div>
      <nav className="flex flex-col gap-1 px-4">
        {menuItems.map((item) => (
          <Link
            key={item.name}
            to={item.path}
            className={`flex items-center gap-3 px-3 py-2 rounded-md transition-all text-sm font-medium ${
              location.pathname === item.path
                ? 'bg-blue-100 text-blue-700 font-semibold'
                : 'hover:bg-blue-50 hover:text-blue-600'
            }`}
          >
            {item.icon}
            <span>{item.name}</span>
          </Link>
        ))}
      </nav>
    </div>
  );
};

export default Sidebar;
