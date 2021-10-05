import React from "react";
import RecipeCard from "./RecipeCard";


export default function RecipeContainer({recipeList}) {

  //displays ratings on 
  function whatRating(ratings){}
  

  return (
    <div>
      {recipeList.map(recipe => <RecipeCard recipe = {recipe} key = {recipe.name}/>
    )}
    </div>
  );
}


