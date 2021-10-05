import React, {useState, useEffect} from "react";

export default function RecipeForm() {
  const[name, setName] = useState("");
  const[image, setImage] = useState("")
  const [brief, setBrief] = useState("")
  const [cookTime, setCookTime] = useState("")
  const[ingredients, setIngredients] = useState([])
  const [steps, setSteps] = useState([])

  return (
    <div><center>
      <h1>Suggest a new recipe for granny here!</h1>
      <form>
      <input
          type="text"
          name="name"
          placeholder="Recipe Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <br/>
        <input
          type="text"
          name="image"
          placeholder="Insert image link here!"
          value={image}
          onChange={(e) => setImage(e.target.value)}
        />
        <br/>
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
