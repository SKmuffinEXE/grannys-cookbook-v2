import React, { useState, useEffect } from "react";
import { Route, Switch } from "react-router-dom";
import Header from "./components/Header";
import RecipeContainer from "./components/RecipeContainer";
import NavBar from "./components/NavBar";
import RecipeForm from "./components/RecipeForm";
import Favorites from "./components/Favorites";
import RecipePage from "./components/RecipePage";

function App() {
  const [recipeList, setRecipeList] = useState([]);
  const [searchTerm, setSearch] = useState("");

  function addRecipe(data) {
    setRecipeList((prev) => [...prev, data]);
  }

  function deleteRecipe(data) {
    console.log("activated yo!");
  }

  useEffect(() => {
    fetch("http://localhost:3001/recipes")
      .then((r) => r.json())
      .then((recipes) => setRecipeList(recipes));
  }, []);

  const displayedRecipes = recipeList.filter((recipeObj) =>
    recipeObj.name.toLowerCase().includes(searchTerm.toLocaleLowerCase())
  );

  return (
    <div>
      <Header setSearch={setSearch} />
      <NavBar />
      <Switch>
        <Route exact path="/recipe/:id">
          <RecipePage deleteRecipe={deleteRecipe} />
        </Route>
        <Route path="/favorites">
          <Favorites />
        </Route>
        <Route path="/form">
          <RecipeForm addRecipe={addRecipe} />
        </Route>
        <Route path="/">
          <RecipeContainer recipeList={displayedRecipes} />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
