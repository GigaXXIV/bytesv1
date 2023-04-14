import { useState } from "react";
import SearchIngredient from "./SearchIngredient";

const ingredients = [
  {
    id: 1,
    name: "Bun, Brioche, Gourmet",
    quantity: "1",
    type: "63g Bun",
    kcals: "195",
    kj: "815.1",
    protein: "6",
    carbohydrate: "31.9",
    fat: "4.3",
    fibre: "1.6",
  },
  {
    id: 2,
    name: "Cheese, Swiss",
    quantity: "100",
    type: "g",
    kcals: "418",
    kj: "1747.2",
    protein: "30.8",
    carbohydrate: "0.1",
    fat: "32.4",
    fibre: "0.1",
  },
  {
    id: 3,
    name: "Heinz, Special Burger Sauce",
    quantity: "100",
    type: "ml",
    kcals: "445",
    kj: "1860",
    protein: "1.2",
    carbohydrate: "11.1",
    fat: "44.2",
    fibre: "0.1",
  },
  {
    id: 4,
    name: "Beef Mince, Regular, 15% Fat, Raw",
    quantity: "100",
    type: "g",
    kcals: "226",
    kj: "994.7",
    protein: "19.9",
    carbohydrate: "0.1",
    fat: "15.5",
    fibre: "0.0",
  },
];

export default function Example() {
  const [searchIngredient, setSearchIngredient] = useState(false);

  return (
    <>
      {searchIngredient ? <SearchIngredient /> : null}

      <div className="px-4 sm:px-6 lg:px-8">
        {/* Header Div - Includes Button */}
        <div className="sm:flex sm:items-center">
          <div className="sm:flex-auto">
            <h1 className="text-base font-semibold leading-6 text-gray-900">
              Recipe Ingredients
            </h1>
            <p className="mt-2 text-sm text-gray-700">
              Please list all ingredients that are found in this recipe. View
              our guide{" "}
              <span className="font-semibold">Logging Recipe Ingredients </span>
              for more information.
            </p>
          </div>
          <div className="mt-4 sm:mt-0 sm:ml-16 sm:flex-none">
            <button
              onClick={(e) => setSearchIngredient(!searchIngredient)}
              type="button"
              className="block rounded-md bg-indigo-600 py-2 px-3 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Add Ingredient
            </button>
          </div>
        </div>

        <div className="mt-8 flow-root">
          <div className="-my-2 -mx-4 overflow-x-auto sm:-mx-6 lg:-mx-8">
            {/* Table Div */}
            <div className="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
              <table className="min-w-full divide-y divide-gray-300">
                {/* Table Header */}
                <thead>
                  <tr>
                    <th
                      scope="col"
                      className="w-20 py-3.5 pl-4 pr-4 text-center text-sm font-semibold text-gray-900 sm:pl-0"
                    >
                      Select
                    </th>
                    <th
                      scope="col"
                      className="w-fit py-3.5 pl-4 pr-1 text-left text-sm font-semibold text-gray-900 sm:pl-0"
                    >
                      Ingredient
                    </th>
                    <th
                      scope="col"
                      className="w-28 py-3.5 px-1 text-center text-sm font-semibold text-gray-900"
                    >
                      Quantity
                    </th>
                    <th
                      scope="col"
                      className="w-32 py-3.5 px-1 text-center text-sm font-semibold text-gray-900"
                    >
                      Type
                    </th>
                    <th
                      scope="col"
                      className="w-24 py-3.5 px-1 text-center text-sm font-semibold text-gray-900"
                    >
                      kcals
                    </th>
                    <th
                      scope="col"
                      className="w-24 py-3.5 px-1 text-center text-sm font-semibold text-gray-900"
                    >
                      kJ
                    </th>
                    <th
                      scope="col"
                      className="w-28 py-3.5 px-1 text-center text-sm font-semibold text-gray-900"
                    >
                      Protein
                    </th>
                    <th
                      scope="col"
                      className="w-32 py-3.5 px-1 text-center text-sm font-semibold text-gray-900"
                    >
                      Carbohdyrate
                    </th>
                    <th
                      scope="col"
                      className="w-28 py-3.5 px-1 text-center text-sm font-semibold text-gray-900"
                    >
                      Fat
                    </th>
                    <th
                      scope="col"
                      className="w-28 py-3.5 px-1 text-center text-sm font-semibold text-gray-900"
                    >
                      Fibre
                    </th>
                    <th
                      scope="col"
                      className="w-28 relative py-3.5 pl-3 pr-4 sm:pr-0"
                    >
                      <span className="sr-only">Edit</span>
                    </th>
                  </tr>
                </thead>

                {/* Table Body */}
                <tbody className="divide-y divide-gray-200">
                  {ingredients.map((ingredient) => (
                    <tr key={ingredient.name}>
                      <td className="w-20  py-4 pl-4 pr-3 sm:pl-0">
                        <div className="flex justify-center h-6 pr-2 pt-1 ">
                          <input
                            id="offers"
                            aria-describedby="offers-description"
                            name="offers"
                            type="checkbox"
                            className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
                          />
                        </div>
                      </td>
                      <td className="w-1/10 whitespace-nowrap py-4 px-1 text-sm text-gray-500">
                        {ingredient.name}
                      </td>
                      <td className="whitespace-nowrap py-4 px-1 text-center text-sm text-gray-500">
                        {ingredient.quantity}
                      </td>
                      <td className="whitespace-nowrap py-4 px-1 text-center text-sm text-gray-500">
                        {ingredient.type}
                      </td>
                      <td className="whitespace-nowrap py-4 px-1 text-center text-sm text-gray-500">
                        {ingredient.kcals}
                      </td>
                      <td className="whitespace-nowrap py-4 px-1 text-center text-sm text-gray-500">
                        {ingredient.kj}
                      </td>
                      <td className="whitespace-nowrap py-4 px-1 text-center text-sm text-gray-500">
                        {ingredient.protein}
                      </td>
                      <td className="whitespace-nowrap py-4 px-1 text-center text-sm text-gray-500">
                        {ingredient.carbohydrate}
                      </td>
                      <td className="whitespace-nowrap py-4 px-1 text-center text-sm text-gray-500">
                        {ingredient.fat}
                      </td>
                      <td className="whitespace-nowrap py-4 px-1 text-center text-sm text-gray-500">
                        {ingredient.fibre}
                      </td>
                      <td className="w-28 relative whitespace-nowrap py-4 pl-1 pr-1 text-right text-sm font-medium sm:pr-0">
                        <a
                          href="#"
                          className="text-indigo-600 hover:text-indigo-900"
                        >
                          Edit
                          <span className="sr-only">, {ingredient.name}</span>
                        </a>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
