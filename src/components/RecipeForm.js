import React, { useState, useEffect } from "react";
// import uuidv4 from 'uuid/v4'

export default function RecipeForm() {
  const [name, setName] = useState("");
  const [image, setImage] = useState("");
  const [brief, setBrief] = useState("");
  const [cookTime, setCookTime] = useState("");

  const [ingredient,setIngredient] = useState("");
  const [ingredients, setIngredients] = useState([]);
  const [steps, setSteps] = useState([]);

  function addIngredient() {
    setIngredients([...ingredients, ingredient])
    console.log(ingredients)
  }

  function handleStepsChange(changes){
    setSteps([...steps, changes])
  }

  function handleSubmit(e) {
    e.preventDefault();

    const newRecipe = {
      id: Date.now().toString(),
      name: name,
      image: image,
      brief: brief,
      cookTime: cookTime,
      Rating: {one: 0,two: 0,three: 0, four: 0,five:0},
      favorite: false,
    };
    // console.log(newRecipe)
  }

  return (
    <div>
      <center>
        <h1>Suggest a new recipe for granny here!</h1>
        <form onSubmit={handleSubmit}>
          <label>
            Name: 
          <input
            type="text"
            name="name"
            placeholder="Recipe Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          </label>
          
          {/* <br /> */}
          <label> Image:  
          
          
          <input
            type="text"
            name="image"
            placeholder="Insert image link here!"
            value={image}
            onChange={(e) => setImage(e.target.value)}
          />

      </label>
          <br />
          <label> Brief explanation:   
          <input
            type="text"
            name="brief"
            // step="0.01"
            placeholder="A brief explanation for granny"
            value={brief}
            onChange={(e) => setBrief(e.target.value)}
          />
          </label>
          <label> Time to make:  
          <input
            type="text"
            name="time"
            // step="0.01"
            placeholder="How long will this take?"
            value={cookTime}
            onChange={(e) => setCookTime(e.target.value)}
          />
          </label>
          <br/>
          <br/>

          <label>Ingredients </label> 
          <br/>
          <input
            type="text"
            name="ingredients"
            // step="0.01"
            placeholder="Ingredient"
            value={ingredient}
            onChange={(e) => setIngredient(e.target.value)}
          />

        <label> Steps </label> 
          <br/>
          <input
            type="text"
            name="ingredients"
            // step="0.01"
            placeholder="Ingredient"
            value={ingredient}
            onChange={(e) => setIngredient(e.target.value)}
          />
          <br/> 
          <button onClick = {addIngredient}> Add ingredient </button> <button> Add Step</button>


          {/* ingredient list */}
          <div>Ingredients:
            {ingredients.map(newIngredient =>  <li key = {newIngredient}> {newIngredient} </li>)}
            
             </div>

             {/* steps list */}
             <div>Steps: 
                </div>

         <button type = "submit" onSubmit = {(e) => handleSubmit}> Submit</button>
        </form>

 
      </center>
    </div>
  );
}
