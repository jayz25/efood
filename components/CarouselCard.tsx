"use client";
export default function CarouselCard({ cardInfo }) {
    return (
        <div className="carousel-card w-48 h-48 m-4 shrink-0 shadow-lg rounded-lg bg-neutral-50">
            {cardInfo.name}
        </div>
    )
}