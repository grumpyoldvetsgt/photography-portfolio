import React from "react";

const Nav = ({ categories, onSelect }) => {
  return (
    <nav className="p-4 bg-gray-800 text-white flex gap-4">
      {categories.map((cat) => (
        <button
          key={cat}
          onClick={() => onSelect(cat)}
          className="hover:bg-gray-700 px-3 py-1 rounded"
        >
          {cat.charAt(0).toUpperCase() + cat.slice(1)}
        </button>
      ))}
    </nav>
  );
};

export default Nav;
