import React from "react";

function Recipe(props) {
  const { title, year, description, image, _id } = props.recipe;
  return (
    <>
      <img src={`img/${image}`} alt={title} />
      <h3>
        <a href={_id}>{title}</a>
      </h3>
      <p>{description}</p>
      <p>Published: {year}</p>
    </>
  );
}

export default Recipe;
