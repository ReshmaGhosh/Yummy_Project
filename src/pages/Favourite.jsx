import React from "react";
import Layout from "../components/Layout";

function Favourite({ favourites }) {
  return (
    <Layout>
      <h1>My Favourites</h1>
      {favourites.map((recipe) => (
        <div key={recipe.idMeal}>
          <img src={recipe.strMealThumb} alt="" />
          <h2>{recipe.strMeal}</h2>
          <h3>{recipe.strCategory}</h3>
        </div>
      ))}
    </Layout>
  );
}

export default Favourite;
