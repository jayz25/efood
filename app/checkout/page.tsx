'use client'

import AppProvider from "@/providers/provider"
import { RootState } from "@/redux/store"
import { useState } from "react"
import { useSelector } from "react-redux"

export default function Home() {
    const [isPlacingOrder, setIsPlacingOrder] = useState(false);
    const [OrderConfirmationDialog, setOrderConfirmationDialog] = useState(false);

    const cart = useSelector((state: RootState) => state.cartItems.cart);
    const getPrice = (quantity, price) => {
        return quantity * price;
    }

    function orderConfirmed() {
        setIsPlacingOrder(false);
        setOrderConfirmationDialog(true);
    }
    function getCartTotal() {
        let cartTotal = 0;
        cart.forEach((cartItem) => {
            cartTotal += getPrice(cartItem.quantity, cartItem.pricePerItem);
        })
        return cartTotal;
    }

    return (
        <AppProvider>
            <div className="h-full w-full flex flex-col justify-center px-28">
                <div className="pt-24 px-4">
                    <span className="text-2xl font-medium">
                        Checkout
                    </span>

                    <div className="flex flex-col w-full mt-4 outline outline-1 rounded-sm">
                        <div className="flex flex-row justify-between px-4 py-2">
                            <div className="font-bold">
                                Item
                            </div>
                            <div className="font-bold">
                                Price
                            </div>
                        </div>
                        {cart.map((cartItem) => {
                            return (
                                <>
                                    <div className="flex flex-row justify-between px-4 py-2">
                                        <div>
                                            {cartItem.name}
                                        </div>
                                        <div className="">
                                            <div>
                                                <span className="text-sm ">{cartItem.quantity} x {cartItem.pricePerItem}</span> = <span className="text-lg font-medium">{getPrice(cartItem.quantity, cartItem.pricePerItem)}</span>
                                            </div>
                                        </div>
                                    </div>
                                    <hr />
                                </>
                            )
                        })}
                    </div>
                    <div className="flex justify-end px-4">
                        <div>
                            {`Total: `}<span className="text-lg font-bold">{getCartTotal()}</span>
                        </div>
                    </div>
                    <div className="flex justify-end pt-4">
                        <button className="p-2 bg-red-400 hover:bg-red-100 rounded-lg font-medium" onClick={() => setIsPlacingOrder(true)}>
                            Place order
                        </button>
                    </div>
                    
                </div>
                {isPlacingOrder &&
                        <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gray-200 rounded-lg">
                            <button className="relative bg-red-400 float-right m-1 hover:bg-red-50 rounded-full w-10 h-10 z-10" onClick={() => setIsPlacingOrder(false)}>
                                Close
                            </button>
                            <div className="absolute w-full h-full flex flex-col px-4 pt-12">
                                <p className="my-1">Please enter your details for order</p>
                                <input
                                    id=""
                                    className="border-solid p-1 md:p-2 rounded-lg focus:outline-none my-1"
                                    placeholder={'Name'}
                                />
                                <input
                                    id=""
                                    className="border-solid p-1 md:p-2 rounded-lg focus:outline-none my-1"
                                    placeholder={'Address'}
                                />
                                <input
                                    id=""
                                    className="border-solid p-1 md:p-2 rounded-lg focus:outline-none my-1"
                                    placeholder={'Contact'}
                                />
                                <input
                                    id=""
                                    className="border-solid p-1 md:p-2 rounded-lg focus:outline-none my-1"
                                    placeholder={'Mail'}
                                />
                                <input
                                    id=""
                                    className="border-solid p-1 md:p-2 rounded-lg focus:outline-none my-1"
                                    placeholder={'Delivery instructions'}
                                />
                                <button className="p-2 bg-blue-400 rounded-md hover:bg-white my-1 text-md font-bold" onClick={orderConfirmed}>
                                    Done
                                </button>
                            </div>
                        </div>
                    }
                    {
                        OrderConfirmationDialog &&
                        <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-48 bg-gray-200 rounded-lg">
                            <button className="relative bg-red-400 float-right m-1 hover:bg-red-50 rounded-full w-10 h-10 z-10" onClick={() => setOrderConfirmationDialog(false)}>
                                Close
                            </button>
                            <div className="w-full items-center justify-center bg-gray-400 h-full flex absolute text-2xl font-medium rounded-md">
                                Your meal is on the wayy! 🍽️😄
                            </div>
                        </div>
                    }
            </div>
        </AppProvider>
    )
}