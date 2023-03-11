import { useState } from "react";
import SearchIngredient from "./SearchIngredient";

const fields = [
  {
    ingredient: "Pasta, Plain, Boiled",
    amount: "100",
    amountType: "g",
    kcals: "163",
    kj: "681.3",
    protein: "5.4",
    carbohydrate: "27.1",
    fat: "0.5",
    fibre: "2.7",
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
              our guide 'Logging Recipe Ingredients' for more information.
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
                      Amount
                    </th>
                    <th
                      scope="col"
                      className="w-32 py-3.5 px-1 text-center text-sm font-semibold text-gray-900"
                    >
                      Amount Type
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
                  {fields.map((field) => (
                    <tr key={field.ingredient}>
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
                        {field.ingredient}
                      </td>
                      <td className="whitespace-nowrap py-4 px-1 text-center text-sm text-gray-500">
                        {field.amount}
                      </td>
                      <td className="whitespace-nowrap py-4 px-1 text-center text-sm text-gray-500">
                        {field.amountType}
                      </td>
                      <td className="whitespace-nowrap py-4 px-1 text-center text-sm text-gray-500">
                        {field.kcals}
                      </td>
                      <td className="whitespace-nowrap py-4 px-1 text-center text-sm text-gray-500">
                        {field.kj}
                      </td>
                      <td className="whitespace-nowrap py-4 px-1 text-center text-sm text-gray-500">
                        {field.protein}
                      </td>
                      <td className="whitespace-nowrap py-4 px-1 text-center text-sm text-gray-500">
                        {field.carbohydrate}
                      </td>
                      <td className="whitespace-nowrap py-4 px-1 text-center text-sm text-gray-500">
                        {field.fat}
                      </td>
                      <td className="whitespace-nowrap py-4 px-1 text-center text-sm text-gray-500">
                        {field.fibre}
                      </td>
                      <td className="w-28 relative whitespace-nowrap py-4 pl-1 pr-1 text-right text-sm font-medium sm:pr-0">
                        <a
                          href="#"
                          className="text-indigo-600 hover:text-indigo-900"
                        >
                          Edit<span className="sr-only">, {field.name}</span>
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
