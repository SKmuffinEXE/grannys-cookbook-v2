import React from "react";

export default function SearchBar() {
  return (
    <div className="searchbar">
      <label htmlFor="search">Search Recipe:</label>
      <input
        type="text"
        id="search"
        placeholder="Search for recipe..."
        // onChange={(e) => setSearch(e.target.value)}
      />
    </div>
  );
}
