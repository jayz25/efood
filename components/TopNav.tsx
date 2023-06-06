"use client";

import SearchBar from "./SearchBar";

export const TopNav = () => {
    return (
        <div className="h-20 flex bg-neutral-200 rounded-bl-lg rounded-br-lg justify-between">
            <div className="flex items-center items-center ml-4">
                <SearchBar />
            </div>
            <div className="flex flex-row items-center justify-self-end mr-4">
                <button className="p-2 rounded-lg bg-gray-300 mr-2 cursor-not-allowed" disabled={true}>
                    Log In
                </button>
                <button className="p-2 rounded-lg bg-gray-300 ml-2 cursor-not-allowed"disabled={true}>
                    Sign Up
                </button>
            </div>
        </div>
    )
}