"use client";
import { ChangeEvent, MouseEvent, useEffect, useState } from "react";

export default function SearchBar() {
  const [searchOptions, setSearchOptions] = useState([
    "Mumbai",
    "Pune",
    "Aurangabad",
    "Nashik",
    "Delhi",
    "Bangalore",
    "Kolkata",
    "Dehradun",
    "Ahmednagar",
    "Nagpur",
    "Jammu",
    "Jalgaon",
    "Jaisalmer",
    "Jamshedpur",
    "Chandigardh",
  ]);
  const [searchString, setSearchString] = useState<string>("");
  const [isLocationOptionOpen, setIsLocationOptionOpen] =
    useState<boolean>(false);

  const selectFromDropdown = (selectedOption: string) => {
    setSearchString(selectedOption);
    setIsLocationOptionOpen(false);
  }
  const onSearchChange = (event: ChangeEvent<HTMLInputElement>) => {
    setIsLocationOptionOpen(true);
    setSearchString(event.target.value);
  };

  return (
    <div className="relative flex-col border-solid border-2 rounded-lg shadow-xl">
      <input
        id="search-location__input"
        className="border-solid border-2 p-2 rounded-lg"
        value={searchString}
        onChange={onSearchChange}
        onFocus={() => setIsLocationOptionOpen(true)}
        onBlur={() => setIsLocationOptionOpen(false)}
      />
      <div className="absolute top-12 flex flex-col search-dropdown__content max-h-48 overflow-y-auto bg-neutral-400 w-full z-10 rounded-bl-lg rounded-br-lg">
        {isLocationOptionOpen &&
          searchOptions
            .filter((option) => option.toLowerCase().startsWith(searchString.toLowerCase()))
            .map((option, index) => {
              return (
                <div key={option + index} className="px-2 py-1 hover:bg-[#E8E2E2]">
                  <button className="w-full h-full text-start" onMouseDown={() => selectFromDropdown(option)}>{option}</button>
                </div>
              )
            })}
      </div>
    </div>
  );
}
