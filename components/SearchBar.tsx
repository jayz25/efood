"use client";
import { setLocation } from "@/redux/locationSlice";
import { AppDispatch, RootState } from "@/redux/store";
import Image from "next/image";
import { ChangeEvent, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

export default function SearchBar() {
  const [searchOptions, setSearchOptions] = useState([
    "Mumbai",
    "Pune",
    "Kolkata",
    "Delhi",
    "Bangalore",
  ]);
  const dispatch = useDispatch<AppDispatch>();  
  const selectedLocation = useSelector((state:RootState) => state.location.location);
  const [searchString, setSearchString] = useState<string>("");
  const [isLocationOptionOpen, setIsLocationOptionOpen] =
    useState<boolean>(false);

  const selectFromDropdown = (selectedOption: string) => {
    setSearchString(selectedOption);
    setIsLocationOptionOpen(false);
    
    dispatch(
      setLocation(
        selectedOption,
      )
    );
  }
  const onSearchChange = (event: ChangeEvent<HTMLInputElement>) => {
    setIsLocationOptionOpen(true);
    setSearchString(event.target.value);
  };

  return (
    <div className="relative flex-col border-solid border-2 rounded-lg shadow-xl ml-4 bg-white mb-2 md:mb-0">
      <div className="flex flex-row px-1">
          <Image
            src={"/location-pin.svg"}
            alt="location"
            width={20}
            height={20}
            />
      <input
        id="search-location__input"
        className="border-solid p-1 md:p-2 rounded-lg focus:outline-none"
        value={searchString}
        onChange={onSearchChange}
        onFocus={() => setIsLocationOptionOpen(true)}
        onBlur={() => setIsLocationOptionOpen(false)}
        placeholder={selectedLocation ? `${selectedLocation}` : 'Location'}
        />
        </div>
      <div className="absolute top-12 flex flex-col search-dropdown__content max-h-48 overflow-y-auto bg-neutral-200 w-full z-50 rounded-bl-lg rounded-br-lg">
        {isLocationOptionOpen &&
          searchOptions
            .filter((option) => option.toLowerCase().startsWith(searchString.toLowerCase()))
            .map((option, index) => {
              return (
                <div key={option + index} className="px-2 py-1 hover:bg-slate-700 hover:text-white">
                  <button className="w-full h-full text-start font-medium" onMouseDown={() => selectFromDropdown(option)}>{option}</button>
                </div>
              )
            })}
      </div>
    </div>
  );
}
