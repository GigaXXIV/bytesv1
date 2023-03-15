import React from "react";
import IngredientList from "./SearchIngredient";
import NewIngredient from "./NewIngredient";

const addIngredients = () => {
  const ingredients = false;

  return (
    <>
      <div className="shadow sm:overflow-hidden sm:rounded-md">
        <div className="space-y-6 bg-white py-6 px-4 sm:p-6">
          <NewIngredient />
        </div>
      </div>
    </>
  );
};

export default addIngredients;
