import React from "react";
import RecipeCard from "./RecipeCard";
import styled from "styled-components";


export default function Favorites({ recipeList, addFav, removeFav}) {

  return (<div>

    <center><h1> Your Personal Favorite Granny Dishes</h1> </center>

    <ContainerLayout>
      {recipeList.map((recipe) => {
        
      if(recipe.Favorite === true)  {
      //   console.log(recipe)
      return <RecipeCard recipe={recipe} key={recipe.name} addFav = {addFav} removeFav = {removeFav}/>
    
    }   else {
      return null
    } 
      })}
    </ContainerLayout>
  </div>
  );
}
const ContainerLayout = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
`;