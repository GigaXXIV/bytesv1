import supabase from "@/config/supabaseClient";
import React, { useState } from "react";
import { PlusIcon } from "@heroicons/react/20/solid";

const RecipeInfo = ({ category }) => {
  const [recipe, setRecipe] = useState("");
  const [description, setDescription] = useState("");
  const [serves, setServes] = useState("");
  const [imageURL, setImageURL] = useState("");
  const [formError, setFormError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!recipe || !description) {
      setFormError("Please fill in the Title and Description fields.");
      return;
    }
    // console.log(recipe, description);
    // Post to DB
    const { data, error } = await supabase
      .from("recipes")
      // An array of rows. Each object represents a row. If I wanted 3 rows, I'd have 3 different objects. i.e. [{}, {}, {}]
      // We are inserting 3 different pieces of state.
      .insert([
        {
          recipe: recipe,
          description: description,
          image_url: imageURL,
          serves: serves,
          category: category,
        },
      ])
      .select();
    if (error) {
      console.log(error);
      setFormError("Please fill in all the fields correctly.");
    }
    if (data) {
      setFormError(null);
      console.log(data);
      // redirect to home page.
      //   navigate("/");
    }
  };

  return (
    <form onSubmit={handleSubmit} action="#" method="POST">
      <div className="shadow sm:overflow-hidden sm:rounded-md">
        <div className="space-y-6 bg-white py-6 px-4 sm:p-6">
          <div>
            <h3 className="text-xl font-semibold leading-6 text-gray-900 py-2">
              Recipe Information
            </h3>
            <p className="mt-1 text-sm text-gray-500">
              Please fill out the following information for your patrons.
            </p>
          </div>

          {/* Recipe */}
          <div className="grid grid-cols-6 gap-6">
            <div className="col-span-6 sm:col-span-3">
              <label
                htmlFor="first-name"
                className="block text-sm font-medium leading-6 text-gray-900 pb-1"
              >
                What is this menu item called?
              </label>
              <input
                value={recipe}
                onChange={(e) => setRecipe(e.target.value)}
                placeholder="The OG Cheeseburger"
                type="text"
                name="first-name"
                id="first-name"
                autoComplete="given-name"
                className="mt-2 block w-full rounded-md border-0 py-1.5 px-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>

            {/* Description */}
            <div className="col-span-6 sm:col-span-4 mb-8">
              <label
                htmlFor="email-address"
                className="block text-sm font-medium leading-6 text-gray-900 pb-1"
              >
                Describe it to us. Makes us want it!
              </label>
              <textarea
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                id="description"
                placeholder="A perfectly soft bun, quality, juicy meat that is seasoned well, plenty of cheese and our infamously good secret sauce."
                rows={4}
                className="mt-2 block w-full rounded-md border-0 py-1.5 px-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>

          <div className="col-span-6 sm:col-span-3">
            <label
              htmlFor="first-name"
              className="block text-sm font-medium leading-6 text-gray-900 pb-1"
            >
              How many people does this serve?
            </label>
            <p className="mt-1 text-sm text-gray-500">
              Total number of serves this is for. Leave as 1 for default.
              Numbers only.
            </p>
            <input
              value={serves}
              onChange={(e) => setServes(e.target.value)}
              placeholder="1"
              type="number"
              name="serves"
              id="serves"
              className="max-w-[80px] text-center mt-2 block w-full rounded-md border-0 py-1.5 px-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            />
          </div>

          {/* Temp ImageURL */}
          <div className="col-span-6 sm:col-span-3">
            <label
              htmlFor="first-name"
              className="block text-sm font-medium leading-6 text-gray-900 pb-1"
            >
              Upload a photo of your recipe!
            </label>
            <input
              value={imageURL}
              onChange={(e) => setImageURL(e.target.value)}
              placeholder=""
              type="text"
              name="imageURL"
              id="imageURL"
              className="mt-2 block w-full rounded-md border-0 py-1.5 px-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            />
          </div>

          {/* Divider */}
          <div className="relative">
            <div
              className="absolute inset-0 flex items-center"
              aria-hidden="true"
            >
              <div className="w-full border-t border-gray-300" />
            </div>
            <div className="relative flex justify-center">
              <span className="bg-white px-2 text-gray-500">
                <PlusIcon
                  className="h-5 w-5 text-gray-500"
                  aria-hidden="true"
                />
              </span>
            </div>
          </div>

          {/* Recipe Photo */}
          <div className="col-span-6 sm:col-span-6 lg:col-span-2"></div>
          <div className="col-span-3">
            <label className="block t mt-8 text-xl font-medium leading-6 text-gray-900 py-2">
              Recipe Photo
            </label>
            <p className="mt-1 text-sm text-gray-500 pb-2">
              A picture speaks a 1000 words. What does your picture say?
            </p>
            <div className="mt-2 flex justify-center rounded-md border-2 border-dashed border-gray-300 px-6 pt-5 pb-6">
              <div className="space-y-1 text-center">
                <svg
                  className="mx-auto h-12 w-12 text-gray-400"
                  stroke="currentColor"
                  fill="none"
                  viewBox="0 0 48 48"
                  aria-hidden="true"
                >
                  <path
                    d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02"
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                <div className="flex text-sm text-gray-600">
                  <label
                    htmlFor="file-upload"
                    className="relative cursor-pointer rounded-md bg-white font-medium text-indigo-600 focus-within:outline-none focus-within:ring-2 focus-within:ring-indigo-500 focus-within:ring-offset-2 hover:text-indigo-500 "
                  >
                    <span>Upload a file</span>
                    <input
                      id="file-upload"
                      name="file-upload"
                      type="file"
                      className="sr-only"
                    />
                  </label>
                  <p className="pl-1">or drag and drop</p>
                </div>
                <p className="text-xs text-gray-500">
                  PNG, JPG, GIF up to 10MB
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-gray-50 px-4 py-3 text-right sm:px-6">
          <button
            type="submit"
            className="inline-flex justify-center rounded-md bg-indigo-600 py-2 px-3 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            Save
          </button>
        </div>
      </div>
    </form>
  );
};

export default RecipeInfo;
