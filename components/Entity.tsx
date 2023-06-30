"use client";

import Link from "next/link";

export const Entity = ({entity}) => {
    console.log('Entity', entity)
    // What we want:
    // Image background (not stretched)
    // Details 
    // -- Restaurent name (Font -I)
    // -- Cuisins (Font -II)
    // -- Average price (Font -III) [Bottom right alignment]
    // -- Ratings (Font -III) [Bottom left alignment]
    // -- Delivery time (Font-III) [Float on top right of Img]
    // -- Live discounts (Font -III) [Float above details section right side]
    return (
            <div className="p-4 h-72">
                <div className="flex bg-slate-200 h-full w-full flex-col rounded-lg">
                    <div className="flex h-3/5 bg-slate-100 w-full rounded-tr-lg rounded-tl-lg">
                        Img
                    </div>
                    <div className="flex h-2/5 bg-slate-300 w-full flex-col p-2 rounded-br-lg rounded-bl-lg">
                        {/* Bigger strong font */}
                        <div className="font-medium text-lg">{entity.name}</div>
                        {/* A bit smaller less strong font */}
                        <div className="font-light text-sm">{entity.cuisines}</div>
                        <div className="font-light text-sm flex flex-row justify-between pt-1/2">
                            <p>{entity.ratings}</p>
                            <p>{entity.averagePrice} for one</p>
                        </div>
                    </div>
                </div>
            </div>
    )
}