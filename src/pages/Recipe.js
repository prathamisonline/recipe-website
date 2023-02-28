import React from "react";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const Recipe = () => {
  const [recipe, setRecipe] = useState({});
  const params = useParams();

  const getRecipes = async () => {
    const res = await fetch(
      `https://api.spoonacular.com/recipes/${params.name}/information?apiKey=aaf7ceb317f34cbdb5828cbc1a73d678`
    );
    const data = await res.json();
    setRecipe(data);
  };
  useEffect(() => {
    getRecipes();
  }, [params.name]);

  return <div>{recipe.title}</div>;
};

export default Recipe;
