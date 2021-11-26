import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Recipes from "./Recipes";
import RecipeDetail from "./RecipeDetail";

function App() {
  const [recipes, setRecipes] = React.useState([]);
  const [loading, setLoading] = React.useState(false);

  React.useEffect(() => {
    setLoading(true);
    fetch(`api/recipes`)
      .then((response) => response.json())
      // .then((data) => console.log("got here", data))
      .then((data) => {
        setRecipes(data);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return "loading...";
  }

  // return <p>poor</p>;

  return (
    <div>
      <h1>Recipes!</h1>
      <Recipes recipes={recipes} />
      {/* <Router>
        <Routes>
          <Route path="/" element={<Recipes recipes={recipes} />} />
          <Route
            path="/:recipeId"
            element={<RecipeDetail recipes={recipes} />}
          />
        </Routes>
      </Router> */}
    </div>
  );
}

export default App;
