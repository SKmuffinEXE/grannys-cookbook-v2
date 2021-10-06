import React, { useState, useEffect } from "react";
import { Route, Switch } from "react-router-dom";
import styled from "styled-components";
import Header from "./components/Header";
import RecipeContainer from "./components/RecipeContainer";
import NavBar from "./components/NavBar";
import RecipeForm from "./components/RecipeForm";
import Favorites from "./components/Favorites";
import RecipePage from "./components/RecipePage";

function App() {
  const [recipeList, setRecipeList] = useState([]);
  const [searchTerm, setSearch] = useState("");

  const [favList, setFavList] = useState([])


  //fetch functions
  function addRecipe(data) {
    setRecipeList((prev) => [...prev, data]);
  }

  function deleteRecipe(data) {
    const displayedList = recipeList.filter((recipe) => recipe.id !== data);
    setRecipeList(displayedList);
  }

  useEffect(() => {
    fetch("http://localhost:3001/recipes")
      .then((r) => r.json())
      .then((recipes) => {
        setRecipeList(recipes)
        setFavList(recipes.filter(rec => rec.Favorite === true))
      });
  }, []);

//favorite functions here
function addToFav(newRecipe){
  setFavList(prev => [...prev, newRecipe])
}

function removeFromFav(deleteRecipeID){
  const removeFav = favList.filter(favRecipe => favRecipe.id !== deleteRecipeID)
  setFavList(removeFav)
}

//display object here
  const displayedRecipes = recipeList.filter((recipeObj) =>
    recipeObj.name.toLowerCase().includes(searchTerm.toLocaleLowerCase())
  );

  return (
    <div>
      <ContainerLayout>
      <Header setSearch={setSearch} />
      </ContainerLayout>
      <br/>
      <NavBar />
      <Switch>
        <Route exact path="/recipe/:id">
          <RecipePage deleteRecipe={deleteRecipe} />
        </Route>
        <Route path="/favorites">
          <Favorites favList = {favList}  addFav = {addToFav} removeFav ={removeFromFav}/>
        </Route>
        <Route path="/form">
          <RecipeForm addRecipe={addRecipe} />
        </Route>
        <Route path="/">
          <RecipeContainer favList = {favList} recipeList={displayedRecipes} addFav = {addToFav} removeFav ={removeFromFav} />
        </Route>
      </Switch>
      
    </div>
  );
}

export default App;

const ContainerLayout = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
`;
