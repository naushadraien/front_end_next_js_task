"use client";
import Button from "@/components/ui/button";
import {
  addToCart,
  deleteProductsFromCart,
  removeAProductFromCart,
} from "@/lib/redux/slices/cartSlice";
import { RootState } from "@/lib/redux/store/store";
import { ProductType } from "@/types";
import { Trash } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
const CartItem = () => {
  const dispatch = useDispatch();
  const { cart } = useSelector((state: RootState) => state);

  const handleAdd = (item: ProductType) => {
    dispatch(addToCart({ ...item, quantity: 1 }));
  };

  if (!cart.cartItems.length)
    return (
      <Link href="/">
        <div className="flex justify-center items-center my-20 font-bold text-2xl">
          Cart is Empty
        </div>
      </Link>
    );

  return (
    <div className="flex mt-10 overflow-hidden flex-col">
      <h1 className="font-bold text-2xl flex justify-center items-center">
        Cart Item
      </h1>
      <div className="flex flex-col justify-center lg:flex-row lg:flex-wrap gap-x-14">
        {cart.cartItems.map((item, index) => (
          <div
            key={index}
            className="my-10 flex flex-wrap justify-center items-center"
          >
            <Image
              src={item.image}
              alt={item.title}
              width={200}
              height={200}
              className="mb-4 lg:mx-16 hover:scale-110 duration-300"
            />

            <div className="relative flex flex-col w-64 lg:w-80">
              <div className="flex flex-col">
                <div className="absolute flex justify-end w-full -right-10">
                  <Button
                    onClick={() =>
                      dispatch(deleteProductsFromCart(item.id)) &&
                      toast.error("Item removed from cart")
                    }
                    className="bg-red-500 text-white px-2 py-2 rounded-md max-lg:ml-7"
                  >
                    <Trash size={20} />
                  </Button>
                </div>
                <p className="font-bold lg:text-lg text-md text-purple-700 max-lg:ml-7">
                  {item.title}
                </p>
                <p className="text-slate-500 max-lg:ml-7">{item.category}</p>
                <p className="font-bold max-lg:ml-7">RS. {item.price}</p>
                <div className="flex max-lg:ml-7 my-2">
                  <div
                    className="cursor-pointer rounded-l bg-purple-700 text-white font-bold py-1 px-3.5 duration-100 hover:bg-purple-900 hover:text-blue-50"
                    onClick={() => handleAdd(item)}
                  >
                    +
                  </div>
                  <p className="h-8 w-8 border bg-purple-200 text-center font-bold text-sm flex justify-center items-center">
                    {item.quantity}
                  </p>
                  <div
                    className="cursor-pointer rounded-r bg-purple-700 text-white font-bold py-1 px-3 duration-100 hover:bg-purple-900 hover:text-blue-50"
                    onClick={() => dispatch(removeAProductFromCart(item.id))}
                  >
                    -
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="flex justify-center items-center">
        <div className="h-full rounded-lg border bg-white p-6 shadow-md my-20 w-full md:w-[40%] lg:w-[30%]">
          <div className="mb-2 flex justify-between">
            <p className="text-gray-700">Subtotal</p>
            <p className="text-gray-700">
              Rs {cart.totalPriceofProduct.toFixed(2)}
            </p>
          </div>
          <div className="flex justify-between">
            <p className="text-gray-700">Shipping</p>
            <p className="text-gray-700">Rs 10.99</p>
          </div>
          <hr className="my-4" />
          <div className="flex justify-between">
            <p className="text-lg font-bold text-purple-700">Total</p>
            <div className="">
              <p className="mb-1 text-lg font-bold">
                Rs {(cart.totalPriceofProduct + 10.99).toFixed(2)}
              </p>
              <p className="text-sm text-gray-700">including VAT</p>
            </div>
          </div>
          <Button
            className="mt-6 w-full bg-purple-700 py-1.5 font-medium text-blue-50 hover:bg-purple-900 duration-100 rounded-md"
            onClick={() =>
              toast.error("Checkout functionality will be added soon!")
            }
          >
            Check out
          </Button>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
