import React from "react";
import RecipeCard from "./RecipeCard";
import styled from "styled-components";

export default function RecipeContainer({ recipeList, addFav, removeFav, favList }) {
  //displays ratings on
  // function whatRating(ratings) {}

  return (
    <div>
    <ContainerLayout>
      {recipeList.map((recipe) => (
        <RecipeCard recipe={recipe} key={recipe.name} addFav = {addFav} removeFav = {removeFav}  favList = {favList}/>
      ))}
    </ContainerLayout>
    </div>
  );
}

const ContainerLayout = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
`;
