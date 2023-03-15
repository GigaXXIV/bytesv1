import supabase from "@/config/supabaseClient";

import {
  CheckCircleIcon,
  InformationCircleIcon,
  ListBulletIcon,
} from "@heroicons/react/24/outline";
import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";
import AddIngredients from "../Ingredients/AddIngredients";
import ProgressTabs from "./ProgressTabs";
import RecipeInfo from "./RecipeInfo";

export default function RecipeForm() {
  const router = useRouter();
  const [step, setStep] = useState("information");

  console.log(step);

  //   console.log("Recipe State: ", recipe);
  //   console.log("Description State: ", description);

  //   console.log(router.query.category);
  const category = router.query.category;

  const navigation = [
    {
      name: "Information",
      icon: InformationCircleIcon,
      current: step === "Information",
    },
    {
      name: "Ingredients",
      icon: ListBulletIcon,
      current: step === "Ingredients",
    },
    {
      name: "Review",
      icon: CheckCircleIcon,
      current: step === "Review",
    },
  ];

  function classNames(...classes) {
    return classes.filter(Boolean).join(" ");
  }

  return (
    <div className="lg:grid lg:grid-cols-9 lg:gap-x-5">
      {/* Menu Navigation */}
      <aside className="py-6 px-2 sm:px-6 lg:col-span-1 lg:py-0 lg:px-0">
        <nav className="space-y-1">
          {navigation.map((item) => (
            <a
              key={item.name}
              onClick={() => setStep(item.name)}
              className={classNames(
                item.current
                  ? "bg-gray-50 text-indigo-700 hover:bg-white hover:text-indigo-700"
                  : "text-gray-900 hover:bg-gray-50 hover:text-gray-900",
                "group flex items-center rounded-md px-3 py-2 text-sm font-medium"
              )}
              aria-current={item.current ? "page" : undefined}
            >
              <item.icon
                className={classNames(
                  item.current
                    ? "text-indigo-500 group-hover:text-indigo-500"
                    : "text-gray-400 group-hover:text-gray-500",
                  "-ml-1 mr-3 h-6 w-6 flex-shrink-0"
                )}
                aria-hidden="true"
              />
              <span className="truncate">{item.name}</span>
            </a>
          ))}
        </nav>
      </aside>

      {/* Information */}

      <div className="space-y-1 sm:px-6 lg:col-span-8 lg:px-0">
        <div className="">
          <ProgressTabs />
        </div>
        {step === "Information" ? (
          <RecipeInfo category={category} />
        ) : (
          <AddIngredients />
        )}
      </div>
    </div>
  );
}
