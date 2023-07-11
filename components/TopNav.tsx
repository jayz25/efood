"use client";

import Link from "next/link";
import SearchBar from "./SearchBar";

export const TopNav = () => {
    return (
        <div className="fixed w-full h-20 flex flex-col-reverse md:flex-row bg-gray-400 justify-between items-center z-50">
            <div className="flex items-center items-center ml-4">
                <SearchBar />
            </div>
            <div className="flex flex-row items-center justify-self-center mr-4">
                <div>
                    <Link href={"/"}>
                        <span className="text-white text-2xl md:text-4xl font-bold font-capra pr-8 text-white hover:text-black">eFood</span>
                    </Link>

                </div>
                <button className="p-1 md:p-2 text-sm md:text-lg rounded-md bg-gray-700 mr-2 text-white hover:text-black cursor-not-allowed hover:bg-white" disabled={true}>
                    Log In
                </button>
                <button className="p-1 md:p-2 text-sm md:text-lg rounded-md bg-gray-700 ml-2 text-white hover:text-black cursor-not-allowed hover:bg-white" disabled={true}>
                    Sign Up
                </button>
            </div>
        </div>
    )
}