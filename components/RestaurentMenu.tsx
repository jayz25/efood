// "use client";

import MenuCard from "./MenuCard";

async function getMenu(menuId) {
  const fetchMenu = await fetch(`http://127.0.0.1:8000/api/menu/${menuId}/`);
  return fetchMenu.json();
}
export default async function RestaurentMenu({menuId}) {
  const menuItems = [
    {
      id: "m1",
      name: "Pizza",
      price: "200",
      pic: "",
    },
    {
      id: "m2",
      name: "Burger",
      price: "300",
      pic: "",
    },
    {
      id: "m3",
      name: "Pasta",
      price: "300",
      pic: "",
    },
    {
      id: "m4",
      name: "Lasagna",
      price: "230",
      pic: "",
    },
    {
      id: "m5",
      name: "Risotto",
      price: "2020",
      pic: "",
    },
    {
      id: "m6",
      name: "Coffee",
      price: "100",
      pic: "",
    },
  ];

  const fetchedMenu = getMenu(menuId)
  const [menu] = await Promise.all([fetchedMenu])
  
  return (
    <>
    <div className="w-full flex justify-center">
      <p className="text-2xl font-medium">Menu</p>
    </div>
    {/* Make this menu[0] better, doesn't seem to be a good practice everytime accessing .[0] */}
      <MenuCard menuItems={menu[0].dishes} />
    </>
  );
}
