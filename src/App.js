import { Routes, Route } from "react-router-dom";
import React, { useState } from "react";

import "./App.css";
import Home from "./pages/Home";
import Recipe from "./pages/Recipe";
import Favourite from "./pages/Favourite";
import Contact from "./pages/Contact";
import NavBar from "./components/NavBar";

function App() {
  const [favourites, setFavourites] = useState([]);

  const addFavourite = (recipe) => {
    setFavourites([...favourites, recipe]);
  };

  const removeFavourite = (recipeToRemove) => {
    setFavourites(favourites.filter((recipe) => recipe !== recipeToRemove));
  };
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/recipe"
          element={
            <Recipe
              addFavourite={addFavourite}
              removeFavourite={removeFavourite}
            />
          }
        />
        <Route
          path="/favourite"
          element={<Favourite favourites={favourites} />}
        />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <NavBar favourites={favourites} />
    </div>
  );
}

export default App;
