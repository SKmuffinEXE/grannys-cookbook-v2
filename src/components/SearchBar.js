import React from "react";
function Search({ setSearch }) {
  return (
    <div className="searchbar">
      <label htmlFor="search">Search Recipes:</label>
      <input
        type="text"
        id="search"
        placeholder=""
        onChange={(e) => setSearch(e.target.value)}
      />
    </div>
  );
}
export default Search;
