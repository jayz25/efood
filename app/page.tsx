import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from './page.module.css'
import Carousel from '@/components/Carousel'
import { TopNav } from '@/components/TopNav'
import { EntityPellete } from '@/components/EntityPallete'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  const dataCards = [{name: 'Sunsetta'}, {name: 'Apple'}, {name: 'Berry'}, {name: 'Watermelon'}, {name: 'Pizaa'}, {name: "Jade Parcels"}, {name: "Sango Pearl"}, {name: "Razor"}]
  const entities = [
    {
      name: "A Restaurant",
      logo: "",
      cuisines: ["South Indian, Maharashtrian"],
      ratings: "3.5",
      deliveryTime: "",
      liveDiscounts: "50% Off up to 200",
      averagePrice: "250"
    },
    {
      name: "B Restaurant",
      logo: "",
      cuisines: ["South Indian, North Indian"],
      ratings: "2",
      deliveryTime: "",
      liveDiscounts: "50% Off up to 100",
      averagePrice: "100"
    },
    {
      name: "C Restaurant",
      logo: "",
      cuisines: ["Chinese, Asian"],
      ratings: "5",
      deliveryTime: "",
      liveDiscounts: "30% Off up to 200",
      averagePrice: "500"
    },
    {
      name: "D Restaurant",
      logo: "",
      cuisines: ["South Indian, North Indian, Maharashtrian"],
      ratings: "4.9",
      deliveryTime: "",
      liveDiscounts: "10% Off up to 50",
      averagePrice: "100"
    },
    {
      name: "E Restaurant",
      logo: "",
      cuisines: ["Snacks, Maharashtrian"],
      ratings: "4.8",
      deliveryTime: "",
      liveDiscounts: "10% Off up to 100",
      averagePrice: "50"
    },
    {
      name: "F Restaurant",
      logo: "3.7",
      cuisines: ["Italian"],
      ratings: "",
      deliveryTime: "",
      liveDiscounts: "20% Off",
      averagePrice: "900"
    },
    {
      name: "G Restaurant",
      logo: "",
      cuisines: ["Thai, Chinese, Asian"],
      ratings: "2.4",
      deliveryTime: "",
      liveDiscounts: "50% Off up to 200",
      averagePrice: "250"
    },
    {
      name: "H Restaurant",
      logo: "",
      cuisines: ["Chinese, Japanese, Asian"],
      ratings: "5",
      deliveryTime: "",
      liveDiscounts: "50% Off up to 400",
      averagePrice: "700"
    }
  ]
  return (
    <main className="flex justify-center">
      <div className="flex flex-col max-w-screen-xl justify-center">
        <div className="max-w-screen-xl">
            <TopNav />
          </div>
          <div className="max-w-screen-xl">
            <Carousel dataCards = {dataCards}/>
          </div>
          <div className="max-w-screen-xl mt-4">
            <EntityPellete entities={entities} />
          </div>
      </div>
    </main>
  )
}
