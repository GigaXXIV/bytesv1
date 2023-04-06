import { Fragment, useState } from "react";
import { Listbox, Transition } from "@headlessui/react";
import { CheckIcon, ChevronUpDownIcon } from "@heroicons/react/20/solid";

export default function MeasureList({ measures }) {
  const [selectedMeasure, setSelectedMeasure] = useState(measures[0]);

  return (
    // <div className="absolute">
    <Listbox value={selectedMeasure} onChange={setSelectedMeasure}>
      {/* <div className="relative"> */}
      <Listbox.Button className="relative w-full rounded-lg bg-white py-2 pl-3 pr-10 text-left shadow-md focus:outline-none focus-visible:border-indigo-500 focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 focus-visible:ring-offset-2 focus-visible:ring-offset-orange-300 sm:text-sm cursor-pointer">
        <span className="block truncate">{selectedMeasure.unit}</span>
        <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
          <ChevronUpDownIcon
            className="h-5 w-5 text-gray-400"
            aria-hidden="true"
          />
        </span>
      </Listbox.Button>
      <Transition
        as={Fragment}
        leave="transition ease-in duration-100"
        leaveFrom="opacity-100"
        leaveTo="opacity-0"
      >
        <div className="">
          <Listbox.Options className="items-start absolute mt-1 max-h-60 w-40 overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
            {measures.map((measure) => (
              <Listbox.Option
                key={measure.id}
                className={({ active }) =>
                  `relative cursor-default select-none py-2 pl-10 pr-4 ${
                    active ? "bg-teal-50 text-teal-900" : "text-gray-900"
                  }`
                }
                value={measure}
              >
                {({ selected }) => (
                  <>
                    <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-gray-100">
                      <CheckIcon className="h-4 w-4" aria-hidden="true" />
                    </span>
                    <span
                      className={`block truncate ${
                        selected ? "font-medium" : "font-normal"
                      }`}
                    >
                      {measure.unit}
                    </span>
                    {selected ? (
                      <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-teal-400">
                        <CheckIcon className="h-4 w-4" aria-hidden="true" />
                      </span>
                    ) : null}
                  </>
                )}
              </Listbox.Option>
            ))}
          </Listbox.Options>
        </div>
      </Transition>
      {/* </div> */}
    </Listbox>
  );
}
