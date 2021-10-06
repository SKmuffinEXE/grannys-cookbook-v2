import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useHistory } from "react-router-dom";
import styled from "styled-components";

export default function RecipePage({ deleteRecipe, addFav, removeFav }) {
  const [recipe, setRecipe] = useState(null);
  const { id } = useParams();
  const [favorite, setFavorite] = useState(false);
  const history = useHistory();

  useEffect(() => {
    fetch(`http://localhost:3001/recipes/${id}`)
      .then((r) => r.json())
      .then((data) => {setRecipe(data)
      setFavorite(data.Favorite)
      });
  }, [id]);

  if (!recipe) return <h2> Loading Recipe... </h2>;

  console.log(recipe);

  function handleClick() {
    setFavorite(!favorite)
    //fetch here
    fetch(`http://localhost:3001/recipes/${recipe.id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({Favorite : !favorite}),
    })
    .then((resp) => resp.json())
    .then(() => { 

      if(favorite === false){
        addFav(recipe)
      }
      else{
        removeFav(recipe.id)
      }

     })
    
    
  }

  function handleDelete() {
    fetch(`http://localhost:3001/recipes/${recipe.id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((resp) => resp.json())
      .then(() => {
        deleteRecipe(recipe.id);
        history.push(`/`);
      });
  }

  return (
    <div>
      <CardWrapper>
      <h1>{recipe.name}</h1>
      <img src={recipe.image} alt = {recipe.name}/>
      </CardWrapper>
      <h1>Ingredients </h1>
      <ul>
        {recipe.Ingredients.map((ingredient) => (
          <li> {ingredient} </li>))}
      </ul>

      <h1>Cooking Instructions </h1>
      <ol>
        {recipe.Instructions.map((step) => (
          <li> {step} </li>))}
      </ol>
      {/* <h3>comments</h3> */}
      <button onClick={handleClick} className="primary">
        {favorite ? "⭐" : "☆"}
      </button>
      <button onClick={handleDelete}> 🗑️ </button>

    </div>
  );
}

const CardWrapper = styled.div`
/* display: flex; */
text-align: center;

& img {
  max-width: 1000px;
}

`