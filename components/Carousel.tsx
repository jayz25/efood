"use client";
import CarouselCard from "./CarouselCard";

export default function Carousel({ dataCards }) {
  const handlePreviousButtonClick = () => {
    const wrapperEl = document.querySelector('.carousel-main-container');
    wrapperEl?.scrollBy({
      top: 0,
      left: -150,
      behavior: "smooth"
    });
  }

  const handleNextButtonClick = () => {
    const wrapperEl = document.querySelector('.carousel-main-container');
    wrapperEl?.scrollBy({
      top: 0,
      left: 150,
      behavior: "smooth"
    });
  }
  
  return (
    <div className="carousel-main-container flex flex-row overflow-hidden bg-zinc-200 mt-16 rounded-md">
      {dataCards?.map((card, index) => {
        return <CarouselCard cardInfo={card} />;
      })}

      <div className="absolute carousel-buttons flex justify-between">
        <button className="relative top-24 w-8 h-8 rounded-2xl bg-orange-50 shadow-lg previous-carousel-button" onClick={handlePreviousButtonClick}>
            P
        </button>
        { /* Assigning left-1100 px considering the wrapper's width and we want next button at the end of carousel, 
            see if there's any better way to achieve this */ }
        <button className="relative left-[1220px] top-24 w-8 h-8 rounded-2xl bg-orange-50 shadow-lg next-carousel-button" onClick={handleNextButtonClick}>
            N
        </button>
      </div>
    </div>
  );
}
