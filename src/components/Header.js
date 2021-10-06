import React from "react";
import SearchBar from "./SearchBar";

export default function Header({ setSearch }) {
  return (
    <header>
      <img src="logo.png" alt="granny" />
      <img src="Grandmas Cookbook.png" alt="grandmas cookbook" />
      <SearchBar setSearch={setSearch} />
    </header>
  );
}
