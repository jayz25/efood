"use client";

import MenuCard from "./MenuCard";

export default function RestaurentMenu() {
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
  return (
    <>
    <div className="w-full flex justify-center">
      <p className="text-2xl font-medium">Menu</p>
    </div>
      <MenuCard menuItems={menuItems} />
    </>
  );
}
