'use client';

import Link from "next/link";
import CarouselCard from "./CarouselCard";


export default function Carousel({ cuisines }) {

  const handlePreviousButtonClick = () => {
    const wrapperEl = document.querySelector(".carousel-main-container");
    wrapperEl?.scrollBy({
      top: 0,
      left: -150,
      behavior: "smooth",
    });
  };

  const handleNextButtonClick = () => {
    const wrapperEl = document.querySelector(".carousel-main-container");
    wrapperEl?.scrollBy({
      top: 0,
      left: 150,
      behavior: "smooth",
    });
  };

  return (
    <div className="relative flex mt-16 rounded-md py-1">
      {/* This conditional render is temporary fix for the issue which causes only buttons to render till data is available to render
          Need a good solution on this */}
      {
        cuisines.length > 0 &&
          <button
            className="absolute top-24 w-8 h-8 rounded-2xl bg-slate-700 shadow-lg previous-carousel-button z-10 text-white"
            onClick={handlePreviousButtonClick}
          >
            {/* Use icon here */}
            {'<'} 
        </button>
      }
      <div className="carousel-main-container flex flex-row overflow-hidden">
        {cuisines.map((card, index) => {
          return (
            <Link href={`restaurents/${card.cuisine}`}>
              <CarouselCard cardInfo={card} />
            </Link>
          );
        })}
      </div>
      {/* This conditional render is temporary fix for the issue which causes only buttons to render till data is available to render
          Need a good solution on this */}
      {
        cuisines.length > 0 &&
        <button
          className="absolute top-24 right-0 w-8 h-8 rounded-2xl bg-slate-700 shadow-lg next-carousel-button z-10 text-white"
          onClick={handleNextButtonClick}
        >
          {/* Use icon here */}
          {'>'}
        </button>
      }
    </div>
  );
}
