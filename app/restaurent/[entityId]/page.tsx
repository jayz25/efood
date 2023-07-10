import CheckoutBar from "@/components/CheckoutBar";
import RestaurentMenu from "@/components/RestaurentMenu";
import Image from "next/image";


async function getRestaurentInfo(restaurentId) {
  const res = await fetch(`http://127.0.0.1:8000/api/restaurents/getSingle/${restaurentId}/`);
  return res.json();
}

export default async function Home({ params }) {
  // const [restaurentInfo, setRestaurentInfo] = useState();
  const restaurentInfo = "";
  const data = getRestaurentInfo(params.entityId);
  const [resto] = await Promise.all([data])

  // Find a better way to fetch data 
  // useEffect(() => {
  //   async function fetchData() {
  //     const restaurentsData = getRestaurentInfo(params.entityId);
  //     const [resto] = await Promise.all([restaurentsData])
  //     setRestaurentInfo(resto);
  //   }
  //   fetchData();
  // }, [restaurentInfo]);

  return (
    <>
      <div className="flex justify-center">
        <div className="flex w-full xl:max-w-screen-xl flex-col">
          <div className="relative overflow-hidden food-slideshow-container h-64 bg-neutral-200 w-full mt-2">
            <Image
              src={resto[0].restaurent_page_image} alt={"Image"} fill={true} objectFit="cover" />

          </div>
          <div className="restaurent-contents-wrapper">
            <div className="restaurent-name__header text-3xl font-medium">
              <h1>{resto[0].name}</h1>
            </div>
            <div className="restarent-info__cotainer">
              <div className="text-md">
                <h2>{resto[0].cuisines?.map((cuisine, index) => {
                  if (index !== resto[0].cuisines.length - 1) {
                    return (
                      `${cuisine}, `
                    )
                  }
                  else {
                    return (
                      `${cuisine} `
                    )
                  }
                })}</h2>
              </div>
              <div className="text-md">
                Open: Timings (11:00-22:00)
              </div>
            </div>
          </div>
          <hr />
          <div className="restaurent-menu">
            <RestaurentMenu menuId={resto[0].menu_id} />
          </div>
        </div>
      </div>
      <CheckoutBar />
    </>
  );
}
