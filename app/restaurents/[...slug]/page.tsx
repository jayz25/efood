import { EntityPellete } from "@/components/EntityPallete";

async function getRestaurentEntities(location: string) {
    const res = await fetch(`https://efood-api-o2ow.onrender.com/api/restaurents/${location}/`);
    return res.json();
}

export default async function Home({ params }) {
    const [location, cuisine] = [...params.slug];
    const restaurents = getRestaurentEntities(location);
    const [restaurentsEntities] = await Promise.all([restaurents]);

    const filterByCuisine = restaurentsEntities.filter((entity) => entity.cuisines.includes(cuisine));

    return (
        <div className="flex justify-center pt-16 flex-col">
            <p className="pl-8 pt-8 pb-2 text-2xl font-large">{cuisine} serving restaurents at your location...</p>
            <hr className="mx-6" />
            <EntityPellete restaurents={filterByCuisine} />
        </div>
    )
}