"use client";
import Button from "@/components/ui/button";
import { addToCart } from "@/lib/redux/slices/cartSlice";
import { RootState } from "@/lib/redux/store/store";
import { ProductType } from "@/types";
import { StarIcon as StarIconOutline } from "@heroicons/react/24/outline";
import { StarIcon } from "@heroicons/react/24/solid";
import { ShoppingCart } from "lucide-react";
import React, { MouseEventHandler } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
interface InfoProps {
  data: ProductType;
}

const Info: React.FC<InfoProps> = ({ data }) => {
  const dispatch = useDispatch();

  const items = useSelector((state: RootState) => state.cart.cartItems);

  const filteredItem = items.find((item: ProductType) => item.id === data.id); //here find method returns the value of the first element in the provided array that satisfies the provided testing function.

  const onAddToCart: MouseEventHandler<HTMLButtonElement> = (event) => {
    event.stopPropagation(); //stops the bubbling of an event to parent elements, preventing any parent event handlers from being executed.
    if (filteredItem?.quantity ?? 0 > 0) {
      toast.error("Item is Already in Cart!");
    } else {
      dispatch(addToCart(data));
      toast.success("Item added to cart!");
    }
  };
  return (
    <div>
      <h1 className="text-lg font-bold text-purple-900">{data.title}</h1>
      <div className="mt-3 flex items-start flex-col gap-3">
        <h2 className="text-sm font-bold text-gray-700">{data.description}</h2>
        <div className="flex items-center text-sm my-4">
          <p>{data?.rating.rate}</p>
          {data?.rating.rate && (
            <div className="flex items-center ml-2 mr-6">
              {/* Display 5 stars but display the rate ones as StarIconOutline  */}
              {Array.from({ length: Math.floor(data.rating.rate) }, (_, i) => (
                <StarIcon key={i} className="h-4 w-4 text-green-700" />
              ))}

              {/* Display the rest of the stars as StarIconOutline  */}
              {Array.from(
                { length: 5 - Math.floor(data.rating.rate) },
                (_, i) => (
                  <StarIconOutline key={i} className="h-4 w-4 text-green-700" />
                )
              )}
            </div>
          )}
          <p className="text-blue-600 hover:underline cursor-pointer text-xs">
            See all {data?.rating.count} reviews
          </p>
        </div>
        <p className="text-md font-bold text-black">Rs. {data?.price}</p>
      </div>
      <hr className="my-4" />
      <div className="flex flex-col gap-y-6">
        <div className="flex items-center gap-x-4">
          <h3 className="font-semibold text-black">Category:</h3>
          <div className="text-purple-900">{data?.category}</div>
        </div>
      </div>
      <div className="mt-10 flex items-center gap-x-3">
        <Button onClick={onAddToCart} className="flex items-center gap-x-2">
          Add To Cart
          <ShoppingCart />
        </Button>
      </div>
    </div>
  );
};

export default Info;
