import React from "react";
import RecipeCard from "./RecipeCard";
import styled from "styled-components";


export default function Favorites({favList, addFav, removeFav}) {

  return (<div>

    <center><h1> Your personal favorite granny dishes</h1> </center>

    <ContainerLayout>
      {favList.map((recipe) => (
        <RecipeCard recipe={recipe} key={recipe.name} addFav = {addFav} removeFav = {removeFav} />
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