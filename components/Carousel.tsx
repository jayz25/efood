"use client";
import CarouselCard from "./CarouselCard";

export default function Carousel({ dataCards }) {
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
    <div className="relative flex mt-16 bg-zinc-200 rounded-md ">
      <button
        className="absolute top-24 w-8 h-8 rounded-2xl bg-orange-50 shadow-lg previous-carousel-button"
        onClick={handlePreviousButtonClick}
      >
        P
      </button>
      <div className="carousel-main-container flex flex-row overflow-hidden">
        {dataCards?.map((card, index) => {
          return <CarouselCard cardInfo={card} />;
        })}
      </div>
      <button
        className="absolute top-24 right-0 w-8 h-8 rounded-2xl bg-orange-50 shadow-lg next-carousel-button"
        onClick={handleNextButtonClick}
      >
        N
      </button>
    </div>
  );
}
