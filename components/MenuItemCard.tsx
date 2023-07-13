"use client";
import {
  addToCart,
  decrementQuantity,
  incrementQuantity,
  removeItem,
} from "@/redux/cartSlice";
import { AppDispatch, RootState } from "@/redux/store";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Url } from "url";

export interface Dish {
  id: string,
  name: string,
  price: number,
  ratings: number,
  servings: string,
  image_url: Url,
}

interface MenuItemCardProps {
  menuItemArray: Dish[]
}

export default function MenuItemCard({ menuItemArray }: MenuItemCardProps) {
  const menuItem = menuItemArray[0]; // Make this better
  const getCart = useSelector((state: RootState)=> state.cartItems.cart);

  const getItemFromCart = getCart.find((cartItem) => cartItem.id === menuItem.id)
  const quantityAlreadyPresent = getItemFromCart && getItemFromCart.quantity
  const [quantity, setQuantity] = useState(quantityAlreadyPresent || 0);
  const dispatch = useDispatch<AppDispatch>();

  const reduceQuantity = () => {
    if (quantity === 1) {
      dispatch(
        removeItem({
          id: menuItem.id,
        })
      );
    } else {
      dispatch(
        decrementQuantity({
          id: menuItem.id,
        })
      );
    }
    setQuantity((quantity) => quantity - 1);
  };

  const increaseQuantity = () => {
    if (quantity > 0) {
      dispatch(
        incrementQuantity({
          id: menuItem.id,
        })
      );
    } else {
      dispatch(
        addToCart({
          id: menuItem.id,
          name: menuItem.name,
          pricePerItem: menuItem.price,
          restaurentId: menuItem.restaurentId,
          quantity: quantity,
        })
      );
    }
    setQuantity((quantity) => quantity + 1);
  };

  return (
    <div className="h-36 flex flex-row bg-neutral-100 rounded-lg">
      {/* <div className="item-menu-logo h-full w-1/5">Img</div> */}
      <div className="item-menu-info flex flex-col w-4/5">
        {/* TODO: Please remove the pl-2 pt-2 or re-adjust it accordingly once images are added */}
        <div className="flex flex-col pl-2 pt-2">
          <p className="text-xl">{menuItem.name}</p>
          <p className="text-sm">Serves {menuItem.servings}</p>
          <p>⭐{menuItem.ratings}</p>
        </div>
      </div>
      <div className="relative items-center flex flex-row justify-end self-end p-2">
        <p className="px-2 text-md font-medium">₹{menuItem.price}</p>
        {quantity ? (
          <div className="flex flex-row border-2 border-black mx-2 rounded-md w-20 h-8">
            <button
              className="h-full basis-1/3 bg-neutral-700"
              onClick={reduceQuantity}
              disabled={quantity === 0 ? true : false}
            >
              ➖
            </button>
            <div className="h-full basis-1/3 px-2 items-center">{quantity}</div>
            <button
              className="h-full basis-1/3 bg-neutral-700"
              onClick={increaseQuantity}
            >
              ➕
            </button>
          </div>
        ) : (
          <div className="border-2 border-black mx-2 rounded-md text-sm w-20 h-8">
            <button
              className="h-full w-full font-medium"
              onClick={increaseQuantity}
            >
              Add+
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
