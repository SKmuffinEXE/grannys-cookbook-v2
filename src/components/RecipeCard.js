import React, { useState } from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";

export default function RecipeCard({ recipe, addFav, removeFav }) {
  const [favorite, setFavorite] = useState(recipe.Favorite);

  function handleClick() {
    setFavorite(!favorite);
    //fetch here
    fetch(`http://localhost:3001/recipes/${recipe.id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ Favorite: !favorite }),
    })
      .then((resp) => resp.json())
      .then(() => {
        if (favorite === false) {
          addFav(recipe.id);
        } else {
          removeFav(recipe.id);
        }
      });
  }

  return (
    <div>
      <CardWrapper>
        <button onClick={handleClick} className="primary">
          {favorite ? "⭐" : "☆"}
        </button>
        <h1> {recipe.name}</h1>
        <img src={recipe.image} alt={recipe.name} />
        <h3>Cooking time: {recipe.cookTime} </h3>
        <p> {recipe.brief}</p>
        <NavLink to={`/recipe/${recipe.id}`}> See Recipe</NavLink>
        {/* favorite button */}
      </CardWrapper>
    </div>
  );
}

const CardWrapper = styled.div`
  /* display: flex; */
  justify-content: center;
  margin: 10px;
  padding: 5px;
  /* display: flex; */
  border: 5px solid;
  width: 700px;
  background-color: #ee6c4d;
  box-shadow: 4px 6px 15px -3px rgba(0, 0, 0, 0.65);

  & img {
    max-height: 200px;
    /* max-width: 200px; */
  }

  & a {
    display: inline-block;
    border-radius: 30px;
    padding: 0.5rem 0;
    margin: 0.5rem 1rem;
    width: 11rem;
    background: transparent;
    font-weight: bold;
    color: black;
    background-color: #98c1d9;
    border: 2px solid black;
    display: flex;
    justify-content: center;
    text-align: center;
    text-decoration: none;
  }

  & a:hover {
    transform: translateY(-3px);
    box-shadow: 4px 6px 15px -3px rgba(0, 0, 0, 0.65);
    text-decoration: none;
  }

  & a:active {
    transform: translateY(-1px);
    box-shadow: 4px 6px 8px -1px rgba(0, 0, 0, 0.65);
  }

  & button {
    font-size: 30px;
    width: 40px;
    background-color: #98c1d9;
    display: flex;
    justify-content: center;
    cursor: pointer;
  }
  & button:hover {
    transform: translateY(-3px);
    box-shadow: 4px 6px 15px -3px rgba(0, 0, 0, 0.65);
    text-decoration: none;
  }

  & button:active {
    transform: translateY(-1px);
    box-shadow: 4px 6px 8px -1px rgba(0, 0, 0, 0.65);
  }
`;
