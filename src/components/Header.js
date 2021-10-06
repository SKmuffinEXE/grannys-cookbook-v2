import React from "react";
import SearchBar from "./SearchBar";

export default function Header({ setSearch }) {
  return (
    <header>
      <img src="logov3.png" alt="granny" />
      {/* <img src="Grandmas Cookbook.png" alt="grandmas cookbook" /> */}
      <SearchBar setSearch={setSearch} />
    </header>
  );
}
