import React from "react";

function RecipeDetail(props) {
  const { recipeId } = props;
  return (
    <div>
      <h1>{recipeId}</h1>
    </div>
  );
}

export default RecipeDetail;
