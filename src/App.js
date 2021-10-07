import React, { useState, useEffect } from "react";
import { Route, Switch } from "react-router-dom";
import styled from "styled-components";
import Header from "./components/Header";
import RecipeContainer from "./components/RecipeContainer";
import NavBar from "./components/NavBar";
import RecipeForm from "./components/RecipeForm";
import Favorites from "./components/Favorites";
import RecipePage from "./components/RecipePage";
import UserLogin from "./components/UserLogin";
import Footer from "./components/Footer";

function App() {
  const [recipeList, setRecipeList] = useState([]);
  const [searchTerm, setSearch] = useState("");
  // const [globalUser, setGlobalUser] = useState([])

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
        setRecipeList(recipes);
      });
  }, []);

  //favorite functions here
  function addToFav(favRes) {
    setRecipeList(
      recipeList.map((data) =>
        data.id === favRes ? { ...data, Favorite: true } : data
      )
    );
  }

  function removeFromFav(favRes) {
    setRecipeList(
      recipeList.map((data) =>
        data.id === favRes ? { ...data, Favorite: false } : data
      )
    );
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
      <br />
      <NavBar />
      <Switch>
        <Route exact path="/recipe/:id">
          <RecipePage
            deleteRecipe={deleteRecipe}
            addFav={addToFav}
            removeFav={removeFromFav}
          />
        </Route>
        <Route path="/userlogin">
          <UserLogin />
        </Route>
        <Route path="/favorites">
          <Favorites
            recipeList={recipeList}
            addFav={addToFav}
            removeFav={removeFromFav}
          />
        </Route>
        <Route path="/form">
          <RecipeForm addRecipe={addRecipe} />
        </Route>
        <Route path="/">
          <RecipeContainer
            recipeList={displayedRecipes}
            addFav={addToFav}
            removeFav={removeFromFav}
          />
        </Route>
      </Switch>
      <Footer />
    </div>
  );
}

export default App;

const ContainerLayout = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
`;
