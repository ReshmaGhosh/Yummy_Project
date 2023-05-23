import React, { useState, useEffect } from "react";
import axios from "axios";

import Layout from "../components/Layout";
import RecipeItem from "../components/RecipeItem";
import "../styles/Recipe.css";

function Recipe({ addFavourite, removeFavourite }) {
  const [search, setSearch] = useState("");
  const [myRecipe, setMyRecipe] = useState([]);

  useEffect(() => {
    fetchRandomRecipes();
  }, []);

  const fetchRandomRecipes = async () => {
    try {
      const promises = Array(20)
        .fill()
        .map(() =>
          axios.get("https://www.themealdb.com/api/json/v1/1/random.php")
        );
      const response = await Promise.all(promises);
      const meals = response.map((res) => res.data.meals[0]);
      setMyRecipe(meals);
    } catch (error) {
      console.log(error);
    }
  };
  const fetchRecipes = async () => {
    try {
      const response = await axios.get(
        `https://www.themealdb.com/api/json/v1/1/search.php?s=${search}`
      );
      setMyRecipe(response.data.meals || []);
    } catch (error) {
      console.log(error);
    }
  };
  const searchRecipe = (evt) => {
    if (evt.key === "Enter") {
      fetchRecipes();
    }
  };

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
            <p className="para">Not Found</p>
          ) : (
            myRecipe.map((res) => {
              return (
                <RecipeItem
                  getRecipe={{ data: res }}
                  key={res.idMeal}
                  addFavourite={addFavourite}
                  removeFavourite={removeFavourite}
                />
              );
            })
          )}
        </div>
      </div>
    </Layout>
  );
}

export default Recipe;
