import React, { useState, useEffect } from "react";
import {v4 as uuidv4} from 'uuid';

export default function RecipeForm({addRecipe}) {
  const [name, setName] = useState("");
  const [image, setImage] = useState("");
  const [brief, setBrief] = useState("");
  const [cookTime, setCookTime] = useState("");

  const [ingredient,setIngredient] = useState("");
  const [ingredients, setIngredients] = useState([]);

  const [step, setStep] = useState("")
  const [steps, setSteps] = useState([]);

  function addIngredient(e) {
    setIngredients([...ingredients, ingredient])
    setIngredient("")
    e.preventDefault();
    // console.log(ingredients)
  }

  function addStep(e){
    setSteps([...steps, step])
    setStep("")
    e.preventDefault();
    // console.log(steps)
  }

  function handleSubmit(e) {
    e.preventDefault();

    const newRecipe = {
      id: uuidv4(),
      name: name,
      image: image,
      brief: brief,
      cookTime: cookTime,
      Rating: {one: 0,two: 0,three: 0, four: 0,five:0},
      Favorite: false,
      Ingredients: ingredients,
      Instructions: steps
    };
    // addRecipe(newRecipe)

    fetch('http://localhost:3001/recipes', {
    method: 'POST',
    headers: {"Content-Type": 'application/json'},
    body: JSON.stringify(newRecipe)
  })
  .then(r => r.json())
  .then(data => {
    addRecipe(data)
    setName("")
    setImage("")
    setBrief("")
    setCookTime("")

    setSteps([])
    setIngredients([])
  })

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
            placeholder="Recipe Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          </label>
          
          {/* <br /> */}
          <label> Image:  
          
          
          <input
            type="text"
            placeholder="Insert image link here!"
            value={image}
            onChange={(e) => setImage(e.target.value)}
          />

      </label>
          <br />
          <label> Brief explanation:   
          <input
            type="text"
            placeholder="A brief explanation for granny"
            value={brief}
            onChange={(e) => setBrief(e.target.value)}
          />
          </label>
          <label> Time to make:  
          <input
            type="text"
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
            placeholder="Ingredient"
            value={ingredient}
            onChange={(e) => setIngredient(e.target.value)}
          />

        <label> Steps </label> 
          <br/>
          <input
            type="text"
            placeholder="steps"
            value={step}
            onChange={(e) => setStep(e.target.value)}
          />
          <br/> 
          <button onClick = {addIngredient}> Add ingredient </button>
          
           <button onClick = {addStep}> Add Step</button>


          {/* ingredient list */}
          <div>Ingredients:
            {ingredients.map(newIngredient =>  <li key = {newIngredient}> {newIngredient} </li>)}
            
             </div>

             {/* steps list */}
             <div>Steps: 
               {steps.map(newStep => <li key = {newStep}> {newStep} </li>) }
                </div>

         <button type = "submit" onSubmit = {(e) => handleSubmit}> Submit</button>
        </form>

 
      </center>
    </div>
  );
}
