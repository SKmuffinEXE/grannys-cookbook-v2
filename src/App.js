import React, { useState, useEffect } from "react";
import { Switch, Route } from "react-router-dom";
import Header from "./components/Header";
import RecipeContainer from "./components/RecipeContainer";
import NavBar from "./components/NavBar";
import RecipeForm from "./components/RecipeForm";

function App() {
  const [recipeList, setRecipeList] = useState([]);

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
        <Route path="/form">
          <RecipeForm />
        </Route>
        <Route path="/">
          <RecipeContainer recipeList={recipeList} />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
