"use client";

import Image from "next/image";
import Link from "next/link";

export const Entity = ({ entity }) => {
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
        <div className="p-5 h-80 hover:p-4 transition duration-300 ease-out hover:ease-in">
            <div className="flex bg-cover bg-center h-full w-full flex-col justify-end rounded-lg hover:shadow-2xl"
            style={{ backgroundImage: `url(${entity.image_url})`}}>
                <div className="restaurant-info-container bg-slate-300 bg-opacity-95  flex h-2/5 w-full flex-col p-2 rounded-br-lg rounded-bl-lg">
                    <div className="font-medium text-2xl">{entity.name}</div>
                    <div className="font-medium text-sm">
                        {/* TODO: Find a better way to achieve this comma and space thing for entities */}
                        {entity.cuisines.map((cuisine, index)=> {
                            if (index !== entity.cuisines.length - 1) {
                                return (
                                    `${cuisine}, `
                                    )
                            }
                            else {
                                return (
                                    `${cuisine} `
                                )
                            }
                        })}
                    </div>
                    <div className="flex flex-row justify-between pt-1/2">
                        <p className="font-medium text-md">{entity.ratings} ⭐</p>
                        <p className="text-sm">₹{`${entity.average_price}`} for one</p>
                    </div>
                    <div className="flex flex-row justify-between">
                        <p className="text-sm font-light bg-green-700 py-1/2 px-2 text-white rounded-lg">{entity.live_discounts}</p>
                        <p className="text-sm font-light justify-self-end">⌛{`${entity.delivery_time}`} mins</p>
                    </div>
                </div>
            </div>
        </div>

    )
}