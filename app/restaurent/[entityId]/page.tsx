import CheckoutBar from "@/components/CheckoutBar";
import RestaurentMenu from "@/components/RestaurentMenu";
import Image from "next/image";

async function getRestaurentInfo(restaurentId) {
  const res = await fetch(
    `https://efood-api-o2ow.onrender.com/api/restaurents/getSingle/${restaurentId}/`);

  if (!res.ok) {
    throw new Error(`Failed to fetch restaurant data: ${res.status}`);
  }

  return res.json();
}

export default async function Home({ params }) {
  let restaurentInfo;

  try {
    restaurentInfo = await getRestaurentInfo(params.entityId);
  } catch (error) {
    console.error(error);
    return <div>Failed to load restaurant information.</div>;
  }

  // Fallback for undefined or incomplete data
  if (!restaurentInfo || !restaurentInfo.name) {
    return <div>Restaurant information is not available.</div>;
  }

  return (
    <>
      <div className="flex justify-center">
        <div className="flex w-full xl:max-w-screen-xl flex-col">
          <div className="relative overflow-hidden food-slideshow-container h-64 bg-neutral-200 w-full mt-2">
            {restaurentInfo.restaurent_page_image && (
              <Image
                src={restaurentInfo.restaurent_page_image}
                alt={restaurentInfo.name || "Restaurant Image"}
                fill={true}
                objectFit="cover"
              />
            )}
          </div>
          <div className="restaurent-contents-wrapper">
            <div className="restaurent-name__header text-3xl font-medium">
              <h1>{restaurentInfo.name}</h1>
            </div>
            <div className="restarent-info__container">
              <div className="text-md">
                <h2>
                  {restaurentInfo.cuisines?.map((cuisine, index) => (
                    <span key={index}>
                      {cuisine}
                      {index < restaurentInfo.cuisines.length - 1 && ", "}
                    </span>
                  ))}
                </h2>
              </div>
              <div className="text-md">
                Open: Timings ({restaurentInfo.opening_time || "11:00"} -{" "}
                {restaurentInfo.closing_time || "22:00"})
              </div>
            </div>
          </div>
          <hr />
          <div className="restaurent-menu">
            <RestaurentMenu menuId={restaurentInfo.menu_id} />
          </div>
        </div>
      </div>
      <CheckoutBar />
    </>
  );
}
