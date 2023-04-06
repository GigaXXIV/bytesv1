import { Fragment, useState } from "react";
import { Combobox, Dialog, Transition } from "@headlessui/react";
import { MagnifyingGlassIcon } from "@heroicons/react/20/solid";
import { UsersIcon } from "@heroicons/react/24/outline";
import { ChevronRightIcon } from "@heroicons/react/20/solid";
import Image from "next/image";
import MeasureDropDown from "./MeasureList";
import MeasureList from "./MeasureList";

const checkIcon = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 20 20"
    fill="#57CC99"
    className="w-5 h-5"
  >
    <path
      fillRule="evenodd"
      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
      clipRule="evenodd"
    />
  </svg>
);

const ingredients = [
  {
    id: 1,
    name: "Bun, Brioche, Gourmet",
    quantity: "1",
    measure: "63g Bun",
    kcals: "195",
    kj: "815.1",
    protein: "6",
    carbohydrate: "31.9",
    fat: "4.3",
    fibre: "1.6",
    imageUrl: checkIcon,
  },
  {
    id: 2,
    name: "Cheese, Swiss",
    quantity: "100",
    measure: "g",
    kcals: "418",
    kj: "1747.2",
    protein: "30.8",
    carbohydrate: "0.1",
    fat: "32.4",
    fibre: "0.1",
    imageUrl: checkIcon,
  },
  {
    id: 3,
    name: "Heinz, Special Burger Sauce",
    quantity: "100",
    measure: "ml",
    kcals: "445",
    kj: "1860",
    protein: "1.2",
    carbohydrate: "11.1",
    fat: "44.2",
    fibre: "0.1",
    imageUrl: checkIcon,
  },
  {
    id: 4,
    name: "Beef Mince, Regular, 15% Fat, Raw",
    quantity: "100",
    measure: "g",
    kcals: "226",
    kj: "994.7",
    protein: "19.9",
    carbohydrate: "0.1",
    fat: "15.5",
    fibre: "0.0",
    imageUrl: checkIcon,
  },
];

const measures = [
  { id: 1, unit: "g" },
  { id: 2, unit: "ml" },
  { id: 3, unit: "63g Bun" },
  { id: 4, unit: "50g Egg" },
];

const recent = [ingredients[0], ingredients[1], ingredients[2], ingredients[3]];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function SearchIngredient() {
  const [query, setQuery] = useState("");

  const [open, setOpen] = useState(true);

  // Filters through the ingredients array and returns the ingredients that match the query.
  const filteredIngredient =
    query === ""
      ? []
      : ingredients.filter((ingredient) => {
          return ingredient.name.toLowerCase().includes(query.toLowerCase());
        });

  return (
    <Transition.Root
      show={open}
      as={Fragment}
      afterLeave={() => setQuery("")}
      appear
    >
      {/* Outer Div */}
      <Dialog as="div" className="relative z-10" onClose={setOpen}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-gray-500 bg-opacity-25 transition-opacity" />
        </Transition.Child>

        {/* Content Div */}
        <div className="fixed inset-0 z-10 overflow-y-auto p-4 sm:p-6 md:p-20">
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0 scale-95"
            enterTo="opacity-100 scale-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100 scale-100"
            leaveTo="opacity-0 scale-95"
          >
            {/* Left Side of Dialog */}
            <Dialog.Panel className="mx-auto max-w-3xl transform divide-y divide-gray-100 overflow-hidden rounded-xl bg-white shadow-2xl ring-1 ring-black ring-opacity-5 transition-all">
              <Combobox>
                {({ activeOption }) => (
                  // Search Bar
                  <>
                    <div className="relative">
                      <MagnifyingGlassIcon
                        className="pointer-events-none absolute top-3.5 left-4 h-5 w-5 text-gray-400"
                        aria-hidden="true"
                      />
                      <Combobox.Input
                        className="h-12 w-full border-0 bg-transparent pl-11 pr-4 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm"
                        placeholder="Search..."
                        onChange={(event) => setQuery(event.target.value)}
                      />
                    </div>
                    {/* Search Results */}
                    {(query === "" || filteredIngredient.length > 0) && (
                      <Combobox.Options
                        as="div"
                        static
                        hold
                        className="flex divide-x divide-gray-100"
                      >
                        <div
                          className={classNames(
                            "max-h-96 min-w-0 flex-auto scroll-py-4 overflow-y-auto px-6 py-4",
                            activeOption && "sm:h-96"
                          )}
                        >
                          {/* If there is no search input, and query is an empty string, then return a div with all the recent searches */}
                          {query === "" && (
                            <h2 className="mt-2 mb-4 text-xs font-semibold text-gray-500">
                              Recent searches
                            </h2>
                          )}
                          <div className="-mx-2 text-sm text-gray-700">
                            {(query === "" ? recent : filteredIngredient).map(
                              (ingredient) => (
                                // Each individual food item.
                                <Combobox.Option
                                  as="div"
                                  key={ingredient.id}
                                  value={ingredient}
                                  className={({ active }) =>
                                    classNames(
                                      "flex cursor-default select-none items-center rounded-md p-2",
                                      active && "bg-teal-50 text-gray-900"
                                    )
                                  }
                                >
                                  {({ active }) => (
                                    <>
                                      <div>{checkIcon}</div>
                                      <span className="ml-3 flex-auto truncate">
                                        {ingredient.name}
                                      </span>
                                      {active && (
                                        <ChevronRightIcon
                                          className="ml-3 h-5 w-5 flex-none text-gray-400"
                                          aria-hidden="true"
                                        />
                                      )}
                                    </>
                                  )}
                                </Combobox.Option>
                              )
                            )}
                          </div>
                        </div>

                        {/* Right side of Search Input. Displays once an ingredient has been selected */}
                        {activeOption && (
                          <div className="hidden h-96 w-1/2 flex-none flex-col divide-y divide-gray-100 overflow-y-auto sm:flex">
                            <div className="flex p-6 justify-center text-center">
                              <h2 className="font-semibold text-gray-900">
                                {activeOption.name}
                              </h2>
                            </div>
                            <div className="flex flex-auto flex-col justify-between p-6">
                              <dl className="grid grid-cols-1 gap-x-6 gap-y-3 text-sm text-gray-700">
                                {/* Quantity and Measure */}
                                <div className="gap-2 items-center inline-flex">
                                  <dt className="col-end-1 font-semibold text-gray-900 ">
                                    Quantity
                                  </dt>
                                  <dd className="mr-2">
                                    <Combobox.Input
                                      className="h-6 w-12 border-0 bg-gray-200 p-2 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm text-center rounded-lg"
                                      placeholder={activeOption.quantity}
                                      onChange={(event) =>
                                        setQuery(event.target.value)
                                      }
                                    />
                                  </dd>
                                  <div className="flex items-center justify-center">
                                    <dt className="col-end-1 font-semibold text-gray-900">
                                      Measure
                                    </dt>
                                    <dd className="truncate">
                                      <MeasureList measures={measures} />
                                      {/* {activeOption.measure} */}
                                    </dd>
                                  </div>
                                </div>
                                {/* Protein */}
                                <div className="gap-2 items-center inline-flex py-1">
                                  <dt className="col-end-1 font-semibold text-gray-900">
                                    Protein
                                    <span className="pl-1 font-light text-xs">
                                      &#40;g&#41;
                                    </span>
                                  </dt>
                                  <dd className="truncate">
                                    {activeOption.protein}
                                  </dd>
                                </div>
                                {/* Carbohydrate */}
                                <div className="gap-2 items-center inline-flex py-1">
                                  <dt className="col-end-1 font-semibold text-gray-900">
                                    Carbohydrate
                                    <span className="pl-1 font-light text-xs">
                                      &#40;g&#41;
                                    </span>
                                  </dt>
                                  <dd className="truncate">
                                    {activeOption.carbohydrate}
                                  </dd>
                                </div>
                                {/* Fat */}
                                <div className="gap-2 items-center inline-flex py-1">
                                  <dt className="col-end-1 font-semibold text-gray-900">
                                    Fat
                                    <span className="pl-1 font-light text-xs">
                                      &#40;g&#41;
                                    </span>
                                  </dt>
                                  <dd className="truncate">
                                    {activeOption.fat}
                                  </dd>
                                </div>
                                {/* Fibre */}
                                <div className="gap-2 items-center inline-flex py-1">
                                  <dt className="col-end-1 font-semibold text-gray-900">
                                    Fibre
                                    <span className="pl-1 font-light text-xs">
                                      &#40;g&#41;
                                    </span>
                                  </dt>
                                  <dd className="truncate">
                                    {activeOption.fibre}
                                  </dd>
                                </div>
                                {/* Energy */}
                                <div className="gap-2 items-center inline-flex py-1">
                                  <dt className="col-end-1 font-semibold text-gray-900">
                                    Energy
                                    <span className="pl-1 font-light text-xs">
                                      &#40;kcals&#41;
                                    </span>
                                  </dt>
                                  <dd className="truncate font-regular">
                                    {activeOption.kcals}
                                    <span className="pl-2 font-light text-xs">
                                      / {activeOption.kj}&#40;kJ&#41;
                                    </span>
                                  </dd>
                                </div>
                              </dl>
                              <button
                                type="button"
                                className="my-8 w-full rounded-md bg-indigo-600 py-2 px-3 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                              >
                                Add Ingredient
                              </button>
                            </div>
                          </div>
                        )}
                      </Combobox.Options>
                    )}
                    {query !== "" && filteredIngredient.length === 0 && (
                      <div className="py-14 px-6 text-center text-sm sm:px-14">
                        <UsersIcon
                          className="mx-auto h-6 w-6 text-gray-400"
                          aria-hidden="true"
                        />
                        <p className="mt-4 font-semibold text-gray-900">
                          No ingredients found
                        </p>
                        <p className="mt-2 text-gray-500">
                          We could not find anything with that term. Please try
                          again.
                        </p>
                      </div>
                    )}
                  </>
                )}
              </Combobox>
            </Dialog.Panel>
          </Transition.Child>
        </div>
      </Dialog>
    </Transition.Root>
  );
}
