import React from "react";
import Layout from "../components/Layout";
import "../styles/Favourite.css";

function Favourite({ favourites }) {
  return (
    <Layout>
      <div className="fav">
        <h1 className="fav1"> Favourite Recipe List</h1>
        {favourites.map((recipe) => (
          <div key={recipe.idMeal} className="fav-container">
            <div className="fav2">
              <img src={recipe.strMealThumb} alt="" className="fav-image" />
            </div>
            <div>
              <h2 className="fav3">{recipe.strMeal}</h2>
              <h3 className="fav4">Category : {recipe.strCategory}</h3>
            </div>
          </div>
        ))}
      </div>
    </Layout>
  );
}

export default Favourite;
