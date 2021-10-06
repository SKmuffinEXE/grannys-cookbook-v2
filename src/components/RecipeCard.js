import React, { useState } from "react";
import styled from "styled-components"
import { NavLink } from "react-router-dom";

export default function RecipeCard({recipe, recipeSetter}) {

  // function handleClick(){
  //   recipeSetter(recipe)
  
  // }

  return (
 
      <div>
            <CardWrapper>
      <h1> {recipe.name}</h1>
      <img src = {recipe.image} alt = {recipe.name}/>
      <h3>Cooking time: {recipe.cookTime} </h3>
      <p> {recipe.brief}</p>
      {/* rating */}
      {/* favorite */}
      <NavLink to = {`/recipe/${recipe.id}`}> See Recipe</NavLink>


    </CardWrapper> 
    </div>
    
     
  );

}


const CardWrapper = styled.div `
/* display: flex; */
justify-content: center;
margin: 10px;
padding: 5px;
/* display: flex; */
border: 5px solid;
width: 700px;
background-color: #EE6C4D;

& img {
max-height: 200px;
/* max-width: 200px; */
}
`