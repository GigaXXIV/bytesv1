import { PlusIcon } from "@heroicons/react/20/solid";
import { useState } from "react";
import IngredientList from "./IngredientList";

export default function NewIngredient() {
  const [list, setList] = useState(true);
  console.log(list);

  const handleList = () => {
    // This function needs to go into the SearchIngredients component.

    // Change the state of setlist to true if there has been an ingredient added by the SearchIngredient component.
    setList(false);
  };

  return (
    <>
      {list ? (
        <div className="max-w-[1200px] min-w-[150px] flex flex-col items-center">
          <svg
            className="mx-auto h-12 w-12 text-gray-400"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            aria-hidden="true"
          >
            <path
              vectorEffect="non-scaling-stroke"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 13h6m-3-3v6m-9 1V7a2 2 0 012-2h6l2 2h6a2 2 0 012 2v8a2 2 0 01-2 2H5a2 2 0 01-2-2z"
            />
          </svg>
          <h3 className="mt-2 text-sm font-semibold text-gray-900">
            No ingredients
          </h3>
          <p className="mt-1 text-sm text-gray-500 text-center">
            Get started by adding your first ingredient
          </p>
          <div className="mt-6">
            <button
              onClick={() => setList(!list)}
              type="button"
              className="inline-flex items-center rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              <PlusIcon className="-ml-0.5 mr-1.5 h-5 w-5" aria-hidden="true" />
              Add Ingredient
            </button>
          </div>
        </div>
      ) : (
        <h1>
          <IngredientList />
        </h1>
      )}
    </>
  );
}
