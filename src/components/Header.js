import React from "react";
import NavBar from "./NavBar";
import SearchBar from "./SearchBar";

export default function Header() {
  return (
    <header>
      <img src="logo.png" alt="granny" />
      <img src="Grandmas Cookbook.png" alt="grandmas cookbook" />
      <NavBar />
      <SearchBar />
    </header>
  );
}
