import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function RecipePage({ deleteRecipe }) {
  const [recipe, setRecipe] = useState(null);
  const { id } = useParams();
  const [favorite, setFavorite] = useState(false);

  useEffect(() => {
    fetch(`http://localhost:3001/recipes/${id}`)
      .then((r) => r.json())
      .then((data) => setRecipe(data));
  }, [id]);

  if (!recipe) return <h2> Loading Recipe... </h2>;

  console.log(recipe);

  function handleClick() {
    setFavorite(!favorite);
  }

  function handleDelete() {
    deleteRecipe(recipe.id);
  }

  return (
    <div>
      <h1>{recipe.name}</h1>
      <img src={recipe.image} />
      <h1>Ingredients </h1>
      <ul>
        {" "}
        {recipe.Ingredients.map((ingredient) => (
          <li> {ingredient} </li>
        ))}
      </ul>

      <h1>Cooking Instructions </h1>
      <ol>
        {recipe.Instructions.map((step) => (
          <li> {step} </li>
        ))}
      </ol>
      {/* <h3>comments</h3> */}
      <button onClick={handleClick} className="primary">
        {favorite ? "⭐" : "☆"}
      </button>
      <button onClick={handleDelete}> 🗑️ </button>
    </div>
  );
}
