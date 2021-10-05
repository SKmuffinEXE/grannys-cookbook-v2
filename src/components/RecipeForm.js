import React, { useState, useEffect } from "react";
// import uuidv4 from 'uuid/v4'

export default function RecipeForm() {
  const [name, setName] = useState("");
  const [image, setImage] = useState("");
  const [brief, setBrief] = useState("");
  const [cookTime, setCookTime] = useState("");
  const [ingredients, setIngredients] = useState([]);
  const [steps, setSteps] = useState([]);

  function handleSubmit(e) {
    e.preventDefault();

    const newRecipe = {
      // id: uuidv4(),
      name: name,
      image: image,
      brief: brief,
      cookTime: cookTime,
      Rating: {
        one: 0,
        two: 0,
        three: 0,
        four: 0,
        five: 0,
      },
      favorite: false,
    };
  }

  return (
    <div>
      <center>
        <h1>Suggest a new recipe for granny here!</h1>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            placeholder="Recipe Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <br />
          <input
            type="text"
            name="image"
            placeholder="Insert image link here!"
            value={image}
            onChange={(e) => setImage(e.target.value)}
          />
          <br />
          <input
            type="text"
            name="price"
            // step="0.01"
            placeholder="A brief explanation for granny"
            value={brief}
            onChange={(e) => setBrief(e.target.value)}
          />
          <input
            type="text"
            name="price"
            // step="0.01"
            placeholder="How long will this take?"
            value={cookTime}
            onChange={(e) => setCookTime(e.target.value)}
          />
        </form>
      </center>
    </div>
  );
}
