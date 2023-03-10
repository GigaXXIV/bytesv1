import NewRecipe from "@/components/Recipes/NewRecipe";
import RecipeForm from "@/components/Recipes/RecipeShell";
import RecipeLibrary from "@/components/Recipes/RecipeLibrary";
import React from "react";

// If user has no recipes, show FirstRecipe, else show RecipeLibrary.

const userRecipe = false;

const index = () => {
  return (
    <>
      {userRecipe ? <NewRecipe /> : <RecipeLibrary />}
      {/* <RecipeLibrary /> */}
      {/* <FirstRecipe /> */}
      {/* <RecipeForm /> */}
    </>
  );
};

export default index;
