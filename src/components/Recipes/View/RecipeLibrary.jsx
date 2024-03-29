import { EnvelopeIcon, PhoneIcon } from "@heroicons/react/20/solid";
import { PencilIcon, TrashIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import supabase from "../../../config/supabaseClient";
import Image from "next/image";

export default function RecipeLibrary() {
  const router = useRouter();
  const [recipes, setRecipes] = useState([]);

  const handleFetch = async function getServerSideProps() {
    let { data } = await supabase.from("recipes").select();
    console.log(data);
    setRecipes(data);
  };

  useEffect(() => {
    handleFetch();
  }, []);

  return (
    <div className="max-w-[1800px] flex flex-1 flex-row justify-start">
      <ul
        role="list"
        className="grid grid-cols-1 gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3  xl:grid-cols-4 2xl:grid-cols-5  justify-items-center"
      >
        {recipes.map((recipe) => (
          <li
            key={recipe.recipe}
            className="min-w-[280px] max-w-[280px] col-span-1 flex flex-col divide-y divide-gray-200 rounded-lg bg-white text-center shadow"
          >
            <div className="flex flex-1 flex-col p-8">
              <Image
                className="mx-auto h-32 w-32 flex-shrink-0 rounded-full object-cover"
                src={recipe.image_url}
                width={128}
                height={128}
                alt=""
              />
              <h3 className="mt-6 text-sm font-medium text-gray-900">
                {recipe.recipe}
              </h3>
              <dl className="flex flex-grow flex-col justify-between py-3 ">
                <dt className="sr-only">description</dt>
                <dd className="text-sm text-gray-500">{recipe.description}</dd>
                <dt className="sr-only">status</dt>
                <dd className="mt-3">
                  <span className="rounded-full bg-green-100 px-2 py-1 text-xs font-medium text-green-800">
                    {recipe.status}
                  </span>
                </dd>
              </dl>
            </div>
            <div>
              <div className="-mt-px flex divide-x divide-gray-200">
                <div className="flex w-0 flex-1">
                  <Link
                    href={`mailto:${recipe.email}`}
                    className="relative -mr-px inline-flex w-0 flex-1 items-center justify-center gap-x-3 rounded-bl-lg border border-transparent py-4 text-sm font-semibold text-gray-900"
                  >
                    <PencilIcon
                      className="h-5 w-5 text-gray-400"
                      aria-hidden="true"
                    />
                    Edit
                  </Link>
                </div>
                <div className="-ml-px flex w-0 flex-1">
                  <a
                    href={`tel:${recipe.telephone}`}
                    className="relative inline-flex w-0 flex-1 items-center justify-center gap-x-3 rounded-br-lg border border-transparent py-4 text-sm font-semibold text-gray-900"
                  >
                    <TrashIcon
                      className="h-5 w-5 text-gray-400"
                      aria-hidden="true"
                    />
                    Delete
                  </a>
                </div>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
