import React, { useState, useEffect } from "react";
// import uuidv4 from 'uuid/v4'

export default function RecipeForm() {
  const [name, setName] = useState("");
  const [image, setImage] = useState("");
  const [brief, setBrief] = useState("");
  const [cookTime, setCookTime] = useState("");
  const [ingredients, setIngredients] = useState([]);
  const [steps, setSteps] = useState([]);

  function handleIngredientsChange(changes) {
    // setIngredients([...ingredients, changes])
    console.log(changes)
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

          <label>Ingredients </label> <label>Steps</label>  
          <br/>
          <input
            type="text"
            name="ingredients"
            // step="0.01"
            placeholder="How long will this take?"
            // value={ingredients}
            // onChange={(e) => handle IngredientsChange(e.target.value)}
          />

            <input
            type="text"
            name="steps"
            // step="0.01"
            placeholder="How long will this take?"
            // value={steps}
            // onChange={(e) => setSteps(e.target.value)}
          />
          <br/>
          <button> Add ingredient </button> <button> Add Step</button>
          
          
          
               <div>Current Ingredients  </div>
        <ul><li> ingredients</li>
        <li> step 1</li>
        <li> step 1</li>
        <li> step 1</li> </ul>
         <div>Current Steps</div>
         <li> step 1</li>
         <li> step 1</li>
         <li> step 1</li>
         <li> step 1</li>
         <li> step 1</li>
         <li> step 1</li>

         <button type = "submit"> Submit</button>
        </form>

 
      </center>
    </div>
  );
}
