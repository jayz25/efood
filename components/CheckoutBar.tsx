'use client';
import { useSelector } from "react-redux";
import { RootState } from "@/redux/store";
import Link from "next/link";

export default function CheckoutBar() {
  const cart = useSelector((state: RootState) => state.cartItems.cart);
  if (cart.length !== 0) {
    return (
      <div className="flex h-20 bg-neutral-300 fixed bottom-0 w-full rounded-lg justify-end">
        <div className="flex flex-row items-center">
          <div className="mx-10">🛒 {`${cart.length} ${cart.length === 1 ? `dish` : `dishes`} in cart`}</div>
          <Link href={'/checkout'} className="p-2 rounded-lg bg-gray-500 mr-10">Checkout</Link>
        </div>
      </div>
    );
  } else {
    return null;
  }
}
