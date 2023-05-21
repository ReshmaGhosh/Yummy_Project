import { Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import Recipe from "./pages/Recipe";
import Favourite from "./pages/Favourite";
import Contact from "./pages/Contact";
// import RecipeDetails from "./components/RecipeDetails";
import Pagenotfound from "./pages/Pagenotfound";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/recipe" element={<Recipe />} />
        <Route path="/favourite" element={<Favourite />} />
        <Route path="/contact" element={<Contact />} />
        {/* <Route path="/recipe/:MealId" element={<RecipeDetails />} /> */}
        <Route path="*" element={<Pagenotfound />} />
      </Routes>
    </div>
  );
}

export default App;
