import UILayout from "@/components/Layout/UILayout";
import NewRecipe from "@/components/Recipes/Create/NewRecipe";
import RecipeForm from "@/components/Layout/RecipeShell";
import RecipeLibrary from "@/components/Recipes/View/RecipeLibrary";
import React from "react";

// If user has no recipes, show FirstRecipe, else show RecipeLibrary.

const userRecipes = false;

const index = () => {
  return (
    <UILayout>
      {userRecipes ? <RecipeLibrary /> : <NewRecipe />}
      {/* <RecipeLibrary /> */}
      {/* <FirstRecipe /> */}
      {/* <RecipeForm /> */}
    </UILayout>
  );
};

export default index;
