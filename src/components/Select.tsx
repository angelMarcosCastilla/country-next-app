import { Fragment, useState } from "react";
import { Listbox, Transition } from "@headlessui/react";

export type OptionsType = {
  value: string;
  label: string;
};

interface PropsI {
  options: OptionsType[];
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
}

export default function Select({
  options,
  onChange,
  value,
  placeholder,
}: PropsI) {
  const optionSelect = [
    { value: "", label: placeholder || "Select" },
    ...options,
  ];

  const findLabel = (value: string) => {
    const option = optionSelect.find((option) => option.value === value);
    return option?.label || "";
  };

  return (
    <>
      <Listbox value={value} onChange={onChange}>
        <div className="relative mt-1">
          <Listbox.Button className="relative  min-w-[200px] cursor-default rounded-lg bg-white dark:bg-gray-700 dark:text-slate-200 h-10 py-2 pl-3 pr-10 text-left shadow-md focus:outline-none focus-visible:border-indigo-500 focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 focus-visible:ring-offset-2  sm:text-sm">
            <span className="block truncate">{findLabel(value)}</span>
            <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
              <svg
                stroke="currentColor"
                fill="currentColor"
                strokeWidth="0"
                viewBox="0 0 320 512"
                height="1em"
                width="1em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M143 352.3L7 216.3c-9.4-9.4-9.4-24.6 0-33.9l22.6-22.6c9.4-9.4 24.6-9.4 33.9 0l96.4 96.4 96.4-96.4c9.4-9.4 24.6-9.4 33.9 0l22.6 22.6c9.4 9.4 9.4 24.6 0 33.9l-136 136c-9.2 9.4-24.4 9.4-33.8 0z"></path>
              </svg>
            </span>
          </Listbox.Button>
          <Transition
            as={Fragment}
            leave="transition ease-in duration-100"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Listbox.Options className="absolute mt-1 max-h-96 w-full overflow-auto rounded-md bg-white dark:bg-gray-700 dark:text-slate-200 py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
              {optionSelect.map((option) => (
                <Listbox.Option
                  key={option.value}
                  className={({ active }) =>
                    `relative cursor-default select-none dark:text-slate-200 py-2 px-5 ${
                      active ? "bg-gray-200 dark:bg-gray-500" : ""
                    }`
                  }
                  value={option.value}
                >
                  {({ selected }) => (
                    <>
                      <span
                        className={`block truncate ${
                          selected ? "font-medium" : "font-normal"
                        }`}
                      >
                        {option.label}
                      </span>
                    </>
                  )}
                </Listbox.Option>
              ))}
            </Listbox.Options>
          </Transition>
        </div>
      </Listbox>
    </>
  );
}
