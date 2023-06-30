'use client';
import { Inter } from "@next/font/google";
import Carousel from "@/components/Carousel";
import { EntityPellete } from "@/components/EntityPallete";
import CheckoutBar from "@/components/CheckoutBar";
import { useEffect, useState } from "react";
import AppProvider from "@/providers/provider";

const inter = Inter({ subsets: ["latin"] });

async function getRestaurentEntities(location: string) {
  const res = await fetch(`http://localhost:8000/api/restaurents/${location}/`);
  return res.json();
}



export default function Page() {
  const dataCards = [
    { name: "Sunsetta" },
    { name: "Apple" },
    { name: "Berry" },
    { name: "Watermelon" },
    { name: "Pizaa" },
    { name: "Jade Parcels" },
    { name: "Sango Pearl" },
    { name: "Razor" },
  ];
  const entities = [
    {
      id: "1",
      name: "A Restaurant",
      logo: "",
      cuisines: ["South Indian, Maharashtrian"],
      ratings: "3.5",
      deliveryTime: "",
      liveDiscounts: "50% Off up to 200",
      averagePrice: "250",
    },
    {
      id: "2",
      name: "B Restaurant",
      logo: "",
      cuisines: ["South Indian, North Indian"],
      ratings: "2",
      deliveryTime: "",
      liveDiscounts: "50% Off up to 100",
      averagePrice: "100",
    },
    {
      id: "3",
      name: "C Restaurant",
      logo: "",
      cuisines: ["Chinese, Asian"],
      ratings: "5",
      deliveryTime: "",
      liveDiscounts: "30% Off up to 200",
      averagePrice: "500",
    },
    {
      id: "4",
      name: "D Restaurant",
      logo: "",
      cuisines: ["South Indian, North Indian, Maharashtrian"],
      ratings: "4.9",
      deliveryTime: "",
      liveDiscounts: "10% Off up to 50",
      averagePrice: "100",
    },
    {
      id: "5",
      name: "E Restaurant",
      logo: "",
      cuisines: ["Snacks, Maharashtrian"],
      ratings: "4.8",
      deliveryTime: "",
      liveDiscounts: "10% Off up to 100",
      averagePrice: "50",
    },
    {
      id: "6",
      name: "F Restaurant",
      logo: "3.7",
      cuisines: ["Italian"],
      ratings: "",
      deliveryTime: "",
      liveDiscounts: "20% Off",
      averagePrice: "900",
    },
    {
      id: "7",
      name: "G Restaurant",
      logo: "",
      cuisines: ["Thai, Chinese, Asian"],
      ratings: "2.4",
      deliveryTime: "",
      liveDiscounts: "50% Off up to 200",
      averagePrice: "250",
    },
    {
      id: "8",
      name: "H Restaurant",
      logo: "",
      cuisines: ["Chinese, Japanese, Asian"],
      ratings: "5",
      deliveryTime: "",
      liveDiscounts: "50% Off up to 400",
      averagePrice: "700",
    },
  ];

  const [restaurents, setRestaurents] = useState([]);  
  // Find a better way to fetch data 
    useEffect(() => {
      async function fetchData() {
        const restaurentsData = getRestaurentEntities('Mumbai');
        const [resto] = await Promise.all([restaurentsData])
        setRestaurents(resto);
      }
      fetchData();
    }, []);

  return (
    <AppProvider>
      <main className="flex justify-center">
        <div className="flex flex-col max-w-full xl:max-w-screen-xl justify-center">
          <div className="w-full">
            <Carousel dataCards={dataCards} />
          </div>
          <div className="w-full mt-4">
            <EntityPellete restaurents={restaurents} />
          </div>
        </div>
        <CheckoutBar />
      </main>
    </AppProvider>
  );
}