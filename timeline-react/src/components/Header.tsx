// src/components/Header.tsx
import React from "react";

interface HeaderProps {
  isDarkMode: boolean;
  toggleTheme: () => void;
}

const Header: React.FC<HeaderProps> = ({ isDarkMode, toggleTheme }) => (
  <header className="sticky top-0 z-30 p-4 flex justify-between items-center bg-white/50 dark:bg-gray-900/50 backdrop-blur-lg border-b border-white/20">
    <div className="flex items-center space-x-3">
      <img src="assets/logo.jpg" alt="Computing Timeline Logo" className="rounded-md w-10 h-10" />
      <h1 className="text-xl font-bold text-gray-900 dark:text-gray-100 font-display">Timeline of Computing</h1>
    </div>
    <button
      onClick={toggleTheme}
      className="px-4 py-2 bg-gray-200/50 dark:bg-gray-700/50 rounded-lg text-gray-800 dark:text-gray-200 hover:bg-gray-300/80 dark:hover:bg-gray-600/80 transition"
    >
      {isDarkMode ? "☀️ Light" : "🌙 Dark"}
    </button>
  </header>
);

export default Header;
