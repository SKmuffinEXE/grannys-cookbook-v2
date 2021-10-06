import React from "react";
import RecipeCard from "./RecipeCard";
import styled from "styled-components";

export default function RecipeContainer({ recipeList }) {
  //displays ratings on
  // function whatRating(ratings) {}

  return (
    <layout>
      {recipeList.map((recipe) => (
        <RecipeCard recipe={recipe} key={recipe.name} />
      ))}
    </layout>
  );
}

const layout = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: space-around;
`;
