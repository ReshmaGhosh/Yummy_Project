import React from "react";

import Layout from "../components/Layout";
import image from "../image/recipe.jpg";
import "../styles/HomePage.css";

function Home() {
  return (
    <Layout>
      <div className="home" style={{ backgroundImage: `url(${image})` }}>
        <div className="home-container">
          <h1>HEALTHY DELICIOUS RECIPES</h1>
          <p>Popular Food</p>
          <h6>
            We provides a variety of food and beverage recipes with height taste
            from famous chefs
          </h6>
        </div>
      </div>
    </Layout>
  );
}

export default Home;
