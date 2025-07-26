import React from "react";

const Navbar = () => {
  const toggleDarkMode = () => {
    document.documentElement.classList.toggle("dark");
  };

  return (
    <nav className="bg-white dark:bg-gray-900 shadow-md px-6 py-4 flex justify-between items-center">
      <h1 className="text-xl font-bold">🚀 My Portfolio</h1>
      <button
        onClick={toggleDarkMode}
        className="bg-gray-200 dark:bg-gray-700 px-4 py-2 rounded"
      >
        Toggle Dark Mode
      </button>
    </nav>
  );
};

export default Navbar;
