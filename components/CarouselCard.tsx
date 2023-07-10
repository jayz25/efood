"use client";

import Image from "next/image";

export default function CarouselCard({ cardInfo }) {
    return (
        <div className="flex flex-col px-3">
            <div className="carousel-card w-48 h-48 m-4 shrink-0 shadow-lg rounded-full bg-neutral-50 overflow-hidden relative drop-shadow-2xl">
                <Image src={cardInfo.logo_url} fill={true} alt={cardInfo.name} objectFit="cover"
                />
            </div>
            <div className="flex justify-center font-medium">
                {cardInfo.cuisine}
            </div>
        </div>
    )
}