import { Url } from "url";
import MenuItemCard, { Dish } from "./MenuItemCard";

async function getDish(dishId) {
  const res = await fetch(`http://127.0.0.1:8000/api/dishes/getSingle/${dishId}/`)
  return res.json();
}



interface MenuCardProps {
  menuItems: Dish["id"][]
}
export default async function MenuCard({ menuItems }: MenuCardProps) {
  const dishesPromise = menuItems.map((dish) => {
    return getDish(dish);
  });

  const dishes = await Promise.all(dishesPromise);

  return (
    <div className="flex w-full flex-col lg:flex-row flex-wrap">
      {dishes.map((dish) => {
        return (
          <div className="basis-1 lg:basis-1/2 p-1 rounded-lg" key={dish[0].id}>
            <MenuItemCard menuItemArray={dish} />
          </div>
        );
      })}
    </div>
  );
}
