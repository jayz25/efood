import RestaurentMenu from "@/components/RestaurentMenu";

export default function Home() {
  return (
    <div className="flex justify-center">
      <div className="flex w-full xl:max-w-screen-xl flex-col">
        <div className="food-slideshow-container h-64 bg-neutral-200 w-full mt-2">
          {/* Image carousel goes here */}
          Image
        </div>
        <div className="restaurent-contents-wrapper">
          <div className="restaurent-name__header text-3xl font-medium">
            <h1>Jayz's Cafe</h1>
          </div>
          <div className="restarent-info__cotainer">
            <div className="text-md">
              <h2>Cuisines</h2>
            </div>
            <div className="text-md">
                Open: Timings (11:00-22:00)
            </div>
          </div>
        </div>
        <hr />
        <div className="restaurent-menu">
            <RestaurentMenu />
        </div>
      </div>
    </div>
  );
}
