import React, { useState } from "react";
//import IconButton from "@material-ui/core/IconButton";
//import FavoriteIcon from "@material-ui/icons/Favorite";

function RecipeItem({ getRecipe }) {
  // should be beside getRecipe addFavourite, removeFavourite
  console.log(getRecipe.data);

  //const [isFavourite, setIsFavourite] = useState(false);

  //   const toggleFavourite = () => {
  //     setIsFavourite(!isFavourite);
  //     if (isFavourite) {
  //       removeFavourite(getRecipe.data);
  //     } else {
  //       addFavourite(getRecipe.data);
  //     }
  //   };
  return (
    <div>
      <div className="card">
        <img src={getRecipe.data.strMealThumb} alt="" />
        <div className="info">
          <h2>{getRecipe.data.strMeal}</h2>
          <p>{getRecipe.data.strCategory}</p>
          <p>{getRecipe.data.strArea} Food</p>
          <p>{getRecipe.data.strIngredient}</p>
          <p>{getRecipe.data.strInstructions}</p>
        </div>
        {/* <IconButton onClick={toggleFavourite}>
          <FavoriteIcon color={isFavourite ? "primary" : "secondary"} />
        </IconButton> */}
      </div>
    </div>
  );
}

export default RecipeItem;
