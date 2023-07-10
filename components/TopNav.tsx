"use client";

import Link from "next/link";
import SearchBar from "./SearchBar";

export const TopNav = () => {
    return (
        <div className="fixed w-full h-20 flex bg-black justify-between items-center z-50">
            <div className="flex items-center items-center ml-4">
                <SearchBar />
            </div>
            <div className="flex flex-row items-center justify-self-end mr-4">
                <div>
                    <Link href={"/"}>
                        <span className="text-white text-4xl font-bold font-capra pr-8 text-white">eFood</span>
                    </Link>

                </div>
                <button className="p-2 rounded-lg bg-gray-300 mr-2 cursor-not-allowed hover:bg-white" disabled={true}>
                    Log In
                </button>
                <button className="p-2 rounded-lg bg-gray-300 ml-2 cursor-not-allowed hover:bg-white" disabled={true}>
                    Sign Up
                </button>
            </div>
        </div>
    )
}