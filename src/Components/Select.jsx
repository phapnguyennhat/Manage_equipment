import { memo, useState } from "react";
import {
  Listbox,
  ListboxButton,
  ListboxOption,
  ListboxOptions,
} from "@headlessui/react";
import { CheckIcon, ChevronUpDownIcon } from "@heroicons/react/20/solid";

const cate = ["Đồ trang trí", "Văn phòng phẩm", "Vật dụng sự kiện", "Khác"];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

function Select({ form, setForm }) {
  const [selected, setSelected] = useState(cate[0]);
  return (
    <Listbox
      onChange={(value) => setForm((prev) => ({ ...prev, category: value }))}
      value={form.category}
      name="category"
    >
      {({ open }) => (
        <>
          {/* <Label className="block font-medium leading-6 text-gray-900">
            Assigned to
          </Label> */}
          <div className="relative">
            <ListboxButton className="relative w-full cursor-default rounded-md bg-white p-4 text-left text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 sm:text-sm sm:leading-6">
              <span className="flex items-center">
                <span className="ml-3 block truncate text-2xl">
                  {form.category}
                </span>
              </span>
              <span className="pointer-events-none absolute inset-y-0 right-0 ml-3 flex items-center pr-2">
                <ChevronUpDownIcon
                  className="h-5 w-5 text-gray-400"
                  aria-hidden="true"
                />
              </span>
            </ListboxButton>

            <ListboxOptions
              transition
              className="absolute z-10 mt-16 max-h-56 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none data-[closed]:data-[leave]:opacity-0 data-[leave]:transition data-[leave]:duration-100 data-[leave]:ease-in sm:text-sm"
            >
              {cate.map((item, index) => (
                <ListboxOption
                  key={index}
                  className={({ focus }) =>
                    classNames(
                      focus ? "bg-indigo-600 text-white" : "",
                      !focus ? "text-gray-900" : "",
                      "relative cursor-default select-none py-2 pl-3 pr-9 text-2xl",
                    )
                  }
                  value={item}
                >
                  {({ selected, focus }) => (
                    <>
                      <div className="flex items-center">
                        <span
                          className={classNames(
                            selected ? "font-semibold" : "font-normal",
                            "ml-3 block truncate",
                          )}
                        >
                          {item}
                        </span>
                      </div>

                      {selected ? (
                        <span
                          className={classNames(
                            focus ? "text-white" : "text-indigo-600",
                            "absolute inset-y-0 right-0 flex items-center pr-4",
                          )}
                        >
                          <CheckIcon className="h-5 w-5" aria-hidden="true" />
                        </span>
                      ) : null}
                    </>
                  )}
                </ListboxOption>
              ))}
            </ListboxOptions>
          </div>
        </>
      )}
    </Listbox>
  );
}

export default memo(Select);
