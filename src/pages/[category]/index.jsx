import FirstRecipe from "@/components/Recipes/FirstRecipe";
import RecipeForm from "@/components/Recipes/RecipeForm";
import RecipeLibrary from "@/components/Recipes/RecipeLibrary";
import React from "react";

// If user has no recipes, show FirstRecipe, else show RecipeLibrary.

const userRecipe = true;

const index = () => {
  return (
    <>
      {userRecipe ? <FirstRecipe /> : <RecipeLibrary />}
      {/* <RecipeLibrary /> */}
      {/* <FirstRecipe /> */}
      {/* <RecipeForm /> */}
    </>
  );
};

export default index;
