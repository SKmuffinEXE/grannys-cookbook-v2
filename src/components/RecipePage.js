import React from "react";

export default function RecipePage({recipe}) {
  return (
    <div>
      <button>go back</button>
      <h1>{recipe.name}</h1>
      <img src = {recipe.image}/>

      <ul>Ingredients</ul>
      <ul>Cooking Instructions</ul>
      {/* <h3>comments</h3> */}
      
    </div>
  );
}
