import React, { useState } from "react";
import Layout from "../components/Layout";
import RecipeItem from "../components/RecipeItem";
//import Favourite from "../pages/Favourite";
import "../styles/Recipe.css";

function Recipe() {
  const [search, setSearch] = useState("");
  const [myRecipe, setMyRecipe] = useState([]);
  //const [favourites, setFavourites] = useState([]);

  //   const addFavourite = (recipe) => {
  //     setFavourites([...favourites, recipe]);
  //   };

  //   const removeFavourite = (recipeToRemove) => {
  //     setFavourites(favourites.filter((recipe) => recipe !== recipeToRemove));
  //   };

  function searchRecipe(evt) {
    if (evt.key === "Enter") {
      //console.log("hi");

      fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${search}`)
        .then((response) => response.json())
        .then((data) => {
          //console.log(data);

          setMyRecipe(data.meals || []);
        });
    }
  }

  return (
    <Layout>
      <div className="recipe-main">
        <div className="heading">
          <h1>Search Your Food Here</h1>
        </div>
        <div className="searchBox">
          <input
            type="search"
            className="search-bar"
            placeholder="Enter food name"
            onChange={(e) => setSearch(e.target.value)}
            value={search}
            onKeyPress={searchRecipe}
          />
        </div>
        <div className="container">
          {myRecipe.length === 0 ? (
            <p>Not Found</p>
          ) : (
            myRecipe.map((res) => {
              return (
                <RecipeItem
                  getRecipe={{ data: res }}
                  key={res.idMeal}
                  //   addFavourite={addFavourite}
                  //   removeFavourite={removeFavourite}
                />
              );
            })
          )}
          {/* <Favourite favourites={favourites} /> */}
          {/* <FavoriteIcon color="primary" /> */}
        </div>
      </div>
    </Layout>
  );
}

export default Recipe;
