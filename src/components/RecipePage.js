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
    fetch(`https://grannycb2.herokuapp.com/recipes/${id}`)
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
        addFav(recipe.id)
      }
      else{
        removeFav(recipe.id)
      }
     })}

  function handleDelete() {
    fetch(`https://grannycb2.herokuapp.com/recipes/${recipe.id}`, {
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
      <center> 
        <FullWrap>
      <CardWrapper>
      <h1>{recipe.name}</h1>
      <img src={recipe.image} alt = {recipe.name}/>

      </CardWrapper>
      <InstructionsWrapper>
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
      <button onClick={handleClick} className="primary">
        {favorite ? "⭐" : "☆"}
      </button>
      <button onClick={handleDelete}> 🗑️ </button>
      </InstructionsWrapper>
      </FullWrap>
      </center>
      <br/> <br/>
    </div>
  );
}

const CardWrapper = styled.div`
justify-content: center;
text-align: center;
width: 1100px;
/* background-color: #3D5A80; */
color: white;


& img {
  max-width: 1000px;
}


& button {
  font-size: 30px;
    width: 60px;
    background-color: #98C1D9;
    cursor: pointer;
}

& button:hover {
    transform: translateY(-3px);
  box-shadow: 4px 6px 15px -3px rgba(0,0,0,0.65);
  text-decoration: none;
  }

  & button:active {
    transform: translateY(-1px);
  box-shadow: 4px 6px 8px -1px rgba(0,0,0,0.65);
  }

`

const InstructionsWrapper = styled.div`
justify-content: center;
text-align: left;
width: 1100px;
color: white;
`

const FullWrap = styled.div`
width: 1100px;
background-color: #3D5A80;
box-shadow: 4px 6px 15px -3px rgba(0,0,0,0.65);
padding: 0px 0px 20px 30px;
`