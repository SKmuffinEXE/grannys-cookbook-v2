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
  

  function addRecipe(data) {
    setRecipeList(prev =>[...prev, data])
  }

  useEffect(() => {
    fetch("http://localhost:3001/recipes")
      .then((r) => r.json())
      .then((recipes) => setRecipeList(recipes));
  }, []);

  return (
    <div>
      <Header />
      <NavBar />
      <Switch>
        <Route exact path="/recipe/:id">
          <RecipePage  />
        </Route>
        <Route path="/favorites">
          <Favorites />
        </Route>
        <Route path="/form">
          <RecipeForm  addRecipe = {addRecipe}/>
        </Route>
        <Route path="/">
          <RecipeContainer
            recipeList={recipeList}
            
          />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
