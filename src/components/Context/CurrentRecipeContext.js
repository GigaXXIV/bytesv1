import React from "react";
import { createContext, useState } from "react";

export const CurrentRecipeContext = createContext({});

export function CurrentRecipeContextProvider({ children }) {
  const [recipeInfo, setRecipeInfo] = useState({});
  const [step, setStep] = useState("Information");

  const handleRecipeInfoSubmit = (recipeData) => {
    setRecipeInfo(recipeData);
    setStep("Ingredients");
    console.log("Recipe State: ", recipeData);
  };

  return (
    <CurrentRecipeContext.Provider
      value={{
        step,
        setStep,
        recipeInfo,
        setRecipeInfo,
        handleRecipeInfoSubmit,
      }}
    >
      {children}
    </CurrentRecipeContext.Provider>
  );
}
