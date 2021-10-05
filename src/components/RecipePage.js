import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom"

export default function RecipePage() {

  const [recipe, setRecipe] = useState(null);
  const { id } = useParams()

  

  
  useEffect(() => {
    fetch(`http://localhost:3001/recipes/${id}`)
    .then(r => r.json())
    .then(data => setRecipe(data))
  },[id])

  if (!recipe) return <h2> Loading Recipe... </h2>

  console.log(recipe)



  return (
    <div>
      <h1>{recipe.name}</h1>
      <img src = {recipe.image}/>

      <ul>Ingredients</ul>
      <ul>Cooking Instructions</ul>
      {/* <h3>comments</h3> */}
      
    </div>
  );
}
