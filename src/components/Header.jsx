import React from "react";

const Header = () => {
  return (
    <header className="flex items-center justify-between px-6 py-4 border-b border-gray-200 bg-white shadow-sm">
      <h1 className="text-xl font-bold text-[#1E88E5] tracking-wide">
        MarketDhrista Dashboard
      </h1>
      <div className="flex items-center gap-4">
        {/* Placeholder for future filter/search */}
        <input
          type="text"
          placeholder="🔍 Search..."
          className="border rounded-md px-3 py-1 text-sm focus:outline-none focus:ring-2 focus:ring-blue-300"
        />
        <div className="flex items-center gap-2">
          <img
            src="https://api.dicebear.com/7.x/initials/svg?seed=ND"
            alt="User"
            className="w-8 h-8 rounded-full border"
          />
          <span className="text-sm text-gray-600 font-medium">Hi, Niteen</span>
        </div>
      </div>
    </header>
  );
};

export default Header;
