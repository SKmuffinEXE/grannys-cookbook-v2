import React from "react";
import RecipeForm from "./RecipeForm";

export default function NavBar() {
  return (
    <div className="sidebar">
      <button>favorite</button>
      <RecipeForm />
    </div>
  );
}
