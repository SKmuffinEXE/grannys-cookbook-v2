import React from "react";
import RecipeCard from "./RecipeCard";
import styled from "styled-components"


export default function RecipeContainer({recipeList, recipeSetter}) {

  //displays ratings on 
  function whatRating(ratings){}
  

  return (
    <layout>
      {recipeList.map(recipe => <RecipeCard recipe = {recipe} key = {recipe.name} recipeSetter = {recipeSetter}/>
    )}
    </layout>
  );
}

const layout = styled.div`
justify-content: center;

display: flex;
`

